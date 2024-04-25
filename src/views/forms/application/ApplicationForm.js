import React from 'react';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    FormControlLabel,
    Alert,
} from '@mui/material';

import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from '../../../components/shared/ParentCard';
import { Stack } from '@mui/system';
import ApplicantDetails from './ApplicantDetails';
import BeneficiaryDetail from './BeneficiaryDetail';
import GuaranteeDetail from './guaranteeDetail';
import TermAndConditions from './TermAndConditions';
import axiosClient from '../../../axios/axios';

const steps = ['Applicant Contact Details', 'Beneficiary Business Details', 'Guarantee Details', 'Finish'];

const ApplicationForm = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [formData, setFormData] = React.useState({
        // Applicant Details Information
        businessName: '',
        businessRegistrationNumber: '',
        businessAddress: '',
        contactPersonName: '',
        citizenID: '',
        applicantEmail: '',

        // Beneficiary Details Information
        beneficiaryBusinessName: '',
        beneficiaryBusinessRegistrationNumber: '',
        beneficiaryBusinessAddress: '',
        beneficiaryEmail: '',

        // Guarantee Details Information
        bankName: 'Vietcombank',
        debitAccountNo: '',
        amount: '',
        collateralFile: null,
        currency: '',
        effectiveDate: '',
        purpose: '',
    });
    const handleSubmitApplication = () => {
        console.log(formData.collateralFile)
        axiosClient
            .post(
                "application/create",
                {
                    ...formData
                },
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            )
            .then(({ data }) => {
                handleNext()
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const isStepOptional = (step) => step === 5;

    const isStepSkipped = (step) => skipped.has(step);

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleSteps = (step) => {
        switch (step) {
            case 0:
                return (
                    <ApplicantDetails formData={formData} setFormData={setFormData} />
                );
            case 1:
                return (
                    <BeneficiaryDetail formData={formData} setFormData={setFormData} />
                );
            case 2:
                return (
                    <GuaranteeDetail formData={formData} setFormData={setFormData} />
                );
            case 3:
                return (
                    <TermAndConditions />
                )
            default:
                break;
        }
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <PageContainer>
            <Breadcrumb title="Banker Guarantee Application" description="this is Banker Guarantee Application page" />
            <ParentCard title='Guarantee Application Form'>
                <Box width="100%">
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepOptional(index)) {
                                labelProps.optional = <Typography variant="caption">Optional</Typography>;
                            }
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <>
                            <Stack spacing={2} mt={3}>
                                <Alert severity='success' mt={2}>All steps completed - you&apos;re finished</Alert>

                                <Box textAlign="right">
                                    <Button onClick={handleReset} variant="contained" color="error">
                                        Reset
                                    </Button>
                                </Box>
                            </Stack>
                        </>
                    ) : (
                        <>
                            <Box>{handleSteps(activeStep)}</Box>

                            <Box display="flex" flexDirection="row" mt={3}>
                                <Button
                                    color="inherit"
                                    variant="contained"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Box flex="1 1 auto" />
                                {isStepOptional(activeStep) && (
                                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                        Skip
                                    </Button>
                                )}

                                {activeStep === steps.length - 1 ?
                                    <Button
                                        onClick={handleSubmitApplication}
                                        variant="contained"
                                        color={'success'}
                                    >
                                        Finish
                                    </Button>
                                    :
                                    <Button
                                        onClick={handleNext}
                                        variant="contained"
                                        color='secondary'
                                    >
                                        Next
                                    </Button>
                                }
                            </Box>
                        </>
                    )}
                </Box>
            </ParentCard>
        </PageContainer>
    );
};

export default ApplicationForm;
