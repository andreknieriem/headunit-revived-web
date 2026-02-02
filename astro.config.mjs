// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://headunit.andrerinas.com',
	base: '/',
	integrations: [
		starlight({
			title: 'Headunit Revived',
			description: 'Turn your Android device into a modern Android Auto Headunit.',
			logo: {
				src: './src/assets/logo.png',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/andreknieriem/headunit-revived' },
			],
			components: {
				// We can override components here for custom landing page if needed
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'index' },
						{ label: 'About the Project', slug: 'about' },
						{ label: 'Setup Guide', slug: 'guides/setup' },
						{ label: 'Application Settings', slug: 'guides/settings' },
						{ label: 'FAQ', slug: 'guides/faq' },
						{ label: 'Troubleshooting', slug: 'guides/troubleshooting' },
					],
				},
				{
					label: 'Connection Methods',
					items: [
						{ label: 'Wired USB', slug: 'guides/wired' },
						{ label: 'Wireless (Experimental)', slug: 'guides/wireless' },
						{ label: 'Wireless Launcher', slug: 'guides/wireless-launcher' },
						{ label: 'Intent (Power Users)', slug: 'guides/automation' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Hardware Compatibility', slug: 'reference/hardware' },
						{ label: 'Contributing Translations', slug: 'guides/translations' },
					],
				},
				{
					label: 'Changelog',
					slug: 'changelog',
				},
			],
			customCss: [
				'./src/styles/global.css',
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
