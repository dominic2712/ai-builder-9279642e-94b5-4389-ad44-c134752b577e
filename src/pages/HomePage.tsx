import React from 'react';
import BuilderList from '../components/BuilderList';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AI Builders</h1>
      <BuilderList />
    </div>
  );
};

export default HomePage;