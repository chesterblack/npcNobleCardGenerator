import { npcs, houses } from "@/lib/data";
import ListButton from "./ListButton";

export default function CharacterLinks({category}) {
  let links = [];
  for (const [key, npc] of Object.entries(npcs)) {
    if (npc.category === category) {
      links.push(
        <ListButton
          href={`${category}/${key}`}
          house={houses[npc.house]}
        >
          {npc.firstname} {npc.surname}
        </ListButton>
      );
    }
  }

  return (
    <nav className="category-characters">
      {links}
    </nav>
  );
}