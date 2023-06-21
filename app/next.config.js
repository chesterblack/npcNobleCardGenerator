/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/:category/:npc',
				destination: '/card',
			},
			{
				source: '/:category',
				destination: '/category',
			},
		];
	},
};
