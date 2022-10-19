const database = require('../database');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query('DELETE FROM album WHERE id = ?', [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not Found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error deleting the movie');
    });
};
