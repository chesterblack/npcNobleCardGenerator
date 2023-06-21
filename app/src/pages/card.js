import { useEffect, useState } from 'react';
import { npcs, categories } from '@/lib/data';
import Card from '@/components/Card';
import { useRouter } from 'next/router';
import NotFound from '@/components/NotFound';

export default function CardPage() {
	const router = useRouter();
	const firstNpc = Object.entries(npcs)[0][0];

  const [notFound, setNotFound] = useState(false);
	const [npcName, setNpcName] = useState(false);

	useEffect(() => {
    if (router.query.category) {
      if (router.query.npc) {
        if (router.query.category === npcs[router.query.npc]?.category) {
          setNpcName(router.query.npc);
        } else {
          setNotFound(true);
        }
      }
    };
	}, [router.query]);

  if (notFound) {
    return <NotFound />;
  }

  return (
    <main>
      <Card npcName={npcName ? npcName : firstNpc} setNpcName={setNpcName} />
    </main>
  );
}
