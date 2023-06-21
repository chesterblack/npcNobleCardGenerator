import { useRouter } from "next/router";

import NpcSubNav from "./NpcSubNav";
import MapSubNav from "./MapSubNav";

export default function SubNav() {
  const router = useRouter();
  let pageNav;

  switch(router.pathname) {
    case "/":
      pageNav = <NpcSubNav />;
      break;
    case "/map":
      pageNav = <MapSubNav />;
      break;
    default:
      pageNav = <></>;
      break;
  }
  
  return pageNav;
}