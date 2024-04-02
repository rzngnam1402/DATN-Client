import { FormControlLabel, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox'

const TermAndConditions = () => {
    return (
        <Box pt={3}>
            <Typography variant="h5">Terms and condition</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
                1. We shall indemnify you and at all times keep you fully and completely indemnified
                from and against all claims and demands, actions and proceedings, losses and expenses
                (including legal cost on a full indemnity basis) and all other liabilities of whatsoever
                nature of description which may be made or taken or incurred or suffered by you in connection
                with or in any manner arising out of the said Letter of Guarantee and any extension or renewal
                thereof and We further agree that our liability aforesaid shall be a continuing ability and shall
                remain in full force and effect until your liability under the said Letter of Guarantee and any
                extension or renewal thereof is discharged in full and has expired.
            </Typography>
            <FormControlLabel
                control={<CustomCheckbox defaultChecked />}
                label="Agree with terms?"
            />
        </Box>
    )
}

export default TermAndConditions
