import Link from 'next/link';

export default function MainNav({}) {
	return (
		<nav className='main-nav'>
			<Link href="/">
				<button>NPCs</button>
			</Link>
			<Link href="/maps">
				<button>Maps</button>
			</Link>
		</nav>
	);
}
