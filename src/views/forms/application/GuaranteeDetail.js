import React, { useState } from 'react'
import { Box } from '@mui/system';
import { Autocomplete, Button, FormControl, FormControlLabel, Grid, RadioGroup, } from '@mui/material';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomRadio from '../../../components/forms/theme-elements/CustomRadio';
import CustomDatePicker from '../form-elements/CustomDatePicker';
import banks from '../form-elements/data';

const GuaranteeDetail = ({ formData, setFormData, handleNext, handleBack }) => {
    const validationSchema = Yup.object({
        amount:
            Yup.number().required('Amount is required').positive('Amount must be a positive number'),
        debitAccountNo:
            Yup.string().required('Debit Account Number is required')
                .matches(/^[0-9]+$/, 'Debit Account Number must be digits only'),
        bankName: Yup.string().required('Bank name is required'),
        purpose: Yup.string().required('Guarantee purpose is required'),
    });
    const [selectedDate, setSelectedDate] = useState(null);
    const [formSaved, setFormSaved] = useState(false);
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleDateChange = (newValue) => {
        setSelectedDate(newValue);
    };

    return (
        <Box pt={6}>
            <Formik
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    const data = { ...values, effectiveDate: selectedDate, collateralFile: file }
                    setFormData(data);
                    setFormSaved(true);
                }}
                enableReinitialize
            >
                {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <Form>
                        <Grid container spacing={18}>
                            <Grid item xs={12} lg={6}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={3} display="flex" sx={{ alignItems: 'center' }} justify="start">
                                        <CustomFormLabel htmlFor="amount" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                                            Amount
                                        </CustomFormLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <Field as={CustomTextField}
                                            id="amount"
                                            name="amount"
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter guarantee amount"
                                            error={touched.amount && !!errors.amount}
                                            helperText={touched.amount && errors.amount}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} display="flex" sx={{ alignItems: 'center' }} justify="start">
                                        <CustomFormLabel htmlFor="effectiveDate" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                                            Effective Date
                                        </CustomFormLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <CustomDatePicker value={selectedDate} onChange={handleDateChange} />
                                    </Grid>
                                    <Grid item xs={12} sm={3} display="flex" alignitems="start" justify="start">
                                        <CustomFormLabel htmlFor="debitAccountNo" sx={{ mt: 1.5, mb: { xs: '-10px', sm: 0 } }}>Debit Account</CustomFormLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <Field as={CustomTextField}
                                            id="debitAccountNo"
                                            name="debitAccountNo"
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter debit account number"
                                            error={touched.debitAccountNo && !!errors.debitAccountNo}
                                            helperText={touched.debitAccountNo && errors.debitAccountNo}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={3} display="flex" justify="start" sx={{ alignItems: 'center' }} >
                                        <CustomFormLabel htmlFor="currency" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                                            Currency
                                        </CustomFormLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} >
                                        <FormControl component="fieldset" onChange={handleChange} display="flex" sx={{ alignItems: 'center' }} justify="end" direction="row">
                                            <RadioGroup name="currency" row >
                                                <FormControlLabel
                                                    value="VND"
                                                    control={<CustomRadio />}
                                                    label="VND"
                                                />
                                                <FormControlLabel
                                                    value="USD"
                                                    control={<CustomRadio />}
                                                    label="USD"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={3} display="flex" sx={{ alignItems: 'center' }} justify="start">
                                        <CustomFormLabel htmlFor="effectiveDate" sx={{ mt: 1, mb: { xs: '-10px', sm: 0 } }}>
                                            Collateral File
                                        </CustomFormLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <input
                                            accept="application/pdf"
                                            style={{ display: 'none' }}
                                            id="raised-button-file"
                                            multiple
                                            type="file"
                                            onChange={handleFileChange}
                                        />

                                        <label htmlFor="raised-button-file">
                                            {!file ?
                                                <Button variant="contained" component="span" sx={{ mt: 1, mb: { xs: '-10px', sm: 0 } }}>
                                                    Upload PDF
                                                </Button> :
                                                <p
                                                    style={{ marginBottom: '3px' }}
                                                >
                                                    {file.name}</p>}

                                        </label>
                                    </Grid>
                                    <Grid item xs={12} sm={3} display="flex" sx={{ alignItems: 'center' }} justify="start">
                                        <CustomFormLabel htmlFor="bankName" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>Providing bank</CustomFormLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <Autocomplete
                                            id="bankName"
                                            disableClearable
                                            value={formData.bankName}
                                            onChange={(event, value) => setFormData({ ...formData, bankName: value })}
                                            options={banks.map((option) => option.name)}
                                            renderInput={(params) => (
                                                <CustomTextField
                                                    sx={{ mt: 0.5, mb: { xs: '-10px', sm: 0 } }}
                                                    {...params}
                                                    placeholder="Choose a bank"
                                                    aria-label="Choose a bank"
                                                    inputprops={{
                                                        ...params.inputprops,
                                                        type: 'search',
                                                    }}
                                                />
                                            )}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid pt={3} item xs={12} sm={3} display="flex" sx={{ alignItems: 'center' }} justify="start">
                            <CustomFormLabel htmlFor="purpose" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                                Guarantee purpose and guaranteed obligations
                            </CustomFormLabel>
                        </Grid>
                        <Grid pt={1} item xs={12} sm={9}>
                            <Field as={CustomTextField}
                                id="purpose"
                                name="purpose"
                                variant="outlined"
                                multiline
                                fullWidth
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.purpose && !!errors.purpose}
                                helperText={touched.purpose && errors.purpose}
                            />
                        </Grid>
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
        </Box >
    )
}

export default GuaranteeDetail
