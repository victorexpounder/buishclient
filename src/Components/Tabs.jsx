import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ListAltOutlined, MenuBookOutlined, PhoneMissed } from '@mui/icons-material';
import CourseCard from './CourseCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

 

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className='py-3'>
         {children}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const studydata = [
    {
      img: '/courseimg.png',
      title: 'Computer Graphics',
      desc: 'Hardware Aspect',
      time: 40,
      rating: 4.2,
      std: 158
    },
    {
      img: '/courseimg2.png',
      title: 'Modelling',
      desc: 'Clipping Ai',
      time: 120,
      rating: 4.2,
      std: 158
    }
  ]
  const pracdata = [
    {
      img: '/hierarchy.png',
      title: 'Modelling',
      desc: 'Clipping Ai',
      time: 120,
      rating: 4.2,
      std: 75
    },
    {
      img: '/courseimg3.png',
      title: 'Computer Graphics',
      desc: 'Hardware Aspect',
      time: 40,
      rating: 4.2,
      std: 158
    }
  ]

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab icon={<MenuBookOutlined />} iconPosition="start" label="Study" {...a11yProps(0)} />
          <Tab icon={<ListAltOutlined />} iconPosition="start" label="Practice" {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction} style={{width: '100%'}}>
        <div className='w-full flex max-sm:overflow-scroll md:grid grid-cols-2 gap-4'>
            {studydata.map((datad, index)=>(
                   <a href={`/course/8888`} key={index}><CourseCard data={datad} /></a> 
                ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <div className='w-full flex max-sm:overflow-scroll md:grid grid-cols-2 gap-4'>
            {pracdata.map((datad, index)=>(
                <a href={`/course/8888`} key={index}><CourseCard data={datad}/></a> 
            ))}
        </div>
      </TabPanel>
      
    </Box>
  );
}
