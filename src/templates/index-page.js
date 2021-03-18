import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
//import introImg from './../../static/img/intro-img.png'
import Img from 'gatsby-image'
import iconA from './../../static/img/icons/iconA.svg'
import iconB from './../../static/img/icons/iconB.svg'
import iconC from './../../static/img/icons/iconC.svg'
import iconD from './../../static/img/icons/iconD.svg'
import iconE from './../../static/img/icons/iconE.svg'

const HomePage = ({ data, benefits }) => (
  <>
    <section className="intro-banner">
      <div className="container">
        <div className="location-list">
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="30" viewBox="0 0 21 30"><defs></defs><path d="M18,3A10.492,10.492,0,0,0,7.5,13.5C7.5,21.375,18,33,18,33S28.5,21.375,28.5,13.5A10.492,10.492,0,0,0,18,3Zm0,14.25a3.75,3.75,0,1,1,3.75-3.75A3.751,3.751,0,0,1,18,17.25Z" transform="translate(-7.5 -3)" /></svg>małopolskie</li>
            <li>              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="30" viewBox="0 0 21 30"><defs></defs><path d="M18,3A10.492,10.492,0,0,0,7.5,13.5C7.5,21.375,18,33,18,33S28.5,21.375,28.5,13.5A10.492,10.492,0,0,0,18,3Zm0,14.25a3.75,3.75,0,1,1,3.75-3.75A3.751,3.751,0,0,1,18,17.25Z" transform="translate(-7.5 -3)" /></svg>podkarpackie</li>
            <li>              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="30" viewBox="0 0 21 30"><defs></defs><path d="M18,3A10.492,10.492,0,0,0,7.5,13.5C7.5,21.375,18,33,18,33S28.5,21.375,28.5,13.5A10.492,10.492,0,0,0,18,3Zm0,14.25a3.75,3.75,0,1,1,3.75-3.75A3.751,3.751,0,0,1,18,17.25Z" transform="translate(-7.5 -3)" /></svg>świętokrzyskie</li>
            <li>              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="30" viewBox="0 0 21 30"><defs></defs><path d="M18,3A10.492,10.492,0,0,0,7.5,13.5C7.5,21.375,18,33,18,33S28.5,21.375,28.5,13.5A10.492,10.492,0,0,0,18,3Zm0,14.25a3.75,3.75,0,1,1,3.75-3.75A3.751,3.751,0,0,1,18,17.25Z" transform="translate(-7.5 -3)" /></svg>lubelskie</li>
          </ul>
        </div>
        <div className="intro-banner__wrapper">
          <div className="intro-banner__text">
            <div className="intro-banner__box">
              <h2>Montaż instalacji</h2>
              <ul>
                <li><img src={iconA} alt="" />Fotowoltaicznych</li>
                <li><img src={iconB} alt="" />Elektrycznych</li>
              </ul>
            </div>
            <div className="intro-banner__box intro-banner__box--secondary">
              <h2>Dlaczego Elmo-tech</h2>
              <ul>
                <li><img src={iconC} alt="" />profesjonalny sprzęt</li>
                <li><img src={iconD} alt="" />gwarancja najwyższej jakości</li>
                <li><img src={iconE} alt="" />darmowa wycena u klienta</li>
              </ul>
            </div>
          </div>
          {/* <img className="intro-banner__img" src={introImg} alt="" /> */}
          <Img className="intro-banner__img" fluid={data.file.childImageSharp.fluid} />
          {/* <div className="intro-banner__img" style="{backgroundImage: url(`${introImg}`)}">

          </div> */}
        </div>
      </div>
    </section>
    <section className="advantages">
      <div className="container">
        <div className="advantages__wrapper">
          <h2 className="subheader">Zastanawiasz się nad instalacją fotowoltaiczną?</h2>
          <ul>
            <li>Umów się na <span>bezpłatny audyt i wycenę</span> już dziś!</li>
            <li>Dobieramy <span>optymalną</span> instalację pod zapotrzebowanie oraz oczekiwania klienta</li>
            <li>Przy każdej instalacji wykonujemy <span>niezbędne</span> pomiary instalacji elektrycznej</li>
            <li>Zapewniamy <span>solidny</span> montaż, dzięki któremu instalacja jest bezobsługowa oraz nie sprawia żadnych problemów</li>
            <li>Do każdej instalacji klient otrzymuje <span>komplet</span> dokumentów do zakładu energetycznego</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="benefits">
      <div className="container">
        <div className="benefits__wrapper">
          <h2 className="subheader subheader--secondary">Co zyskujesz?</h2>
          <ul>
            <li>
              <div className="benefits__item">
                <div className="benefits__image">
                  <Img fluid={benefits.image1.image.childImageSharp.fluid} />
                </div>
                <p>niższe rachunki za prąd</p>
              </div>
            </li>
            <li>
              <div className="benefits__item">
                <div className="benefits__image">
                  <Img fluid={benefits.image2.image.childImageSharp.fluid} />
                </div>
                <p>energię przyjazną środowisku</p>
              </div>
            </li>
            <li>
              <div className="benefits__item">
                <div className="benefits__image">
                  <Img fluid={benefits.image3.image.childImageSharp.fluid} />
                </div>
                <p>bezawaryjną instalację</p>
              </div>
            </li>
            <li>
              <div className="benefits__item">
                <div className="benefits__image">
                  <Img fluid={benefits.image4.image.childImageSharp.fluid} />
                </div>
                <p>zwrot kosztów już po kilku latach</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__wrapper">
          <div className="portfolio__item">
            <div className="portfolio__text">
              <h3>Instalacja fotowoltaiczna na gruncie</h3>
              <ul>
                <li>moc 2.56 kWp</li>
                <li>konstrukcja jednooporowa</li>
                <li>kąt nachylenia 30 stopni</li>
              </ul>
            </div>
            <div className="portfolio__img">
            </div>
          </div>
          <div className="portfolio__item">
            <div className="portfolio__text">
              <h3>Oświetlenie rgb sali weselnej</h3>
              <ul>
                <li>800 metrów taśm LED</li>
                <li>sterowanie radiowe</li>
                <li>konfiguracja kolorystyki i natężenia jasności</li>
                <li>dynamiczny dobór</li>
              </ul>
            </div>
            <div className="portfolio__img">
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div> */}
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  benefits: PropTypes.shape({
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(frontmatter.benefits);

  return (
    <Layout>
      <HomePage data={data} benefits={frontmatter.benefits} />
      {/* <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      /> */}
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    file(relativePath: {eq: "intro-img.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        benefits {
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image4 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
