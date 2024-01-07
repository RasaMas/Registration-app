import AppRoutes from './routes/AppRoutes';
import express from 'express'; 
import userRoutes from './components/userRoutes'; 
import process from 'process'; 

//import RegisterUser from './components/RegisterUser';

const app = express();

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default AppRoutes;