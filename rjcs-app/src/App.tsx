import { useEffect, useMemo,useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { NoPage } from "./pages/NoPage";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerAppBar from './pages/DrawerAppBar';

function App() {
  const lightTheme = "light"
  const darkTheme = "dark"
  const [mode, setMode] = useState<'light' | 'dark'>(lightTheme);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  function toggleColorMode(){
    if (mode === darkTheme) {
      localStorage.setItem("theme", lightTheme)
      setMode(lightTheme)
    } else {
      localStorage.setItem("theme", darkTheme)
      setMode(darkTheme)
    }
  }
  useEffect(()=>{
    if(localStorage.getItem("theme")==null){
      localStorage.setItem("theme", lightTheme)
      setMode(lightTheme)
    }else{
      const localTheme = localStorage.getItem("theme")===lightTheme?lightTheme:darkTheme
      setMode(localTheme)
    }
  },[])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DrawerAppBar toggleColorMode={toggleColorMode} theme={theme} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
