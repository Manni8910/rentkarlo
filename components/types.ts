export type PropertyType = "House" | "Apartment" | "PG/Hostel" | "Commercial";
export type PropertyCategory = "All" | PropertyType;

export type Property = {
  id: number;
  title: string;
  locality: string;
  city: string;
  rent: number;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  area: string;
  furnishing: string;
  image: string;
  phone: string;
  description: string;
};
