import React, { useState } from 'react'
import { Box } from '@mui/system';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Autocomplete, Button, FormControl, FormControlLabel, Grid, RadioGroup, } from '@mui/material';
import CustomRadio from '../../../components/forms/theme-elements/CustomRadio';
import CustomDatePicker from '../form-elements/CustomDatePicker';
import banks from '../form-elements/data';

const GuaranteeDetail = ({ formData, setFormData }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setFormData({ ...formData, collateralFile: event.target.files[0] });
    };

    const handleDateChange = (newValue) => {
        setSelectedDate(newValue);
        setFormData({ ...formData, effectiveDate: newValue });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <Box pt={6}>
            <Grid container spacing={18}>
                {/* column 1 */}
                <Grid item xs={12} lg={6}>
                    <Grid container spacing={3}>
                        {/* 1 */}
                        <Grid item xs={12} sm={3} display="flex" alignItems="center" justifyContent="start">
                            <CustomFormLabel htmlFor="amount" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                                Amount
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <CustomTextField
                                id="amount"
                                name="amount"
                                onChange={handleChange}
                                placeholder="Enter guarantee amount"
                                fullWidth />
                        </Grid>
                        {/* 2 */}
                        <Grid item xs={12} sm={3} display="flex" alignItems="center" justifyContent="start">
                            <CustomFormLabel htmlFor="effectiveDate" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                                Effective Date
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <CustomDatePicker value={selectedDate} onChange={handleDateChange} />
                        </Grid>
                        {/* 3 */}
                        <Grid item xs={12} sm={3} display="flex" alignItems="start" justifyContent="start">
                            <CustomFormLabel htmlFor="debitAccountNo" sx={{ mt: 1.5, mb: { xs: '-10px', sm: 0 } }}>Debit Account</CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <CustomTextField
                                id="debitAccountNo"
                                name="debitAccountNo"
                                variant="outlined"
                                fullWidth
                                placeholder="Enter debit account number"
                                value={formData.debitAccountNo}
                                onChange={handleChange} />
                        </Grid>
                    </Grid>
                </Grid>
                {/* column 2 */}
                <Grid item xs={12} lg={6}>
                    <Grid container spacing={3}>
                        {/* 4 */}
                        <Grid item xs={12} sm={3} display="flex" alignItems="center" justifyContent="start" >
                            <CustomFormLabel htmlFor="currency" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                                Currency
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9} >
                            <FormControl component="fieldset" onChange={handleChange} display="flex" alignItems="center" justifyContent="end" direction="row">
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
                        <Grid item xs={12} sm={3} display="flex" alignItems="center" justifyContent="start">
                            <CustomFormLabel htmlFor="effectiveDate" sx={{ mt: 1, mb: { xs: '-10px', sm: 0 } }}>
                                Collateral File
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <input
                                accept="application/pdf"
                                // className={classes.input}
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                multiple
                                type="file"
                                onChange={handleFileChange}
                            />

                            <label htmlFor="raised-button-file">
                                {!formData.collateralFile ?
                                    <Button variant="contained" component="span" sx={{ mt: 1, mb: { xs: '-10px', sm: 0 } }}>
                                        Upload PDF
                                    </Button> :
                                    <p
                                        style={{ marginBottom: '3px' }}
                                    >
                                        {formData.collateralFile.name}</p>}

                            </label>
                        </Grid>
                        <Grid item xs={12} sm={3} display="flex" alignItems="center" justifyContent="start">
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
            <Grid pt={3} item xs={12} sm={3} display="flex" alignItems="center" justifyContent="start">
                <CustomFormLabel htmlFor="purpose" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                    Guarantee purpose and guaranteed obligations
                </CustomFormLabel>
            </Grid>
            <Grid pt={1} item xs={12} sm={9}>
                <CustomTextField
                    onChange={handleChange}
                    value={formData.purpose}
                    multiline
                    id="purpose"
                    name="purpose"
                    placeholder=""
                    fullWidth
                />
            </Grid>

        </Box >
    )
}

export default GuaranteeDetail
