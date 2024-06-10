import React, { useState } from 'react'
import { useNavigate } from 'react-router';
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
import { formatMoney } from '../../../utils/money';

import { Viewer } from '@react-pdf-viewer/core';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../forms/theme-elements/CustomTextField';


const ClientIndemnityCollapsible = ({ indemnity = {} }) => {
    const navigate = useNavigate();
    const fullScreenPluginInstance = fullScreenPlugin();
    const getFilePluginInstance = getFilePlugin({
        fileNameGenerator: (file) => {
            const fileName = file.name.substring(file.name.lastIndexOf('F') + 1);
            return (fileName);
        },
    });
    const { DownloadButton } = getFilePluginInstance;
    const { EnterFullScreenButton } = fullScreenPluginInstance;
    const [panel, setPanel] = useState({
        panel1: false,
        panel2: false,
        panel3: true,
    });
    const handleToggle = (panelName) => {
        setPanel((prevToggle) => ({
            ...prevToggle,
            [panelName]: !prevToggle[panelName],
        }));
    }
    const guarantee = indemnity.guarantee

    return (
        <>
            <Accordion elevation={9} sx={{ mb: 2 }} expanded={panel.panel1} onChange={() => handleToggle('panel1')}>
                <AccordionSummary
                    expandIcon={<IconChevronDown size="20" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6">Letter of Guarantee</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={3}>

                        <Grid item xs={12} sm={2} >
                        </Grid>
                        <Grid item xs={12} sm={8} alignItems="center">
                            <Box
                                sx={{
                                    display: 'flex',
                                    mt: 3,
                                }}
                            >
                                <Viewer
                                    fileUrl={guarantee?.docURL}
                                    plugins={[fullScreenPluginInstance, getFilePluginInstance]}
                                />
                                <Box name="pdf-button"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        mt: 3,
                                    }}>
                                    <EnterFullScreenButton />
                                    <DownloadButton />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            {indemnity?.relatedFile ? (<Accordion elevation={9} sx={{ mb: 2 }} expanded={panel.panel2} onChange={() => handleToggle('panel2')}>
                <AccordionSummary
                    expandIcon={<IconChevronDown size="20" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h6">Related File</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={2} >
                        </Grid>
                        <Grid item xs={12} sm={8} alignItems="center">
                            <Box
                                sx={{
                                    display: 'flex',
                                    mt: 3,
                                }}
                            >
                                <Viewer
                                    fileUrl={indemnity?.relatedFile}
                                    plugins={[fullScreenPluginInstance, getFilePluginInstance]}
                                />
                                <Box name="pdf-button-2"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        mt: 3,
                                    }}>
                                    <EnterFullScreenButton />
                                    <DownloadButton />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>) : (<Accordion elevation={9} sx={{ mb: 2 }} expanded={panel.panel2} onChange={() => handleToggle('panel2')}>
                <AccordionSummary
                    expandIcon={<IconChevronDown size="20" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h6">Related File</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={5} >
                        </Grid>
                        <Grid item xs={12} sm={7} alignItems="center">
                            <Box
                                sx={{
                                    display: 'flex',
                                    mt: 3,
                                }}
                            >
                                No data
                            </Box>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>)}

            <Accordion elevation={9} sx={{ mb: 2 }} expanded={panel.panel3} onChange={() => handleToggle('panel3')}>
                <AccordionSummary
                    expandIcon={<IconChevronDown size="20" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography variant="h6">Indemnity Detail</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <CustomFormLabel htmlFor="Reference Code" sx={{ mt: 0 }}>
                                Reference Code
                            </CustomFormLabel>
                            <CustomTextField
                                id="Reference Code"
                                placeholder="Reference Code"
                                fullWidth
                                value={`${guarantee?.guarantee_id}-${guarantee?.ApplicantDetail.applicant_detail_id}-${guarantee?.BeneficiaryDetail.beneficiary_detail_id}`}
                                InputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CustomFormLabel htmlFor="status" sx={{ mt: 0 }}>
                                Status
                            </CustomFormLabel>
                            <Chip
                                sx={{
                                    backgroundColor:
                                        indemnity.status === 'FULFILLED'
                                            ? (theme) => theme.palette.success.light
                                            : indemnity.status === 'REJECTED'
                                                ? (theme) => theme.palette.error.light
                                                : (theme) => theme.palette.warning.light
                                }}
                                size=""
                                label={indemnity.status}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomFormLabel htmlFor="claim-amount" sx={{ mt: 0 }}>
                                Claim Amount
                            </CustomFormLabel>
                            {
                                guarantee && (
                                    <CustomTextField
                                        id="Claim Amount"
                                        placeholder="Claim Amount"
                                        fullWidth
                                        value={formatMoney(guarantee.amount, guarantee.currency)}
                                        InputProps={{ readOnly: true }} />)
                            }
                        </Grid>
                        <Grid item xs={12}>
                            <CustomFormLabel htmlFor="reason" sx={{ mt: 0 }}>
                                Claim Reason
                            </CustomFormLabel>
                            <CustomTextField
                                id="reason"
                                placeholder="Indemnity Claim Reason"
                                multiline
                                fullWidth
                                value={indemnity.reason}
                                InputProps={{ readOnly: true }} />
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Grid item sx={{
                                mt: 3,
                            }}>
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
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default ClientIndemnityCollapsible
