import React, { useEffect, useState } from 'react';
import { CheckAuth } from '../../Authentication/RetrieveAuthUser';
import Dashboard from '../Dashboard/Dashboard';
import { getLabelByName } from "../../Exports/Labels";
import TabNavigation from '../TabNavigation/TabNavigation';
import tabs from '../../../API-Labels/defaultTabsHomePage.json'
import { useLocation } from "react-router-dom";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

const HomePage = () => {
  const isLogged = CheckAuth();
  const [fromLogout, setFromLogout] = useState<boolean>(false)
  const classes = "homepage--wrapper " + (isLogged ? "auth-true" : "auth-false");

  let location = useLocation();
  useEffect(() => {
    if(location.state?.fromLogout && location.state.fromLogout === true) {
      setFromLogout(true);
      location.state.fromLogout = false;
    }
  }, [location.state]);

  return (
    <div className={ classes }>
      { fromLogout ?? (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            { getLabelByName("home_page_success_logout_message") }
          </Alert>
        )
      }
      { isLogged ? (
          <Dashboard/>
        ) : (
          <div>
            <label className='homepage--auth-false--label'>{ getLabelByName("home_page_default_message") }</label>
            <TabNavigation tabs_data={ tabs }></TabNavigation>
          </div>
        )
      }
    </div>
  );
}

export default HomePage;
