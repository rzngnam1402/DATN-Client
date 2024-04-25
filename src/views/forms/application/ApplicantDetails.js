import React from 'react';
import { Box } from '@mui/system';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

const ApplicantDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box pt={3}>
      <CustomFormLabel htmlFor="businessName">Business Name</CustomFormLabel>
      <CustomTextField
        id="businessName"
        name="businessName"
        variant="outlined"
        fullWidth
        value={formData.businessName}
        onChange={handleChange}
      />
      <CustomFormLabel htmlFor="businessRegistrationNumber">Business Registration Number</CustomFormLabel>
      <CustomTextField
        id="businessRegistrationNumber"
        name="businessRegistrationNumber"
        variant="outlined"
        fullWidth
        value={formData.businessRegistrationNumber}
        onChange={handleChange}
      />
      <CustomFormLabel htmlFor="businessAddress">Business Address</CustomFormLabel>
      <CustomTextField
        id="businessAddress"
        name="businessAddress"
        variant="outlined"
        fullWidth
        value={formData.businessAddress}
        onChange={handleChange} />
      <CustomFormLabel htmlFor="contactPersonName">Contact Person Name</CustomFormLabel>
      <CustomTextField
        id="contactPersonName"
        name="contactPersonName"
        variant="outlined"
        fullWidth
        value={formData.contactPersonName}
        onChange={handleChange} />
      <CustomFormLabel htmlFor="citizenID">Citizen ID</CustomFormLabel>
      <CustomTextField
        id="citizenID"
        name="citizenID"
        variant="outlined"
        type="phone"
        fullWidth
        value={formData.citizenID}
        onChange={handleChange} />
      <CustomFormLabel htmlFor="applicantEmail"> Email</CustomFormLabel>
      <CustomTextField
        id="applicantEmail"
        name="applicantEmail"
        type="email"
        variant="outlined"
        fullWidth
        value={formData.applicantEmail}
        onChange={handleChange} />
    </Box >
  );
};

export default ApplicantDetails;
