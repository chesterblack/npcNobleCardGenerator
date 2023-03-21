import { npcs, houses } from '@/lib/data';
import Portrait from './Portrait';
import NameCard from './NameCard';
import InfoButton from './InfoButton';

export default function Card({ npcName, setNpcName }) {
	if (!npcs[npcName]) {
		npcName = 'unknown';
	}
	const npc = npcs[npcName];
	const house = houses[npc.house];

	return (
		<div
			className="card"
			style={{
				'--house-color': house.color,
			}}
		>
			<InfoButton npcName={npcName} />
			<Portrait npc={npc} />
			<NameCard
				npc={npc}
				house={house}
				npcName={npcName}
				setNpcName={setNpcName}
			/>
		</div>
	);
}
