import { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Slide, Button, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { Brightness4, Brightness7, Menu as MenuIcon } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguajeSelector";
import LogoPrincDark from '../../assets/image-removebg-preview.png'
import LogoPrincLight from '../../assets/image-removebg-preview-light.png'

const navItems = [
  { label: "navbar.about", id: "about" },
  { label: "navbar.technologies", id: "technologies" },
  { label: "navbar.projects", id: "projects" },
  { label: "navbar.contact", id: "contact" },
];

const Header = ({ mode, toggleMode }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        backgroundColor: (theme) =>
          mode === "dark"
            ? "rgba(18, 18, 18, 0.8)"
            : "rgba(255, 255, 255, 0.8)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
         <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Slide direction="right" in={true} timeout={800}>
            <img
              src={mode === "dark" ? LogoPrincLight : LogoPrincDark}
              alt="Logo"
              style={{
                width: 40,
                height: 40,
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "rotate(15deg) scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "rotate(0) scale(1)")
              }
            />
          </Slide>

          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "text.primary",
              textShadow:
                mode === "dark"
                  ? "0 1px 2px rgba(0,0,0,0.7)"
                  : "0 1px 2px rgba(255,255,255,0.7)",
            }}
          >
            {t("navbar.title")}
          </Typography>
        </Box>

        {/* Nav links - desktop */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  color: "text.secondary",
                  textTransform: "none",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "primary.main",
                    transform: "scaleX(0)",
                    transformOrigin: "center",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover": {
                    color: "text.primary",
                    backgroundColor: "transparent",
                    "&::after": {
                      transform: "scaleX(1)",
                    },
                  },
                }}
              >
                {t(item.label)}
              </Button>
            ))}
          </Box>
        )}

        {/* Controles lado derecho */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {/* Hamburger menu - mobile */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: "text.primary" }} />
            </IconButton>
          )}

          {/* Botón de tema - desktop only */}
          {!isMobile && (
            <IconButton onClick={toggleMode}>
              {mode === "dark" ? (
                <Brightness7 sx={{ color: "#ff6f60" }} /> // Sol naranja
              ) : (
                <Brightness4 sx={{ color: "#e53935" }} /> // Luna roja
              )}
            </IconButton>
          )}

          {/* Selector de idioma - desktop only */}
          {!isMobile && <LanguageSelector />}
        </Box>
      </Toolbar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 250,
            backgroundColor: mode === "dark" ? "#121212" : "#ffffff",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
              >
                <ListItemText
                  primary={t(item.label)}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    color: "text.secondary",
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, px: 2, pt: 1 }}>
            <IconButton onClick={toggleMode}>
              {mode === "dark" ? (
                <Brightness7 sx={{ color: "#ff6f60" }} />
              ) : (
                <Brightness4 sx={{ color: "#e53935" }} />
              )}
            </IconButton>
            <LanguageSelector />
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
