import React from 'react'
import { Box } from '@mui/system';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

const BeneficiaryDetail = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <Box>
            <CustomFormLabel htmlFor="beneficiaryBusinessName">Business Name</CustomFormLabel>
            <CustomTextField
                id="beneficiaryBusinessName"
                name="beneficiaryBusinessName"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                value={formData.beneficiaryBusinessName}
            />
            <CustomFormLabel htmlFor="beneficiaryBusinessRegistrationNumber">Business Registration Number</CustomFormLabel>
            <CustomTextField
                id="beneficiaryBusinessRegistrationNumber"
                name="beneficiaryBusinessRegistrationNumber"
                variant="outlined"
                fullWidth
                value={formData.beneficiaryBusinessRegistrationNumber}
                onChange={handleChange}
            />
            <CustomFormLabel htmlFor="beneficiaryBusinessAddress"> Business Address</CustomFormLabel>
            <CustomTextField
                id="beneficiaryBusinessAddress"
                name="beneficiaryBusinessAddress"
                variant="outlined"
                fullWidth
                value={formData.beneficiaryBusinessAddress}
                onChange={handleChange} />
            <CustomFormLabel htmlFor="beneficiaryEmail">Email</CustomFormLabel>
            <CustomTextField
                id="beneficiaryEmail"
                name="beneficiaryEmail"
                variant="outlined"
                type="phone"
                fullWidth
                value={formData.beneficiaryEmail}
                onChange={handleChange} />
        </Box>
    )
}

export default BeneficiaryDetail
