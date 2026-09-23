import { useCountry } from "../hooks/useCountry";

export default function SearchBar() {
  const { search, setSearch } = useCountry();

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country..."
        aria-label="Search for a country"
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}