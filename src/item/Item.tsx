import React, {FC} from 'react'
import Button from '@material-ui/core/Button';

// types
import { CartItemType } from '../App';

// styles
import { Wrapper } from './Item.styles';

// props type taken from App
type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}


const Item: FC<Props> = ({ item, handleAddToCart }) => {
    return (
        <Wrapper>
            <img src={item.image} title={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </div>
            <Button onClick={()=> handleAddToCart(item)}>
                Add To Cart
            </Button>
        </Wrapper>
    )
}

export default Item
