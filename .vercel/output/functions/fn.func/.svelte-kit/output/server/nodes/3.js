import * as server from '../entries/pages/(auth)/login/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/(auth)/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(auth)/login/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.5d52d780.js","_app/immutable/chunks/index.ad50d19f.js","_app/immutable/chunks/forms.d7b031ff.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.b925919d.js"];
export const stylesheets = ["_app/immutable/assets/3.f8ac1840.css"];
export const fonts = [];
