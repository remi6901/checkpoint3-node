const database = require('../database.js');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query(
      'SELECT * FROM album JOIN track ON track.id_album=album.id WHERE album.id = ?',
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
