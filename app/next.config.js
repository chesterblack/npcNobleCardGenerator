/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
      {
        source: '/maps/:map',
        destination: '/map',
      },
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
