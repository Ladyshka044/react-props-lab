import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: '#1a1a1a' }}>
    <Container>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>LADA.DEV</Typography>
        <Button color="inherit" component={Link} to="/about">Про мене</Button>
        <Button color="inherit" component={Link} to="/my-city">Моє місто</Button>
        <Button color="inherit" component={Link} to="/my-future">Майбутнє</Button>
      </Toolbar>
    </Container>
  </AppBar>
);
export default Header;