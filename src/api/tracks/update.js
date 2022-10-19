const database = require('../database');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, youtube_url, id_album } = req.body;

  database
    .query(
      'UPDATE track SET title = ?, youtube_url = ?, id_album = ? WHERE id = ?',
      [title, youtube_url, id_album, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not Found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error editing album');
    });
};
