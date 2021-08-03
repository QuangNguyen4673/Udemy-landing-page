const coursesData = [
  {
    title: "python",
    header: "Expand your career opportunities with Python",
    text: "Whether you work in machine learning or finance, or arepursuing a career in web development or data science, Python is one of the most important skills youcan learn .Python's simple syntax is especially suited for desktop, web, and business applications.Python's design philosophy ... ",
    img: "./images/udemy-author.png",
  },
  {
    title: "excel",
    header: "Analyze and visualize data with Excel",
    text: "Regarless of the industry you work in, Microsoft Office Excelis an invaluable spreadsheetprogram for organizing and representing data. Excel offersfunctions, formulas, pivot tables to help you aggregate and then analyze large sets ofinformation. Excel first truly appeared on ... ",
    img: "./images/udemy-author1.png",
  },
  {
    title: "web development",
    header: "Build websites and applications with Web Development",
    text: "The world of web development is as wide as the internetitself. Much of our social and vocational lives play out on the internet, which prompts newindustries aimed at creating, managing, and debugging the websites and applications that weincreasingly rely on.",
    img: "./images/udemy-author2.png",
  },
  {
    title: "javascript",
    header: "Grow your software development skills with JavaScript",
    text: "JavaScript is one of the most ubiquitous programming languages on the planet, mostly because it's the backbone of interactive web applications. On top of that, JavaScript is a great language for beginners because it gives them a chance to write...",
    img: "./images/udemy-author3.png",
  },
  {
    title: "data science",
    header: "Lead data-driven decisions with Data Science",
    text: "Data science is everywhere. Better data science practices are allowing corporations to cut unnecessary costs, automate computing, and analyze markets. Essentially, data science is the key to getting ahead in a competitive global climate.",
    img: "./images/udemy-author4.png",
  },
];
const slideData = [
  {
    header: "2021 Complete Python Bootcamp From Zero to Hero in Python",
    img: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg?secure=xXCv7OcskzlXDlax1nLtWg%3D%3D%2C1611134061",
    author: "Jose Portilla",
    rate: 4.6,
    price: 9.99,
    originalPrice: 129.99,
    enrollerNum: 328319,
    isBestSeller: true,
  },
  {
    header: "Machine Learning A-Z &trade;: Hands-On Python & R in DataScience",
    img: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    author: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScienceTeam",
    rate: 4.5,
    price: 11.99,
    originalPrice: 129.99,
    enrollerNum: 139405,
    isBestSeller: true,
  },
  {
    header: "Python for Data Science and Machine Learning Bootcamp",
    img: "https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg",
    author: "Jose Portilla",
    rate: 4.6,
    price: 11.99,
    originalPrice: 129.99,
    enrollerNum: 94019,
    isBestSeller: false,
  },
  {
    header: "Learn Python Programming Masterclass",
    img: "https://img-c.udemycdn.com/course/240x135/629302_8a2d_2.jpg",
    author:
      "Tim Buchalka, Jean-Paul Roberts, Tim Buchalka's LearnProgramming Academy",
    rate: 4.5,
    price: 9.99,
    originalPrice: 129.99,
    enrollerNum: 66881,
    isBestSeller: false,
  },
  {
    header: "The Python Mega Course: Build 10 Real World Applications",
    img: "https://img-c.udemycdn.com/course/240x135/692188_9da7_21.jpg",
    author: "Ardit Sulce",
    rate: 4.5,
    price: 11.99,
    originalPrice: 129.99,
    enrollerNum: 45786,
    isBestSeller: true,
  },
  {
    header: "100 Days of Code - The Complete Python Pro Bootcamp for 2021",
    img: "https://img-c.udemycdn.com/course/240x135/2776760_f176_5.jpg?Expires=1623984142&Signature=Zq-suFrFtiiy3GuBvAFpUCFin88ixGHkkurfStXFzicfFFuoct94xLjJXZh--zVyXv3wdftiEkPTqYbUrKt8YqVYtWaCvp6onlouvI2JqDxTtc25Iz7v-nSXR8McUNJ0-E36FHDevdSp59tulZQ-XchjNBxG-bFQkIMdqjLyrtnwL9txMLQKBngtz-nlCw9t9V6cFK2YCCOcKwMxNGLC0TWqNC4DRpDQAVp-c78BxNTr9ljyuHFTE44Hy58SQsG07-4tcsDLgmdaFk4KsYxXew1reCdkgGUI3CyAlYgyotjD2A4nF9Pv3wmXTv~SX2At6EMTSqCiIKMwmzXHMwMFzQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
    author: "DR Angela Yu",
    rate: 4.7,
    price: 13.99,
    originalPrice: 94.94,
    enrollerNum: 33893,
    isBestSeller: false,
  },
  {
    header: "Learning Python for Data Analysis and Visualization",
    img: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
    author: "Jose Portilla",
    rate: 4.4,
    price: 12.99,
    originalPrice: 89.99,
    enrollerNum: 16492,
    isBestSeller: true,
  },
];
const categoriesData = [
  {
    title: "Design",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg",
  },
  {
    title: "Development",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-development.jpg",
  },
  {
    title: "Marketing",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-marketing.jpg",
  },
  {
    title: "IT And Software",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg",
  },
  {
    title: "Personal Development",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg",
  },
  {
    title: "Business",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-business.jpg",
  },
  {
    title: "Photography",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-photography.jpg",
  },
  {
    title: "Music",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-music.jpg",
  },
];
