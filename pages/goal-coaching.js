import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'

const GoalCoaching = (props) => {
  return (
    <>
      <div className="goal-coaching-container">
        <Head>
          <title>Goal-Coaching - Adrian Byrd Counseling</title>
          <meta
            property="og:title"
            content="Goal-Coaching - Adrian Byrd Counseling"
          />
        </Head>
        <Header rootClassName="header-root-class-name1"></Header>
        <div className="goal-coaching-hero">
          <div className="goal-coaching-container01">
            <h1 className="goal-coaching-text">
              Learn skills to make long lasting change.
            </h1>
            <span className="goal-coaching-text01">
              Tap into your potential with Goal Coaching!
            </span>
            <div className="goal-coaching-btn-group">
              <Link href="/contact">
                <a className="goal-coaching-link button">i&apos;m ready!</a>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/bcVPBG7.png"
            className="goal-coaching-image"
          />
        </div>
        <div className="goal-coaching-hero1">
          <img
            alt="image"
            src="https://i.imgur.com/8HdSBDC.jpg"
            className="goal-coaching-image1"
          />
          <div className="goal-coaching-container02">
            <h1 className="goal-coaching-text02">RATES</h1>
            <span className="goal-coaching-text03">
              <span>
                -6 sessions with unlimited messaging between sessions -
                $97/month
              </span>
              <br></br>
              <br></br>
              <span>
                -12 sessions with unlimited messaging between sessions -
                $177/month
              </span>
              <br></br>
              <br></br>
              <span>
                -18 sessions with unlimited messaging between sessions -
                $277/month
              </span>
              <br></br>
              <br></br>
              <span>This program is not covered by insurance.</span>
              <br className="goal-coaching-text14"></br>
              <br className="goal-coaching-text15"></br>
              <span>
                All participants will receive a journal and a planner.
              </span>
              <br></br>
              <br></br>
              <span>Spots are limited!</span>
              <br className="goal-coaching-text20"></br>
              <br></br>
            </span>
            <div className="goal-coaching-btn-group1">
              <Link href="/contact">
                <a className="goal-coaching-link1 button">join program</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="goal-coaching-hero2">
          <div className="goal-coaching-container03">
            <h1 className="goal-coaching-text22">I help with....</h1>
            <span className="goal-coaching-text23">
              <span className="goal-coaching-text24">
                -Setting and working toward goals
              </span>
              <br className="goal-coaching-text25"></br>
              <br className="goal-coaching-text26"></br>
              <span className="goal-coaching-text27">
                -How to follow through on your intentions and promises
              </span>
              <br className="goal-coaching-text28"></br>
              <br className="goal-coaching-text29"></br>
              <span className="goal-coaching-text30">
                -Working through adversity
              </span>
              <br className="goal-coaching-text31"></br>
              <br className="goal-coaching-text32"></br>
              <span className="goal-coaching-text33">
                -Striking a healthy work-life balance
              </span>
              <br className="goal-coaching-text34"></br>
              <span className="goal-coaching-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="goal-coaching-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="goal-coaching-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="goal-coaching-btn-group2">
              <Link href="/contact">
                <a className="goal-coaching-link2 button">get started</a>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/0zHZOau.jpg"
            className="goal-coaching-image2"
          />
        </div>
        <div className="goal-coaching-testimonial">
          <div className="goal-coaching-testimonial1">
            <div className="goal-coaching-container04">
              <div className="goal-coaching-container05"></div>
            </div>
            <span className="goal-coaching-text38">
              Every step you take brings you closer to your dreams.
            </span>
            <div className="goal-coaching-container06">
              <div className="goal-coaching-container07"></div>
            </div>
          </div>
        </div>
        <footer className="goal-coaching-footer">
          <footer className="goal-coaching-footer1">
            <div className="goal-coaching-separator"></div>
            <Link href="/">
              <a className="goal-coaching-link3">
                <svg viewBox="0 0 1024 1024" className="goal-coaching-icon">
                  <path d="M243.499 542.165l225.835-225.835v494.336c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-494.336l225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-298.667-298.667c-4.096-4.096-8.789-7.168-13.824-9.259-5.205-2.176-10.795-3.243-16.341-3.243-10.923 0-21.845 4.181-30.165 12.501l-298.667 298.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
                </svg>
              </a>
            </Link>
            <div className="goal-coaching-container08">
              <a href="tel:(217) 358-4548" className="goal-coaching-link4">
                (217) 358-4548
              </a>
              <div className="goal-coaching-icon-group">
                <a
                  href="https://www.facebook.com/adrianbyrdcounseling/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="goal-coaching-link5"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="goal-coaching-icon2"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="goal-coaching-container09">
              <a
                href="mailto:adrian@adrianbyrdcounseling.com?subject="
                className="goal-coaching-link6"
              >
                <span className="goal-coaching-text39">
                  adrian@adrianbyrdcounseling.com
                </span>
                <span></span>
              </a>
            </div>
          </footer>
        </footer>
      </div>
      <style jsx>
        {`
          .goal-coaching-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #edebdd;
          }
          .goal-coaching-hero {
            width: 92%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: 0px;
            min-height: auto;
            align-items: center;
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .goal-coaching-container01 {
            width: 50%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .goal-coaching-text {
            font-size: 2.2rem;
            align-self: flex-start;
            text-align: left;
            font-family: Raleway;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .goal-coaching-text01 {
            color: var(--dl-color-gray-black);
            font-size: 1.3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Raleway';
            font-weight: 500;
            margin-right: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-coaching-btn-group {
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
          }
          .goal-coaching-link {
            font-size: 20px;
            box-shadow: rgb(136, 135, 135) 5px 5px 10px 0px;
            font-style: normal;
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
            text-decoration: none;
            background-color: rgb(247, 213, 139);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .goal-coaching-link:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .goal-coaching-image {
            width: 50%;
            box-shadow: 5px 5px 10px 0px #929292;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            border-radius: 25px;
            border-top-width: 3px;
            border-left-width: 3px;
            border-right-width: 3px;
          }
          .goal-coaching-hero1 {
            width: 92%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            min-height: auto;
            align-items: center;
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: space-between;
          }
          .goal-coaching-image1 {
            width: 35%;
            box-shadow: 5px 5px 10px 0px #929292;
            object-fit: cover;
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            border-radius: 25px;
            border-top-width: 3px;
            border-left-width: 3px;
            border-right-width: 3px;
          }
          .goal-coaching-container02 {
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .goal-coaching-text02 {
            font-size: 1.5em;
            font-family: Raleway;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .goal-coaching-text03 {
            font-size: 1.3rem;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Raleway';
            font-weight: 500;
          }
          .goal-coaching-text14 {
            font-size: 1.3rem;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 500;
          }
          .goal-coaching-text15 {
            font-size: 1.3rem;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 500;
          }
          .goal-coaching-text20 {
            font-size: 1.3rem;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 500;
          }
          .goal-coaching-btn-group1 {
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .goal-coaching-link1 {
            font-size: 20px;
            box-shadow: rgb(136, 135, 135) 5px 5px 10px 0px;
            font-style: normal;
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
            text-decoration: none;
            background-color: rgb(247, 213, 139);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .goal-coaching-link1:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .goal-coaching-hero2 {
            width: 92%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: 0px;
            min-height: auto;
            align-items: center;
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .goal-coaching-container03 {
            width: 50%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .goal-coaching-text22 {
            font-size: 2.2rem;
            align-self: flex-start;
            text-align: left;
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .goal-coaching-text23 {
            color: var(--dl-color-gray-black);
            font-size: 1.3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Raleway';
            font-weight: 500;
            margin-right: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-coaching-text35 {
            font-style: normal;
          }
          .goal-coaching-text36 {
            font-style: normal;
          }
          .goal-coaching-text37 {
            font-style: normal;
          }
          .goal-coaching-btn-group2 {
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
          }
          .goal-coaching-link2 {
            font-size: 20px;
            box-shadow: rgb(136, 135, 135) 5px 5px 10px 0px;
            font-style: normal;
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
            text-decoration: none;
            background-color: rgb(247, 213, 139);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .goal-coaching-link2:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .goal-coaching-image2 {
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
          .goal-coaching-testimonial {
            width: 50%;
            display: flex;
            max-width: auto;
            box-shadow: 5px 5px 10px 0px #848181;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 2.5px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: space-between;
            background-color: #73927e;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .goal-coaching-testimonial1 {
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .goal-coaching-container04 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .goal-coaching-container05 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .goal-coaching-text38 {
            color: rgb(237, 235, 221);
            font-size: 1.8rem;
            max-width: 600px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: 'Raleway';
            font-weight: 500;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-coaching-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .goal-coaching-container07 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-end;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .goal-coaching-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .goal-coaching-footer1 {
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
          .goal-coaching-separator {
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
          .goal-coaching-link3 {
            display: contents;
          }
          .goal-coaching-icon {
            width: 34px;
            height: 34px;
            align-self: flex-start;
            text-decoration: none;
          }
          .goal-coaching-container08 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .goal-coaching-link4 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            text-decoration: underline;
          }
          .goal-coaching-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .goal-coaching-link5 {
            display: contents;
          }
          .goal-coaching-icon2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            text-decoration: none;
          }
          .goal-coaching-container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .goal-coaching-link6 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .goal-coaching-hero {
              flex-direction: column;
            }
            .goal-coaching-container01 {
              align-items: stretch;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .goal-coaching-text {
              text-align: center;
            }
            .goal-coaching-text01 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .goal-coaching-btn-group {
              align-self: center;
            }
            .goal-coaching-link {
              align-self: stretch;
            }
            .goal-coaching-hero1 {
              flex-direction: column;
            }
            .goal-coaching-image1 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-container02 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .goal-coaching-text03 {
              text-align: center;
            }
            .goal-coaching-btn-group1 {
              align-self: center;
            }
            .goal-coaching-hero2 {
              flex-direction: column;
            }
            .goal-coaching-container03 {
              align-items: stretch;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .goal-coaching-text22 {
              text-align: center;
            }
            .goal-coaching-text23 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .goal-coaching-text35 {
              font-style: normal;
            }
            .goal-coaching-text36 {
              font-style: normal;
            }
            .goal-coaching-text37 {
              font-style: normal;
            }
            .goal-coaching-btn-group2 {
              align-self: center;
            }
            .goal-coaching-link2 {
              align-self: stretch;
            }
            .goal-coaching-testimonial {
              width: 95%;
              margin-top: var(--dl-space-space-fourunits);
            }
            .goal-coaching-text38 {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .goal-coaching-footer {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .goal-coaching-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .goal-coaching-container01 {
              width: 100%;
            }
            .goal-coaching-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-text01 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .goal-coaching-btn-group {
              align-self: center;
            }
            .goal-coaching-link {
              font-size: 18px;
            }
            .goal-coaching-image {
              width: 100%;
              margin-left: 0px;
            }
            .goal-coaching-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .goal-coaching-image1 {
              width: 50%;
            }
            .goal-coaching-hero2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .goal-coaching-container03 {
              width: 100%;
            }
            .goal-coaching-text22 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-text23 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .goal-coaching-text24 {
              font-size: 1rem;
            }
            .goal-coaching-text25 {
              font-size: 1rem;
            }
            .goal-coaching-text26 {
              font-size: 1rem;
            }
            .goal-coaching-text27 {
              font-size: 1rem;
            }
            .goal-coaching-text28 {
              font-size: 1rem;
            }
            .goal-coaching-text29 {
              font-size: 1rem;
            }
            .goal-coaching-text30 {
              font-size: 1rem;
            }
            .goal-coaching-text31 {
              font-size: 1rem;
            }
            .goal-coaching-text32 {
              font-size: 1rem;
            }
            .goal-coaching-text33 {
              font-size: 1rem;
            }
            .goal-coaching-text35 {
              font-style: normal;
            }
            .goal-coaching-text36 {
              font-style: normal;
            }
            .goal-coaching-text37 {
              font-style: normal;
            }
            .goal-coaching-btn-group2 {
              align-self: center;
            }
            .goal-coaching-link2 {
              font-size: 18px;
            }
            .goal-coaching-image2 {
              width: 100%;
            }
            .goal-coaching-testimonial {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .goal-coaching-footer {
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .goal-coaching-footer1 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .goal-coaching-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .goal-coaching-icon {
              align-self: center;
            }
            .goal-coaching-container08 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .goal-coaching-link4 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .goal-coaching-container09 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .goal-coaching-link6 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .goal-coaching-text39 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .goal-coaching-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-container01 {
              width: 100%;
              align-self: center;
              align-items: center;
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-text01 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
            }
            .goal-coaching-btn-group {
              align-self: center;
              flex-direction: column;
              justify-content: center;
            }
            .goal-coaching-link {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
            }
            .goal-coaching-image {
              width: 100%;
              align-self: center;
              margin-left: 0px;
            }
            .goal-coaching-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-container02 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-btn-group1 {
              flex-direction: column;
            }
            .goal-coaching-link1 {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .goal-coaching-hero2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-container03 {
              width: 100%;
              align-self: center;
              align-items: center;
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-text23 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
            }
            .goal-coaching-text24 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-text25 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-text26 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-text27 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-text28 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-text29 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-text30 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-text31 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-text32 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-text33 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-text34 {
              font-style: normal;
              font-weight: 500;
            }
            .goal-coaching-text35 {
              font-style: normal;
              font-weight: 500;
            }
            .goal-coaching-text36 {
              font-style: normal;
              font-weight: 500;
            }
            .goal-coaching-text37 {
              font-style: normal;
              font-weight: 500;
            }
            .goal-coaching-btn-group2 {
              align-self: center;
              flex-direction: column;
              justify-content: center;
            }
            .goal-coaching-link2 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
            }
            .goal-coaching-image2 {
              width: 100%;
              align-self: center;
            }
            .goal-coaching-testimonial {
              width: 85%;
              margin-top: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-text38 {
              width: auto;
              font-size: 1rem;
            }
            .goal-coaching-footer {
              padding: var(--dl-space-space-unit);
              margin-top: 0px;
            }
            .goal-coaching-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .goal-coaching-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .goal-coaching-icon {
              align-self: center;
            }
            .goal-coaching-container08 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .goal-coaching-link4 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .goal-coaching-container09 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .goal-coaching-link6 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .goal-coaching-text39 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default GoalCoaching
