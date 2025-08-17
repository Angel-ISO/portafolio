import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { useThemeMode } from "./hooks/useThemeMode";
import Header from "./Components/Head/Header";
import Hero from "./Components/Hero/Hero";
import Technologies from "./Components/Technologies/Technologies";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Foot/Footer";
import ProjectModal from "./Components/Projects/ProjectModal";

function App() {
  const { t } = useTranslation();
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
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            zIndex: 0,
            background: mode === "dark"
              ? "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)"
              : "radial-gradient(125% 125% at 50% 100%, #ffffff 40%, #ffeaea 100%)",
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Header mode={mode} toggleMode={toggleMode} />
          <Hero />
          <Technologies />
          <Projects handleOpenModal={handleOpenModal} />
          <Contact />
          <Footer />
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