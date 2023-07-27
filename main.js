import Pricing from './0x02-ES6_classes/4-pricing';
import Currency from './0x02-ES6_classes/3-currency';

const p = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(p);
console.log(p.displayFullPrice());
