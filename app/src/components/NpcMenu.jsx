import { npcs } from '@/lib/data';

export default function NpcMenu({ setNpcName, menuOpen, setMenuOpen }) {
	let options = [];

	function handleClick(key) {
		setNpcName(key);
		setMenuOpen(false);
	}

	for (const [key, npc] of Object.entries(npcs)) {
		options.push(
			<div
				className="option"
				onClick={() => {
					handleClick(key);
				}}
			>
				{npc.name}
			</div>
		);
	}

	return (
		<div className={`npc-menu ${menuOpen ? 'open' : ''}`}>{options}</div>
	);
}
