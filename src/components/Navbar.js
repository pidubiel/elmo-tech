import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import arrow from '../img/red-arrow.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }
  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'header--menu-open',
          })
          : this.setState({
            navBarActiveClass: '',
          })
        if (this.state.active) {
          document.body.style.overflow = 'hidden';
        }
        else {
          document.body.style.overflow = 'unset';
        }
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className={`header ${this.state.navBarActiveClass}`}>
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img className="header__logo" src={logo} alt="Elmo-tech" />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className="navbar-menu"
            >
              <span className="contact-us">skontaktuj się z nami już dziś <a href="tel:+48 576 226 448">+48 576 226 448</a></span>
              <div className="navbar">
                <Link className="navbar__item" activeClassName="navbar__item--active" to="/">
                  <img src={arrow} alt="" />Strona główna
              </Link>
                <Link className="navbar__item" activeClassName="navbar__item--active" to="/contact">
                  <img src={arrow} alt="" />Kontakt
              </Link>
                <Link className="navbar__item" activeClassName="navbar__item--active" to="/blog">
                  <img src={arrow} alt="" />Nasze Realizacje
              </Link>
              </div>
            </div>
            <div className="navbar__phone">
              <a href="tel:+48 576 226 448">
                <svg xmlns="http://www.w3.org/2000/svg" width="20.39" height="20.39" viewBox="0 0 20.39 20.39"><path d="M16.9,12.29l-3.8-1.63a.815.815,0,0,0-.951.234l-1.685,2.058A12.591,12.591,0,0,1,4.436,6.933L6.495,5.249A.813.813,0,0,0,6.729,4.3L5.1.493A.821.821,0,0,0,4.164.021L.632.836A.815.815,0,0,0,0,1.631,15.759,15.759,0,0,0,15.761,17.392a.815.815,0,0,0,.795-.632l.815-3.533a.825.825,0,0,0-.476-.938Z" transform="translate(3.319 0) rotate(11)" /></svg></a>
            </div>
            <div className="navbar__switcher" onClick={() => this.toggleHamburger()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
