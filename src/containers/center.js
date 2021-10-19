import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserCard from '../components/center panel components/user card/user card';
import PostCard from '../components/center panel components/postcard';
import Post from '../components/center panel components/Post/posts';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




export default function CenterStack() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1,  width: '100%', borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered variant='fullWidth'>
          <Tab label="Community" {...a11yProps(0)} />
          <Tab label="See What's Trending" {...a11yProps(1)} />
          <Tab label="My page" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      Community
      </TabPanel>
      <TabPanel value={value} index={1}>
      See What's Trending
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Stack spacing={3}>
        <UserCard/>
        <PostCard/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
      </Stack>
      </TabPanel>
    </Box>
  );
}
