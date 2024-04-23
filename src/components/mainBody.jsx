// import { useState } from 'react'

// // Import the header, footer, and each of the main bodys
// import Footer from './components/footer'
// import Header from './components/header'
// import AboutMe from './components/aboutMe'
// import Portfolio from './components/portfolio'
// import ContactMe from './components/contactMe'
// import Resume from './components/resume'
// import Navbar from './navbar'

// export default function PortfolioContainer() {
//     const [currentPage, setCurrentPage] = useState('Home');

  
//   const renderRoute = () => {
//     if (currentRoute === "AboutMe") {
//       return <AboutMe />;
//     }
//     if (currentRoute === "ContactMe") {
//       return <ContactMe />;
//     }
//     if (currentRoute === "Portfolio") {
//       return <Portfolio />;
//     }
//     if (currentRoute === "Resume") {
//       return <Resume />;
//     }
//   };

//   return (
//     <div>
//       {/* // TODO: Add a comment describing what we are passing as props */}
//       <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* // TODO: Add a comment explaining what is happening on the following line */}
//       <main className="mx-3">{renderPage()}</main>
//     </div>
//   );
// }

//   const handlePageChange = (page) => setCurrentPage(page);