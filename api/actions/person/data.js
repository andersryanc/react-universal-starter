const peopleData = [
  {
    // id: 1,
    name: { first: 'Ryan', last: 'Anderson' },
    emails: [
      { type: 'work', address: 'ryan@7apps.com' },
      { type: 'home', address: 'anderson.ryanc@gmail.com' },
    ],
    phones: [
      { type: 'cell', number: '971-271-9822', sms: true },
      { type: 'work', number: '855-757-2777', sms: false },
    ],
    addresses: [
      { type: 'work',
        street: '2006 SE Clinton St.', line2: '', city: 'Portland', state: 'OR', zip: '97202',
        geo: { lat: 45.5032361, lng: -122.6476029 },
      },
      { type: 'home',
        street: '11635 SE Alder St.', line2: '', city: 'Portland', state: 'OR', zip: '97216',
        geo: { lat: 45.5177997, lng: -122.5453147 },
      },
    ],
    urls: [
      { type: 'website', address: 'http://ryancanderson.com' },
      { type: 'website', address: 'http://7apps.com' },
      { type: 'facebook', address: 'https://www.facebook.com/anderson.ryanc' },
      { type: 'twitter', address: 'https://twitter.com/andersryanc' },
    ],
    companies: [
      // { type: 'agency', id: 1 },
    ],
  },

  {
    // id: 2,
    name: { first: 'Juan', last: 'Fernandez' },
    emails: [
      { type: 'work', address: 'juan@7apps.com' },
    ],
    phones: [
      { type: 'cell', number: '407-278-8398', sms: true },
      { type: 'work', number: '855-757-2777', sms: false },
    ],
    addresses: [
      { type: 'work',
        street: '2006 SE Clinton St.', line2: '', city: 'Portland', state: 'OR', zip: '97202',
        geo: { lat: 45.5032361, lng: -122.6476029 },
      },
    ],
    urls: [],
    companies: [
      // { type: 'agency', id: 1 },
    ],
  },

  {
    // id: 3,
    name: { first: 'Gray', last: 'Ayer' },
    emails: [
      { type: 'work', address: 'gray@7apps.com' },
      { type: 'home', address: 'grayayer@gmail.com' },
    ],
    phones: [
      { type: 'work', number: '855-757-2777', sms: false },
    ],
    addresses: [],
    urls: [],
    companies: [
      // { type: 'agency', id: 1 },
    ],
  },

  {
    // id: 4,
    name: { first: 'Colby', last: 'McCormick' },
    emails: [
      { type: 'work', address: 'colby@7apps.com' },
    ],
    phones: [
      { type: 'work', number: '855-757-2777', sms: false },
    ],
    addresses: [],
    urls: [],
    companies: [
      // { type: 'agency', id: 1 },
    ],
  },
];

export default peopleData;
