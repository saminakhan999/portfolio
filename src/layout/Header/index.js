import React from 'react';
import { NavHashLink } from 'react-router-hash-link';


const Header = () => {
    return (
      <header className="wholeHeader">
        <div className="navContainer">
          <nav className="navBar">
            <NavHashLink smooth exact to="/#welcome" activeClassName="active">
              Welcome
            </NavHashLink>
            <NavHashLink smooth exact to="/#experience" activeClassName="active">
              Experience
            </NavHashLink>
            <NavHashLink smooth exact to="/#projects" activeClassName="active">
              Projects
            </NavHashLink>
            <NavHashLink smooth exact to="/#skills" activeClassName="active">
              Skills
            </NavHashLink>
            <NavHashLink smooth exact to="/#contact" activeClassName="active">
              Contact
            </NavHashLink>
          </nav>
        </div>
      </header>
    );
}

export default Header;


//  <>
//    <nav>
//      <NavHashLink smooth exact to="/#about" activeClassName="active">
//        About
//      </NavHashLink>
//      <NavHashLink smooth exact to="/#projects" activeClassName="active">
//        Projects
//      </NavHashLink>
//      <NavHashLink smooth to="/#skills" activeClassName="active">
//        Skills
//      </NavHashLink>
//    </nav>
//  </>;
