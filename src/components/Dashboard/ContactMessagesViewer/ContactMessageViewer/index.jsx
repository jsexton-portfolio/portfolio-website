import PropTypes from 'prop-types'
import React from 'react'
import { UnderConstruction } from '../../../UnderConstruction'

export const ContactMessageViewer = ({ message }) => {
  return <UnderConstruction pageName="Contact Message Viewer" />
}

ContactMessageViewer.propTypes = {
  message: PropTypes.object.isRequired
}
