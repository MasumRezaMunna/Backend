import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import AllModels from '../pages/AllModels.jsx';
import ModelDetails from '../pages/ModelDetails.jsx';
import AddModel from '../pages/AddModel.jsx';
import UpdateModel from '../pages/UpdateModel.jsx';
import MyModels from '../pages/MyModels.jsx';
import MyDownloads from '../pages/MyDownloads.jsx';
import PrivateRoute from './PrivateRoute.jsx';

// --- MOCK API CALLS ---
// In a real app, these would be in a separate api.js file
// And they would use axios to fetch from your Vercel server
const MOCK_MODELS = [
  { _id: '1', name: 'Sci-Fi Spaceship', category: 'Vehicles', description: 'Low-poly spaceship for space shooter games. PBR materials included.', thumbnailUrl: 'https://placehold.co/600x400/222/fff?text=Spaceship', created_by: 'artist@example.com', downloads: 10 },
  { _id: '2', name: 'Medieval Castle', category: 'Architecture', description: 'A detailed medieval castle model.', thumbnailUrl: 'https://placehold.co/600x400/333/fff?text=Castle', created_by: 'builder@example.com', downloads: 5 },
  { _id: '3', name: 'Cyberpunk Character', category: 'Characters', description: 'A game-ready character.', thumbnailUrl: 'https://placehold.co/600x400/444/fff?text=Character', created_by: 'artist@example.com', downloads: 22 },
];
// Mock loader function for ModelDetails
const modelDetailsLoader = ({ params }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const model = MOCK_MODELS.find(m => m._id === params.id);
      resolve(model);
    }, 300);
  });
};
// --- END MOCKS ---


export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/models',
        element: <AllModels />,
      },
      {
        path: '/models/:id',
        element: <PrivateRoute><ModelDetails /></PrivateRoute>,
        loader: modelDetailsLoader, // Use the mock loader
      },
      {
        path: '/add-model',
        element: <PrivateRoute><AddModel /></PrivateRoute>,
      },
      {
        path: '/update-model/:id',
        element: <PrivateRoute><UpdateModel /></PrivateRoute>,
        loader: modelDetailsLoader, // Reuse loader to get data
      },
      {
        path: '/my-models',
        element: <PrivateRoute><MyModels /></PrivateRoute>,
      },
      {
        path: '/my-downloads',
        element: <PrivateRoute><MyDownloads /></PrivateRoute>,
      },
    ],
  },
]);