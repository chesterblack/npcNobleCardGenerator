import Link from "next/link";
import { useRouter } from "next/router";
import { maps } from "@/lib/data";

export default function NpcSubNav() {
  const router = useRouter();
  let links = [];

  for (const [key, map] of Object.entries(maps)) {
    let classes = router.query.map === key ? 'active' : '';

    links.push(
      <Link href={`/maps/${key}`} className={classes}>
        {map.label}
      </Link>
    );
  }

  return (
    <nav className="subnav">
      {links}
    </nav>
  );
}