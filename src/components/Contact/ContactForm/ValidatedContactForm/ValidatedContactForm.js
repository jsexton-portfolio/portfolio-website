import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import * as Yup from 'yup'
import { ContactForm } from '../ContactForm'

const contactSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string(),
  reason: Yup.string().required(),
  message: Yup.string()
    .min(50)
    .max(1000)
    .required()
})

const initialValues = { name: '', email: '', phone: '', reason: '', message: '' }

export const ValidatedContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={contactSchema}
    >{ (props) => <ContactForm {...props} onSubmit={onSubmit} /> }</Formik>
  )
}

ValidatedContactForm.propTypes = {
  onSubmit: PropTypes.func
}
