import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = { 
    kit: { 
        adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true        
        }),
        paths: {
            base: process.argv.includes('dev') ? '' : '/music'        
        }
    },
            compilerOptions: {
            runes: true
            }
 };

export default config;
