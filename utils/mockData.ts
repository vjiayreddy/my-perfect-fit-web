import {
  faqType,
  findStylistCardDataType,
  looksCardDataType,
  mediaDataType,
  mostLovedDataType,
} from "@/typescript/types";

export const homeAchivements = [
  {
    id: 1,
    primaryTitle: "12,000+",
    secondaryTitle: "Clients Served",
    iconifyName: "clarity:users-line",
  },
  {
    id: 2,
    primaryTitle: "7000+",
    secondaryTitle: "Grooms Served",
    iconifyName: "ion:shirt-outline",
  },
  {
    id: 3,
    primaryTitle: "10000+",
    secondaryTitle: "Outfits Delivered",
    iconifyName: "ion:shirt-outline",
  },
  {
    id: 4,
    primaryTitle: "20+",
    secondaryTitle: "Cities Served",
    iconifyName: "streamline:city-hall",
  },
];

export const homeFaqs: faqType[] = [
  {
    _id: 1,
    question: "How can i get Started?",
    answer: `There are multiple ways you can get started with My Perfect Fit i.e. Order online, visit our flagship or set up the video call appointment with our stylist. If confused where to start,, just book an appointment and we will assist you in the entire process.`,
  },
  {
    _id: 2,
    question: "What are the products you customize?",
    answer: `We customize menswear for all occasions and events including wedding suits, tuxedos, two piece suits, three piece suits, wedding sherwani,kurtas, sadris,indo-werstern and sherwanis, formal shirts, casual shirts and trousers. We also customize ethnic jhooti or shoes to match the outfit you are wearing. You can get a completely customised outfit from head to toe from My Perfect Fit.`,
  },
  {
    _id: 3,
    question: "How good is My Perfect Fit on the quality of your products?",
    answer: `Our garments are hand-checked to ensure our product is of the highest quality and meets your expectations. We have various quality fabrics depending on your choice of selection. We also have a variety of fabrics for suits, shirts, trousers, sherwani’s, kurtas etc from around the world.`,
  },
  {
    _id: 4,
    question: "Do you offer custom design for your products?",
    answer: `Yes, My Perfect Fit offers custom designs like monograms of initials of your name or company name on shirts and suits. We also have custom designs for wedding wear and event wear for our clients. We also offer custom designs based on your specifications which you can find when you are ordering a particular product. Every product of My Perfect Fit has a customised option to help you make it your own.`,
  },
];

export const homeFindStylist: findStylistCardDataType[] = [
  {
    _id: 1,
    image: "/assets/images/others/talk_to_stylist.png",
    name: "Talk to a stylist",
    description: `Get expert, personalised help from stylists to help you make the right fashion decisions`,
    btnTitle: "Book an Appointment",
    icon: "fontisto:date",
  },
  {
    _id: 2,
    image: "/assets/images/others/studio.png",
    name: "Visit our store",
    description: `Meet us in person at ourstudios and discover our tech-enabled approach to fashion`,
    btnTitle: "Find Location",
    icon: "carbon:location",
  },
  {
    _id: 3,
    image: "/assets/images/others/video_call.png",
    name: "Schedule a video call",
    description: `Shop from any place and any device through video calls with our stylists`,
    btnTitle: "Book an Appointment",
    icon: "fontisto:date",
  },
];

export const homeLooks: looksCardDataType[] = [
  {
    _id: 1,
    image:
      "https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/Looks/607abad5964518190c3b5895_0.jpg",
    name: "Blue Tuxedo Look",
  },
  {
    _id: 2,
    image:
      "https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/Looks/6065c38d6ed95c29fc8cea9d_0.jpg",
    name: "Grey Semi Formal Linen Look",
  },
  {
    _id: 3,
    image:
      "https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/Looks/606aacc42122f61d70139712_0.jpg",
    name: "Medium Blue Casual Look",
  },
  {
    _id: 4,
    image:
      "https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/Looks/6065c38f6ed95c29fc8ceaa0_0.jpg",
    name: "Casual Black Linen Look",
  },
  {
    _id: 5,
    image:
      "https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/Looks/606aacbf2122f61d701396f2_0.jpg",
    name: "Green Causual Look",
  },
  {
    _id: 6,
    image:
      "https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/Looks/607abad7964518190c3b5899_0.jpg",
    name: "Maroon Tuxedo Look",
  },
  {
    _id: 7,
    image:
      "https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/Looks/6065c3936ed95c29fc8ceaa6_0.jpg",
    name: "Light Blue Semi Formal Look",
  },
  {
    _id: 8,
    image:
      "https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/Looks/60c710f12a1aa540143f0c06_0.jpg",
    name: "Orange Suit with Green Checks Look",
  },
];

export const homeMedia: mediaDataType[] = [
  {
    _id: 1,
    name: "Fever FM",
    image: "/assets/media/Fever FM Logo.jpg",
    link: "",
  },
  {
    _id: 2,
    name: "Hybiz TV",
    image: "/assets/media/Hybiz TV.png",
    link: "",
  },
  {
    _id: 3,
    name: "India Express",
    image: "/assets/media/India Express.jpg",
    link: "",
  },
  {
    _id: 4,
    name: "IndiaAhead",
    image: "/assets/media/IndiaAhead.jpg",
    link: "",
  },
  {
    _id: 5,
    name: "Nasscom-Logo",
    image: "/assets/media/Nasscom-Logo.png",
    link: "",
  },
  {
    _id: 6,
    name: "TimeofIndia",
    image: "/assets/media/TimeofIndia.png",
    link: "",
  },
  {
    _id: 7,
    name: "TV9 News Channel",
    image: "/assets/media/TV9 News Channel.png",
    link: "",
  },
];

export const homeMostLoved: mostLovedDataType[] = [
  {
    _id: 1,
    name: "Google",
    totalReviews: 1076,
    rating: 4.8,
    icon: "/assets/icons/google.webp",
  },
  {
    _id: 2,
    name: "WedMeGood",
    totalReviews: 184,
    rating: 4.8,
    icon: "/assets/icons/wedmegood.png",
  },
  {
    _id: 3,
    name: "Jd",
    totalReviews: 1076,
    rating: 4.8,
    icon: "/assets/icons/jd.webp",
  },
];

export const appointmenType = [
  {
    name: "Video Call",
    value: "viode_call",
  },
  {
    name: "Studio Visit",
    value: "studio_visit",
  },
];

export const smapleAddresses = [
  {
    id: 1,
    fullName: "Rajesh Kumar",
    address: "House No. 123, Sector 12, Noida, Uttar Pradesh",
  },
  {
    id: 2,
    fullName: "Kiran Kumar",
    address: "House No. 123, Sector 12, Noida, Uttar Pradesh",
  },
  {
    id: 3,
    fullName: "Ranjith Kumar",
    address: "House No. 123, Sector 12, Noida, Uttar Pradesh",
  },
  {
    id: 4,
    fullName: "Vijay Kumar",
    address: "House No. 123, Sector 12, Noida, Uttar Pradesh",
  },
  {
    id: 5,
    fullName: "Vinod Kumar",
    address: "House No. 123, Sector 12, Noida, Uttar Pradesh",
  },
  {
    id: 6,
    fullName: "Praveen Kumar",
    address: "House No. 123, Sector 12, Noida, Uttar Pradesh",
  },
];
