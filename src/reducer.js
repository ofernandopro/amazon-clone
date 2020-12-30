export const initialState = {
  basket: [
    {
      id: "123456789",
      title: "Código Limpo: Habilidades Práticas do Agile Software",
      price: 96.62,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/41SH-SvWPxL._SX260_.jpg"
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':

      //Cloning the basket:
      let newBasket = [...state.basket];

      // Checking to see if product exists
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the basket`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;