const db = require('../db');

const getUsers = (_, res) => {
  const q = 'SELECT * FROM usuarios';

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

module.exports = { getUsers };
