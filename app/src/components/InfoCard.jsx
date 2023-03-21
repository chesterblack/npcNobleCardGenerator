import { npcs } from '@/lib/data';

export default function InfoCard({ cardOpen, npcName }) {
	return (
		<div className={`info-card ${cardOpen ? 'open' : ''}`}>
			{npcs[npcName].info ?? 'No information available'}
		</div>
	);
}
