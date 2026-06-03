import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  IconButton,
  Divider,
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
  const footerRef = useRef()
  const contentRef = useRef()
  const socialRef = useRef()

  const socialLinks = [
    {
      icon: <GitHub />,
      url: "https://github.com/Angel-ISO",
      label: "GitHub",
      color: "text.primary"
    },
    {
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/in/angel-gabriel-ortega/",
      label: "LinkedIn", 
      color: "primary.main"
    },
    {
      icon: <Email />,
      url: "mailto:angelgabrielorteg@gmail.com",
      label: "Email",
      color: "primary.main"
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
        backgroundColor: "background.paper",
        color: "text.primary",
        borderTop: "1px solid",
        borderColor: "divider",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "transparent",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: -50,
          left: "50%",
          transform: "translateX(-50%)",
          width: "120px",
          height: "1px",
          backgroundColor: "primary.main",
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
                  color: "text.primary",
                  mb: 2,
                }}
              >
                {t("footer.title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.6,
                  mb: 2,
                }}
              >
                {t("footer.description")}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Bucaramanga, Colombia
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 3, color: "text.primary" }}
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
                      elevation={0}
                      sx={{
                        borderRadius: 1.5,
                        overflow: "hidden",
                        backgroundColor: "background.default",
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <IconButton
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        sx={{
                          color: "text.primary",
                          p: 1.5,
                          transition: "transform 0.2s ease, color 0.2s ease, background-color 0.2s ease",
                          "&:hover": {
                            color: social.color,
                            transform: "translateY(-1px)",
                            backgroundColor: "action.hover",
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
              borderColor: "divider",
              "&::before, &::after": {
                borderColor: "divider",
              }
            }} 
          />

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary" textAlign="center">
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
          background: "transparent",
          pointerEvents: "none",
        }}
      />
    </Box>
  )
}

export default Footer
