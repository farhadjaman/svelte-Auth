import * as server from '../entries/pages/(auth)/register/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/(auth)/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(auth)/register/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.3012da3a.js","_app/immutable/chunks/index.ad50d19f.js","_app/immutable/chunks/forms.d7b031ff.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.b925919d.js"];
export const stylesheets = [];
export const fonts = [];
