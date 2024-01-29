import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Logo } from "../Logo/Logo";

export const NavBar = () => {
    
 
    return (
      <nav>
        <Logo/>
        
        <div>
          <button>Celulares</button>
          <button>Tablets</button>
          <button>Notebook</button>
        </div>
        <CartWidget/>
      </nav>
  )
}
