import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Adrian Byrd Counseling</title>
          <meta
            property="og:title"
            content="Contact - Adrian Byrd Counseling"
          />
        </Head>
        <Header></Header>
        <div className="contact-hero">
          <div className="contact-container01">
            <h1 className="contact-text">LEAVE A MESSAGE</h1>
            <span className="contact-text01">
              <span>Need to reach out? Fill out this form.</span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="contact-container02">
              <form
                action="https://formsubmit.co/adrian@adrianbyrdcounseling.com"
                method="POST"
                enctype="application/x-www-form-urlencoded"
                className="contact-form"
              >
                <textarea
                  name="message"
                  placeholder="name:"
                  className="contact-textarea textarea"
                ></textarea>
                <input
                  type="tel"
                  name="number"
                  required
                  placeholder="number:"
                  className="contact-textinput input"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email:"
                  className="contact-textinput1 input"
                />
                <textarea
                  name="message"
                  placeholder="leave a message:"
                  className="contact-textarea1 textarea"
                ></textarea>
                <button type="submit" className="contact-button button">
                  SUBMIT
                </button>
              </form>
              <h1 className="contact-text06">
                <span className="contact-text07">
                  I am committed to your privacy. Do NOT include confidential or
                  private information regarding your health condition in this
                  form or any other form found on this website.
                </span>
                <br></br>
              </h1>
              <div className="contact-container03">
                <input
                  type="checkbox"
                  checked="true"
                  className="contact-checkbox"
                />
                <span className="contact-text09">
                  Check this to agree to our Terms &amp; Conditions.
                </span>
              </div>
            </div>
          </div>
          <div className="contact-container04">
            <div className="contact-container05">
              <div className="contact-container06">
                <Script
                  html={`<div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5130%20Hickory%20Point%20Frontage%20Road%20Suite%20219%20in%20Decatur%20IL,%2062526+(Adrian%20Byrd%20Counseling)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>`}
                ></Script>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/cQeukUw.jpg"
            className="contact-image"
          />
        </div>
        <div className="contact-container07">
          <div className="contact-container08">
            <div className="contact-container09">
              <span className="contact-text10">EMAIL</span>
              <a
                href="mailto:adrian@adrianbyrdcounseling.com?subject="
                className="contact-link"
              >
                adrian@adrianbyrdcounseling.com
              </a>
            </div>
            <div className="contact-container10">
              <span className="contact-text11">CALL</span>
              <a href="tel:(217) 358-4548" className="contact-link01">
                (217) 358-4548
              </a>
            </div>
            <div className="contact-container11">
              <span className="contact-text12">OFFICE LOCATION</span>
              <span className="contact-text13">
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
        </div>
        <footer className="contact-footer">
          <div className="contact-separator"></div>
          <Link href="/contact">
            <a className="contact-link07">
              <svg viewBox="0 0 1024 1024" className="contact-icon">
                <path d="M243.499 542.165l225.835-225.835v494.336c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-494.336l225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-298.667-298.667c-4.096-4.096-8.789-7.168-13.824-9.259-5.205-2.176-10.795-3.243-16.341-3.243-10.923 0-21.845 4.181-30.165 12.501l-298.667 298.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </a>
          </Link>
          <div className="contact-container12">
            <a href="tel:(217) 358-4548" className="contact-link08">
              (217) 358-4548
            </a>
            <div className="contact-icon-group">
              <a
                href="https://www.facebook.com/adrianbyrdcounseling/"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-link09"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="contact-icon2"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="contact-container13">
            <a
              href="mailto:adrian@adrianbyrdcounseling.com?subject="
              className="contact-link10"
            >
              <span className="contact-text16">
                adrian@adrianbyrdcounseling.com
              </span>
              <br className="contact-text17"></br>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-hero {
            width: 100%;
            height: auto;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            min-height: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .contact-container01 {
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-end;
          }
          .contact-text {
            font-size: 3rem;
            max-width: 800px;
            align-self: flex-start;
            text-align: left;
            text-transform: uppercase;
          }
          .contact-text01 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .contact-container02 {
            flex: 0 0 auto;
            width: 500px;
            height: 550px;
            display: flex;
            box-shadow: 5px 5px 10px 0px #8c8989;
            margin-top: var(--dl-space-space-twounits);
            border-color: var(--dl-color-gray-black);
            border-width: 2.5px;
            border-radius: 25px;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #74927f;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 3px;
          }
          .contact-form {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .contact-textarea {
            width: 250px;
            height: auto;
            padding: 0.5rem;
            font-size: 15px;
            align-self: flex-start;
            box-shadow: 5px 5px 10px 0px #928f8f;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Raleway;
            margin-left: var(--dl-space-space-unit);
            padding-top: 11px;
            border-width: 2.5px;
            padding-left: 11px;
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 11px;
            padding-bottom: 11px;
            text-transform: uppercase;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 3px;
          }
          .contact-textinput {
            width: 250px;
            font-size: 15px;
            align-self: flex-start;
            box-shadow: 5px 5px 10px 0px #777373;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Raleway;
            margin-left: var(--dl-space-space-unit);
            border-width: 2.5px;
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 3px;
          }
          .contact-textinput1 {
            width: 250px;
            font-size: 15px;
            align-self: flex-start;
            box-shadow: 5px 5px 10px 0px #807a7a;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Raleway;
            margin-left: var(--dl-space-space-unit);
            border-width: 2.5px;
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 3px;
          }
          .contact-textarea1 {
            width: 250px;
            height: 166px;
            font-size: 15px;
            align-self: flex-start;
            box-shadow: 5px 5px 10px 0px #928f8f;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Raleway;
            margin-left: var(--dl-space-space-unit);
            padding-top: 11px;
            border-width: 2.5px;
            padding-left: 11px;
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-unit);
            padding-right: 11px;
            padding-bottom: 11px;
            text-transform: uppercase;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 3px;
          }
          .contact-button {
            color: var(--dl-color-gray-black);
            align-self: flex-start;
            box-shadow: 5px 5px 10px 0px #928f8f;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
            border-width: 2.5px;
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-unit);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .contact-text06 {
            font-size: 15px;
            max-width: 450px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: Raleway;
            font-weight: 600;
            margin-left: 0px;
            margin-right: 12px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-container03 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .contact-checkbox {
            width: 25px;
            height: 25px;
            align-self: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 2.5px;
          }
          .contact-text09 {
            align-self: center;
            margin-top: 0px;
            text-align: left;
            font-family: Raleway;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: 0px;
          }
          .contact-container04 {
            width: 100%;
            height: 600px;
            display: flex;
            align-self: flex-start;
            margin-top: 75px;
            align-items: stretch;
            margin-right: 0px;
            border-radius: 25px;
            flex-direction: column;
            justify-content: center;
          }
          .contact-container05 {
            width: 100%;
            height: 100%;
            border-radius: 25px;
          }
          .contact-container06 {
            display: contents;
          }
          .contact-image {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .contact-container07 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: center;
          }
          .contact-container08 {
            flex: 2;
            width: 50%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .contact-container09 {
            flex: 1;
            height: 250px;
            display: flex;
            max-width: 450px;
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
          .contact-container09:hover {
            transform: scale(1.02);
          }
          .contact-text10 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
          }
          .contact-link {
            font-size: 20px;
            font-style: normal;
            margin-top: var(--dl-space-space-threeunits);
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .contact-container10 {
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
          .contact-container10:hover {
            transform: scale(1.02);
          }
          .contact-text11 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
          }
          .contact-link01 {
            color: var(--dl-color-gray-black);
            font-size: 20px;
            font-style: normal;
            margin-top: var(--dl-space-space-threeunits);
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: underline;
          }
          .contact-container11 {
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
          .contact-container11:hover {
            transform: scale(1.02);
          }
          .contact-text12 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
          }
          .contact-text13 {
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
          .contact-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .contact-separator {
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
          .contact-link07 {
            display: contents;
          }
          .contact-icon {
            width: 34px;
            height: 34px;
            align-self: flex-start;
            text-decoration: none;
          }
          .contact-container12 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-link08 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            text-decoration: none;
          }
          .contact-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-link09 {
            display: contents;
          }
          .contact-icon2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            text-decoration: none;
          }
          .contact-container13 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-link10 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            text-decoration: none;
          }
          .contact-text17 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .contact-hero {
              height: auto;
              flex-direction: column;
            }
            .contact-container01 {
              height: auto;
              align-items: center;
              margin-right: 0px;
              margin-bottom: 0px;
              padding-right: 0px;
            }
            .contact-text {
              align-self: center;
              text-align: center;
            }
            .contact-text01 {
              align-self: center;
              text-align: center;
            }
            .contact-container02 {
              width: 50%;
              height: 550px;
              align-self: center;
            }
            .contact-form {
              align-self: center;
            }
            .contact-textarea {
              padding: 1rem;
            }
            .contact-textarea1 {
              padding: 1rem;
            }
            .contact-button {
              align-self: center;
              margin-left: 0px;
            }
            .contact-text06 {
              text-align: left;
              margin-right: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .contact-text07 {
              text-align: center;
            }
            .contact-text09 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .contact-container04 {
              width: 95%;
              height: 100%;
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
              padding-right: 0px;
            }
            .contact-container05 {
              width: 100%;
              height: 100%;
              align-self: center;
            }
            .contact-container07 {
              align-items: center;
              flex-direction: column;
            }
            .contact-container08 {
              width: 100%;
            }
            .contact-text10 {
              font-size: 1.3rem;
            }
            .contact-link {
              font-size: 18px;
            }
            .contact-text11 {
              font-size: 1.3rem;
            }
            .contact-link01 {
              font-size: 18px;
            }
            .contact-text12 {
              font-size: 1.3rem;
              text-align: center;
            }
            .contact-text13 {
              font-size: 18px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .contact-hero {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-container01 {
              align-items: flex-start;
            }
            .contact-text01 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .contact-container02 {
              width: 425px;
              height: 450px;
              align-self: center;
              align-items: center;
              margin-left: 0px;
              padding-left: 5px;
              padding-right: 5px;
            }
            .contact-form {
              align-self: center;
            }
            .contact-textarea {
              height: 125px;
              font-size: 12px;
              margin-top: 5px;
              margin-left: 0px;
              padding-top: var(--dl-space-space-unit);
              padding-left: 1rem;
              margin-bottom: 5px;
              padding-right: 1rem;
              padding-bottom: var(--dl-space-space-unit);
            }
            .contact-textinput {
              font-size: 12px;
              margin-top: 5px;
              margin-left: 0px;
              margin-bottom: 5px;
            }
            .contact-textinput1 {
              font-size: 12px;
              margin-top: 5px;
              margin-left: 0px;
              margin-bottom: 5px;
            }
            .contact-textarea1 {
              height: 125px;
              font-size: 12px;
              margin-top: 5px;
              margin-left: 0px;
              padding-top: var(--dl-space-space-unit);
              padding-left: 1rem;
              margin-bottom: 5px;
              padding-right: 1rem;
              padding-bottom: var(--dl-space-space-unit);
            }
            .contact-button {
              align-self: center;
              margin-top: var(--dl-space-space-halfunit);
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .contact-text06 {
              font-size: 12px;
              margin-top: var(--dl-space-space-halfunit);
              text-align: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .contact-container03 {
              align-self: center;
              align-items: center;
              margin-left: 0px;
              justify-content: center;
            }
            .contact-text09 {
              font-size: 12px;
              font-family: Raleway;
            }
            .contact-container04 {
              height: auto;
              padding-left: 0px;
              background-color: transparent;
            }
            .contact-container05 {
              width: 100%;
              height: 613px;
            }
            .contact-container07 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-container08 {
              flex-direction: column;
            }
            .contact-container09 {
              width: 100%;
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .contact-container10 {
              width: 100%;
            }
            .contact-container11 {
              width: 100%;
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .contact-footer {
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .contact-icon {
              align-self: center;
            }
            .contact-container12 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .contact-link08 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-icon2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-container13 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .contact-link10 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .contact-text16 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .contact-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .contact-container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-text {
              font-size: 2.5rem;
              font-family: Raleway;
            }
            .contact-text01 {
              font-family: Raleway;
            }
            .contact-container02 {
              width: 75%;
              height: 450px;
            }
            .contact-form {
              align-self: center;
            }
            .contact-textarea {
              width: 250px;
              height: 100px;
              align-self: center;
              margin-left: 0px;
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .contact-textinput {
              align-self: center;
              margin-left: 0px;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .contact-textinput1 {
              align-self: center;
              margin-left: 0px;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .contact-textarea1 {
              width: 250px;
              height: 100px;
              align-self: center;
              margin-left: 0px;
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .contact-text06 {
              text-align: center;
            }
            .contact-container03 {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .contact-text09 {
              font-size: 12px;
            }
            .contact-container04 {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-image {
              width: 100%;
              display: none;
              box-shadow: 5px 5px 10px 0px #757272;
              border-radius: 25px;
            }
            .contact-container07 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .contact-container08 {
              height: 634px;
            }
            .contact-footer {
              padding: var(--dl-space-space-unit);
            }
            .contact-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .contact-icon {
              align-self: center;
            }
            .contact-container12 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .contact-link08 {
              text-align: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-container13 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .contact-link10 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .contact-text16 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
