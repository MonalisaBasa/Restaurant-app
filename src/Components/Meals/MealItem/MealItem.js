import React,{useContext} from 'react'
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/cart-contex';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

    // in the price variable 2 defines as 2 decimal value.
    const price = `$${props.price.toFixed(2)}`; 
    
    const addToCartHandler = amount =>{
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      });
      // console.log("Item added to cart:", {.
      //   id: props.id,
      //   name: props.name,
      //   amount: amount,
      //   price: props.price,
      // });

    };
    
  return (
    <li className={classes.meal}>
    <div>
      <h3>{props.name}</h3>
    
    <div className={classes.description}>{props.description}</div>
    <div className={classes.price}>{price}</div>
    </div>
    <div>
      <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
     
    </div>
    </li>
  );
};

export default MealItem;
