import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features["plugin-kitedor"] = true;
});

//   export function setup(helper) {
 //  helper.whiteList(['label[for]']);
 //  helper.whiteList(['iframe[src]']);
 //  helper.whiteList(['i.*',]);
// }

  export function setup(helper) {

  helper.whiteList([
    'label[for]',
    'i[class=*]',
  ]);
 // 'iframe[src]',
