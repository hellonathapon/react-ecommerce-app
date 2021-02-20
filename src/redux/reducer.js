const initState = {
    products: [
        {
            id: 0,
            title: 'Blue Jacket',
            desc: 'lorem ipsum',
            price: 120,
            imgUrl: require('../assets/images/blue.jpg').default,
            isFav: false,
            rating: 4.5,
        },
        {
            id: 1,
            title: 'White Jacket',
            desc: 'lorem ipsum',
            price: 110,
            imgUrl: require('../assets/images/gray.jpg').default,
            isFav: false,
            rating: 3.0,
        },
        {
            id: 2,
            title: 'Gray Jacket',
            desc: 'lorem ipsum',
            price: 100,
            imgUrl: require('../assets/images/red-hoodie.jpg').default,
            isFav: false,
            rating: 4.0,
        },
        {
            id: 3,
            title: 'Coca Jacket',
            desc: 'lorem ipsum',
            price: 129,
            imgUrl: require('../assets/images/blue.jpg').default,
            isFav: false,
            rating: 2.5,
        },
    ]
}

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
    
        default:
            return state;
    }
}

export default reducer;