import { useEffect, useState } from 'react';
import Head from 'next/head';
import { npcs } from '@/lib/data';
import Card from '@/components/Card';
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();
	const firstNpc = Object.entries(npcs)[0][0];
	const [npcName, setNpcName] = useState(firstNpc);

	useEffect(() => {
		if (router.query.npc) {
			setNpcName(router.query.npc);
		}
	}, [router.query]);

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
			<main>
				<Card npcName={npcName} setNpcName={setNpcName} />
			</main>
		</>
	);
}
