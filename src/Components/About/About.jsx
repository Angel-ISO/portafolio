import { Box, Container, Typography, Paper, useTheme } from "@mui/material"
import { Work, School, LocationOn, CalendarMonth } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  { key: "stellar", icon: Work },
  { key: "freelance_ai", icon: Work },
  { key: "freelance_spartan", icon: Work },
  { key: "campuslands", icon: Work }
]

const education = [
  { key: "jala" },
  { key: "campuslands" },
  { key: "alura" }
]

const About = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const sectionRef = useRef()
  const titleRef = useRef()
  const statsRef = useRef()
  const timelineRef = useRef()
  const educationRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        duration: 1,
        y: 60,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      gsap.from(statsRef.current?.children || [], {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      })

      const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item") || []
      timelineItems.forEach((item, index) => {
        gsap.from(item, {
          duration: 0.8,
          x: index % 2 === 0 ? -60 : 60,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        })
      })

      gsap.from(educationRef.current?.children || [], {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const aboutStats = [
    { label: t("about.stats.experience"), value: 2, suffix: "+" },
    { label: t("about.stats.projects"), value: 9, suffix: "+" },
    { label: t("about.stats.clients"), value: 3, suffix: "+" },
    { label: t("about.stats.technologies"), value: 27, suffix: "+" }
  ]

  const glassStyle = {
    background: theme.palette.mode === 'dark'
      ? "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)"
      : "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
    backdropFilter: "blur(10px)",
    border: theme.palette.mode === 'dark'
      ? "1px solid rgba(255,255,255,0.1)"
      : "1px solid rgba(229, 57, 53, 0.1)",
  }

  return (
    <Box
      id="about"
      ref={sectionRef}
      sx={{
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '4px',
          background: 'linear-gradient(90deg, transparent, #e53935, transparent)',
        }
      }}
    >
      <Container maxWidth="lg">
        {/* Title & Subtitle */}
        <Box ref={titleRef} sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            fontWeight="bold"
            sx={{
              background: 'linear-gradient(45deg, #e53935 30%, #ff6f60 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: '#e53935',
                borderRadius: '2px'
              }
            }}
          >
            {t("about.title")}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            {t("about.subtitle")}
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            mb: 6,
            lineHeight: 1.8,
            fontSize: '1.1rem'
          }}
        >
          {t("about.description")}
        </Typography>

        {/* Stats */}
        <Box
          ref={statsRef}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 4,
            mb: 8,
            px: 2
          }}
        >
          {aboutStats.map((stat, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                minWidth: '120px'
              }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{
                  fontWeight: 'bold',
                  color: 'primary.main',
                  mb: 1
                }}
              >
                {stat.value}{stat.suffix}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Experience Timeline */}
        <Typography
          variant="h4"
          component="h3"
          fontWeight="bold"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.primary'
          }}
        >
          <Work sx={{ mr: 1, verticalAlign: 'middle', color: '#e53935' }} />
          {t("about.experience.title")}
        </Typography>

        <Box
          ref={timelineRef}
          sx={{
            position: 'relative',
            maxWidth: '900px',
            mx: 'auto',
            mb: 8,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: { xs: '20px', md: '50%' },
              transform: { xs: 'none', md: 'translateX(-50%)' },
              width: '2px',
              background: '#e53935'
            }
          }}
        >
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0
            const IconComponent = exp.icon

            return (
              <Box
                key={exp.key}
                className="timeline-item"
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'flex-start', md: isEven ? 'flex-start' : 'flex-end' },
                  position: 'relative',
                  mb: 4,
                  pl: { xs: '50px', md: 0 }
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '14px', md: '50%' },
                    transform: { xs: 'none', md: 'translateX(-50%)' },
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#e53935',
                    border: `2px solid ${theme.palette.background.default}`,
                    zIndex: 1,
                    top: '24px'
                  }}
                />

                {/* Card */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    width: { xs: '100%', md: 'calc(50% - 40px)' },
                    borderRadius: 3,
                    ...glassStyle,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(229, 57, 53, 0.15)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
                    <IconComponent sx={{ color: '#e53935', fontSize: '1.2rem' }} />
                    <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
                      {t(`about.experience.${exp.key}.company`)}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ color: '#e53935', fontWeight: 600, mb: 0.5 }}
                  >
                    {t(`about.experience.${exp.key}.role`)}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                    <CalendarMonth sx={{ fontSize: '0.9rem', color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {t(`about.experience.${exp.key}.date`)}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {t(`about.experience.${exp.key}.description`)}
                  </Typography>
                </Paper>
              </Box>
            )
          })}
        </Box>

        {/* Education */}
        <Typography
          variant="h4"
          component="h3"
          fontWeight="bold"
          sx={{
            textAlign: 'center',
            mb: 4,
            color: 'text.primary'
          }}
        >
          <School sx={{ mr: 1, verticalAlign: 'middle', color: '#e53935' }} />
          {t("about.education.title")}
        </Typography>

        <Box
          ref={educationRef}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 3,
            maxWidth: '900px',
            mx: 'auto'
          }}
        >
          {education.map((edu) => (
            <Paper
              key={edu.key}
              elevation={0}
              sx={{
                p: 3,
                flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 24px)' },
                minWidth: '250px',
                borderRadius: 3,
                ...glassStyle,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(229, 57, 53, 0.15)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
                <School sx={{ color: '#e53935', fontSize: '1.2rem' }} />
                <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
                  {t(`about.education.${edu.key}.institution`)}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ color: '#e53935', fontWeight: 600 }}
              >
                {t(`about.education.${edu.key}.degree`)}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default About
