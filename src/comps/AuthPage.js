import React from 'react'
import { firebaseRef } from '../firebase'
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function AuthPage(props) {

  function handleSubmit(values, { props, setSubmitting }) {
    console.log(values)
    setSubmitting(false)
    return
  }

  const formSchema = Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required')
  })

  return (
    <div id="auth-view" className="container">
      <section className="row">
        <div className="col s12">
          <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={formSchema}
            onSubmit={handleSubmit}
            render={(formProps) => {
             return(
                <Form>
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <Field type="text" id="email" name="email"/>
                    <ErrorMessage component="span" name="email" />
                  </div>

                  <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password"/>
                    <ErrorMessage component="span" name="password" />
                  </div>

                  <div className="button-group">
                    <button className="btn btn-blue" type="submit" disabled={formProps.isSubmitting}>Submit Form</button>
                  </div>
                </Form>
             )
           }}
          />
        </div>
      </section>
    </div>
  )
}
