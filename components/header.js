import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'

const Header = (props) => {
  return (
    <>
      <header
        data-role="Header"
        className={`header-header ${props.rootClassName} `}
      >
        <Link href="/">
          <a className="header-link">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="header-image"
            />
          </a>
        </Link>
        <div className="header-nav">
          <NavigationLinks rootClassName="rootClassName8"></NavigationLinks>
        </div>
        <div className="header-btn-group">
          <a
            href="https://doxy.me/abyrd"
            target="_blank"
            rel="noreferrer noopener"
            className="header-link01 button"
          >
            <span className="header-text">{props.text}</span>
            <svg viewBox="0 0 1024 1024" className="header-icon">
              <path d="M938.667 381.568v260.864l-182.613-130.432zM128 170.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v426.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h469.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-130.432l231.211 165.163c19.157 13.696 45.824 9.259 59.52-9.899 5.376-7.595 7.979-16.341 7.936-24.832v-426.667c0-23.552-19.115-42.667-42.667-42.667-9.301 0-17.92 2.987-24.789 7.936l-231.211 165.163v-130.432c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM128 256h469.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v426.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-469.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-426.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501z"></path>
            </svg>
          </a>
          <Link href="/contact">
            <a className="header-link02 button">{props.button1}</a>
          </Link>
        </div>
        <div data-thq="thq-dropdown" className="header-dropdown list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="header-dropdown-toggle"
          >
            <div
              data-thq="thq-dropdown-arrow"
              className="header-dropdown-arrow"
            ></div>
            <span className="header-text1">{props.text1}</span>
          </div>
          <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
            <li data-thq="thq-dropdown" className="header-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle1"
              >
                <Link href="/">
                  <a className="header-link03">HOME</a>
                </Link>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle2"
              >
                <Link href="/about">
                  <a className="header-link04">ABOUT</a>
                </Link>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown3 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle3"
              >
                <Link href="/team">
                  <a className="header-link05">TEAM</a>
                </Link>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown4 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle4"
              >
                <Link href="/info">
                  <a className="header-link06">INFO</a>
                </Link>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown5 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle5"
              >
                <a
                  href="https://doxy.me/abyrd"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="header-video-session"
                >
                  VIDEO SESSION
                </a>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown6 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle6"
              >
                <Link href="/goal-coaching">
                  <a className="header-link07">GOAL COACHING</a>
                </Link>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown7 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle7"
              >
                <Link href="/contact">
                  <a className="header-link08">CONTACT</a>
                </Link>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown8 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle8"
              >
                <a
                  href="https://www.facebook.com/adrianbyrdcounseling"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="header-fb"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <style jsx>
        {`
          .header-header {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: 0px;
            justify-content: space-between;
          }
          .header-link {
            display: contents;
          }
          .header-image {
            height: 8rem;
            text-decoration: none;
          }
          .header-nav {
            display: flex;
          }
          .header-btn-group {
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .header-link01 {
            display: flex;
            font-size: 1rem;
            box-shadow: 5px 5px 10px 0px #a7a2a2;
            font-style: normal;
            transition: 0.3s;
            font-family: Raleway;
            font-weight: 600;
            padding-top: var(--dl-space-space-unit);
            border-width: 2.5px;
            margin-right: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 25px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: transparent;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .header-link01:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .header-icon {
            width: 24px;
            height: 24px;
            display: none;
          }
          .header-link02 {
            font-size: 1rem;
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
          .header-link02:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .header-dropdown {
            cursor: pointer;
            display: none;
            position: relative;
            margin-top: 0px;
            border-radius: var(--dl-radius-radius-radius2);
            margin-bottom: var(--dl-space-space-sixunits);
          }
          .header-dropdown-toggle {
            fill: #595959;
            width: 100%;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-arrow {
            transition: 0.3s;
          }
          .header-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 2.5px;
            border-radius: 25px;
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-beige);
            list-style-position: inside;
            border-top-left-radius: 25;
            border-top-right-radius: 25;
          }
          .header-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
          }
          .header-dropdown-toggle1 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle1:hover {
            fill: #fff;
            color: var(--dl-color-gray-beige);
            border-radius: 22px;
            background-color: var(--dl-color-gray-green);
            border-top-left-radius: 25;
            border-top-right-radius: 25;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .header-link03 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 600;
            text-decoration: none;
          }
          .header-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
          }
          .header-dropdown-toggle2 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle2:hover {
            fill: #fff;
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-green);
            border-top-left-radius: 25;
            border-top-right-radius: 25;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .header-link04 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 600;
            text-decoration: none;
          }
          .header-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
          }
          .header-dropdown-toggle3 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle3:hover {
            fill: #fff;
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-green);
            border-top-left-radius: 25;
            border-top-right-radius: 25;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .header-link05 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 600;
            text-decoration: none;
          }
          .header-dropdown4 {
            cursor: pointer;
            display: inline-block;
            position: relative;
          }
          .header-dropdown-toggle4 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle4:hover {
            fill: #fff;
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-green);
            border-top-left-radius: 25;
            border-top-right-radius: 25;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .header-link06 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 600;
            text-decoration: none;
          }
          .header-dropdown5 {
            cursor: pointer;
            display: inline-block;
            position: relative;
          }
          .header-dropdown-toggle5 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle5:hover {
            fill: #fff;
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-green);
            border-top-left-radius: 25;
            border-top-right-radius: 25;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .header-video-session {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 600;
            text-decoration: none;
          }
          .header-dropdown6 {
            cursor: pointer;
            display: inline-block;
            position: relative;
          }
          .header-dropdown-toggle6 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            border-top-right-radius: 0;
          }
          .header-dropdown-toggle6:hover {
            fill: #fff;
            color: var(--dl-color-gray-beige);
            border-radius: 22px;
            background-color: var(--dl-color-gray-green);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .header-link07 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 600;
            text-decoration: none;
          }
          .header-dropdown7 {
            cursor: pointer;
            display: inline-block;
            position: relative;
          }
          .header-dropdown-toggle7 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            border-top-right-radius: 0;
          }
          .header-dropdown-toggle7:hover {
            fill: #fff;
            color: var(--dl-color-gray-beige);
            border-radius: 22px;
            background-color: var(--dl-color-gray-green);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .header-link08 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 600;
            text-decoration: none;
          }
          .header-dropdown8 {
            cursor: pointer;
            display: inline-block;
            position: relative;
          }
          .header-dropdown-toggle8 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            border-top-right-radius: 0;
          }
          .header-dropdown-toggle8:hover {
            fill: #fff;
            color: var(--dl-color-gray-beige);
            border-radius: 22px;
            background-color: var(--dl-color-gray-green);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 25;
            border-bottom-right-radius: 25;
          }
          .header-fb {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }

          @media (max-width: 991px) {
            .header-header {
              width: 75%;
            }
            .header-image {
              height: 6.5rem;
            }
            .header-nav {
              align-items: stretch;
            }
            .header-btn-group {
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .header-link01 {
              font-size: 0.9rem;
              font-style: normal;
              text-align: center;
              font-weight: 700;
              margin-left: 0px;
              margin-right: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .header-text {
              display: none;
            }
            .header-icon {
              width: 18px;
              height: auto;
              display: flex;
            }
            .header-link02 {
              font-size: 0.9rem;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .header-dropdown-list {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .header-header {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: 0px;
            }
            .header-nav {
              display: none;
            }
            .header-btn-group {
              display: none;
              align-items: center;
            }
            .header-dropdown {
              display: inline-block;
              margin-bottom: 0px;
            }
            .header-dropdown-toggle {
              display: inline-flex;
              align-items: flex-end;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .header-text1 {
              font-size: 1rem;
              align-self: flex-start;
              font-style: normal;
              text-align: right;
              font-family: Raleway;
              font-weight: 700;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .header-dropdown-list {
              right: 0px;
              display: none;
              position: static;
              margin-right: var(--dl-space-space-twounits);
            }
            .header-dropdown-toggle1 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .header-dropdown-toggle2 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .header-dropdown-toggle3 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .header-dropdown-toggle4 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .header-dropdown-toggle5 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .header-dropdown-toggle6 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .header-link07 {
              font-size: 14px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 600;
              text-decoration: none;
            }
            .header-dropdown-toggle7 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .header-dropdown-toggle8 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .header-fb {
              fill: var(--dl-color-gray-black);
              width: 25px;
              height: 25px;
            }
          }
          @media (max-width: 479px) {
            .header-header {
              width: 85%;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .header-link01 {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .header-link02 {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .header-dropdown {
              align-self: center;
              margin-right: 0px;
            }
            .header-dropdown-toggle {
              align-items: flex-end;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: row;
              justify-content: flex-start;
            }
            .header-dropdown-list {
              left: 0%;
              right: 0px;
              bottom: 0px;
              margin: auto;
              display: none;
              position: static;
            }
            .header-fb {
              fill: var(--dl-color-gray-black);
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  rootClassName: '',
  image_alt1: 'image',
  button: 'VIDEO SESSION',
  image_src1: 'e9a463fc-bb16-4933-9072-aa17652ca74f',
  Login: 'VIDEO SESSION',
  CONTACT1: 'CONTACT',
  HOME: 'HOME',
  TEAM: 'TEAM',
  text1: 'MENU',
  image_src: '/adrian-byrd-counseling-primary-logo-medium-1500h1.png',
  Register: 'CONTACT',
  ABOUT: 'ABOUT',
  button1: 'CONTACT',
  CONTACT: 'CONTACT',
  VIDEO_SESSION: 'VIDEO SESSION',
  INFO: 'INFO',
  text: 'VIDEO SESSION',
  image_alt: 'logo',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  button: PropTypes.string,
  image_src1: PropTypes.string,
  Login: PropTypes.string,
  CONTACT1: PropTypes.string,
  HOME: PropTypes.string,
  TEAM: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  Register: PropTypes.string,
  ABOUT: PropTypes.string,
  button1: PropTypes.string,
  CONTACT: PropTypes.string,
  VIDEO_SESSION: PropTypes.string,
  INFO: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Header
