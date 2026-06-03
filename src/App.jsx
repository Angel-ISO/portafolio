import { useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { useThemeMode } from "./hooks/useThemeMode";
import Header from "./Components/Head/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Technologies from "./Components/Technologies/Technologies";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Foot/Footer";
import ProjectModal from "./Components/Projects/ProjectModal";
import LineWaves from "./component/LineWaves";

function App() {
  const { theme, mode, toggleMode } = useThemeMode();
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          position: "relative",
          backgroundColor: "background.default",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Header mode={mode} toggleMode={toggleMode} />
          <Box sx={{ position: "relative", overflow: "hidden" }}>
            <Box sx={{ position: "absolute", inset: 0, zIndex: 0, opacity: mode === "dark" ? 0.45 : 0.28 }}>
              <LineWaves
                speed={0.3}
                innerLineCount={32}
                outerLineCount={36}
                warpIntensity={1}
                rotation={-45}
                edgeFadeWidth={0}
                colorCycleSpeed={1}
                brightness={0.2}
                color1="#ffffff"
                color2="#ffffff"
                color3="#ffffff"
                enableMouseInteraction
                mouseInfluence={2}
              />
            </Box>
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Hero />
              <About />
              <Technologies />
              <Projects handleOpenModal={handleOpenModal} />
              <Contact />
              <Footer />
            </Box>
          </Box>
          <ProjectModal
            open={openModal}
            handleClose={handleCloseModal}
            project={selectedProject}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App
