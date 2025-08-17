import { useEffect, useRef } from "react"
import { Dialog, DialogContent, Box, IconButton, Typography, Button, Chip, Backdrop, useTheme, useMediaQuery } from "@mui/material"
import { Close, GitHub, Launch } from "@mui/icons-material"
import { gsap } from "gsap"

const ProjectModal = ({ open, handleClose, project }) => {
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
    if (open && modalRef.current) {
      const tl = gsap.timeline()

      // Animación del contenedor principal
      tl.fromTo(
        contentRef.current,
        {
          scale: isMobile ? 0.9 : 0.8,
          opacity: 0,
          rotationY: isMobile ? 0 : -15,
          transformPerspective: 1000,
          y: isMobile ? 50 : 0,
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          y: 0,
          duration: isMobile ? 0.4 : 0.6,
          ease: isMobile ? "power2.out" : "back.out(1.7)",
        },
      )

      // Animación de la imagen con efecto parallax
      tl.fromTo(
        imageRef.current,
        { x: isMobile ? 0 : -50, y: isMobile ? -30 : 0, opacity: 0, scale: 0.9 },
        { x: 0, y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
        isMobile ? "-=0.2" : "-=0.3",
      )

      // Animación de los detalles
      tl.fromTo(
        detailsRef.current,
        { x: isMobile ? 0 : 50, y: isMobile ? 30 : 0, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        isMobile ? "-=0.3" : "-=0.4",
      )

      // Animación de los chips de tecnología
      tl.fromTo(
        techChipsRef.current,
        { y: 20, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
        "-=0.2",
      )

      // Animación de los botones
      tl.fromTo(
        buttonsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.1",
      )
    }
  }, [open, isMobile])

  const handleCloseWithAnimation = () => {
    const tl = gsap.timeline({
      onComplete: handleClose,
    })

    tl.to(contentRef.current, {
      scale: isMobile ? 0.9 : 0.8,
      opacity: 0,
      rotationY: isMobile ? 0 : 15,
      y: isMobile ? 30 : 0,
      duration: 0.3,
      ease: "power2.in",
    })
  }

  if (!project) return null

  return (
    <Dialog
      open={open}
      onClose={handleCloseWithAnimation}
      maxWidth={isMobile ? false : "lg"}
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
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(10px)",
        },
      }}
      sx={{
        "& .MuiDialog-container": {
          alignItems: isMobile ? "stretch" : "center",
          justifyContent: isMobile ? "stretch" : "center",
        },
      }}
    >
      <DialogContent
        ref={contentRef}
        sx={{
          p: 0,
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
          backdropFilter: "blur(20px)",
          border: isMobile ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: isMobile ? 0 : "24px",
          overflow: isMobile ? "auto" : "hidden",
          position: "relative",
          maxHeight: isMobile ? "100vh" : "90vh",
          display: "flex",
          flexDirection: "column",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "linear-gradient(135deg, #5855eb, #7c3aed)",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
            zIndex: 1,
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            position: isMobile ? "sticky" : "relative",
            top: 0,
            zIndex: 10,
            background: isMobile 
              ? "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)"
              : "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
            backdropFilter: "blur(20px)",
            p: isMobile ? 2 : 3,
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant={isSmallMobile ? "h5" : isMobile ? "h4" : "h4"}
            sx={{
              background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: 700,
              mb: 1,
              pr: isMobile ? 6 : 0,
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </Typography>

          <IconButton
            onClick={handleCloseWithAnimation}
            sx={{
              position: "absolute",
              top: isMobile ? 12 : 16,
              right: isMobile ? 12 : 16,
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "white",
              width: isMobile ? 40 : 44,
              height: isMobile ? 40 : 44,
              "&:hover": {
                background: "rgba(255, 255, 255, 0.2)",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <Close sx={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }} />
          </IconButton>
        </Box>

        {/* Content */}
        <Box 
          sx={{ 
            flex: 1,
            p: isMobile ? 2 : 4,
            overflow: isMobile ? "visible" : "auto",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : { xs: "1fr", md: "1fr 1fr" },
              gap: isMobile ? 3 : 4,
              alignItems: "start",
            }}
          >
            {/* Imagen del proyecto */}
            <Box
              ref={imageRef}
              sx={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: isMobile 
                  ? "0 10px 25px rgba(0, 0, 0, 0.3)" 
                  : "0 20px 40px rgba(0, 0, 0, 0.3)",
                order: isMobile ? 1 : 0,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  zIndex: 1,
                },
                "&:hover::before": {
                  opacity: isMobile ? 0 : 1,
                },
              }}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.3s ease",
                  minHeight: isMobile ? "200px" : "auto",
                  objectFit: "cover",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    gsap.to(e.target, { scale: 1.05, duration: 0.3 })
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    gsap.to(e.target, { scale: 1, duration: 0.3 })
                  }
                }}
              />
            </Box>

            {/* Detalles del proyecto */}
            <Box 
              ref={detailsRef}
              sx={{
                order: isMobile ? 2 : 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  mb: 2,
                  fontWeight: 600,
                  fontSize: isMobile ? "1.1rem" : "1.25rem",
                }}
              >
                Descripción
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  mb: 3,
                  lineHeight: 1.6,
                  fontSize: isMobile ? "0.95rem" : "1.1rem",
                }}
              >
                {project.description}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  mb: 2,
                  fontWeight: 600,
                  fontSize: isMobile ? "1.1rem" : "1.25rem",
                }}
              >
                Tecnologías
              </Typography>

              <Box sx={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: isMobile ? 0.8 : 1, 
                mb: 4 
              }}>
                {project.technologies.map((tech, index) => {
                  const getChipColor = (tech) => {
                    const techLower = tech.toLowerCase()
                    if (["react", "vue", "angular"].includes(techLower)) return "#61dafb"
                    if (["javascript", "js"].includes(techLower)) return "#f7df1e"
                    if (["typescript", "ts"].includes(techLower)) return "#3178c6"
                    if (["node", "nodejs"].includes(techLower)) return "#339933"
                    if (["python"].includes(techLower)) return "#3776ab"
                    if (["css", "scss", "sass"].includes(techLower)) return "#1572b6"
                    if (["html"].includes(techLower)) return "#e34f26"
                    return "#6366f1"
                  }

                  return (
                    <Chip
                      key={index}
                      ref={(el) => (techChipsRef.current[index] = el)}
                      label={tech}
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        background: `linear-gradient(135deg, ${getChipColor(tech)}20, ${getChipColor(tech)}10)`,
                        color: getChipColor(tech),
                        border: `1px solid ${getChipColor(tech)}30`,
                        fontWeight: 600,
                        fontSize: isMobile ? "0.75rem" : "0.875rem",
                        height: isMobile ? "28px" : "32px",
                        "&:hover": {
                          background: `linear-gradient(135deg, ${getChipColor(tech)}30, ${getChipColor(tech)}20)`,
                          transform: isMobile ? "none" : "translateY(-2px)",
                          boxShadow: isMobile ? "none" : `0 8px 16px ${getChipColor(tech)}20`,
                        },
                        transition: "all 0.3s ease",
                      }}
                    />
                  )
                })}
              </Box>

              <Box sx={{ 
                display: "flex", 
                gap: isMobile ? 1.5 : 2, 
                flexDirection: isSmallMobile ? "column" : "row",
                flexWrap: "wrap" 
              }}>
                {project.previewEnabled && (
                  <Button
                    ref={(el) => (buttonsRef.current[0] = el)}
                    variant="contained"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<Launch sx={{ fontSize: isMobile ? "1rem" : "1.25rem" }} />}
                    size={isMobile ? "medium" : "large"}
                    sx={{
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      color: "white",
                      px: isMobile ? 2.5 : 3,
                      py: isMobile ? 1.2 : 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: isMobile ? "0.9rem" : "1rem",
                      boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)",
                      minWidth: isSmallMobile ? "100%" : "auto",
                      "&:hover": {
                        background: "linear-gradient(135deg, #5855eb, #7c3aed)",
                        transform: isMobile ? "none" : "translateY(-2px)",
                        boxShadow: isMobile 
                          ? "0 8px 24px rgba(99, 102, 241, 0.3)"
                          : "0 12px 32px rgba(99, 102, 241, 0.4)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Ver Demo
                  </Button>
                )}

                <Button
                  ref={(el) => (buttonsRef.current[1] = el)}
                  variant="outlined"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHub sx={{ fontSize: isMobile ? "1rem" : "1.25rem" }} />}
                  size={isMobile ? "medium" : "large"}
                  sx={{
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    color: "rgba(255, 255, 255, 0.9)",
                    px: isMobile ? 2.5 : 3,
                    py: isMobile ? 1.2 : 1.5,
                    borderRadius: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    borderWidth: "1.5px",
                    minWidth: isSmallMobile ? "100%" : "auto",
                    "&:hover": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                      background: "rgba(255, 255, 255, 0.1)",
                      transform: isMobile ? "none" : "translateY(-2px)",
                      boxShadow: isMobile 
                        ? "none" 
                        : "0 8px 24px rgba(255, 255, 255, 0.1)",
                      borderWidth: "1.5px",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Ver Código
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Espaciado inferior para móvil */}
        {isMobile && (
          <Box sx={{ height: "20px", flexShrink: 0 }} />
        )}
      </DialogContent>
    </Dialog>
  )
}

export default ProjectModal