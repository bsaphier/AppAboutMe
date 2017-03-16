import WebFont from 'webfontloader';


const webFontConfigCurry = (fontsActiveCB) => ({
  google: {
    families: ['Roboto:100,100i,400,500,900']
  },
  custom: {
    families: ['fontello'],
    // *TODO url needs to change if running locally vs gh-pages
    // '/app-about-me/public/bin/fonts.css'
    urls: ['public/bin/fontIcons.css']
  },
  active: fontsActiveCB,
  timeout: 4000
});


// pass in a callback so the app will not render until the
// state/store knows that the fonts have loaded
export default fontsDidLoadCB => WebFont.load(webFontConfigCurry(fontsDidLoadCB));
