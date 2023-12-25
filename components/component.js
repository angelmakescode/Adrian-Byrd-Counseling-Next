import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className="app-component-container">
        <h1 className="app-component-text">{props.heading}</h1>
        <h1 className="app-component-text1">{props.heading1}</h1>
        <span className="app-component-text2">
          <span>
            Adrian works collaboratively with her clients, helping them clarify
            and reach each one of their individualized goals.
          </span>
          <br></br>
          <br></br>
          <span>
            By allowing her clients to explore who they are in an encouraging
            and safe environment, Adrian helps people move away from things that
            no longer work and move forward to a better way of being.
          </span>
        </span>
      </div>
      <style jsx>
        {`
          .app-component-container {
            width: 50%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .app-component-text {
            font-size: 2.2rem;
            align-self: flex-start;
            text-align: left;
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .app-component-text1 {
            align-self: flex-start;
            text-align: left;
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .app-component-text2 {
            color: var(--dl-color-gray-black);
            font-size: 1.3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Raleway';
            font-weight: 500;
            margin-right: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 991px) {
            .app-component-container {
              align-items: stretch;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .app-component-text {
              text-align: center;
            }
            .app-component-text1 {
              text-align: center;
            }
            .app-component-text2 {
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
            .app-component-container {
              width: 100%;
            }
            .app-component-text {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .app-component-text1 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .app-component-text2 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .app-component-container {
              width: 100%;
              align-self: center;
              align-items: center;
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .app-component-text2 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  heading: 'meet your coach',
  heading1: 'Adrian byrd',
}

AppComponent.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
}

export default AppComponent
