const database = require('../database.js');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query(
      'SELECT a.artist, a.title AS title_album, t.title AS title_track FROM album AS a JOIN track AS t ON t.id_album=a.id WHERE a.id = ?',
      [id]
    )
    .then(([album]) => {
      res.json(album);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};
