const mysql = require('../config/mysql');


module.exports = class Article {

  constructor(article = {}) {
    this.title = article.title;
    this.seotitle = article.seotitle;
    this.text = article.text;
    this.keywords = article.keywords;
  };

  createArticle(newArticle, result) {
    mysql.query('INSERT INTO cikkek SET ?', newArticle, (err, res) => {
      if (err) result(err, null);
      result(null, res.insertId);
    })
    return result;
  };

  readArticleBySeo(seo, result) {
    mysql.query('SELECT * from cikkek where seotitle = ?', seo, (err, res) => {
      if (err) result(err, null);
      result(null, res);
    })
    return result;
  };

  readArticles(result) {
    mysql.query('SELECT * from cikkek', (err, res) => {
      if (err) result(err, null);
      result(null, res);
    })
    return result;
  };

  updateArticle(seo, article, result) {
    mysql.query('UPDATE cikkek SET  title = ?, seotitle= ?, text= ?, keywords= ? WHERE seotitle = ?', [article.title, article.seotitle, article.text, article.keywords, seo], (err, res) => {
      if (err) result(err, null);
      result(null, res);
    })
    return result;
  };

  deleteArticle(seo, result) {
    mysql.query('DELETE FROM cikkek WHERE seotitle = ?', [seo], (err, res) => {
      if (err) result(err, null);
      result(null, res);
    })
    return result;
  };
}