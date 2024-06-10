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
    CircularProgress,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Chip,
} from '@mui/material';

import { IconChevronDown, IconArrowRight } from '@tabler/icons';

import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';
import { Viewer } from '@react-pdf-viewer/core';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

import axiosClient from '../../../axios/axios';

import { useOverlay } from '../../../hooks/useOverlay';
import { Rnd } from 'react-rnd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../../store/user/UserSlice';
import CustomButtonDialog from '../../dialog/CustomButtonDialog';
import CustomRadio from '../../forms/theme-elements/CustomRadio';
import GuaranteeInfoPanel from '../GuaranteeInfoPanel';

const BankerGuaranteeCollapsible = ({ guarantee = {} }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const status = useSelector(state => state.user.status);
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUser());
        }
    }, [status, dispatch]);
    const [isSigning, setIsSigning] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    const [isIssuing, setIsIssuing] = useState(false);
    const [isSendingEmail, setIsSendingEmail] = useState(false);
    const [isDisableButton, setIsDisableButton] = useState(true);
    const [providerName, setProviderName] = useState('');
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

    const { overlay, setOverlay, hdStopDrag, hdStopResize, hdAddOverlay, hdRemoveOverlay, style } = useOverlay();
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
    };

    const handleProvider = (e) => {
        const { value } = e.target;
        setProviderName(() => ({ ...providerName, value }));
        setIsDisableButton(false);
    };

    const handleSign = () => {
        setIsSigning(true);
        axiosClient.post(`guarantee/sign/${guarantee.guarantee_id}`,
            {
                accountId: user.email,
                placeholder: JSON.stringify({
                    pageIndex: 0,
                    x: overlay?.x - 35,
                    y: overlay?.y,
                    width: overlay?.width,
                    height: overlay?.height
                }),
                signatureImageURL: user.signature,
                pdfFilePath: guarantee.docURL,
                providerName: providerName.value,
            }
        )
            .then((response) => {
                console.log(response);
                setIsSigning(false);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error)
                setIsSigning(false);
            })
    }

    const handleCheck = () => {
        setIsChecking(true);
        axiosClient.patch(`guarantee/${guarantee.guarantee_id}`,
            { status: 'NOT_ISSUED' }
        )
            .then((response) => {
                setIsChecking(false);
                window.location.reload()

            })
            .catch((error) => {
                console.log(error)
                setIsChecking(false);
            });
    }

    const handleIssue = () => {
        setIsIssuing(true);
        axiosClient.patch(`guarantee/${guarantee.guarantee_id}`,
            { status: 'ISSUED' }
        )
            .then((response) => {
                setIsSigning(false);
                window.location.reload()

            })
            .catch((error) => {
                console.log(error)
                setIsSigning(false);
            });
    }

    const handleSendNotification = () => {
        setIsSendingEmail(true);
        axiosClient.post('guarantee/email',
            {
                guaranteeId: guarantee.guarantee_id,
            })
            .then((response) => {
                console.log(response)
                setIsSendingEmail(false);
            })
            .catch((error) => {
                console.log(error)
                setIsSendingEmail(false);
            });
    }

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
                            <Typography variant="h6">Issue Guarantee</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>
                                {
                                    guarantee.docURL && !guarantee.signatureImg
                                        && user?.position == 'Manager' && guarantee.status == 'NOT_ISSUED' ? (
                                        <>
                                            <Grid item xs={12} sm={4} >
                                                <CustomFormLabel htmlFor="effective-date" sx={{ mt: 2 }}>
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
                                                <CustomFormLabel htmlFor="sign-guarantee" sx={{ mt: 4 }}>
                                                    Choose your signature
                                                </CustomFormLabel>
                                                <Typography>
                                                    Place your signature and select &quot;Sign this guarantee&quot; button below
                                                </Typography>
                                                <Button
                                                    sx={{ mt: 2 }}
                                                    onClick={() => {
                                                        setOverlay({
                                                            signatureImageURL: user.signature,
                                                            x: 0,
                                                            y: 0,
                                                            width: 200,
                                                            height: 200
                                                        })
                                                    }}>Choose signature</Button>
                                                <CustomFormLabel htmlFor="sign-guarantee" sx={{ mt: 4 }}>
                                                    Choose your provider
                                                </CustomFormLabel>
                                                <Typography>
                                                    Choose a digital signature provider
                                                </Typography>
                                                <FormControl component="fieldset" onChange={handleProvider} display="flex" alignItems="center" justifyContent="end" direction="row">
                                                    <RadioGroup name="provider" row >
                                                        <FormControlLabel
                                                            value="p12"
                                                            control={<CustomRadio />}
                                                            label="BSIGN"
                                                        />
                                                        <FormControlLabel
                                                            value="VNPT"
                                                            control={<CustomRadio />}
                                                            label="VNPT"
                                                        />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={8} alignItems="center">
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        mt: 3,
                                                    }}
                                                >
                                                    {
                                                        overlay && (
                                                            <Rnd
                                                                bounds="parent"
                                                                size={{ width: overlay?.width, height: overlay?.height }}
                                                                position={{ x: overlay?.x, y: overlay?.y }}
                                                                onDragStop={hdStopDrag}
                                                                onResizeStop={hdStopResize}
                                                                style={{
                                                                    zIndex: '999',
                                                                    border: '1px solid'
                                                                }}>
                                                                <img
                                                                    draggable="false"
                                                                    src={user.signature}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        margin: 'auto',
                                                                        zIndex: '999',
                                                                    }}
                                                                />
                                                            </Rnd>
                                                        )
                                                    }
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
                                        </>
                                    ) :
                                        <>
                                            <Grid item xs={12} sm={2} >
                                                <CustomFormLabel htmlFor="status" sx={{ mt: 2 }}>
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
                                            <Grid item xs={12} sm={8} alignItems="center">
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        mt: 3,
                                                    }}
                                                >
                                                    {
                                                        overlay && (
                                                            <Rnd
                                                                bounds="parent"
                                                                size={{ width: overlay?.width, height: overlay?.height }}
                                                                position={{ x: overlay?.x, y: overlay?.y }}
                                                                onDragStop={hdStopDrag}
                                                                onResizeStop={hdStopResize}
                                                                style={{
                                                                    zIndex: '999',
                                                                    border: '1px solid'
                                                                }}>
                                                                <img
                                                                    draggable="false"
                                                                    src={user.signature}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        margin: 'auto',
                                                                        zIndex: '999',
                                                                    }}
                                                                />
                                                            </Rnd>
                                                        )
                                                    }
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
                                            </Grid></>
                                }
                                {guarantee.signatureImg && guarantee.status == 'ISSUED' ?
                                    (<>
                                        <Grid container justifyContent="flex-end">
                                            <Grid item sx={{
                                                mt: 3,
                                            }}>
                                                <Stack direction="row" spacing={2}>
                                                    <Button
                                                        variant="outlined"
                                                        onClick={handleSendNotification}
                                                        sx={{
                                                            color: "primary",
                                                            backgroundColor: "white",
                                                            "&:hover": {
                                                                backgroundColor: "white",
                                                                color: "#4570EA",
                                                            }
                                                        }}>
                                                        {isSendingEmail ?
                                                            <>
                                                                Sending...
                                                                < CircularProgress
                                                                    color='primary'
                                                                    size={24} />
                                                            </>
                                                            : 'Send Notification'}
                                                    </Button>
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

                                    </>) :
                                    guarantee.signatureImg && guarantee.status == 'NOT_ISSUED' ?
                                        (<>
                                            <Grid item xs={12} sm={9} />
                                            <Grid item xs={12} sm={3}>
                                                <Stack direction="row" spacing={2}>
                                                    <CustomButtonDialog
                                                        name={isIssuing ? 'Issuing...' : 'Issue this guarantee'}
                                                        color='primary'
                                                        title='eGuarantee Insurance Confirmation'
                                                        message='Are you sure you want to issue this guarantee? Please confirm your action.'
                                                        handleSuccess={handleIssue}
                                                        icon={isIssuing ?
                                                            <CircularProgress
                                                                color='secondary'
                                                                size={24}
                                                            /> : <IconArrowRight />}
                                                        disabled={isIssuing}
                                                    />
                                                </Stack>
                                            </Grid>
                                        </>) :
                                        guarantee.status == 'UNCHECKED'
                                            && user?.position == 'Officer' ?
                                            (<>
                                                <Grid item xs={12} sm={9} />
                                                <Grid item xs={12} sm={3}>
                                                    <Stack direction="row" spacing={2}>
                                                        <CustomButtonDialog
                                                            name={isChecking ? 'Marking...' : 'Mark as checked'}
                                                            color='primary'
                                                            title='eGuarantee Checking Confirmation'
                                                            message='Are you sure you want to check this guarantee and move to manager to sign? Please confirm your action.'
                                                            handleSuccess={handleCheck}
                                                            icon={isChecking ?
                                                                <CircularProgress
                                                                    color='secondary'
                                                                    size={24}
                                                                /> : <IconArrowRight />}
                                                        />
                                                    </Stack>
                                                </Grid>
                                            </>)
                                            : <></>
                                }
                                {
                                    guarantee?.status == 'NOT_ISSUED' && !guarantee?.signatureImg && user?.position == 'Manager' &&
                                    (<>
                                        <Grid item xs={12} sm={9} />
                                        <Grid item xs={12} sm={3}>
                                            <Stack direction="row" spacing={2}>
                                                <CustomButtonDialog
                                                    name={isSigning ? 'Signing...' : 'Sign this guarantee'}
                                                    color='primary'
                                                    title='eGuarantee Signing Confirmation'
                                                    message='Are you sure you want to sign this guarantee and move to manager to sign? Please confirm your action.'
                                                    handleSuccess={handleSign}
                                                    icon={isSigning ?
                                                        <CircularProgress
                                                            color='secondary'
                                                            size={24}
                                                        /> : <IconArrowRight />}
                                                    disabled={isSigning || isDisableButton}
                                                />
                                            </Stack>
                                        </Grid>
                                    </>)
                                }
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </>
            )
            }
        </ >
    );
};

export default BankerGuaranteeCollapsible;
