import Commerce from '@chec/commerce.js';

//create new instance of our store
//first parameter our key
//access to our key inside env
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PABLIC_KEY, true );