import React from 'react';
import PageCentered from '../../components/PageCentered';
import Link from '../../components/Link';
import Headline from '../../components/Headline';
import Paragraph from '../../components/Paragraph';
import JSHighlight from '../../components/JSHighlight';

export default function RAFView() {
	return (
		<PageCentered>
			<Headline sub="Posted on June 11, 2012">requestAnimationFrame is not your (logic’s) friend</Headline>
			
			<Paragraph>If you have been anywhere but under a rock then you have heard about Javascript’s new
				requestAnimationFrame function. You have probably used the <Link
					href="http://paulirish.com/2011/requestanimationframe-for-smart-animating/">shim posted by Paul
					Irish</Link>, may have tinkered with the <Link
					href="http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating">version
					created by Opera developer Erik Möller</Link>, or even read <Link
					href="http://www.html5rocks.com/en/tutorials/speed/animations/">various</Link> articles <Link
					href="http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision">explaining</Link>
				how to <Link href="http://creativejs.com/resources/requestanimationframe/">best use
					it</Link>.</Paragraph>
			
			<Paragraph>I think requestAnimationFrame is a great addition to Javascript, but these two points need some
				emphasizing:</Paragraph>
			
			<ul>
				<li>Use requestAnimationFrame for animations / screen updates</li>
				<li>Do not use it for anything else (especially game logic)</li>
			</ul>
			
			<Headline type="h2">Quick example</Headline>
			
			<Paragraph>What exactly does this mean? Here’s a short demonstration; the top code block relies on
				requestAnimationFrame to handle everything while the second block has the game logic separated out from
				the graphics.</Paragraph>
			
			<JSHighlight
				code={`function render() {
[...] // Code to update the DOM, or Canvas,or anything else graphics-related

[...] // Update the player's location, health, or anything else logic-related

requestAnimationFrame(render);
}`}
			/>
			
			<JSHighlight
				code={`function render() {
[...] // Code to update the DOM, or Canvas, or anything else graphics-related

requestAnimationFrame(render);
}

function gameStep() {
[...] // Update the player's location, health, or anything else logic-related

setTimeout(gameStep, 1000 / 60); // process the game logic at a target 60 FPS.
}`}
			/>
			
			<Headline type="h2">The Growing Trend</Headline>
			
			<Paragraph>I’m just as guilty of abusing requestAnimationFrame as anyone else. In my <Link
				href="http://chandlerprall.github.com/Physijs/">physics plugin</Link> for Three.js I’m still using
				requestAnimationFrame to schedule both the physics updates as well as the rendering. The physics is
				handled in a web worker to avoid slowing the graphics framerate, but that simulation is still bound to
				the rendering because it is called from requestAnimationFrame. If the physics engine isn’t ready for
				another update until after the graphics render then it will sit around doing nothing for 10-15ms until
				requestAnimationFrame fires again. Changing the simulation loop to use setTimeout separates the logic
				from the graphics code and speeds up the whole demo by more than 30% in my tests – increasing the
				simulation’s effective FPS from 14 to over 20.</Paragraph>
			
			<Paragraph>One common way to use requestAnimationFrame for game logic is to use a delta value to determine
				how much time has actually passed since the last update; in fact this is a smart thing to do whether
				your use the requestAnimationFrame or setTimeout method. However, relying on just this delta means your
				logic code is still bound to the graphics loop which can cause unexpected results – say in a multiplayer
				environment when the user will want their actions to be reflected immediately on the server instead of
				waiting for some graphics layer to first run.</Paragraph>
			
			<Paragraph>You might think that this use of requestAnimationFrame is only an isolated issue but recently
				more people have been noticing its impact. Just a couple of days ago someone came into the #threejs IRC
				channel with this question:</Paragraph>
			
			<quote>
				Hi there, I’ve a short question…
				
				I recently updated my code using requestAnimationFrame(), now my animation runs as fast as possible,
				where before it was running at fixed 30fps
				
				i implemented a navigation through the space using the cursor-keys, but now the navigation-speed depends
				on the speed of the browser/computer
			</quote>
			
			<Paragraph>The solution was to move his game logic out of the requestAnimationFrame loop and put it in a
				separate loop driven by setTimeout. There are in fact a few things which will cause a
				requestAnimationFrame-based loop to run at different speeds.</Paragraph>
			
			<ul>
				<li>requestAnimationFrame is designed to speed up and slow down to match the monitor’s refresh rate. If
					you rely on it to drive logic then your game will play at different speeds depending on how quickly
					the monitor updates.
				</li>
				<li>When a brower tab other than your page is selected the browser will slow down calls to your
					requestAnimationFrame loop – typically dropping to once per second. When your page is not being
					displayed there is no point in rendering anything on it.
				</li>
				<li>A browser may throttle calls to your render function if the computer is in battery conservation
					mode. One of the biggest drains on a laptop battery is graphics and reducing how often draws occur
					has a big impact on battery life. If your code depends on requestAnimationFrame then it could slow
					down dramatically when the battery level is low.
				</li>
			</ul>
			
			<Headline type="h2">Take away</Headline>
			
			<Paragraph>If you need to make recurring updates to something on the screen such as DOM changes or canvas
				drawing then you should definitely use requestAnimationFrame. But if you need to regularly make updates
				to data then setTimeout is still your friend. Using requestAnimationFrame and setTimeout together is not
				evil nor is it duplicating functionality. These functions are allies, not enemies, and when used
				together properly they can create robust user-friendly applications with the best of both
				worlds.</Paragraph>
		</PageCentered>
	);
}

RAFView.displayName = 'RAFView';