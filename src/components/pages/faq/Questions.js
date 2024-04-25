import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Divider, Box } from '@mui/material';
import { IconChevronDown } from '@tabler/icons';

const Questions = () => {
  return (
    <Box>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={8}>
          <Typography variant="h3" textAlign="center" mb={1}>Frequently asked questions</Typography>
          <Typography variant="h6" fontWeight={400} color="textSecondary" textAlign="center" mb={4}>Get to know more about ready-to-use banker guarantee service</Typography>
          <Accordion elevation={9}>
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" px={2} py={1}>What is a Bank Guarantee?</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography variant="subtitle1" pt={1} px={2} color="textSecondary">
                A bank guarantee is a promise from a lending institution that ensures the debtor&apos;s liabilities are covered in the event that the debtor fails to fulfill the contractual obligations to a third party. Bank guarantees help businesses gain credibility by showing they are financially stable enough to meet their contractual obligations.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={9}>
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6" px={2} py={1}>Who can apply for a Bank Guarantee on VieGuarantee?</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography variant="subtitle1" pt={1} px={2} color="textSecondary">
                Our services are available to both individuals and businesses that meet our eligibility criteria.
                These typically include having a registered business, a clear financial history, and the capability
                to meet the guarantee&apos;s terms. Detailed eligibility criteria are available on our application portal.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={9}>
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography variant="h6" px={2} py={1}>How long does it take to process a Bank Guarantee?
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography variant="subtitle1" pt={1} px={2} color="textSecondary">
                The processing time can vary based on the complexity of the guarantee and the completeness
                of the application. Generally, it takes from 3 to 5 business days after
                receiving all necessary documents and application forms.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={9}>
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography variant="h6" px={2} py={1}>Is my information secure on VieGuarantee?
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography variant="subtitle1" pt={1} px={2} color="textSecondary">
                Yes, your security is our top priority.
                VieGuarantee uses advanced security measures to protect your data,
                including digital signature technology, secure data storage solutions,
                and compliance with international data protection regulations.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box >
  );
};

export default Questions;
