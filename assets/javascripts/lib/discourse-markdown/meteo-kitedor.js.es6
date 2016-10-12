import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features["meteo-kitedor"] = true;
});

export function setup(helper) {
  helper.whiteList(['script[src]']);
  helper.whiteList(['iframe[src]']);
}
