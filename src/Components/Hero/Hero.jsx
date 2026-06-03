import { Box, Container, Grid, Typography, Button } from "@mui/material"
import { ArrowForward, Download } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import MeImg from "../../assets/Angel2.png"
import CV from "../../assets/Angel_Gabriel_Ortega_Backend_Engineer_CV.pdf"
import ProfileCard from "../../component/ProfileCard"

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

    }, heroRef)

    return () => ctx.revert()
  }, [t])

  return (
    <Box
      ref={heroRef}
      sx={{
        py: { xs: 7, md: 12 },
        minHeight: { md: '78vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
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
            <Box ref={avatarRef} sx={{ position: 'relative' }}>
              <ProfileCard
                name="Angel Gabriel Ortega"
                title="Backend Engineer"
                handle="angel-iso"
                status="Available"
                contactText={t("hero.contact")}
                avatarUrl={MeImg}
                showUserInfo={false}
                enableTilt
                enableMobileTilt={false}
                onContactClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                iconUrl="/assets/demo/iconpattern.svg"
                grainUrl="/assets/demo/grain.svg"
                behindGlowEnabled={false}
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
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
              variant="overline"
              sx={{
                display: "block",
                mb: 1.5,
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: "0.12em",
              }}
            >
              Backend Engineer
            </Typography>

            <Typography
              ref={titleRef}
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: "2.7rem", sm: "3.4rem", md: "4.8rem" },
                mb: 2,
                color: "text.primary",
                maxWidth: 680,
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
                lineHeight: 1.7,
                maxWidth: '620px',
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
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-1px)',
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
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-1px)',
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
