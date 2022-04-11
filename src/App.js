import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero'
import MoviesList from './components/MoviesList';
import Footer from './components/Footer';


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
    },
    yellow:{
      main:"#F5DF4D"
    }
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='body-padding'>
        <Header/>
        <Hero/>
        <MoviesList/>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default App;
