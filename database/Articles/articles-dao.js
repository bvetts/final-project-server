const articlesModel = require('./articles-model')



//these are not written yet

const findAllArticles = () => {}
const deleteArticle = () => {}
const findArticleByUUID = async (uuid) => {
  const article = articlesModel.findOne({uuid})
  return article
}

module.exports = {
  findMovieByUUID, deleteArticle, findAllArticles
}