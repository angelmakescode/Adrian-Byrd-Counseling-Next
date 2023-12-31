import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Form from '../components/form'
import Hero from '../components/hero'
import Testimonial from '../components/testimonial'
import Footer from '../components/footer'

const GoalCoachingV2 = (props) => {
  return (
    <>
      <div className="goal-coaching-v2-container">
        <Head>
          <title>Goal-CoachingV2 - Adrian Byrd Counseling</title>
          <meta
            name="description"
            content="Specialist in ACT, DBT, CBT—collaborative therapy for growth. Move confidently towards a brighter future."
          />
          <meta
            property="og:title"
            content="Goal-CoachingV2 - Adrian Byrd Counseling"
          />
          <meta
            property="og:description"
            content="Specialist in ACT, DBT, CBT—collaborative therapy for growth. Move confidently towards a brighter future."
          />
        </Head>
        <Header rootClassName="header-root-class-name3"></Header>
        <div className="goal-coaching-v2-hero">
          <div className="goal-coaching-v2-container1">
            <h1 className="goal-coaching-v2-text">
              <span>
                mAKE 2024 THE YEAR YOU
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="goal-coaching-v2-text02">CRUSH YOUR GOALS</span>
            </h1>
            <span className="goal-coaching-v2-text03">
              With our coaching program you will:
            </span>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/EOqmZXb.png"
            className="goal-coaching-v2-image"
          />
        </div>
        <Form></Form>
        <div className="goal-coaching-v2-hero1">
          <img
            alt="image"
            src="https://i.imgur.com/hXzuerG.png"
            className="goal-coaching-v2-image1"
          />
          <div className="goal-coaching-v2-container2">
            <span className="goal-coaching-v2-text04">
              <span className="goal-coaching-v2-text05">SIMPLE PRICING</span>
              <br className="goal-coaching-v2-text06"></br>
              <br className="goal-coaching-v2-text07"></br>
              <span className="goal-coaching-v2-text08">6 sessions</span>
              <span className="goal-coaching-v2-text09"> for $97/month</span>
              <br className="goal-coaching-v2-text10"></br>
              <br className="goal-coaching-v2-text11"></br>
              <span className="goal-coaching-v2-text12">12 sessions</span>
              <span className="goal-coaching-v2-text13"> for $177/month</span>
              <br className="goal-coaching-v2-text14"></br>
              <br className="goal-coaching-v2-text15"></br>
              <span className="goal-coaching-v2-text16">18 sessions</span>
              <span className="goal-coaching-v2-text17"> for $277/month</span>
              <br className="goal-coaching-v2-text18"></br>
              <br className="goal-coaching-v2-text19"></br>
              <span className="goal-coaching-v2-text20">
                All packages include unlimited messaging in between sessions
              </span>
              <br className="goal-coaching-v2-text21"></br>
            </span>
          </div>
        </div>
        <Hero></Hero>
        <Testimonial rootClassName="testimonial-root-class-name"></Testimonial>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .goal-coaching-v2-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #edebdd;
          }
          .goal-coaching-v2-hero {
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
          .goal-coaching-v2-container1 {
            width: 50%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .goal-coaching-v2-text {
            font-size: 2.2rem;
            align-self: flex-start;
            text-align: left;
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .goal-coaching-v2-text02 {
            color: var(--dl-color-gray-green);
          }
          .goal-coaching-v2-text03 {
            color: var(--dl-color-gray-black);
            font-size: 1.3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Raleway';
            font-weight: 500;
            margin-right: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-coaching-v2-image {
            width: 50%;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .goal-coaching-v2-hero1 {
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
          .goal-coaching-v2-image1 {
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
          .goal-coaching-v2-container2 {
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .goal-coaching-v2-text04 {
            width: 95%;
            font-size: 1.3rem;
            align-self: center;
            text-align: left;
            font-family: 'Raleway';
            font-weight: 500;
          }
          .goal-coaching-v2-text05 {
            font-size: 2rem;
            font-weight: 700;
          }
          .goal-coaching-v2-text06 {
            font-size: 2rem;
            font-weight: 700;
          }
          .goal-coaching-v2-text07 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .goal-coaching-v2-text08 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .goal-coaching-v2-text09 {
            font-style: normal;
          }
          .goal-coaching-v2-text10 {
            font-style: normal;
          }
          .goal-coaching-v2-text11 {
            font-style: normal;
          }
          .goal-coaching-v2-text12 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .goal-coaching-v2-text13 {
            font-style: normal;
          }
          .goal-coaching-v2-text14 {
            font-style: normal;
          }
          .goal-coaching-v2-text15 {
            font-style: normal;
          }
          .goal-coaching-v2-text16 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .goal-coaching-v2-text17 {
            font-style: normal;
          }
          .goal-coaching-v2-text18 {
            font-style: normal;
          }
          .goal-coaching-v2-text19 {
            font-style: normal;
          }
          .goal-coaching-v2-text20 {
            font-size: 1.5rem;
            font-family: 'Raleway';
            font-weight: 600;
          }
          .goal-coaching-v2-text21 {
            font-style: normal;
          }
          @media (max-width: 991px) {
            .goal-coaching-v2-hero {
              flex-direction: row;
            }
            .goal-coaching-v2-container1 {
              align-items: stretch;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .goal-coaching-v2-text {
              text-align: center;
            }
            .goal-coaching-v2-text03 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .goal-coaching-v2-hero1 {
              flex-direction: row;
            }
            .goal-coaching-v2-image1 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-v2-container2 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .goal-coaching-v2-text04 {
              text-align: left;
              margin-left: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .goal-coaching-v2-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .goal-coaching-v2-container1 {
              width: 100%;
            }
            .goal-coaching-v2-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-v2-text03 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .goal-coaching-v2-image {
              width: 100%;
              margin-left: 0px;
            }
            .goal-coaching-v2-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .goal-coaching-v2-image1 {
              width: 50%;
            }
            .goal-coaching-v2-text04 {
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
            .goal-coaching-v2-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-v2-container1 {
              width: 100%;
              align-self: center;
              align-items: center;
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-v2-text03 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
            }
            .goal-coaching-v2-image {
              width: 150%;
              align-self: center;
              margin-left: 0px;
            }
            .goal-coaching-v2-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-v2-container2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-v2-text04 {
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

export default GoalCoachingV2
