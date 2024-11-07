import { useState } from 'react';
import availableIngredients from '../App.jsx'

const IngredientList = (props) => {
  const ingredients = props.ingredientList
  console.log(props)

  const handleClick = (i) => {
    props.addToBurger(i)
  }

  return (
      <ul>
        {ingredients.map((i, idx) => (
          <li key={idx} style={{backgroundColor: i.color}}>
            <h3>{i.name}</h3>
            <button onClick={(() => handleClick(i))}>+</button>
          </li>
        ))}
      </ul>
  );
};
  
  export default IngredientList;