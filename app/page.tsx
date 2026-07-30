"use client";

import { FormEvent, useMemo, useState } from "react";
import { BottomNavigation } from "../components/BottomNavigation";
import { CategoryFilters } from "../components/CategoryFilters";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PropertyCard } from "../components/PropertyCard";
import { PropertyDetails } from "../components/PropertyDetails";
import { SearchBar } from "../components/SearchBar";
import type { Property, PropertyCategory } from "../components/types";

const properties: Property[] = [
  {
    id: 1,
    title: "Sunlit Sea View Apartment",
    locality: "Bandra West",
    city: "Mumbai",
    rent: 48500,
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,080 sq ft",
    furnishing: "Semi-furnished",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    phone: "+919876543210",
    description: "A bright, owner-listed home with a balcony, modular kitchen and easy access to Linking Road.",
  },
  {
    id: 2,
    title: "Garden City Family Home",
    locality: "Indiranagar",
    city: "Bengaluru",
    rent: 36000,
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,540 sq ft",
    furnishing: "Fully furnished",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    phone: "+919876543211",
    description: "A peaceful independent floor near the metro with a private terrace and dedicated parking.",
  },
  {
    id: 3,
    title: "Modern Co-living Studio",
    locality: "Koregaon Park",
    city: "Pune",
    rent: 16500,
    type: "PG/Hostel",
    bedrooms: 1,
    bathrooms: 1,
    area: "410 sq ft",
    furnishing: "Fully furnished",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85",
    phone: "+919876543212",
    description: "A verified private studio with Wi-Fi, housekeeping and flexible move-in dates included.",
  },
  {
    id: 4,
    title: "High Street Office Suite",
    locality: "Hitech City",
    city: "Hyderabad",
    rent: 72000,
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 2,
    area: "1,850 sq ft",
    furnishing: "Furnished office",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
    phone: "+919876543213",
    description: "A plug-and-play office for up to 24 people with meeting rooms and 24-hour access.",
  },
];

const categories: PropertyCategory[] = ["All", "House", "Apartment", "PG/Hostel", "Commercial"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All India");
  const [category, setCategory] = useState<PropertyCategory>("All");
  const [saved, setSaved] = useState<number[]>([1]);
  const [selectedId, setSelectedId] = useState(1);
  const [formSent, setFormSent] = useState(false);

  const visibleProperties = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return properties.filter((property) => {
      const matchesCategory = category === "All" || property.type === category;
      const matchesLocation = location === "All India" || property.city === location;
      const matchesQuery = !needle || `${property.title} ${property.locality} ${property.city} ${property.type}`.toLowerCase().includes(needle);
      return matchesCategory && matchesLocation && matchesQuery;
    });
  }, [category, location, query]);

  const selectedProperty = properties.find((property) => property.id === selectedId) ?? properties[0];

  function toggleSaved(id: number) {
    setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  function submitProperty(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormSent(true);
  }

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="heroInner">
            <div className="heroCopy">
              <span className="eyebrow">Direct rentals across India</span>
              <h1>Find Your Next Home in Seconds</h1>
              <p>No Brokers. Direct Owners. Better Rentals.</p>
            </div>
            <SearchBar query={query} location={location} onQueryChange={setQuery} onLocationChange={setLocation} />
            <div className="trustRow" aria-label="Marketplace highlights">
              <span><i className="checkIcon" /> Verified properties</span>
              <span><i className="checkIcon" /> Direct owner contact</span>
              <span><i className="checkIcon" /> Zero brokerage</span>
            </div>
          </div>
        </section>

        <div className="pageShell">
          <section className="listingSection" id="listings">
            <div className="sectionHeading">
              <div><span className="eyebrow">Handpicked for you</span><h2>Verified property listings</h2></div>
              <p>{visibleProperties.length} homes found</p>
            </div>
            <CategoryFilters categories={categories} active={category} onChange={setCategory} />

            <div className="marketplaceLayout">
              <div className="propertyGrid" aria-live="polite">
                {visibleProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} saved={saved.includes(property.id)} selected={selectedId === property.id} onSave={() => toggleSaved(property.id)} onView={() => setSelectedId(property.id)} />
                ))}
                {!visibleProperties.length && <div className="emptyState"><h3>No matching rentals yet</h3><p>Try another city, category or search term.</p></div>}
              </div>
              <PropertyDetails property={selectedProperty} saved={saved.includes(selectedProperty.id)} onSave={() => toggleSaved(selectedProperty.id)} />
            </div>
          </section>

          <section className="postSection" id="post-property">
            <div className="postCopy">
              <span className="eyebrow">For property owners</span>
              <h2>List your property for free</h2>
              <p>Reach genuine tenants directly. Share a few details and our team will help you publish a verified listing.</p>
              <div className="ownerSteps"><span>1</span> Add property details <span>2</span> Get verified <span>3</span> Receive calls</div>
            </div>
            {formSent ? (
              <div className="successMessage" role="status"><i className="checkIcon large" /><h3>Thanks! We’ll contact you shortly.</h3><button type="button" className="textButton" onClick={() => setFormSent(false)}>Add another property</button></div>
            ) : (
              <form className="propertyForm" onSubmit={submitProperty}>
                <label>Your name<input required name="name" placeholder="Full name" /></label>
                <label>Phone number<input required name="phone" type="tel" placeholder="+91 98765 43210" /></label>
                <label>City<input required name="city" placeholder="e.g. Mumbai" /></label>
                <label>Property type<select name="type" defaultValue="Apartment"><option>Apartment</option><option>House</option><option>PG/Hostel</option><option>Commercial</option></select></label>
                <button className="primaryButton formButton" type="submit">Submit property</button>
              </form>
            )}
          </section>
        </div>
      </main>
      <Footer />
      <BottomNavigation savedCount={saved.length} />
    </>
  );
}
