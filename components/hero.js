import React from 'react'

import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <div className={`hero-hero ${props.rootClassName} `}>
        <div className="hero-container">
          <h1 className="hero-text">{props.heading}</h1>
          <h1 className="hero-text1">{props.heading1}</h1>
          <span className="hero-text2">
            <span>
              Adrian works collaboratively with her clients, helping them
              clarify and reach each one of their individualized goals.
            </span>
            <br></br>
            <br></br>
            <span>
              By allowing her clients to explore who they are in an encouraging
              and safe environment, Adrian helps people move away from things
              that no longer work and move forward to a better way of being.
            </span>
          </span>
        </div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="hero-image"
        />
      </div>
      <style jsx>
        {`
          .hero-hero {
            width: 92%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: 0px;
            min-height: auto;
            align-items: center;
            border-radius: 25px;
            margin-bottom: 0px;
            flex-direction: row;
            justify-content: space-between;
          }
          .hero-container {
            width: 50%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .hero-text {
            font-size: 2.2rem;
            align-self: flex-start;
            text-align: left;
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .hero-text1 {
            align-self: flex-start;
            text-align: left;
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .hero-text2 {
            color: var(--dl-color-gray-black);
            font-size: 1.3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Raleway';
            font-weight: 500;
            margin-right: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .hero-image {
            width: 50%;
            box-shadow: 5px 5px 10px 0px #929292;
            object-fit: cover;
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            border-radius: 25px;
            border-top-width: 3px;
            border-left-width: 3px;
            border-right-width: 3px;
          }
          @media (max-width: 991px) {
            .hero-hero {
              flex-direction: column;
            }
            .hero-container {
              align-items: stretch;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .hero-text {
              text-align: center;
            }
            .hero-text1 {
              text-align: center;
            }
            .hero-text2 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .hero-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .hero-container {
              width: 100%;
            }
            .hero-text {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .hero-text1 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .hero-text2 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .hero-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .hero-container {
              width: 100%;
              align-self: center;
              align-items: center;
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .hero-text2 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
            }
            .hero-image {
              width: 100%;
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  heading: 'meet your coach',
  rootClassName: '',
  heading1: 'Adrian byrd',
  image_src: 'https://i.imgur.com/mmU03TW.jpg',
  image_alt: 'image',
}

Hero.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Hero
