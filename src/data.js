export const data = {
  projects: [
    {
      id: 1,
      basic: {
        title: 'KittyChat',
        src: 'kingMax',
        github: 'https://github.com/fifete/kittychat-frontend',
        demo: 'https://voluble-custard-29d29e.netlify.app/'
      },
      modal: {
        title: 'KittyChat',
        rol: 'Frontend Developer | Designer UX',
        description: `kitty chat 😸 is an instant 📲 messaging application where you can create channels or join them to connect with your friends 👭👩🏼‍🤝‍🧑🏽.`
      }
    },
    {
      id: 2,
      basic: {
        title: 'A+Aventuras',
        src: 'a+Aventuras',
        github: 'https://github.com/fifete/turist-social-network',
        demo: 'https://fifete.github.io/turist-social-network/'
      },
      modal: {
        title: 'A+Aventuras',
        rol: 'Frontend Developer',
        description: `Red social 👨‍👩‍👧‍👧 donde el usuario pueda promocionar el turismo de diferentes partes del mundo 🌎, al redactar su experiencia 📝 y publicar una foto 📷 del lugar.`
      }
    }
  ],
  technologies: [
    {
      name: 'Figma',
      src: 'https://img.icons8.com/office/45/000000/figma.png',
      projects: [1, 2]
    },
    {
      name: 'Firebase',
      src: 'https://img.icons8.com/color/48/000000/firebase.png',
      projects: [2]
    },
  ],
};
