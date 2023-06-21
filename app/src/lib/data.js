const assetsUrl = 'https://npc.fra1.cdn.digitaloceanspaces.com';

const categories = {
  dsa: {
    label: 'The DSA',
    description: "The Department of Sundrian Affairs is a clandestine organisation run by Philon Grey for the Waterdhavian government. It's goal is to use the kingdom of Sundria as a foothold to expand into neighbouring Alfstranr.",
  },
  sundrian_nobles: {
    label: "Sundrian Nobles",
    description: "The feudal society of Sundria means there is a host of landed nobility that own the overwhelming majority of the land in the kingdom. Each noble is in a ordered hierarchy - the kingdom is split into duchies, which are then split into counties, which are then even further split into baronies."
  },
  misc: {
    label: 'Miscellaneous',
    description: "The other characters you have encountered or heard about on your adventures."
  }
};

const npcs = {
  freida_breion: {
		firstname: 'Freida',
		surname: 'Breion',
		rank: 'Monarch',
		title: 'Queen',
		house: 'sundria',
		portrait: `${assetsUrl}/portraits/Freida.png`,
		info: 'The Queen of entire kingdom of Sundria, recently ascended to the throne after the death of her father. Petty squabbles between her Barons and Counts are unlikely to come to her attention',
    category: 'sundrian_nobles',
	},
  philon_grey: {
		firstname: 'Philon',
		surname: 'Grey',
		rank: 'Head',
		title: '',
		house: 'sundrian_affairs',
		portrait: `${assetsUrl}/portraits/Philon.png`,
		info: 'The Head of the Department Sundrian Affairs for the Waterdhavian government. Philon Grey approved your prison release upon completing a task for him, and has been your handler for the unofficial work you have been undertaking for Waterdeep ever since',
    category: 'dsa',
	},
	luther_rodrig: {
		firstname: 'Luther',
		surname: 'Rodrig',
		rank: 'Baron',
		title: 'Lord',
		house: 'anthelm',
		portrait: `${assetsUrl}/portraits/Rodrig.png`,
		info: "Luther Rodrig is the man who has hired you to cause a ruckus under the disguise of some of Porenn's soldiers",
    category: 'sundrian_nobles',
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
    category: 'sundrian_nobles',
	},
	yorrick_rodrig: {
		firstname: 'Yorrick',
		surname: 'Rodrig',
		rank: 'Vassal',
		title: 'Sir',
		house: 'anthelm',
		portrait: `${assetsUrl}/portraits/Yorrick.png`,
		info: 'Luther Rodrig\'s uncle. He is going to be "killed" by yourselves under disguise, after which he will go into self-imposed exile and retire somewhere far away',
    category: 'sundrian_nobles',
	},
	elham_porenn: {
		firstname: 'Elham',
		surname: 'Porenn',
		rank: 'Count',
		title: 'Lord',
		house: 'drasnia',
		portrait: `${assetsUrl}/portraits/Porenn.png`,
		info: "Rodrig's rival, neighbour and brother-in-law. Holds a grudge against Luther as he doesn't think his sister Alrys should've married such a low-ranking noble. Convinced Count Arthas to gift him a parcel of Rodrig's land as revenge",
    category: 'sundrian_nobles',
	},
	wendel_arthas: {
		firstname: 'Wendel',
		surname: 'Arthas',
		rank: 'Count',
		title: 'Lord',
		house: 'ilnoria',
		portrait: `${assetsUrl}/portraits/Arthas.png`,
		info: "The senile Count of Ilnoria. Arthas is Porenn's equal and Rodrig's liegelord",
    category: 'sundrian_nobles',
	},
	hargreeve_abbot: {
		firstname: 'Hargreeve',
		surname: 'Abbot',
		rank: 'Duke',
		title: 'Lord',
		house: 'rencester',
		portrait: `${assetsUrl}/portraits/Abbot.png`,
		info: "The Duke of Rencester, answers directly to the Queen. Rodrig is convinced that Abbot would step in to prevent all-out civil war in his Duchy should he make a move against Porenn, and would rule in Rodrig's favour when this happens",
    category: 'sundrian_nobles',
	},
	eronymous_shale: {
		firstname: 'Eronymous',
		surname: 'Shale',
		rank: 'Open Lord',
		title: 'Lord',
		house: 'waterdeep',
		portrait: `${assetsUrl}/portraits/Shale.png`,
		info: "The new leader of Waterdeep, come to power as a result of the previous Open Lord losing the faith of the Waterdhavian Lord's Council for mishandling the heist case the party were involved in",
    category: 'misc',
	},
  torvius_kindhur: {
    firstname: 'Torvius',
    surname: 'Kindhur',
    rank: 'Quartermaster',
    house: 'sundrian_affairs',
    portrait: `${assetsUrl}/portraits/Torvius.png`,
    info: "The quartermaster at the DSA. Torvius is a grizzled old tiefling who can obtain magic items for you, or sell your items, without you having to spend a long time searching out potential buyers or bargains",
    category: 'dsa',
  },
  brav_boartooth: {
    firstname: 'Brav',
    surname: 'Boartooth',
    rank: 'Trainer',
    house: 'sundrian_affairs',
    portrait: `${assetsUrl}/portraits/Brav.png`,
    info: 'Brav Boartooth offers training services in a variety of skills. After spending some time (and money) training with him, you can re-specialise your skills, abilities and proficiencies',
    category: 'dsa',
  },
  lilianne_etoinette: {
    firstname: 'Lilianne',
    surname: 'Etionette',
    rank: 'Arcane Advisor',
    house: 'sundrian_affairs',
    portrait: `${assetsUrl}/portraits/Lilianne.png`,
    info: "Lilianne was educated at Universitie Lamberque Academe in her homeland of Sontielle. She doesn't offer specific services to members of the DSA, but instead advises and conducts research on all matters arcane",
    category: 'dsa',
  },
  horke_crawfoot: {
    firstname: 'Horke',
    surname: 'Crawfoot',
    rank: 'Stablemaster',
    house: 'sundrian_affairs',
    portrait: `${assetsUrl}/portraits/Horke.png`,
    info: "Horke looks after the messenger pigeons that are essential to the smooth running of the DSA, in addition to managing the grooms and stablehands that care for the DSA's steeds. He's also taken responsibility for raising the hippogriff foal that Vaughn brought back",
    category: 'dsa',
  },
  arblocharde_graussiere: {
    firstname: 'Arblocharde',
    surname: 'Graussiere',
    rank: 'Puppet',
    house: 'sundrian_affairs',
    portrait: `${assetsUrl}/portraits/Arblocharde.png`,
    info: "Arblocharde Graussiere is the soon-to-be Margrave of Northmark. An alumni of Universitie Lamberque Militare, he has served as advisor to a handful of the gentry in Sundria and is generally well-known and well-liked. He is being set up by the DSA as the inheritor of a small parcel of land in northern Sundria that can serve as an important link between Alfstranr and the west",
    category: 'dsa',
  },
  samantha_freimuller: {
    firstname: 'Samantha',
    surname: 'Freimuller',
    rank: 'Steward',
    house: 'sundrian_affairs',
    portrait: `${assetsUrl}/portraits/Samantha.png`,
    info: "Samantha Freimuller is the sister of Julianna, and serves as the steward of the department. She wears many hats, leading recruitment, information gathering, supply and logistics - as well as running the tavern front",
    category: 'dsa',
  },
  julianna_freimuller: {
    firstname: 'Julianna',
    surname: 'Freimuller',
    rank: 'Strategist',
    house: 'sundrian_affairs',
    portrait: `${assetsUrl}/portraits/Julianna.png`,
    info: "Sam Freimuller's younger sister, Julianna is Philon Grey's right hand, advising and acting on many of the political machinations of the department",
    category: 'dsa',
  },
  hogan_bree: {
    firstname: 'Hogan',
    surname: 'Bree',
    rank: 'Scout',
    house: 'sundrian_affairs',
    portrait: `${assetsUrl}/portraits/Hogan.png`,
    info: "One half of the scouts assigned to you to help out with clearing Northmark of the invading pirates. Hogan is the elder of the two, and has a much more analytical mind than his brother",
    category: 'dsa',
  },
  haldir_bree: {
    firstname: 'Haldir',
    surname: 'Bree',
    rank: 'Scout',
    house: 'sundrian_affairs',
    portrait: `${assetsUrl}/portraits/Haldir.png`,
    info: "The younger brother of Hogan Bree, Haldir is an expert in stealth, sneaking in and out of the pirate camps to relay information back to his brother and steal supplies",
    category: 'dsa',
  },
  ironfell_kobolds: {
    firstname: 'Ironfell',
    surname: 'Kobolds',
    rank: 'Owners',
    house: 'ironfell',
    portrait: `${assetsUrl}/portraits/Kobolds.png`,
    info: "The ten kobold brothers who run the Ironfell mine in Northmark. You're currently doing your best to rescue them from a horde of deepsea kuo-toa and their ghoulish minions",
    category: 'misc',
  },
  palmedes_fry: {
    firstname: 'Palmedes',
    surname: 'Fry',
    rank: 'Agent',
    house: 'sundrian_affairs',
    portrait: `${assetsUrl}/portraits/Palmedes.png`,
    info: "A cleric of Lathander under the employ of the DSA. You requisitioned him as a healer to assist you with the reclamation of Northmark",
    category: 'dsa',
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
		arms: `${assetsUrl}/arms/DSA.svg`,
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
  northmark: {
    name: 'Northmark',
    color: '#5BA87E',
    arms: `${assetsUrl}/arms/Northmark.svg`,
  },
  ironfell: {
    name: 'the Ironfell Mines',
    color: '#a0948c',
    arms: `${assetsUrl}/arms/Northmark.svg`,
  }
};

const maps = {
  penninsula: {
    label: 'The Penninsula',
    image: `${assetsUrl}/maps/Penninsula.jpg`
  },
  sundria: {
    label: 'Sundria',
    image: `${assetsUrl}/maps/Sundria.jpg`
  },
  northmark: {
    label: 'Northmark',
    image: `${assetsUrl}/maps/Northmark.jpg`
  },
  rencester: {
    label: 'Rencester',
    image: `${assetsUrl}/maps/Rencester.jpg`
  },
};

export { npcs, houses, categories, maps };
