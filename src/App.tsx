import './App.css';
import AppHeader from './components/AppHeader';
import Home from './components/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <AppHeader/>
        <Home />
        <About />
        <Skills />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
