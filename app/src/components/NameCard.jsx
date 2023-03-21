import Selector from './Selector';
import CoatOfArms from './CoatOfArms';

export default function NameCard({ npc, house, npcName, setNpcName }) {
	return (
		<div className="name-card">
			<CoatOfArms house={house} />
			<Selector npcName={npcName} setNpcName={setNpcName} />
			<div className="title">
				{npc.rank} of {house.name}
			</div>
		</div>
	);
}
