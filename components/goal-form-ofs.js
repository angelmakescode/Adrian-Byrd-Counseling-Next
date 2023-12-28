import React from 'react'

import PropTypes from 'prop-types'

const GoalFormOFS = (props) => {
  return (
    <>
      <div className={`goal-form-ofs-container ${props.rootClassName} `}>
        <form
          action="https://openformstack.com/f/clqk4nblf00048hsl9nf3vkbo"
          method="POST"
          enctype="application/x-www-form-urlencoded"
          className="goal-form-ofs-form"
        >
          <h1 className="goal-form-ofs-text">{props.heading1}</h1>
          <div className="goal-form-ofs-container1">
            <input
              type="text"
              name="first name"
              placeholder={props.textinput_placeholder2}
              className="goal-form-ofs-textinput input"
            />
            <input
              type="text"
              name="last name"
              placeholder={props.textinput_placeholder3}
              className="goal-form-ofs-textinput1 input"
            />
          </div>
          <input
            type="email"
            name="email address"
            placeholder={props.textinput_placeholder}
            className="goal-form-ofs-textinput2 input"
          />
          <input
            type="number"
            name="phone number"
            placeholder={props.textinput_placeholder1}
            className="goal-form-ofs-textinput3 input"
          />
          <div className="goal-form-ofs-container2">
            <input
              type="text"
              name="campaign"
              value="2024-goal-coaching"
              placeholder={props.textinput_placeholder4}
              className="goal-form-ofs-textinput4 input"
            />
            <button
              name="goal button"
              type="submit"
              className="goal-form-ofs-button button"
            >
              {props.button}
            </button>
          </div>
        </form>
      </div>
      <style jsx>
        {`
          .goal-form-ofs-container {
            display: flex;
            position: relative;
          }
          .goal-form-ofs-form {
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
          .goal-form-ofs-text {
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
          .goal-form-ofs-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .goal-form-ofs-textinput {
            width: 190px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-form-ofs-textinput1 {
            width: 190px;
            margin-left: 20px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-form-ofs-textinput2 {
            width: 400px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-form-ofs-textinput3 {
            width: 400px;
            border-width: 0px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .goal-form-ofs-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .goal-form-ofs-textinput4 {
            display: none;
          }
          .goal-form-ofs-button {
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
          .goal-form-ofs-button:hover {
            color: var(--dl-color-gray-beige);
            background-color: var(--dl-color-gray-black);
          }

          @media (max-width: 991px) {
            .goal-form-ofs-button {
              align-self: stretch;
            }
          }
          @media (max-width: 767px) {
            .goal-form-ofs-form {
              width: 600px;
            }
            .goal-form-ofs-button {
              width: 200px;
              font-size: 18px;
              align-self: center;
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .goal-form-ofs-form {
              width: 400px;
            }
            .goal-form-ofs-textinput {
              width: 150px;
            }
            .goal-form-ofs-textinput1 {
              width: 150px;
            }
            .goal-form-ofs-textinput2 {
              width: 325px;
            }
            .goal-form-ofs-textinput3 {
              width: 325px;
            }
            .goal-form-ofs-button {
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

GoalFormOFS.defaultProps = {
  textinput_placeholder4: 'placeholder',
  button: 'get started',
  heading1: "Don't wait. Enroll today!",
  textinput_placeholder1: 'phone number',
  textinput_placeholder3: 'last name',
  textinput_placeholder2: 'first name',
  heading: "Don't wait. Enroll today!",
  textarea_placeholder: 'message',
  textinput_placeholder: 'email address',
  rootClassName: '',
}

GoalFormOFS.propTypes = {
  textinput_placeholder4: PropTypes.string,
  button: PropTypes.string,
  heading1: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  heading: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default GoalFormOFS
