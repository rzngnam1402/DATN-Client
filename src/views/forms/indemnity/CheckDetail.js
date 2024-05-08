import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField'
import GuaranteeInfoPanel from '../../../components/guarantees/GuaranteeInfoPanel'
import axiosClient from '../../../axios/axios'
import { toast } from 'react-toastify'

const CheckDetail = ({ formData, setFormData }) => {
    const [isValid, setIsValid] = React.useState(false);
    const [guaranteeCode, setGuaranteeCode] = React.useState('');

    const [panel, setPanel] = React.useState({
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

    const handleGetDetail = () => {
        const guaranteeId = guaranteeCode.match(/\d+/);  // This regex matches the first sequence of digit characters
        axiosClient.get('guarantee/' + guaranteeId)
            .then((response) => {
                console.log(response.data)

                if (response.data.Indemnity) {
                    toast.error('Guarantee already have indemnity!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    return;
                }
                else if (response.data.status == 'ISSUED') {
                    setFormData({ ...formData, guarantee: response.data });
                }
                else {
                    toast.error('Guarantee is not yet issued!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const handleRefCodeChange = (event) => {
        const { value } = event.target
        const regex = /^\d+\.\d+\.\d+$/;
        setIsValid(regex.test(value));
        setGuaranteeCode(value)
    }
    return (
        <Box pt={3}>
            <Grid container spacing={18}>
                <Grid item xs={12} lg={6}>
                    <CustomFormLabel htmlFor="refCode">Enter Reference Code</CustomFormLabel>
                    <CustomTextField
                        id="refCode"
                        name="refCode"
                        variant="outlined"
                        fullWidth
                        onChange={handleRefCodeChange}
                        helperText={!isValid ? "Wrong reference code format" : ''}
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <CustomFormLabel htmlFor="refCode" >Check guarantee detail</CustomFormLabel>
                    <Button
                        sx={{ mt: '4px' }}
                        onClick={handleGetDetail}
                        disabled={!isValid}
                    >Check</Button>
                </Grid>
            </Grid>
            {
                formData.guarantee && (
                    <Accordion sx={{ mt: 6 }}>
                        <AccordionSummary>
                            <Typography variant="h6">Guarantee Information</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <GuaranteeInfoPanel panel={panel} guarantee={formData.guarantee} handleToggle={handleToggle} />
                        </AccordionDetails>
                    </Accordion>
                )
            }
        </Box >
    )
}

export default CheckDetail
