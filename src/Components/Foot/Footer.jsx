import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  IconButton,
  Divider,
  useTheme,
  Paper
} from "@mui/material"
import { 
  GitHub, 
  LinkedIn, 
  Email
} from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const footerRef = useRef()
  const contentRef = useRef()
  const socialRef = useRef()

  const socialLinks = [
    {
      icon: <GitHub />,
      url: "https://github.com/Angel-ISO",
      label: "GitHub",
      color: "#333"
    },
    {
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/in/angel-gabriel-ortega/",
      label: "LinkedIn", 
      color: "#0077B5"
    },
    {
      icon: <Email />,
      url: "mailto:angelgabriel@example.com",
      label: "Email",
      color: "#EA4335"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(socialRef.current?.children || [], {
        duration: 0.6,
        scale: 0,
        rotation: 180,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: socialRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box
      component="footer"
      ref={footerRef}
      sx={{
        position: "relative",
        overflow: "hidden",
        background: theme.palette.mode === 'dark'
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)"
          : "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        color: "white",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: -50,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "4px",
          background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box ref={contentRef}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                }}
              >
                {t("footer.title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.6,
                  mb: 2,
                }}
              >
                {t("footer.description")}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Typography variant="body2" color="rgba(255,255,255,0.7)">
                  Bucaramanga, Colombia
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 3, color: "rgba(255,255,255,0.9)" }}
                >
                  {t("footer.connect")}
                </Typography>
                <Box
                  ref={socialRef}
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: { xs: "center", md: "flex-end" },
                    mb: 3,
                  }}
                >
                  {socialLinks.map((social, index) => (
                    <Paper
                      key={index}
                      elevation={4}
                      sx={{
                        borderRadius: "50%",
                        overflow: "hidden",
                        background: "rgba(255,255,255,0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <IconButton
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        sx={{
                          color: "white",
                          p: 1.5,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: social.color,
                            transform: "translateY(-3px) scale(1.1)",
                            background: "rgba(255,255,255,0.1)",
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Divider 
            sx={{ 
              my: 4, 
              borderColor: "rgba(255,255,255,0.1)",
              "&::before, &::after": {
                borderColor: "rgba(255,255,255,0.1)",
              }
            }} 
          />

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="body2" color="rgba(255,255,255,0.7)" textAlign="center">
                {t("footer.copyright", { year: new Date().getFullYear() })}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100px",
          background: `radial-gradient(ellipse at center, rgba(${theme.palette.primary.main.replace('#', '')}, 0.1) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
    </Box>
  )
}

export default Footer