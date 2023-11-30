import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'

const Team = (props) => {
  return (
    <>
      <div className="team-container">
        <Head>
          <title>Team - Adrian Byrd Counseling</title>
          <meta property="og:title" content="Team - Adrian Byrd Counseling" />
        </Head>
        <Header></Header>
        <div className="team-banner">
          <h2 className="team-text">
            <span className="team-text01">
              MEET OUR
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="team-text02">
              DEVOTED
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="team-text03">TEAM!</span>
            <br className="team-text04"></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="team-container01">
          <div className="team-container02">
            <img
              alt="image"
              src="https://i.imgur.com/OErRGi5.png"
              className="team-image"
            />
            <h2 className="team-text06">
              <span>Adrian M.</span>
              <br></br>
              <span>Byrd, </span>
              <span>LCSW</span>
              <br className="team-text11"></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
            <div className="team-social-bar">
              <a href="tel:(217) 358-4548" className="team-link">
                <svg viewBox="0 0 1024 1024" className="team-icon">
                  <path d="M640 512q0-52-38-90t-90-38v-86q88 0 151 63t63 151h-86zM810 512q0-124-87-211t-211-87v-86q160 0 272 112t112 272h-86zM854 662q18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30v2q0 82 24 150 4 8 4 14 0 20-14 30l-94 94q40 76 123 159t159 123l94-94q14-14 30-14 6 0 14 4 72 24 152 24z"></path>
                </svg>
              </a>
              <a
                href="mailto:adrian@adrianbyrdcounseling.com?subject="
                className="team-link01"
              >
                <svg viewBox="0 0 1024 1024" className="team-icon02">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="team-container03">
            <img
              alt="image"
              src="https://i.imgur.com/wzVuWgO.png"
              className="team-image1"
            />
            <h2 className="team-text13">
              <span>Angela</span>
              <br></br>
              <span>Jackson, LCSW</span>
              <br className="team-text17"></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
            <div className="team-social-bar1">
              <a href="tel:(217) 840-4090" className="team-link02">
                <svg viewBox="0 0 1024 1024" className="team-icon04">
                  <path d="M640 512q0-52-38-90t-90-38v-86q88 0 151 63t63 151h-86zM810 512q0-124-87-211t-211-87v-86q160 0 272 112t112 272h-86zM854 662q18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30v2q0 82 24 150 4 8 4 14 0 20-14 30l-94 94q40 76 123 159t159 123l94-94q14-14 30-14 6 0 14 4 72 24 152 24z"></path>
                </svg>
              </a>
              <a
                href="mailto:angie@jacksonthearpyllc.com?subject="
                className="team-link03"
              >
                <svg viewBox="0 0 1024 1024" className="team-icon06">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="team-container04">
            <img
              alt="image"
              src="https://i.imgur.com/IzTX1AK.png"
              className="team-image2"
            />
            <h2 className="team-text19">
              <span>Melanie</span>
              <br></br>
              <span>Welch, </span>
              <span>LCPC</span>
            </h2>
            <div className="team-social-bar2">
              <a href="tel:(217) 828-1534" className="team-link04">
                <svg viewBox="0 0 1024 1024" className="team-icon08">
                  <path d="M640 512q0-52-38-90t-90-38v-86q88 0 151 63t63 151h-86zM810 512q0-124-87-211t-211-87v-86q160 0 272 112t112 272h-86zM854 662q18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30v2q0 82 24 150 4 8 4 14 0 20-14 30l-94 94q40 76 123 159t159 123l94-94q14-14 30-14 6 0 14 4 72 24 152 24z"></path>
                </svg>
              </a>
              <a
                href="mailto:melanie@melaniewelchcounseling.com?subject="
                className="team-link05"
              >
                <svg viewBox="0 0 1024 1024" className="team-icon10">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="team-testimonial">
          <h1 className="team-text24">IMPORTANT NUMBERS</h1>
          <span className="team-text25">
            <span className="team-text26">
              This is not a substitute for therapy. 
            </span>
            <span className="team-text27">If you are having</span>
            <br className="team-text28"></br>
            <span className="team-text29">a mental </span>
            <span className="team-text30">health </span>
            <span className="team-text31">emergency please </span>
            <span className="team-text32">
              call
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="team-text33">911</span>
            <span className="team-text34"> or</span>
            <br className="team-text35"></br>
            <span className="team-text36">
              go to your local emergency room.
            </span>
            <br className="team-text37"></br>
            <br className="team-text38"></br>
            <span className="team-text39">
              National Suicide Prevention Lifeline
            </span>
            <br className="team-text40"></br>
            <br className="team-text41"></br>
            <a href="tel:1-800-273-8255" className="team-link06">
              1-800-273-8255
            </a>
            <a href="tel:1-800-273-8255">
              <br className="team-text42"></br>
            </a>
            <br className="team-text43"></br>
            <span className="team-text44">
              National Domestic Violence Hotline
            </span>
            <br className="team-text45"></br>
            <br className="team-text46"></br>
            <a href="tel:1-800-799-7233" className="team-link08">
              1-800-799-SAFE
            </a>
            <a href="tel:1-800-799-7233">
              <br className="team-text47"></br>
            </a>
            <br className="team-text48"></br>
            <span className="team-text49">National Sexual Assault Hotline</span>
            <br className="team-text50"></br>
            <br className="team-text51"></br>
            <a
              href="https://1-800-656-4673"
              target="_blank"
              rel="noreferrer noopener"
              className="team-link10"
            >
              1-800-656-4673
            </a>
            <br className="team-text52"></br>
            <span className="team-text53">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="team-text54">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="team-testimonial1">
            <div className="team-container05">
              <div className="team-container06"></div>
            </div>
            <div className="team-container07">
              <div className="team-container08"></div>
            </div>
          </div>
        </div>
        <footer className="team-footer">
          <div className="team-separator"></div>
          <Link href="/">
            <a className="team-link11">
              <svg viewBox="0 0 1024 1024" className="team-icon12">
                <path d="M243.499 542.165l225.835-225.835v494.336c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-494.336l225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-298.667-298.667c-4.096-4.096-8.789-7.168-13.824-9.259-5.205-2.176-10.795-3.243-16.341-3.243-10.923 0-21.845 4.181-30.165 12.501l-298.667 298.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </a>
          </Link>
          <div className="team-container09">
            <a href="tel:(217) 358-4548" className="team-link12">
              (217) 358-4548
            </a>
            <div className="team-icon-group">
              <a
                href="https://www.facebook.com/adrianbyrdcounseling/"
                target="_blank"
                rel="noreferrer noopener"
                className="team-link13"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="team-icon14"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="team-container10">
            <a
              href="mailto:adrian@adrianbyrdcounseling.com?subject="
              className="team-link14"
            >
              <span className="team-text55">
                adrian@adrianbyrdcounseling.com
              </span>
              <br className="team-text56"></br>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .team-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .team-banner {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .team-text {
            font-size: 2.5rem;
            text-align: center;
            font-family: Raleway;
            font-weight: 600;
            border-color: var(--dl-color-gray-black);
            border-width: 1.5px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .team-text01 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
          }
          .team-text02 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
          }
          .team-text03 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
          }
          .team-text04 {
            font-weight: 600;
          }
          .team-container01 {
            flex: 0 0 auto;
            width: 58%;
            display: flex;
            align-items: stretch;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            justify-content: center;
          }
          .team-container02 {
            flex: 0 0 auto;
            width: 33%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .team-image {
            width: 50%;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #8a8888;
            object-fit: cover;
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            border-radius: 25px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .team-text06 {
            font-size: 1.5rem;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Raleway;
            font-weight: 600;
            margin-bottom: 0px;
          }
          .team-social-bar {
            width: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            align-items: center;
            padding-left: 16px;
            justify-content: flex-end;
          }
          .team-link {
            display: contents;
          }
          .team-icon {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-right: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .team-link01 {
            display: contents;
          }
          .team-icon02 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .team-container03 {
            flex: 0 0 auto;
            width: 33%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .team-image1 {
            width: 50%;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #8a8888;
            object-fit: cover;
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            border-radius: 25px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .team-text13 {
            font-size: 1.5rem;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Raleway;
            font-weight: 600;
            margin-bottom: 0px;
          }
          .team-social-bar1 {
            width: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            align-items: center;
            padding-left: 16px;
            justify-content: flex-end;
          }
          .team-link02 {
            display: contents;
          }
          .team-icon04 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-right: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .team-link03 {
            display: contents;
          }
          .team-icon06 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .team-container04 {
            flex: 0 0 auto;
            width: 33%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .team-image2 {
            width: 50%;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #908d8d;
            object-fit: cover;
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            border-radius: 25px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .team-text19 {
            font-size: 1.5rem;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Raleway;
            font-weight: 600;
            margin-bottom: 0px;
          }
          .team-social-bar2 {
            width: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            align-items: center;
            padding-left: 16px;
            justify-content: flex-end;
          }
          .team-link04 {
            display: contents;
          }
          .team-icon08 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-right: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .team-link05 {
            display: contents;
          }
          .team-icon10 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .team-testimonial {
            width: 95%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px #848181;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 2.5px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 25px;
            margin-bottom: 0px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-grey);
            border-top-width: 2.5px;
            border-left-width: 2.5px;
            border-right-width: 2.5px;
            border-bottom-width: 2.5px;
          }
          .team-text24 {
            color: var(--dl-color-gray-beige);
            font-size: 2.5rem;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Raleway;
          }
          .team-text25 {
            color: rgb(237, 235, 221);
            font-size: 18px;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .team-text26 {
            font-style: italic;
          }
          .team-text27 {
            font-style: italic;
          }
          .team-text28 {
            font-style: italic;
          }
          .team-text29 {
            font-style: italic;
          }
          .team-text30 {
            font-style: italic;
          }
          .team-text31 {
            font-style: italic;
          }
          .team-text32 {
            font-style: italic;
          }
          .team-text33 {
            font-style: normal;
          }
          .team-text34 {
            font-style: italic;
          }
          .team-text35 {
            font-style: italic;
          }
          .team-text36 {
            font-style: italic;
          }
          .team-link06 {
            font-style: normal;
            text-decoration: underline;
          }
          .team-text42 {
            text-decoration: underline;
          }
          .team-link08 {
            font-style: normal;
            text-decoration: underline;
          }
          .team-text47 {
            text-decoration: underline;
          }
          .team-link10 {
            font-style: normal;
            text-decoration: underline;
          }
          .team-text53 {
            font-style: normal;
          }
          .team-text54 {
            font-style: normal;
          }
          .team-testimonial1 {
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .team-container05 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-container06 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .team-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-container08 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-end;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .team-footer {
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
          .team-separator {
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
          .team-link11 {
            display: contents;
          }
          .team-icon12 {
            width: 34px;
            height: 34px;
            align-self: flex-start;
            text-decoration: none;
          }
          .team-container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-link12 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            text-decoration: none;
          }
          .team-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-link13 {
            display: contents;
          }
          .team-icon14 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            text-decoration: none;
          }
          .team-container10 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-link14 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            text-decoration: none;
          }
          .team-text56 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .team-text {
              text-align: center;
            }
            .team-text06 {
              text-align: center;
            }
            .team-text13 {
              text-align: center;
            }
            .team-text19 {
              text-align: center;
            }
            .team-testimonial {
              width: 95%;
              margin-top: var(--dl-space-space-fourunits);
            }
            .team-text25 {
              max-width: 100%;
            }
          }
          @media (max-width: 767px) {
            .team-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-text {
              font-size: 2.2rem;
            }
            .team-container01 {
              width: 80%;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .team-image {
              width: 50%;
              border-radius: 15px;
            }
            .team-text06 {
              font-size: 1rem;
            }
            .team-social-bar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-image1 {
              width: 50%;
              border-radius: 15px;
            }
            .team-text13 {
              font-size: 1rem;
              font-family: Raleway;
              font-weight: 600;
            }
            .team-text17 {
              font-weight: 600;
            }
            .team-social-bar1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-image2 {
              border-radius: 15px;
            }
            .team-text19 {
              font-size: 1rem;
            }
            .team-social-bar2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-testimonial {
              width: 90%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-text25 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .team-footer {
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .team-icon12 {
              align-self: center;
            }
            .team-container09 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .team-link12 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .team-icon14 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .team-container10 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .team-link14 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .team-text55 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .team-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .team-container01 {
              width: 80%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .team-image {
              width: 42%;
              border-radius: 10px;
            }
            .team-text06 {
              font-size: 0.9rem;
            }
            .team-text11 {
              font-weight: 600;
            }
            .team-social-bar {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .team-icon {
              width: 22px;
              height: 22px;
            }
            .team-icon02 {
              width: 22px;
              height: 22px;
            }
            .team-image1 {
              width: 42%;
              border-radius: 10px;
            }
            .team-text13 {
              font-size: 0.9rem;
            }
            .team-social-bar1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .team-icon04 {
              width: 22px;
              height: 22px;
            }
            .team-icon06 {
              width: 22px;
              height: 22px;
            }
            .team-image2 {
              width: 42%;
              border-radius: 10px;
            }
            .team-text19 {
              font-size: 0.9rem;
            }
            .team-social-bar2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .team-icon08 {
              width: 22px;
              height: 22px;
            }
            .team-icon10 {
              width: 22px;
              height: 22px;
            }
            .team-testimonial {
              width: 94%;
              margin-top: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .team-text25 {
              color: rgb(237, 235, 221);
              font-size: 20px;
              font-family: Raleway;
              font-weight: 500;
            }
            .team-text26 {
              font-style: italic;
              font-weight: 500;
            }
            .team-text27 {
              font-style: italic;
              font-weight: 500;
            }
            .team-text28 {
              font-style: italic;
              font-weight: 500;
            }
            .team-text29 {
              font-style: italic;
              font-weight: 500;
            }
            .team-text30 {
              font-style: italic;
              font-weight: 500;
            }
            .team-text31 {
              font-style: italic;
              font-weight: 500;
            }
            .team-text32 {
              font-style: italic;
              font-weight: 500;
            }
            .team-text33 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .team-text34 {
              font-style: italic;
              font-weight: 500;
            }
            .team-text35 {
              font-style: italic;
              font-weight: 500;
            }
            .team-text36 {
              font-style: italic;
              font-weight: 500;
            }
            .team-text37 {
              font-style: italic;
              font-weight: 500;
            }
            .team-text38 {
              font-style: normal;
            }
            .team-text39 {
              font-size: 22px;
              font-weight: 700;
            }
            .team-text40 {
              font-size: 22px;
              font-weight: 700;
            }
            .team-text41 {
              font-style: normal;
            }
            .team-link06 {
              font-size: 22px;
              font-style: normal;
            }
            .team-text42 {
              font-size: 22px;
              font-style: normal;
            }
            .team-text43 {
              font-style: normal;
            }
            .team-text44 {
              font-size: 22px;
              font-weight: 700;
            }
            .team-text45 {
              font-size: 22px;
              font-weight: 700;
            }
            .team-text46 {
              font-style: normal;
            }
            .team-link08 {
              font-size: 22px;
              font-style: normal;
            }
            .team-text47 {
              font-size: 22px;
              font-style: normal;
            }
            .team-text48 {
              font-style: normal;
            }
            .team-text49 {
              font-size: 22px;
              font-weight: 700;
            }
            .team-text50 {
              font-size: 22px;
              font-weight: 700;
            }
            .team-text51 {
              font-style: normal;
            }
            .team-link10 {
              font-size: 22px;
              font-style: normal;
            }
            .team-text52 {
              font-style: normal;
            }
            .team-text53 {
              font-style: normal;
            }
            .team-text54 {
              font-style: normal;
            }
            .team-footer {
              padding: var(--dl-space-space-unit);
            }
            .team-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .team-icon12 {
              align-self: center;
            }
            .team-container09 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .team-link12 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .team-container10 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .team-link14 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .team-text55 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Team
