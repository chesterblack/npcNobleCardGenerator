import { npcs } from '@/lib/data';
import { useRouter } from 'next/router';

export default function NpcMenu({ setNpcName, menuOpen, setMenuOpen }) {
	const router = useRouter();
	let options = [];

	function handleClick(key) {
		setNpcName(key);
		setMenuOpen(false);

		router.push(
			{
				pathname: `/${key}`,
			},
			undefined,
			{ shallow: true }
		);
	}

	for (const [key, npc] of Object.entries(npcs)) {
		options.push(
			<div
				className="option"
				onClick={() => {
					handleClick(key);
				}}
			>
				{npc.firstname} {npc.surname}
			</div>
		);
	}

	return (
		<div className={`npc-menu ${menuOpen ? 'open' : ''}`}>{options}</div>
	);
}
