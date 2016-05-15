import Person from '../../models/person.js';
import initialPeople from './data.js';

export default function reset() {
  return new Promise((resolve, reject) => {
    Person.remove({}, (err) => {
      if ( err ) {
        console.info('Error: ' + err);
        reject();
      }

      initialPeople.map((person) => {
        const newPerson = new Person( person );
        newPerson.save((personErr) => {
          if ( personErr ) {
            console.info('Error saving new person: ' + personErr);
          }
        });
      });
      resolve();
    });
  });
}
