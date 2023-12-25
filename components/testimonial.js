import React from 'react'

import PropTypes from 'prop-types'

const Testimonial = (props) => {
  return (
    <>
      <div className={`testimonial-testimonial ${props.rootClassName} `}>
        <img
          src="https://i.imgur.com/PIBbfeS.png"
          className="testimonial-image"
        />
        <div className="testimonial-testimonial1">
          <span className="testimonial-text">
            <span className="testimonial-text1">
              Adrian&apos;s expertise and encouragement were key in achieving my
              goals and embracing a more mindful lifestyle. Their approach made
              the journey more transformative and enjoyable.
            </span>
            <br></br>
            <br></br>
            <span>PHOEBE</span>
            <br></br>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-testimonial {
            width: 55%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            position: relative;
            max-width: auto;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-green);
          }
          .testimonial-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
          }
          .testimonial-testimonial1 {
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .testimonial-text {
            color: var(--dl-color-gray-beige);
            font-size: 1.5rem;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-family: 'Raleway';
            font-weight: 500;
          }
          .testimonial-root-class-name {
            background-color: var(--dl-color-gray-green);
          }
          @media (max-width: 991px) {
            .testimonial-testimonial {
              width: 95%;
              margin-top: var(--dl-space-space-fourunits);
            }
            .testimonial-text {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .testimonial-text1 {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial-testimonial {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .testimonial-testimonial {
              width: 85%;
              margin-top: 0px;
              padding-top: var(--dl-space-space-twounits);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .testimonial-text {
              width: auto;
              font-size: 1rem;
            }
            .testimonial-text1 {
              width: auto;
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial.defaultProps = {
  image_src: 'https://i.imgur.com/YQOxXlE.png',
  image_src1: 'https://i.imgur.com/YQOxXlE.png',
  image_alt1: 'image',
  image_alt: 'image',
  rootClassName: '',
}

Testimonial.propTypes = {
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Testimonial
