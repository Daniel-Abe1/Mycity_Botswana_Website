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
      imageUrl: "/img/states/francistown-hero.png",
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
          image: "/img/states/francistown-1.png",
        },
        {
          id: "02",
          title: "Kalanga Culture & History",
          description:
            "Visit Supa Ngwao Museum to explore Kalanga heritage, traditional crafts, musical instruments and the early history of Francistown. Guided heritage walks reveal many of the city's most important historic sites.",
          image: "/img/states/francistown-2.png",
        },
        {
          id: "03",
          title: "Gateway to the North",
          description:
            "Close to the Zimbabwe border, Francistown is a lively stop on journeys to the Okavango Delta, Chobe and Victoria Falls, with busy markets, restaurants and warm northern hospitality.",
          image: "/img/states/francistown-3.png",
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
      imageUrl: "/img/states/central-hero.png",
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
          image: "/img/states/central-1.png",
        },
        {
          id: "02",
          title: "Rhinos in the Wild",
          description:
            "Khama Rhino Sanctuary near Serowe is a community-led conservation success where visitors can see black and white rhino, zebra, wildebeest, giraffe and abundant birdlife on game drives and bush walks.",
          image: "/img/states/central-2.png",
        },
        {
          id: "03",
          title: "Tswapong Hills & Goo-Moremi",
          description:
            "The Tswapong Hills rise above the eastern plains with wooded gorges, waterfalls and important cultural sites. Goo-Moremi Gorge is treasured for its hiking trails, clear pools, birdlife and spiritual significance.",
          image: "/img/states/central-3.png",
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
      imageUrl: "/img/states/kweneng-hero.png",
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
          image: "/img/states/kweneng-1.png",
        },
        {
          id: "02",
          title: "Manyana Rock Paintings",
          description:
            "The nationally protected paintings at Manyana depict giraffe, antelope, people and geometric forms. Created centuries ago by Khoe herders, they preserve an extraordinary record of early life in the region.",
          image: "/img/states/kweneng-2.png",
        },
        {
          id: "03",
          title: "Khutse & Kalahari Adventure",
          description:
            "Travel west through Kalahari villages toward Khutse Game Reserve, where open pans, fossil dunes and dry riverbeds support springbok, gemsbok, giraffe, predators and memorable wilderness drives.",
          image: "/img/states/kweneng-3.png",
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
      imageUrl: "/img/states/south-east-hero.png",
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
          image: "/img/states/south-east-1.png",
        },
        {
          id: "02",
          title: "Otse Hills & Manyelanong",
          description:
            "The hills around Otse create one of the district's most distinctive landscapes. Nearby Manyelanong is known as an important breeding sanctuary for the threatened Cape vulture.",
          image: "/img/states/south-east-2.png",
        },
        {
          id: "03",
          title: "Close to Greater Gaborone",
          description:
            "The district is well placed for combining village experiences with Greater Gaborone's museums, arts, dining, shopping, dam views and nearby wildlife activities.",
          image: "/img/states/south-east-3.png",
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
      imageUrl: "/img/states/southern-hero.png",
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
          image: "/img/states/southern-1.png",
        },
        {
          id: "02",
          title: "Lobatse & Railway Heritage",
          description:
            "Lobatse grew around the northbound railway and remains closely linked to Botswana's cattle industry. Archaeological remains and old settlement sites around the town reveal layers of Bangwaketse history.",
          image: "/img/states/southern-2.png",
        },
        {
          id: "03",
          title: "Ranches & Open Landscapes",
          description:
            "The district's cattle posts, farms and broad southern landscapes reflect the importance of livestock to Botswana's economy and everyday culture, with quiet roads connecting characterful towns and villages.",
          image: "/img/states/southern-3.png",
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
      imageUrl: "/img/states/north-west-hero.png",
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
          image: "/img/states/north-west-1.png",
        },
        {
          id: "02",
          title: "Maun: Safari Gateway",
          description:
            "Set on the Delta's southern edge, Maun is Botswana's tourism capital and the starting point for many journeys into the Okavango and Moremi. The Thamalakane River gives this energetic frontier town its relaxed rhythm.",
          image: "/img/states/north-west-2.png",
        },
        {
          id: "03",
          title: "Tsodilo Hills",
          description:
            "Sacred to San and Hambukushu communities, Tsodilo is a UNESCO World Heritage Site with thousands of rock paintings and evidence of human activity spanning many millennia.",
          image: "/img/states/north-west-3.png",
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
      imageUrl: "/img/states/chobe-hero.png",
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
          image: "/img/states/chobe-1.png",
        },
        {
          id: "02",
          title: "Kasane: Gateway to the Wild",
          description:
            "Kasane sits beside the river at the entrance to Chobe National Park. It is the district's tourism hub and an ideal base for game drives, sunset cruises and journeys toward Victoria Falls.",
          image: "/img/states/chobe-2.png",
        },
        {
          id: "03",
          title: "Savuti & Linyanti",
          description:
            "Deeper in the wilderness, Savuti is renowned for predators and dramatic wildlife encounters, while the Linyanti waterways, forests and floodplains offer remote landscapes rich in elephant and buffalo.",
          image: "/img/states/chobe-3.png",
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
  kgatleng: {
    stateSlug: "kgatleng",
    shortName: "Kgatleng",
    fullName: "Kgatleng District",
    eventSlug: "Kgatleng",
    hero: {
      imageUrl: "/img/states/kgatleng-hero.png",
      title: "Kgatleng: Sacred Footprints, Craft and Bakgatla Heritage",
    },
    discover: {
      description:
        "Follow ancient stories, creative traditions and dramatic hills through the proud cultural heartland of the Bakgatla.",
      slides: [
        {
          id: "01",
          title: "Matsieng's Ancient Footprints",
          description:
            "Near Rasesa, Matsieng preserves rock engravings and natural potholes tied to one of Botswana's best-known creation stories. The site blends archaeology, landscape and living belief in a memorable open-air experience.",
          image: "/img/states/kgatleng-1.png",
        },
        {
          id: "02",
          title: "Mochudi & Bakgatla Heritage",
          description:
            "Climb Phuthadikobo Hill in Mochudi to explore the museum, historic buildings and sweeping village views. The main kgotla and local traditions reveal the enduring identity of the Bakgatla-ba-Kgafela.",
          image: "/img/states/kgatleng-2.png",
        },
        {
          id: "03",
          title: "Oodi's Creative Spirit",
          description:
            "Oodi is celebrated for handwoven textiles, contemporary craft and community creativity. Workshops and locally made pieces offer visitors a colourful connection to Botswana's modern design culture.",
          image: "/img/states/kgatleng-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <Layers size={30} />,
        title: "Bakgatla Heartland",
        description: "Mochudi is a major centre of culture and tradition",
      },
      {
        icon: <MapPin size={30} />,
        title: "Matsieng Footprints",
        description: "Ancient engravings wrapped in powerful folklore",
      },
      {
        icon: <Sun size={30} />,
        title: "Artisan District",
        description: "Known for Oodi weaving and community-made craft",
      },
    ],
  },
  "north-east": {
    stateSlug: "north-east",
    shortName: "North East",
    fullName: "North East District",
    eventSlug: "North-East",
    hero: {
      imageUrl: "/img/states/north-east-hero.png",
      title: "North East: Stone Kingdoms and Kalanga Traditions",
    },
    discover: {
      description:
        "Explore ancient stone settlements, fertile Tati landscapes and the rich living heritage of Botswana's Kalanga communities.",
      slides: [
        {
          id: "01",
          title: "Domboshaba's Stone Legacy",
          description:
            "Domboshaba's precisely built dry-stone walls and hilltop enclosures date to around the fifteenth century. Walking the monument offers a striking window into the region's powerful pre-colonial societies.",
          image: "/img/states/north-east-1.png",
        },
        {
          id: "02",
          title: "Kalanga Culture in Masunga",
          description:
            "Masunga and surrounding villages keep Kalanga language, food, music and community traditions vibrant. Local celebrations and everyday village life make the district culturally rewarding throughout the year.",
          image: "/img/states/north-east-2.png",
        },
        {
          id: "03",
          title: "Tati River Country",
          description:
            "Granite outcrops, seasonal rivers and farmland shape the district's green northern character. Scenic drives connect welcoming villages, heritage sites and peaceful outdoor stops near the Zimbabwe border.",
          image: "/img/states/north-east-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <Layers size={30} />,
        title: "Ancient Domboshaba",
        description: "Remarkable dry-stone architecture from around 1450",
      },
      {
        icon: <Sun size={30} />,
        title: "Kalanga Heritage",
        description: "Language, music and customs remain proudly alive",
      },
      {
        icon: <MapPin size={30} />,
        title: "Tati Landscapes",
        description: "Rivers, granite hills and productive countryside",
      },
    ],
  },
  ghanzi: {
    stateSlug: "ghanzi",
    shortName: "Ghanzi",
    fullName: "Ghanzi District",
    eventSlug: "Ghanzi",
    hero: {
      imageUrl: "/img/states/ghanzi-hero.png",
      title: "Ghanzi: Culture and Adventure at the Kalahari Gateway",
    },
    discover: {
      description:
        "Meet desert artists, skilled trackers and ranching communities in a district shaped by the immense western Kalahari.",
      slides: [
        {
          id: "01",
          title: "San Culture in D'Kar",
          description:
            "D'Kar is known for San-led cultural initiatives, vivid contemporary art and the Kuru Dance and Music Festival. Respectful community experiences share songs, stories, crafts and knowledge of the Kalahari.",
          image: "/img/states/ghanzi-1.png",
        },
        {
          id: "02",
          title: "Walk with Kalahari Trackers",
          description:
            "Guided bush walks reveal how expert trackers read prints, plants and subtle signs in the sand. These experiences celebrate generations of ecological knowledge and a deep relationship with the desert.",
          image: "/img/states/ghanzi-2.png",
        },
        {
          id: "03",
          title: "Cattle Country & Game Ranches",
          description:
            "Ghanzi's broad ranchlands produce renowned free-range beef and support wildlife experiences on private reserves. Sundowners, game drives and brilliant night skies complete the relaxed frontier atmosphere.",
          image: "/img/states/ghanzi-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <MapPin size={30} />,
        title: "Kalahari Gateway",
        description: "A natural stop between Botswana, Maun and Namibia",
      },
      {
        icon: <Layers size={30} />,
        title: "San Arts & Culture",
        description: "D'Kar is renowned for creativity, dance and heritage",
      },
      {
        icon: <Wallet size={30} />,
        title: "Cattle Capital",
        description: "One of Botswana's leading free-range beef regions",
      },
    ],
  },
  kgalagadi: {
    stateSlug: "kgalagadi",
    shortName: "Kgalagadi",
    fullName: "Kgalagadi District",
    eventSlug: "Kgalagadi",
    hero: {
      imageUrl: "/img/states/kgalagadi-hero.png",
      title: "Kgalagadi: Red Dunes, Black-Maned Lions and Endless Sky",
    },
    discover: {
      description:
        "Venture into Botswana's wild southwest for rolling red dunes, remote pans, desert wildlife and unforgettable star-filled nights.",
      slides: [
        {
          id: "01",
          title: "Kgalagadi Transfrontier Park",
          description:
            "This immense cross-border wilderness protects ancient river valleys, colourful dunes and free-ranging wildlife. Self-drive journeys reveal gemsbok, springbok, cheetah and the iconic black-maned Kalahari lion.",
          image: "/img/states/kgalagadi-1.png",
        },
        {
          id: "02",
          title: "Mabuasehube's Wild Pans",
          description:
            "Remote campsites overlook vast pans where antelope gather and predators patrol. Mabuasehube rewards prepared travellers with solitude, dramatic sunsets and wildlife encounters right beyond camp.",
          image: "/img/states/kgalagadi-2.png",
        },
        {
          id: "03",
          title: "Tsabong Desert Adventures",
          description:
            "Around Tsabong, visitors can experience camel rides, guided walks, dune activities and the rhythms of southern Kalahari town life, all set against brilliant red sand and open sky.",
          image: "/img/states/kgalagadi-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <Sun size={30} />,
        title: "Red-Dune Wilderness",
        description: "One of southern Africa's great desert landscapes",
      },
      {
        icon: <MapPin size={30} />,
        title: "Black-Maned Lions",
        description: "Legendary predators roam the fossil river valleys",
      },
      {
        icon: <Layers size={30} />,
        title: "Remote Pan Camping",
        description: "Extraordinary solitude around Mabuasehube",
      },
    ],
  },
  lobatse: {
    stateSlug: "lobatse",
    shortName: "Lobatse",
    fullName: "Lobatse",
    eventSlug: "Lobatse",
    hero: {
      imageUrl: "/img/states/lobatse-hero.png",
      title: "Lobatse: Hills, Heritage and Botswana's Railway Story",
    },
    discover: {
      description:
        "Discover a characterful southern town where rocky hills, historic routes and Botswana's cattle economy meet.",
      slides: [
        {
          id: "01",
          title: "Railway Town Heritage",
          description:
            "Lobatse developed around the northbound railway in the late nineteenth century. The tracks, old routes and border-town setting still give it a distinctive place in Botswana's transport history.",
          image: "/img/states/lobatse-1.png",
        },
        {
          id: "02",
          title: "Ancient Settlements & Rock Art",
          description:
            "Stone-wall remains around Lobatse preserve traces of early Bangwaketse settlements, while faded Khoe rock paintings depict wildebeest on nearby outcrops and add another layer to the area's long story.",
          image: "/img/states/lobatse-2.png",
        },
        {
          id: "03",
          title: "Beef, Hills & Local Life",
          description:
            "Long associated with the Botswana Meat Commission, Lobatse reflects the national importance of cattle. Its dramatic hills, neighbourhood restaurants and easy pace make a rewarding southern stop.",
          image: "/img/states/lobatse-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <TrendingUp size={30} />,
        title: "Historic Railway Town",
        description: "A key stop on Botswana's north-south route",
      },
      {
        icon: <Layers size={30} />,
        title: "Layered Archaeology",
        description: "Stone settlements and centuries-old rock art",
      },
      {
        icon: <Wallet size={30} />,
        title: "Beef Industry Hub",
        description: "Cattle remain central to the town's identity",
      },
    ],
  },
  "selibe-phikwe": {
    stateSlug: "selibe-phikwe",
    shortName: "Selibe Phikwe",
    fullName: "Selibe Phikwe",
    eventSlug: "SelibePhikwe",
    hero: {
      imageUrl: "/img/states/selibe-phikwe-hero.png",
      title: "Selibe Phikwe: Reinvention, Adventure and Dam-Side Living",
    },
    discover: {
      description:
        "Experience an energetic eastern town reinventing its mining legacy through sport, leisure, enterprise and outdoor escapes.",
      slides: [
        {
          id: "01",
          title: "Letsibogo Dam Escapes",
          description:
            "Just beyond town, Letsibogo Dam opens onto broad water views, birdlife and colourful sunsets. Its developing leisure spaces make it a natural setting for picnics, waterside relaxation and outdoor adventure.",
          image: "/img/states/selibe-phikwe-1.png",
        },
        {
          id: "02",
          title: "A Town in Motion",
          description:
            "Selibe Phikwe's sporting culture comes alive through road races, cycling and community events. The town's wide streets and resilient spirit create an upbeat setting for active weekends.",
          image: "/img/states/selibe-phikwe-2.png",
        },
        {
          id: "03",
          title: "From Mining to New Possibilities",
          description:
            "Built around copper-nickel mining, the town is reshaping its industrial story through tourism, entrepreneurship and new investment while retaining the close-knit character forged by its past.",
          image: "/img/states/selibe-phikwe-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <Layers size={30} />,
        title: "Mining Heritage",
        description: "An industrial town building an ambitious next chapter",
      },
      {
        icon: <Sun size={30} />,
        title: "Letsibogo Leisure",
        description: "Dam views, birdlife and outdoor possibilities",
      },
      {
        icon: <TrendingUp size={30} />,
        title: "Sporting Energy",
        description: "Known for races and active community events",
      },
    ],
  },
  jwaneng: {
    stateSlug: "jwaneng",
    shortName: "Jwaneng",
    fullName: "Jwaneng",
    eventSlug: "Jwaneng",
    hero: {
      imageUrl: "/img/states/jwaneng-hero.png",
      title: "Jwaneng: Diamonds, Wildlife and a Remarkable Desert Town",
    },
    discover: {
      description:
        "See how modern planning, diamond history and Kalahari wildlife come together in one of Botswana's most distinctive towns.",
      slides: [
        {
          id: "01",
          title: "The Diamond Story",
          description:
            "Jwaneng grew beside one of the world's richest diamond mines by value. The town's story offers insight into the industry that helped shape modern Botswana and its remarkable national development.",
          image: "/img/states/jwaneng-1.png",
        },
        {
          id: "02",
          title: "Jwana Game Park",
          description:
            "A conservation area beside town provides habitat for wildlife including antelope, giraffe and abundant birds. Guided access offers a surprising nature experience close to Jwaneng's urban neighbourhoods.",
          image: "/img/states/jwaneng-2.png",
        },
        {
          id: "03",
          title: "Green Spaces in the Kalahari",
          description:
            "Tree-lined streets, recreation grounds and community facilities make this planned town an inviting Kalahari base, with sporting events and local gatherings adding energy throughout the year.",
          image: "/img/states/jwaneng-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <Wallet size={30} />,
        title: "Diamond Town",
        description: "Built beside a globally significant diamond mine",
      },
      {
        icon: <MapPin size={30} />,
        title: "Jwana Game Park",
        description: "Wildlife conservation on the town's doorstep",
      },
      {
        icon: <Sun size={30} />,
        title: "Planned Kalahari Oasis",
        description: "Green spaces and active community life",
      },
    ],
  },
  sowa: {
    stateSlug: "sowa",
    shortName: "Sowa Town",
    fullName: "Sowa Town",
    eventSlug: "Sowa",
    hero: {
      imageUrl: "/img/states/sowa-hero.png",
      title: "Sowa Town: Salt, Flamingos and Infinite Horizons",
    },
    discover: {
      description:
        "Step onto the edge of Sua Pan, where mineral-rich landscapes, seasonal wetlands and immense skies create an otherworldly escape.",
      slides: [
        {
          id: "01",
          title: "The Vast Sua Pan",
          description:
            "Sua Pan forms part of the immense Makgadikgadi system. Its brilliant salt crust and seemingly endless horizon create surreal scenery, transforming into a shallow blue lake after exceptional rains.",
          image: "/img/states/sowa-1.png",
        },
        {
          id: "02",
          title: "A Flamingo Spectacle",
          description:
            "When water and food conditions align, huge numbers of greater and lesser flamingos gather across Sua Pan. Their pink flocks against the pale landscape create one of Botswana's great seasonal sights.",
          image: "/img/states/sowa-2.png",
        },
        {
          id: "03",
          title: "Life in a Salt-Pan Town",
          description:
            "Purpose-built around soda-ash production, Sowa Town is a compact, welcoming base for understanding the minerals beneath the pans and exploring the striking landscapes of Botswana's east.",
          image: "/img/states/sowa-3.png",
        },
      ],
    },
    quickFacts: [
      {
        icon: <Sun size={30} />,
        title: "Makgadikgadi Horizons",
        description: "A vast salt landscape stretching toward infinity",
      },
      {
        icon: <MapPin size={30} />,
        title: "Seasonal Flamingos",
        description: "Spectacular flocks arrive when the pan floods",
      },
      {
        icon: <Wallet size={30} />,
        title: "Soda-Ash Town",
        description: "A modern community shaped by mineral production",
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
