'use client'
import { useState } from 'react';
import GameItem from './GameItem';

export default function GameList({ games }) {
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 10;
    const totalPages = Math.ceil(games.length / gamesPerPage);

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

    function handlePreviousPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    function handleNextPage() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    function handlePageClick(pageNumber) {
        setCurrentPage(pageNumber);
    };

    function PageNumbers() {
        const pageNumbers = [];
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);

        if (startPage > 1) {
            pageNumbers.push(
                <button key={1} onClick={() => handlePageClick(1)} className={`relative inline-flex items-center border px-2 py-1 text-sm font-medium ${currentPage === 1 ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}>
                    1
                </button>
            );
            
            if (startPage > 2) {
                pageNumbers.push(
                    <span key="start-ellipsis" className="relative inline-flex items-center border px-2 py-1 text-sm font-medium bg-white border-gray-300 text-gray-500">
                        ...
                    </span>
                );
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button key={i} onClick={() => handlePageClick(i)} className={`relative inline-flex items-center border px-2 py-1 text-sm font-medium ${currentPage === i ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}>
                    {i}
                </button>
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pageNumbers.push(
                    <span key="end-ellipsis" className="relative inline-flex items-center border px-2 py-1 text-sm font-medium bg-white border-gray-300 text-gray-500">
                        ...
                    </span>
                );
            }
            pageNumbers.push(
                <button key={totalPages} onClick={() => handlePageClick(totalPages)} className={`relative inline-flex items-center border px-2 py-1 text-sm font-medium ${currentPage === totalPages ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}>
                    {totalPages}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                    <button
                        onClick={handlePreviousPage} className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <button onClick={handleNextPage} className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div className="flex justify-center">
                        <nav className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <button onClick={handlePreviousPage} className={`relative inline-flex items-center border px-2 py-1 text-sm font-medium bg-white border-gray-300 text-gray-500 hover:bg-gray-50 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`} disabled={currentPage === 1}>
                                &laquo;
                            </button>
                            {PageNumbers()}
                            <button onClick={handleNextPage} className={`relative inline-flex items-center border px-2 py-1 text-sm font-medium bg-white border-gray-300 text-gray-500 hover:bg-gray-50 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`} disabled={currentPage === totalPages}>
                                &raquo;
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentGames.map(game => (
                    <GameItem key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
}
