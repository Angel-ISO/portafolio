import { Box, Container, Grid, Typography, Button, Avatar } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import MeImg from "../../assets/Angel.jpeg"

const Hero = () => {
  const { t } = useTranslation()
  const heroRef = useRef()
  const avatarRef = useRef()
  const titleRef = useRef()
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

      tl.from(titleRef.current, {
        duration: 0.8,
        y: 40,
        opacity: 0,
        ease: "power2.out"
      }, "-=0.5")

      tl.from(subtitleRef.current, {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: "power2.out"
      }, "-=0.4")

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

      buttonRef.current?.addEventListener('mouseenter', () => {
        gsap.to(buttonRef.current, {
          duration: 0.3,
          y: -3,
          scale: 1.02,
          boxShadow: '0 8px 20px rgba(229, 57, 53, 0.4)',
          ease: "power2.out"
        })
      })

      buttonRef.current?.addEventListener('mouseleave', () => {
        gsap.to(buttonRef.current, {
          duration: 0.3,
          y: 0,
          scale: 1,
          boxShadow: '0 4px 12px rgba(229, 57, 53, 0.25)',
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
        py: 8,
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
                mb: 3,
                color: "text.primary",
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: 0,
                  width: '80px',
                  height: '4px',
                  background: 'primary.main',
                  borderRadius: '2px'
                }
              }}
            >
              {t("hero.title")}
            </Typography>
            <Typography
              ref={subtitleRef}
              variant="h5"
              color="text.secondary"
              paragraph
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                mb: 4,
                lineHeight: 1.6
              }}
            >
              {t("hero.subtitle")}
            </Typography>
            <Box ref={buttonRef} sx={{ display: "inline-flex" }}>
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
                  transition: 'none',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(229, 57, 53, 0.25)',
                  }
                }}
              >
                {t("hero.contact")}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero