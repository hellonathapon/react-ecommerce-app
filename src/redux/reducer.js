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
                inCart: [...state.inCart, action.payload],
                products: state.products.map(k => {
                    if(k.id === action.payload.id){       // reduce stock by 1 
                        return {                          // when item is add to cart
                            ...k,
                            stock: k.stock = k.stock - 1
                        }
                    }else {
                        return k;
                    }
                })
            }
        default:
            return state;
    }
}

export default reducer;