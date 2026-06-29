// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Discover {
  id: string;
  name: string;
  about: string;
  eventType: string;

  location: string;
  latitude: number;
  longitude: number;

  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;

  phone?: string | null;
  email?: string | null;
  website?: string | null;

  isActive: boolean;
  isFeatured?: boolean;
  isTrending?: boolean;
  isCountdownActive?: boolean;
  notifyWhenStarted?: boolean;
  hasLiked?: boolean;

  coverImageUrl: string;

  images: {
    id: string;
    url: string;
    position: number;
    file?: File | null;
  }[];

  category: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt?: string;
    updatedAt?: string;
    collections?: {
      id: string;
      name: string;
      categoryId?: string;
      createdAt?: string;
      updatedAt?: string;
    }[];
  };

  collections?: {
    id: string;
    name: string;
    categoryId?: string;
    createdAt?: string;
    updatedAt?: string;
  }[];

  amenities?: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }[];

  openingTimes: {
    day: string;
    openTime: string;
    closeTime: string;
  }[];

  services?: ServicesOffered[];
  eventPlatforms?: EventPlatforms[];

  // Multi-page content
  pages?: {
    title: string;
    description: string;
    imageUrl: string;
    caption?: string;
  }[];
  pageMode?: "SINGLE" | "MULTIPLE";

  // Metadata
  allowRating: boolean;
  allowComment: boolean;
  featureStart?: string | null;
  featureEnd?: string | null;
  createdAt: string;
  updatedAt: string;

  // Optional extras carried in backend
  collectionIds?: string[];
  logoUrl?: string;
}

interface ServicesOffered {
  name: string;
  description: string;
  amenities?: string[];
  duration?: number;
  cost?: number;
}

interface EventPlatforms {
  id: string;
  discoveryId: string;
  availability: string;
  platformName: string;
  platformLogo: string;
  purchaseLink: string;
  createdAt: string;
  updatedAt: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  collections: {
    id: string;
    name: string;
  }[];
  states: string[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
