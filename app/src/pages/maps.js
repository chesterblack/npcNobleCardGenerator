import { maps } from "@/lib/data"
import ListButton from "@/components/ListButton";

export default function Maps() {
  let mapLinks = [];
  for (const [key, map] of Object.entries(maps)) {
    mapLinks.push(
      <ListButton href={`/maps/${key}`}>
        {map.label}
      </ListButton>
    );
  };

  return (
    <main className="maps-page">
      <h1>Maps</h1>
      <hr />
      <div className="link-list">
        {mapLinks}
      </div>
    </main>
  );
}