import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'

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
            Thank you for reaching out!
          </h1>
          <span className="contact-thank-you-text1">
            We&apos;ll be in touch within 2 business days. 
          </span>
          <div className="contact-thank-you-btn-group"></div>
        </div>
        <div className="contact-thank-you-container1">
          <div className="contact-thank-you-container2">
            <span className="contact-thank-you-text2">EMAIL</span>
            <a
              href="mailto:adrian@adrianbyrdcounseling.com?subject="
              className="contact-thank-you-link"
            >
              adrian@adrianbyrdcounseling.com
            </a>
          </div>
          <div className="contact-thank-you-container3">
            <span className="contact-thank-you-text3">CALL</span>
            <a href="tel:(217) 358-4548" className="contact-thank-you-link1">
              (217) 358-4548
            </a>
          </div>
          <div className="contact-thank-you-container4">
            <span className="contact-thank-you-text4">OFFICE LOCATION</span>
            <span className="contact-thank-you-text5">
              <a
                href="https://www.google.com/maps/place/5130+Hickory+Point+Frontage+Rd+%23219,+Decatur,+IL+62526/@39.9110672,-88.9563392,17z/data=!3m1!4b1!4m5!3m4!1s0x8874b213b6207359:0x90e609820722f6be!8m2!3d39.9110631!4d-88.9537643?entry=ttu"
                target="_blank"
                rel="noreferrer noopener"
              >
                5130 Hickory Point Frontage Road
              </a>
              <a
                href="https://www.google.com/maps/place/5130+Hickory+Point+Frontage+Rd+%23219,+Decatur,+IL+62526/@39.9110672,-88.9563392,17z/data=!3m1!4b1!4m5!3m4!1s0x8874b213b6207359:0x90e609820722f6be!8m2!3d39.9110631!4d-88.9537643?entry=ttu"
                target="_blank"
                rel="noreferrer noopener"
              >
                <br></br>
              </a>
              <a
                href="https://www.google.com/maps/place/5130+Hickory+Point+Frontage+Rd+%23219,+Decatur,+IL+62526/@39.9110672,-88.9563392,17z/data=!3m1!4b1!4m5!3m4!1s0x8874b213b6207359:0x90e609820722f6be!8m2!3d39.9110631!4d-88.9537643?entry=ttu"
                target="_blank"
                rel="noreferrer noopener"
              >
                Suite 219
              </a>
              <a
                href="https://www.google.com/maps/place/5130+Hickory+Point+Frontage+Rd+%23219,+Decatur,+IL+62526/@39.9110672,-88.9563392,17z/data=!3m1!4b1!4m5!3m4!1s0x8874b213b6207359:0x90e609820722f6be!8m2!3d39.9110631!4d-88.9537643?entry=ttu"
                target="_blank"
                rel="noreferrer noopener"
              >
                <br></br>
              </a>
              <a
                href="https://www.google.com/maps/place/5130+Hickory+Point+Frontage+Rd+%23219,+Decatur,+IL+62526/@39.9110672,-88.9563392,17z/data=!3m1!4b1!4m5!3m4!1s0x8874b213b6207359:0x90e609820722f6be!8m2!3d39.9110631!4d-88.9537643?entry=ttu"
                target="_blank"
                rel="noreferrer noopener"
              >
                Decatur IL, 62526
              </a>
            </span>
          </div>
        </div>
        <div className="contact-thank-you-container5">
          <div className="contact-thank-you-container6">
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
            flex: 2;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .contact-thank-you-container2 {
            flex: 1;
            width: 100%;
            height: 250px;
            display: flex;
            max-width: 100%;
            box-shadow: 5px 5px 10px 0px #8a8a8a;
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-threeunits);
            padding-top: var(--dl-space-space-twounits);
            margin-right: 0px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 25px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-beige);
          }
          .contact-thank-you-container2:hover {
            transform: scale(1.02);
          }
          .contact-thank-you-text2 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
          }
          .contact-thank-you-link {
            font-size: 20px;
            font-style: normal;
            margin-top: var(--dl-space-space-threeunits);
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .contact-thank-you-container3 {
            flex: 1;
            color: #ffffff;
            height: 250px;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #8a8a8a;
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-threeunits);
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 25px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-beige);
          }
          .contact-thank-you-container3:hover {
            transform: scale(1.02);
          }
          .contact-thank-you-text3 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
          }
          .contact-thank-you-link1 {
            color: var(--dl-color-gray-black);
            font-size: 20px;
            font-style: normal;
            margin-top: var(--dl-space-space-threeunits);
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: underline;
          }
          .contact-thank-you-container4 {
            flex: 1;
            height: 250px;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #8a8a8a;
            margin-top: var(--dl-space-space-threeunits);
            transition: 0.3s;
            align-items: center;
            margin-left: ThreeU0nits;
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-beige);
          }
          .contact-thank-you-container4:hover {
            transform: scale(1.02);
          }
          .contact-thank-you-text4 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
          }
          .contact-thank-you-text5 {
            font-size: 20px;
            font-style: normal;
            margin-top: 38px;
            text-align: center;
            font-family: Raleway;
            font-weight: 500;
            line-height: 1.3;
            margin-bottom: 38px;
            text-decoration: underline;
          }
          .contact-thank-you-container5 {
            width: 100%;
            height: 400px;
            margin-left: var(--dl-space-space-twounits);
            border-radius: 25px;
          }
          .contact-thank-you-container6 {
            display: contents;
          }
          @media (max-width: 991px) {
            .contact-thank-you-container1 {
              width: 100%;
            }
            .contact-thank-you-text2 {
              font-size: 1.3rem;
            }
            .contact-thank-you-link {
              font-size: 18px;
            }
            .contact-thank-you-text3 {
              font-size: 1.3rem;
            }
            .contact-thank-you-link1 {
              font-size: 18px;
            }
            .contact-thank-you-text4 {
              font-size: 1.3rem;
              text-align: center;
            }
            .contact-thank-you-text5 {
              font-size: 18px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-thank-you-container5 {
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
              flex-direction: column;
            }
            .contact-thank-you-container2 {
              width: 100%;
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .contact-thank-you-container3 {
              width: 100%;
            }
            .contact-thank-you-container4 {
              width: 100%;
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .contact-thank-you-container5 {
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
            .contact-thank-you-container1 {
              height: 634px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ContactThankYou
