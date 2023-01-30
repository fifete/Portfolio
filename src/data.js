export const data = {
  projects: [
    {
      id: 0,
      categories: ['web', 'responsive', 'featured'],
      basic: {
        title: 'expense tracker 💰',
        src: 'expenseTracker',
        github: 'https://github.com/fifete/ExpensesTrackerAPI',
        demo: 'https://expenses-tracker-ed.netlify.app/'
      },
      modal: {
        title: 'Expense Tracker app',
        rol: 'Fullstack Developer | Designer UI & UX',
        description: `App to manage monetary expenses and provide 🔍info about the amount of money 💵💸 that the user spends in different categories and thus, be able to take some concrete action on them.`
      }
    },
    {
      id: 1,
      categories: ['web', 'featured'],
      basic: {
        title: 'KittyChat 😸',
        src: 'kittyChat',
        github: 'https://github.com/fifete/kittychat-frontend',
        demo: 'https://kittychatlim018.netlify.app/'
      },
      modal: {
        title: 'KittyChat',
        rol: 'Frontend Developer | Designer UX',
        description: `kitty chat 😸 is an instant 📲 messaging application where you can create channels or join them to connect with your friends 👭👩🏼‍🤝‍🧑🏽 and share messages 📃.`
      }
    },
    {
      id: 2,
      categories: ['web', 'responsive', 'featured'],
      basic: {
        title: 'A+Aventuras 👨‍👩‍👧‍👧',
        src: 'a+Aventuras',
        github: 'https://github.com/fifete/turist-social-network',
        demo: 'https://fifete.github.io/turist-social-network/'
      },
      modal: {
        title: 'A+Aventuras',
        rol: 'Frontend Developer',
        description: `Social network 👨‍👩‍👧‍👧 where the user can promote tourism from different parts of the world 🌎, by writing their experience 📝 and posting a photo 📷 of that place.`
      }
    },
    {
      id: 3,
      categories: ['web'],
      basic: {
        title: 'Burgerqueen 🍔',
        src: 'burguerQueen',
        github: 'https://github.com/fifete/LIM018-burger-queen',
        demo: 'https://burguerqueens.netlify.app/'
      },
      modal: {
        title: 'Burgerqueen',
        rol: 'Frontend Developer | Designer UI & UX',
        description: `Burger Queen 🍔 🍟 is an order management platform, focused on users from a restaurant with the following roles: 👩 Administrator, 🤵 Waiter and 👩‍🍳 Chef.`
      }
    },
    {
      id: 4,
      categories: ['web', 'responsive'],
      basic: {
        title: 'Studio Ghibli 🎥',
        src: 'studioGhibli',
        github: 'https://github.com/fifete/studio-ghibli',
        demo: 'https://fifete.github.io/studio-ghibli/'
      },
      modal: {
        title: 'Studio Ghibli',
        rol: 'Frontend Developer | Designer UI & UX',
        description: `Information about the movies 🎥 of the animated studio Studio Ghibli that can be filtered and sorted 📂`
      }
    },
    {
      id: 5,
      categories: ['web'],
      basic: {
        title: 'KingMax 💳',
        src: 'kingMax',
        github: 'https://github.com/fifete/Card-validation',
        demo: 'https://fifete.github.io/Card-validation/'
      },
      modal: {
        title: 'KingMax',
        rol: 'Frontend Developer | Designer UI & UX',
        description: `Validation of the card number 💳 to make the payment of the service subscription 🎦 KINGMAX`
      }
    },
    {
      id: 6,
      categories: [],
      basic: {
        title: 'your-markdown-links 📊',
        src: 'your-md',
        github: 'https://github.com/fifete/your-md-links',
        demo: 'https://www.npmjs.com/package/your-markdown-links'
      },
      modal: {
        title: 'your-markdown-links',
        rol: 'NodeJS Developer',
        description: `Command line library (CLI) developed with Node. js, which allows to validate and report some statistics📊 about the URLs found in files 📁 in Markdown 📑 format given a path.`
      }
    }
  ],
  technologies: [
    {
      name: 'ReactJS',
      src: 'https://img.icons8.com/color/48/000000/react-native.png',
      projects: [1, 0],
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
      name: 'Bootstrap',
      src: 'https://img.icons8.com/color/48/null/bootstrap.png',
      projects: [0],
      categories: ['frontend']
    },
    {
      name: 'Firebase',
      src: 'https://img.icons8.com/color/48/000000/firebase.png',
      projects: [2, 3],
      categories: ['backend']
    },
    {
      name: 'ASP.net core web api',
      src: 'https://img.icons8.com/color/48/null/net-framework.png',
      projects: [0],
      categories: ['backend']
    },
    {
      name: 'PostgreSQL',
      src: 'https://img.icons8.com/color/48/null/postgreesql.png',
      projects: [0, 1],
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
      projects: [],
      categories: ['design']
    },
  ],
};
