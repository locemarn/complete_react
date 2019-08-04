import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  text: PropTypes.string
}

const Test = ({ text }) => {
  return (
    <h1>{ text }</h1>
  )
}

Text.propTypes = propTypes

export default Test
