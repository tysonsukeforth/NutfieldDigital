module.exports = {
  name: "Nutfield Digital",
  email: "nutfielddigital@gmail.com",
  phoneForTel: "603-438-0436",
  phoneFormatted: "(603) 438-0436",
  address: {
    city: "Derry",
    state: "NH",
    zip: "03038",
    country: "US",
    mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
  },
  // socials: {
  //   facebook: "https://www.facebook.com/",
  //   instagram: "https://www.instagram.com/",
  // },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: "https://www.nutfielddigital.com",
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};
