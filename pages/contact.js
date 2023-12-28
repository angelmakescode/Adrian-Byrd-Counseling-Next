import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'
import Form1 from '../components/form1'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Adrian Byrd Counseling</title>
          <meta
            name="description"
            content="Specialist in ACT, DBT, CBT—collaborative therapy for growth. Move confidently towards a brighter future."
          />
          <meta
            property="og:title"
            content="Contact - Adrian Byrd Counseling"
          />
          <meta
            property="og:description"
            content="Specialist in ACT, DBT, CBT—collaborative therapy for growth. Move confidently towards a brighter future."
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
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="name:"
                  className="contact-textinput input"
                />
                <input
                  type="tel"
                  name="number"
                  required
                  placeholder="number:"
                  className="contact-textinput1 input"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email:"
                  className="contact-textinput2 input"
                />
                <textarea
                  name="message"
                  placeholder="leave a message:"
                  className="contact-textarea textarea"
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
        </div>
        <div className="contact-hero1">
          <Form1 rootClassName="form1-root-class-name"></Form1>
          <div className="contact-container07"></div>
          <form
            action="https://formsubmit.co/delicatedesign.png@gmail.com"
            method="POST"
            enctype="application/x-www-form-urlencoded"
            className="contact-form1"
          >
            <h1 className="contact-text10">LEAVE A MESSAGE</h1>
            <div className="contact-container08">
              <input
                type="text"
                name="first name"
                required
                placeholder="first name"
                id="first name"
                className="contact-textinput3 input"
              />
              <input
                type="text"
                name="last name"
                required
                placeholder="last name"
                id="last name"
                className="contact-textinput4 input"
              />
            </div>
            <input
              type="email"
              name="email address"
              required
              placeholder="email address"
              className="contact-textinput5 input"
            />
            <textarea
              placeholder="placeholder"
              id="message"
              name="message"
              className="contact-textarea1 textarea"
            ></textarea>
            <div className="contact-container09">
              <input
                type="text"
                name="campaign"
                value="2024-contaact-page"
                placeholder="placeholder"
                className="contact-textinput6 input"
              />
              <button
                name="goal button"
                type="submit"
                className="contact-button1 button"
              >
                get started
              </button>
            </div>
          </form>
          <div className="contact-container10">
            <div className="contact-container11">
              <div className="contact-container12">
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
        </div>
        <div className="contact-container13">
          <div className="contact-container14">
            <div className="contact-container15">
              <span className="contact-text11">EMAIL</span>
              <a
                href="mailto:adrian@adrianbyrdcounseling.com?subject="
                className="contact-link"
              >
                adrian@adrianbyrdcounseling.com
              </a>
            </div>
            <div className="contact-container16">
              <span className="contact-text12">CALL</span>
              <a href="tel:(217) 358-4548" className="contact-link1">
                (217) 358-4548
              </a>
            </div>
            <div className="contact-container17">
              <span className="contact-text13">OFFICE LOCATION</span>
              <span className="contact-text14">
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
        <Footer rootClassName="footer-root-class-name1"></Footer>
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
            display: none;
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
          .contact-textinput2 {
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
          .contact-textarea {
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
          .contact-hero1 {
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
            justify-content: center;
          }
          .contact-container07 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            position: relative;
          }
          .contact-form1 {
            width: 500px;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            border-radius: 25px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-green);
          }
          .contact-text10 {
            color: var(--dl-color-gray-beige);
            font-size: 2rem;
            font-style: normal;
            margin-top: 0px;
            text-align: center;
            font-family: 'Raleway';
            font-weight: 700;
            border-color: var(--dl-color-gray-beige);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-twounits);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .contact-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact-textinput3 {
            width: 190px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contact-textinput4 {
            width: 190px;
            margin-left: 20px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contact-textinput5 {
            width: 400px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contact-textarea1 {
            width: 400px;
            height: 100px;
            border-width: 0px;
          }
          .contact-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact-textinput6 {
            display: none;
          }
          .contact-button1 {
            font-size: 20px;
            box-shadow: rgb(136, 135, 135) 5px 5px 10px 0px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            font-family: 'Raleway';
            font-weight: 600;
            padding-top: var(--dl-space-space-unit);
            border-width: 2.5px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 25px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            background-color: rgb(247, 213, 139);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .contact-button1:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .contact-container10 {
            width: 100%;
            height: 600px;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: stretch;
            margin-right: 0px;
            border-radius: 25px;
            flex-direction: column;
            justify-content: center;
          }
          .contact-container11 {
            width: 100%;
            height: 100%;
            margin-left: var(--dl-space-space-twounits);
            border-radius: 25px;
          }
          .contact-container12 {
            display: contents;
          }
          .contact-container13 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: center;
          }
          .contact-container14 {
            flex: 2;
            width: 50%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .contact-container15 {
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
          .contact-container15:hover {
            transform: scale(1.02);
          }
          .contact-text11 {
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
          .contact-container16 {
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
          .contact-container16:hover {
            transform: scale(1.02);
          }
          .contact-text12 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
          }
          .contact-link1 {
            color: var(--dl-color-gray-black);
            font-size: 20px;
            font-style: normal;
            margin-top: var(--dl-space-space-threeunits);
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: underline;
          }
          .contact-container17 {
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
          .contact-container17:hover {
            transform: scale(1.02);
          }
          .contact-text13 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
          }
          .contact-text14 {
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
            .contact-hero1 {
              height: auto;
              flex-direction: column;
            }
            .contact-button1 {
              align-self: stretch;
            }
            .contact-container10 {
              width: 95%;
              height: 100%;
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
              padding-right: 0px;
            }
            .contact-container11 {
              width: 100%;
              height: 100%;
              align-self: center;
            }
            .contact-container13 {
              align-items: center;
              flex-direction: column;
            }
            .contact-container14 {
              width: 100%;
            }
            .contact-text11 {
              font-size: 1.3rem;
            }
            .contact-link {
              font-size: 18px;
            }
            .contact-text12 {
              font-size: 1.3rem;
            }
            .contact-link1 {
              font-size: 18px;
            }
            .contact-text13 {
              font-size: 1.3rem;
              text-align: center;
            }
            .contact-text14 {
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
            .contact-textinput2 {
              font-size: 12px;
              margin-top: 5px;
              margin-left: 0px;
              margin-bottom: 5px;
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
            .contact-hero1 {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-form1 {
              width: 600px;
            }
            .contact-button1 {
              width: 200px;
              font-size: 18px;
              align-self: center;
              text-align: center;
            }
            .contact-container10 {
              height: auto;
              padding-left: 0px;
              background-color: transparent;
            }
            .contact-container11 {
              width: 100%;
              height: 613px;
              margin-left: 0px;
            }
            .contact-container13 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-container14 {
              flex-direction: column;
            }
            .contact-container15 {
              width: 100%;
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .contact-container16 {
              width: 100%;
            }
            .contact-container17 {
              width: 100%;
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-twounits);
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
            .contact-textinput2 {
              align-self: center;
              margin-left: 0px;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .contact-textarea {
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
            .contact-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .contact-form1 {
              width: 400px;
            }
            .contact-textinput3 {
              width: 150px;
            }
            .contact-textinput4 {
              width: 150px;
            }
            .contact-textinput5 {
              width: 325px;
            }
            .contact-button1 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
            }
            .contact-container10 {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-container13 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .contact-container14 {
              height: 634px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
