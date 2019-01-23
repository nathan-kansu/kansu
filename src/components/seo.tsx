import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'

interface SeoProps {
  description?: string
  keywords?: string[]
  lang?: string
  meta?: []
  title: string
}

function SEO({
  description,
  lang = 'en',
  meta = [],
  keywords = [],
  title,
}: SeoProps) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                content: metaDescription,
                name: `description`,
              },
              {
                content: title,
                property: `og:title`,
              },
              {
                content: metaDescription,
                property: `og:description`,
              },
              {
                content: `website`,
                property: `og:type`,
              },
              {
                content: `summary`,
                name: `twitter:card`,
              },
              {
                content: data.site.siteMetadata.author,
                name: `twitter:creator`,
              },
              {
                content: title,
                name: `twitter:title`,
              },
              {
                content: metaDescription,
                name: `twitter:description`,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      content: keywords.join(`, `),
                      name: `keywords`,
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
