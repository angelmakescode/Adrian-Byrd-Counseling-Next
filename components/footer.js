import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <footer className="footer-footer1">
          <div className="footer-separator"></div>
          <Link href="/">
            <a className="footer-link">
              <svg viewBox="0 0 1024 1024" className="footer-icon">
                <path d="M243.499 542.165l225.835-225.835v494.336c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-494.336l225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-298.667-298.667c-4.096-4.096-8.789-7.168-13.824-9.259-5.205-2.176-10.795-3.243-16.341-3.243-10.923 0-21.845 4.181-30.165 12.501l-298.667 298.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </a>
          </Link>
          <div className="footer-container">
            <a href="tel:(217) 358-4548" className="footer-link1">
              {props.text}
            </a>
          </div>
          <div className="footer-container1">
            <a
              href="mailto:adrian@adrianbyrdcounseling.com?subject="
              className="footer-link2"
            >
              <span className="footer-text">
                adrian@adrianbyrdcounseling.com
              </span>
              <span></span>
            </a>
          </div>
          <footer className="footer-footer2">
            <div className="footer-icon-group">
              <a
                href="https://www.psychologytoday.com/us/therapists/adrian-marie-byrd-decatur-il/227268"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link3"
              >
                <img
                  alt={props.imageAlt}
                  src="https://media.licdn.com/dms/image/D4E0BAQESdpyXQfpO-w/company-logo_200_200/0/1688570692907/psychology_today_logo?e=2147483647&amp;v=beta&amp;t=FFa6Yr3IFFVvLm_BtG8jyXW0fj3nlQl6JHJ-OQ25EJw"
                  className="footer-image"
                />
              </a>
              <a
                href="https://www.facebook.com/adrianbyrdcounseling"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link4"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="footer-icon2"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </footer>
        </footer>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .footer-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .footer-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: #d9d9d9;
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .footer-link {
            display: contents;
          }
          .footer-icon {
            width: 34px;
            height: 34px;
            align-self: flex-start;
            text-decoration: none;
          }
          .footer-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link1 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            text-decoration: underline;
          }
          .footer-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link2 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            text-decoration: none;
          }
          .footer-footer2 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            justify-content: flex-start;
          }
          .footer-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .footer-link3 {
            display: contents;
          }
          .footer-image {
            width: 35px;
            height: 35px;
            object-fit: cover;
            text-decoration: none;
          }
          .footer-link4 {
            display: contents;
          }
          .footer-icon2 {
            width: 30px;
            height: 30px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }

          @media (max-width: 991px) {
            .footer-footer {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-footer1 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-icon {
              align-self: center;
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-link1 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-container1 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-link2 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-text {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-footer2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: center;
            }
            .footer-icon-group {
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding: var(--dl-space-space-unit);
              margin-top: 0px;
            }
            .footer-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .footer-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-icon {
              align-self: center;
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-link1 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-container1 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-link2 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-text {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-footer2 {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  imageAlt: 'image',
  text: '(217) 358-4548',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
}

Footer.propTypes = {
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
