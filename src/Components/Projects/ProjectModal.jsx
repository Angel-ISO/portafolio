import { useEffect, useRef } from "react"
import { Dialog, DialogContent, Box, IconButton, Typography, Button, Chip, Backdrop, useTheme, useMediaQuery } from "@mui/material"
import { Close, GitHub, Launch } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { gsap } from "gsap"

const getTechColor = (tech) => {
  const colors = {
    react: "#61dafb", vue: "#42b883", angular: "#dd1b16",
    javascript: "#f7df1e", typescript: "#3178c6",
    "node.js": "#68a063", nodejs: "#68a063", nestjs: "#e0234e",
    "express.js": "#68a063", python: "#3776ab",
    "spring boot": "#6db33f", ".net": "#512bd4", "c#": "#239120",
    java: "#ed8b00", css3: "#1572b6", css: "#1572b6",
    html5: "#e34f26", html: "#e34f26",
    mongodb: "#47a248", postgresql: "#336791", mysql: "#4479a1",
    "sql server": "#cc2927", redis: "#d82c20", supabase: "#3ecf8e",
    docker: "#2496ed", git: "#f05032", graphql: "#e10098",
    svelte: "#ff3e00", prisma: "#2d3748", jest: "#c21325",
    "material ui": "#007fff", bootstrap: "#7952b3",
    "leaflet.js": "#199900", websocket: "#010101",
  }
  return colors[tech.toLowerCase()] || "#e53935"
}

