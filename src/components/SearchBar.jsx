export default function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <input
            type="text"
            placeholder="Search a Game..."
            className="bg-transparent border-[1px] rounded-full text-center m-5 h-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
}