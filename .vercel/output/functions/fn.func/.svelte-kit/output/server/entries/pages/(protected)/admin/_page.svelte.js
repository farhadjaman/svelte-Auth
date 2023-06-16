import { c as create_ssr_component, e as escape } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="text-center text-4xl my-8 text-gray-300">Admin Panel</h1>

${data.user && data.user.role == "ADMIN" ? `<p class="text-center text-2xl my-8">Welcome, ${escape(data.user.name)}!</p>
	<form method="post" action="/logout"><button type="submit">logout</button></form>` : `<p class="text-center text-4xl my-8">You are not an admin!</p>`}`;
});
export {
  Page as default
};
