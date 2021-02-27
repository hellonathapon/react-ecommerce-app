import React from 'react'
import { connect } from 'react-redux'
import { Button, IconButton } from '@material-ui/core'
import { Favorite, FavoriteBorder } from '@material-ui/icons'

function AddToCart({ item, handleFavState, addItemToCart }) {
    return (
        <>
           <Button 
                onClick={ () => addItemToCart(item)}
                disabled={item.stock < 1} 
                variant="outlined" 
                color="primary" 
                disableElevation>
                Add to cart
            </Button>
            <IconButton 
                onClick={() => handleFavState(item.id)}
                color="secondary" 
            >
                    {/* conditionally display icon bases on its `isFav` */}
                { item.isFav ? <Favorite/> : <FavoriteBorder /> }
            </IconButton> 
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFavState: (id) => dispatch({ type: "FAVOURITE", payload: id}),
        addItemToCart: (item) => dispatch({ type: "ADD_ITEM", payload: item })
    }
}

export default connect(null, mapDispatchToProps) (AddToCart)
