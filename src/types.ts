export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
  features: string[];
}

export interface TileItem {
  id: string;
  title: string;
  category: string;
  image: string;
  finish: string;
  idealFor: string;
  colorPattern: string;
}

export interface ColorCombo {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  description: string;
  image: string;
  suggestedRooms: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Flooring' | 'Kitchen' | 'Bathroom' | 'Stone' | 'Marble' | 'Exterior';
  location: string;
  image: string;
  description: string;
}

export interface ProjectType {
  id: string;
  title: string;
  icon: string;
  description: string;
  image: string;
  highlights: string[];
}
