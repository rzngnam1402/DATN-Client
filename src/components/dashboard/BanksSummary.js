import React from 'react';
import CustomSelect from '../forms/theme-elements/CustomSelect';
import {
  MenuItem,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  TableContainer,
  Stack,
} from '@mui/material';
import TopPerformerData from './TopPerformerData';
import DashboardCard from '../shared/DashboardCard';
import { formatMoney } from '../../utils/money';

const performers = TopPerformerData;

const BanksSummary = () => {
  // for select
  const [month, setMonth] = React.useState('3');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <DashboardCard
      title="Banks Summary"
      subtitle="Total numbers"
      action={
        <CustomSelect
          labelId="month-dd"
          id="month-dd"
          size="small"
          value={month}
          onChange={handleChange}
        >
          <MenuItem value={1}>2022</MenuItem>
          <MenuItem value={2}>2023</MenuItem>
          <MenuItem value={3}>2024</MenuItem>
        </CustomSelect>
      }
    >
      <TableContainer>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>Bank Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}> Applications</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}> Guarantees</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>Total amount</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {performers.map((basic) => (
              <TableRow key={basic.id}>
                <TableCell>
                  <Typography variant='h6' color="textSecondary" fontWeight={400}>
                    {basic.bankName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' color="textSecondary" fontWeight={400}>
                    {basic.total_applications} applications(s)
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' color="textSecondary" fontWeight={400}>
                    {basic.total_guarantees} guarantee(s)
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">{formatMoney(basic.budget, 'USD')} </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardCard>
  );
};

export default BanksSummary;
