import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="navigation-links-link">{props.text}</a>
        </Link>
        <Link href="/about">
          <a className="navigation-links-link1">{props.text2}</a>
        </Link>
        <Link href="/team">
          <a className="navigation-links-link2">{props.text21}</a>
        </Link>
        <Link href="/info">
          <a className="navigation-links-link3">{props.text3}</a>
        </Link>
        <Link href="/contact">
          <a className="navigation-links-link4">{props.text31}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            font-style: normal;
            font-family: Raleway;
            font-weight: 600;
            text-decoration: none;
          }
          .navigation-links-link1 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 600;
            margin-left: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .navigation-links-link2 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 600;
            margin-left: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .navigation-links-link3 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 600;
            margin-left: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .navigation-links-link4 {
            display: none;
            font-style: normal;
            font-family: Raleway;
            font-weight: 600;
            margin-left: var(--dl-space-space-threeunits);
            text-decoration: none;
          }

          .navigation-links-root-class-name8 {
            align-self: center;
            margin-right: 150px;
          }
          @media (max-width: 991px) {
            .navigation-links-nav {
              justify-content: flex-start;
            }
            .navigation-links-link {
              display: none;
              font-size: 14px;
              margin-left: var(--dl-space-space-twounits);
            }
            .navigation-links-link1 {
              font-size: 14px;
              margin-left: 0px;
            }
            .navigation-links-link2 {
              font-size: 14px;
              margin-left: var(--dl-space-space-twounits);
            }
            .navigation-links-link3 {
              font-size: 14px;
              margin-left: var(--dl-space-space-twounits);
            }
            .navigation-links-link4 {
              font-size: 14px;
              margin-left: var(--dl-space-space-twounits);
            }
            .navigation-links-root-class-name8 {
              margin: 50px;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text4: 'Blog',
  rootClassName: '',
  text2: 'ABOUT',
  text21: 'TEAM',
  text: 'HOME',
  text5: 'ABOUT',
  text31: 'CONTACT',
  text1: 'SERVICES',
  text3: 'INFO',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text21: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  text31: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks
