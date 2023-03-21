import Link from 'next/link';

export default function MainNav({}) {
	return (
		<nav>
			<Link href="/">
				<button>NPCs</button>
			</Link>
			<Link href="/map">
				<button>Map</button>
			</Link>
			<Link href="/org-chart">
				<button>Org Chart</button>
			</Link>
		</nav>
	);
}
