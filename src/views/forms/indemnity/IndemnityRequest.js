import React, { useState } from 'react';
import { Box } from '@mui/system';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Button, Chip, Grid } from '@mui/material';

const IndemnityRequest = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setFile(file)
        setFormData({ ...formData, relatedFile: file });
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
                <Grid item xs={12} sm={12} display="flex" sx={{ alignItems: 'center' }} justify="start">
                    <CustomFormLabel htmlFor="relatedFile" sx={{ mt: 1, mr: 3, mb: { xs: '-10px', sm: 0 } }}>
                        Related File (Optional)
                    </CustomFormLabel>
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
