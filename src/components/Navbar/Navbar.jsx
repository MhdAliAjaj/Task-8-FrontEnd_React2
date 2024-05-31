// import React from "react";
// import "./../Navbar/Navbar.css";
// import "./../../index.css";
// import "./../../App.css";

// const Navbar = () => {
//   return (
//     <>
//       <div className="MA-navbar">
//         {/* الطرف اليساري */}
//         <div className="MA-Logo-container">
//           <img className="MA-Logo-image" src="./images/logo.svg" alt="logo" />
//           {/* <img className="MA-Logo-image" src="http://focal-x.com/assets/img/home/logo.svg" alt="logo" /> */}

//           <div className=".MA-Logo-description">Digital marketing agency</div>
//         </div>
//         {/* الطرف اليميني */}
//         <div className="MA-Right-navbar">
//           <ul id="ul">
//             <p class="line" id="line"></p>
//             <li>
//               <a href="#Home" id="home">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#Services" id="services">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#Porttfolio" id="protfolio">
//                 Portfolio
//               </a>
//             </li>
//             <li>
//               <a href="#ClientsAndPartners" id="clients">
//                 Clients & Partners
//               </a>
//             </li>
//             <li class="about">
//               <a href="#About" id="about">
//                 About Us
//               </a>
//               <ul>
//                 <li>
//                   <a href="#About">Who & Why</a>
//                 </li>
//                 <li>
//                   <a href="#Internship">Internship</a>
//                 </li>
//                 <li>
//                   <a href="#Achievement">Achievement</a>
//                 </li>
//                 <li>
//                   <a href="#certificate">Search for ID</a>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <a href="#LetsTalk" id="talk">
//                 Let's Talk
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Navbar;

// --------------------------------------------------------------------------------
import React from "react";
import "./../Navbar/Navbar.css";


const Navbar = () => {
  return (
    <>
      <div className="MA-navbar">
        {/* الطرف اليساري */}
        <div className="MA-Logo-container">
          <img className="MA-Logo-image" src="./images/logo.svg" alt="logo" />
        

          <div className=".MA-Logo-description">Digital marketing agency</div>
        </div>
        {/* الطرف اليميني */}
        <div className="MA-Right-navbar">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#clients">Clients & Partners</a>
          <a href="#clients">x-Academy</a>
          <div className="dropdown">
            <button className="dropbtn">About Us</button>
            <div className="dropdown-content">
              <a href="#who-why">Who & Why</a>
              <a href="#internship">Internship</a>
              <a href="#achievement">Achievement</a>
              <a href="#search-id">Search for ID</a>
            </div>
          </div>
          <a href="#LetsTalk" id="talk">
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
};
export default Navbar;
