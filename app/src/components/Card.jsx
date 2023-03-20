import { npcs, houses } from '@/lib/data';
import CoatOfArms from './CoatOfArms';
import Portrait from './Portrait';
import NameCard from './NameCard';

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
			<CoatOfArms house={house} />
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
