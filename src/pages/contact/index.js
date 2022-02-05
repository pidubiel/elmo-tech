import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'form-city': form.getAttribute('city'),
        'form-tel': form.getAttribute('tel'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="contact">
          <div className="container">
            <div className="contact__wrapper">
              <div className="contact__info">
                <div className="contact__item">
                  <div className="contact__item-icon">
                  </div>
                  <div className="contact__item-text">
                    <p>ul. Krzywa 11</p>
                    <p>37-400 Nisko</p>
                  </div>
                </div>
                <div className="contact__item">
                  <div className="contact__item-icon">
                  </div>
                  <div className="contact__item-text">
                    <a href="mailto:kontakt@elmotech.pl">kontakt@elmotech.pl</a>
                  </div>
                </div>
                <div className="contact__item">
                  <div className="contact__item-icon">
                  </div>
                  <div className="contact__item-text">
                    <a href="tel:+48 576 226 448">+48 576 226 448</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
