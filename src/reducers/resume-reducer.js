const initialState = {
  // navbar: {
  //   root: '/my-site/',
  //   home: 'Home',
  //   about: 'About',
  //   work: 'Work',
  //   education: 'Education',
  //   skills: 'Skills',
  //   portfolio: 'Portfolio'
  // },
  work: { text: 'work' },
  basics: {
    name: 'Benjamin Saphier',
    text: 'My site is currently under construction. Come back soon!'
  },
  skills: { text: 'skills' },
  education: { text: 'education' },
  portfolio: { text: 'portfolio' }
};

export default (state = initialState) => (state);
