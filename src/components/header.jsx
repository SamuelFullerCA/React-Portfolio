import React from "react";
import { Outlet } from 'react-router-dom';

// Import the Navbar page
import Navbar from "./navbar"

// function Header(props) {

//     // Deconstructs the data in props allowing us to use  the function to update the currentRoute state
//     const {handleRouteChange} = props;

//     // HTML
//     return (
//         <header>
//             <div>
//                 <h1>Samuel Fuller</h1>
//             </div>
//             <div>
//                 {/* Renders the Navbar page passing in handRouteChange function as a prop */}
//                 <Navbar handleRouteChange={handleRouteChange} />
//             </div>

//         </header>
//     )
// }


                                                                //   ** ROUTE METHOD **
        function Header(props) {

            // Deconstructs the data in props allowing us to use  the function to update the currentRoute state
            // const {handleRouteChange} = props;

            // HTML
            return (
                <header>
                    <div>
                        <h1>Samuel Fuller</h1>
                    </div>
                    <div>
                        {/* Renders the Navbar page passing in handRouteChange function as a prop */}
                        <Navbar />
                    </div>

                </header>
            )
        }

    // Exports the Header page
    export default Header;