const companyData = [
  {
    id: 1,
    name: '7/Apps Inc.',
    phones: [
      { type: 'fax', number: '503-738-3678', sms: false },
      { type: 'work', number: '855-757-2777', sms: false },
    ],
    addresses: [
      { name: 'Portland Office',
        street: '2006 SE Clinton St.', line2: '', city: 'Portland', state: 'OR', zip: '97202',
        geo: { lat: 45.5032361, lng: -122.6476029 },
      },
    ],
    urls: [
      { type: 'website', address: 'http://7apps.com' },
      { type: 'facebook', address: 'https://www.facebook.com/7apps' },
      { type: 'twitter', address: 'https://twitter.com/7Apps' },
    ],
  },
];

export default companyData;
