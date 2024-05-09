import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Button } from '@mui/material';

const validationSchema = Yup.object({
  businessName: Yup.string()
    .required('Business name is required'),
  businessRegistrationNumber: Yup.string()
    .required('Business registration number is required')
    .matches(/^[0-9]+$/, 'Business registration number must be digits only'),
  businessAddress: Yup.string()
    .required('Business address is required'),
  contactPersonName: Yup.string()
    .required('Contact person name is required'),
  citizenID: Yup.string()
    .required('Citizen ID is required')
    .matches(/^[0-9]+$/, 'Citizen ID must be digits only'),
  applicantEmail: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

const ApplicantDetails = ({ formData, setFormData, handleNext }) => {
  const [formSaved, setFormSaved] = useState(false);
  return (
    <Box>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setFormData(values);
          setFormSaved(true);
        }}
      >
        {({ errors, touched, isValid, handleChange, handleBlur, handleSubmit }) => (
          <Form>
            <Box pt={3}>
              <CustomFormLabel htmlFor="businessName">Business Name</CustomFormLabel>
              <Field as={CustomTextField}
                id="businessName"
                name="businessName"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.businessName && Boolean(errors.businessName)}
                helperText={touched.businessName && errors.businessName}
              />
              <CustomFormLabel htmlFor="businessRegistrationNumber">Business Registration Number</CustomFormLabel>
              <Field as={CustomTextField}
                id="businessRegistrationNumber"
                name="businessRegistrationNumber"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.businessRegistrationNumber && Boolean(errors.businessRegistrationNumber)}
                helperText={touched.businessRegistrationNumber && errors.businessRegistrationNumber}
              />
              <CustomFormLabel htmlFor="businessAddress">Business Address</CustomFormLabel>
              <Field as={CustomTextField}
                id="businessAddress"
                name="businessAddress"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.businessAddress && Boolean(errors.businessAddress)}
                helperText={touched.businessAddress && errors.businessAddress}
              />
              <CustomFormLabel htmlFor="contactPersonName">Contact Person Name</CustomFormLabel>
              <Field as={CustomTextField}
                id="contactPersonName"
                name="contactPersonName"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.contactPersonName && Boolean(errors.contactPersonName)}
                helperText={touched.contactPersonName && errors.contactPersonName}
              />
              <CustomFormLabel htmlFor="citizenID">Citizen ID</CustomFormLabel>
              <Field as={CustomTextField}
                id="citizenID"
                name="citizenID"
                variant="outlined"
                type="phone"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.citizenID && Boolean(errors.citizenID)}
                helperText={touched.citizenID && errors.citizenID}
              />
              <CustomFormLabel htmlFor="applicantEmail">Email</CustomFormLabel>
              <Field as={CustomTextField}
                id="applicantEmail"
                name="applicantEmail"
                type="email"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.applicantEmail && Boolean(errors.applicantEmail)}
                helperText={touched.applicantEmail && errors.applicantEmail}
              />
            </Box >

            <Box display="flex" flexDirection="row" mt={3}>
              <Button
                color="inherit"
                variant="contained"
                disabled={true}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box flex="1 1 auto" />
              <Button
                onClick={() => {
                  handleSubmit()
                }}
                sx={{
                  color: "primary",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#49BEFF"
                  },
                  mr: 2,
                }} variant="outlined"
                color='secondary'
              >
                Save
              </Button>
              <Button
                onClick={() => {
                  handleNext()
                }}
                variant="contained"
                color='secondary'
                disabled={!formSaved}
              >
                Next
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>

  );
};

export default ApplicantDetails;
