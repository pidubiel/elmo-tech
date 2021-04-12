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
                    <a href="mailto:elmotech.sp@gmail.com">elmotech.sp@gmail.com</a>
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
              <div className="contact__inputs">
                <h1 className="contact__title">Formularz kontaktowy</h1>
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="contact__group">
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Imię
                  </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'city'}>
                        Miejscowość
                  </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'city'}
                          onChange={this.handleChange}
                          id={'city'}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="contact__group">
                    <div className="field">
                      <label className="label" htmlFor={'tel'}>
                        Numer telefonu
                  </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'tel'}
                          name={'tel'}
                          onChange={this.handleChange}
                          id={'tel'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'email'}>
                        Email
                  </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'email'}
                          name={'email'}
                          onChange={this.handleChange}
                          id={'email'}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                      Wiadomość
                  </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'message'}
                        onChange={this.handleChange}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-link" type="submit">
                      Wyślij
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
