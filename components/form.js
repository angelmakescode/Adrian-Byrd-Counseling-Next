import React from 'react'

import PropTypes from 'prop-types'

const Form = (props) => {
  return (
    <>
      <div className="form-container">
        <form
          action="https://openformstack.com/f/clqk4nblf00048hsl9nf3vkbo"
          method="POST"
          enctype="application/x-www-form-urlencoded"
          className="form-form"
        >
          <h1 className="form-text">{props.heading}</h1>
          <div className="form-container1">
            <input
              type="text"
              name="first name"
              placeholder={props.textinput_placeholder2}
              className="form-textinput input"
            />
            <input
              type="text"
              name="last name"
              placeholder={props.textinput_placeholder3}
              className="form-textinput1 input"
            />
          </div>
          <input
            type="email"
            name="email address"
            placeholder={props.textinput_placeholder}
            className="form-textinput2 input"
          />
          <input
            type="number"
            name="phone number"
            placeholder={props.textinput_placeholder1}
            className="form-textinput3 input"
          />
          <button
            name="goal button"
            type="submit"
            className="form-button button"
          >
            {props.button}
          </button>
        </form>
      </div>
      <style jsx>
        {`
          .form-container {
            display: flex;
            position: relative;
          }
          .form-form {
            width: 1350px;
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
          .form-text {
            color: var(--dl-color-gray-beige);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-green);
          }
          .form-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .form-textinput {
            width: 190px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .form-textinput1 {
            width: 190px;
            margin-left: 20px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .form-textinput2 {
            width: 400px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .form-textinput3 {
            width: 400px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .form-button {
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
          .form-button:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }
          @media (max-width: 991px) {
            .form-button {
              align-self: stretch;
            }
          }
          @media (max-width: 767px) {
            .form-form {
              width: 600px;
            }
            .form-button {
              width: 200px;
              font-size: 18px;
              align-self: center;
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .form-form {
              width: 400px;
            }
            .form-text {
              font-size: 1.8em;
              text-align: left;
            }
            .form-textinput {
              width: 150px;
            }
            .form-textinput1 {
              width: 150px;
            }
            .form-textinput2 {
              width: 325px;
            }
            .form-textinput3 {
              width: 325px;
            }
            .form-button {
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

Form.defaultProps = {
  heading: "Don't wait. Enroll today!",
  textinput_placeholder: 'email address',
  textinput_placeholder1: 'phone number',
  button: 'get started',
  textinput_placeholder2: 'first name',
  textinput_placeholder3: 'last name',
}

Form.propTypes = {
  heading: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  button: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
}

export default Form
