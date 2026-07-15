'use strict';
function getUser(db, id) {
  return db.query('SELECT * FROM users WHERE id = ' + id);
}
module.exports = { getUser };
