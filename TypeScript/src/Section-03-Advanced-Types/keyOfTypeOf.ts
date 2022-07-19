type BrandsObj = typeof brandsObj;
type BrandsKeys = keyof BrandsObj;

const brandsObj = {
  ferrari: ['488 Pista Spider', 'F8'],
  tesla: ['Model 3', 'Model Y'],
  fiat: ['Uno', 'Toro'],
};

function showMoldels(brand: BrandsKeys, models: BrandsObj) {
  console.log(models[brand]);
}

showMoldels('ferrari', brandsObj);
showMoldels('fiat', brandsObj);
showMoldels('tesla', brandsObj);
