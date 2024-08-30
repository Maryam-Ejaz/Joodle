// // // MenuComponent.tsx

// // 'use client'; // This directive tells Next.js that this is a Client Component

// // import React, { useState } from 'react';
// // import styles from './Menu.module.css';

// // const MenuComponent: React.FC = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
// //     e.preventDefault();
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className={styles.containerFluid}>
// //       <div className="row">
// //         <div className="col-xs-12">
// //           <div className={styles.msNavContainer}>
// //             <ul className={`${styles.msNav} ${isOpen ? styles.open : ''}`}>
// //               <input
// //                 type="checkbox"
// //                 id="ms-menu"
// //                 className={styles.msMenuToggle}
// //                 name="ms-menu-toggle"
// //                 checked={isOpen}
// //                 onChange={() => setIsOpen(!isOpen)}
// //               />
// //               <div className={`${styles.bgChange} ${isOpen ? styles.bgChangeOpen : ''}`}></div>
// //               <li className={`${styles.msLi} ${styles.msLi3} ${styles.msLiLast}`}>
// //                 <a href="#" onClick={handleMenuClick}>
// //                   <span className="fa fa-search"></span>
// //                 </a>
// //               </li>
// //               <li className={`${styles.msLi} ${styles.msLi2}`}>
// //                 <a href="#" onClick={handleMenuClick}>
// //                   <span className="fa fa-flask"></span>
// //                 </a>
// //               </li>
// //               <li className={`${styles.msLi} ${styles.msLi1} ${styles.msLiFirst}`}>
// //                 <a href="#" onClick={handleMenuClick}>
// //                   <span className="fa fa-fort-awesome"></span>
// //                 </a>
// //               </li>
// //               <li className={styles.msMain}>
// //                 <a href="#" onClick={handleMenuClick}>
// //                   <label className={styles.msMenuToggleLbl} htmlFor="ms-menu">
// //                     <span className="fa fa-plus"></span>
// //                   </label>
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MenuComponent;



// import React, { useState } from 'react';
// import  './Menu.scss';

// const GooeyMenu: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="containerFluid">
      
      
//       <nav className="menu">
//         <input
//           type="checkbox"
//           id="menu-open"
//           className="menu-open"
//           checked={isOpen}
//           onChange={handleToggle}
//         />
//         <label
//           className="menu-open-button"
//           htmlFor="menu-open"
//         >
//           <span className="hamburger hamburger-1"></span>
//           <span className="hamburger hamburger-2"></span>
//           <span className="hamburger hamburger-3"></span>
//         </label>
        
//         <a href="#" className="menu-item"> <i className="fa fa-bar-chart"></i> </a>
//         <a href="#" className="menu-item"> <i className="fa fa-plus"></i> </a>
//         <a href="#" className="menu-item"> <i className="fa fa-heart"></i> </a>
//         <a href="#" className="menu-item"> <i className="fa fa-envelope"></i> </a>
//         {/* <a href="#" className="menu-item"> <i className="fa fa-heart"></i> </a>
//         <a href="#" className="menu-item"> <i className="fa fa-envelope"></i> </a> */}
//       </nav>
      
//       {/* SVG Filters */}
//       <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
//         <defs>
//           <filter id="shadowed-goo">
//             <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
//             <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
//             <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
//             <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
//             <feOffset in="shadow" dx="1" dy="1" result="shadow" />
//             <feComposite in2="shadow" in="goo" result="goo" />
//             <feComposite in2="goo" in="SourceGraphic" result="mix" />
//           </filter>
//           <filter id="goo">
//             <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
//             <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
//             <feComposite in2="goo" in="SourceGraphic" result="mix" />
//           </filter>
//         </defs>
//       </svg>
//     </div>
//   );
// };

// export default GooeyMenu;
