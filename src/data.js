export const data = {
  projects: [
    {
      id: 1,
      categories: ['web', 'featured'],
      basic: {
        title: 'KittyChat ๐ธ',
        src: 'kittyChat',
        github: 'https://github.com/fifete/kittychat-frontend',
        demo: 'https://kittychatlim018.netlify.app/'
      },
      modal: {
        title: 'KittyChat',
        rol: 'Frontend Developer | Designer UX',
        description: `kitty chat ๐ธ is an instant ๐ฒ messaging application where you can create channels or join them to connect with your friends ๐ญ๐ฉ๐ผโ๐คโ๐ง๐ฝ and share messages ๐.`
      }
    },
    {
      id: 2,
      categories: ['web', 'responsive', 'featured'],
      basic: {
        title: 'A+Aventuras ๐จโ๐ฉโ๐งโ๐ง',
        src: 'a+Aventuras',
        github: 'https://github.com/fifete/turist-social-network',
        demo: 'https://fifete.github.io/turist-social-network/'
      },
      modal: {
        title: 'A+Aventuras',
        rol: 'Frontend Developer',
        description: `Social network ๐จโ๐ฉโ๐งโ๐ง where the user can promote tourism from different parts of the world ๐, by writing their experience ๐ and posting a photo ๐ท of that place.`
      }
    },
    {
      id: 3,
      categories: ['web', 'featured'],
      basic: {
        title: 'Burgerqueen ๐',
        src: 'burguerQueen',
        github: 'https://github.com/fifete/LIM018-burger-queen',
        demo: 'https://burguerqueens.netlify.app/'
      },
      modal: {
        title: 'Burgerqueen',
        rol: 'Frontend Developer | Designer UI & UX',
        description: `Burger Queen ๐ ๐ is an order management platform, focused on users from a restaurant with the following roles: ๐ฉ Administrator, ๐คต Waiter and ๐ฉโ๐ณ Chef.`
      }
    },
    {
      id: 4,
      categories: ['web', 'responsive'],
      basic: {
        title: 'Studio Ghibli ๐ฅ',
        src: 'studioGhibli',
        github: 'https://github.com/fifete/studio-ghibli',
        demo: 'https://fifete.github.io/studio-ghibli/'
      },
      modal: {
        title: 'Studio Ghibli',
        rol: 'Frontend Developer | Designer UI & UX',
        description: `Information about the movies ๐ฅ of the animated studio Studio Ghibli that can be filtered and sorted ๐`
      }
    },
    {
      id: 5,
      categories: ['web'],
      basic: {
        title: 'KingMax ๐ณ',
        src: 'kingMax',
        github: 'https://github.com/fifete/Card-validation',
        demo: 'https://fifete.github.io/Card-validation/'
      },
      modal: {
        title: 'KingMax',
        rol: 'Frontend Developer | Designer UI & UX',
        description: `Validation of the card number ๐ณ to make the payment of the service subscription ๐ฆ KINGMAX`
      }
    },
    {
      id: 6,
      categories: [],
      basic: {
        title: 'your-markdown-links ๐',
        src: 'your-md',
        github: 'https://github.com/fifete/your-md-links',
        demo: 'https://www.npmjs.com/package/your-markdown-links'
      },
      modal: {
        title: 'your-markdown-links',
        rol: 'NodeJS Developer',
        description: `Command line library (CLI) developed with Node. js, which allows to validate and report some statistics๐ about the URLs found in files ๐ in Markdown ๐ format given a path.`
      }
    }
  ],
  technologies: [
    {
      name: 'ReactJS',
      src: 'https://img.icons8.com/color/48/000000/react-native.png',
      projects: [1],
      categories: ['frontend']
    },
    {
      name: 'Angular',
      src: 'https://img.icons8.com/color/48/000000/angularjs.png',
      projects: [3],
      categories: ['frontend']
    },
    {
      name: 'JavaScript',
      src: 'https://img.icons8.com/color/48/000000/javascript.png',
      projects: [2, 4, 5, 6],
      categories: ['frontend']
    },
    {
      name: 'Typescript',
      src: 'https://img.icons8.com/color/48/000000/typescript.png',
      projects: [3],
      categories: ['frontend']
    },
    {
      name: 'HTML5',
      src: 'https://img.icons8.com/color/48/000000/html-5.png',
      projects: [2, 4, 5],
      categories: ['frontend']
    },
    {
      name: 'CSS3',
      src: 'https://img.icons8.com/color/48/000000/css3.png',
      projects: [1, 2, 3, 4, 5],
      categories: ['frontend']
    },
    {
      name: 'Firebase',
      src: 'https://img.icons8.com/color/48/000000/firebase.png',
      projects: [2, 3],
      categories: ['backend']
    },
    {
      name: 'PostgreSQL',
      src: 'https://img.icons8.com/color/48/000000/postgresql.png',
      projects: [1],
      categories: ['backend']
    },
    {
      name: 'NodeJS',
      src: 'https://img.icons8.com/color/48/000000/nodejs.png',
      projects: [6],
      categories: ['backend']
    },
    {
      name: 'Jasmine',
      src: 'https://i.imgur.com/ITpVQxz.png',
      projects: [3],
      categories: ['testing']
    },
    {
      name: 'Jest',
      src: 'https://i.imgur.com/iLtGD5c.png',
      projects: [2, 4, 5],
      categories: ['testing']
    },
    {
      name: 'Figma',
      src: 'https://img.icons8.com/office/48/000000/figma.png',
      projects: [],
      categories: ['design']
    },
    {
      name: 'Canva',
      src: 'https://img.icons8.com/fluency/48/null/canva-app.png',
      projects: [0],
      categories: ['design']
    },
  ],
};
