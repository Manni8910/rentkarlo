import { Icon } from "./Icons";
import type { PropertyCategory } from "./types";

type Props = { categories: PropertyCategory[]; active: PropertyCategory; onChange: (category: PropertyCategory) => void };

export function CategoryFilters({ categories, active, onChange }: Props) {
  return <div className="categoryFilters" aria-label="Filter by property type">{categories.map((category) => <button key={category} type="button" className={active === category ? "active" : ""} onClick={() => onChange(category)}>{category === "All" ? <Icon name="home" /> : <Icon name="building" />}{category}</button>)}</div>;
}
