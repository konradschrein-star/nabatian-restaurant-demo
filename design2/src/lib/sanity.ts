import { createClient } from '@sanity/client';
import type { SanityClient } from '@sanity/client';

// Sanity Client Configuration
export const sanityClient: SanityClient = createClient({
  projectId: 'webste-nabatian', // TODO: Replace with actual Sanity project ID
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false for fresh data, true for faster cached data
});

// Type Definitions for CMS Data
export interface MenuItem {
  _id: string;
  name: string;
  nameDE: string;
  description: string;
  price: number;
  category: 'Vorspeisen' | 'Hauptgerichte' | 'Vegetarisch' | 'Desserts' | 'Getränke';
  image?: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  featured: boolean;
  allergens?: string[];
}

export interface CateringEvent {
  _id: string;
  title: string;
  date: string;
  type: 'Hochzeit' | 'Firmenevent' | 'Geburtstag' | 'Privat';
  testimonial: string;
  clientName: string;
  images: Array<{
    asset: {
      _ref: string;
      url: string;
    };
  }>;
  featured: boolean;
}

export interface GalleryImage {
  _id: string;
  title: string;
  image: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  category: 'Food' | 'Restaurant' | 'Events' | 'Catering';
  order: number;
}

// Fetch Menu Items
export async function getMenuItems(category?: string): Promise<MenuItem[]> {
  const query = category
    ? `*[_type == "menuItem" && category == $category] | order(order asc)`
    : `*[_type == "menuItem"] | order(category asc, order asc)`;

  return await sanityClient.fetch(query, { category });
}

// Fetch Featured Menu Items
export async function getFeaturedMenuItems(): Promise<MenuItem[]> {
  const query = `*[_type == "menuItem" && featured == true] | order(order asc)`;
  return await sanityClient.fetch(query);
}

// Fetch Gallery Images
export async function getGalleryImages(category?: string): Promise<GalleryImage[]> {
  const query = category
    ? `*[_type == "galleryImage" && category == $category] | order(order asc)`
    : `*[_type == "galleryImage"] | order(order asc)`;

  return await sanityClient.fetch(query, { category });
}

// Fetch Catering Events/Testimonials
export async function getEvents(): Promise<CateringEvent[]> {
  return await sanityClient.fetch(`*[_type == "event"] | order(date desc)`);
}

// Fetch Featured Events (for Homepage)
export async function getFeaturedEvents(): Promise<CateringEvent[]> {
  return await sanityClient.fetch(`*[_type == "event" && featured == true] | order(date desc)[0...3]`);
}

// Helper Function: Get Image URL from Sanity Asset
export function getImageUrl(imageRef: string): string {
  // Extract asset ID from reference
  const assetId = imageRef.replace('image-', '').replace(/-jpg$/, '.jpg').replace(/-png$/, '.png');
  return `https://cdn.sanity.io/images/webste-nabatian/production/${assetId}`;
}

// Usage Examples:
//
// In Astro pages:
// ---
// import { getMenuItems, getFeaturedMenuItems } from '../lib/sanity';
// const menuItems = await getMenuItems('Hauptgerichte');
// const featured = await getFeaturedMenuItems();
// ---
