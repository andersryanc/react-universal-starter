import Person from '../../models/person';

export default function update(req) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: Improve update method to only write the changed fields
      const id = req.body._id;
      delete req.body._id;
      const opts = {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      };
      Person.findOneAndUpdate({ _id: id }, req.body, opts, (err, person) => {
        if (err) reject( err );
        resolve( person );
      });
    }, 1000);
  });
}
