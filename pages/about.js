import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Adrian Byrd Counseling</title>
          <meta property="og:title" content="About - Adrian Byrd Counseling" />
        </Head>
        <Header></Header>
        <div className="about-hero">
          <div className="about-container1">
            <span className="about-text">
              <span className="about-text01">SERVICES</span>
              <br className="about-text02"></br>
              <br className="about-text03"></br>
              <span className="about-text04">
                Adrian utilizes different therapeutic techniques to try and be
                of help to many different clients. She focuses primarily on ACT
                (Acceptance and Commitment Therapy), DBT (Dialectical Behavioral
                Therapy), CBT (Cognitive Behavioral Therapy), Mindfulness, and
                Gestalt Therapy.
              </span>
              <br className="about-text05"></br>
              <br className="about-text06"></br>
              <span className="about-text07">
                Adrian works collaboratively with her clients, helping them
                clarify and reach each one of their individualized
                goals.Allowing her clients to explore who they are in an
                encouraging and safe environment, Adrian helps people to move
                away from things that no longer work and move forward to a
                brighter, better, way of being.
              </span>
              <span className="about-text08">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="about-text09"></br>
              <span className="about-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="about-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="about-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="about-btn-group">
              <Link href="/contact">
                <a className="about-link button">Get Started</a>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/mmU03TW.jpg"
            className="about-image"
          />
        </div>
        <div className="about-container2">
          <h1 className="about-text13">key values</h1>
          <span className="about-text14">
            The features that help me provide exceptional counseling services.
          </span>
        </div>
        <div className="about-values">
          <div className="about-container3">
            <div className="about-by-video">
              <span className="about-text15">
                <span className="about-text16">EXPERTISE</span>
                <br className="about-text17"></br>
              </span>
              <span className="about-text18">
                <span>
                  I have a masters degree in Social Work from the University Of
                  Illinois and am licensed by Illinois as a Clinical Social
                  Worker. I can proudly say that I have been working in the
                  counseling field since 2001!
                </span>
                <br></br>
              </span>
            </div>
            <div className="about-in-person">
              <span className="about-text21">
                <span>SPACE</span>
                <br></br>
              </span>
              <span className="about-text24">
                <span>
                  I work hard to provide a delightful space for you to find
                  peace and reassurance in. Whether in my soothing office,
                  telehealth by video or phone!
                </span>
                <br></br>
              </span>
            </div>
            <div className="about-by-phone">
              <span className="about-text27">COMFORT</span>
              <span className="about-text28">
                <span>
                  This is an accepting, judgment-free zone. All opinions, views,
                  beliefs, and feelings are accepted. I support, value, and
                  respect everyone with equality. I make it a priority to
                  provide comfort when being confided in by being easy-going,
                  light-hearted, and attentive.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <Link href="/contact">
          <a className="about-link1 button">book a session</a>
        </Link>
        <div className="about-hero1">
          <img
            alt="image"
            src="https://i.imgur.com/HU25TdI.jpg"
            className="about-image1"
          />
          <div className="about-container4">
            <span className="about-text31">
              <span className="about-text32">MY BACKGROUND.</span>
              <br className="about-text33"></br>
              <br className="about-text34"></br>
              <span>
                I am a Licensed Clinical Social Worker with over 20 years of
                experience in the counseling field. When I think back on my
                childhood, I remember popping out the lenses on my sunglasses
                and carrying around a clipboard. I would pretend that I was a
                counselor! This desire to help others persisted throughout my
                middle and early high school years.
              </span>
              <br className="about-text36"></br>
              <br className="about-text37"></br>
              <span>
                When I was a little older, I decided to further my education. I
                ended up earning a Bachelors in Criminal Justice from Illinois
                State University after taking a detour. I almost became a police
                officer but instead, I became a youth mentor. It was then that I
                realized my true passion is actually helping people, and that
                becoming a counselor would be the best way for me to do so! I
                love my job and have genuine compassion for each and every one
                of my clients.
              </span>
              <br className="about-text39"></br>
              <br className="about-text40"></br>
              <span className="about-text41">
                Whether you need guidance through a difficult situation, help
                with exploring your ambivalence, or are just ready for change
                and a new direction. I can help.
              </span>
              <span className="about-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="about-text43"></br>
              <span className="about-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="about-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="about-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="about-btn-group1">
              <Link href="/contact">
                <a className="about-link2 button">Get Started</a>
              </Link>
            </div>
          </div>
        </div>
        <footer className="about-footer">
          <div className="about-separator"></div>
          <Link href="/about">
            <a className="about-link3">
              <svg viewBox="0 0 1024 1024" className="about-icon">
                <path d="M243.499 542.165l225.835-225.835v494.336c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-494.336l225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-298.667-298.667c-4.096-4.096-8.789-7.168-13.824-9.259-5.205-2.176-10.795-3.243-16.341-3.243-10.923 0-21.845 4.181-30.165 12.501l-298.667 298.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </a>
          </Link>
          <div className="about-container5">
            <a href="tel:2173584549" className="about-link4">
              (217) 358-4548
            </a>
            <div className="about-icon-group">
              <a
                href="https://www.facebook.com/adrianbyrdcounseling/"
                target="_blank"
                rel="noreferrer noopener"
                className="about-link5"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="about-icon2"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="about-container6">
            <a
              href="mailto:adrian@adrianbyrdcounseling.com?subject="
              className="about-link6"
            >
              <span className="about-text47">
                adrian@adrianbyrdcounseling.com
              </span>
              <br className="about-text48"></br>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about-hero {
            width: 92%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            min-height: auto;
            align-items: center;
            border-radius: 25px;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-container1 {
            width: 50%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .about-text {
            color: var(--dl-color-gray-black);
            font-size: 1.3rem;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Raleway';
            font-weight: 500;
            margin-right: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-text01 {
            font-style: normal;
            font-weight: 700;
          }
          .about-text02 {
            font-style: normal;
            font-weight: 700;
          }
          .about-text10 {
            font-style: normal;
          }
          .about-text11 {
            font-style: normal;
          }
          .about-text12 {
            font-style: normal;
          }
          .about-btn-group {
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
          }
          .about-link {
            font-size: 20px;
            box-shadow: 5px 5px 10px 0px #888787;
            font-style: normal;
            transition: 0.3s;
            font-family: Raleway;
            font-weight: 600;
            padding-top: var(--dl-space-space-unit);
            border-width: 2.5px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 25px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: #f7d58b;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .about-link:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .about-image {
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
          .about-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .about-text13 {
            font-size: 1.8rem;
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .about-text14 {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 500;
          }
          .about-values {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .about-container3 {
            flex: 2;
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .about-by-video {
            flex: 1;
            height: 450px;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #8c8888;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 10px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .about-by-video:hover {
            transform: scale(1.02);
          }
          .about-text15 {
            color: var(--dl-color-gray-black);
            font-size: 1.8rem;
            text-align: center;
            font-family: Raleway;
            font-weight: 800;
          }
          .about-text16 {
            font-weight: 700;
          }
          .about-text17 {
            font-style: normal;
          }
          .about-text18 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Raleway;
            font-weight: 500;
          }
          .about-in-person {
            flex: 1;
            color: var(--dl-color-gray-beige);
            height: 450px;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #888484;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 10px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .about-in-person:hover {
            transform: scale(1.02);
          }
          .about-text21 {
            color: #000000;
            font-size: 1.8rem;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 700;
          }
          .about-text24 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Raleway;
            font-weight: 500;
          }
          .about-by-phone {
            flex: 1;
            height: 450px;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #8a8888;
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            padding-top: var(--dl-space-space-twounits);
            margin-right: 0px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 10px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .about-by-phone:hover {
            transform: scale(1.02);
          }
          .about-text27 {
            color: var(--dl-color-gray-black);
            font-size: 1.8rem;
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
          }
          .about-text28 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Raleway;
            font-weight: 500;
          }
          .about-link1 {
            font-size: 20px;
            box-shadow: 5px 5px 10px 0px #a7a2a2;
            font-style: normal;
            transition: 0.3s;
            font-family: Raleway;
            font-weight: 600;
            padding-top: var(--dl-space-space-unit);
            border-width: 2.5px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 25px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: #f7d58b;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .about-link1:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .about-hero1 {
            width: 92%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            min-height: auto;
            align-items: center;
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: space-between;
          }
          .about-image1 {
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
          .about-container4 {
            width: 50%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .about-text31 {
            color: var(--dl-color-gray-black);
            font-size: 1.3rem;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Raleway';
            font-weight: 500;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-text32 {
            font-style: normal;
            font-weight: 700;
          }
          .about-text33 {
            font-style: normal;
            font-weight: 700;
          }
          .about-text44 {
            font-style: normal;
          }
          .about-text45 {
            font-style: normal;
          }
          .about-text46 {
            font-style: normal;
          }
          .about-btn-group1 {
            display: flex;
            align-self: flex-end;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .about-link2 {
            font-size: 20px;
            box-shadow: 5px 5px 10px 0px #888787;
            font-style: normal;
            transition: 0.3s;
            font-family: Raleway;
            font-weight: 600;
            padding-top: var(--dl-space-space-unit);
            border-width: 2.5px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 25px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: #f7d58b;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .about-link2:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .about-footer {
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
          .about-separator {
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
          .about-link3 {
            display: contents;
          }
          .about-icon {
            width: 34px;
            height: 34px;
            align-self: flex-start;
            text-decoration: none;
          }
          .about-container5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-link4 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            text-decoration: none;
          }
          .about-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-link5 {
            display: contents;
          }
          .about-icon2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            text-decoration: none;
          }
          .about-container6 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-link6 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            text-decoration: none;
          }
          .about-text48 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .about-hero {
              flex-direction: column;
            }
            .about-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .about-text {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .about-text01 {
              font-size: 2rem;
              font-style: normal;
              font-weight: bold;
            }
            .about-text02 {
              font-size: 2.5rem;
              font-style: normal;
            }
            .about-text03 {
              font-style: normal;
            }
            .about-text04 {
              font-size: 1rem;
            }
            .about-text05 {
              font-size: 1rem;
            }
            .about-text06 {
              font-size: 1rem;
            }
            .about-text07 {
              font-size: 1rem;
            }
            .about-text08 {
              font-size: 1.2rem;
              font-weight: 500;
            }
            .about-text09 {
              font-style: normal;
              font-weight: 500;
            }
            .about-text10 {
              font-style: normal;
              font-weight: 500;
            }
            .about-text11 {
              font-style: normal;
              font-weight: 500;
            }
            .about-text12 {
              font-style: normal;
              font-weight: 500;
            }
            .about-btn-group {
              align-self: center;
            }
            .about-link {
              font-size: 18px;
              box-shadow: rgb(136, 135, 135) 5px 5px 10px 0px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 600;
              text-transform: uppercase;
              text-decoration: none;
              background-color: rgb(247, 213, 139);
            }
            .about-image {
              width: 75%;
            }
            .about-text13 {
              align-self: center;
            }
            .about-values {
              align-items: center;
              flex-direction: column;
            }
            .about-container3 {
              width: 100%;
            }
            .about-by-video {
              height: 400px;
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .about-text15 {
              color: var(--dl-color-gray-black);
              font-style: normal;
              font-weight: 700;
            }
            .about-text18 {
              color: var(--dl-color-gray-black);
              font-size: 1rem;
              margin-top: var(--dl-space-space-halfunit);
            }
            .about-in-person {
              height: 400px;
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .about-text24 {
              color: var(--dl-color-gray-black);
              font-size: 1rem;
              margin-top: var(--dl-space-space-halfunit);
            }
            .about-by-phone {
              height: 400px;
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .about-text28 {
              color: var(--dl-color-gray-black);
              font-size: 1rem;
              margin-top: var(--dl-space-space-halfunit);
            }
            .about-hero1 {
              flex-direction: column;
            }
            .about-container4 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .about-text31 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .about-text32 {
              font-size: 1.5rem;
              font-style: normal;
              font-weight: 700;
            }
            .about-text33 {
              font-size: 1.5rem;
              font-style: normal;
              font-weight: 700;
            }
            .about-text44 {
              font-style: normal;
            }
            .about-text45 {
              font-style: normal;
            }
            .about-text46 {
              font-style: normal;
            }
            .about-btn-group1 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .about-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-container1 {
              width: 95%;
            }
            .about-text {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              font-family: Raleway;
              font-weight: 500;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-text01 {
              font-size: 1.3rem;
              font-style: normal;
              font-weight: bold;
            }
            .about-text02 {
              font-size: 2.5rem;
              font-style: normal;
            }
            .about-text03 {
              font-style: normal;
            }
            .about-text04 {
              font-size: 1rem;
            }
            .about-text05 {
              font-size: 1rem;
            }
            .about-text06 {
              font-size: 1rem;
            }
            .about-text07 {
              font-size: 1rem;
            }
            .about-text08 {
              font-size: 1.2rem;
              font-weight: 500;
            }
            .about-text09 {
              font-style: normal;
              font-weight: 500;
            }
            .about-text10 {
              font-style: normal;
              font-weight: 500;
            }
            .about-text11 {
              font-style: normal;
              font-weight: 500;
            }
            .about-text12 {
              font-style: normal;
              font-weight: 500;
            }
            .about-container2 {
              display: none;
            }
            .about-text14 {
              font-size: 16px;
              font-style: normal;
              text-align: center;
              font-family: Raleway;
              font-weight: 600;
            }
            .about-values {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-container3 {
              flex-direction: column;
            }
            .about-by-video {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .about-text18 {
              color: var(--dl-color-gray-black);
              font-size: 1.2rem;
              font-style: normal;
              font-family: Raleway;
              font-weight: 500;
            }
            .about-in-person {
              width: 100%;
              height: 270px;
            }
            .about-text24 {
              color: var(--dl-color-gray-black);
              font-size: 1.2rem;
              font-style: normal;
              font-family: Raleway;
              font-weight: 500;
            }
            .about-by-phone {
              width: 100%;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .about-text28 {
              color: var(--dl-color-gray-black);
              font-size: 1.2rem;
              font-style: normal;
              font-family: Raleway;
              font-weight: 500;
            }
            .about-link1 {
              font-size: 16px;
              box-shadow: rgb(167, 162, 162) 5px 5px 10px 0px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 600;
              text-transform: uppercase;
              text-decoration: none;
              background-color: rgb(247, 213, 139);
            }
            .about-hero1 {
              margin-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: 0px;
            }
            .about-container4 {
              width: 95%;
              margin-left: 0px;
            }
            .about-text31 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              font-family: Raleway;
              font-weight: 500;
              margin-left: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-text32 {
              font-size: 1.5rem;
              font-style: normal;
              font-weight: 700;
            }
            .about-text33 {
              font-size: 1.5rem;
              font-style: normal;
              font-weight: 700;
            }
            .about-text36 {
              font-size: 1rem;
            }
            .about-text37 {
              font-size: 1rem;
            }
            .about-text39 {
              font-size: 1rem;
            }
            .about-text40 {
              font-size: 1rem;
            }
            .about-text41 {
              font-size: 1.3rem;
            }
            .about-text44 {
              font-style: normal;
            }
            .about-text45 {
              font-style: normal;
            }
            .about-text46 {
              font-style: normal;
            }
            .about-btn-group1 {
              align-self: center;
              justify-content: flex-end;
            }
            .about-link2 {
              font-size: 16px;
            }
            .about-footer {
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-icon {
              align-self: center;
            }
            .about-container5 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .about-link4 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-icon2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-container6 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .about-link6 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-text47 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .about-hero {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .about-container1 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-text {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              margin-top: 0px;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-text01 {
              font-size: 1.3rem;
              font-style: normal;
              font-weight: bold;
            }
            .about-text02 {
              font-size: 2.5rem;
              font-style: normal;
              font-weight: 600;
            }
            .about-text03 {
              font-style: normal;
            }
            .about-text04 {
              font-size: 1rem;
            }
            .about-text05 {
              font-size: 1rem;
            }
            .about-text06 {
              font-size: 1rem;
            }
            .about-text07 {
              font-size: 1rem;
            }
            .about-text08 {
              font-size: 1.2rem;
              font-weight: 500;
            }
            .about-text09 {
              font-style: normal;
              font-weight: 500;
            }
            .about-text10 {
              font-style: normal;
              font-weight: 500;
            }
            .about-text11 {
              font-style: normal;
              font-weight: 500;
            }
            .about-text12 {
              font-style: normal;
              font-weight: 500;
            }
            .about-btn-group {
              flex-direction: column;
            }
            .about-link {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .about-text13 {
              font-size: 1.2rem;
              margin-top: 0px;
              text-align: center;
              font-family: Raleway;
              text-transform: uppercase;
            }
            .about-text14 {
              font-size: 1rem;
              font-style: normal;
              text-align: center;
              font-weight: 500;
            }
            .about-values {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .about-by-video {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-text15 {
              font-size: 1.5rem;
            }
            .about-text18 {
              font-size: 1rem;
            }
            .about-in-person {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
            }
            .about-text21 {
              font-size: 1.5rem;
            }
            .about-text24 {
              font-size: 1rem;
            }
            .about-by-phone {
              padding: var(--dl-space-space-twounits);
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .about-text27 {
              font-size: 1.5rem;
            }
            .about-text28 {
              font-size: 1rem;
            }
            .about-link1 {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              font-weight: 700;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .about-hero1 {
              margin-top: 0px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-image1 {
              width: 75%;
            }
            .about-container4 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-text31 {
              color: var(--dl-color-gray-black);
            }
            .about-text32 {
              font-size: 1.3rem;
              font-style: normal;
              font-weight: bold;
            }
            .about-text33 {
              font-size: 1.8rem;
              font-style: normal;
            }
            .about-text34 {
              font-style: normal;
            }
            .about-text36 {
              font-size: 1rem;
            }
            .about-text37 {
              font-size: 1rem;
            }
            .about-text39 {
              font-size: 1rem;
            }
            .about-text40 {
              font-size: 1rem;
            }
            .about-text41 {
              font-size: 1.3rem;
            }
            .about-text42 {
              font-size: 1.2rem;
              font-weight: 500;
            }
            .about-text43 {
              font-style: normal;
              font-weight: 500;
            }
            .about-text44 {
              font-style: normal;
              font-weight: 500;
            }
            .about-text45 {
              font-style: normal;
              font-weight: 500;
            }
            .about-text46 {
              font-style: normal;
              font-weight: 500;
            }
            .about-btn-group1 {
              align-self: center;
              flex-direction: column;
              justify-content: center;
            }
            .about-link2 {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .about-footer {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .about-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-container5 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .about-link4 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-container6 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .about-link6 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-text47 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default About
