'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import GameList from '../components/GameList';

export default function Home() {
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchGames() {
      const result = await axios.get('/api/games');
      setGames(result.data);
    };
    fetchGames();
  }, []);

  const filteredGames = games.filter(game => game.title.toLowerCase().startsWith(searchQuery.toLowerCase()));

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <GameList games={filteredGames} />
    </div>
  );
}
