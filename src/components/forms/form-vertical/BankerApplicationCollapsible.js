import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Grid,
    FormControlLabel,
    RadioGroup,
    FormControl,
    InputAdornment,
    Stack,
    Button,
    MenuItem,
    Box
} from '@mui/material';
import { IconChevronDown, IconHelp } from '@tabler/icons';

// components
import CustomFormLabel from '../theme-elements/CustomFormLabel';
import CustomTextField from '../theme-elements/CustomTextField';
import CustomRadio from '../theme-elements/CustomRadio';
import CustomOutlinedInput from '../theme-elements/CustomOutlinedInput';
import CustomSelect from '../theme-elements/CustomSelect';

const states = [
    {
        value: '1',
        label: 'Alaska',
    },
    {
        value: '2',
        label: 'Arizona',
    },
    {
        value: '3',
        label: 'Hawaii',
    },
];

const BankerApplicationCollapsible = ({ application = {} }) => {

    const [panel, setPanel] = useState({
        panel1: true,
        panel2: false,
        panel3: false,
    });

    const handleToggle = (panelName) => {
        console.log(application)
        setPanel((prevToggle) => ({
            ...prevToggle,
            [panelName]: !prevToggle[panelName],
        }));

    };
    // address type
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    //   delivery options
    const [value2, setValue2] = React.useState('');

    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };

    //   payment
    const [value3, setValue3] = React.useState('radio1');

    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    // states
    // language
    const [state, setStates] = React.useState('');

    const handleChange4 = (event) => {
        setStates(event.target.value);
    };

    return (
        <div>
            {application && application.ApplicantDetail && (
                <>
                    <Accordion elevation={9} sx={{ mb: 2 }} expanded={panel.panel1} onChange={() => handleToggle('panel1')}>
                        <AccordionSummary
                            expandIcon={<IconChevronDown size="20" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h6">Applicant Detail</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <CustomFormLabel htmlFor="applicant-business-name" sx={{ mt: 0 }}>
                                        Business Name
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="applicant-business-name"
                                        placeholder="Applicant Business Name"
                                        fullWidth
                                        value={application.ApplicantDetail.businessName}
                                        InputProps={{ readOnly: true }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CustomFormLabel
                                        htmlFor="business-registration-number"
                                        sx={{ mt: 0 }}>
                                        Business Registration Number
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="business-registration-number"
                                        placeholder="Business Registration Number"
                                        value={application.ApplicantDetail.businessRegistrationNumber}
                                        InputProps={{ readOnly: true }}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CustomFormLabel htmlFor="applicant-email" sx={{ mt: 0 }}>
                                        Email
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="applicant-email"
                                        placeholder="Email"
                                        fullWidth
                                        value={application.ApplicantDetail.applicantEmail}
                                        InputProps={{ readOnly: true }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CustomFormLabel htmlFor="applicant-debit-account" sx={{ mt: 0 }}>
                                        Debit Account Number
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="applicant-debit-account"
                                        placeholder="Debit Account Number"
                                        value={application.ApplicantDetail.debitAccountNo}
                                        InputProps={{ readOnly: true }}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CustomFormLabel htmlFor="applicant-contact-person" sx={{ mt: 0 }}>
                                        Contact Person Name
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="applicant-contact-person"
                                        placeholder="Contact person"
                                        value={application.ApplicantDetail.contactPersonName}
                                        InputProps={{ readOnly: true }}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CustomFormLabel htmlFor="citizen-id" sx={{ mt: 0 }}>
                                        Citizen Id
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="citizen-id"
                                        placeholder="citizen-id"
                                        value={application.ApplicantDetail.citizenID}
                                        InputProps={{ readOnly: true }}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomFormLabel htmlFor="applicant-business-address" sx={{ mt: 0 }}>
                                        Business Address
                                    </CustomFormLabel>
                                    <CustomTextField
                                        multiline
                                        id="applicant-business-address"
                                        placeholder="Applicant Business Address"
                                        value={application.ApplicantDetail.businessAddress}
                                        InputProps={{ readOnly: true }}
                                        fullWidth />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={9} sx={{ mb: 2 }} expanded={panel.panel2} onChange={() => handleToggle('panel2')}>
                        <AccordionSummary
                            expandIcon={<IconChevronDown size="20" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography variant="h6">Delivery Options</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <RadioGroup row name="delivery-opt" value={value2} onChange={handleChange2}>
                                <FormControlLabel value="radio1" control={<CustomRadio />} label="Standard 3-5 Days" />
                                <FormControlLabel value="radio2" control={<CustomRadio />} label="Express" />
                                <FormControlLabel value="radio3" control={<CustomRadio />} label="Overnight" />
                            </RadioGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={9} sx={{ mb: 2 }} expanded={panel.panel3} onChange={() => handleToggle('panel3')}>
                        <AccordionSummary
                            expandIcon={<IconChevronDown size="20" />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography variant="h6">Payment Method</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={8}>
                                    <RadioGroup row name="payment-method" value={value3} onChange={handleChange3}>
                                        <FormControlLabel
                                            value="radio1"
                                            control={<CustomRadio />}
                                            label="Credit/Debit/ATM Card"
                                        />
                                        <FormControlLabel
                                            value="radio2"
                                            control={<CustomRadio />}
                                            label="Cash on Delivery"
                                        />
                                    </RadioGroup>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Box>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <CustomFormLabel htmlFor="cs-co" sx={{ mt: 0 }}>
                                                    Card Number
                                                </CustomFormLabel>
                                                <CustomTextField id="cs-co" placeholder="1250 4521 5630 1540" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <CustomFormLabel htmlFor="cs-name" sx={{ mt: 0 }}>
                                                    Name
                                                </CustomFormLabel>
                                                <CustomTextField id="cs-name" placeholder="John Deo" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <CustomFormLabel htmlFor="cs-exdate" sx={{ mt: 0 }}>
                                                    Exp. Date
                                                </CustomFormLabel>
                                                <CustomTextField id="cs-exdate" placeholder="MM/YY" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <CustomFormLabel htmlFor="cs-code" sx={{ mt: 0 }}>
                                                    CCV Code
                                                </CustomFormLabel>
                                                <CustomOutlinedInput
                                                    id="cs-code"
                                                    placeholder="456"
                                                    fullWidth
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconHelp width="20" />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Stack direction="row" spacing={2}>
                                                    <Button variant="contained" color="primary">
                                                        Submit
                                                    </Button>
                                                    <Button variant="text" color="error">
                                                        Cancel
                                                    </Button>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </>
            )}
        </div>
    );
};

export default BankerApplicationCollapsible;
