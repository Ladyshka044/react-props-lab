import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const MyFuture = () => (
  <Container sx={{ py: 5 }}>
    <Typography variant="h3" gutterBottom>Мій розвиток 🚀</Typography>
    <List>
      <ListItem>
        <ListItemText primary="Крок 1: Junior React Developer" secondary="Опанувати Redux Toolkit та TypeScript." />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Крок 2: Робота мрії" secondary="Компанія з міжнародними проєктами та крутою командою." />
      </ListItem>
    </List>
    <Typography variant="h5" sx={{ mt: 5, fontStyle: 'italic', textAlign: 'center' }}>
      "Майбутнє належить тим, хто вірить у красу своїх мрій." — Елеонора Рузвельт
    </Typography>
  </Container>
);
export default MyFuture;