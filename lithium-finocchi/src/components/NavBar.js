import BoltIcon from '@mui/icons-material/Bolt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './NavBar.css';


const NavBar = () => {

  return (
    <header  className="navbar">
        <div>
            <BoltIcon sx={{ fontSize: 60 }}/>
            <h1>Lithium</h1>
        </div>
        
        <nav>
            <li><a href="#">Audio</a></li>
            <li><a href="#">Notebooks</a></li>
            <li><a href="#">Perifericos</a></li>
            <li><a href="#">Smartphones y Tablets</a></li>
        </nav>

        <ShoppingCartIcon className="shopping-cart" sx={{ fontSize: 40 }}/>
    </header>
  )
}

export default NavBar;
