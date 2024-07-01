import * as React from 'react';
import { ITab } from '../../../Interfaces/ITab';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

interface ITabsProp {
    tabs_data: Array<ITab>
} 

const TabNavigation = ({tabs_data}:ITabsProp) => {
  const [value, setValue] = React.useState<string>("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ width: '100%' }} className="tab-navigation--box">
        <Tabs 
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            centered
            className='tab-navigation--tabs'
        >
            {
              tabs_data?.map((tab:ITab, index) => (
                  <Tab className={'tab-navigation--tabs--tab tab_item' + tab.color} key={index} label={ tab.label } value={ tab.value }/>
              ))
            }
        </Tabs>
        {
          tabs_data?.map((tab:ITab, index) => (
              <TabPanel className={'tab-navigation--tab-panel'} key={index} value={ tab.value }> { tab.content } </TabPanel>
          ))
        }
      </Box>
    </TabContext>
  )
}

export default TabNavigation;