import { Icon } from "./Icons";
import type { Property } from "./types";
type Props = { property: Property; saved: boolean; onSave: () => void };
const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export function PropertyDetails({ property, saved, onSave }: Props) {
  const message = encodeURIComponent(`Hi, I am interested in ${property.title} on RentKarlo.`);
  return <aside className="detailsPanel" id="property-details"><span className="eyebrow">Property details</span><h2>{property.title}</h2><p className="propertyLocation"><Icon name="pin" size={17} /> {property.locality}, {property.city}</p><div className="detailImage"><img src={property.image} alt="" /></div><p>{property.description}</p><dl className="detailList"><div><dt>Monthly rent</dt><dd>{money.format(property.rent)}</dd></div><div><dt>Property</dt><dd>{property.type}</dd></div><div><dt>Furnishing</dt><dd>{property.furnishing}</dd></div><div><dt>Area</dt><dd>{property.area}</dd></div></dl><div className="detailActions"><a className="primaryButton" href={`tel:${property.phone}`}><Icon name="phone" /> Call owner</a><a className="whatsappButton" href={`https://wa.me/${property.phone.replace(/\D/g, "")}?text=${message}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> WhatsApp</a><button type="button" className="iconTextButton" onClick={onSave}><Icon name="heart" /> {saved ? "Saved" : "Save property"}</button></div><small className="safetyNote">Never pay a token amount before visiting and verifying the property.</small></aside>;
}
