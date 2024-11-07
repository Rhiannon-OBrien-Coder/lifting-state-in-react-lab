import './App.css'
import { useState } from 'react'
import BurgerStack from './components/BurgerStack'
import IngredientList from './components/IngredientList'

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([])

  const addToBurger = (i) => {
    console.log(i)
    const updatedBurger = [...stack, i];
    setStack(updatedBurger);
    console.log(stack)
  };

  const removeFromBurger = (i) => {
    const ingredientName = i.name
    setStack(stack => stack.filter(eachIngredient => eachIngredient.name !== ingredientName))
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredientList={availableIngredients} addToBurger={addToBurger}/>
        <BurgerStack burgerStack={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  );
};

export default App;
