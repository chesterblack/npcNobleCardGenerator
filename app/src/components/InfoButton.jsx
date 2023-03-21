import { useState } from 'react';
import InfoCard from './InfoCard';

export default function InfoButton({ npcName }) {
	const [cardOpen, setCardOpen] = useState(false);
	return (
		<>
			<div
				className="info-button"
				onClick={() => {
					setCardOpen(!cardOpen);
				}}
			>
				{cardOpen ? 'X' : 'i'}
			</div>
			<InfoCard cardOpen={cardOpen} npcName={npcName} />
		</>
	);
}
