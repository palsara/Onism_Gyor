const Article = require('../models/articleModel');
const article = new Article();


module.exports = class ArticleController {

  async read_articles(req, res) {
    await article.readArticles((err, articles) => {
      if (err) res.send(err);
      res.send(articles);
    })
  };

  create_article(req, res) {
    const new_article = new Article(req.body);
    if (!new_article.title || !new_article.text) {
      res.status(400).send({
        error: true,
        message: 'Please provide all informations'
      });
    } else {
      article.createArticle(new_article, (err, article) => {
        if (err) res.send(err);
        res.json(article);
      })
    }
  };

  read_article(req, res) {
    article.readArticleBySeo(req.params.seo, (err, article) => {
      if (err) res.send(err);
      res.json(article);
    })
  };
  
  update_article(req, res) {
    article.updateArticle(req.params.seo, new Article(req.body), (err, article) => {
      if (err) res.send(err);
      res.json(article);
    })
  };
  
  delete_article(req, res) {
    article.deleteArticle(req.params.seo, (err, article) => {
      if (err) res.send(err);
      res.json({
        message: 'Article succesfully deleted'
      });
    })
  };
}