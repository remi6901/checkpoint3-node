const database = require('../database');

module.exports = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  database
    .query(
      'INSERT INTO album (title, genre, picture, artist) VALUES (?, ?, ?, ?)',
      [title, genre, picture, artist]
    )
    .then(([result]) => {
      res.location(`/api/albums/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving the movie');
    });
};
