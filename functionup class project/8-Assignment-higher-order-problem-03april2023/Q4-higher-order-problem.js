// const carBrands = ["honda", "toyota", "maruti","tata"]
// const carModel = ["city", "innova", "alto", "nano"]

// const carObject = {}
//  using a higher order method, create a carObject variable such that 
/**
* 
* {
* honda:city,
* toyota:innova,
* maruti:alto,
* tata:nano
* }
*/

const carBrands = ["honda", "toyota", "maruti", "tata"];
const carModel = ["city", "innova", "alto", "nano"];

const carObject = carBrands.reduce((acc, cur, idx) => {
  acc[cur] = carModel[idx];
  return acc;
}, {});

console.log(carObject);
