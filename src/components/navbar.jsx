import React, { Component } from "react";

//Stateless Functional Component
//In SFC:
//'this' doesn't work
//'this' only works in class components
//=> So we need to add 'props' as a parameter inside (),
//   React will pass the 'props' object as an argument to the function at run time
const NavBar = (props) => {
  //{totalCounters} = props.totalCounters
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill bg-secondary">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

// Class-Based Component
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Navbar{" "}
//             <span className="badge badge-pill bg-secondary">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

export default NavBar;
