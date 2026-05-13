import React from 'react';
import { Container, Typography, Box, Paper, Button, Grid, Avatar, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

const AboutMe = () => {
  // Твоє основне посилання
  const repoLink = "https://github.com/Ladyshka044/react-props-lab.git";

  return (
    <Container sx={{ py: 5 }}>
      {/* Секція ПРИВІТАННЯ */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Avatar 
          sx={{ bgcolor: '#1976d2', width: 80, height: 80, mx: 'auto', mb: 2, fontSize: '2rem' }}
        >
          ЛЗ
        </Avatar>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Привіт, я Лада 👋
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
          Я початківець React-розробник. Люблю перетворювати складні ідеї на чистий код та гарний дизайн.
          Це мій шлях у світі веб-розробки!
        </Typography>
      </Box>

      <Divider sx={{ mb: 6 }} />

      {/* Секція МОЇ ПРОЄКТИ */}
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
        Мої проєкти
      </Typography>

      <Grid container spacing={4}>
        {/* Категорія: HTML & CSS */}
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 4, textAlign: 'center', height: '100%', borderRadius: 3 }}>
            <Box sx={{ color: '#e44d26', mb: 2 }}>
              <CodeIcon sx={{ fontSize: 50 }} />
            </Box>
            <Typography variant="h6" gutterBottom>HTML & CSS</Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
              Основи верстки, адаптивний дизайн та робота зі стилями.
            </Typography>
            <Button 
              variant="outlined" 
              startIcon={<GitHubIcon />} 
              href={repoLink} 
              target="_blank"
            >
              Переглянути
            </Button>
          </Paper>
        </Grid>

        {/* Категорія: JavaScript */}
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 4, textAlign: 'center', height: '100%', borderRadius: 3 }}>
            <Box sx={{ color: '#f7df1e', mb: 2 }}>
              <StorageIcon sx={{ fontSize: 50 }} />
            </Box>
            <Typography variant="h6" gutterBottom>JavaScript</Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
              Логіка застосунків, робота з масивами та об'єктами.
            </Typography>
            <Button 
              variant="outlined" 
              startIcon={<GitHubIcon />} 
              href={repoLink} 
              target="_blank"
            >
              Переглянути
            </Button>
          </Paper>
        </Grid>

        {/* Категорія: React */}
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 4, textAlign: 'center', height: '100%', borderRadius: 3 }}>
            <Box sx={{ color: '#61dafb', mb: 2 }}>
              <LaptopMacIcon sx={{ fontSize: 50 }} />
            </Box>
            <Typography variant="h6" gutterBottom>React JS</Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
              Створення SPA, робота з API, Hooks та Material UI.
            </Typography>
            <Button 
              variant="contained" 
              startIcon={<GitHubIcon />} 
              href={repoLink} 
              target="_blank"
            >
              Мій головний репо
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;