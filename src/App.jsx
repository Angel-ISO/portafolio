import { useState } from "react"
import { useTranslation } from "react-i18next"
import "boxicons/css/boxicons.min.css"
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Avatar,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material"
import { ArrowForward, GitHub, LinkedIn, WhatsApp, Close, Language, ExpandMore } from "@mui/icons-material"
import theme from "./theme/theme"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import LogoPrinc from "./assets/image-removebg-preview.png"
import MeImg from "./assets/Angel.jpeg"
import AVTl from "./assets/Projects/AVTL.png"
import Crimeo from "./assets/Projects/CrimeiO.png"
import ForumsA from "./assets/Projects/Forums.png"
import SpaceInv from "./assets/Projects/SpaceInvaders.png"
import Cisp from "./assets/Projects/Cis.png"

function App() {
  const { t, i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

  const languages = [
    {
      code: "es",
      name: "Español",
      flag: "🇪🇸",
      nativeName: "Español",
    },
    {
      code: "en",
      name: "English",
      flag: "🇺🇸",
      nativeName: "English",
    },
  ]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setCurrentLanguage(lng)
  }

  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === currentLanguage) || languages[0]
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [openModal, setOpenModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpenModal = (project) => {
    setSelectedProject(project)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedProject(null)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`,
    )
    window.open(`https://wa.me/+573222946366?text=${message}`, "_blank")
  }

  const technologies = [
    { name: "Spring Boot", icon: "bx bxs-leaf" },
    { name: ".NET", icon: "bx bxl-microsoft" },
    { name: "React", icon: "bx bxl-react" },
    { name: "JavaScript", icon: "bx bxl-javascript" },
    { name: "Node.js", icon: "bx bxl-nodejs" },
    { name: "Material UI", icon: "bx bxs-component" },
    { name: "HTML5", icon: "bx bxl-html5" },
    { name: "CSS3", icon: "bx bxl-css3" },
    { name: "Git", icon: "bx bxl-git" },
    { name: "Python", icon: "bx bxl-python" },
    { name: "PostgreSQL", icon: "bx bxl-postgresql" },
    { name: "SQL Server", icon: "bx bx-data" },
    { name: "MongoDB", icon: "bx bxl-mongodb" },
    { name: "Jira", icon: "bx bx-task" },
    { name: "GitLab", icon: "bx bxl-gitlab" },
    { name: "Docker", icon: "bx bxl-docker" },
    { name: "Bootstrap", icon: "bx bxl-bootstrap" },
    { name: "Scrum", icon: "bx bx-check-shield" },
    { name: "CI/CD", icon: "bx bx-cog" },
  ]

  const projects = [
    {
      title: t("projects.crimeio.title"),
      description: t("projects.crimeio.description"),
      image: Crimeo,
      technologies: ["Python", "MongoDb", "Streamlit", "Pydeck", "Plotly"],
      link: "",
      repo: "https://github.com/Angel-ISO/Crime-io",
      previewEnabled: false,
    },
    {
      title: t("projects.avt.title"),
      description: t("projects.avt.description"),
      image: AVTl,
      technologies: ["Spring Boot", "Javafx", "Mailer", "Mysql"],
      link: "",
      repo: "https://github.com/Angel-ISO/transaction-module",
      previewEnabled: false,
    },
    {
      title: t("projects.alura.title"),
      description: t("projects.alura.description"),
      image: ForumsA,
      technologies: ["Springboot", "Mysql", "Swagger", "jwt", "oauth2"],
      link: "https://oracle-one-education-forums.vercel.app/",
      repo: "https://github.com/Angel-ISO/oracleOneEducation/tree/main/alura",
      previewEnabled: true,
    },
    {
      title: t("projects.spaceinvaders.title"),
      description: t("projects.spaceinvaders.description"),
      image: SpaceInv,
      technologies: ["Windows Forms", "mvvm", "C#"],
      link: "",
      repo: "https://github.com/Angel-ISO/SpaceInvaders",
      previewEnabled: false,
    },
    {
      title: t("projects.cis.title"),
      description: t("projects.cis.description"),
      image: Cisp,
      technologies: [
        "springboot",
        "hibernate",
        "mysql",
        "jwt",
        "swagger",
        "netcore",
        "mongodb",
        "hexagonal architecture",
        "docker",
      ],
      link: "",
      repo: "https://github.com/Angel-ISO/CIS-CSHARP/blob/main/",
      previewEnabled: false,
    },
  ]

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img src={LogoPrinc || "/placeholder.svg"} alt="Logo" style={{ width: 40, height: 40, marginRight: 6 }} />
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              angelbladeX technologies
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Language sx={{ color: "text.secondary" }} />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select
                value={currentLanguage}
                onChange={(e) => changeLanguage(e.target.value)}
                displayEmpty
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    py: 1,
                  },
                }}
                IconComponent={ExpandMore}
                renderValue={(selected) => {
                  const lang = getCurrentLanguage()
                  return (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <span style={{ fontSize: "1.2em" }}>{lang.flag}</span>
                      <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                        {lang.code.toUpperCase()}
                      </Typography>
                    </Box>
                  )
                }}
              >
                {languages.map((language) => (
                  <MenuItem key={language.code} value={language.code}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                      <span style={{ fontSize: "1.5em" }}>{language.flag}</span>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                          {language.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {language.nativeName}
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          py: 8,
          backgroundColor: "background.default",
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
                src={MeImg}
                alt="Angel Gabriel Ortega"
                sx={{
                  width: { xs: 200, sm: 220, md: 280 },
                  height: { xs: 200, sm: 220, md: 280 },
                  border: "4px solid",
                  borderColor: "primary.main",
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
                variant="h2"
                component="h1"
                gutterBottom
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.75rem" },
                }}
              >
                {t("hero.title")}
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                paragraph
                sx={{
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                }}
              >
                {t("hero.subtitle")}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
                <Button variant="contained" color="primary" size="large" endIcon={<ArrowForward />} href="#contact">
                  {t("hero.contact")}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: "background.paper" }}>
        <Container>
          <Typography variant="h3" component="h2" align="center" gutterBottom fontWeight="bold">
            {t("technologies.title")}
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {technologies.map((tech, index) => (
                <SwiperSlide key={index}>
                  <Paper elevation={2} sx={{ p: 3, textAlign: "center", height: "100%" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <i className={tech.icon} style={{ fontSize: "64px", color: "#1976d2" }}></i>
                      <Typography variant="h6" sx={{ mt: 2 }}>
                        {tech.name}
                      </Typography>
                    </Box>
                  </Paper>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: "background.default" }}>
        <Container maxWidth="xl">
          <Typography variant="h3" component="h2" align="center" gutterBottom fontWeight="bold">
            {t("projects.title")}
          </Typography>

          <Grid
            container
            spacing={3}
            sx={{
              mt: 4,
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 3,
              "& > .MuiGrid-item": {
                width: "100%",
                margin: 0,
                padding: 0,
                display: "flex",
              },
            }}
          >
            {projects.map((project, index) => (
              <Grid item key={index}>
                <Card
                  onClick={() => handleOpenModal(project)}
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 8,
                    },
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: "cover",
                      transition: "transform 0.5s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
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
                        mb: 2,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "auto" }}>
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Typography
                          key={i}
                          variant="caption"
                          sx={{
                            bgcolor: "primary.main",
                            color: "white",
                            px: 1,
                            py: 0.5,
                            borderRadius: 1,
                            fontWeight: "medium",
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                      {project.technologies.length > 3 && (
                        <Typography
                          variant="caption"
                          sx={{
                            bgcolor: "secondary.light",
                            color: "white",
                            px: 1,
                            py: 0.5,
                            borderRadius: 1,
                          }}
                        >
                          +{project.technologies.length - 3}
                        </Typography>
                      )}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    {project.previewEnabled && (
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t("modal.viewDemo")}
                      </Button>
                    )}
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      startIcon={<GitHub />}
                      sx={{ ml: "auto" }}
                    >
                      {t("modal.viewRepo")}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md" fullWidth>
        {selectedProject && (
          <>
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {selectedProject.title}
              <IconButton onClick={handleCloseModal}>
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
                <Box sx={{ flex: 1 }}>
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {t("projects.description")}
                  </Typography>
                  <Typography paragraph>{selectedProject.description}</Typography>
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    {t("projects.technologies")}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {selectedProject.technologies.map((tech, i) => (
                      <Typography
                        key={i}
                        variant="caption"
                        sx={{
                          bgcolor: "primary.main",
                          color: "white",
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              {selectedProject.previewEnabled && (
                <Button
                  variant="contained"
                  color="primary"
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("modal.viewDemo")}
                </Button>
              )}
              <Button
                variant="contained"
                color="secondary"
                href={selectedProject.repo}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHub />}
              >
                {t("modal.viewRepo")}
              </Button>
              <Button onClick={handleCloseModal}>{t("modal.close")}</Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <Box id="contact" sx={{ py: 8, backgroundColor: "background.paper" }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" align="center" gutterBottom fontWeight="bold">
            {t("contact.title")}
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label={t("contact.name")}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label={t("contact.email")}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label={t("contact.message")}
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    startIcon={<WhatsApp />}
                  >
                    {t("contact.submit")}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: 4,
          backgroundColor: "secondary.main",
          color: "white",
        }}
      >
        <Container>
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body1">
                © {new Date().getFullYear()} Angel|Bladex. Todos los derechos reservados.
              </Typography>
            </Grid>
            <Grid item>
              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton
                  href="https://github.com/Angel-ISO"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  aria-label="GitHub"
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/angel-gabriel-ortega/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  aria-label="LinkedIn"
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App