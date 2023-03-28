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
};

const houses = {
	sundrian_affairs: {
		name: 'Sundrian Affairs',
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
