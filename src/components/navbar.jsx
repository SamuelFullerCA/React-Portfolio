import { Link, useLocation } from 'react-router-dom';


function Navbar(props) {
//   console.log(props)

//  // Deconstructs the data in props allowing us to use  the function to update the currentRoute state
//   const {handleRouteChange} = props;

//   // HTML
//   return (
//     <>
//       <ul>
//         <li>
//           {/* Runs the function 'handleRouteChange' to chage the state to the new route name 'AboutMe' */}
//           <button href="#AboutMe"><a onClick={() => handleRouteChange('AboutMe')}>About</a></button>
//         </li>
//         <li>
//           {/* Runs the function 'handleRouteChange' to chage the state to the new route name 'Portfolio' */}
//           <button href="#AboutMe"><a onClick={() => handleRouteChange('Portfolio')}>Portfolio</a></button>
//         </li>
//         <li>
//           {/* Runs the function 'handleRouteChange' to chage the state to the new route name 'ContactMe' */}
//           <button href="#AboutMe"><a onClick={() => handleRouteChange('ContactMe')}>Contact</a></button>
//         </li>
//         <li>
//           {/* Runs the function 'handleRouteChange' to chage the state to the new route name 'Resume' */}
//           <button href="#AboutMe"><a onClick={() => handleRouteChange('Resume')}>Resume</a></button>
//         </li>
//       </ul>
//     </>

//   );
// }

//                                                                            ** ROUTE METHOD **
const currentPage = useLocation().pathname;
  // HTML
  return (
    <>
      <ul >
      <li >
        <Link to="/AboutMe">AboutMe</Link>
      </li>
      <li >
        <Link to="/Portfolio">Portfolio</Link>
      </li>
      <li >
        <Link to="/ContactMe" className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}>ContactMe</Link>
      </li>
      <li >
        <Link to="/Resume" className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
      </li>

    </ul>
    </>

  );
}

// Exports the Navbar page
export default Navbar;