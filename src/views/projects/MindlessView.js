import React from 'react';
import PageCentered from '../../components/PageCentered';
import Link from '../../components/Link';
import Headline from '../../components/Headline';
import Paragraph from '../../components/Paragraph';
import FloatImage from '../../components/FloatImage';

export default function MindlessView() {
	return (
		<PageCentered>
			<Headline sub="Posted on September 17, 2012">Mindless - js13KGames</Headline>

			<FloatImage floatDirection="right" src="/static/images/cards/mindless.jpg" alt="Mindless - js13kGames"/>

			<Paragraph>A little more than a month ago the <Link href="http://js13kgames.com/">js13kGames</Link> competition was announced, and September 13th was the deadline. Entries for the competiton must fit all of their code and assets in a ZIP file no larger than 13 kilobytes. 13Kb isn’t much code but you can stuff around 50Kb of JavaScript into a ZIP that size. When I saw the competition I knew that I whatever game I put together had to be 3D. I began brainstorming for ideas, but for the first week of the competition I focused on writing the engine – thankfully I had a lot of help in the way of Three.js. 3D engines use a lot of math for everything, and I ripped those classes out of Three.js, renamed a few variables, and had a functioning math library. For the rendering I poured over CanvasRenderer to see how it works. I didn’t want to copy the renderer as it would have been a lot of work to remove all of the unnecessary components. Instead, I began to write my own rendering pipeline based on the one in Three.js. After a few long nights my hacked together engine was rendering simple models. Even better, the whole engine compressed down to just 2.5Kb. Now I needed a game to write.</Paragraph>

			<Paragraph>Note: the following contains some spoilers – if you haven’t played <Link href="http://js13kgames.com/entries/mindless/">Mindless</Link> yet go check it out.</Paragraph>

			<Paragraph>When I first learned about the js13KGames competition I asked <Link href="http://www.godblessthechase.com/">Nick Anderson</Link> if he would like to help come up with a compelling game and story. A few weeks before this we had been talking about video games and some different elements he has wanted to see. After some discussion we landed on a zombie apocalypse with a twist – you are one of the infected and are being instructed to kill healthy civilians and scientists.</Paragraph>

			<Paragraph>Nick’s idea was to see how people react to a story where what the “tutorial” is telling you doesn’t match what the characters are saying. We were relying on people’s trust of the introduction messages we have all grown accustomed to at the beginning of games. In Mindless, you are introduced as one of the last healthy people in town and are tasked with killing the scientists who created the virus. After walking down the first hallway, the player has killed a guard, a scientist, and a couple “infecteds” who are actually healthy civilians. The game play is established and nothing has contradicted expectations that the prompt is telling the truth.</Paragraph>

			<Paragraph>The first room has a few (truly) infected people and one scientist. When you walk up to the scientist he pleads for you to stop and spare his life. This is the first time one of the characters talks to the player, and if you don’t kill him or walk away he speaks again. Moving on the player encounters a good mix of guards, scientists, civilians, and infecteds. If the player does not immediatly kill the scientists or civilians (who we are told are actually infected) then some dialog is shown, expressing what is really happening. These characters explain that there is a room on the other side of the lab where scientists have the solution and are trying to heal everyone, introducing the second possible ending.</Paragraph>

			<Paragraph>Response to the story line has been mixed. Some people got it and were really excited about what was going on. Others blasted through the dialog and walked around stabbing everyone. Generally, those who didn’t read much of the dialog were confused about what they were supposed to do, thinking it was a run-and-slash which would have clear direction. It didn’t help that we had to remove 70% of Nick’s dialog to squeeze everything into 13Kb. Overall we learned that people really trust what is said in the introduction and anything which contradicts it should be killed.</Paragraph>

			<Paragraph>In case you missed it – <Link href="http://js13kgames.com/entries/mindless/">Play Mindless</Link></Paragraph>
		</PageCentered>
	);
}

MindlessView.displayName = 'MindlessView';