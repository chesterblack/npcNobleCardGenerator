import { npcs } from "@/lib/data";
import Link from "next/link";

export default function CharacterLinks({category}) {
  let links = [];
  for (const [key, npc] of Object.entries(npcs)) {
    if (npc.category === category) {
      links.push(
        <Link href={`${category}/${key}`}>
          {npc.firstname} {npc.surname}
        </Link>
      );
    }
  }

  return links;
}