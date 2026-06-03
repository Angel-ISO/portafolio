import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Paper,
} from "@mui/material"
import { GitHub, Launch, Code, Star } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useEffect, useMemo, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { projects } from "../../utils/constants"
import { useTheme } from "@mui/material/styles"
import ElectricBorder from "../ElectricBorder/ElectricBorder"

gsap.registerPlugin(ScrollTrigger)

const Projects = ({ handleOpenModal }) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const projectList = useMemo(() => projects(t), [t])
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const sectionRef = useRef()
  const titleRef = useRef()
  const statsRef = useRef()
  const gridRef = useRef()

  const projectStats = [
    { label: t("projects.stats.total"), value: projectList.length, suffix: "", icon: <Code /> },
    {
      label: t("projects.stats.technologies"),
      value: [...new Set(projectList.flatMap((p) => p.technologies))].length,
      suffix: "+",
      icon: <Star />,
    },
    {
      label: t("projects.stats.featured"),
      value: projectList.filter((p) => p.previewEnabled).length,
      suffix: "",
      icon: <Launch />,
    },
    { label: t("projects.stats.repositories"), value: projectList.length, suffix: "", icon: <GitHub /> },
  ]

  const getTechColor = (tech) => {
    const techColors = {
      React: "#61DAFB",
      JavaScript: "#F7DF1E",
      TypeScript: "#3178C6",
      "Node.js": "#68A063",
      Python: "#3776AB",
      Java: "#ED8B00",
      "Spring Boot": "#6DB33F",
      MongoDB: "#47A248",
      PostgreSQL: "#336791",
      Docker: "#2496ED",
      "Material UI": "#007FFF",
      CSS3: "#1572B6",
      HTML5: "#E34F26",
      Redis: "#D82C20",
      "Leaflet.js": "#1990D8",
      Angular: "#DD0031",
      SCSS: "#CC6699",
    }
    return techColors[tech] || theme.palette.primary.main
  }

  const renderProjectCard = (project) => {
    const accentColor = getTechColor(project.technologies[0])

    return (
      <Card
        onClick={() => handleOpenModal(project)}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          borderRadius: 1.5,
          overflow: "hidden",
          position: "relative",
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: project.highlighted ? "transparent" : "divider",
          transition: "transform 0.2s ease, border-color 0.2s ease",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: accentColor,
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.3s ease",
          },
          "&:hover": {
            transform: "translateY(-3px)",
            borderColor: project.highlighted ? "transparent" : theme.palette.primary.main,
            "&::before": {
              transform: project.highlighted ? "scaleX(0)" : "scaleX(1)",
            },
            "& .project-image": {
              transform: "scale(1.04)",
            },
            "& .project-title": {
              color: theme.palette.primary.main,
            },
          },
        }}
      >
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="200"
            image={project.image}
            alt={project.title}
            className="project-image"
            sx={{
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
          />
          {project.highlighted && (
            <Chip
              label="Featured"
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                left: 12,
                backgroundColor: theme.palette.mode === "dark" ? "rgba(180,35,24,0.22)" : "#fdebec",
                color: "primary.main",
                border: "1px solid",
                borderColor: "rgba(180,35,24,0.22)",
                fontWeight: 700,
                fontSize: "0.7rem",
              }}
            />
          )}
          {project.previewEnabled && (
            <Chip
              label="Live Demo"
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                backgroundColor: theme.palette.mode === "dark" ? "rgba(52,101,56,0.25)" : "#edf3ec",
                color: theme.palette.success.main,
                border: "1px solid",
                borderColor: "rgba(52,101,56,0.22)",
                fontWeight: 700,
                fontSize: "0.7rem",
              }}
            />
          )}
        </Box>

        <CardContent
          sx={{
            flexGrow: 1,
            p: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            className="project-title"
            sx={{
              fontWeight: 650,
              transition: "color 0.3s ease",
              mb: 2,
              color: theme.palette.text.primary,
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              mb: 3,
              flexGrow: 1,
              lineHeight: 1.6,
            }}
          >
            {project.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              mt: "auto",
            }}
          >
            {project.technologies.slice(0, 3).map((tech, i) => (
              <Chip
                key={i}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: `${getTechColor(tech)}15`,
                  color: getTechColor(tech),
                  fontWeight: 650,
                  fontSize: "0.75rem",
                  border: `1px solid ${getTechColor(tech)}30`,
                  "&:hover": {
                    backgroundColor: `${getTechColor(tech)}25`,
                  },
                }}
              />
            ))}
            {project.technologies.length > 3 && (
              <Chip
                label={`+${project.technologies.length - 3}`}
                size="small"
                sx={{
                  backgroundColor: theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(32,26,23,0.06)",
                  color: theme.palette.primary.main,
                  fontWeight: 650,
                }}
              />
            )}
          </Box>
        </CardContent>

        <CardActions
          sx={{
            p: 3,
            pt: 0,
            gap: 1,
          }}
        >
          {project.previewEnabled && (
            <Button
              size="small"
              variant="outlined"
              color="primary"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              startIcon={<Launch />}
              sx={{
                textTransform: "none",
                fontWeight: 650,
                "&:hover": {
                  transform: "translateY(-1px)",
                },
              }}
            >
              {t("modal.viewDemo")}
            </Button>
          )}
          <Button
            size="small"
            variant="contained"
            color="primary"
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            startIcon={<GitHub />}
            sx={{
              textTransform: "none",
              fontWeight: 650,
              ml: project.previewEnabled ? "auto" : 0,
              "&:hover": {
                transform: "translateY(-1px)",
              },
            }}
          >
            {t("modal.viewRepo")}
          </Button>
        </CardActions>
      </Card>
    )
  }

  useEffect(() => {
    const imagePromises = projectList.map((project) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = resolve
        img.src = project.image
      })
    })

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true)
    })
  }, [projectList])

  useEffect(() => {
    if (!imagesLoaded) return

    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, statsRef.current?.children, gridRef.current?.children], {
        opacity: 1
      })

      gsap.from(titleRef.current, {
        duration: 1.2,
        y: 60,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(statsRef.current?.children || [], {
        duration: 0.8,
        y: 40,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(gridRef.current?.children || [], {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [imagesLoaded])

  return (
    <Box
      id="projects"
      ref={sectionRef}
      sx={{
        py: { xs: 9, md: 13 },
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid",
        borderColor: "divider",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "120px",
          height: "1px",
          backgroundColor: "primary.main",
        },
      }}
    >
      <Container maxWidth="xl">
        <Box ref={titleRef} sx={{ textAlign: "center", mb: 6, opacity: imagesLoaded ? 1 : 0 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              color: "text.primary",
              mb: 2,
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -12,
                left: "50%",
                transform: "translateX(-50%)",
                width: "36px",
                height: "1px",
                background: theme.palette.primary.main,
              },
            }}
          >
            {t("projects.title")}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            {t("projects.subtitle")}
          </Typography>
        </Box>

        <Box
          ref={statsRef}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 3,
            mb: 8,
            px: 2,
            opacity: imagesLoaded ? 1 : 0,
          }}
        >
          {projectStats.map((stat, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 3,
                textAlign: "center",
                minWidth: "140px",
                backgroundColor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 1.5,
                transition: "transform 0.2s ease, border-color 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              <Box sx={{ color: theme.palette.primary.main, mb: 1 }}>{stat.icon}</Box>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  fontWeight: "bold",
                  color: "text.primary",
                  mb: 1,
                }}
              >
                {stat.value}
                {stat.suffix}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                {stat.label}
              </Typography>
            </Paper>
          ))}
        </Box>

        <Box
          ref={gridRef}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 4,
            opacity: imagesLoaded ? 1 : 0,
          }}
        >
          {projectList.map((project, index) => (
            <Box key={index} sx={{ height: "100%" }}>
              {project.highlighted ? (
                <ElectricBorder
                  speed={1}
                  chaos={0.12}
                  thickness={2}
                  style={{ borderRadius: 16, height: "100%" }}
                >
                  {renderProjectCard(project, index)}
                </ElectricBorder>
              ) : (
                renderProjectCard(project, index)
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Projects
