import { npcs } from '@/lib/data';
import { useState } from 'react';
import NpcMenu from './NpcMenu';

export default function Selector({ npcName, setNpcName }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const npc = npcs[npcName];

	return (
		<div className="selector">
			<div
				className="name"
				onClick={() => {
					setMenuOpen(!menuOpen);
				}}
			>
				{`${npc.title} ${npc.name}`}
				{npc.nee ? <span className="nee">née {npc.nee}</span> : ''}
			</div>
			<NpcMenu
				setNpcName={setNpcName}
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
			/>
		</div>
	);
}
