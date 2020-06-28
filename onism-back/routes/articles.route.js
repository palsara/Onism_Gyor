const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/articleController');
const articleController = new ArticleController();


router.route('/')
  .get(articleController.read_articles)
  .post(articleController.create_article);

router.route('/:seo')
  .get(articleController.read_article)
  .put(articleController.update_article)
  .delete(articleController.delete_article);

module.exports = router;