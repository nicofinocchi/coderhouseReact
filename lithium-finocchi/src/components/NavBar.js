import BoltIcon from '@mui/icons-material/Bolt';
import CartWidget from './CartWidget'
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

        <CartWidget />
    </header>
  )
}

export default NavBar;
