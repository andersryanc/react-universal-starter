import User from '../models/user';

export default function login(req) {
  return new Promise((resolve, reject) => {
    // TODO: Password should be encrypted
    // This setTimeout() is just to emulate a DB lookup and allow the loading spinner to show
    setTimeout(() => {
      const userOpts = {
        username: req.body.name,
        password: req.body.pass,
      };
      User.findOne( userOpts, (err, user) => {
        if ( err ) reject(err);

        if ( !user ) {
          reject({ message: 'Incorrect login.' });
        } else {
          const userObj = { name: user.username };
          req.session.user = userObj;
          resolve( userObj );
        }
      });
    }, 1000);
  });
}
