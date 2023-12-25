import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const GoalCoachingOLD = (props) => {
  return (
    <>
      <div className="goal-coaching-old-container">
        <Head>
          <title>Goal-CoachingOLD - Adrian Byrd Counseling</title>
          <meta
            name="description"
            content="Specialist in ACT, DBT, CBT—collaborative therapy for growth. Move confidently towards a brighter future."
          />
          <meta
            property="og:title"
            content="Goal-CoachingOLD - Adrian Byrd Counseling"
          />
          <meta
            property="og:description"
            content="Specialist in ACT, DBT, CBT—collaborative therapy for growth. Move confidently towards a brighter future."
          />
        </Head>
        <Header rootClassName="header-root-class-name1"></Header>
        <div className="goal-coaching-old-hero">
          <div className="goal-coaching-old-container1">
            <h1 className="goal-coaching-old-text">
              Learn skills to make long lasting change.
            </h1>
            <span className="goal-coaching-old-text01">
              Tap into your potential with Goal Coaching! I provide a safe,
              non-judgemental space for discussing any barriers or challenges
              that may arise on your journey.
            </span>
            <div className="goal-coaching-old-btn-group">
              <Link href="/contact">
                <a className="goal-coaching-old-link button">i&apos;m ready!</a>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/bcVPBG7.png"
            className="goal-coaching-old-image"
          />
        </div>
        <div className="goal-coaching-old-hero1">
          <img
            alt="image"
            src="https://i.imgur.com/8HdSBDC.jpg"
            className="goal-coaching-old-image1"
          />
          <div className="goal-coaching-old-container2">
            <h1 className="goal-coaching-old-text02">RATES</h1>
            <span className="goal-coaching-old-text03">
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
              <br className="goal-coaching-old-text14"></br>
              <br className="goal-coaching-old-text15"></br>
              <span>
                All participants will receive a journal and a planner.
              </span>
              <br></br>
              <br></br>
              <span>Spots are limited!</span>
              <br className="goal-coaching-old-text20"></br>
              <br></br>
            </span>
            <div className="goal-coaching-old-btn-group1">
              <Link href="/contact">
                <a className="goal-coaching-old-link1 button">join program</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="goal-coaching-old-hero2">
          <div className="goal-coaching-old-container3">
            <h1 className="goal-coaching-old-text22">I help with....</h1>
            <span className="goal-coaching-old-text23">
              <span className="goal-coaching-old-text24">
                -Setting and working toward goals
              </span>
              <br className="goal-coaching-old-text25"></br>
              <br className="goal-coaching-old-text26"></br>
              <span className="goal-coaching-old-text27">
                -Helping you follow through on your intentions
              </span>
              <br className="goal-coaching-old-text28"></br>
              <br className="goal-coaching-old-text29"></br>
              <span className="goal-coaching-old-text30">
                -Holding yourself accountable
              </span>
              <br className="goal-coaching-old-text31"></br>
              <br className="goal-coaching-old-text32"></br>
              <span className="goal-coaching-old-text33">
                -Working through adversity
              </span>
              <br className="goal-coaching-old-text34"></br>
              <br className="goal-coaching-old-text35"></br>
              <span className="goal-coaching-old-text36">
                -Striking a healthy work-life balance
              </span>
              <br className="goal-coaching-old-text37"></br>
              <span className="goal-coaching-old-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="goal-coaching-old-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="goal-coaching-old-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="goal-coaching-old-btn-group2">
              <Link href="/contact">
                <a className="goal-coaching-old-link2 button">get started</a>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/0zHZOau.jpg"
            className="goal-coaching-old-image2"
          />
        </div>
        <div className="goal-coaching-old-testimonial">
          <div className="goal-coaching-old-testimonial1">
            <div className="goal-coaching-old-container4">
              <div className="goal-coaching-old-container5"></div>
            </div>
            <span className="goal-coaching-old-text41">
              Make 2024 your best year yet!
            </span>
            <div className="goal-coaching-old-container6">
              <div className="goal-coaching-old-container7"></div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .goal-coaching-old-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #edebdd;
          }
          .goal-coaching-old-hero {
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
          .goal-coaching-old-container1 {
            width: 50%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .goal-coaching-old-text {
            font-size: 2.2rem;
            align-self: flex-start;
            text-align: left;
            font-family: Raleway;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .goal-coaching-old-text01 {
            color: var(--dl-color-gray-black);
            font-size: 1.3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Raleway';
            font-weight: 500;
            margin-right: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-coaching-old-btn-group {
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
          }
          .goal-coaching-old-link {
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
          .goal-coaching-old-link:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .goal-coaching-old-image {
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
          .goal-coaching-old-hero1 {
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
          .goal-coaching-old-image1 {
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
          .goal-coaching-old-container2 {
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .goal-coaching-old-text02 {
            font-size: 1.5em;
            font-family: Raleway;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .goal-coaching-old-text03 {
            font-size: 1.3rem;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Raleway';
            font-weight: 500;
          }
          .goal-coaching-old-text14 {
            font-size: 1.3rem;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 500;
          }
          .goal-coaching-old-text15 {
            font-size: 1.3rem;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 500;
          }
          .goal-coaching-old-text20 {
            font-size: 1.3rem;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 500;
          }
          .goal-coaching-old-btn-group1 {
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .goal-coaching-old-link1 {
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
          .goal-coaching-old-link1:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .goal-coaching-old-hero2 {
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
          .goal-coaching-old-container3 {
            width: 50%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .goal-coaching-old-text22 {
            font-size: 2.2rem;
            align-self: flex-start;
            text-align: left;
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .goal-coaching-old-text23 {
            color: var(--dl-color-gray-black);
            font-size: 1.3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Raleway';
            font-weight: 500;
            margin-right: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-coaching-old-text38 {
            font-style: normal;
          }
          .goal-coaching-old-text39 {
            font-style: normal;
          }
          .goal-coaching-old-text40 {
            font-style: normal;
          }
          .goal-coaching-old-btn-group2 {
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
          }
          .goal-coaching-old-link2 {
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
          .goal-coaching-old-link2:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .goal-coaching-old-image2 {
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
          .goal-coaching-old-testimonial {
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
          .goal-coaching-old-testimonial1 {
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .goal-coaching-old-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .goal-coaching-old-container5 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .goal-coaching-old-text41 {
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
          .goal-coaching-old-container6 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .goal-coaching-old-container7 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-end;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          @media (max-width: 991px) {
            .goal-coaching-old-hero {
              flex-direction: row;
            }
            .goal-coaching-old-container1 {
              align-items: stretch;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .goal-coaching-old-text {
              text-align: center;
            }
            .goal-coaching-old-text01 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .goal-coaching-old-btn-group {
              align-self: center;
            }
            .goal-coaching-old-link {
              align-self: stretch;
            }
            .goal-coaching-old-hero1 {
              flex-direction: row;
            }
            .goal-coaching-old-image1 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-old-container2 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .goal-coaching-old-text03 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
            }
            .goal-coaching-old-btn-group1 {
              align-self: center;
            }
            .goal-coaching-old-hero2 {
              flex-direction: column;
            }
            .goal-coaching-old-container3 {
              align-items: stretch;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .goal-coaching-old-text22 {
              text-align: center;
            }
            .goal-coaching-old-text23 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .goal-coaching-old-text38 {
              font-style: normal;
            }
            .goal-coaching-old-text39 {
              font-style: normal;
            }
            .goal-coaching-old-text40 {
              font-style: normal;
            }
            .goal-coaching-old-btn-group2 {
              align-self: center;
            }
            .goal-coaching-old-link2 {
              align-self: stretch;
            }
            .goal-coaching-old-testimonial {
              width: 95%;
              margin-top: var(--dl-space-space-fourunits);
            }
            .goal-coaching-old-text41 {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .goal-coaching-old-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .goal-coaching-old-container1 {
              width: 100%;
            }
            .goal-coaching-old-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-old-text01 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .goal-coaching-old-btn-group {
              align-self: center;
            }
            .goal-coaching-old-link {
              font-size: 18px;
            }
            .goal-coaching-old-image {
              width: 100%;
              margin-left: 0px;
            }
            .goal-coaching-old-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .goal-coaching-old-image1 {
              width: 50%;
            }
            .goal-coaching-old-hero2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .goal-coaching-old-container3 {
              width: 100%;
            }
            .goal-coaching-old-text22 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-old-text23 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .goal-coaching-old-text24 {
              font-size: 1rem;
            }
            .goal-coaching-old-text25 {
              font-size: 1rem;
            }
            .goal-coaching-old-text26 {
              font-size: 1rem;
            }
            .goal-coaching-old-text27 {
              font-size: 1rem;
            }
            .goal-coaching-old-text28 {
              font-size: 1rem;
            }
            .goal-coaching-old-text29 {
              font-size: 1rem;
            }
            .goal-coaching-old-text30 {
              font-size: 1rem;
            }
            .goal-coaching-old-text31 {
              font-size: 1rem;
            }
            .goal-coaching-old-text32 {
              font-size: 1rem;
            }
            .goal-coaching-old-text33 {
              font-size: 1rem;
            }
            .goal-coaching-old-text34 {
              font-size: 1rem;
            }
            .goal-coaching-old-text35 {
              font-size: 1rem;
            }
            .goal-coaching-old-text36 {
              font-size: 1rem;
            }
            .goal-coaching-old-text38 {
              font-style: normal;
            }
            .goal-coaching-old-text39 {
              font-style: normal;
            }
            .goal-coaching-old-text40 {
              font-style: normal;
            }
            .goal-coaching-old-btn-group2 {
              align-self: center;
            }
            .goal-coaching-old-link2 {
              font-size: 18px;
            }
            .goal-coaching-old-image2 {
              width: 100%;
            }
            .goal-coaching-old-testimonial {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .goal-coaching-old-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-old-container1 {
              width: 100%;
              align-self: center;
              align-items: center;
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-old-text01 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
            }
            .goal-coaching-old-btn-group {
              align-self: center;
              flex-direction: column;
              justify-content: center;
            }
            .goal-coaching-old-link {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
            }
            .goal-coaching-old-image {
              width: 100%;
              align-self: center;
              margin-left: 0px;
            }
            .goal-coaching-old-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-old-container2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-old-btn-group1 {
              flex-direction: column;
            }
            .goal-coaching-old-link1 {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .goal-coaching-old-hero2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-old-container3 {
              width: 100%;
              align-self: center;
              align-items: center;
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-old-text23 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
            }
            .goal-coaching-old-text24 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-old-text25 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-old-text26 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-old-text27 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-old-text28 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-old-text29 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-old-text30 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-old-text31 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-old-text32 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-old-text33 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-old-text34 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-old-text35 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-old-text36 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .goal-coaching-old-text37 {
              font-style: normal;
              font-weight: 500;
            }
            .goal-coaching-old-text38 {
              font-style: normal;
              font-weight: 500;
            }
            .goal-coaching-old-text39 {
              font-style: normal;
              font-weight: 500;
            }
            .goal-coaching-old-text40 {
              font-style: normal;
              font-weight: 500;
            }
            .goal-coaching-old-btn-group2 {
              align-self: center;
              flex-direction: column;
              justify-content: center;
            }
            .goal-coaching-old-link2 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
            }
            .goal-coaching-old-image2 {
              width: 100%;
              align-self: center;
            }
            .goal-coaching-old-testimonial {
              width: 85%;
              margin-top: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-old-text41 {
              width: auto;
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default GoalCoachingOLD
