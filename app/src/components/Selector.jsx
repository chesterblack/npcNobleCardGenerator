import { npcs } from '@/lib/data';
import { useState } from 'react';
import { Textfit } from 'react-textfit';
import NpcMenu from './NpcMenu';
import CoatOfArms from './CoatOfArms';

export default function Selector({ npcName, setNpcName, house }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const npc = npcs[npcName];

	return (
		<>
			{!menuOpen ? <CoatOfArms house={house} /> : ''}
			<div
				className="name white-text-border"
				onClick={() => {
					setMenuOpen(!menuOpen);
				}}
			>
				<Textfit max={56} mode="single">
					{`${npc.title ?? ''} ${npc.firstname} `}
					<span className="surname">
						{npc.surname}
						{npc.nee ? (
							<span className="nee">née {npc.nee}</span>
						) : (
							''
						)}
					</span>
				</Textfit>
			</div>
			<NpcMenu
				setNpcName={setNpcName}
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
			/>
		</>
	);
}
