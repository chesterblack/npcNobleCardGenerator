import { npcs, houses } from "@/lib/data";
import Link from "next/link";
import CoatOfArms from "./CoatOfArms";

export default function CharacterLinks({category}) {
  let links = [];
  for (const [key, npc] of Object.entries(npcs)) {
    if (npc.category === category) {
      links.push(
        <Link
          className="category-character"
          href={`${category}/${key}`}
          style={{
            '--house-color': houses[npc.house].color
          }}
        >
          <CoatOfArms house={houses[npc.house]} />
          {npc.firstname} {npc.surname}
        </Link>
      );
    }
  }

  return (
    <nav className="category-characters">
      {links}
    </nav>
  );
}