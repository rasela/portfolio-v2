module.exports = {
  siteTitle: 'Rasela | Backend Engineer',
  siteDescription:
    'Backend software engineer based in Sri Lanka who specializes in developing robust backends',
  siteKeywords:
    'Rasela Tharaka, Rasela, Tharaka, rasela, software engineer, backend engineer, backend developer, javascript',
  siteUrl: 'https://rasela.info',
  siteLanguage: 'en_US',

  // googleVerification: 'xxxxxNfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Rasela',
  location: 'Colombo, Sri Lanka',
  email: 'rasela.tharaka@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/rasela',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/rasela',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/rasela',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/__rasela',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/__rasela',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@__rasela',
  // googleAnalyticsID: 'UA-xxx66519-2',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
