const Router = require('koa-router');

const router = new Router();

const userController = require('../controller/user'); 

router
  .get('/signin', userController.signin)


module.exports = router;

