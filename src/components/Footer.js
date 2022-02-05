import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__column">
              <h4 className="footer__heading">Kontakt</h4>
              <a className="footer__link" href="tel:+48 576 226 448">+48 576 226 448</a>
              <a className="footer__link" href="mailto:kontakt@elmotech.pl">kontakt@elmotech.pl</a>
              <div className="footer__fb">
                <a className="footer__link" href="https://www.facebook.com/elmotechsp" target="_blank">Dołącz do nas<svg xmlns="http://www.w3.org/2000/svg" width="23.319" height="23.319" viewBox="0 0 23.319 23.319"><defs><style>{`.a{fill:#fff;}`}</style></defs><path class="a" d="M20.821,2.25H2.5A2.5,2.5,0,0,0,0,4.748V23.071a2.5,2.5,0,0,0,2.5,2.5H9.643V17.641H6.363V13.91H9.643V11.065c0-3.235,1.926-5.022,4.876-5.022a19.866,19.866,0,0,1,2.89.252V9.471H15.78a1.866,1.866,0,0,0-2.1,2.016V13.91h3.58l-.573,3.732H13.677v7.928h7.144a2.5,2.5,0,0,0,2.5-2.5V4.748a2.5,2.5,0,0,0-2.5-2.5Z" transform="translate(0 -2.25)" /></svg></a>
              </div>
            </div>
            <div className="footer__column">
              <h4 className="footer__heading">Adres</h4>
              <p>ul. Krzywa 11</p>
              <p>37-400 Nisko</p>
              <p>woj. podkarpackie</p>
            </div>
            <div className="footer__column">
              <h4 className="footer__heading">Menu</h4>
              <Link className="footer__link" to="/">Strona główna</Link>
              <Link className="footer__link" to="/contact">Kontakt</Link>
              <Link className="footer__link" to="/blog">Nasze Realizacje</Link>
            </div>
            <div className="footer__column">
              <div className="footer__logo">
                <Link className="footer__link" to="/">
                  <img src={logo} alt="Elmo-tech" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
