import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const GoalCoaching = (props) => {
  return (
    <>
      <div className="goal-coaching-container">
        <Head>
          <title>Goal-Coaching - Adrian Byrd Counseling</title>
          <meta
            name="description"
            content="Specialist in ACT, DBT, CBT—collaborative therapy for growth. Move confidently towards a brighter future."
          />
          <meta
            property="og:title"
            content="Goal-Coaching - Adrian Byrd Counseling"
          />
          <meta
            property="og:description"
            content="Specialist in ACT, DBT, CBT—collaborative therapy for growth. Move confidently towards a brighter future."
          />
        </Head>
        <Header rootClassName="header-root-class-name1"></Header>
        <div className="goal-coaching-hero">
          <div className="goal-coaching-container1">
            <h1 className="goal-coaching-text">
              Learn skills to make long lasting change.
            </h1>
            <span className="goal-coaching-text01">
              Tap into your potential with Goal Coaching! I provide a safe,
              non-judgemental space for discussing any barriers or challenges
              that may arise on your journey.
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
          <div className="goal-coaching-container2">
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
              <span>
                Please note: This program spans a full year and is not covered
                by insurance.
              </span>
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
          <div className="goal-coaching-container3">
            <h1 className="goal-coaching-text22">I help with....</h1>
            <span className="goal-coaching-text23">
              <span className="goal-coaching-text24">
                -Setting and working toward goals
              </span>
              <br className="goal-coaching-text25"></br>
              <br className="goal-coaching-text26"></br>
              <span className="goal-coaching-text27">
                -Helping you follow through on your intentions
              </span>
              <br className="goal-coaching-text28"></br>
              <br className="goal-coaching-text29"></br>
              <span className="goal-coaching-text30">
                -Holding yourself accountable
              </span>
              <br className="goal-coaching-text31"></br>
              <br className="goal-coaching-text32"></br>
              <span className="goal-coaching-text33">
                -Working through adversity
              </span>
              <br className="goal-coaching-text34"></br>
              <br className="goal-coaching-text35"></br>
              <span className="goal-coaching-text36">
                -Striking a healthy work-life balance
              </span>
              <br className="goal-coaching-text37"></br>
              <span className="goal-coaching-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="goal-coaching-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="goal-coaching-text40">
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
            <div className="goal-coaching-container4">
              <div className="goal-coaching-container5"></div>
            </div>
            <span className="goal-coaching-text41">
              Make 2024 your best year yet!
            </span>
            <div className="goal-coaching-container6">
              <div className="goal-coaching-container7"></div>
            </div>
          </div>
        </div>
        <Footer></Footer>
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
          .goal-coaching-container1 {
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
          .goal-coaching-container2 {
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
            margin-bottom: 0px;
            flex-direction: row;
            justify-content: space-between;
          }
          .goal-coaching-container3 {
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
          .goal-coaching-text38 {
            font-style: normal;
          }
          .goal-coaching-text39 {
            font-style: normal;
          }
          .goal-coaching-text40 {
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
            width: 55%;
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
          .goal-coaching-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .goal-coaching-container5 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .goal-coaching-text41 {
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
          .goal-coaching-container6 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .goal-coaching-container7 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-end;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          @media (max-width: 991px) {
            .goal-coaching-hero {
              flex-direction: row;
            }
            .goal-coaching-container1 {
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
              flex-direction: row;
            }
            .goal-coaching-image1 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-container2 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .goal-coaching-text03 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
            }
            .goal-coaching-btn-group1 {
              align-self: center;
            }
            .goal-coaching-hero2 {
              flex-direction: column;
            }
            .goal-coaching-container3 {
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
            .goal-coaching-text38 {
              font-style: normal;
            }
            .goal-coaching-text39 {
              font-style: normal;
            }
            .goal-coaching-text40 {
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
            .goal-coaching-text41 {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .goal-coaching-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .goal-coaching-container1 {
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
              flex-direction: column;
            }
            .goal-coaching-image1 {
              width: 50%;
            }
            .goal-coaching-hero2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .goal-coaching-container3 {
              width: 100%;
            }
            .goal-coaching-text22 {
              align-self: center;
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
            .goal-coaching-text34 {
              font-size: 1rem;
            }
            .goal-coaching-text35 {
              font-size: 1rem;
            }
            .goal-coaching-text36 {
              font-size: 1rem;
            }
            .goal-coaching-text38 {
              font-style: normal;
            }
            .goal-coaching-text39 {
              font-style: normal;
            }
            .goal-coaching-text40 {
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
          }
          @media (max-width: 479px) {
            .goal-coaching-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-container1 {
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
            .goal-coaching-container2 {
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
            .goal-coaching-container3 {
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
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-text35 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-text36 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-text37 {
              font-style: normal;
              font-weight: 500;
            }
            .goal-coaching-text38 {
              font-style: normal;
              font-weight: 500;
            }
            .goal-coaching-text39 {
              font-style: normal;
              font-weight: 500;
            }
            .goal-coaching-text40 {
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
            .goal-coaching-text41 {
              width: auto;
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default GoalCoaching
