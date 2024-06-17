import Link from 'next/link';

export default function GameItem({ game }) {
    return (
        <div className="shadow-slate-900 shadow-md rounded-md">
            <Link href={`/game/${game.id}`}>
                <img src={game.thumbnail} alt={game.title} className='w-full' />
                <div className="px-4 py-2">
                    <h3>{game.title}</h3>
                    <p>{game.release_date}</p>
                    <p>{game.genre}</p>
                </div>
            </Link>
        </div>
    );
}