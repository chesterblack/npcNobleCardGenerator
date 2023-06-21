import { npcs } from '@/lib/data';
import { useRouter } from 'next/router';

export default function NpcMenu({ setNpcName, menuOpen, setMenuOpen }) {
	const router = useRouter();
	let options = [];

	function handleClick(key, cat) {
		setNpcName(key);
		setMenuOpen(false);

		router.push(
			{
				pathname: `/${cat}/${key}`,
			},
			undefined,
			{ shallow: true }
		);
	}

	for (const [key, npc] of Object.entries(npcs)) {
    if (
      !router.query.category || 
      (router.query.category && router.query.category === npc.category)
    ) {
      options.push(
        <div
          className="option"
          onClick={() => {
            handleClick(key, npc.category);
          }}
        >
          {npc.firstname} {npc.surname}
        </div>
      );
    }
	}

	return (
		<div className={`npc-menu ${menuOpen ? 'open' : ''}`}>{options}</div>
	);
}
