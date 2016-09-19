import React from 'react';
import PageCentered from '../components/PageCentered';
import carddata from '../carddata';
import Card from '../components/Card';

export default function HomepageView() {
    return (
		<PageCentered className="centered">
			<Card {...carddata.goblinphysics}/>
			<Card {...carddata.physijs}/>
			<Card {...carddata.mindless}/>
			<Card {...carddata.requestAnimationFrameFriend}/>
			<Card {...carddata.goblinphysics}/>
		</PageCentered>
    );
}

HomepageView.displayName = 'HomepageView';