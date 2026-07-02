import { useEffect, useMemo, useRef, useState } from "react"
import { Box, Button, Container, Typography } from "@mui/material"
import { ArrowForward, Download, KeyboardArrowDown } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import MeImg from "../../assets/AngelProfile-removebg-preview.png"
import CV from "../../assets/Angel_Gabriel_Ortega_Backend_Engineer_CV.pdf"

const BlurText = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  component = "p",
  sx,
}) => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.1 }
    )

    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  const segments = useMemo(
    () => (animateBy === "words" ? text.split(" ") : text.split("")),
    [animateBy, text]
  )

  return (
    <Box component={component} ref={ref} sx={{ m: 0 }}>
      <Box component="span" sx={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center", ...sx }}>
        {segments.map((segment, index) => (
          <Box
            component="span"
            key={`${segment}-${index}`}
            sx={{
              display: "inline-block",
              filter: inView ? "blur(0px)" : "blur(10px)",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
              transition: `all 0.5s ease-out ${index * delay}ms`,
            }}
          >
            {segment}
            {animateBy === "words" && index < segments.length - 1 ? "\u00A0" : ""}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 72px)" },
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        borderBottom: "1px solid",
        borderColor: "divider",
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", textAlign: "center" }}>
        <Typography
          variant="overline"
          sx={{
            display: "block",
            mb: { xs: 3, md: 4 },
            color: "text.secondary",
            fontWeight: 700,
            letterSpacing: "0.16em",
          }}
        >
          Backend Engineer · Infrastructure Lead
        </Typography>

        <Box sx={{ position: "relative", display: "inline-block", width: "100%" }}>
          <BlurText
            text="ANGEL"
            delay={90}
            animateBy="letters"
            component="h1"
            sx={{
              color: "primary.main",
              fontFamily: "'Fira Code', 'Geist Mono', monospace",
              fontSize: { xs: "5rem", sm: "7.5rem", md: "11rem", lg: "13rem" },
              fontWeight: 900,
              lineHeight: 0.78,
              letterSpacing: "-0.08em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          />
          <BlurText
            text="ORTEGA"
            delay={90}
            animateBy="letters"
            component="div"
            sx={{
              color: "primary.main",
              fontFamily: "'Fira Code', 'Geist Mono', monospace",
              fontSize: { xs: "5rem", sm: "7.5rem", md: "11rem", lg: "13rem" },
              fontWeight: 900,
              lineHeight: 0.78,
              letterSpacing: "-0.08em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              width: { xs: 76, sm: 98, md: 124, lg: 142 },
              height: { xs: 124, sm: 158, md: 204, lg: 232 },
              borderRadius: 999,
              overflow: "hidden",
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
              boxShadow: "0 18px 54px rgba(0,0,0,0.18)",
              transition: "transform 220ms ease",
              "&:hover": {
                transform: "translate(-50%, -50%) scale(1.06)",
              },
            }}
          >
            <Box
              component="img"
              src={MeImg}
              alt="Angel Gabriel Ortega"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 6, md: 8 }, display: "flex", justifyContent: "center" }}>
          <BlurText
            text={t("hero.subtitle")}
            delay={90}
            animateBy="words"
            component="div"
            sx={{
              maxWidth: 760,
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.7,
            }}
          />
        </Box>

        <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
          <Button variant="contained" size="large" endIcon={<ArrowForward />} href="#contact">
            {t("hero.contact")}
          </Button>
          <Button variant="outlined" size="large" startIcon={<Download />} href={CV} download="Angel_Gabriel_Ortega_CV.pdf">
            {t("hero.downloadCV")}
          </Button>
        </Box>
      </Container>

      <Box
        component="a"
        href="#about"
        aria-label="Scroll to about"
        sx={{
          position: "absolute",
          bottom: { xs: 18, md: 28 },
          left: "50%",
          transform: "translateX(-50%)",
          color: "text.secondary",
          display: "inline-flex",
          textDecoration: "none",
          transition: "color 180ms ease, transform 180ms ease",
          "&:hover": {
            color: "text.primary",
            transform: "translateX(-50%) translateY(2px)",
          },
        }}
      >
        <KeyboardArrowDown fontSize="large" />
      </Box>
    </Box>
  )
}

export default Hero
