import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import GoalFormOFS from '../components/goal-form-ofs'
import Hero from '../components/hero'
import Testimonial from '../components/testimonial'
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
        <Header rootClassName="header-root-class-name3"></Header>
        <div className="goal-coaching-hero">
          <div className="goal-coaching-container1">
            <span className="goal-coaching-text">
              <span className="goal-coaching-text01">
                MAKE 2024 THE YEAR YOU
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="goal-coaching-text02">CRUSH YOUR GOALS</span>
              <br className="goal-coaching-text03"></br>
            </span>
            <span className="goal-coaching-text04">
              With our coaching program you will:
            </span>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/EOqmZXb.png"
            className="goal-coaching-image"
          />
        </div>
        <GoalFormOFS rootClassName="goal-form-ofs-root-class-name"></GoalFormOFS>
        <div className="goal-coaching-container2">
          <form
            action="https://formsubmit.co/adrian@adrianbyrdcounseling.com"
            method="POST"
            enctype="application/x-www-form-urlencoded"
            className="goal-coaching-form"
          >
            <h1 className="goal-coaching-text05">
              Don&apos;t wait. Enroll today!
            </h1>
            <div className="goal-coaching-container3">
              <input
                type="text"
                name="first name"
                required
                placeholder="first name"
                className="goal-coaching-textinput input"
              />
              <input
                type="text"
                name="last name"
                required
                placeholder="last name"
                className="goal-coaching-textinput1 input"
              />
            </div>
            <input
              type="email"
              name="email address"
              required
              placeholder="email address"
              className="goal-coaching-textinput2 input"
            />
            <input
              type="number"
              name="phone number"
              required
              placeholder="phone number"
              className="goal-coaching-textinput3 input"
            />
            <div className="goal-coaching-container4">
              <input
                type="text"
                name="campaign"
                value="2024-goal-coaching"
                placeholder="placeholder"
                className="goal-coaching-textinput4 input"
              />
              <button
                name="goal button"
                type="submit"
                className="goal-coaching-button button"
              >
                get started
              </button>
            </div>
          </form>
        </div>
        <div className="goal-coaching-hero1">
          <img
            alt="image"
            src="https://i.imgur.com/hXzuerG.png"
            className="goal-coaching-image1"
          />
          <div className="goal-coaching-container5">
            <span className="goal-coaching-text06">
              <span className="goal-coaching-text07">SIMPLE PRICING</span>
              <br className="goal-coaching-text08"></br>
              <br className="goal-coaching-text09"></br>
              <span className="goal-coaching-text10">6 sessions</span>
              <span className="goal-coaching-text11"> for $97/month</span>
              <br className="goal-coaching-text12"></br>
              <br className="goal-coaching-text13"></br>
              <span className="goal-coaching-text14">12 sessions</span>
              <span className="goal-coaching-text15"> for $177/month</span>
              <br className="goal-coaching-text16"></br>
              <br className="goal-coaching-text17"></br>
              <span className="goal-coaching-text18">18 sessions</span>
              <span className="goal-coaching-text19"> for $277/month</span>
              <br className="goal-coaching-text20"></br>
              <br className="goal-coaching-text21"></br>
              <span className="goal-coaching-text22">
                All packages include unlimited messaging in between sessions
              </span>
              <br className="goal-coaching-text23"></br>
            </span>
          </div>
        </div>
        <Hero></Hero>
        <Testimonial rootClassName="testimonial-root-class-name"></Testimonial>
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
            height: auto;
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
            width: 95%;
            font-size: 1.3rem;
            align-self: flex-start;
            text-align: left;
            font-family: 'Raleway';
            font-weight: 500;
          }
          .goal-coaching-text01 {
            font-size: 1.8rem;
            font-weight: 700;
          }
          .goal-coaching-text02 {
            color: var(--dl-color-gray-green);
            font-size: 1.8rem;
            font-weight: 700;
          }
          .goal-coaching-text03 {
            font-style: normal;
          }
          .goal-coaching-text04 {
            color: var(--dl-color-gray-black);
            font-size: 1.3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Raleway';
            font-weight: 500;
            margin-right: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-coaching-image {
            width: 50%;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .goal-coaching-container2 {
            display: flex;
            position: relative;
          }
          .goal-coaching-form {
            width: 1350px;
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
          .goal-coaching-text05 {
            color: var(--dl-color-gray-beige);
            font-size: 2rem;
            font-style: normal;
            margin-top: 0px;
            text-align: center;
            font-family: Raleway;
            font-weight: 700;
            border-color: var(--dl-color-gray-beige);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-twounits);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .goal-coaching-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .goal-coaching-textinput {
            width: 190px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-coaching-textinput1 {
            width: 190px;
            margin-left: 20px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-coaching-textinput2 {
            width: 400px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-coaching-textinput3 {
            width: 400px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-coaching-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .goal-coaching-textinput4 {
            display: none;
          }
          .goal-coaching-button {
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
          .goal-coaching-button:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .goal-coaching-hero1 {
            width: 92%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
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
          .goal-coaching-container5 {
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .goal-coaching-text06 {
            width: 95%;
            font-size: 1.3rem;
            align-self: center;
            text-align: left;
            font-family: 'Raleway';
            font-weight: 500;
          }
          .goal-coaching-text07 {
            font-size: 1.8rem;
            font-weight: 700;
          }
          .goal-coaching-text08 {
            font-size: 1.8rem;
            font-weight: 700;
          }
          .goal-coaching-text09 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .goal-coaching-text10 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .goal-coaching-text11 {
            font-style: normal;
          }
          .goal-coaching-text12 {
            font-style: normal;
          }
          .goal-coaching-text13 {
            font-style: normal;
          }
          .goal-coaching-text14 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .goal-coaching-text15 {
            font-style: normal;
          }
          .goal-coaching-text16 {
            font-style: normal;
          }
          .goal-coaching-text17 {
            font-style: normal;
          }
          .goal-coaching-text18 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .goal-coaching-text19 {
            font-style: normal;
          }
          .goal-coaching-text20 {
            font-style: normal;
          }
          .goal-coaching-text21 {
            font-style: normal;
          }
          .goal-coaching-text22 {
            font-size: 1.5rem;
            font-family: 'Raleway';
            font-weight: 600;
          }
          .goal-coaching-text23 {
            font-style: normal;
          }
          @media (max-width: 991px) {
            .goal-coaching-hero {
              align-items: center;
              flex-direction: row;
            }
            .goal-coaching-container1 {
              align-items: stretch;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
              padding-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .goal-coaching-text {
              text-align: left;
              margin-left: var(--dl-space-space-unit);
            }
            .goal-coaching-text04 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: left;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .goal-coaching-button {
              align-self: stretch;
            }
            .goal-coaching-hero1 {
              flex-direction: row;
            }
            .goal-coaching-image1 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-container5 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .goal-coaching-text06 {
              text-align: left;
              margin-left: var(--dl-space-space-unit);
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
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-text {
              width: 92%;
              text-align: center;
              margin-left: 0px;
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-bottom: var(--dl-space-space-unit);
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
            }
            .goal-coaching-text04 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .goal-coaching-image {
              width: 100%;
              height: 125px;
              margin-left: 0px;
            }
            .goal-coaching-form {
              width: 600px;
            }
            .goal-coaching-button {
              width: 200px;
              font-size: 18px;
              align-self: center;
              text-align: center;
            }
            .goal-coaching-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .goal-coaching-image1 {
              width: 50%;
            }
            .goal-coaching-text06 {
              width: 92%;
              text-align: center;
              margin-left: 0px;
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-bottom: var(--dl-space-space-unit);
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
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
            .goal-coaching-text {
              width: 92%;
              align-self: center;
              text-align: left;
              margin-left: 0px;
              border-color: var(--dl-color-gray-green);
              padding-left: 0px;
            }
            .goal-coaching-text04 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              align-self: center;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
              padding-left: 0px;
              padding-right: var(--dl-space-space-unit);
            }
            .goal-coaching-image {
              width: 150%;
              align-self: center;
              margin-left: 0px;
            }
            .goal-coaching-form {
              width: 400px;
            }
            .goal-coaching-textinput {
              width: 150px;
            }
            .goal-coaching-textinput1 {
              width: 150px;
            }
            .goal-coaching-textinput2 {
              width: 325px;
            }
            .goal-coaching-textinput3 {
              width: 325px;
            }
            .goal-coaching-button {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
            }
            .goal-coaching-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-image1 {
              width: 85%;
            }
            .goal-coaching-container5 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-text06 {
              width: 92%;
              align-self: center;
              text-align: left;
              margin-left: 0px;
              border-color: var(--dl-color-gray-green);
              padding-left: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default GoalCoaching
