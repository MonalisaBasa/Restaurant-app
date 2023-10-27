import React,{useRef, useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) =>{
    event.preventDefault();
    // ref current.value is always as string even if we declare as number .
    const enteredAmount = amountInputRef.current.value;
    // to convert string to number 
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 ||enteredAmountNumber < 1 || enteredAmountNumber > 5)
    {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
         <Input
          //ref={amountInputRef} won't work inside a custom component(Input) therefore uses forwardRef in input component. 
         ref={amountInputRef}
         label='Amount' 
         input={{
         id: 'amount_' + props.id,
          type:'number',
          min: '1',
          max: '5',
          step:'1',
          defaultValue: '1',
          }} /> 
          
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}

    </form>
   
  );
};

export default MealItemForm;
