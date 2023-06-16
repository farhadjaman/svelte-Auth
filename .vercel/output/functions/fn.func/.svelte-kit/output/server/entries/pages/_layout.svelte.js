import { c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import "devalue";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:0;padding:0;font-family:sans-serif;color:white}input, button{border-radius:1rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ofy2zx_START -->${$$result.title = `<title>Svelte Auth</title>`, ""}<!-- HEAD_svelte-ofy2zx_END -->`, ""}

<nav class="text-xl flex items-center justify-center flex-wrap bg-teal-500 p-6"><div class="flex items-center flex-shrink-0 text-white mr-6">${escape($page?.data?.user?.name ?? "Svelte Auth")}</div>
	<div class="flex gap-4 text-white">${$page.data.user ? `<a href="/admin">Admin</a>
			<form class="logout" action="/logout" method="post"><button type="submit">Log out</button></form>` : `<a href="/login">Login</a>
			<a href="/register">Register</a>`}</div></nav>

<main>${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};
