import React, { useState, useEffect } from 'react';
import { Builder } from '../types';

const BuilderList: React.FC = () => {
  const [builders, setBuilders] = useState<Builder[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/builders')
      .then(response => response.json())
      .then(data => {
        setBuilders(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch builders');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul className="list-disc list-inside">
      {builders.map(builder => (
        <li key={builder.id}>{builder.name}</li>
      ))}
    </ul>
  );
};

export default BuilderList;