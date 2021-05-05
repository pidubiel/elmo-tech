import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const urlLink = "https://i.ibb.co/xGfqBFd/1.jpg";

    return (
      <>
        <div className="container">
          <div className="work">
            <div className="work__grid">
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/xGfqBFd/1.jpg)` }}></div>
                <div className="work__text">
                  <p>Pysznica</p>
                  <p>3.5kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/MpzVdkq/2.jpg)` }}></div>
                <div className="work__text">
                  <p>Nisko</p>
                  <p>4.235kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/RBBL4cr/3.jpg)` }}></div>
                <div className="work__text">
                  <p>Nienadówka</p>
                  <p>8.8kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/x3zvTgk/4.jpg)` }}></div>
                <div className="work__text">
                  <p>Nisko</p>
                  <p>3.3kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/6wgCsT3/5.jpg)` }}></div>
                <div className="work__text">
                  <p>Janów Lubelski</p>
                  <p>OŚWIETLENIE LED</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/34tMy27/6.jpg)` }}></div>
                <div className="work__text">
                  <p>Bogoria</p>
                  <p>5.2kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/rF1f1XL/7.jpg)` }}></div>
                <div className="work__text">
                  <p>Słonowice</p>
                  <p>8.5kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/LxwzWW3/8.jpg)` }}></div>
                <div className="work__text">
                  <p>Samocice</p>
                  <p>8.8kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/Wvt1jfR/9.jpg)` }}></div>
                <div className="work__text">
                  <p>Pysznica</p>
                  <p>3.2kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/6Bh2D1z/10.jpg)` }}></div>
                <div className="work__text">
                  <p>Tarnobrzeg</p>
                  <p>2.275kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/Y7LTj1r/11.jpg)` }}></div>
                <div className="work__text">
                  <p>Tarnobrzeg</p>
                  <p>5.04kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/2FZgVbR/12.jpg)` }}></div>
                <div className="work__text">
                  <p>Przemyśl</p>
                  <p>7.4kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/6yFBdrV/13.jpg)` }}></div>
                <div className="work__text">
                  <p>Lipa</p>
                  <p>3.85kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/GdrWG4m/14.jpg)` }}></div>
                <div className="work__text">
                  <p>Borowa</p>
                  <p>4.02kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/wLWLvvZ/15.jpg)` }}></div>
                <div className="work__text">
                  <p>Lipa</p>
                  <p>4.48kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/1L3jymC/16.jpg)` }}></div>
                <div className="work__text">
                  <p>Radymno</p>
                  <p>5.07kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/6PytWX8/17.jpg)` }}></div>
                <div className="work__text">
                  <p>Żohatyn</p>
                  <p>2.68kWp</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/0r4Gdtt/18.jpg)` }}></div>
                <div className="work__text">
                  <p>Nisko</p>
                  <p>Rozdzielnica mieszkaniowa</p>
                </div>
              </div>
              <div className="work__item">
                <div className="work__image" style={{ backgroundImage: `url(https://i.ibb.co/6BppvX2/19.jpg)` }}></div>
                <div className="work__text">
                  <p>Janów Lubelski</p>
                  <p>Ogrzewanie podłogowe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="columns is-multiline">
          {posts &&
            posts.map(({ node: post }) => (
              <div className="is-parent column is-6" key={post.id}>
                <article
                  className={`blog-list-item tile is-child box notification ${post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                >
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                    <p className="post-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <span className="subtitle is-size-5 is-block">
                        {post.frontmatter.date}
                      </span>
                    </p>
                  </header>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      Keep Reading →
                  </Link>
                  </p>
                </article>
              </div>
            ))}
        </div> */}
      </>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
