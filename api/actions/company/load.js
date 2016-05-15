import initialCompanies from './data';

export function getCompanies(req) {
  let companies = req.session.companies;
  if (!companies) {
    companies = initialCompanies;
    req.session.companies = companies;
  }
  return companies;
}

export default function load(req) {
  const err = 0;
  return new Promise((resolve, reject) => {
    // make async call to database
    setTimeout(() => {
      if ( err === 1 ) {
        reject('Company load failed.');
      } else {
        resolve(getCompanies(req));
      }
    }, 1000); // simulate async load
  });
}
