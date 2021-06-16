import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Book a restaurant", "Find an empty table near you", "Book a terrasse seat"],
    typeSpeed: 54,
    loop: true
  });
}

export { loadDynamicBannerText };
