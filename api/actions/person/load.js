import Person from '../../models/person';

export default function load( req, params ) {  /* load(req) */
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ( params.length && params[0].length ) {
        Person.findById( params[0], (err, person) => {
          if ( err ) reject( err );
          resolve( person );
        });
      } else {
        Person.find((err, people) => {
          if ( err ) reject( err );
          resolve( people );
        });
      }
    }, 1000);
  });
}
