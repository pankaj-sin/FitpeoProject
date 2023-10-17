import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const OverviewBudget = (props) => {
  const { difference, positive = false, sx, value } = props;
  
  return (
    <Card sx={sx}>
      <CardContent sx={{display:'flex' ,justifyContent:'space-between',gap:'10px'}} >
    <Avatar
      sx={{
        backgroundColor: 'error.main',
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
          direction="column"
          justifyContent="space-between"
          spacing={0}
        >
          <Stack spacing={0}>
            <Typography
              color="text.secondary"
              // variant="overline"
            >
              Earning
            </Typography>
            <Typography variant="h6">
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

OverviewBudget.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
