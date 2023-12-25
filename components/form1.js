import React from 'react'

import PropTypes from 'prop-types'

const Form1 = (props) => {
  return (
    <>
      <div className="form1-container">
        <form
          action="https://openformstack.com/f/clqk4nblf00048hsl9nf3vkbo"
          method="POST"
          enctype="application/x-www-form-urlencoded"
          className="form1-form"
        >
          <h1 className="form1-text">{props.heading}</h1>
          <div className="form1-container1">
            <input
              type="text"
              name="first name"
              placeholder={props.textinput_placeholder3}
              className="form1-textinput input"
            />
            <input
              type="text"
              name="last name"
              placeholder={props.textinput_placeholder4}
              className="form1-textinput1 input"
            />
          </div>
          <input
            type="email"
            name="email address"
            placeholder={props.textinput_placeholder}
            className="form1-textinput2 input"
          />
          <input
            type="number"
            name="phone number"
            placeholder={props.textinput_placeholder1}
            className="form1-textinput3 input"
          />
          <textarea
            placeholder={props.textarea_placeholder}
            rows="4"
            className="form1-textarea textarea"
          ></textarea>
          <input
            type="text"
            placeholder={props.textinput_placeholder2}
            name="campaign"
            value="contact-us"
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
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-green);
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
            .form1-text {
              font-size: 1.8em;
              text-align: left;
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
  heading: "Don't wait. Enroll today!",
  textinput_placeholder: 'email address',
  textinput_placeholder1: 'phone number',
  textarea_placeholder: 'message',
  textinput_placeholder2: 'placeholder',
  button: 'get started',
  textinput_placeholder3: 'first name',
  textinput_placeholder4: 'last name',
}

Form1.propTypes = {
  heading: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  button: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
  textinput_placeholder4: PropTypes.string,
}

export default Form1
