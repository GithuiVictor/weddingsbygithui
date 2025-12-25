
export interface Project {
  id: string;
  title: string;
  location: string;
  thumbnail: string;
  category: 'Modern' | 'Classic' | 'Cinematic' | 'Destination';
}

export interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
}

export interface NavItem {
  label: string;
  path: string;
}
