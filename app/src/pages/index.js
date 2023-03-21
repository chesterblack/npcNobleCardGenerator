import { useEffect, useState } from 'react';
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

	return (
		<main>
			<Card npcName={npcName} setNpcName={setNpcName} />
		</main>
	);
}
