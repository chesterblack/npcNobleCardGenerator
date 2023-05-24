const assetsUrl = 'https://npc.fra1.cdn.digitaloceanspaces.com';

const npcs = {
	luther_rodrig: {
		firstname: 'Luther',
		surname: 'Rodrig',
		rank: 'Baron',
		title: 'Lord',
		house: 'anthelm',
		portrait: `${assetsUrl}/portraits/Rodrig.png`,
		info: "Luther Rodrig is the man who has hired you to cause a ruckus under the disguise of some of Porenn's soldiers",
	},
	alrys_rodrig: {
		firstname: 'Alrys',
		surname: 'Rodrig',
		nee: 'Porenn',
		rank: 'Baroness',
		title: 'Lady',
		house: 'anthelm',
		portrait: `${assetsUrl}/portraits/Alrys.png`,
		info: 'Wife of Luther Rodrig and sister of Porenn, she knows nothing of the plot and Luther Rodrig would like to keep it that way',
	},
	yorrick_rodrig: {
		firstname: 'Yorrick',
		surname: 'Rodrig',
		rank: 'Vassal',
		title: 'Sir',
		house: 'anthelm',
		portrait: `${assetsUrl}/portraits/Yorrick.png`,
		info: 'Luther Rodrig\'s uncle. He is going to be "killed" by yourselves under disguise, after which he will go into self-imposed exile and retire somewhere far away',
	},
	elham_porenn: {
		firstname: 'Elham',
		surname: 'Porenn',
		rank: 'Count',
		title: 'Lord',
		house: 'drasnia',
		portrait: `${assetsUrl}/portraits/Porenn.png`,
		info: "Rodrig's rival, neighbour and brother-in-law. Holds a grudge against Luther as he doesn't think his sister Alrys should've married such a low-ranking noble. Convinced Count Arthas to gift him a parcel of Rodrig's land as revenge",
	},
	wendel_arthas: {
		firstname: 'Wendel',
		surname: 'Arthas',
		rank: 'Count',
		title: 'Lord',
		house: 'ilnoria',
		portrait: `${assetsUrl}/portraits/Arthas.png`,
		info: "The senile Count of Ilnoria. Arthas is Porenn's equal and Rodrig's liegelord",
	},
	hargreeve_abbot: {
		firstname: 'Hargreeve',
		surname: 'Abbot',
		rank: 'Duke',
		title: 'Lord',
		house: 'rencester',
		portrait: `${assetsUrl}/portraits/Abbot.png`,
		info: "The Duke of Rencester, answers directly to the Queen. Rodrig is convinced that Abbot would step in to prevent all-out civil war in his Duchy should he make a move against Porenn, and would rule in Rodrig's favour when this happens",
	},
	freida_breion: {
		firstname: 'Freida',
		surname: 'Breion',
		rank: 'Monarch',
		title: 'Queen',
		house: 'sundria',
		portrait: `${assetsUrl}/portraits/Freida.png`,
		info: 'The Queen of entire kingdom of Sundria, recently ascended to the throne after the death of her father. Petty squabbles between her Barons and Counts are unlikely to come to her attention',
	},
	philon_grey: {
		firstname: 'Philon',
		surname: 'Grey',
		rank: 'Head',
		title: '',
		house: 'sundrian_affairs',
		portrait: `${assetsUrl}/portraits/Philon.png`,
		info: 'The Head of Sundrian Affairs for the Waterdhavian government. Philon Grey approved your prison release upon completing a task for him, and has been your handler for the unofficial work you have been undertaking for Waterdeep',
	},
	eronymous_shale: {
		firstname: 'Eronymous',
		surname: 'Shale',
		rank: 'Open Lord',
		title: 'Lord',
		house: 'waterdeep',
		portrait: `${assetsUrl}/portraits/Shale.png`,
		info: "The new leader of Waterdeep, come to power as a result of the previous Open Lord losing the faith of the Waterdhavian Lord's Council for mishandling the heist case the party were involved in",
	},
  torvius_kindhur: {
    firstname: 'Torvius',
    surname: 'Kindhur',
    rank: 'Quartermaster',
    house: 'sundrian_affairs',
    portrait: `${assetsUrl}/portraits/Torvius.png`,
    info: "The quartermaster at the DSA. Torvius is a grizzled old tiefling who can obtain magic items for you, or sell your items, without you having to spend a long time searching out potential buyers or bargains"
  },
  brav_boartooth: {
    firstname: 'Brav',
    surname: 'Boartooth',
    rank: 'Trainer',
    house: 'sundrian_affairs',
    portrait: `${assetsUrl}/portraits/Brav.png`,
    info: 'Brav Boartooth offers training services in a variety of skills. After spending some time (and money) training with him, you can re-specialise your skills, abilities and proficiencies'
  },
  lilianne_etoinette: {
    firstname: 'Lilianne',
    surname: 'Etionette',
    rank: 'Arcane Advisor',
    house: 'sundrian_affairs',
    portrait: `${assetsUrl}/portraits/Lilianne.png`,
    info: "Lilianne was educated at Universitie Lamberque Academe in her homeland of Sontielle. She doesn't offer specific services to members of the DSA, but instead advises and conducts research on all matters arcane"
  },
  horke_crawfoot: {
    firstname: 'Horke',
    surname: 'Crawfoot',
    rank: 'Stablemaster',
    house: 'sundrian_affairs',
    portrait: `${assetsUrl}/portraits/Horke.png`,
    info: "Horke looks after the messenger pigeons that are essential to the smooth running of the DSA, in addition to managing the grooms and stablehands that care for the DSA's steeds. He's also taken responsibility for raising the hippogriff foal that Vaughn brought back"
  },
  arblocharde_graussiere: {
    firstname: 'Arblocharde',
    surname: 'Graussiere',
    rank: 'Margrave',
    house: 'northmark',
    portrait: `${assetsUrl}/portraits/Arblocharde.png`,
    info: "Arblocharde Graussiere is the soon-to-be Margrave of Northmark. An alumni of Universitie Lamberque Militare, he has served as advisor to a handful of the gentry in Sundria and is generally well-known and well-liked. He is being set up by the DSA as the inheritor of a small parcel of land in northern Sundria that can serve as an important link between Alfstranr and the west"
  }
};

const houses = {
	waterdeep: {
		name: 'Waterdeep',
		color: '#9D919D',
		arms: `${assetsUrl}/arms/Waterdeep.svg`,
		ruler: 'eronymous_shale',
	},
	sundrian_affairs: {
		name: 'the Department of Sundrian Affairs',
		color: '#B2B2B2',
		arms: `${assetsUrl}/arms/Waterdeep.svg`,
		ruler: 'philon_grey',
	},
	anthelm: {
		name: 'Anthelm',
		color: '#C2A5A4',
		arms: '/images/arms/Barony_of_Anthelm.svg',
	},
	drasnia: {
		name: 'Drasnia',
		color: '#8AB1A1',
		arms: '/images/arms/Barony_of_Drascoris.svg',
	},
	ilnoria: {
		name: 'Ilnoria',
		color: '#D0C49B',
		arms: '/images/arms/Barony_of_Ilfin.svg',
	},
	rencester: {
		name: 'Rencester',
		color: '#BFDBF2',
		arms: '/images/arms/Duchy_of_Rencester.svg',
	},
	sundria: {
		name: 'Sundria',
		color: '#FFEEEE',
		arms: '/images/arms/Kingdom_of_Sundria.svg',
	},
};

export { npcs, houses };
