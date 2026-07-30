import { Icon } from "./Icons";

type Props = { query: string; location: string; onQueryChange: (value: string) => void; onLocationChange: (value: string) => void };

export function SearchBar({ query, location, onQueryChange, onLocationChange }: Props) {
  return <div className="searchBar" role="search"><label className="locationField"><Icon name="pin" /><span><small>Location</small><select value={location} onChange={(event) => onLocationChange(event.target.value)} aria-label="Select city"><option>All India</option><option>Mumbai</option><option>Bengaluru</option><option>Pune</option><option>Hyderabad</option></select></span></label><label className="queryField"><Icon name="search" /><input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search locality, city or property" aria-label="Search properties" /></label><button className="searchSubmit" type="button" aria-label="Search"><Icon name="search" /> Search</button></div>;
}
