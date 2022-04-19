const articleDao = require('./movies-dao')
const likeArticle = async (req, res) => {
  const article = req.body
  const actualArticle = await articleDao.likeArticle(article)
  res.json(actualArticle)
}
const dislikeArticle = async () => {}
const findMovieByUUID = async (req, res) => {
  const uuid = req.params.uuid
  const movie = await movieDao.findMovieByImdbID(imdbID)
  res.json(movie)
}

module.exports = (app) => {
  app.post('/api/likes', likeMovie)
  app.post('/api/dislikes', dislikeMovie)
  app.get('/api/movies/:imdbID', findMovieByImdbID)
}