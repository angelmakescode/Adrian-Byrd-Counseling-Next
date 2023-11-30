import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard11 = (props) => {
  return (
    <>
      <div className={`feature-card11-feature-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card11-image"
        />
      </div>
      <style jsx>
        {`
          .feature-card11-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 10px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card11-feature-card:hover {
            transform: scale(1.02);
          }
          .feature-card11-image {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .feature-card11-root-class-name {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name1 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name2 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name3 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name4 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name5 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name6 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name7 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name8 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name9 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name11 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name12 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name13 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name14 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name15 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name16 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name17 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name18 {
            background-color: #ffffff;
          }
          .feature-card11-root-class-name19 {
            background-color: #ffffff;
          }
          @media (max-width: 991px) {
            .feature-card11-root-class-name9 {
              background-color: #fbfaf4;
            }
            .feature-card11-root-class-name11 {
              background-color: #fbfaf4;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard11.defaultProps = {
  rootClassName: '',
  title: 'Lorem ipsum',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000',
}

FeatureCard11.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard11
