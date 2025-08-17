import { AppBar, Toolbar, Typography, IconButton, Box, Slide } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguajeSelector";
import LogoPrincDark from '../../assets/image-removebg-preview.png'
import LogoPrincLight from '../../assets/image-removebg-preview-light.png'

const Header = ({ mode, toggleMode }) => {
  const { t } = useTranslation();

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

        {/* Controles lado derecho */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {/* Botón de tema */}
          <IconButton onClick={toggleMode}>
            {mode === "dark" ? (
              <Brightness7 sx={{ color: "#ff6f60" }} /> // Sol naranja
            ) : (
              <Brightness4 sx={{ color: "#e53935" }} /> // Luna roja
            )}
          </IconButton>

          {/* Selector de idioma */}
          <LanguageSelector />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
