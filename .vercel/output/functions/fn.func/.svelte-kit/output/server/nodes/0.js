import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.5de7ee03.js","_app/immutable/chunks/index.ad50d19f.js","_app/immutable/chunks/stores.447d0093.js","_app/immutable/chunks/singletons.b925919d.js","_app/immutable/chunks/forms.d7b031ff.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = ["_app/immutable/assets/0.ef6efb8d.css"];
export const fonts = [];
