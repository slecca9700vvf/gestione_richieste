import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

export default function Tabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabs = [
    {
        label: "Item 1",
        value: "1"
    },
    {
        label: "Item 2",
        value: "2"
    },
    {
        label: "Item 3",
        value: "3"
    }
  ];

  return (
    // <Box sx={{ width: '100%', typography: 'body1' }}>
    //   <TabContext value={value}>
    //     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    //       <TabList onChange={handleChange} aria-label="lab API tabs example">
    //         { tabs.map() }
    //         <Tab label="Item One" value="1" />
    //         <Tab label="Item Two" value="2" />
    //         <Tab label="Item Three" value="3" />
    //       </TabList>
    //     </Box>
    //     <TabPanel value="1">Item One</TabPanel>
    //     <TabPanel value="2">Item Two</TabPanel>
    //     <TabPanel value="3">Item Three</TabPanel>
    //   </TabContext>
    // </Box>
    <div></div>
  )
}