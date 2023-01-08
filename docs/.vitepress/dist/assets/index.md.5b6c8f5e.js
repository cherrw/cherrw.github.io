import { _ as t, c as a, o, a as e, b as r } from "./app.1e31e8cd.js";
const x = JSON.parse(
		'{"title":"Hello Everyone","description":"","frontmatter":{},"headers":[],"relativePath":"index.md"}',
	),
	n = { name: "index.md" },
	s = e(
		"h1",
		{ id: "hello-everyone", tabindex: "-1" },
		[
			r("Hello Everyone "),
			e("a", { class: "header-anchor", href: "#hello-everyone", "aria-hidden": "true" }, "#"),
		],
		-1,
	),
	c = [s];
function d(i, l, _, h, p, f) {
	return o(), a("div", null, c);
}
const u = t(n, [["render", d]]);
export { x as __pageData, u as default };
