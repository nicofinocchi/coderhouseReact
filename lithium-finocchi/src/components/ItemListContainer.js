import './ItemListContainer.css';
import ItemCount from './ItemCount.js';


const ItemListContainer = () => {
  const onAdd = () => {
    window.alert("Producto agregado al carrito exitosamente!")
    console.log("Producto agregado al carrito exitosamente!");
  }

  return (

    <>
        <h1>Proximamente una Lista de Items...</h1>
        <article>
          <ItemCount stock={5} initial={1} onAdd={ onAdd }/>
        </article>
        
    </>

  )
}

export default ItemListContainer;