const ProjectModal = ({ open, handleClose, project }) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'))
  
  const modalRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  const detailsRef = useRef(null)
  const techChipsRef = useRef([])
  const buttonsRef = useRef([])

  useEffect(() => {
    if (open && contentRef.current) {
      const tl = gsap.timeline()

      tl.fromTo(contentRef.current,
        { scale: isMobile ? 0.95 : 0.85, opacity: 0, y: isMobile ? 40 : 0 },
        { scale: 1, opacity: 1, y: 0, duration: isMobile ? 0.4 : 0.5, ease: "power3.out" },
      )

      tl.fromTo(imageRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.2",
      )

      tl.fromTo(detailsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.3",
      )

      const validChips = techChipsRef.current.filter(Boolean)
      if (validChips.length) {
        tl.fromTo(validChips,
          { y: 15, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.3, stagger: 0.04, ease: "back.out(1.7)" },
          "-=0.2",
        )
      }

      const validButtons = buttonsRef.current.filter(Boolean)
      if (validButtons.length) {
        tl.fromTo(validButtons,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: "power2.out" },
          "-=0.1",
        )
      }
    }
  }, [open, isMobile])

  const handleCloseWithAnimation = () => {
    gsap.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      y: 20,
      duration: 0.25,
      ease: "power2.in",
      onComplete: handleClose,
    })
  }

  if (!project) return null

  const primaryColor = theme.palette.primary.main
  return (
    <Dialog
      open={open}
      onClose={handleCloseWithAnimation}
      maxWidth={isMobile ? false : "md"}
      fullWidth={!isMobile}
      fullScreen={isMobile}
      ref={modalRef}
      PaperProps={{
        sx: {
          background: "transparent",
          boxShadow: "none",
          overflow: "visible",
          margin: isMobile ? 0 : theme.spacing(4),
          maxHeight: isMobile ? "100vh" : "90vh",
        },
      }}
      BackdropComponent={Backdrop}
      BackdropProps={{
        sx: {
          backgroundColor: theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.78)" : "rgba(32, 26, 23, 0.34)",
          backdropFilter: "blur(8px)",
        },
      }}
    >
      <DialogContent
        ref={contentRef}
        sx={{
          p: 0,
          backgroundColor: "background.paper",
          border: isMobile ? "none" : "1px solid",
          borderColor: "divider",
          borderRadius: isMobile ? 0 : 1.5,
          overflow: "auto",
          position: "relative",
          maxHeight: isMobile ? "100vh" : "90vh",
          display: "flex",
          flexDirection: "column",
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-track": { background: "transparent" },
          "&::-webkit-scrollbar-thumb": {
            background: primaryColor,
            borderRadius: "3px",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: primaryColor,
            zIndex: 2,
          },
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={handleCloseWithAnimation}
          sx={{
            position: "absolute",
            top: isMobile ? 10 : 14,
            right: isMobile ? 10 : 14,
            zIndex: 10,
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            color: "text.primary",
            width: 38,
            height: 38,
            borderRadius: 1.5,
            "&:hover": {
              backgroundColor: theme.palette.mode === "dark" ? "rgba(217,72,61,0.12)" : "rgba(180,35,24,0.06)",
              color: primaryColor,
            },
            transition: "background-color 0.2s ease, color 0.2s ease",
          }}
        >
          <Close sx={{ fontSize: "1.2rem" }} />
        </IconButton>

        {/* Image */}
        <Box
          ref={imageRef}
          sx={{
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
          {project.previewEnabled && (
            <Chip
              label="Live"
              size="small"
              sx={{
                position: "absolute",
                top: 14,
                left: 14,
                backgroundColor: theme.palette.mode === "dark" ? "rgba(52,101,56,0.25)" : "#edf3ec",
                color: theme.palette.success.main,
                border: "1px solid",
                borderColor: "rgba(52,101,56,0.22)",
                fontWeight: 700,
                fontSize: "0.7rem",
                height: "24px",
                zIndex: 1,
                '&::before': {
                  content: '""',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.success.main,
                  marginRight: '6px',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.4 },
                  },
                },
              }}
            />
          )}
        </Box>

        {/* Content */}
        <Box ref={detailsRef} sx={{ p: isMobile ? 2.5 : 4, pt: isMobile ? 1.5 : 2 }}>
          {/* Title */}
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{
              fontWeight: 650,
              mb: 2,
              color: "text.primary",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 3,
              lineHeight: 1.8,
              fontSize: isMobile ? "0.95rem" : "1.05rem",
            }}
          >
            {project.description}
          </Typography>

          {/* Tech chips */}
          <Typography
            variant="overline"
            sx={{
              color: primaryColor,
              fontWeight: 700,
              letterSpacing: '1.5px',
              mb: 1.5,
              display: 'block',
            }}
          >
            {t("projects.technologies")}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
            {project.technologies.map((tech, index) => {
              const color = getTechColor(tech)
              return (
                <Chip
                  key={index}
                  ref={(el) => (techChipsRef.current[index] = el)}
                  label={tech}
                  size="small"
                  sx={{
                    backgroundColor: `${color}18`,
                    color: color,
                    border: `1px solid ${color}30`,
                    fontWeight: 650,
                    fontSize: "0.78rem",
                    height: "28px",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: `${color}28`,
                    },
                  }}
                />
              )
            })}
          </Box>

          {/* Action buttons */}
          <Box sx={{
            display: "flex",
            gap: 2,
            flexDirection: isSmallMobile ? "column" : "row",
          }}>
            {project.previewEnabled && (
              <Button
                ref={(el) => (buttonsRef.current[0] = el)}
                variant="contained"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<Launch />}
                size="large"
                sx={{
                  px: 3,
                  py: 1.5,
                  fontWeight: 650,
                  textTransform: "none",
                  flex: isSmallMobile ? 1 : "none",
                  "&:hover": {
                    transform: "translateY(-1px)",
                  },
                }}
              >
                {t("modal.viewDemo")}
              </Button>
            )}

            <Button
              ref={(el) => (buttonsRef.current[1] = el)}
              variant="outlined"
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHub />}
              size="large"
              sx={{
                borderColor: theme.palette.mode === 'dark'
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(0, 0, 0, 0.15)",
                color: "text.primary",
                px: 3,
                py: 1.5,
                fontWeight: 650,
                textTransform: "none",
                borderWidth: "1.5px",
                flex: isSmallMobile ? 1 : "none",
                "&:hover": {
                  borderColor: primaryColor,
                  color: primaryColor,
                  background: theme.palette.mode === "dark" ? "rgba(217,72,61,0.1)" : "rgba(180,35,24,0.06)",
                  borderWidth: "1.5px",
                  transform: "translateY(-1px)",
                },
              }}
            >
              {t("modal.viewRepo")}
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectModal
