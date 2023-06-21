import { useRouter } from "next/router";
import { maps } from "@/lib/data";
import NotFound from "@/components/NotFound";

export default function Map() {
  const router = useRouter();

  let map;

  if (router.query.map) {
    map = maps[router.query.map];
  }

  if (!map) {
    return <NotFound />
  }

	return (
		<main>
      <a href={map.image} target="_blank">
        <img className="map" src={map.image} />
      </a>
    </main>
	);
}
