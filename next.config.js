/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{ source: '/contact', destination: '/#contact', permanent: true },
			{
				source: '/projects/eke-marin',
				destination: 'https://www.eke-marin.fi/fi',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
