import { useState } from 'react'
import { Outlet } from 'react-router-dom';

// Import the header, footer, and each of the main bodys
import Footer from './components/footer'
import Header from './components/header'

// Main app function
function App() {

  // // Adds a 'route' useState with a current route, and fuction to update it
  // // Aditionally sets the the default state to 'AboutMe'
  // const [currentRoute, handleRouteChange] = useState("AboutMe");

  // // Checks the current state of 'currentRoute' and returns the appropriate react page
  // const renderRoute = () => {
  //   if (currentRoute === "AboutMe") {
  //     return <AboutMe />;
  //   }
  //   if (currentRoute === "ContactMe") {
  //     return <ContactMe />;
  //   }
  //   if (currentRoute === "Portfolio") {
  //     return <Portfolio />;
  //   }
  //   if (currentRoute === "Resume") {
  //     return <Resume />;
  //   }
  // };

  // // HTML
  //   return (
  //     <>
  //       {/* loads the header react page, passing in the currentRoute and handleRouteChange as props */}
  //       <Header currentRoute={currentRoute} handleRouteChange={handleRouteChange}/>
  //       {/* Renders the page from the renderRoute function */}
  //       <main>{renderRoute()}</main>
  //       {/* Renders the footer */}
  //       <Footer />
  //     </>
  //   )
  // }


  // HTML
  return (
    <>
    {/* Loads the Header react page */}
      <Header />
      {/* Loads the body page associated with the current route */}
      <main>
        <Outlet />
      </main>
      {/* Loads the Footer react page */}
      <Footer />
    </>
  )
}




// Exports the App page
export default App
