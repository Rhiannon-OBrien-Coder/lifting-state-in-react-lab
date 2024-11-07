import { useState } from 'react';

const BurgerStack = (props) => {
  const stack = props.burgerStack

  const handleClick = (i) => {
    props.removeFromBurger(i)
  }

    return <ul>
      {stack.map((i, idx) => (
          <li key={idx} style={{backgroundColor: i.color}}>
            <h3>{i.name}</h3>
            <button onClick={(() => handleClick(i))}>x</button>
          </li>
        ))}
    </ul>;
  };
  
  export default BurgerStack;
  