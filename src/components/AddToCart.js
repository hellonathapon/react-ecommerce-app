import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, IconButton } from '@material-ui/core'
import { Favorite, FavoriteBorder } from '@material-ui/icons'

function AddToCart({ item }) {

    const dispatch = useDispatch()

    return (
        <>
           <Button 
                onClick={() => dispatch({type: "ADD_ITEM", payload: item})}
                disabled={item.stock < 1} 
                variant="outlined" 
                color="primary" 
                disableElevation>
                Add to cart
            </Button>
            <IconButton 
                onClick={() => dispatch({type: "FAVOURITE", payload: item.id})}
                color="secondary" 
            >
                    {/* conditionally display icon bases on its `isFav` */}
                { item.isFav ? <Favorite/> : <FavoriteBorder /> }
            </IconButton> 
        </>
    )
}

export default AddToCart
