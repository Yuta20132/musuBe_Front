import React, {useState}  from 'react'
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


const theme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5', // AppBarの背景色
      },
      secondary: {
        main: '#f50057', // ボタンなどの色
      },
    },
    typography: {
      h6: {
        color: '#ffffff', // タイトルのテキスト色
      },
      button: {
        color: '#ffffff', // ボタンのテキスト色
      },
    },
  });


const Header = () => {
    return (
        <ThemeProvider theme={theme}>
    <Box sx={{flexGrow:1}}>
        <AppBar 
        position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          musuBe(仮)
        </Typography>
        <Button color="inherit">ログイン</Button>
        <Button color="inherit">登録</Button>
      </Toolbar>
    </AppBar>
    </Box></ThemeProvider>
    )
}

export default Header
