import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Form from '../components/form'
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
        <Form></Form>
        <div className="goal-coaching-hero1">
          <img
            alt="image"
            src="https://i.imgur.com/hXzuerG.png"
            className="goal-coaching-image1"
          />
          <div className="goal-coaching-container2">
            <span className="goal-coaching-text05">
              <span className="goal-coaching-text06">SIMPLE PRICING</span>
              <br className="goal-coaching-text07"></br>
              <br className="goal-coaching-text08"></br>
              <span className="goal-coaching-text09">6 sessions</span>
              <span className="goal-coaching-text10"> for $97/month</span>
              <br className="goal-coaching-text11"></br>
              <br className="goal-coaching-text12"></br>
              <span className="goal-coaching-text13">12 sessions</span>
              <span className="goal-coaching-text14"> for $177/month</span>
              <br className="goal-coaching-text15"></br>
              <br className="goal-coaching-text16"></br>
              <span className="goal-coaching-text17">18 sessions</span>
              <span className="goal-coaching-text18"> for $277/month</span>
              <br className="goal-coaching-text19"></br>
              <br className="goal-coaching-text20"></br>
              <span className="goal-coaching-text21">
                All packages include unlimited messaging in between sessions
              </span>
              <br className="goal-coaching-text22"></br>
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
          .goal-coaching-container2 {
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .goal-coaching-text05 {
            width: 95%;
            font-size: 1.3rem;
            align-self: center;
            text-align: left;
            font-family: 'Raleway';
            font-weight: 500;
          }
          .goal-coaching-text06 {
            font-size: 1.8rem;
            font-weight: 700;
          }
          .goal-coaching-text07 {
            font-size: 1.8rem;
            font-weight: 700;
          }
          .goal-coaching-text08 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .goal-coaching-text09 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .goal-coaching-text10 {
            font-style: normal;
          }
          .goal-coaching-text11 {
            font-style: normal;
          }
          .goal-coaching-text12 {
            font-style: normal;
          }
          .goal-coaching-text13 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .goal-coaching-text14 {
            font-style: normal;
          }
          .goal-coaching-text15 {
            font-style: normal;
          }
          .goal-coaching-text16 {
            font-style: normal;
          }
          .goal-coaching-text17 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .goal-coaching-text18 {
            font-style: normal;
          }
          .goal-coaching-text19 {
            font-style: normal;
          }
          .goal-coaching-text20 {
            font-style: normal;
          }
          .goal-coaching-text21 {
            font-size: 1.5rem;
            font-family: 'Raleway';
            font-weight: 600;
          }
          .goal-coaching-text22 {
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
            .goal-coaching-text05 {
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
            .goal-coaching-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .goal-coaching-image1 {
              width: 50%;
            }
            .goal-coaching-text05 {
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
            .goal-coaching-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .goal-coaching-image1 {
              width: 85%;
            }
            .goal-coaching-container2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .goal-coaching-text05 {
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
