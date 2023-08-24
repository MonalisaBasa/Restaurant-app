 import React,{Fragment} from 'react'

 import classes from '../Header.module.css';
 import HeaderCartButton from './HeaderCartButton';
 
 import mealsimage from '../../assets/meals.jpg';
 
 const Header = () => {
   return (
     <Fragment>
        <header  className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton/>
            
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimage} alt="This is a food table" />
        </div>
     </Fragment>
   )
 }
 
 export default Header
 