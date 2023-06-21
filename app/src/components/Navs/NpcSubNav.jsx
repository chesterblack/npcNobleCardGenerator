import Link from 'next/link';
import { categories } from '@/lib/data';
import { useRouter } from 'next/router';

export default function NpcSubNav() {
  const router = useRouter();
  let links = [];

  for (const [key, category] of Object.entries(categories)) {
    let classes = router.query.category === key ? 'active' : '';

    links.push(<Link href={`/${key}`} className={classes}>{category.label}</Link>);
  }

  return (
    <nav className="subnav">
      {links}
    </nav>
  );
}