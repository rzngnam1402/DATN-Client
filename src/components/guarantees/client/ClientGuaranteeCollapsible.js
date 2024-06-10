import React, { useEffect, useState } from 'react';
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
} from '@mui/material';

import { IconChevronDown } from '@tabler/icons';

import { Viewer } from '@react-pdf-viewer/core';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import GuaranteeInfoPanel from '../GuaranteeInfoPanel';

const ClientGuaranteeCollapsible = ({ guarantee = {} }) => {
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
        panel3: false,
        panel4: true,
    });

    const handleToggle = (panelName) => {
        setPanel((prevToggle) => ({
            ...prevToggle,
            [panelName]: !prevToggle[panelName],
        }));
    }
    console.log("Guarantee:", guarantee)
    return (
        <>
            {guarantee && guarantee.ApplicantDetail && (
                <>
                    <GuaranteeInfoPanel panel={panel} guarantee={guarantee} handleToggle={handleToggle} />
                    <Accordion elevation={9} sx={{ mb: 2 }} expanded={panel.panel4} onChange={() => handleToggle('panel4')}>
                        <AccordionSummary
                            expandIcon={<IconChevronDown size="20" />}
                            aria-controls="panel4a-content"
                            id="panel4a-header"
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
                                            fileUrl={guarantee.docURL || "invalid"}
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
            )}
        </ >
    );
};

export default ClientGuaranteeCollapsible;
