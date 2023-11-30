import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import FeatureCard11 from '../components/feature-card11'

const Info = (props) => {
  return (
    <>
      <div className="info-container">
        <Head>
          <title>Info - Adrian Byrd Counseling</title>
          <meta property="og:title" content="Info - Adrian Byrd Counseling" />
        </Head>
        <Header></Header>
        <div className="info-hero">
          <img
            alt="image"
            src="https://i.imgur.com/MvB6IJ3.jpg"
            className="info-image"
          />
          <div className="info-container01">
            <h1 className="info-text">RATES</h1>
            <span className="info-text001">
              <span className="info-text002">
                Therapy is a commitment of time, energy, and financial
                resources. If you have health insurance, it is important to
                verify your mental health benefits so you understand your
                coverage prior to your first appointment. Some insurance
                companies require precertification before the first appointment
                or they will not cover the cost of services.
              </span>
              <span className="info-text003">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="info-text004"></br>
              <span className="info-text005">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="info-text006">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="info-text007">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <h1 className="info-text008">CURRENT FEES</h1>
            <span className="info-text009">
              <span>-Initial Appointment (60 Minutes) $180</span>
              <br></br>
              <span>-60 Minute Therapy Session $160</span>
              <br></br>
              <span>-45 Minute Therapy Session $120</span>
              <br></br>
              <span>-30 Minute Therapy Session $80</span>
              <br></br>
              <br></br>
              <span>
                If I am a network provider for your insurance company, I honor
                the contracted rate and you will not be billed for the remaining
                amount. All contracted rates vary.
              </span>
            </span>
            <div className="info-btn-group">
              <Link href="/contact">
                <a className="info-link button">Get Started</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="info-testimonial">
          <div className="info-testimonial1">
            <h1 className="info-text020">AREAS OF EXPERTISE</h1>
            <h1 className="info-text021">
              <span>Trauma</span>
              <br></br>
              <span> PTSD</span>
              <br></br>
              <span>CPTSD</span>
              <br></br>
              <span>Depression</span>
              <br></br>
              <span>Anxiety Disorders</span>
              <br></br>
              <span>Grief Counseling</span>
              <br></br>
              <span>LGBTQIA+</span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h1>
            <div className="info-testimonial2">
              <div className="info-container02">
                <div className="info-container03"></div>
              </div>
              <div className="info-container04">
                <div className="info-container05"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="info-insurance-providers">
          <h1 className="info-text037">
            <span>Accepting most</span>
            <br></br>
            <span>major insurance providers.</span>
          </h1>
          <div className="info-container06">
            <FeatureCard11
              image_src="https://i.imgur.com/owjn0kr.jpg"
              rootClassName="rootClassName11"
            ></FeatureCard11>
            <FeatureCard11
              image_src="https://i.imgur.com/7PNabqZ.jpg"
              rootClassName="rootClassName12"
            ></FeatureCard11>
            <FeatureCard11
              image_src="https://i.imgur.com/qPd5qac.jpg"
              rootClassName="rootClassName13"
            ></FeatureCard11>
            <FeatureCard11
              image_src="https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/99/a9/20/99a920e5-4ba4-82ca-cec8-96e99da624b6/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220.png/1200x630wa.png"
              rootClassName="rootClassName14"
            ></FeatureCard11>
            <FeatureCard11
              image_src="/download-removebg-preview-200h.png"
              rootClassName="rootClassName18"
            ></FeatureCard11>
            <FeatureCard11
              image_src="https://i.imgur.com/K7ai5fL.png"
              rootClassName="rootClassName15"
            ></FeatureCard11>
            <FeatureCard11
              image_src="https://www.healthlink.com/assets/images/header_logo.png"
              rootClassName="rootClassName16"
            ></FeatureCard11>
            <FeatureCard11
              image_src="https://i.imgur.com/5PJmmB9.png"
              rootClassName="rootClassName17"
            ></FeatureCard11>
          </div>
          <div className="info-container07">
            <FeatureCard11
              image_src="https://consociatehealth.com/wp-content/uploads/2018/10/LOGOnew-1.png"
              rootClassName="rootClassName19"
            ></FeatureCard11>
            <a
              href="mailto:jami@adrianbyrdcounseling.com?subject=Insurance Question(s)"
              className="info-link1 button"
            >
              questions?
            </a>
          </div>
        </div>
        <h1 className="info-text041">DOCUMENTS</h1>
        <div className="info-container08">
          <div className="info-pricing-card">
            <span className="info-text042">
              <span>Privacy</span>
              <br></br>
              <span>Practices Policy</span>
            </span>
            <a
              href="https://docs.adrianbyrdcounseling.com/PDF.AB_.PPP_.Version.1.0-2.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="info-link2 button"
            >
              view document
            </a>
          </div>
          <div className="info-pricing-card1">
            <span className="info-text046">
              <span>Terms</span>
              <br></br>
              <span>And Conditions</span>
            </span>
            <a
              href="https://www.termsfeed.com/live/037c30d7-e5f1-43d7-a1ac-50f4075456c2"
              target="_blank"
              rel="noreferrer noopener"
              className="info-link3 button"
            >
              view document
            </a>
          </div>
          <div className="info-pricing-card2">
            <span className="info-text050">
              <span>Therapy</span>
              <br></br>
              <span>Practices Policy</span>
            </span>
            <a
              href="https://docs.adrianbyrdcounseling.com/PDF.AB_.TPP_.Version.1.0.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="info-link4 button"
            >
              view document
            </a>
          </div>
        </div>
        <div className="info-features">
          <h1 className="info-text054">
            <span>FAQ</span>
            <br></br>
          </h1>
        </div>
        <div className="info-container09">
          <div className="info-container10">
            <div className="info-container11">
              <div className="info-feature-card">
                <div className="info-container12">
                  <svg viewBox="0 0 1024 1024" className="info-icon">
                    <path d="M896 256h-192v-128c0-35.2-28.8-64-64-64h-256c-35.2 0-64 28.8-64 64v128h-192c-70.4 0-128 57.6-128 128v512c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-512c0-70.4-57.6-128-128-128zM384 128h256v128h-256v-128zM768 704h-192v192h-128v-192h-192v-128h192v-192h128v192h192v128z"></path>
                  </svg>
                </div>
                <h2 className="info-text057">
                  Can I just take medicine for my symptoms?
                </h2>
                <div
                  data-thq="thq-dropdown"
                  className="info-thq-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="info-dropdown-toggle"
                  >
                    <span className="info-text058">READ ANSWER</span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="info-dropdown-arrow"
                    >
                      <svg viewBox="0 0 1024 1024" className="info-icon02">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="info-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="info-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="info-dropdown-toggle01"
                      >
                        <span className="info-text059">
                          <span>
                            There is well-established research that has proven
                            that long-term mental health issues, trauma,
                            emotion, and pain problems cannot be solved with
                            just medication alone. Medication addresses the
                            symptoms, but counseling addresses the root of the
                            issue, finds the cause of your anguish, and helps
                            correct negative behavior problems that curve our
                            progress. For the best results, an integrative
                            approach to wellness and healing is the way to go.
                            However, depending on the individual your counselor
                            may work with your medical doctor to find a combo of
                            medication + treatment. It is all about what the
                            best course of action is for you.
                          </span>
                          <br className="info-text061"></br>
                          <br></br>
                          <br className="info-text063"></br>
                          <br></br>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="info-feature-card1">
                <div className="info-container13">
                  <svg viewBox="0 0 1024 1024" className="info-icon04">
                    <path d="M1011.328 134.496c-110.752-83.928-281.184-134.034-455.91-134.034-216.12 0-392.226 75.456-483.16 207.020-42.708 61.79-66.33 134.958-70.208 217.474-3.454 73.474 8.884 154.726 36.684 242.146 94.874-284.384 359.82-507.102 665.266-507.102 0 0-285.826 75.232-465.524 308.192-0.112 0.138-2.494 3.090-6.614 8.698-36.080 48.278-67.538 103.162-91.078 165.328-39.87 94.83-76.784 224.948-76.784 381.782h128c0 0-19.43-122.222 14.36-262.79 55.89 7.556 105.858 11.306 150.852 11.306 117.678 0 201.37-25.46 263.388-80.124 55.568-48.978 86.198-114.786 118.624-184.456 49.524-106.408 105.654-227.010 268.654-320.152 9.33-5.332 15.362-14.992 16.056-25.716s-4.040-21.080-12.606-27.572z"></path>
                  </svg>
                </div>
                <h2 className="info-text065">How can counseling help me?</h2>
                <div
                  data-thq="thq-dropdown"
                  className="info-thq-dropdown1 list-item"
                >
                  <ul
                    data-thq="thq-dropdown-list"
                    className="info-dropdown-list1"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="info-dropdown01 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="info-dropdown-toggle02"
                      >
                        <span className="info-text066">
                          Everyone that goes to counseling goes for different
                          reasons, so your experience will be unique to you!
                          Generally speaking, you can expect to talk about the
                          things bothering you in your life, talk about your
                          past in relation to why you’re in therapy, and also
                          you will be discussing your progress. Depending on
                          what you are needing counseling can be long or short
                          term. It can be to help you get through a specific
                          issue or to even help you change long-standing
                          patterns.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  data-thq="thq-dropdown"
                  className="info-thq-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="info-dropdown-toggle03"
                  >
                    <span className="info-text067">READ ANSWER</span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="info-dropdown-arrow1"
                    >
                      <svg viewBox="0 0 1024 1024" className="info-icon06">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="info-dropdown-list2"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="info-dropdown02 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="info-dropdown-toggle04"
                      >
                        <span className="info-text068">
                          <span>
                            There are so many ways that you can benefit by
                            engaging in counseling. Whether you need to learn
                            new ways to cope, are looking to manage stress, get
                            support, work through issues within your
                            relationship, learn how to deal with unresolved
                            trauma or just need some guidance with the daily
                            struggles that life brings. The possibilities for
                            personal growth are endless. Whatever the problem,
                            therapy can help you find a solution that works for
                            you.
                          </span>
                          <br className="info-text070"></br>
                          <br></br>
                          <br className="info-text072"></br>
                          <br></br>
                          <br className="info-text074"></br>
                          <br></br>
                          <br className="info-text076"></br>
                          <br></br>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info-container14">
          <div className="info-container15">
            <div className="info-container16">
              <div className="info-feature-card2">
                <svg viewBox="0 0 1024 1024" className="info-icon08">
                  <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM428.075 398.165c7.808-22.229 23.851-39.168 43.605-48.64s42.965-11.392 65.195-3.541c19.541 6.869 34.944 20.053 44.8 36.651 7.808 13.099 12.16 28.373 12.203 44.245 0 6.613-1.664 13.184-4.992 19.797-3.413 6.827-8.661 13.867-15.701 20.907-30.251 30.251-78.123 46.592-78.123 46.592-22.357 7.467-34.432 31.616-26.965 53.973s31.616 34.432 53.973 26.965c0 0 65.877-21.589 111.488-67.2 11.904-11.904 23.253-26.197 31.701-43.093 8.533-17.067 13.995-36.608 13.995-58.411-0.171-31.189-8.704-61.312-24.192-87.424-19.755-33.195-50.773-59.819-89.813-73.557-44.459-15.616-91.093-11.733-130.432 7.125s-71.595 52.821-87.211 97.28c-7.851 22.229 3.84 46.592 26.069 54.4s46.592-3.883 54.4-26.069zM554.667 725.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
                </svg>
                <h2 className="info-text078">
                  What is counseling actually like?
                </h2>
                <div
                  data-thq="thq-dropdown"
                  className="info-thq-dropdown3 list-item"
                >
                  <ul
                    data-thq="thq-dropdown-list"
                    className="info-dropdown-list3"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="info-dropdown03 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="info-dropdown-toggle05"
                      >
                        <span className="info-text079">
                          Everyone that goes to counseling goes for different
                          reasons, so your experience will be unique to you!
                          Generally speaking, you can expect to talk about the
                          things bothering you in your life, talk about your
                          past in relation to why you’re in therapy, and also
                          you will be discussing your progress. Depending on
                          what you are needing counseling can be long or short
                          term. It can be to help you get through a specific
                          issue or to even help you change long-standing
                          patterns.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  data-thq="thq-dropdown"
                  className="info-thq-dropdown4 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="info-dropdown-toggle06"
                  >
                    <span className="info-text080">READ ANSWER</span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="info-dropdown-arrow2"
                    >
                      <svg viewBox="0 0 1024 1024" className="info-icon10">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="info-dropdown-list4"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="info-dropdown04 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="info-dropdown-toggle07"
                      >
                        <span className="info-text081">
                          <span>
                            Everyone that goes to counseling goes for different
                            reasons, so your experience will be unique to you!
                            Generally speaking, you can expect to talk about the
                            things bothering you in your life, talk about your
                            past in relation to why you’re in therapy, and also
                            you will be discussing your progress. Depending on
                            what you are needing counseling can be long or short
                            term. It can be to help you get through a specific
                            issue or to even help you change long-standing
                            patterns.
                          </span>
                          <br className="info-text083"></br>
                          <br></br>
                          <br className="info-text085"></br>
                          <br></br>
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="info-dropdown05 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="info-dropdown-toggle08"
                      >
                        <span className="info-text087">
                          <span>
                            Please note that you are guaranteed better results
                            if you are actively participating in the process.
                            For success in your personal development, you will
                            ideally need to be integrating what you learn during
                            your sessions into your everyday life. Your
                            counselor may suggest things you can do outside of
                            the session that will support the process. You have
                            to be open to change and new or different
                            perspectives.
                          </span>
                          <br className="info-text089"></br>
                          <br></br>
                          <br className="info-text091"></br>
                          <br></br>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="info-feature-card3">
                <div className="info-container17">
                  <svg viewBox="0 0 1024 1024" className="info-icon12">
                    <path d="M644 342v-86q0-54-39-93t-93-39-93 39-39 93v86h264zM512 726q34 0 60-26t26-60-26-60-60-26-60 26-26 60 26 60 60 26zM768 342q34 0 60 25t26 59v428q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59v-428q0-34 26-59t60-25h42v-86q0-88 63-151t151-63 151 63 63 151v86h42z"></path>
                  </svg>
                </div>
                <h2 className="info-text093">
                  Is what we talk about confidential?
                </h2>
                <div
                  data-thq="thq-dropdown"
                  className="info-thq-dropdown5 list-item"
                >
                  <ul
                    data-thq="thq-dropdown-list"
                    className="info-dropdown-list5"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="info-dropdown06 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="info-dropdown-toggle09"
                      >
                        <span className="info-text094">
                          Everyone that goes to counseling goes for different
                          reasons, so your experience will be unique to you!
                          Generally speaking, you can expect to talk about the
                          things bothering you in your life, talk about your
                          past in relation to why you’re in therapy, and also
                          you will be discussing your progress. Depending on
                          what you are needing counseling can be long or short
                          term. It can be to help you get through a specific
                          issue or to even help you change long-standing
                          patterns.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  data-thq="thq-dropdown"
                  className="info-thq-dropdown6 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="info-dropdown-toggle10"
                  >
                    <span className="info-text095">READ ANSWER</span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="info-dropdown-arrow3"
                    >
                      <svg viewBox="0 0 1024 1024" className="info-icon14">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="info-dropdown-list6"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="info-dropdown07 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="info-dropdown-toggle11"
                      >
                        <span className="info-text096">
                          <span>
                            Confidentiality is a very very important part of the
                            client-counselor relationship. For counseling to be
                            successful for you, there needs to be a high degree
                            of trust. You will be provided a copy of our
                            confidential disclosure agreement within our privacy
                            policy. This is called “Informed Consent”.
                          </span>
                          <br className="info-text098"></br>
                          <br className="info-text099"></br>
                          <br className="info-text100"></br>
                          <br></br>
                          <br className="info-text102"></br>
                          <br></br>
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="info-dropdown08 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="info-dropdown-toggle12"
                      >
                        <span className="info-text104">
                          <span>
                            That being said, you may want your counselor to
                            share your info with your other healthcare
                            professionals. For example, your Physician,
                            Nutritionist, Attorney, etc. To do this, your
                            counselor will have to obtain your written
                            permission.
                          </span>
                          <br className="info-text106"></br>
                          <br></br>
                          <br className="info-text108"></br>
                          <br></br>
                        </span>
                      </div>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="info-dropdown-toggle13"
                      >
                        <span className="info-text110">
                          <span>
                            State law and professional ethics require counselors
                            to be sworn to confidentiality except in the
                            following situations:
                          </span>
                          <br className="info-text112"></br>
                          <br></br>
                          <br className="info-text114"></br>
                          <br></br>
                        </span>
                      </div>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="info-dropdown-toggle14"
                      >
                        <ul className="info-ul list">
                          <li className="info-li list-item">
                            <span className="info-text116">
                              1. If a counselor has reason to suspect their
                              client is in serious danger of harming themself or
                              others, or has threatened to do harm to another
                              person.
                            </span>
                          </li>
                          <li className="list-item">
                            <span className="info-text117">
                              <span>
                                2. If a counselor suspects past or present abuse
                                or neglect of children, elders, or adults. It
                                must be reported to the proper authorities,
                                including Child Protection Services and local
                                law enforcement.
                              </span>
                              <br></br>
                              <br></br>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="info-dropdown09 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="info-dropdown-toggle15"
                      >
                        <span className="info-text121">
                          <span>
                            That being said, you may want your counselor to
                            share your info with your other healthcare
                            professionals. For example, your Physician,
                            Nutritionist, Attorney, etc. To do this, your
                            counselor will have to obtain your written
                            permission.
                          </span>
                          <br className="info-text123"></br>
                          <br></br>
                          <br className="info-text125"></br>
                          <br></br>
                        </span>
                      </div>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="info-dropdown-toggle16"
                      >
                        <span className="info-text127">
                          <span>
                            State law and professional ethics require counselors
                            to be sworn to confidentiality except in the
                            following situations:
                          </span>
                          <br className="info-text129"></br>
                          <br></br>
                          <br className="info-text131"></br>
                          <br></br>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="info-footer">
          <div className="info-separator"></div>
          <Link href="/info">
            <a className="info-link5">
              <svg viewBox="0 0 1024 1024" className="info-icon16">
                <path d="M243.499 542.165l225.835-225.835v494.336c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-494.336l225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-298.667-298.667c-4.096-4.096-8.789-7.168-13.824-9.259-5.205-2.176-10.795-3.243-16.341-3.243-10.923 0-21.845 4.181-30.165 12.501l-298.667 298.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </a>
          </Link>
          <div className="info-container18">
            <a href="tel:(217) 358-4548" className="info-link6">
              (217) 358-4548
            </a>
            <div className="info-icon-group">
              <img
                alt="image"
                src="https://personcenteredtech.com/wp-content/uploads/2020/09/PT_articlesize.jpg"
                className="info-image1"
              />
              <a
                href="https://www.facebook.com/adrianbyrdcounseling/"
                target="_blank"
                rel="noreferrer noopener"
                className="info-link7"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="info-icon18"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="info-container19">
            <a
              href="mailto:adrian@adrianbyrdcounseling.com?subject="
              className="info-link8"
            >
              <span className="info-text133">
                adrian@adrianbyrdcounseling.com
              </span>
              <span></span>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .info-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .info-hero {
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
          .info-image {
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
          .info-container01 {
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .info-text {
            font-size: 1.5em;
            font-family: Raleway;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .info-text001 {
            color: var(--dl-color-gray-black);
            font-size: 1.3rem;
            align-self: center;
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .info-text005 {
            font-style: normal;
          }
          .info-text006 {
            font-style: normal;
          }
          .info-text007 {
            font-style: normal;
          }
          .info-text008 {
            font-size: 1.5em;
            font-family: Raleway;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .info-text009 {
            font-size: 1.3rem;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Raleway;
            font-weight: 500;
          }
          .info-btn-group {
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .info-link {
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
          .info-link:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .info-testimonial {
            width: 95%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 0px;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .info-testimonial1 {
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
            margin-bottom: TwoUnit0s;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-grey);
            border-top-width: 2.5px;
            border-left-width: 2.5px;
            border-right-width: 2.5px;
            border-bottom-width: 2.5px;
          }
          .info-text020 {
            color: var(--dl-color-gray-beige);
            font-size: 2.5rem;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Raleway;
            border-color: var(--dl-color-gray-beige);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .info-text021 {
            color: var(--dl-color-gray-beige);
            font-size: 1.2em;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 500;
            line-height: 1.8;
          }
          .info-testimonial2 {
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .info-container02 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-container03 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .info-container04 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-container05 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-end;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .info-insurance-providers {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .info-text037 {
            font-size: 3rem;
            align-self: flex-start;
            text-align: left;
            font-family: Raleway;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .info-container06 {
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            align-self: stretch;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .info-container07 {
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            align-self: flex-start;
            align-items: flex-start;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .info-link1 {
            font-size: 20px;
            box-shadow: rgb(167, 162, 162) 5px 5px 10px 0px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
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
          .info-link1:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .info-text041 {
            font-size: 3rem;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .info-container08 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            background-size: cover;
            justify-content: center;
          }
          .info-pricing-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #9f9e9e;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            border-color: var(--dl-color-gray-black);
            border-width: 2.5px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 25px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-beige);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .info-pricing-card:hover {
            transform: scale(1.02);
          }
          .info-text042 {
            font-size: 1.8rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 800;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .info-link2 {
            font-size: 20px;
            align-self: center;
            box-shadow: rgb(167, 162, 162) 5px 5px 10px 0px;
            font-style: normal;
            transition: 0.3s;
            font-family: Raleway;
            font-weight: 600;
            padding-top: var(--dl-space-space-unit);
            border-width: 2.5px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: rgb(247, 213, 139);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .info-link2:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .info-pricing-card1 {
            width: 100%;
            height: 286px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #9f9e9e;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-twounits);
            border-color: var(--dl-color-gray-black);
            border-width: 2.5px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 25px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-beige);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .info-pricing-card1:hover {
            transform: scale(1.02);
          }
          .info-text046 {
            font-size: 1.8rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 800;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .info-link3 {
            font-size: 20px;
            align-self: center;
            box-shadow: rgb(167, 162, 162) 5px 5px 10px 0px;
            font-style: normal;
            transition: 0.3s;
            font-family: Raleway;
            font-weight: 600;
            padding-top: var(--dl-space-space-unit);
            border-width: 2.5px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: rgb(247, 213, 139);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .info-link3:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .info-pricing-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #9f9e9e;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            padding-top: var(--dl-space-space-twounits);
            border-color: var(--dl-color-gray-black);
            border-width: 2.5px;
            margin-right: 0px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 25px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-beige);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .info-pricing-card2:hover {
            transform: scale(1.02);
          }
          .info-text050 {
            font-size: 1.8rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 800;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .info-link4 {
            font-size: 20px;
            align-self: center;
            box-shadow: rgb(167, 162, 162) 5px 5px 10px 0px;
            font-style: normal;
            transition: 0.3s;
            font-family: Raleway;
            font-weight: 600;
            padding-top: var(--dl-space-space-unit);
            border-width: 2.5px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: rgb(247, 213, 139);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .info-link4:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .info-features {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .info-text054 {
            font-size: 2.2rem;
            font-family: Raleway;
          }
          .info-container09 {
            width: 95%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .info-container10 {
            flex: 2;
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .info-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .info-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: 32px;
            flex-direction: column;
            justify-content: center;
          }
          .info-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .info-icon {
            width: 4em;
            height: auto;
            align-self: flex-start;
          }
          .info-text057 {
            color: var(--dl-color-gray-black);
            font-size: 1.7rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .info-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .info-dropdown-toggle {
            fill: #595959;
            color: #000000;
            width: 100%;
            display: inline-flex;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .info-text058 {
            color: #000000;
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 700;
            margin-right: 4px;
            vertical-align: middle;
          }
          .info-dropdown-arrow {
            transition: 0.3s;
          }
          .info-icon02 {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .info-dropdown-list {
            left: 0%;
            width: auto;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1.5px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-yellow);
            list-style-position: inside;
          }
          .info-dropdown {
            width: 500px;
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .info-dropdown-toggle01 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            background-color: var(--dl-color-gray-yellow);
          }
          .info-dropdown-toggle01:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-gray-grey);
          }
          .info-text059 {
            width: auto;
            cursor: pointer;
            display: flex;
            font-size: 16px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text061 {
            font-style: normal;
            font-weight: 500;
          }
          .info-text063 {
            font-style: normal;
            font-weight: 500;
          }
          .info-feature-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            padding-bottom: 32px;
          }
          .info-container13 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .info-icon04 {
            width: 4em;
            height: auto;
            align-self: flex-start;
          }
          .info-text065 {
            color: rgb(0, 0, 0);
            font-size: 1.7rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .info-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .info-dropdown-list1 {
            left: 0%;
            width: 100%;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1.5px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-yellow);
            list-style-position: inside;
          }
          .info-dropdown01 {
            width: auto;
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .info-dropdown-toggle02 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            background-color: var(--dl-color-gray-yellow);
          }
          .info-dropdown-toggle02:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-gray-grey);
          }
          .info-text066 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .info-thq-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .info-dropdown-toggle03 {
            fill: #595959;
            color: #000000;
            width: 100%;
            display: inline-flex;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .info-text067 {
            color: #000000;
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 700;
            margin-right: 4px;
            vertical-align: middle;
          }
          .info-dropdown-arrow1 {
            transition: 0.3s;
          }
          .info-icon06 {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .info-dropdown-list2 {
            left: 0%;
            width: auto;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1.5px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-yellow);
            list-style-position: inside;
          }
          .info-dropdown02 {
            width: 500px;
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .info-dropdown-toggle04 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            background-color: var(--dl-color-gray-yellow);
          }
          .info-dropdown-toggle04:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-gray-grey);
          }
          .info-text068 {
            width: auto;
            cursor: pointer;
            display: flex;
            font-size: 16px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text070 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text072 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text074 {
            font-style: normal;
            font-weight: 500;
          }
          .info-text076 {
            font-style: normal;
            font-weight: 500;
          }
          .info-container14 {
            width: 95%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .info-container15 {
            flex: 2;
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .info-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .info-feature-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: 32px;
            flex-direction: column;
            justify-content: center;
          }
          .info-icon08 {
            width: 4em;
            height: auto;
            align-self: center;
          }
          .info-text078 {
            color: var(--dl-color-gray-black);
            font-size: 1.7rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .info-thq-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .info-dropdown-list3 {
            left: 0%;
            width: 100%;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1.5px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-yellow);
            list-style-position: inside;
          }
          .info-dropdown03 {
            width: auto;
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .info-dropdown-toggle05 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            background-color: var(--dl-color-gray-yellow);
          }
          .info-dropdown-toggle05:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-gray-grey);
          }
          .info-text079 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .info-thq-dropdown4 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .info-dropdown-toggle06 {
            fill: #595959;
            color: #000000;
            width: 100%;
            display: inline-flex;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .info-text080 {
            color: #000000;
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 700;
            margin-right: 4px;
            vertical-align: middle;
          }
          .info-dropdown-arrow2 {
            transition: 0.3s;
          }
          .info-icon10 {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .info-dropdown-list4 {
            left: 0%;
            width: auto;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1.5px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-yellow);
            list-style-position: inside;
          }
          .info-dropdown04 {
            width: 500px;
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .info-dropdown-toggle07 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            background-color: var(--dl-color-gray-yellow);
          }
          .info-dropdown-toggle07:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-gray-grey);
          }
          .info-text081 {
            width: auto;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text083 {
            font-size: 14px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text085 {
            font-size: 14px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-dropdown05 {
            width: 500px;
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .info-dropdown-toggle08 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            background-color: var(--dl-color-gray-yellow);
          }
          .info-dropdown-toggle08:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-gray-grey);
          }
          .info-text087 {
            width: auto;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text089 {
            font-size: 14px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text091 {
            font-size: 14px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-feature-card3 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            padding-bottom: 32px;
          }
          .info-container17 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .info-icon12 {
            width: 4em;
            height: auto;
          }
          .info-text093 {
            color: #000000;
            font-size: 1.7rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: Raleway;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .info-thq-dropdown5 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .info-dropdown-list5 {
            left: 0%;
            width: 100%;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1.5px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-yellow);
            list-style-position: inside;
          }
          .info-dropdown06 {
            width: auto;
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .info-dropdown-toggle09 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            background-color: var(--dl-color-gray-yellow);
          }
          .info-dropdown-toggle09:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-gray-grey);
          }
          .info-text094 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .info-thq-dropdown6 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            border-radius: 25px;
          }
          .info-dropdown-toggle10 {
            fill: #595959;
            color: #000000;
            width: 100%;
            display: inline-flex;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .info-text095 {
            color: #000000;
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: Raleway;
            font-weight: 700;
            margin-right: 4px;
            vertical-align: middle;
          }
          .info-dropdown-arrow3 {
            transition: 0.3s;
          }
          .info-icon14 {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .info-dropdown-list6 {
            left: 0%;
            width: auto;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 1.5px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-yellow);
            list-style-position: inside;
          }
          .info-dropdown07 {
            width: 500px;
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .info-dropdown-toggle11 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 0px;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-yellow);
          }
          .info-dropdown-toggle11:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-gray-grey);
          }
          .info-text096 {
            width: auto;
            cursor: pointer;
            display: flex;
            font-size: 16px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text098 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text099 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text100 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text102 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-dropdown08 {
            width: 500px;
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .info-dropdown-toggle12 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 0px;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-yellow);
          }
          .info-dropdown-toggle12:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-gray-grey);
          }
          .info-text104 {
            width: auto;
            cursor: pointer;
            display: flex;
            font-size: 16px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text106 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text108 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-dropdown-toggle13 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 0px;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-yellow);
          }
          .info-dropdown-toggle13:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-gray-grey);
          }
          .info-text110 {
            width: auto;
            cursor: pointer;
            display: flex;
            font-size: 16px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text112 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text114 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-dropdown-toggle14 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            justify-content: flex-start;
            background-color: var(--dl-color-gray-yellow);
          }
          .info-dropdown-toggle14:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-gray-grey);
          }
          .info-ul {
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 0px;
          }
          .info-li {
            font-family: Raleway;
          }
          .info-text116 {
            font-style: normal;
            font-weight: 500;
          }
          .info-text117 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-dropdown09 {
            width: 500px;
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .info-dropdown-toggle15 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 0px;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-yellow);
          }
          .info-dropdown-toggle15:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-gray-grey);
          }
          .info-text121 {
            width: auto;
            cursor: pointer;
            display: flex;
            font-size: 16px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text123 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text125 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-dropdown-toggle16 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 0px;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-yellow);
          }
          .info-dropdown-toggle16:hover {
            fill: #fff;
            color: #fff;
            background-color: var(--dl-color-gray-grey);
          }
          .info-text127 {
            width: auto;
            cursor: pointer;
            display: flex;
            font-size: 16px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text129 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-text131 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
          }
          .info-footer {
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
          .info-separator {
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
          .info-link5 {
            display: contents;
          }
          .info-icon16 {
            width: 34px;
            height: 34px;
            align-self: flex-start;
            text-decoration: none;
          }
          .info-container18 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .info-link6 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            text-decoration: none;
          }
          .info-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .info-image1 {
            width: 45px;
            display: none;
            object-fit: cover;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius4);
          }
          .info-link7 {
            display: contents;
          }
          .info-icon18 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            text-decoration: none;
          }
          .info-container19 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .info-link8 {
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .info-hero {
              flex-direction: column;
            }
            .info-image {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .info-container01 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .info-text001 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              text-align: center;
              font-family: Raleway;
              font-weight: 500;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .info-text005 {
              font-style: normal;
            }
            .info-text006 {
              font-style: normal;
            }
            .info-text007 {
              font-style: normal;
            }
            .info-text009 {
              text-align: center;
            }
            .info-btn-group {
              align-self: center;
            }
            .info-testimonial {
              width: 95%;
              margin-top: var(--dl-space-space-fourunits);
            }
            .info-testimonial1 {
              width: 95%;
              margin-top: var(--dl-space-space-fourunits);
            }
            .info-text021 {
              font-size: 1.5em;
            }
            .info-text037 {
              text-align: left;
            }
            .info-container06 {
              grid-template-columns: 1fr 1fr;
            }
            .info-container07 {
              position: relative;
              grid-template-columns: 1fr 1fr;
            }
            .info-text041 {
              font-size: 2.5rem;
              text-align: center;
              font-family: Raleway;
            }
            .info-pricing-card {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 100%;
              align-items: center;
            }
            .info-text042 {
              font-size: 1.2rem;
            }
            .info-link2 {
              font-size: 15px;
              box-shadow: rgb(167, 162, 162) 5px 5px 10px 0px;
              font-style: normal;
              text-align: center;
              font-family: Raleway;
              font-weight: 600;
              text-transform: uppercase;
              background-color: rgb(247, 213, 139);
            }
            .info-pricing-card1 {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 100%;
              align-items: center;
            }
            .info-text046 {
              font-size: 1.2rem;
            }
            .info-link3 {
              font-size: 15px;
              box-shadow: rgb(167, 162, 162) 5px 5px 10px 0px;
              font-style: normal;
              text-align: center;
              font-family: Raleway;
              font-weight: 600;
              text-transform: uppercase;
              background-color: rgb(247, 213, 139);
            }
            .info-pricing-card2 {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 100%;
              align-items: center;
            }
            .info-text050 {
              font-size: 1.2rem;
            }
            .info-link4 {
              font-size: 15px;
              box-shadow: rgb(167, 162, 162) 5px 5px 10px 0px;
              font-style: normal;
              text-align: center;
              font-family: Raleway;
              font-weight: 600;
              text-transform: uppercase;
              background-color: rgb(247, 213, 139);
            }
            .info-features {
              align-items: flex-start;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: 0px;
            }
            .info-text054 {
              font-size: 2.5rem;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
            }
            .info-container09 {
              align-items: center;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
            }
            .info-container10 {
              width: 100%;
            }
            .info-container12 {
              align-self: flex-start;
            }
            .info-icon {
              width: 3em;
            }
            .info-text057 {
              align-self: flex-start;
            }
            .info-thq-dropdown {
              align-self: flex-start;
            }
            .info-container13 {
              align-self: flex-start;
            }
            .info-icon04 {
              width: 3em;
            }
            .info-text065 {
              align-self: flex-start;
            }
            .info-thq-dropdown1 {
              align-self: flex-start;
            }
            .info-thq-dropdown2 {
              align-self: flex-start;
            }
            .info-container14 {
              align-items: center;
              flex-direction: column;
            }
            .info-container15 {
              width: 100%;
            }
            .info-icon08 {
              width: 3em;
              align-self: flex-start;
            }
            .info-text078 {
              align-self: flex-start;
            }
            .info-thq-dropdown3 {
              align-self: flex-start;
            }
            .info-thq-dropdown4 {
              align-self: flex-start;
            }
            .info-container17 {
              align-self: flex-start;
            }
            .info-icon12 {
              width: 3em;
            }
            .info-text093 {
              align-self: flex-start;
            }
            .info-thq-dropdown5 {
              align-self: flex-start;
            }
            .info-thq-dropdown6 {
              align-self: flex-start;
            }
          }
          @media (max-width: 767px) {
            .info-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .info-image {
              width: 50%;
            }
            .info-text001 {
              color: var(--dl-color-gray-black);
              font-size: 1.3rem;
              font-family: Raleway;
              font-weight: 500;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .info-text002 {
              font-size: 1rem;
            }
            .info-text003 {
              font-size: 1.2rem;
              font-weight: 500;
            }
            .info-text004 {
              font-style: normal;
              font-weight: 500;
            }
            .info-text005 {
              font-style: normal;
              font-weight: 500;
            }
            .info-text006 {
              font-style: normal;
              font-weight: 500;
            }
            .info-text007 {
              font-style: normal;
              font-weight: 500;
            }
            .info-testimonial {
              width: 90%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .info-testimonial1 {
              width: 90%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .info-insurance-providers {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .info-text037 {
              font-size: 2.2rem;
            }
            .info-container06 {
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
            .info-container07 {
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
            .info-text041 {
              text-align: center;
            }
            .info-container08 {
              flex-flow: column;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .info-pricing-card {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .info-pricing-card1 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .info-pricing-card2 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .info-features {
              align-self: center;
              padding-left: var(--dl-space-space-fiveunits);
              padding-right: var(--dl-space-space-fiveunits);
            }
            .info-text054 {
              text-align: left;
            }
            .info-container09 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .info-container10 {
              flex-direction: column;
            }
            .info-dropdown {
              width: 400px;
            }
            .info-container14 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .info-container15 {
              flex-direction: column;
            }
            .info-dropdown04 {
              width: 400px;
            }
            .info-dropdown05 {
              width: 400px;
            }
            .info-dropdown07 {
              width: 400px;
            }
            .info-dropdown08 {
              width: 400px;
            }
            .info-dropdown09 {
              width: 400px;
            }
            .info-footer {
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .info-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .info-icon16 {
              align-self: center;
            }
            .info-container18 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .info-link6 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .info-image1 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .info-icon18 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .info-container19 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .info-link8 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .info-text133 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .info-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .info-container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .info-btn-group {
              flex-direction: column;
            }
            .info-link {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .info-testimonial {
              width: 94%;
              margin-top: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .info-testimonial1 {
              width: 94%;
              margin-top: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .info-insurance-providers {
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .info-text037 {
              font-size: 1.5rem;
            }
            .info-container06 {
              grid-gap: var(--dl-space-space-halfunit);
              align-self: center;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              border-radius: var(--dl-radius-radius-radius4);
            }
            .info-container07 {
              grid-gap: var(--dl-space-space-halfunit);
              align-self: center;
              margin-left: var(--dl-space-space-halfunit);
            }
            .info-link1 {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .info-text041 {
              font-size: 2.2rem;
            }
            .info-container08 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .info-text042 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Raleway;
              font-weight: 800;
              text-transform: uppercase;
            }
            .info-link2 {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .info-text046 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Raleway;
              font-weight: 800;
              text-transform: uppercase;
            }
            .info-link3 {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .info-text050 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Raleway;
              font-weight: 800;
              text-transform: uppercase;
            }
            .info-link4 {
              font-size: 12px;
              align-self: center;
              font-style: normal;
              font-weight: 700;
            }
            .info-features {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .info-text054 {
              font-size: 2.2rem;
              font-family: Raleway;
            }
            .info-container09 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .info-feature-card {
              padding-left: 0px;
              padding-right: 0px;
            }
            .info-dropdown {
              width: 400px;
            }
            .info-feature-card1 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .info-dropdown02 {
              width: 400px;
            }
            .info-container14 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .info-dropdown04 {
              width: 400px;
            }
            .info-dropdown05 {
              width: 400px;
            }
            .info-dropdown07 {
              width: 400px;
            }
            .info-dropdown08 {
              width: 400px;
            }
            .info-dropdown09 {
              width: 400px;
            }
            .info-footer {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .info-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .info-container18 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .info-link6 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .info-container19 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .info-link8 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .info-text133 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Info
