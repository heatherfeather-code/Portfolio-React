// import styles from './header.module.css';
// import {NavLink} from "react-router";

// export default function Header(){
//     return(
//         <header id={styles['header']}>
//             <h2 className = {styles.sitename}>
//                 <a href="/">Heather Boden Web Development Portfolio</a>
//             </h2>
//             <nav aria-label="Main navigation">
//                 <ul>
//                     <li>
//                         <NavLink
//                         to="/"
//                         className={({isActive, isPending})=>
//                             isPending ? "pending" : isActive ? "special" : ""
//                         }
//                         >Home</NavLink>
//                     </li>
//                     <li><a href="#projects">Projects</a></li>
//                     <li><NavLink to="#skills">Skills</NavLink></li>
//                     <li><NavLink to="https://http5222-assignment1.onrender.com/user/login" target="_blank">Admin</NavLink></li>
//                 </ul>

//             </nav>
//         </header>
//     );
// } 

import styles from './header.module.css';
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header id={styles['header']}>
      <h2 className={styles.sitename}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
          Heather Boden Web Development Portfolio
        </NavLink>
      </h2>

      <nav aria-label="Main navigation">
        <ul className={styles.navList}>
          <li>
              <a href="/"><strong>Home</strong></a>
            
          </li>
          <li>
        
              <a href="#projects"><strong>Projects</strong></a>
          </li>
          <li>
              <a href="#skills"><strong>Skills</strong></a>
          </li>
          <li>
            <a href="#connect"><strong>Connect</strong></a>
          </li>
          <li>
            <a href="https://http5222-assignment1.onrender.com/user/login" target="_blank" rel="noopener noreferrer">
              <strong>Admin</strong>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
