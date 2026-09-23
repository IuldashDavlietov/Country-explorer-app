import { useCountry } from "../hooks/useCountry";
import { REGIONS, type Region } from "../types/country.types";

export default function RegionFilter() {
  const { regions, setRegions } = useCountry();

  return (
    <div>
      <select
        value={regions}
        onChange={(e) => setRegions(e.target.value as Region)}
        aria-label="Filter by region">

        {REGIONS.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}