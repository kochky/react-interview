import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero'
import MoviesList from './components/MoviesList';


import { createTheme,ThemeProvider  } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    top:{
      main:"#00A0B0",
    },
    flop:{
      main:"#CF5C78",
    },
    gray:{
      main:"#939597"
    }
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Hero/>
      <MoviesList/>
    </ThemeProvider>
  )
}

export default App;
