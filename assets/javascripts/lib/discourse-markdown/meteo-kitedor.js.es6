import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features["meteo-kitedor"] = true;
});

export function setup(helper) {
  helper.whiteList(['div[class]']);
  helper.whiteList(['iframe[src]']);
  helper.whiteList(['class[modal1]']);
}
