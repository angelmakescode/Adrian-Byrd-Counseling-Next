import React from 'react'

import PropTypes from 'prop-types'

const Form1 = (props) => {
  return (
    <>
      <div className={`form1-container ${props.rootClassName} `}>
        <form
          action="https://openformstack.com/f/clqk4nblf00048hsl9nf3vkbo"
          method="POST"
          enctype="application/x-www-form-urlencoded"
          className="form1-form"
        >
          <h1 className="form1-text">{props.heading1}</h1>
          <div className="form1-container1">
            <input
              type="text"
              name="first name"
              placeholder={props.textinputPlaceholder3}
              className="form1-textinput input"
            />
            <input
              type="text"
              name="last name"
              placeholder={props.textinputPlaceholder4}
              className="form1-textinput1 input"
            />
          </div>
          <input
            type="email"
            name="email address"
            placeholder={props.textinputPlaceholder}
            className="form1-textinput2 input"
          />
          <input
            type="number"
            name="phone number"
            placeholder={props.textinputPlaceholder1}
            className="form1-textinput3 input"
          />
          <textarea
            rows="4"
            placeholder={props.textareaPlaceholder}
            className="form1-textarea textarea"
          ></textarea>
          <input
            type="text"
            name="campaign"
            value="contact-us"
            placeholder={props.textinputPlaceholder2}
            className="form1-textinput4 input"
          />
          <button
            name="goal button"
            type="submit"
            className="form1-button button"
          >
            {props.button}
          </button>
        </form>
      </div>
      <style jsx>
        {`
          .form1-container {
            display: flex;
            position: relative;
          }
          .form1-form {
            width: 100%;
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
          .form1-text {
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
          .form1-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .form1-textinput {
            width: 190px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .form1-textinput1 {
            width: 190px;
            margin-left: 20px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .form1-textinput2 {
            width: 400px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .form1-textinput3 {
            width: 400px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .form1-textarea {
            width: 400px;
            border-width: 0px;
          }
          .form1-textinput4 {
            display: none;
          }
          .form1-button {
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
          .form1-button:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          .form1-root-class-name {
            display: none;
          }
          @media (max-width: 991px) {
            .form1-button {
              align-self: stretch;
            }
          }
          @media (max-width: 767px) {
            .form1-form {
              width: 600px;
            }
            .form1-button {
              width: 200px;
              font-size: 18px;
              align-self: center;
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .form1-form {
              width: 400px;
            }
            .form1-textinput {
              width: 150px;
            }
            .form1-textinput1 {
              width: 150px;
            }
            .form1-textinput2 {
              width: 325px;
            }
            .form1-textinput3 {
              width: 325px;
            }
            .form1-textarea {
              width: 325px;
            }
            .form1-button {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
            }
          }
        `}
      </style>
    </>
  )
}

Form1.defaultProps = {
  textinputPlaceholder1: 'phone number',
  textinputPlaceholder4: 'last name',
  textinputPlaceholder: 'email address',
  textinputPlaceholder2: 'placeholder',
  rootClassName: '',
  textareaPlaceholder: 'message',
  textinputPlaceholder3: 'first name',
  button: 'get started',
  heading1: 'LEAVE A MESSAGE',
  heading: 'LEAVE A MESSAGE',
}

Form1.propTypes = {
  textinputPlaceholder1: PropTypes.string,
  textinputPlaceholder4: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  rootClassName: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  textinputPlaceholder3: PropTypes.string,
  button: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
}

export default Form1
