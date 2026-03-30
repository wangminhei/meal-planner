import recipeDataObj from '../../data/recipes.json';

export type Recipe = {
  id: string;
  name: string;
  type: string;
  ingredients: string[];
  steps: string[];
  tips: string;
  time: string;
};

export type DayMenu = {
  man: Recipe;
  rau: Recipe;
  canh: Recipe;
  phu: Recipe;
};

// Flatten the array if necessary
const recipeData: Recipe[] = Array.isArray(recipeDataObj) ? recipeDataObj : 
  [...(recipeDataObj as any).man || [], ...(recipeDataObj as any).rau || [], ...(recipeDataObj as any).canh || [], ...(recipeDataObj as any).phu || []]

const manList: Recipe[] = recipeData.filter(r => r.type === 'man');
const rauList: Recipe[] = recipeData.filter(r => r.type === 'rau');
const canhList: Recipe[] = recipeData.filter(r => r.type === 'canh');
const phuList: Recipe[] = recipeData.filter(r => r.type === 'phu');

export function generateDailyMenu(pastIds: Set<string>): DayMenu {
  const pickRandom = (list: Recipe[]) => {
    let attempts = 0;
    while(attempts < 50) {
      const idx = Math.floor(Math.random() * list.length);
      const chosen = list[idx];
      if (!pastIds.has(chosen.id)) {
        return chosen;
      }
      attempts++;
    }
    // Fallback if heavily exhausted
    return list[Math.floor(Math.random() * list.length)];
  };

  return {
    man: pickRandom(manList),
    rau: pickRandom(rauList),
    canh: pickRandom(canhList),
    phu: pickRandom(phuList)
  };
}
