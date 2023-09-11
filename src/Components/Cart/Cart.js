import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../Store/cart-contex';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount =`$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);

    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item,amount:1});
    };

   
   
    const carItems = (
    <ul className={classes['cart-items']}>
    {/* {[{id:'c1', name:'sushi', amount: 2, Price:12.99},
    ].map((item) => (<li>{item.name}</li>))} */}
    {cartCtx.items.map((item) => (
        // <li>{item.name}</li>
        <CartItem 
        key={item.id} 
        name={item.name} 
        amount={item.amount} 
        price={item.price} 
        onRemove={cartItemRemoveHandler.bind(null,item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
        />
    ))}
    </ul>
    );
    
    return (
        <Modal onClose={props.onClose}>
            {carItems}
            <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['botton--alt']} onClick={props.onClose}>Close</button>
               {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal >

    );
};
export default Cart;