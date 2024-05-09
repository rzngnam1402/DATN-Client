import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Button } from '@mui/material';

const validationSchema = Yup.object({
    beneficiaryBusinessName:
        Yup.string().required('Business Name is required'),
    beneficiaryBusinessRegistrationNumber:
        Yup.string().required('Business Registration Number is required')
            .matches(/^[0-9]+$/, 'Business registration number must be digits only'),
    beneficiaryBusinessAddress:
        Yup.string().required('Business Address is required'),
    beneficiaryEmail:
        Yup.string().email('Invalid email').required('Email is required'),
});

const BeneficiaryDetail = ({ formData, setFormData, handleNext, handleBack }) => {
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
                enableReinitialize
            >
                {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <Form>
                        <Box>
                            <CustomFormLabel htmlFor="beneficiaryBusinessName">Business Name</CustomFormLabel>
                            <Field as={CustomTextField}
                                id="beneficiaryBusinessName"
                                name="beneficiaryBusinessName"
                                variant="outlined"
                                fullWidth
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.beneficiaryBusinessName && !!errors.beneficiaryBusinessName}
                                helperText={touched.beneficiaryBusinessName && errors.beneficiaryBusinessName}
                            />
                            <CustomFormLabel htmlFor="beneficiaryBusinessRegistrationNumber">Business Registration Number</CustomFormLabel>
                            <Field as={CustomTextField}
                                id="beneficiaryBusinessRegistrationNumber"
                                name="beneficiaryBusinessRegistrationNumber"
                                variant="outlined"
                                fullWidth
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.beneficiaryBusinessRegistrationNumber && !!errors.beneficiaryBusinessRegistrationNumber}
                                helperText={touched.beneficiaryBusinessRegistrationNumber && errors.beneficiaryBusinessRegistrationNumber}
                            />
                            <CustomFormLabel htmlFor="beneficiaryBusinessAddress">Business Address</CustomFormLabel>
                            <Field as={CustomTextField}
                                component={CustomTextField}
                                id="beneficiaryBusinessAddress"
                                name="beneficiaryBusinessAddress"
                                variant="outlined"
                                fullWidth
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.beneficiaryBusinessAddress && !!errors.beneficiaryBusinessAddress}
                                helperText={touched.beneficiaryBusinessAddress && errors.beneficiaryBusinessAddress}
                            />
                            <CustomFormLabel htmlFor="beneficiaryEmail">Email</CustomFormLabel>
                            <Field as={CustomTextField}
                                component={CustomTextField}
                                id="beneficiaryEmail"
                                name="beneficiaryEmail"
                                type="email"
                                variant="outlined"
                                fullWidth
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.beneficiaryEmail && !!errors.beneficiaryEmail}
                                helperText={touched.beneficiaryEmail && errors.beneficiaryEmail}
                            />
                        </Box>
                        <Box display="flex" flexDirection="row" mt={3}>
                            <Button
                                color="inherit"
                                variant="contained"
                                sx={{ mr: 1 }}
                                onClick={handleBack}
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
}

export default BeneficiaryDetail;
