import { TrendingUp, MapPin, Layers, Sun, Wallet } from "lucide-react";

interface StateData {
  stateSlug: string;
  shortName: string;
  fullName: string;
  eventSlug: string;
  hero: {
    imageUrl: string;
    title: string;
  };
  discover: {
    description: string;
    slides: {
      id: string;
      image: string;
      title: string;
      description: string;
    }[];
  };
  quickFacts: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

export const statesData: Record<string, StateData> = {
  abuja: {
    stateSlug: "abuja",
    shortName: "Abuja",
    fullName: "Federal Capital Territory",
    eventSlug: "FCT",
    hero: {
      imageUrl: "/img/states/abuja-hero.png",
      title: "Abuja: Where Vibes and Beauty Blends",
    },
    discover: {
      description:
        "From power and prestige to adventure and relaxation — experience every side of Nigeria's vibrant capital.",
      slides: [
        {
          id: "01",
          title: "The Seat of Power",
          description: `From the iconic Presidential Villa (Aso Villa) to sprawling government buildings, foreign embassies, and the cultural landmark Shehu Musa Yar'Adua Center, Abuja exudes purpose, prestige, and power. Its strategic location in the heart of the nation has attracted massive investment, making it one of the fastest-growing cities in the world.`,
          image: "/img/states/abuja-1.png",
        },
        {
          id: "02",
          title: "Adventure & Exploration",
          description:
            "Zuma Rock rises majestically, a natural monument perfect for photos and exploration. Back in the city, the well-planned roads invite sleek sports car rides, while the rolling hills and scenic trails make hiking an unforgettable experience with breathtaking views at every turn.",
          image: "/img/states/abuja-2.png",
        },
        {
          id: "03",
          title: "Relaxation & Culture",
          description:
            "Relax at Abuja's best luxurious hotels, nice spots for boat rides like Jabi Lakeside. Don't miss tasting spicy suya at local joints and sipping a cup of Arabian tea as the sun sets. For a slice of culture, Jabi Craft Market is a must-stop for handcrafted gifts and souvenirs.",
          image: "/img/states/abuja-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <TrendingUp size={30} />,
        title: "Fastest Growing City",
        description: "One of Africa's rapidly expanding urban center",
      },
      {
        icon: <Wallet size={30} />,
        title: "Wealthiest Urban Area",
        description: "Nigeria's economic powerhouse",
      },
      {
        icon: <MapPin size={30} />,
        title: "Heart of the Nation",
        description: "Strategically positioned capital city",
      },
      {
        icon: <Layers size={30} />,
        title: "Cultural Hub",
        description: "Rich heritage and diverse traditions",
      },
      {
        icon: <Sun size={30} />,
        title: "Year-Round Sunshine",
        description: "Perfect weather for outdoor adventures",
      },
    ],
  },
  "cross-river": {
    stateSlug: "cross-river",
    shortName: "Cross River",
    fullName: "Cross River State",
    eventSlug: "Cross River",
    hero: {
      imageUrl: "/img/states/cross-river-hero.png",
      title:
        "Cross River: Africa's Biggest Street Party and Rainforest Adventure",
    },
    discover: {
      description:
        "From heritage and history to adventure and relaxation — experience every side of Cross River.",
      slides: [
        {
          id: "01",
          title: "Mountains & Rainforests",
          description:
            "A journey through mountains and rainforests, from the famous Obudu Mountain Resort to the Agbokim and Kwa Waterfalls. It is a paradise for nature lovers and wildlife enthusiasts.",
          image: "/img/states/cross-river-1.png",
        },
        {
          id: "02",
          title: "History & Mystery",
          description:
            "Explore the ancient Ikom Monoliths, the Mary Slessor Tomb, or the Calabar Slave Park. From the Afi Mountain Walkway to the Calabar Marina, history and mystery live side by side.",
          image: "/img/states/cross-river-2.png",
        },
        {
          id: "03",
          title: "Carnival & Culture",
          description:
            "Experience the Calabar Carnival, music, and the Ekpe Festival. Complement the adventure with iconic local dishes like Abak Atama, Afia Efere, and Ukang Ukom.",
          image: "/img/states/cross-river-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <TrendingUp size={30} />,
        title: "Fastest Growing City",
        description: "One of Africa's rapidly expanding urban center",
      },
      {
        icon: <Wallet size={30} />,
        title: "Wealthiest Urban Area",
        description: "Nigeria's economic powerhouse",
      },
      {
        icon: <MapPin size={30} />,
        title: "Heart of the Nation",
        description: "Strategically positioned capital city",
      },
    ],
  },
  enugu: {
    stateSlug: "enugu",
    shortName: "Enugu",
    fullName: "Enugu State",
    eventSlug: "Enugu",
    hero: {
      imageUrl: "/img/states/enugu-hero.png",
      title: "Enugu: A City of Green Hills and Cool Breezes",
    },
    discover: {
      description: `Discover the Coal City's perfect blend of tradition, natural beauty, and modern charm in southeastern Nigeria.`,
      slides: [
        {
          id: "01",
          title: "The Coal City Heritage",
          description: `Nestled in southeastern Nigeria, Enugu is known as the "Coal City" for its mining history—a perfect blend of tradition and modern charm. It is home to cultural landmarks and hills where you can enjoy panoramic views of the city.`,
          image: "/img/states/enugu-1.png",
        },
        {
          id: "02",
          title: "Adventure & Nature",
          description:
            "Ngwo Pine Forest and Awhum Waterfall are must-visit spots for nature lovers and adventurers, offering serene hiking trails and stunning photo ops. Whether you're exploring nature or the city's hills, it is an unforgettable destination.",
          image: "/img/states/enugu-2.png",
        },
        {
          id: "03",
          title: "Culture & Cuisine",
          description:
            "Visit vibrant spots like Ogbete Main Market for local crafts. Don't leave without trying Enugu's famous Abacha (African salad) or Okpa, and immerse yourself in the city's music, dance, and festivals.",
          image: "/img/states/enugu-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <TrendingUp size={30} />,
        title: "Rich Heritage",
        description: "A state steeped in history and tradition",
      },
      {
        icon: <Wallet size={30} />,
        title: "Economic Hub",
        description: "A thriving center of commerce and industry",
      },
      {
        icon: <MapPin size={30} />,
        title: "Cultural Heart",
        description: "Gateway to authentic Nigerian experiences",
      },
    ],
  },
  ogun: {
    stateSlug: "ogun",
    shortName: "Ogun",
    fullName: "Ogun State",
    eventSlug: "Ogun",
    hero: {
      imageUrl: "/img/states/ogun-hero.png",
      title: "Ogun: A Vibrant Blend of Culture and History",
    },
    discover: {
      description:
        "Experience Nigeria's industrial heartbeat through rich history, stunning landmarks, and vibrant cultural celebrations.",
      slides: [
        {
          id: "01",
          title: "History & Legacy",
          description:
            "Ogun State offers a dose of adventure and insight into Nigeria's industrial heartbeat. Visit the OOPL (Olusegun Obasanjo Presidential Library) and the Kuti Family Museum to soak in the state's rich history and creative legacy.",
          image: "/img/states/ogun-1.png",
        },
        {
          id: "02",
          title: "Adventure & Festivals",
          description:
            "The iconic Olumo Rock is a must-visit for breathtaking views, while the Ojude Oba Festival—one of Nigeria's largest celebrations—offers an unforgettable experience of music, dance, and pageantry.",
          image: "/img/states/ogun-2.png",
        },
        {
          id: "03",
          title: "Crafts & Cuisine",
          description:
            "Explore Adire markets for unique hand-dyed fabrics and shop for local crafts. Foodies shouldn't miss Amala and Ewedu at bustling local spots, followed by a relaxing stay at Ogun's luxurious hotels.",
          image: "/img/states/ogun-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <TrendingUp size={30} />,
        title: "Rich Heritage",
        description: "A state steeped in history and tradition",
      },
      {
        icon: <Wallet size={30} />,
        title: "Economic Hub",
        description: "A thriving center of commerce and industry",
      },
      {
        icon: <MapPin size={30} />,
        title: "Cultural Heart",
        description: "Gateway to authentic Nigerian experiences",
      },
    ],
  },
  abia: {
    stateSlug: "abia",
    shortName: "Abia",
    fullName: "Abia State",
    eventSlug: "Abia",
    hero: {
      imageUrl: "/img/states/abia-hero.png",
      title: "Abia: Where Trade, Craftsmanship, and Culture Come Alive",
    },
    discover: {
      description:
        "Experience the heart of Igbo commerce and craftsmanship in one of Nigeria's most industrious states.",
      slides: [
        {
          id: "01",
          title: "The Hub of Trade",
          description:
            "Home to Ariaria International Market, one of the largest in Sub-Saharan Africa, Abia is a bustling hub for Made-in-Nigeria products. It's a must-visit destination to understand the rich trade culture of the Igbo people.",
          image: "/img/states/abia-1.png",
        },
        {
          id: "02",
          title: "Craftsmanship & Industry",
          description:
            "Just a few kilometers from Umuahia, the Akwete Cloth Production House showcases world-famous handwoven fabrics. Visitors can tour factories and production hubs to see art and industry working side by side.",
          image: "/img/states/abia-2.png",
        },
        {
          id: "03",
          title: "Festivals & Celebrations",
          description:
            "The New Yam Festival (Iwaji) is the highlight of the year in Umuahia every August. This vibrant festival is a thanksgiving for a bumper harvest, featuring creative dishes, lively performances, and colorful ceremonies.",
          image: "/img/states/abia-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <TrendingUp size={30} />,
        title: "Rich Heritage",
        description: "A state steeped in history and tradition",
      },
      {
        icon: <Wallet size={30} />,
        title: "Economic Hub",
        description: "A thriving center of commerce and industry",
      },
      {
        icon: <MapPin size={30} />,
        title: "Cultural Heart",
        description: "Gateway to authentic Nigerian experiences",
      },
    ],
  },
  kano: {
    stateSlug: "kano",
    shortName: "Kano",
    fullName: "Kano State",
    eventSlug: "Kano",
    hero: {
      imageUrl: "/img/states/kano-hero.png",
      title: "Kano: A Symbol of Trade, History, and Northern Heritage",
    },
    discover: {
      description:
        "Discover one of Nigeria's oldest cities where ancient trade routes, royal traditions, and vibrant culture converge.",
      slides: [
        {
          id: "01",
          title: "Ancient City Walls",
          description:
            "One of Nigeria's oldest cities, Kano's historic City Walls and the Emir's Palace tell stories of royalty and power. For centuries, it has linked West Africa through ancient trade routes and remains a major commercial hub.",
          image: "/img/states/kano-1.png",
        },
        {
          id: "02",
          title: "Markets & Festivals",
          description:
            "A visit to Kurmi Market is a must—it's one of the oldest in Africa, buzzing with leather goods and textiles. Experience the Durbar Festival, a colorful display of horse riding and music that brings northern tradition to life.",
          image: "/img/states/kano-2.png",
        },
        {
          id: "03",
          title: "Crafts & Cuisine",
          description:
            "Explore the famous dye pits and handcrafted goods. Don't leave Kano without tasting local favorites like suya, masa, and kunu, offering a deep, authentic experience of Nigeria's northern heritage.",
          image: "/img/states/kano-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <TrendingUp size={30} />,
        title: "Rich Heritage",
        description: "A state steeped in history and tradition",
      },
      {
        icon: <Wallet size={30} />,
        title: "Economic Hub",
        description: "A thriving center of commerce and industry",
      },
      {
        icon: <MapPin size={30} />,
        title: "Cultural Heart",
        description: "Gateway to authentic Nigerian experiences",
      },
    ],
  },
  "akwa-ibom": {
    stateSlug: "akwa-ibom",
    shortName: "Akwa Ibom",
    fullName: "Akwa Ibom State",
    eventSlug: "Akwa Ibom",
    hero: {
      imageUrl: "/img/states/akwa-hero.png",
      title: "Akwa Ibom: Peace, Beauty, and Warm Hospitality",
    },
    discover: {
      description:
        "Experience Nigeria's most serene destination where pristine beaches, luxury resorts, and rich culture await.",
      slides: [
        {
          id: "01",
          title: "The Land of Promise",
          description:
            "One of Nigeria's most peaceful and beautiful states, Akwa Ibom is known for clean cities, lush greenery, and warm hospitality. It is famous for top-tier hotels and resorts, making it perfect for staycations and retreats.",
          image: "/img/states/akwa-1.png",
        },

        {
          id: "02",
          title: "Beaches & Nature",
          description:
            "Discover stunning natural attractions like Ibeno Beach and the Mary Slessor Memorial Cairn. Whether you're exploring nature or unwinding by the beach, it offers a refreshing escape for photos and quiet reflection.",
          image: "/img/states/akwa-2.png",
        },

        {
          id: "03",
          title: "Cuisine & Culture",
          description:
            "Food lovers are in for a treat with Afang soup, Edikang Ikong, and fresh seafood packed with unique flavors. Culture comes alive here through traditional dances, local festivals, and a strong sense of community.",
          image: "/img/states/akwa-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <TrendingUp size={30} />,
        title: "Rich Heritage",
        description: "A state steeped in history and tradition",
      },
      {
        icon: <Wallet size={30} />,
        title: "Economic Hub",
        description: "A thriving center of commerce and industry",
      },
      {
        icon: <MapPin size={30} />,
        title: "Cultural Heart",
        description: "Gateway to authentic Nigerian experiences",
      },
    ],
  },
};

export function getStateData(slug: string): StateData | undefined {
  return statesData[slug];
}

export function getAllStateSlugs(): string[] {
  return Object.keys(statesData);
}
