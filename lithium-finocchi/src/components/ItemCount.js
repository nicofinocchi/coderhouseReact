import {useState} from 'react';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [ counter, setCounter ] = useState(1);

    const Sumar = () => {
        if (stock >  counter){
            return setCounter(counter +1)
        }
    }

    const Restar = () => {
        if (counter > initial) {
            setCounter(counter -1)
            
        }
        return counter
    }

    const Validate = () => {
        if (stock >=  counter) {
            onAdd();
        }
        
    }


  return (
    
    <div className="item-count">
        <h3> { counter } </h3>
        <button onClick={ Sumar }>+</button>
        <button onClick={ Restar } >-</button>
        <button onClick={ Validate }>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount;
