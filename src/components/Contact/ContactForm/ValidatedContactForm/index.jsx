import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import { ContactForm } from '..'

Yup.addMethod(Yup.string, 'phone', function () {
  return this.test({
    name: 'phone',
    message: 'phone must be a valid phone number',
    test: (phone = '') => {
      const phoneNumberRegex = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
      return phone === '' || phoneNumberRegex.test(phone)
    }
  })
})

const contactSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().phone(),
  reason: Yup.string().required(),
  message: Yup.string().max(2000).required()
})

export const ValidatedContactForm = ({ onSubmit }) => {
  const initialValues = useSelector((state) => state.contact.form)

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
