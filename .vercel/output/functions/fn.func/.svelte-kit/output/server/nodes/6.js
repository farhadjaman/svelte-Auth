import * as server from '../entries/pages/(protected)/admin/_page.server.ts.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/(protected)/admin/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(protected)/admin/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.610debfa.js","_app/immutable/chunks/index.ad50d19f.js"];
export const stylesheets = [];
export const fonts = [];
