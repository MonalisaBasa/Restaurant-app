import React from 'react'
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    // in the price variable 2 defines as 2 decimal value.
    const price = `$${props.price.toFixed(2)}`;  
  return (
    <li className={classes.meal}>
    <div>
      <h3>{props.name}</h3>
    
    <div className={classes.description}>{props.description}</div>
    <div className={classes.price}>{price}</div>
    </div>
    <div>
      <MealItemForm/>
    </div>
    </li>
  );
}

export default MealItem
