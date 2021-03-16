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
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
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
          <div className="header">
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
              className={`navbar-menu ${this.state.navBarActiveClass}`}
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

            {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
