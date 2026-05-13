import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#1a1a1a', 
        color: 'white', 
        py: 3, 
        mt: 'auto', // Це притисне футер до низу, якщо контенту мало
        borderTop: '1px solid #333'
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          justifyContent="space-between" 
          alignItems="center" 
          spacing={2}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Lada Zavatska. Побудовано на React & MUI.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton 
              href="https://github.com/Ladyshka044" 
              target="_blank" 
              sx={{ color: 'white', '&:hover': { color: '#deff9a' } }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton 
              href="#" 
              sx={{ color: 'white', '&:hover': { color: '#0077b5' } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton 
              href="#" 
              sx={{ color: 'white', '&:hover': { color: '#0088cc' } }}
            >
              <TelegramIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;