import Head from 'next/head';
import '@/styles/globals.css';
import { npcs } from '@/lib/data';
import MainNav from '@/components/MainNav';

export default function App({ Component, pageProps }) {
	let preloadedImages = [];
	for (const [key, npc] of Object.entries(npcs)) {
		preloadedImages.push(
			<link rel="preload" href={npc.portrait} as="image" />
		);
	}

	return (
		<>
			<Head>
				<title>Noble NPC Card Generator</title>
				<link
					rel="shortcut icon"
					href="/images/arms/Kingdom_of_Sundria.svg"
				/>
				{preloadedImages}
			</Head>
			<MainNav />
			<Component {...pageProps} />
		</>
	);
}
