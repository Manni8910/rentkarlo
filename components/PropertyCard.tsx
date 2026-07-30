import { Icon } from "./Icons";
import type { Property } from "./types";

type Props = { property: Property; saved: boolean; selected: boolean; onSave: () => void; onView: () => void };
const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export function PropertyCard({ property, saved, selected, onSave, onView }: Props) {
  return <article className={`propertyCard ${selected ? "selected" : ""}`}><div className="propertyImage"><img src={property.image} alt={`${property.title} in ${property.locality}`} /><span className="verifiedBadge"><i className="checkIcon" /> Verified</span><button type="button" className={`saveButton ${saved ? "saved" : ""}`} onClick={onSave} aria-label={saved ? `Remove ${property.title} from saved` : `Save ${property.title}`} aria-pressed={saved}><Icon name="heart" /></button></div><div className="propertyContent"><div className="propertyTitleRow"><div><span className="propertyType">{property.type}</span><h3>{property.title}</h3></div><p className="rent"><strong>{money.format(property.rent)}</strong><span>/month</span></p></div><p className="propertyLocation"><Icon name="pin" size={17} /> {property.locality}, {property.city}</p><div className="propertyFacts"><span><strong>{property.bedrooms || "–"}</strong> Beds</span><span><strong>{property.bathrooms}</strong> Baths</span><span><strong>{property.area}</strong> Area</span><span><strong>{property.furnishing}</strong> Furnishing</span></div><div className="cardActions"><button type="button" className="secondaryButton" onClick={onView}>View details <Icon name="arrow" size={17} /></button><a className="callButton" href={`tel:${property.phone}`}><Icon name="phone" size={17} /> Call owner</a></div></div></article>;
}
