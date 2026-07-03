import { Layers, MapPin, Sun, TrendingUp, Wallet } from "lucide-react";

interface StateData {
  stateSlug: string;
  shortName: string;
  fullName: string;
  eventSlug: string;
  hero: { imageUrl: string; title: string };
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
  francistown: {
    stateSlug: "francistown",
    shortName: "Francistown",
    fullName: "Francistown",
    eventSlug: "Francistown",
    hero: {
      imageUrl: "/img/states/abuja-hero.png",
      title: "Francistown: Heritage, Energy and the Spirit of the North",
    },
    discover: {
      description:
        "Discover Botswana's second-largest city, where Kalanga culture, gold-rush history and modern northern city life meet.",
      slides: [
        {
          id: "01",
          title: "A City Shaped by Gold",
          description:
            "Francistown grew around historic gold-mining activity near the Tati and Inchwe rivers. Its old mining story, railway heritage and role as a northern trading centre give the city a character found nowhere else in Botswana.",
          image: "/img/states/abuja-1.png",
        },
        {
          id: "02",
          title: "Kalanga Culture & History",
          description:
            "Visit Supa Ngwao Museum to explore Kalanga heritage, traditional crafts, musical instruments and the early history of Francistown. Guided heritage walks reveal many of the city's most important historic sites.",
          image: "/img/states/abuja-2.png",
        },
        {
          id: "03",
          title: "Gateway to the North",
          description:
            "Close to the Zimbabwe border, Francistown is a lively stop on journeys to the Okavango Delta, Chobe and Victoria Falls, with busy markets, restaurants and warm northern hospitality.",
          image: "/img/states/abuja-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <TrendingUp size={30} />,
        title: "Second-Largest City",
        description: "One of Botswana's most important urban centres",
      },
      {
        icon: <Layers size={30} />,
        title: "Gold-Rush Heritage",
        description: "A city shaped by historic mining and railway trade",
      },
      {
        icon: <MapPin size={30} />,
        title: "Capital of the North",
        description: "A convenient gateway to northern Botswana",
      },
    ],
  },
  central: {
    stateSlug: "central",
    shortName: "Central",
    fullName: "Central District",
    eventSlug: "Central",
    hero: {
      imageUrl: "/img/states/cross-river-hero.png",
      title: "Central District: Heritage, Hills and Wild Encounters",
    },
    discover: {
      description:
        "Explore a vast district rich in Bangwato heritage, dramatic landscapes, wildlife conservation and historic villages.",
      slides: [
        {
          id: "01",
          title: "Serowe & Bangwato Heritage",
          description:
            "Serowe is one of Botswana's most historically significant villages and the heartland of the Bangwato. Its royal history and links to Sir Seretse Khama make it an essential stop for understanding modern Botswana.",
          image: "/img/states/cross-river-1.png",
        },
        {
          id: "02",
          title: "Rhinos in the Wild",
          description:
            "Khama Rhino Sanctuary near Serowe is a community-led conservation success where visitors can see black and white rhino, zebra, wildebeest, giraffe and abundant birdlife on game drives and bush walks.",
          image: "/img/states/cross-river-2.png",
        },
        {
          id: "03",
          title: "Tswapong Hills & Goo-Moremi",
          description:
            "The Tswapong Hills rise above the eastern plains with wooded gorges, waterfalls and important cultural sites. Goo-Moremi Gorge is treasured for its hiking trails, clear pools, birdlife and spiritual significance.",
          image: "/img/states/cross-river-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <Layers size={30} />,
        title: "Historic Heartland",
        description: "Home to Serowe and enduring Bangwato heritage",
      },
      {
        icon: <MapPin size={30} />,
        title: "Rhino Conservation",
        description: "A leading community wildlife success story",
      },
      {
        icon: <Sun size={30} />,
        title: "Hills & Waterfalls",
        description: "Explore the striking landscapes of Tswapong",
      },
    ],
  },
  kweneng: {
    stateSlug: "kweneng",
    shortName: "Kweneng",
    fullName: "Kweneng District",
    eventSlug: "Kweneng",
    hero: {
      imageUrl: "/img/states/enugu-hero.png",
      title: "Kweneng: Living Heritage at the Edge of the Kalahari",
    },
    discover: {
      description:
        "Experience Bakwena heritage, ancient rock art, village life and wide Kalahari landscapes just beyond the capital.",
      slides: [
        {
          id: "01",
          title: "Molepolole & Bakwena Heritage",
          description:
            "Molepolole, one of Botswana's largest traditional villages, is the cultural centre of the Bakwena. Its kgotla, local life and surrounding historic sites offer a rewarding introduction to the district.",
          image: "/img/states/enugu-1.png",
        },
        {
          id: "02",
          title: "Manyana Rock Paintings",
          description:
            "The nationally protected paintings at Manyana depict giraffe, antelope, people and geometric forms. Created centuries ago by Khoe herders, they preserve an extraordinary record of early life in the region.",
          image: "/img/states/enugu-2.png",
        },
        {
          id: "03",
          title: "Khutse & Kalahari Adventure",
          description:
            "Travel west through Kalahari villages toward Khutse Game Reserve, where open pans, fossil dunes and dry riverbeds support springbok, gemsbok, giraffe, predators and memorable wilderness drives.",
          image: "/img/states/enugu-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <Layers size={30} />,
        title: "Bakwena Heartland",
        description: "A district grounded in kgotla life and living tradition",
      },
      {
        icon: <MapPin size={30} />,
        title: "Ancient Rock Art",
        description: "Home to the celebrated Manyana paintings",
      },
      {
        icon: <Sun size={30} />,
        title: "Kalahari Gateway",
        description: "The road to remote pans and Khutse wilderness",
      },
    ],
  },
  "south-east": {
    stateSlug: "south-east",
    shortName: "South-East",
    fullName: "South-East District",
    eventSlug: "South-East",
    hero: {
      imageUrl: "/img/states/ogun-hero.png",
      title: "South-East: Culture, Hills and City-Side Escapes",
    },
    discover: {
      description:
        "Explore historic villages, scenic hills and easy nature escapes in Botswana's compact south-eastern corner.",
      slides: [
        {
          id: "01",
          title: "Ramotswa & Living Culture",
          description:
            "Ramotswa is the traditional home of the Balete and a centre of village life in the South-East. Its kgotla, community traditions and nearby landscapes offer an authentic view of Botswana beyond the capital.",
          image: "/img/states/ogun-1.png",
        },
        {
          id: "02",
          title: "Otse Hills & Manyelanong",
          description:
            "The hills around Otse create one of the district's most distinctive landscapes. Nearby Manyelanong is known as an important breeding sanctuary for the threatened Cape vulture.",
          image: "/img/states/ogun-2.png",
        },
        {
          id: "03",
          title: "Close to Greater Gaborone",
          description:
            "The district is well placed for combining village experiences with Greater Gaborone's museums, arts, dining, shopping, dam views and nearby wildlife activities.",
          image: "/img/states/ogun-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <Layers size={30} />,
        title: "Balete Heritage",
        description: "Traditional leadership and village culture in Ramotswa",
      },
      {
        icon: <Sun size={30} />,
        title: "Scenic Hills",
        description: "Rocky landscapes and rewarding outdoor escapes",
      },
      {
        icon: <MapPin size={30} />,
        title: "Capital-Side Location",
        description: "Easy access to urban experiences and nature",
      },
    ],
  },
  southern: {
    stateSlug: "southern",
    shortName: "Southern",
    fullName: "Southern District",
    eventSlug: "Southern",
    hero: {
      imageUrl: "/img/states/abia-hero.png",
      title: "Southern District: Hills, Heritage and Cattle Country",
    },
    discover: {
      description:
        "Journey through Bangwaketse heritage, historic railway towns, cattle country and the open landscapes of southern Botswana.",
      slides: [
        {
          id: "01",
          title: "Kanye & Bangwaketse Culture",
          description:
            "Kanye is the traditional capital of the Bangwaketse, set among attractive hills. Its historic kgotla, village character and surrounding viewpoints make it one of southern Botswana's key cultural destinations.",
          image: "/img/states/abia-1.png",
        },
        {
          id: "02",
          title: "Lobatse & Railway Heritage",
          description:
            "Lobatse grew around the northbound railway and remains closely linked to Botswana's cattle industry. Archaeological remains and old settlement sites around the town reveal layers of Bangwaketse history.",
          image: "/img/states/abia-2.png",
        },
        {
          id: "03",
          title: "Ranches & Open Landscapes",
          description:
            "The district's cattle posts, farms and broad southern landscapes reflect the importance of livestock to Botswana's economy and everyday culture, with quiet roads connecting characterful towns and villages.",
          image: "/img/states/abia-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <Layers size={30} />,
        title: "Bangwaketse Heritage",
        description: "Kanye is a major centre of traditional culture",
      },
      {
        icon: <Wallet size={30} />,
        title: "Cattle Country",
        description: "Livestock remains central to the district's identity",
      },
      {
        icon: <MapPin size={30} />,
        title: "Historic Lobatse",
        description: "Railway, archaeology and Botswana's beef industry",
      },
    ],
  },
  "north-west": {
    stateSlug: "north-west",
    shortName: "North-West",
    fullName: "North-West District",
    eventSlug: "North-West",
    hero: {
      imageUrl: "/img/states/kano-hero.png",
      title: "North-West: Where the Kalahari Meets the Okavango",
    },
    discover: {
      description:
        "Enter a world of waterways, wildlife and ancient culture in one of Africa's most extraordinary wilderness regions.",
      slides: [
        {
          id: "01",
          title: "The Okavango Delta",
          description:
            "The UNESCO-listed Okavango Delta spreads into a mosaic of channels, lagoons, islands and floodplains. Mokoro trips, boating, birdwatching and game viewing reveal its remarkable wildlife and seasonal beauty.",
          image: "/img/states/kano-1.png",
        },
        {
          id: "02",
          title: "Maun: Safari Gateway",
          description:
            "Set on the Delta's southern edge, Maun is Botswana's tourism capital and the starting point for many journeys into the Okavango and Moremi. The Thamalakane River gives this energetic frontier town its relaxed rhythm.",
          image: "/img/states/kano-2.png",
        },
        {
          id: "03",
          title: "Tsodilo Hills",
          description:
            "Sacred to San and Hambukushu communities, Tsodilo is a UNESCO World Heritage Site with thousands of rock paintings and evidence of human activity spanning many millennia.",
          image: "/img/states/kano-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <Sun size={30} />,
        title: "Okavango Wilderness",
        description: "A globally celebrated inland delta ecosystem",
      },
      {
        icon: <MapPin size={30} />,
        title: "Safari Capital",
        description: "Maun connects travellers to the northern wilds",
      },
      {
        icon: <Layers size={30} />,
        title: "Ancient Tsodilo",
        description: "Sacred hills preserving thousands of rock paintings",
      },
    ],
  },
  chobe: {
    stateSlug: "chobe",
    shortName: "Chobe",
    fullName: "Chobe District",
    eventSlug: "Chobe",
    hero: {
      imageUrl: "/img/states/akwa-hero.png",
      title: "Chobe: River Safaris and the Kingdom of Elephants",
    },
    discover: {
      description:
        "Experience Botswana's legendary northern wildlife country, shaped by the Chobe River, vast elephant herds and dramatic safari landscapes.",
      slides: [
        {
          id: "01",
          title: "The Chobe Riverfront",
          description:
            "The Chobe River supports an exceptional concentration of wildlife. Boat cruises and riverside game drives bring visitors close to elephants, buffalo, hippo, crocodiles and an extraordinary variety of birds.",
          image: "/img/states/akwa-1.png",
        },
        {
          id: "02",
          title: "Kasane: Gateway to the Wild",
          description:
            "Kasane sits beside the river at the entrance to Chobe National Park. It is the district's tourism hub and an ideal base for game drives, sunset cruises and journeys toward Victoria Falls.",
          image: "/img/states/akwa-2.png",
        },
        {
          id: "03",
          title: "Savuti & Linyanti",
          description:
            "Deeper in the wilderness, Savuti is renowned for predators and dramatic wildlife encounters, while the Linyanti waterways, forests and floodplains offer remote landscapes rich in elephant and buffalo.",
          image: "/img/states/akwa-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <TrendingUp size={30} />,
        title: "Elephant Country",
        description: "Famous for immense herds gathering by the river",
      },
      {
        icon: <Sun size={30} />,
        title: "Land & Water Safaris",
        description: "Experience wildlife by game drive and boat cruise",
      },
      {
        icon: <MapPin size={30} />,
        title: "Four-Country Gateway",
        description: "Kasane connects Botswana with the wider region",
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
