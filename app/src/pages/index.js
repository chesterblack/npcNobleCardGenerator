import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { npcs } from '@/lib/data';
import Card from '@/components/Card';

export default function Home() {
	const firstNpc = Object.entries(npcs)[0][0];
	const [npcName, setNpcName] = useState(firstNpc);

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
				{preloadedImages}
			</Head>
			<main>
				<Card npcName={npcName} setNpcName={setNpcName} />
			</main>
		</>
	);
}
