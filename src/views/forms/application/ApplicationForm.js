import React, { useRef } from 'react';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    Alert,
} from '@mui/material';

import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from '../../../components/shared/ParentCard';
import { Stack } from '@mui/system';
import ApplicantDetail from './ApplicantDetail';
import BeneficiaryDetail from './BeneficiaryDetail';
import TermAndConditions from './TermAndConditions';
import axiosClient from '../../../axios/axios';
import GuaranteeDetail from './GuaranteeDetail';

const steps = ['Applicant Contact Details', 'Beneficiary Business Details', 'Guarantee Details', 'Finish'];

const BCrumb = [
    {
        to: '/',
        title: 'Applications',
    },
    {
        title: 'Create new eGuarantee',
    },
];

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

    const handleSteps = (step) => {
        switch (step) {
            case 0:
                return (
                    <ApplicantDetail
                        formData={formData}
                        setFormData={setFormData}
                        handleNext={handleNext} />
                );
            case 1:
                return (
                    <BeneficiaryDetail
                        formData={formData}
                        setFormData={setFormData}
                        handleNext={handleNext}
                        handleBack={handleBack} />
                );
            case 2:
                return (
                    <GuaranteeDetail
                        formData={formData}
                        setFormData={setFormData}
                        handleNext={handleNext}
                        handleBack={handleBack} />
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

    console.log(formData)
    return (
        <PageContainer>
            <Breadcrumb
                title="Banker Guarantee Application"
                description="this is Banker Guarantee Application page"
                items={BCrumb}
            />
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

                            <Box sx={{ display: 'flex', justifyContent: 'end' }}>

                                {activeStep == steps.length - 1 &&
                                    <Button
                                        onClick={handleSubmitApplication}
                                        variant="contained"
                                        color={'success'}
                                        sx={{ mt: 3 }}
                                    >
                                        Finish
                                    </Button>}
                            </Box>
                        </>
                    )}
                </Box>
            </ParentCard>
        </PageContainer >
    );
};

export default ApplicationForm;
