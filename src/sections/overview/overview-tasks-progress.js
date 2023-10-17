import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import PropTypes from 'prop-types';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';

export const OverviewTasksProgress = (props) => {
  const { difference,positive = false,value, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent  sx={{display:'flex' ,justifyContent:'space-between',gap:'10px'}}>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 100,
              width: 100
            }}
          >
            <SvgIcon>
              <ListBulletIcon />
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
              gutterBottom
              // variant="overline"
            >
       Balance            
       </Typography>
            <Typography variant="h5">
              ${value}
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
        {/* <Box sx={{ mt: 3 }}>
          <LinearProgress
            value={value}
            variant="determinate"
          />
        </Box> */}
      </CardContent>
    </Card>
  );
};

OverviewTasksProgress.propTypes = {
  value: PropTypes.number.isRequired,
  sx: PropTypes.object
};
