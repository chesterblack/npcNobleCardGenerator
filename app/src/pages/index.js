import CoatOfArms from "@/components/CoatOfArms";
import ListButton from "@/components/ListButton";
import { categories, houses, npcs } from "@/lib/data";

export default function Home() {
  let categoryLinks = [];
  for (const [key, category] of Object.entries(categories)) {
    let categoryArms = [];

    for (const [npcKey, npc] of Object.entries(npcs)) {
      if (categoryArms.length < 2) {
        if (
          npc.category === key &&
          !categoryArms.includes(houses[npc.house])
        ) {
          categoryArms.push(houses[npc.house]);
        }
      }
    }

    if (categoryArms.length == 1) {
      categoryArms[1] = categoryArms[0];
    }

    if (categoryArms.length < 1) {
      categoryLinks.push(
        <ListButton href={`/${key}`}>
          {category.label}
        </ListButton>
      )
    } else {
      categoryLinks.push(
        <ListButton href={`/${key}`}>
          <CoatOfArms house={categoryArms[0]} />
          <span>{category.label}</span>
          <CoatOfArms house={categoryArms[1]} />
        </ListButton>
      )
    }
  }

  return (
    <main className="home-page">
      <h1>NPCs</h1>
      <hr />
      <div className="link-list">
        {categoryLinks}
      </div>
    </main>
  );
}
