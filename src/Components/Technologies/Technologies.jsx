import { Box, Container, Typography, Paper, Chip } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules"
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import "boxicons/css/boxicons.min.css"
import { technologies } from "../../utils/constants"

gsap.registerPlugin(ScrollTrigger)

const Technologies = () => {
  const { t } = useTranslation()
  const sectionRef = useRef()
  const titleRef = useRef()
  const swiperRef = useRef()
  const statsRef = useRef()

  const techCategories = {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Material UI", "Bootstrap"],
    backend: ["Spring Boot", ".NET", "Node.js", "Python", "Express.js", "NestJS", "TypeScript"],
    database: ["PostgreSQL", "SQL Server", "MongoDB"],
    tools: ["Git", "GitLab", "Docker", "Jira", "CI/CD", "Scrum", "JWT", "OAuth2", "Swagger", "Oracle Cloud", "Coolify"]
  }

  const categoryColors = {
    frontend: "#61DAFB", 
    backend: "#68A063", 
    database: "#336791", 
    tools: "#F05032" 
  }

  const getTechCategory = (techName) => {
    for (const [category, techs] of Object.entries(techCategories)) {
      if (techs.includes(techName)) return category
    }
    return "frontend"
  }

  const getTechColor = (techName) => {
    const category = getTechCategory(techName)
    return categoryColors[category]
  }

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

      gsap.from(swiperRef.current, {
        duration: 1.2,
        y: 40,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: swiperRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const techStats = [
    { label: t("technologies.stats.technologies"), value: technologies.length, suffix: "+" },
    { label: t("technologies.stats.experience"), value: 3, suffix: "+" },
    { label: t("technologies.stats.categories"), value: 4, suffix: "" },
    { label: t("technologies.stats.projects"), value: 6, suffix: "+" }
  ]

  return (
    <Box 
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
            {t("technologies.title")}
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
           {t("technologies.subtitle")}
          </Typography>
        </Box>

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
          {techStats.map((stat, index) => (
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

       

        {/* Swiper de tecnologías */}
        <Box ref={swiperRef} sx={{ mt: 4 }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={30}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{ 
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
              1200: { slidesPerView: 5, spaceBetween: 30 },
            }}
            style={{
              paddingBottom: '60px',
              paddingTop: '20px'
            }}
          >
            {technologies.map((tech, index) => {
              const techColor = getTechColor(tech.name)
              const category = getTechCategory(tech.name)
              
              return (
                <SwiperSlide 
                  key={index}
                  style={{ 
                    width: '280px',
                    height: 'auto'
                  }}
                >
                  <Paper 
                    elevation={8}
                    sx={{ 
                      p: 4,
                      textAlign: "center",
                      height: "200px",
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'relative',
                      background: 'transparent',
                      backdropFilter: 'blur(10px)',
                      border: `2px solid ${techColor}20`,
                      borderRadius: 3,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: techColor,
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease'
                      },
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: `0 20px 40px ${techColor}30`,
                        borderColor: techColor,
                        '&::before': {
                          transform: 'scaleX(1)'
                        },
                        '& .tech-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                          color: techColor
                        },
                        '& .tech-name': {
                          color: techColor,
                          fontWeight: 'bold'
                        }
                      }
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        opacity: 0.6
                      }}
                    >
                      <Chip 
                        label={category}
                        size="small"
                        sx={{
                          fontSize: '0.7rem',
                          height: '20px',
                          backgroundColor: `${techColor}15`,
                          color: techColor,
                          fontWeight: 'bold'
                        }}
                      />
                    </Box>
                    
                    <i 
                      className={`${tech.icon} tech-icon`}
                      style={{ 
                        fontSize: "56px",
                        color: techColor,
                        marginBottom: '16px',
                        transition: 'all 0.3s ease',
                        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
                      }}
                    />
                    
                    <Typography 
                      variant="h6" 
                      className="tech-name"
                      sx={{ 
                        fontWeight: 600,
                        color: 'text.primary',
                        transition: 'all 0.3s ease',
                        fontSize: '1.1rem'
                      }}
                    >
                      {tech.name}
                    </Typography>
                  </Paper>
                </SwiperSlide>
              )
            })}
          </Swiper>

          <Box
            sx={{
              '& .swiper-button-next, & .swiper-button-prev': {
                color: 'primary.main',
                backgroundColor: 'background.paper',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                '&::after': {
                  fontSize: '20px',
                  fontWeight: 'bold'
                },
                '&:hover': {
                  transform: 'scale(1.1)',
                  backgroundColor: 'primary.main',
                  color: 'white'
                }
              },
              '& .swiper-pagination': {
                '& .swiper-pagination-bullet': {
                  backgroundColor: 'primary.main',
                  opacity: 0.3,
                  width: '12px',
                  height: '12px'
                },
                '& .swiper-pagination-bullet-active': {
                  opacity: 1,
                  transform: 'scale(1.2)'
                }
              }
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Technologies