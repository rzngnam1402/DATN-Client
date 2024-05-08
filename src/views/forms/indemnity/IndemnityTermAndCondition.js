import { FormControlLabel, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox'

const IndemnityTermAndCondition = () => {
    return (
        <Box pt={3}>
            <Typography variant="h5">Terms and condition</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
                1. You agree to comply with all applicable laws and regulations and to ensure that all information provided during the application process is accurate and truthful.
                <br /> <br />
                2. These Terms will be governed by and interpreted according to the laws of the jurisdiction in which our company is registered, without regard to its conflict of law principles.
                <br /> <br />
                3. If you have any questions about these Terms, please contact us at support@vieguarantee.com.
            </Typography>
            <FormControlLabel
                control={<CustomCheckbox defaultChecked />}
                label="Agree with terms?"
                sx={{ mt: 3 }}
            />
        </Box>
    )
}

export default IndemnityTermAndCondition
