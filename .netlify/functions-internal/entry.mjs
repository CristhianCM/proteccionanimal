import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, f as deserializeManifest } from './chunks/astro.feffeaa8.mjs';
import { _ as _page0 } from './chunks/pages/all.a1593885.mjs';
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

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["ProtectA/_astro/index.ad93ceea.css"],"scripts":[{"type":"external","value":"ProtectA/_astro/hoisted.d5c97f69.js"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://CristhianCM.github.io","base":"/ProtectA/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true,"contentDir":"file:///home/criscm/Documentos/Proyects/Astro_Proyect/proteccionAnimal/proteccionanimal/src/content/"},"pageMap":null,"propagation":[],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.d5c97f69.js","astro:scripts/before-hydration.js":""},"assets":["/ProtectA/_astro/index.ad93ceea.css","/ProtectA/ambiente.png","/ProtectA/correo-electronico.png","/ProtectA/donateLarge.jpg","/ProtectA/donateSm.jpg","/ProtectA/facebook.png","/ProtectA/favicon.svg","/ProtectA/gl_1.jpg","/ProtectA/gl_2.jpg","/ProtectA/gl_3.jpg","/ProtectA/gl_4.jpg","/ProtectA/gl_5.jpg","/ProtectA/gl_6.jpg","/ProtectA/gm_1.jpg","/ProtectA/gm_2.jpg","/ProtectA/gm_3.jpg","/ProtectA/gm_4.jpg","/ProtectA/home1.jpg","/ProtectA/home2.jpg","/ProtectA/info1.jpg","/ProtectA/info2.jpg","/ProtectA/info3.jpg","/ProtectA/interaccion.png","/ProtectA/mental.png","/ProtectA/nutrición.png","/ProtectA/salud.png","/ProtectA/tik-tok.png","/ProtectA/whatsapp.png","/ProtectA/_astro/hoisted.d5c97f69.js"]}), {
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
