import React from 'react';
import { Box } from '@mui/system';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Chip, Grid } from '@mui/material';

const IndemnityRequest = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <Box pt={3}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="refCode"> Reference Code</CustomFormLabel>
                    <CustomTextField
                        id="refCode"
                        name="refCode"
                        variant="outlined"
                        fullWidth
                        disabled={true}
                        value={`${formData?.guarantee?.guarantee_id}-${formData?.guarantee?.applicant_detail_id}-${formData?.guarantee?.beneficiary_detail_id}`}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="effective-date" sx={{ mt: 4 }}>
                        Status
                    </CustomFormLabel>
                    <Chip
                        sx={{
                            backgroundColor:
                                formData?.guarantee?.status === 'ISSUED'
                                    ? (theme) => theme.palette.success.light
                                    : (theme) => theme.palette.error.light
                        }}
                        size=""
                        label={formData?.guarantee?.status}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <CustomFormLabel htmlFor="reason">Enter your Claim reason</CustomFormLabel>
                    <CustomTextField
                        id="reason"
                        name="reason"
                        variant="outlined"
                        fullWidth
                        multiline
                        value={formData?.reason}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
        </Box >
    );
};

export default IndemnityRequest;
