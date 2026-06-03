import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { Box, FormControl, MenuItem, Select, Typography, useTheme } from "@mui/material"
import { ExpandMore, Language } from "@mui/icons-material"
import { gsap } from "gsap"

const languages = [
  { code: "es", name: "Espanol", marker: "ES", nativeName: "Espanol" },
  { code: "en", name: "English", marker: "EN", nativeName: "English" },
]

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const theme = useTheme()
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)
  const selectRef = useRef()

  useEffect(() => {
    gsap.from(selectRef.current, {
      duration: 0.6,
      x: 12,
      opacity: 0,
      ease: "power2.out",
      delay: 0.45,
    })
  }, [])

  const changeLanguage = (lng) => {
    gsap.to(selectRef.current, {
      scale: 0.98,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        i18n.changeLanguage(lng)
        setCurrentLanguage(lng)
      },
    })
  }

  const current = languages.find((lang) => lang.code === currentLanguage) || languages[0]

  return (
    <Box ref={selectRef}>
      <FormControl size="small" sx={{ minWidth: 112 }}>
        <Select
          value={currentLanguage}
          onChange={(e) => changeLanguage(e.target.value)}
          displayEmpty
          variant="outlined"
          IconComponent={(props) => (
            <ExpandMore {...props} sx={{ color: theme.palette.text.secondary, right: 8 }} />
          )}
          renderValue={() => (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
              <Language sx={{ color: "primary.main", fontSize: "1.1rem" }} />
              <Typography variant="body2" sx={{ fontWeight: 700, color: "text.primary" }}>
                {current.marker}
              </Typography>
            </Box>
          )}
          sx={{
            backgroundColor: theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.04)"
              : "rgba(255, 255, 255, 0.62)",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 1.5,
            transition: "background-color 0.2s ease, border-color 0.2s ease",
            "&:hover": {
              backgroundColor: theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(255, 255, 255, 0.82)",
              borderColor: "primary.main",
            },
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              py: 1,
              color: "text.primary",
            },
          }}
        >
          {languages.map((language) => (
            <MenuItem
              key={language.code}
              value={language.code}
              sx={{
                transition: "background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                <Typography
                  variant="caption"
                  sx={{
                    width: 30,
                    height: 24,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 1,
                    color: "primary.main",
                    fontWeight: 700,
                  }}
                >
                  {language.marker}
                </Typography>
                <Box>
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 650 }}>
                    {language.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {language.nativeName}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default LanguageSelector
