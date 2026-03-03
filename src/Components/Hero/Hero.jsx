import { Box, Container, Grid, Typography, Button, Avatar, Chip } from "@mui/material"
import { ArrowForward, Download } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import MeImg from "../../assets/Angel.jpeg"
import CV from "../../assets/Angel_Gabriel_Ortega_Backend_Engineer_CV.pdf"

const Hero = () => {
  const { t } = useTranslation()
  const heroRef = useRef()
  const avatarRef = useRef()
  const greetingRef = useRef()
  const titleRef = useRef()
  const roleRef = useRef()
  const subtitleRef = useRef()
  const buttonRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(avatarRef.current, {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        rotateY: 90,
        ease: "back.out(1.7)"
      })

      tl.from(greetingRef.current, {
        duration: 0.6,
        y: 20,
        opacity: 0,
        ease: "power2.out"
      }, "-=0.5")

      tl.from(titleRef.current, {
        duration: 0.8,
        y: 40,
        opacity: 0,
        ease: "power2.out"
      }, "-=0.3")

      tl.from(roleRef.current, {
        duration: 0.6,
        scale: 0.8,
        opacity: 0,
        ease: "back.out(1.7)"
      }, "-=0.3")

      tl.from(subtitleRef.current, {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: "power2.out"
      }, "-=0.3")

      tl.from(buttonRef.current, {
        duration: 0.6,
        y: 10,
        opacity: 0,
        ease: "power2.out"
      }, "-=0.3")

      avatarRef.current?.addEventListener('mouseenter', () => {
        gsap.to(avatarRef.current, {
          duration: 0.3,
          scale: 1.03,
          boxShadow: '0 8px 25px rgba(229, 57, 53, 0.3)',
          ease: "power2.out"
        })
      })

      avatarRef.current?.addEventListener('mouseleave', () => {
        gsap.to(avatarRef.current, {
          duration: 0.3,
          scale: 1,
          boxShadow: '0 4px 15px rgba(229, 57, 53, 0.15)',
          ease: "power2.out"
        })
      })

    }, heroRef)

    return () => ctx.revert()
  }, [t])

  return (
    <Box
      ref={heroRef}
      sx={{
        py: { xs: 6, md: 10 },
        minHeight: { md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid
            item
            xs={12}
            sm={4}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              order: { xs: 1, sm: 1 },
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <Avatar
                ref={avatarRef}
                src={MeImg}
                alt="Angel Gabriel Ortega"
                sx={{
                  width: { xs: 200, sm: 220, md: 280 },
                  height: { xs: 200, sm: 220, md: 280 },
                  border: "4px solid",
                  borderColor: "primary.main",
                  cursor: "pointer",
                  boxShadow: '0 4px 15px rgba(229, 57, 53, 0.15)'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 10,
                  right: -10,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  bgcolor: '#4caf50',
                  border: '3px solid',
                  borderColor: 'background.default',
                  boxShadow: '0 0 0 2px #4caf50',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': { boxShadow: '0 0 0 0 rgba(76, 175, 80, 0.4)' },
                    '70%': { boxShadow: '0 0 0 10px rgba(76, 175, 80, 0)' },
                    '100%': { boxShadow: '0 0 0 0 rgba(76, 175, 80, 0)' },
                  }
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={7}
            sx={{
              order: { xs: 2, sm: 2 },
            }}
          >
           

            <Typography
              ref={titleRef}
              variant="h2"
              component="h1"
              gutterBottom
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.75rem" },
                lineHeight: 1.2,
                mb: 2,
                background: (theme) => theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ff6f60 100%)'
                  : 'linear-gradient(135deg, #1a1a2e 0%, #212121 50%, #e53935 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t("hero.title")}
            </Typography>

            <Typography
              ref={subtitleRef}
              variant="h6"
              color="text.secondary"
              paragraph
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
                mb: 4,
                lineHeight: 1.8,
                maxWidth: '550px',
                fontWeight: 400
              }}
            >
              {t("hero.subtitle")}
            </Typography>

            <Box ref={buttonRef} sx={{ display: "flex", gap: 2, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                endIcon={<ArrowForward />} 
                href="#contact"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 12px rgba(229, 57, 53, 0.25)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 20px rgba(229, 57, 53, 0.4)',
                  }
                }}
              >
                {t("hero.contact")}
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<Download />}
                href={CV}
                download="Angel_Gabriel_Ortega_CV.pdf"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  borderWidth: 2,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderWidth: 2,
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 20px rgba(229, 57, 53, 0.2)',
                  }
                }}
              >
                {t("hero.downloadCV")}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero
