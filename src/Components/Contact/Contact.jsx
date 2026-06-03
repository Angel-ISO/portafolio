import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  InputAdornment,
  useTheme,
  Snackbar,
  Alert,
  CircularProgress
} from "@mui/material"
import {
  WhatsApp,
  Person,
  Email,
  Message,
  Send,
  Subject,
  Phone
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
    subject: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const sectionRef = useRef()
  const titleRef = useRef()
  const formRef = useRef()
  const fieldRefs = useRef([])

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = t("contact.validation.name")
    if (!formData.email.trim()) {
      newErrors.email = t("contact.validation.email")
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.validation.email")
    }
    if (!formData.subject.trim()) newErrors.subject = t("contact.validation.subject")
    if (!formData.message.trim()) newErrors.message = t("contact.validation.message")
    if (formData.message.length > 500) newErrors.message = t("contact.maxCharacters")
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      gsap.from(Object.keys(validationErrors).map(key => fieldRefs.current.find(ref => ref?.name === key)), {
        x: -10,
        duration: 0.3,
        ease: "power2.out"
      })
      return
    }

    setIsSubmitting(true)
    setErrors({})

    gsap.to(e.target.querySelector('button'), {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    })

    await new Promise(resolve => setTimeout(resolve, 1000))

    const message = encodeURIComponent(
      `*Nuevo contacto desde el portafolio*\n\n` +
      `*Nombre:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Telefono:* ${formData.phone || 'No proporcionado'}\n` +
      `*Asunto:* ${formData.subject}\n\n` +
      `*Mensaje:*\n${formData.message}\n\n` +
      `---\nEnviado desde angelbladeX.dev`
    )

    window.open(`https://wa.me/+573222946366?text=${message}`, "_blank")
    setSuccess(true)
    setIsSubmitting(false)

    setFormData({ name: "", email: "", subject: "", phone: "", message: "" })
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

      gsap.from(fieldRefs.current.slice(0, 5), {
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
      <Container maxWidth="lg">
        <Box ref={titleRef} sx={{ textAlign: "center", mb: 8 }}>
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

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper
            ref={formRef}
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              width: '100%',
              maxWidth: '700px',
              backgroundColor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1.5,
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: theme.palette.primary.main,
              },
            }}
          >
            <Typography
              variant="h5"
              fontWeight={650}
              color="text.primary"
              sx={{ mb: 4, textAlign: 'center' }}
            >
              {t("contact.formTitle")}
            </Typography>

            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 3,
                }}
              >
                <TextField
                  ref={el => fieldRefs.current[0] = el}
                  required
                  fullWidth
                  label={t("contact.name")}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
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
                      "&.Mui-focused fieldset": {
                        borderColor: theme.palette.primary.main,
                        borderWidth: 2,
                      },
                    },
                  }}
                />
                <TextField
                  ref={el => fieldRefs.current[1] = el}
                  required
                  fullWidth
                  label={t("contact.email")}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
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
                      "&.Mui-focused fieldset": {
                        borderColor: theme.palette.primary.main,
                        borderWidth: 2,
                      },
                    },
                  }}
                />
                <TextField
                  ref={el => fieldRefs.current[2] = el}
                  required
                  fullWidth
                  label={t("contact.subject")}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={!!errors.subject}
                  helperText={errors.subject}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Subject color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      "&:hover fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: theme.palette.primary.main,
                        borderWidth: 2,
                      },
                    },
                  }}
                />
                <TextField
                  ref={el => fieldRefs.current[3] = el}
                  fullWidth
                  label={t("contact.phone")}
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      "&:hover fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: theme.palette.primary.main,
                        borderWidth: 2,
                      },
                    },
                  }}
                />
                <TextField
                  ref={el => fieldRefs.current[4] = el}
                  required
                  fullWidth
                  label={t("contact.message")}
                  name="message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  error={!!errors.message}
                  helperText={errors.message || `${formData.message.length}/500 ${t("contact.characters")}`}
                  inputProps={{ maxLength: 500 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 2 }}>
                        <Message color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    gridColumn: '1 / -1',
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      "&:hover fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: theme.palette.primary.main,
                        borderWidth: 2,
                      },
                    },
                    "& .MuiFormHelperText-root": {
                      textAlign: "right",
                      color: formData.message.length > 450 ? "warning.main" : formData.message.length > 500 ? "error.main" : "text.secondary",
                    },
                  }}
                />
                <Button
                  ref={el => fieldRefs.current[5] = el}
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={isSubmitting}
                  startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <WhatsApp />}
                  sx={{
                    gridColumn: '1 / -1',
                    py: 2,
                    textTransform: "none",
                    fontWeight: 650,
                    fontSize: "1.1rem",
                    "&:hover": {
                      transform: "translateY(-1px)",
                    },
                    "&:disabled": {
                      background: "rgba(0,0,0,0.22)",
                      color: "rgba(255,255,255,0.7)",
                      transform: "none",
                    },
                  }}
                >
                  {isSubmitting ? t("contact.sending") : t("contact.sendButton")}
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
      </Container>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {t("contact.success")}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Contact
