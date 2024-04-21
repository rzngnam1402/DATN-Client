import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Grid,
    Stack,
    Button,
    Box,
    Chip,
} from '@mui/material';
import { IconChevronDown } from '@tabler/icons';

import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../forms/theme-elements/CustomTextField';
import { formatDate } from '../../../utils/date';
import { formatMoney } from '../../../utils/money';
import FileReader from '../../../utils/file';
import { useNavigate, useParams } from 'react-router';

const ClientApplicationCollapsible = ({ application = {} }) => {
    const navigate = useNavigate();
    const [panel, setPanel] = useState({
        panel1: true,
        panel2: true,
        panel3: true,
    });

    const handleToggle = (panelName) => {
        setPanel((prevToggle) => ({
            ...prevToggle,
            [panelName]: !prevToggle[panelName],
        }));
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
                            <Typography variant="h6">Beneficiary Detail</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <CustomFormLabel htmlFor="beneficiary-business-name" sx={{ mt: 0 }}>
                                        Business Name
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="beneficiary-business-name"
                                        placeholder="Beneficiary Business Name"
                                        fullWidth
                                        value={application.BeneficiaryDetail.businessName}
                                        InputProps={{ readOnly: true }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CustomFormLabel
                                        htmlFor="beneficiary-business-registration-number"
                                        sx={{ mt: 0 }}>
                                        Business Registration Number
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="beneficiary-business-registration-number"
                                        placeholder="Beneficiary Business Registration Number"
                                        value={application.BeneficiaryDetail.businessRegistrationNumber}
                                        InputProps={{ readOnly: true }}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} >
                                    <CustomFormLabel htmlFor="beneficiary-email" sx={{ mt: 0 }}>
                                        Email
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="beneficiary-email"
                                        placeholder="Email"
                                        fullWidth
                                        value={application.BeneficiaryDetail.email}
                                        InputProps={{ readOnly: true }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomFormLabel htmlFor="beneficiary-business-address" sx={{ mt: 0 }}>
                                        Business Address
                                    </CustomFormLabel>
                                    <CustomTextField
                                        multiline
                                        id="beneficiary-business-address"
                                        placeholder="Applicant Business Address"
                                        value={application.BeneficiaryDetail.businessAddress}
                                        InputProps={{ readOnly: true }}
                                        fullWidth />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={9} sx={{ mb: 2 }} expanded={panel.panel3} onChange={() => handleToggle('panel3')}>
                        <AccordionSummary
                            expandIcon={<IconChevronDown size="20" />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography variant="h6">Guarantee Detail</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <CustomFormLabel htmlFor="money-amount" sx={{ mt: 0 }}>
                                        Money amount
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="money-amount"
                                        placeholder="Money amount"
                                        fullWidth
                                        value={formatMoney(application.amount, application.currency)}
                                        InputProps={{ readOnly: true }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CustomFormLabel htmlFor="effective-date" sx={{ mt: 0 }}>
                                        Status
                                    </CustomFormLabel>
                                    <Chip
                                        sx={{
                                            backgroundColor:
                                                application.status === 'APPROVED'
                                                    ? (theme) => theme.palette.success.light
                                                    : application.status === 'REJECTED'
                                                        ? (theme) => theme.palette.error.light
                                                        : application.status === 'UNDER_REVIEW'
                                                            ? (theme) => theme.palette.warning.light
                                                            : application.status === 'Moderate',
                                        }}
                                        size=""
                                        label={application.status}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <CustomFormLabel htmlFor="created-date" sx={{ mt: 0 }}>
                                                    Created Date
                                                </CustomFormLabel>
                                                <CustomTextField
                                                    id="created-date"
                                                    placeholder="Created date"
                                                    fullWidth
                                                    value={formatDate(application.createdAt)}
                                                    InputProps={{ readOnly: true }} />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CustomFormLabel htmlFor="effective-date" sx={{ mt: 0 }}>
                                        Effective Date
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="effective-date"
                                        placeholder="Effective Date"
                                        fullWidth
                                        value={formatDate(application.effectiveDate)}
                                        InputProps={{ readOnly: true }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomFormLabel htmlFor="purpose" sx={{ mt: 0 }}>
                                        Purpose
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="purpose"
                                        placeholder="Guarantee Purpose"
                                        multiline
                                        fullWidth
                                        value={application.purpose}
                                        InputProps={{ readOnly: true }} />
                                </Grid>
                                {
                                    application.collateralFile ? (
                                        <Grid item xs={12}>
                                            <CustomFormLabel htmlFor="collateral-file" sx={{ mt: 0 }}>
                                                Collateral File
                                            </CustomFormLabel>
                                            <CustomTextField
                                                id="collateral-file"
                                                placeholder="Collateral file"
                                                fullWidth
                                                value={JSON.parse(application.collateralFile).originalname}
                                                InputProps={{ readOnly: true }} />
                                            <FileReader id="collateral-file" file={JSON.parse(application.collateralFile)} />
                                        </Grid>) :
                                        <Grid item xs={12}>
                                            <CustomFormLabel htmlFor="collateral-file" sx={{ mt: 0 }}>
                                                Collateral File
                                            </CustomFormLabel>
                                            <CustomTextField
                                                id="collateral-file"
                                                placeholder="Collateral file"
                                                fullWidth
                                                value="None"
                                                InputProps={{ readOnly: true }} />
                                        </Grid>
                                }
                                <>
                                    <Grid item xs={12} sm={11} />
                                    <Grid item xs={12} sm={1}>
                                        <Stack direction="row" spacing={2}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    navigate(-1);
                                                }}
                                            >
                                                Confirm
                                            </Button>
                                        </Stack>
                                    </Grid>
                                </>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </>
            )
            }
        </div >
    );
};

export default ClientApplicationCollapsible;
