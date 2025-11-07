import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ModelCard from '../components/ModelCard.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

// MOCK DATA (replace with API call)
const MOCK_MODELS = [
  { _id: '1', name: 'Sci-Fi Spaceship', category: 'Vehicles', description: 'Low-poly spaceship for space shooter games. PBR materials included.', thumbnailUrl: 'https://placehold.co/600x400/222/fff?text=Spaceship', created_by: 'artist@example.com', downloads: 10 },
  { _id: '2', name: 'Medieval Castle', category: 'Architecture', description: 'A detailed medieval castle model.', thumbnailUrl: 'https://placehold.co/600x400/333/fff?text=Castle', created_by: 'builder@example.com', downloads: 5 },
  { _id: '3', name: 'Cyberpunk Character', category: 'Characters', description: 'A game-ready character.', thumbnailUrl: 'https://placehold.co/600x400/444/fff?text=Character', created_by: 'artist@example.com', downloads: 22 },
  { _id: '4', name: 'Low-Poly Forest', category: 'Nature', description: 'A set of low-poly trees, rocks, and foliage.', thumbnailUrl: 'https://placehold.co/600x400/555/fff?text=Forest', created_by: 'world@example.com', downloads: 8 },
  { _id: '5', name: 'Vintage Car', category: 'Vehicles', description: 'A classic 1950s car model with detailed interior.', thumbnailUrl: 'https://placehold.co/600x400/666/fff?text=Car', created_by: 'builder@example.com', downloads: 15 },
  { _id: '6', name: 'Animated Dragon', category: 'Characters', description: 'A fully rigged and animated dragon for fantasy games.', thumbnailUrl: 'https://placehold.co/600x400/777/fff?text=Dragon', created_by: 'artist@example.com', downloads: 30 },
];
const CATEGORIES = ['Vehicles', 'Architecture', 'Characters', 'Nature', 'Sci-Fi', 'Fantasy', 'Animals', 'Food'];

const Home = () => {
  const [featuredModels, setFeaturedModels] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching featured models
  useEffect(() => {
    setLoading(true);
    // In a real app, you'd fetch from `GET /latest-models`
    setTimeout(() => {
      setFeaturedModels(MOCK_MODELS.slice(0, 6));
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <LoadingSpinner message="Loading awesome models..." />;
  }

  return (
    <div className="space-y-20">
      {/* 1. Banner Section (Hero) - Enhanced with gradient */}
      <div className="hero min-h-[60vh] bg-gradient-to-br from-primary to-secondary text-primary-content rounded-lg p-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://placehold.co/600x400/222/fff?text=3D+Model" className="max-w-sm rounded-lg shadow-2xl" />
          <div className="lg:mr-10">
            <h1 className="text-5xl font-bold leading-tight">Explore a Universe of 3D Models</h1>
            <p className="py-6 text-lg">Welcome to 3D Model Hub, the ultimate platform for artists, developers, and creators to share, discover, and download high-quality 3D assets.</p>
            <Link to="/models" className="btn btn-accent btn-lg font-bold">Browse All Models</Link>
          </div>
        </div>
      </div>

      {/* 2. Featured Models Section (Dynamic) */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Featured 3D Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredModels.map(model => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </section>

      {/* 3. Extra Section 1: Categories */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Browse by Category</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.slice(0, 8).map(category => (
            <Link to={`/models`} key={category} className="btn btn-outline btn-wide m-1">
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Extra Section 2: How It Works */}
      <section className="bg-base-200 p-10 py-16 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <ul className="steps steps-vertical lg:steps-horizontal w-full">
          <li className="step step-primary"><span className="p-2">Sign Up</span></li>
          <li className="step step-primary"><span className="p-2">Upload</span></li>
          <li className="step step-primary"><span className="p-2">Discover</span></li>
          <li className="step"><span className="p-2">Download</span></li>
        </ul>
      </section>
    </div>
  );
};

export default Home;