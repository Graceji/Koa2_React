const signin = async (ctx) => {
  await ctx.render('index', {
    title: '首页'
  })
}

module.exports = {
  signin
}