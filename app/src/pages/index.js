import Head from 'next/head';
import { useRouter } from 'next/router';

import { npcs } from '@/lib/data';
import Card from '@/components/Card';
import Selector from '@/components/Selector';
import { useState } from 'react';

export default function Home() {
	const router = useRouter();
	const firstNpc = Object.entries(npcs)[0][0];
	const [npcName, setNpcName] = useState(firstNpc);

	return (
		<>
			<Head>
				<title>Noble NPC Card Generator</title>
			</Head>
			<main>
				<Card npcName={npcName} setNpcName={setNpcName} />
			</main>
		</>
	);
}
