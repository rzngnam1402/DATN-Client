import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Grid,
    Box,
    Chip,
} from '@mui/material';

import { IconChevronDown } from '@tabler/icons';

import CustomFormLabel from '../forms/theme-elements/CustomFormLabel';
import CustomTextField from '../forms/theme-elements/CustomTextField';
import { formatMoney } from '../../utils/money';
import { formatDate } from '../../utils/date';

const GuaranteeInfoPanel = ({ panel, handleToggle, guarantee }) => {
    return (
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
                                value={guarantee?.ApplicantDetail?.businessName}
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
                                value={guarantee?.ApplicantDetail?.businessRegistrationNumber}
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
                                value={guarantee?.ApplicantDetail?.applicantEmail}
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
                                value={guarantee?.ApplicantDetail?.debitAccountNo}
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
                                value={guarantee?.ApplicantDetail?.contactPersonName}
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
                                value={guarantee?.ApplicantDetail?.citizenID}
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
                                value={guarantee?.ApplicantDetail?.businessAddress}
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
                                value={guarantee?.BeneficiaryDetail?.businessName}
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
                                value={guarantee?.BeneficiaryDetail?.businessRegistrationNumber}
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
                                value={guarantee?.BeneficiaryDetail?.email}
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
                                value={guarantee?.BeneficiaryDetail?.businessAddress}
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
                                value={formatMoney(guarantee?.amount, guarantee?.currency)}
                                InputProps={{ readOnly: true }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CustomFormLabel htmlFor="effective-date" sx={{ mt: 0 }}>
                                Status
                            </CustomFormLabel>
                            <Chip
                                sx={{
                                    backgroundColor:
                                        guarantee?.status === 'ISSUED'
                                            ? (theme) => theme.palette.success.light
                                            : (theme) => theme.palette.error.light
                                }}
                                size=""
                                label={guarantee?.status}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <CustomFormLabel htmlFor="start-date" sx={{ mt: 0 }}>
                                            Start date
                                        </CustomFormLabel>
                                        <CustomTextField
                                            id="start-date"
                                            placeholder="Start date"
                                            fullWidth
                                            value={formatDate(guarantee?.startDate)}
                                            InputProps={{ readOnly: true }} />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CustomFormLabel htmlFor="expiry-date" sx={{ mt: 0 }}>
                                Expiry Date
                            </CustomFormLabel>
                            <CustomTextField
                                id="expiry-date"
                                placeholder="expiry Date"
                                fullWidth
                                value={formatDate(guarantee?.expiryDate)}
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
                                value={guarantee?.purpose}
                                InputProps={{ readOnly: true }} />
                        </Grid>

                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default GuaranteeInfoPanel
