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
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/nutfield-digital",
  },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: "https://www.nutfielddigital.com",
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};
