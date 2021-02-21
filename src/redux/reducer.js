import initState from './productsData'

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "FAVOURITE":
            return {
                ...state,
                products: state.products.map(item => {
                    if(item.id === action.payload){
                        return {
                            ...item,
                            isFav: item.isFav = !item.isFav
                        }
                    }else {
                        return item
                    }
                })
            }
        case "ADD_ITEM":
            return {
                ...state,
                inCart: [...state.inCart, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;