import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  TextField, 
  Button,
  InputAdornment,
  useTheme
} from "@mui/material"
import { 
  WhatsApp, 
  Person, 
  Email, 
  Message,
  Send
} from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sectionRef = useRef()
  const titleRef = useRef()
  const formRef = useRef()
  const fieldRefs = useRef([])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    gsap.to(e.target.querySelector('button'), {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    })

    await new Promise(resolve => setTimeout(resolve, 500)) 

    const message = encodeURIComponent(
      `🌟 *Nuevo Contacto desde Portfolio* 🌟\n\n` +
      `👤 *Nombre:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n\n` +
      `💬 *Mensaje:*\n${formData.message}\n\n` +
      `---\nEnviado desde angelbladeX.dev`
    )
    
    window.open(`https://wa.me/+573222946366?text=${message}`, "_blank")
    setIsSubmitting(false)

    setFormData({ name: "", email: "", message: "" })
    gsap.from(fieldRefs.current, {
      scale: 0.98,
      duration: 0.3,
      stagger: 0.1,
      ease: "back.out(1.7)"
    })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        duration: 1.2,
        y: 60,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(formRef.current, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(fieldRefs.current, {
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box 
      id="contact" 
      ref={sectionRef}
      sx={{ 
        py: 10,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "4px",
          background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box ref={titleRef} sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            fontWeight="bold"
            sx={{
              background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "4px",
                background: theme.palette.primary.main,
                borderRadius: "2px",
              },
            }}
          >
            {t("contact.title")}
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
            {t("contact.formSubtitle")}
          </Typography>
        </Box>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper
              ref={formRef}
              elevation={8}
              sx={{
                p: 4,
                background: theme.palette.mode === 'dark'
                  ? "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)"
                  : "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                backdropFilter: "blur(10px)",
                border: theme.palette.mode === 'dark'
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(229, 57, 53, 0.1)",
                borderRadius: 3,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                },
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                color="text.primary"
                sx={{ mb: 4, textAlign: 'center' }}
              >
                {t("contact.formTitle")}
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      ref={el => fieldRefs.current[0] = el}
                      required
                      fullWidth
                      label={t("contact.name")}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                          "&.Mui-focused": {
                            "& fieldset": {
                              borderColor: theme.palette.primary.main,
                              borderWidth: 2,
                            },
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      ref={el => fieldRefs.current[1] = el}
                      required
                      fullWidth
                      label={t("contact.email")}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                          "&.Mui-focused": {
                            "& fieldset": {
                              borderColor: theme.palette.primary.main,
                              borderWidth: 2,
                            },
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      ref={el => fieldRefs.current[2] = el}
                      required
                      fullWidth
                      label={t("contact.message")}
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 2 }}>
                            <Message color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                          "&.Mui-focused": {
                            "& fieldset": {
                              borderColor: theme.palette.primary.main,
                              borderWidth: 2,
                            },
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      ref={el => fieldRefs.current[3] = el}
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      disabled={isSubmitting}
                      startIcon={isSubmitting ? <Send /> : <WhatsApp />}
                      sx={{
                        py: 2,
                        borderRadius: 3,
                        textTransform: "none",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                        boxShadow: `0 8px 24px rgba(${theme.palette.primary.main.replace('#', '')}, 0.3)`,
                        "&:hover": {
                          background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                          transform: "translateY(-2px)",
                          boxShadow: `0 12px 32px rgba(${theme.palette.primary.main.replace('#', '')}, 0.4)`,
                        },
                        "&:disabled": {
                          background: "rgba(0,0,0,0.12)",
                          color: "rgba(0,0,0,0.26)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {isSubmitting ? t("contact.sending") : t("contact.sendButton")}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact