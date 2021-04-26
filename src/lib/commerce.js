import Commerce from '@chec/commerce.js';

// Creates an instance of our Commerce Store
export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
