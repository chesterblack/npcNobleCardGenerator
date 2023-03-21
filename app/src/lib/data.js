const npcs = {
	luther_rodrig: {
		firstname: 'Luther',
		surname: 'Rodrig',
		rank: 'Baron',
		title: 'Lord',
		house: 'anthelm',
		portrait: '/images/portraits/Rodrig.png',
		info: "Luther Rodrig is the man who has hired you to cause a ruckus under the disguise of some of Porenn's soldiers",
	},
	alrys_rodrig: {
		firstname: 'Alrys',
		surname: 'Rodrig',
		nee: 'Porenn',
		rank: 'Baroness',
		title: 'Lady',
		house: 'anthelm',
		portrait: '/images/portraits/Alrys.png',
		info: 'Wife of Luther Rodrig and sister of Porenn, she knows nothing of the plot and Luther Rodrig would like to keep it that way',
	},
	yorrick_rodrig: {
		firstname: 'Yorrick',
		surname: 'Rodrig',
		rank: 'Vassal',
		title: 'Sir',
		house: 'anthelm',
		portrait: '/images/portraits/Yorrick.png',
		info: 'Luther Rodrig\'s uncle. He is going to be "killed" by yourselves under disguise, after which he will go into self-imposed exile and retire somewhere far away',
	},
	elham_porenn: {
		firstname: 'Elham',
		surname: 'Porenn',
		rank: 'Count',
		title: 'Lord',
		house: 'drasnia',
		portrait: '/images/portraits/Porenn.png',
		info: "Rodrig's rival, neighbour and brother-in-law. Holds a grudge against Luther as he doesn't think his sister Alrys should've married such a low-ranking noble. Convinced Count Arthas to gift him a parcel of Rodrig's land as revenge",
	},
	wendel_arthas: {
		firstname: 'Wendel',
		surname: 'Arthas',
		rank: 'Count',
		title: 'Lord',
		house: 'ilnoria',
		portrait: '/images/portraits/Arthas.png',
		info: "The senile Count of Ilnoria. Arthas is Porenn's equal and Rodrig's liegelord",
	},
	hargreeve_abbot: {
		firstname: 'Hargreeve',
		surname: 'Abbot',
		rank: 'Duke',
		title: 'Lord',
		house: 'rencester',
		portrait: '/images/portraits/Abbot.png',
		info: "The Duke of Rencester, answers directly to the Queen. Rodrig is convinced that Abbot would step in to prevent all-out civil war in his Duchy should he make a move against Porenn, and would rule in Rodrig's favour when this happens",
	},
};

const houses = {
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
};

export { npcs, houses };
