import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { Fragment,useState } from 'react';
import Theme from './assets/theme/Theme'
import MyAppRoutes from './pages/MyAppRoutes';


function App({history}) {
  let [theme,setTheme] = useState('light')
  const themeSelected = createTheme(Theme(theme));

  const themeHandler = (data)=> {
    data ? setTheme('light'):setTheme('dark')
  }
  return (
    <Fragment>
      <ThemeProvider theme={themeSelected}>
        <MyAppRoutes history={history} themeSend={themeHandler} />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
