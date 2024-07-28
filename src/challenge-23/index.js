function organizeChristmasDinner(dishes) {
  const ingredients = new Map()

  for (const dish of dishes) {
    const dishName = dish[0]
    const dishIngredients = dish.slice(1)

    for (const ingredient of dishIngredients) {
      if (!ingredients.has(ingredient)) {
        ingredients.set(ingredient, [])
      }

      ingredients.get(ingredient)?.push(dishName)
    }
  }

  const organizedDishes = [...ingredients.entries()]
    .filter(([, dishes]) => dishes.length >= 2)
    .map(([ingredient, dishes]) => [ingredient, ...dishes.sort()])
    .sort()

  return organizedDishes
}

module.exports = organizeChristmasDinner
