require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  database: process.env.MONGO_URI || 'localhost/campout',
  app: {
    title: 'RUSK',
    description: 'React Universal Starter Kit.',
    head: {
      titleTemplate: 'RUSK: %s',
      meta: [
        {name: 'description', content: 'React Universal Starter Kit.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'CampOut'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'RUSK'},
        {property: 'og:description', content: 'React Universal Starter Kit.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@andersryanc'},
        {property: 'og:creator', content: '@andersryanc'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
