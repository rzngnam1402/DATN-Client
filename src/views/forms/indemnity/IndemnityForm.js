import React from 'react'
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from '../../../components/shared/ParentCard';
import { Box, Stack } from '@mui/system';
import { Alert, Button, Step, StepLabel, Stepper } from '@mui/material';
import CheckDetail from './CheckDetail';
import IndemnityRequest from './IndemnityRequest';
import IndemnityTermAndCondition from './IndemnityTermAndCondition';
import axiosClient from '../../../axios/axios';
import { toast } from 'react-toastify';

const steps = ['Check your Guarantee Detail', 'Fill the form', 'Finish'];

const BCrumb = [
    {
        to: '/',
        title: 'Indemnities',
    },
    {
        title: 'Create new Indemnity',
    },
];

const IndemnityForm = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [formData, setFormData] = React.useState({
        guarantee: '',
        reason: '',
        relatedFile: null
    })

    const isStepSkipped = (step) => skipped.has(step);
    const handleReset = () => {
        setActiveStep(0);
    };
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
                    <CheckDetail formData={formData} setFormData={setFormData} />
                );
            case 1:
                return (
                    <IndemnityRequest formData={formData} setFormData={setFormData} />);
            case 2:
                return (
                    <IndemnityTermAndCondition />);
            default:
                break;
        }
    };

    const handleSubmitApplication = () => {
        const payload = {
            guarantee_id: formData?.guarantee.guarantee_id?.toString(),
            reason: formData?.reason,
            relatedFile: formData?.relatedFile,
        }
        console.log("pl", payload)
        axiosClient.post('indemnity/create-new',
            payload
        )
            .then((response) => {
                toast.success('Indemnity created successfully')
                handleNext()
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    console.log({
        guarantee_id: formData.guarantee.guarantee_id,
        reason: formData.reason,
        file: formData.relatedFile,
    })

    return (
        <PageContainer>
            <Breadcrumb
                title="Banker Indemnity Application"
                description="this is Banker Indemnity Application page"
                items={BCrumb}
            />
            <ParentCard title='Indemnity Application Form'>
                <Box width="100%">
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
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
                </Box>

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
            </ParentCard>
        </PageContainer>
    )
}

export default IndemnityForm
