import Head from 'next/head';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import { npcs } from '@/lib/data';
import MainNav from '@/components/Navs/MainNav';
import NpcSubNav from '@/components/Navs/NpcSubNav';
import MapSubNav from '@/components/Navs/MapSubNav';

export default function App({ Component, pageProps }) {
	let preloadedImages = [];
	for (const [key, npc] of Object.entries(npcs)) {
		preloadedImages.push(
			<link rel="preload" href={npc.portrait} as="image" />
		);
	}

  const router = useRouter();
  let pageNav;
  switch(router.pathname) {
    case "/category":
    case "/card":
      pageNav = <NpcSubNav />;
      break;
    case "/map":
      pageNav = <MapSubNav />;
      break;
    default:
      pageNav = '';
      break;
  }

  let pageClasses = 'page-wrapper';
  if (pageNav !== '') {
    pageClasses += ' has-subnav';
  }

	return (
		<>
			<Head>
				<title>Noble NPC Card Generator</title>
				<link
					rel="shortcut icon"
					href="/images/arms/Kingdom_of_Sundria.svg"
				/>
				{preloadedImages}
			</Head>
      <div className={pageClasses}>
        <MainNav />
        {pageNav}
        <Component {...pageProps} />
      </div>
		</>
	);
}
