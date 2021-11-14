export type Selection =
  | 'appetizer'
  | 'entree'
  | 'cocktail'
  | 'beverage'
  | 'dessert'
  | 'side';


export type Category = { name: Selection; position: number };
