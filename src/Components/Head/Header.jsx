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
        backdropFilter: "blur(14px)",
        backgroundColor:
          mode === "dark"
            ? "rgba(17, 16, 15, 0.82)"
            : "rgba(247, 245, 241, 0.84)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: { xs: 64, md: 72 }, px: { xs: 2, md: 4 } }}>
         <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Slide direction="right" in={true} timeout={800}>
            <img
              src={mode === "dark" ? LogoPrincLight : LogoPrincDark}
              alt="Logo"
              style={{
                width: 40,
                height: 40,
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-1px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            />
          </Slide>

          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "text.primary",
              fontWeight: 700,
              letterSpacing: "-0.01em",
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
                  borderRadius: 1,
                  px: 1.5,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 6,
                    left: 12,
                    right: 12,
                    height: "1px",
                    backgroundColor: "primary.main",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.2s ease",
                  },
                  "&:hover": {
                    color: "text.primary",
                    backgroundColor: "action.hover",
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
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ border: "1px solid", borderColor: "divider", borderRadius: 1.5 }}>
              <MenuIcon sx={{ color: "text.primary" }} />
            </IconButton>
          )}

          {/* Botón de tema - desktop only */}
          {!isMobile && (
            <IconButton onClick={toggleMode} sx={{ border: "1px solid", borderColor: "divider", borderRadius: 1.5 }}>
              {mode === "dark" ? (
                <Brightness7 sx={{ color: "primary.light" }} />
              ) : (
                <Brightness4 sx={{ color: "primary.main" }} />
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
            width: 280,
            backgroundColor: "background.paper",
            borderLeft: "1px solid",
            borderColor: "divider",
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
            <IconButton onClick={toggleMode} sx={{ border: "1px solid", borderColor: "divider", borderRadius: 1.5 }}>
              {mode === "dark" ? (
                <Brightness7 sx={{ color: "primary.light" }} />
              ) : (
                <Brightness4 sx={{ color: "primary.main" }} />
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
