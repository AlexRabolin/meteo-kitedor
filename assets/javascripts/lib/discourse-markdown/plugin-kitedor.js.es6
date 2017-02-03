import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
	opts.features['plugin-kitedor'] = true;
});

//export function setup(helper) {

//  helper.whiteList([
   
//    'label[for=*]',
//    'i[class=*]',
   
 // ]);
  
//}

export function setup(helper) {

	helper.whiteList([
  
		'i' , 'class' , '*' ,
		'label' , 'for' , '*' ,
  
	]);
 
}
