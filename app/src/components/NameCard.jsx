import Selector from './Selector';

export default function NameCard({ npc, house, npcName, setNpcName }) {
	return (
		<div className="name-card">
			<Selector npcName={npcName} setNpcName={setNpcName} house={house} />
			<div className="title">
				{npc.rank} of {house.name}
			</div>
		</div>
	);
}
