import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Box, Typography, Select, MenuItem, FormControl, useTheme } from "@mui/material"
import { Language, ExpandMore } from "@mui/icons-material"
import { gsap } from "gsap"

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const theme = useTheme()
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)
  const selectRef = useRef()

  const languages = [
    { code: "es", name: "Español", flag: "🇪🇸", nativeName: "Español" },
    { code: "en", name: "English", flag: "🇺🇸", nativeName: "English" },
  ]

  useEffect(() => {
    gsap.from(selectRef.current, {
      duration: 0.8,
      x: 20,
      opacity: 0,
      ease: "back.out(1.7)",
      delay: 0.7
    })
  }, [])

  const changeLanguage = (lng) => {
    gsap.to(selectRef.current, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        i18n.changeLanguage(lng)
        setCurrentLanguage(lng)
      }
    })
  }

  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === currentLanguage) || languages[0]
  }

  return (
    <Box ref={selectRef}>
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <Select
          value={currentLanguage}
          onChange={(e) => changeLanguage(e.target.value)}
          displayEmpty
          variant="outlined"
          sx={{
            backgroundColor: theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.08)'
              : 'rgba(0, 0, 0, 0.05)',
            borderRadius: '20px',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.12)'
                : 'rgba(0, 0, 0, 0.08)',
              boxShadow: `0 0 0 2px ${theme.palette.primary.main}40`
            },
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            '& .MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              py: 1,
              color: theme.palette.text.primary
            },
          }}
          IconComponent={(props) => (
            <ExpandMore 
              {...props} 
              sx={{ 
                color: theme.palette.text.secondary,
                right: 8
              }} 
            />
          )}
          renderValue={(selected) => {
            const lang = getCurrentLanguage()
            return (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Language 
                  sx={{ 
                    color: theme.palette.mode === "dark" 
                      ? theme.palette.primary.light 
                      : theme.palette.primary.main,
                    fontSize: '1.2rem'
                  }} 
                />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 'bold',
                    color: theme.palette.text.primary
                  }}
                >
                  {lang.code.toUpperCase()}
                </Typography>
              </Box>
            )
          }}
        >
          {languages.map((language) => (
            <MenuItem 
              key={language.code} 
              value={language.code}
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.12)'
                    : 'rgba(0, 0, 0, 0.08)',
                  transform: 'translateX(5px)'
                },
                '& .MuiTypography-body2': {
                  color: theme.palette.text.primary
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                <span style={{ fontSize: '1.5em' }}>{language.flag}</span>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'medium', color: theme.palette.text.primary }}>
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