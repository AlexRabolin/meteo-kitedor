import { builders } from 'pretty-text/engines/discourse-markdown/bbcode';

 export function setup(helper) {

  helper.whiteList([
    'label[for=*]',
    'i[class=*]',
  ]);
  
}
