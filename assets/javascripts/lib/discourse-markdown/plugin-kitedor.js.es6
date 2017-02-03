//export function setup(helper) {

//  helper.whiteList([
   
//    'label[for=*]',
//    'i[class=*]',
   
 // ]);
  
//}

import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features["plugin-kitedor"] = true;
});

export function setup(helper) {
  helper.whiteList([
    'label[for]'	  
  ]);
}
