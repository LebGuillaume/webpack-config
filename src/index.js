import "./style/index.scss";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};
const elventGauntletRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoostone: 4,
};
console.log(elvenShieldRecipe);
console.log(elventGauntletRecipe);
