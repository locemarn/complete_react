import React from 'react'
import PropTypes from 'prop-types'

const defaultProps ={
  text: 'no text'
}

const propTypes = {
  text: PropTypes.string
}

const Test = ({ text }) => {
  return (
    <p>{ text }</p>
  )
}

Test.propTypes = propTypes
Test.defaultProps = defaultProps

export default Test
