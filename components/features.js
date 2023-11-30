import React from 'react'

import PropTypes from 'prop-types'

const Features = (props) => {
  return (
    <>
      <div className="features-features">
        <h1 className="features-text">
          <span>FREQUENTLY ASKED QUESTIONS</span>
          <br></br>
        </h1>
        <div className="features-container">
          <div className="features-feature-card">
            <svg viewBox="0 0 1024 1024" className="features-icon">
              <path d="M896 256h-192v-128c0-35.2-28.8-64-64-64h-256c-35.2 0-64 28.8-64 64v128h-192c-70.4 0-128 57.6-128 128v512c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-512c0-70.4-57.6-128-128-128zM384 128h256v128h-256v-128zM768 704h-192v192h-128v-192h-192v-128h192v-192h128v192h192v128z"></path>
            </svg>
            <h2 className="features-text03">{props.heading}</h2>
            <div
              data-thq="thq-dropdown"
              className="features-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="features-dropdown-toggle"
              >
                <span className="features-text04">{props.text}</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="features-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="features-icon02">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="features-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="features-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="features-dropdown-toggle01"
                  >
                    <span className="features-text05">{props.text4}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="features-dropdown01 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="features-dropdown-toggle02"
                  >
                    <span className="features-text06">{props.text5}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="features-dropdown02 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="features-dropdown-toggle03"
                  >
                    <span className="features-text07">{props.text6}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="features-feature-card1">
            <svg viewBox="0 0 1024 1024" className="features-icon04">
              <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM428.075 398.165c7.808-22.229 23.851-39.168 43.605-48.64s42.965-11.392 65.195-3.541c19.541 6.869 34.944 20.053 44.8 36.651 7.808 13.099 12.16 28.373 12.203 44.245 0 6.613-1.664 13.184-4.992 19.797-3.413 6.827-8.661 13.867-15.701 20.907-30.251 30.251-78.123 46.592-78.123 46.592-22.357 7.467-34.432 31.616-26.965 53.973s31.616 34.432 53.973 26.965c0 0 65.877-21.589 111.488-67.2 11.904-11.904 23.253-26.197 31.701-43.093 8.533-17.067 13.995-36.608 13.995-58.411-0.171-31.189-8.704-61.312-24.192-87.424-19.755-33.195-50.773-59.819-89.813-73.557-44.459-15.616-91.093-11.733-130.432 7.125s-71.595 52.821-87.211 97.28c-7.851 22.229 3.84 46.592 26.069 54.4s46.592-3.883 54.4-26.069zM554.667 725.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
            </svg>
            <h2 className="features-text08">{props.heading1}</h2>
            <div
              data-thq="thq-dropdown"
              className="features-thq-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="features-dropdown-toggle04"
              >
                <span className="features-text09">{props.text1}</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="features-dropdown-arrow1"
                >
                  <svg viewBox="0 0 1024 1024" className="features-icon06">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="features-dropdown-list1"
              >
                <li
                  data-thq="thq-dropdown"
                  className="features-dropdown03 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="features-dropdown-toggle05"
                  >
                    <span className="features-text10">{props.text7}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="features-dropdown04 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="features-dropdown-toggle06"
                  >
                    <span className="features-text11">{props.text8}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="features-dropdown05 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="features-dropdown-toggle07"
                  >
                    <span className="features-text12">{props.text9}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="features-container1">
            <div className="features-feature-card2">
              <svg viewBox="0 0 1024 1024" className="features-icon08">
                <path d="M592 448h-16v-192c0-105.87-86.13-192-192-192h-128c-105.87 0-192 86.13-192 192v192h-16c-26.4 0-48 21.6-48 48v480c0 26.4 21.6 48 48 48h544c26.4 0 48-21.6 48-48v-480c0-26.4-21.6-48-48-48zM192 256c0-35.29 28.71-64 64-64h128c35.29 0 64 28.71 64 64v192h-256v-192z"></path>
              </svg>
              <h2 className="features-text13">{props.heading2}</h2>
              <div
                data-thq="thq-dropdown"
                className="features-thq-dropdown2 list-item"
              >
                <ul
                  data-thq="thq-dropdown-list"
                  className="features-dropdown-list2"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="features-dropdown06 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="features-dropdown-toggle08"
                    >
                      <span className="features-text14">{props.text10}</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="features-dropdown07 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="features-dropdown-toggle09"
                    >
                      <span className="features-text15">{props.text11}</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="features-dropdown08 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="features-dropdown-toggle10"
                    >
                      <span className="features-text16">{props.text12}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="features-thq-dropdown3 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="features-dropdown-toggle11"
                >
                  <span className="features-text17">{props.text2}</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="features-dropdown-arrow2"
                  >
                    <svg viewBox="0 0 1024 1024" className="features-icon10">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="features-dropdown-list3"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="features-dropdown09 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="features-dropdown-toggle12"
                    >
                      <span className="features-text18">{props.text13}</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="features-dropdown10 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="features-dropdown-toggle13"
                    >
                      <span className="features-text19">{props.text14}</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="features-dropdown11 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="features-dropdown-toggle14"
                    >
                      <span className="features-text20">{props.text15}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="features-container2">
            <div className="features-feature-card3">
              <svg viewBox="0 0 1024 1024" className="features-icon12">
                <path d="M1011.328 134.496c-110.752-83.928-281.184-134.034-455.91-134.034-216.12 0-392.226 75.456-483.16 207.020-42.708 61.79-66.33 134.958-70.208 217.474-3.454 73.474 8.884 154.726 36.684 242.146 94.874-284.384 359.82-507.102 665.266-507.102 0 0-285.826 75.232-465.524 308.192-0.112 0.138-2.494 3.090-6.614 8.698-36.080 48.278-67.538 103.162-91.078 165.328-39.87 94.83-76.784 224.948-76.784 381.782h128c0 0-19.43-122.222 14.36-262.79 55.89 7.556 105.858 11.306 150.852 11.306 117.678 0 201.37-25.46 263.388-80.124 55.568-48.978 86.198-114.786 118.624-184.456 49.524-106.408 105.654-227.010 268.654-320.152 9.33-5.332 15.362-14.992 16.056-25.716s-4.040-21.080-12.606-27.572z"></path>
              </svg>
              <h2 className="features-text21">{props.heading3}</h2>
              <div
                data-thq="thq-dropdown"
                className="features-thq-dropdown4 list-item"
              >
                <ul
                  data-thq="thq-dropdown-list"
                  className="features-dropdown-list4"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="features-dropdown12 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="features-dropdown-toggle15"
                    >
                      <span className="features-text22">{props.text16}</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="features-dropdown13 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="features-dropdown-toggle16"
                    >
                      <span className="features-text23">{props.text17}</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="features-dropdown14 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="features-dropdown-toggle17"
                    >
                      <span className="features-text24">{props.text18}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="features-thq-dropdown5 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="features-dropdown-toggle18"
                >
                  <span className="features-text25">{props.text3}</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="features-dropdown-arrow3"
                  >
                    <svg viewBox="0 0 1024 1024" className="features-icon14">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="features-dropdown-list5"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="features-dropdown15 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="features-dropdown-toggle19"
                    >
                      <span className="features-text26">{props.text19}</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="features-dropdown16 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="features-dropdown-toggle20"
                    >
                      <span className="features-text27">{props.text20}</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="features-dropdown17 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="features-dropdown-toggle21"
                    >
                      <span className="features-text28">{props.text21}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features-features {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .features-text {
            font-size: 3rem;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: 0px;
          }
          .features-container {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-unit);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .features-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: 32px;
            flex-direction: column;
          }
          .features-icon {
            width: 4em;
            height: auto;
            align-self: flex-start;
          }
          .features-text03 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .features-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .features-dropdown-toggle {
            fill: #595959;
            color: #000000;
            width: 100%;
            display: inline-flex;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-text04 {
            color: #000000;
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 700;
            margin-right: 4px;
            vertical-align: middle;
          }
          .features-dropdown-arrow {
            transition: 0.3s;
          }
          .features-icon02 {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .features-dropdown-list {
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
          .features-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle01 {
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
          .features-dropdown-toggle01:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text05 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-dropdown01 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle02 {
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
          .features-dropdown-toggle02:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text06 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-dropdown02 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle03 {
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
          .features-dropdown-toggle03:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text07 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-feature-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: 32px;
            flex-direction: column;
          }
          .features-icon04 {
            width: 4em;
            height: auto;
            align-self: flex-start;
          }
          .features-text08 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .features-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .features-dropdown-toggle04 {
            fill: #595959;
            color: #000000;
            width: 100%;
            display: inline-flex;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-text09 {
            color: #000000;
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 700;
            margin-right: 4px;
            vertical-align: middle;
          }
          .features-dropdown-arrow1 {
            transition: 0.3s;
          }
          .features-icon06 {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .features-dropdown-list1 {
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
          .features-dropdown03 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle05 {
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
          .features-dropdown-toggle05:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text10 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-dropdown04 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle06 {
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
          .features-dropdown-toggle06:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text11 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-dropdown05 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle07 {
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
          .features-dropdown-toggle07:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text12 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .features-feature-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            padding-bottom: 32px;
          }
          .features-icon08 {
            width: 4em;
            height: auto;
            align-self: flex-start;
          }
          .features-text13 {
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .features-thq-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            margin-top: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .features-dropdown-list2 {
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
          .features-dropdown06 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle08 {
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
          .features-dropdown-toggle08:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text14 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-dropdown07 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle09 {
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
          .features-dropdown-toggle09:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text15 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-dropdown08 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle10 {
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
          .features-dropdown-toggle10:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text16 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-thq-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .features-dropdown-toggle11 {
            fill: #595959;
            color: #000000;
            width: 100%;
            display: inline-flex;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-text17 {
            color: #000000;
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 700;
            margin-right: 4px;
            vertical-align: middle;
          }
          .features-dropdown-arrow2 {
            transition: 0.3s;
          }
          .features-icon10 {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .features-dropdown-list3 {
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
          .features-dropdown09 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle12 {
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
          .features-dropdown-toggle12:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text18 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-dropdown10 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle13 {
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
          .features-dropdown-toggle13:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text19 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-dropdown11 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle14 {
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
          .features-dropdown-toggle14:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text20 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .features-feature-card3 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            padding-bottom: 32px;
          }
          .features-icon12 {
            width: 4em;
            height: auto;
            align-self: flex-start;
          }
          .features-text21 {
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .features-thq-dropdown4 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            margin-top: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .features-dropdown-list4 {
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
          .features-dropdown12 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle15 {
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
          .features-dropdown-toggle15:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text22 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-dropdown13 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle16 {
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
          .features-dropdown-toggle16:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text23 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-dropdown14 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle17 {
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
          .features-dropdown-toggle17:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text24 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-thq-dropdown5 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .features-dropdown-toggle18 {
            fill: #595959;
            color: #000000;
            width: 100%;
            display: inline-flex;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-text25 {
            color: #000000;
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 700;
            margin-right: 4px;
            vertical-align: middle;
          }
          .features-dropdown-arrow3 {
            transition: 0.3s;
          }
          .features-icon14 {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .features-dropdown-list5 {
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
          .features-dropdown15 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle19 {
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
          .features-dropdown-toggle19:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text26 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-dropdown16 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle20 {
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
          .features-dropdown-toggle20:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text27 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .features-dropdown17 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .features-dropdown-toggle21 {
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
          .features-dropdown-toggle21:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .features-text28 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .features-text {
              text-align: center;
            }
            .features-container {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .features-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .features-text {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .features-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .features-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Features.defaultProps = {
  text5: 'Sub-menu Item',
  heading2: 'Is what we talk about confidential?',
  text14: 'Sub-menu Item',
  text2: 'READ ANSWER',
  text4: 'Sub-menu Item',
  text18: 'Sub-menu Item',
  text11: 'Sub-menu Item',
  heading: 'Can I just take medicine for my symptoms?',
  text6: 'Sub-menu Item',
  text16: 'Sub-menu Item',
  text19: 'Sub-menu Item',
  text15: 'Sub-menu Item',
  text21: 'Sub-menu Item',
  text17: 'Sub-menu Item',
  text20: 'Sub-menu Item',
  text12: 'Sub-menu Item',
  heading3: 'How can counseling help me?',
  text3: 'READ ANSWER',
  text9: 'Sub-menu Item',
  text13: 'Sub-menu Item',
  text1: 'READ ANSWER',
  text8: 'Sub-menu Item',
  text: 'READ ANSWER',
  heading1: 'What is counseling actually like?',
  text10: 'Sub-menu Item',
  text7: 'Sub-menu Item',
}

Features.propTypes = {
  text5: PropTypes.string,
  heading2: PropTypes.string,
  text14: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text18: PropTypes.string,
  text11: PropTypes.string,
  heading: PropTypes.string,
  text6: PropTypes.string,
  text16: PropTypes.string,
  text19: PropTypes.string,
  text15: PropTypes.string,
  text21: PropTypes.string,
  text17: PropTypes.string,
  text20: PropTypes.string,
  text12: PropTypes.string,
  heading3: PropTypes.string,
  text3: PropTypes.string,
  text9: PropTypes.string,
  text13: PropTypes.string,
  text1: PropTypes.string,
  text8: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
  text10: PropTypes.string,
  text7: PropTypes.string,
}

export default Features
