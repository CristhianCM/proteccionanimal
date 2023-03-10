import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, f as deserializeManifest } from './chunks/astro.feffeaa8.mjs';
import { _ as _page0 } from './chunks/pages/all.936e4d37.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                                 */
const pageMap = new Map([["src/pages/index.astro", _page0],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["proteccionanimal/_astro/index.ad93ceea.css"],"scripts":[{"type":"external","value":"proteccionanimal/_astro/hoisted.d5c97f69.js"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://cristhiancm.github.io","base":"/proteccionanimal/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true,"contentDir":"file:///home/criscm/Documentos/Proyects/Astro_Proyect/proteccionAnimal/proteccionanimal/src/content/"},"pageMap":null,"propagation":[],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.d5c97f69.js","astro:scripts/before-hydration.js":""},"assets":["/proteccionanimal/_astro/index.ad93ceea.css","/proteccionanimal/ambiente.png","/proteccionanimal/correo-electronico.png","/proteccionanimal/donateLarge.jpg","/proteccionanimal/donateSm.jpg","/proteccionanimal/facebook.png","/proteccionanimal/favicon.svg","/proteccionanimal/gl_1.jpg","/proteccionanimal/gl_2.jpg","/proteccionanimal/gl_3.jpg","/proteccionanimal/gl_4.jpg","/proteccionanimal/gl_5.jpg","/proteccionanimal/gl_6.jpg","/proteccionanimal/gm_1.jpg","/proteccionanimal/gm_2.jpg","/proteccionanimal/gm_3.jpg","/proteccionanimal/gm_4.jpg","/proteccionanimal/home1.jpg","/proteccionanimal/home2.jpg","/proteccionanimal/info1.jpg","/proteccionanimal/info2.jpg","/proteccionanimal/info3.jpg","/proteccionanimal/interaccion.png","/proteccionanimal/mental.png","/proteccionanimal/nutrici??n.png","/proteccionanimal/salud.png","/proteccionanimal/tik-tok.png","/proteccionanimal/whatsapp.png","/proteccionanimal/_astro/hoisted.d5c97f69.js"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
