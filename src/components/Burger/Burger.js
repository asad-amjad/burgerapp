import React from 'react';
import '../Burger/Burger.css'; 
import BurgerIngredients from '../Burger/BurgerIngredients/BurgerIngredients';


const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey =>{
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey} />;
         } );
    } )
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length == 0) {
        transformedIngredients = <p>Please Add Ingredients!!</p>;
    }
    return (
        <div className="Burger">
            <BurgerIngredients type = "bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type = "bread-bottom"/>      </div>

    );

};
export default burger;