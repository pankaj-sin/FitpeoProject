import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import PropTypes from 'prop-types';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const OverviewTotalProfit = (props) => {
  const {difference, positive = false, value, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent  sx={{display:'flex' ,justifyContent:'space-between',gap:'10px'}}>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 100,
              width: 100
            }}
          >
            <SvgIcon>
              <CurrencyDollarIcon />
            </SvgIcon>
          </Avatar>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              // variant="overline"
            >
              Total Sales
            </Typography>
            <Typography variant="h5">
              {value}
            </Typography>
            {difference && (
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
            sx={{ mt: 1 }}
          >
            <Stack
              // alignItems="center"
              direction="row"
              spacing={0.2}
            >
              <SvgIcon
                color={positive ? 'success' : 'error'}
                fontSize="small"
              >
                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography
                color={positive ? 'success.main' : 'error.main'}
                variant="body2"
              >
                {difference}%
              </Typography>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              this month
            </Typography>
            </Stack>
          </Stack>
        )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewTotalProfit.propTypes = {
  value: PropTypes.string,
  sx: PropTypes.object
};
