import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['plugin-kitedor'] = true;
});

export function setup(helper) {
  
  helper.whiteList([ 'label[for=*]','i.*','img[style=*]' ]);
  
}

import {whiteListIframe} from 'pretty-text/sanitizer';

 whiteListIframe(/^(https?:)?\/\/www\.meteoblue\.com\/.+/i);
 whiteListIframe(/^(https?:)?\/\/www\.windfinder\.com\/.+/i);
 whiteListIframe(/^(https?:)?\/\/www\.windguru\.cz\/.+/i);
