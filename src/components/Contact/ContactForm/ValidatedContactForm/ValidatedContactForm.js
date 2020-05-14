import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import { ContactForm } from '../ContactForm'

const contactSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string(),
  reason: Yup.string().required(),
  message: Yup.string().min(50).max(1000).required()
})

export const ValidatedContactForm = ({ onSubmit }) => {
  const initialValues = useSelector((state) => state.contactForm)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={contactSchema}
    >
      {(props) => <ContactForm {...props} onSubmit={onSubmit} />}
    </Formik>
  )
}

ValidatedContactForm.propTypes = {
  onSubmit: PropTypes.func
}
