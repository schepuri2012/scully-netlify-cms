import { ScullyConfig } from '@scullyio/scully';
import { DisableAngular } from 'scully-plugin-disable-angular';
export const config: ScullyConfig = {
	projectRoot: './src',
	projectName: 'scully-netlify-cms',
	outDir: './dist/static',
	routes: {
		'/blog/:slug': {
			type: 'contentFolder',
			slug: {
				folder: './blog',
			},
		},
	},
	defaultPostRenderers: [DisableAngular],
};
