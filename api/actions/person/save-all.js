import Person from '../../models/person';

export default function saveAll(req) {
  return new Promise((resolve, reject) => {
    const people = req.body;
    setTimeout(() => {
      let updated = 0;
      let error = false;
      people.map((person) => {
        const id = person._id;
        delete person._id;
        Person.update({ _id: id }, person, {upsert: true, setDefaultsOnInsert: true}, (err) => {
          if ( err ) {
            error = err;
          } else {
            updated++;
          }
        });
      });

      if ( error ) reject( error );
      resolve({ updated, people });
    }, 1000);
  });
}
