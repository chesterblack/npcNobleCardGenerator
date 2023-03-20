import Selector from './Selector';

export default function NameCard({ npc, house, npcName, setNpcName }) {
	return (
		<div className="name-card">
			<Selector
				selection={npc.name}
				npcName={npcName}
				setNpcName={setNpcName}
			/>
			<div className="title">
				{npc.rank} of {house.name}
			</div>
		</div>
	);
}
