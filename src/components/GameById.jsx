'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function GameById({ id }) {
    const [game, setGame] = useState(null);

    useEffect(() => {
        async function fetchGame() {
            try {
                const result = await axios.get(`/api/game/${id}`);
                setGame(result.data);
            } catch (error) {
                console.error('Error fetching game:', error);
            }
        }

        if (id) {
            fetchGame();
        }
    }, [id]);

    if (!game) return <div>Cargando...</div>;

    return (
        <>
            <img src={game.thumbnail} alt={game.title} className="w-full h-64 object-fill object-center container rounded-lg" />

            <div className="p-4">
                <h1 className="text-2xl font-bold mb-2">{game.title}</h1>
                <p className="text-gray-700 mb-4">{game.short_description}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold">Lanzamiento:</span> {game.release_date}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold">Género:</span> {game.genre}</p>
                <div className="grid grid-cols-3 gap-4">
                    {game.screenshots.map((screenshot) => (
                        <img key={screenshot.id} src={screenshot.image} alt={game.title} className="w-full h-auto rounded-lg shadow" />
                    ))}
                </div>
                <p className="text-gray-600 mt-4"><span className="font-semibold">Plataformas:</span> {game.platform}</p>
            </div>
        </>
    )
}