export { filterRecipes, filterRecipeByTags };

function filterRecipes (recipes, string) {

    let input = string.toLowerCase();
    
    let filteredArray = recipes.filter(function (recipe) {
        if (input.length >= 3){

            recipe.ingredients.map(ingredienta => ingredienta.ingredient).map(ingr => {
                    if (ingr.toLowerCase().includes(input)) {
                        return recipe
                    }
                }
            );

            recipe.ustensils.map(ustensil => {
                if (ustensil.toLowerCase().includes(input)) {
                    return recipe
                }
            });
        
            return recipe.name.toLowerCase().includes(input) || recipe.description.toLowerCase().includes(input); 

        } else {
            return recipes
        }
    });

    let uniqueArray = [... new Set(filteredArray)];
    return uniqueArray;
}

function filterRecipeByTags (array) {

    console.log(array);

    let recipes = document.querySelectorAll('.recipe');
    if (array.length == 0) {
        recipes.forEach(recipe => {
            recipe.classList.remove("is-hidden");
            recipe.classList.add("is-displayed");
        });
    } else {
        array.forEach(item => {
            recipes.forEach(recipe => {
                if (recipe.innerText.toLowerCase().includes(item)) {
                    recipe.classList.remove("is-hidden");
                    recipe.classList.add("is-displayed");
                } else {
                    recipe.classList.add("is-hidden");
                    recipe.classList.remove("is-displayed");
                }
            });
        })
    }
}