import { c as create_ssr_component } from "../../../../chunks/index2.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-1afhtsm{color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<h1 class="text-center text-4xl my-8">Login</h1>
<form action="?/login" class="w-96 grid gap-8 mx-auto p-8 bg-neutral-800/50 border border-neutral-700/20 rounded-2xl shadow-lg" method="post"><label for="username" class="grid gap-2">Username</label>
	<input class="p-4 bg-neutral-800/60 border border-neutral-700/20 rounded-2xl shadow-md" type="text" name="username" id="username" placeholder="Username" required>
	<label class="grid gap-2" for="password">Password</label>
	<input class="p-4 bg-neutral-800/60 border border-neutral-700/20 rounded-2xl shadow-md" type="password" name="password" id="password" placeholder="Password" required>

	${form?.invalid ? `<p class="error svelte-1afhtsm">Username or password is invalid</p>` : ``}

	${form && form.isAuth == false ? `<p class="error svelte-1afhtsm">You have entered the wrong credentials</p>` : ``}
	<button class="text-white p-4 mt-4 rounded-2xl bg-teal-500 hover:bg-teal-500 font-semibold shadow-md transition-colors" type="submit">Login</button>
</form>`;
});
export {
  Page as default
};
