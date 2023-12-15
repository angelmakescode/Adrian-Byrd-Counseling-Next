import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Adrian Byrd Counseling</title>
          <meta
            name="description"
            content="Specialist in ACT, DBT, CBT—collaborative therapy for growth. Move confidently towards a brighter future."
          />
          <meta property="og:title" content="Adrian Byrd Counseling" />
          <meta
            property="og:description"
            content="Specialist in ACT, DBT, CBT—collaborative therapy for growth. Move confidently towards a brighter future."
          />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <div className="home-hero">
          <div className="home-container01">
            <span className="home-text">
              <span className="home-text01">GET THE SUPPORT YOU NEED</span>
              <br className="home-text02"></br>
              <br className="home-text03"></br>
              <span className="home-text04">
                Adrian M. Byrd, LCSW is known for a progressive form of
                psychotherapy that combines different therapeutic tools and
                approaches to fit the needs of the individual client. Counseling
                is available in my calming and beautiful office, telehealth by
                phone, and even video!
              </span>
              <br className="home-text05"></br>
              <span className="home-text06">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text07">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text08">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="home-btn-group">
              <Link href="/contact">
                <a className="home-link button">Get Started</a>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/mmU03TW.jpg"
            className="home-image"
          />
        </div>
        <div className="home-hero1">
          <div className="home-container02">
            <h1 className="home-text09">
              THE SUPPORT YOU NEED TO MOVE FORWARD.
            </h1>
            <span className="home-text10">
              <span className="home-text11">
                Adrian M. Byrd, LCSW is known for a utilizing progressive forms
                of psychotherapy such as EMDR &amp; Brainspotting,
              </span>
              <br className="home-text12"></br>
              <span className="home-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="home-btn-group1">
              <Link href="/contact">
                <a className="home-link01 button">Get Started</a>
              </Link>
            </div>
          </div>
          <img
            alt="Adrian M. Byrd, LCSW"
            src="https://i.imgur.com/VY5OeW8.jpg"
            className="home-image1"
          />
        </div>
        <h1 className="home-text16">Therapy catered to you.</h1>
        <span className="home-text17">
          <span>Care available from the comfort of your</span>
          <br></br>
          <span>laptop, inside </span>
          <span>my welcoming office, or on the go.</span>
        </span>
        <div className="home-pricing">
          <div className="home-options">
            <div className="home-container03">
              <div className="home-by-video">
                <span className="home-text22">
                  <span>VIDEO</span>
                  <br></br>
                  <span>SESSIONS</span>
                  <br></br>
                </span>
                <Link href="/contact">
                  <a className="home-link02 button">book session</a>
                </Link>
              </div>
              <div className="home-in-person">
                <span className="home-text27">IN PERSON</span>
                <Link href="/contact">
                  <a className="home-link03 button">book session</a>
                </Link>
              </div>
              <div className="home-by-phone">
                <span className="home-text28">
                  <span>PHONE</span>
                  <br></br>
                  <span>SESSIONS</span>
                  <br></br>
                </span>
                <Link href="/contact">
                  <a className="home-link04 button">book session</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
          <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
            <li data-thq="thq-dropdown" className="home-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle"
              >
                <span className="home-text33">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle1"
              >
                <span className="home-text34">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle2"
              >
                <span className="home-text35">Sub-menu Item</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="home-testimonial">
          <h1 className="home-text36">IMPORTANT NUMBERS</h1>
          <span className="home-text37">
            <span className="home-text38">
              This is not a substitute for therapy. 
            </span>
            <span className="home-text39">If you are having</span>
            <br className="home-text40"></br>
            <span className="home-text41">a mental </span>
            <span className="home-text42">health </span>
            <span className="home-text43">emergency please </span>
            <span className="home-text44">
              call
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text45">911</span>
            <span className="home-text46"> or</span>
            <br className="home-text47"></br>
            <span className="home-text48">
              go to your local emergency room.
            </span>
            <br className="home-text49"></br>
            <br className="home-text50"></br>
            <span className="home-text51">
              National Suicide Prevention Lifeline
            </span>
            <br className="home-text52"></br>
            <br className="home-text53"></br>
            <a href="tel:1-800-273-8255" className="home-link05">
              1-800-273-8255
            </a>
            <a href="tel:1-800-273-8255">
              <br className="home-text54"></br>
            </a>
            <br className="home-text55"></br>
            <span className="home-text56">
              National Domestic Violence Hotline
            </span>
            <br className="home-text57"></br>
            <br className="home-text58"></br>
            <a href="tel:1-800-799-7233" className="home-link07">
              1-800-799-SAFE
            </a>
            <a href="tel:1-800-799-7233">
              <br className="home-text59"></br>
            </a>
            <br className="home-text60"></br>
            <span className="home-text61">National Sexual Assault Hotline</span>
            <br className="home-text62"></br>
            <br className="home-text63"></br>
            <a
              href="https://1-800-656-4673"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link09"
            >
              1-800-656-4673
            </a>
            <br className="home-text64"></br>
            <span className="home-text65">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text66">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="home-testimonial1">
            <div className="home-container04">
              <div className="home-container05"></div>
            </div>
            <div className="home-container06">
              <div className="home-container07"></div>
            </div>
          </div>
        </div>
        <div className="home-testimonial2">
          <div className="home-testimonial3">
            <div className="home-container08">
              <div className="home-container09"></div>
            </div>
            <span className="home-text67">
              <span className="home-text68">
                &quot;Although the world is full of suffering, it is full also
                of the overcoming of it.&quot;
              </span>
              <br></br>
            </span>
            <div className="home-container10">
              <div className="home-container11"></div>
            </div>
          </div>
          <span className="home-text70">Helen Keller</span>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #edebdd;
          }
          .home-hero {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container01 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text {
            font-size: 1.3rem;
            margin-top: var(--dl-space-space-twounits);
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text01 {
            font-size: 1.8rem;
            font-style: normal;
            font-weight: bold;
          }
          .home-text02 {
            font-size: 1.8rem;
            font-style: normal;
          }
          .home-text03 {
            font-style: normal;
          }
          .home-text04 {
            font-weight: 500;
          }
          .home-text05 {
            font-style: normal;
            font-weight: 500;
          }
          .home-text06 {
            font-style: normal;
            font-weight: 500;
          }
          .home-text07 {
            font-style: normal;
            font-weight: 500;
          }
          .home-text08 {
            font-style: normal;
            font-weight: 500;
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link {
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
          .home-link:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .home-image {
            width: 35%;
            box-shadow: 5px 5px 10px 0px #909090;
            object-fit: cover;
            border-radius: 25px;
          }
          .home-hero1 {
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
          .home-container02 {
            width: 50%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text09 {
            font-size: 2.2rem;
            align-self: flex-start;
            text-align: left;
            font-family: Raleway;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text10 {
            color: var(--dl-color-gray-black);
            font-size: 1.3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Raleway;
            font-weight: 500;
            margin-right: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text13 {
            font-style: normal;
          }
          .home-text14 {
            font-style: normal;
          }
          .home-text15 {
            font-style: normal;
          }
          .home-btn-group1 {
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
          }
          .home-link01 {
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
          .home-link01:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .home-image1 {
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
          .home-text16 {
            font-size: 2.2rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Raleway;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .home-text17 {
            font-size: 18px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 600;
          }
          .home-pricing {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-options {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .home-container03 {
            flex: 2;
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .home-by-video {
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
            background-size: cover;
            background-image: url('https://i.imgur.com/lM5lVcN.jpg');
          }
          .home-by-video:hover {
            transform: scale(1.02);
          }
          .home-text22 {
            color: var(--dl-color-gray-beige);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 700;
          }
          .home-link02 {
            font-size: 20px;
            box-shadow: rgb(167, 162, 162) 5px 5px 10px 0px;
            font-style: normal;
            margin-top: 325px;
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
            background-color: rgb(247, 213, 139);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-link02:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .home-in-person {
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
            background-size: cover;
            background-image: url('https://i.imgur.com/INAqaod.jpg');
          }
          .home-in-person:hover {
            transform: scale(1.02);
          }
          .home-text27 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Raleway;
            font-weight: 700;
          }
          .home-link03 {
            font-size: 20px;
            box-shadow: rgb(167, 162, 162) 5px 5px 10px 0px;
            font-style: normal;
            margin-top: 355px;
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
            background-color: rgb(247, 213, 139);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-link03:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .home-by-phone {
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
            background-size: cover;
            background-image: url('https://images.pexels.com/photos/5094348/pexels-photo-5094348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
          }
          .home-by-phone:hover {
            transform: scale(1.02);
          }
          .home-text28 {
            color: var(--dl-color-gray-beige);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 700;
          }
          .home-link04 {
            font-size: 20px;
            box-shadow: rgb(167, 162, 162) 5px 5px 10px 0px;
            font-style: normal;
            margin-top: 325px;
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
            background-color: rgb(247, 213, 139);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-link04:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .home-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #ffffff;
            list-style-position: inside;
          }
          .home-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text33 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text34 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle2 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text35 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-testimonial {
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
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-grey);
            border-top-width: 2.5px;
            border-left-width: 2.5px;
            border-right-width: 2.5px;
            border-bottom-width: 2.5px;
          }
          .home-text36 {
            color: var(--dl-color-gray-beige);
            font-size: 2.5rem;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Raleway;
          }
          .home-text37 {
            color: rgb(237, 235, 221);
            font-size: 18px;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text38 {
            font-style: italic;
          }
          .home-text39 {
            font-style: italic;
          }
          .home-text40 {
            font-style: italic;
          }
          .home-text41 {
            font-style: italic;
          }
          .home-text42 {
            font-style: italic;
          }
          .home-text43 {
            font-style: italic;
          }
          .home-text44 {
            font-style: italic;
          }
          .home-text45 {
            font-style: normal;
          }
          .home-text46 {
            font-style: italic;
          }
          .home-text47 {
            font-style: italic;
          }
          .home-text48 {
            font-style: italic;
          }
          .home-link05 {
            font-style: normal;
            text-decoration: underline;
          }
          .home-text54 {
            text-decoration: underline;
          }
          .home-link07 {
            font-style: normal;
            text-decoration: underline;
          }
          .home-text59 {
            text-decoration: underline;
          }
          .home-link09 {
            font-style: normal;
            text-decoration: underline;
          }
          .home-text65 {
            font-style: normal;
          }
          .home-text66 {
            font-style: normal;
          }
          .home-testimonial1 {
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container05 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container07 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-end;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-testimonial2 {
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
          .home-testimonial3 {
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container09 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text67 {
            color: rgb(237, 235, 221);
            font-size: 1.8rem;
            max-width: 600px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text68 {
            font-family: Raleway;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container11 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-end;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text70 {
            color: #edebdd;
            font-size: 1.5rem;
            max-width: 600px;
            font-style: italic;
            text-align: center;
            font-family: Raleway;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-container01 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-hero1 {
              flex-direction: column;
            }
            .home-container02 {
              align-items: stretch;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .home-text09 {
              text-align: center;
            }
            .home-text10 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-text13 {
              font-style: normal;
            }
            .home-text14 {
              font-style: normal;
            }
            .home-text15 {
              font-style: normal;
            }
            .home-btn-group1 {
              align-self: center;
            }
            .home-link01 {
              align-self: stretch;
            }
            .home-text16 {
              align-self: center;
            }
            .home-options {
              align-items: center;
              flex-direction: column;
            }
            .home-container03 {
              width: 100%;
            }
            .home-text22 {
              color: var(--dl-color-gray-beige);
            }
            .home-testimonial {
              width: 95%;
              margin-top: var(--dl-space-space-fourunits);
            }
            .home-text37 {
              max-width: 100%;
            }
            .home-testimonial2 {
              width: 95%;
              margin-top: var(--dl-space-space-fourunits);
            }
            .home-text67 {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-image {
              width: 80%;
              box-shadow: 5px 5px 10px 0px #7b7979;
              border-radius: 25px;
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container02 {
              width: 100%;
            }
            .home-text09 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text10 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text11 {
              font-size: 1rem;
            }
            .home-text13 {
              font-style: normal;
            }
            .home-text14 {
              font-style: normal;
            }
            .home-text15 {
              font-style: normal;
            }
            .home-btn-group1 {
              align-self: center;
            }
            .home-link01 {
              font-size: 18px;
            }
            .home-image1 {
              width: 100%;
            }
            .home-text17 {
              font-size: 20px;
              font-style: normal;
              text-align: center;
              font-family: Raleway;
              font-weight: 600;
            }
            .home-options {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container03 {
              flex-direction: column;
            }
            .home-by-video {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-in-person {
              width: 100%;
            }
            .home-by-phone {
              width: 100%;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-testimonial {
              width: 90%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text37 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-testimonial2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-link {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container02 {
              width: 100%;
              align-self: center;
              align-items: center;
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text10 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              margin-right: 0px;
            }
            .home-text11 {
              font-size: 0.9rem;
              font-weight: 500;
            }
            .home-text12 {
              font-style: normal;
              font-weight: 500;
            }
            .home-text13 {
              font-style: normal;
              font-weight: 500;
            }
            .home-text14 {
              font-style: normal;
              font-weight: 500;
            }
            .home-text15 {
              font-style: normal;
              font-weight: 500;
            }
            .home-btn-group1 {
              align-self: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-link01 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
            }
            .home-image1 {
              width: 100%;
              align-self: center;
            }
            .home-text16 {
              font-size: 2.5rem;
              text-align: center;
            }
            .home-text17 {
              text-align: center;
            }
            .home-options {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-by-video {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-link02 {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .home-in-person {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
            }
            .home-link03 {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .home-by-phone {
              padding: var(--dl-space-space-twounits);
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .home-link04 {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .home-dropdown-list {
              display: none;
            }
            .home-testimonial {
              width: 94%;
              margin-top: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text37 {
              color: rgb(237, 235, 221);
              font-size: 20px;
              font-family: Raleway;
              font-weight: 500;
            }
            .home-text38 {
              font-style: italic;
              font-weight: 500;
            }
            .home-text39 {
              font-style: italic;
              font-weight: 500;
            }
            .home-text40 {
              font-style: italic;
              font-weight: 500;
            }
            .home-text41 {
              font-style: italic;
              font-weight: 500;
            }
            .home-text42 {
              font-style: italic;
              font-weight: 500;
            }
            .home-text43 {
              font-style: italic;
              font-weight: 500;
            }
            .home-text44 {
              font-style: italic;
              font-weight: 500;
            }
            .home-text45 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .home-text46 {
              font-style: italic;
              font-weight: 500;
            }
            .home-text47 {
              font-style: italic;
              font-weight: 500;
            }
            .home-text48 {
              font-style: italic;
              font-weight: 500;
            }
            .home-text49 {
              font-style: italic;
              font-weight: 500;
            }
            .home-text50 {
              font-style: normal;
            }
            .home-text51 {
              font-size: 22px;
              font-weight: 700;
            }
            .home-text52 {
              font-size: 22px;
              font-weight: 700;
            }
            .home-text53 {
              font-style: normal;
            }
            .home-link05 {
              font-size: 22px;
              font-style: normal;
            }
            .home-text54 {
              font-size: 22px;
              font-style: normal;
            }
            .home-text55 {
              font-style: normal;
            }
            .home-text56 {
              font-size: 22px;
              font-weight: 700;
            }
            .home-text57 {
              font-size: 22px;
              font-weight: 700;
            }
            .home-text58 {
              font-style: normal;
            }
            .home-link07 {
              font-size: 22px;
              font-style: normal;
            }
            .home-text59 {
              font-size: 22px;
              font-style: normal;
            }
            .home-text60 {
              font-style: normal;
            }
            .home-text61 {
              font-size: 22px;
              font-weight: 700;
            }
            .home-text62 {
              font-size: 22px;
              font-weight: 700;
            }
            .home-text63 {
              font-style: normal;
            }
            .home-link09 {
              font-size: 22px;
              font-style: normal;
            }
            .home-text64 {
              font-style: normal;
            }
            .home-text65 {
              font-style: normal;
            }
            .home-text66 {
              font-style: normal;
            }
            .home-testimonial2 {
              width: 85%;
              margin-top: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text67 {
              width: auto;
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
