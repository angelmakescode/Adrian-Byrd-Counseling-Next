import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'
import Footer from '../components/footer'

const ContactThankYou = (props) => {
  return (
    <>
      <div className="contact-thank-you-container">
        <Head>
          <title>Contact-Thank-You - Adrian Byrd Counseling</title>
          <meta
            name="description"
            content="Specialist in ACT, DBT, CBT—collaborative therapy for growth. Move confidently towards a brighter future."
          />
          <meta
            property="og:title"
            content="Contact-Thank-You - Adrian Byrd Counseling"
          />
          <meta
            property="og:description"
            content="Specialist in ACT, DBT, CBT—collaborative therapy for growth. Move confidently towards a brighter future."
          />
        </Head>
        <Header></Header>
        <div className="contact-thank-you-banner">
          <h1 className="contact-thank-you-text">
            Thank You For Reaching Out!
          </h1>
          <span className="contact-thank-you-text1">
            I&apos;ll be in touch within 2 business days. 
          </span>
          <div className="contact-thank-you-btn-group"></div>
        </div>
        <div className="contact-thank-you-container1">
          <div className="contact-thank-you-container2">
            <React.Fragment>
              <div style={{ width: '100%' }}>
                <iframe
                  width="100%"
                  height={600}
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=5130%20Hickory%20Point%20Frontage%20Road%20Suite%20219%20in%20Decatur%20IL,%2062526+(Adrian%20Byrd%20Counseling)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                >
                  &lt;a
                  href="https://www.maps.ie/distance-area-calculator.html"&gt;distance
                  maps&lt;/a&gt;
                </iframe>
              </div>
            </React.Fragment>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .contact-thank-you-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-thank-you-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .contact-thank-you-text {
            font-size: 3rem;
            text-align: center;
            font-family: 'Raleway';
          }
          .contact-thank-you-text1 {
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contact-thank-you-btn-group {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .contact-thank-you-container1 {
            width: 55%;
            height: 500px;
            border-radius: 25px;
          }
          .contact-thank-you-container2 {
            display: contents;
          }
          @media (max-width: 991px) {
            .contact-thank-you-container1 {
              width: 100%;
              height: 100%;
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .contact-thank-you-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-thank-you-text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .contact-thank-you-container1 {
              width: 100%;
              height: 613px;
            }
          }
          @media (max-width: 479px) {
            .contact-thank-you-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .contact-thank-you-btn-group {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default ContactThankYou
