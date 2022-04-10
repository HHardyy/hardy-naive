module.exports = async (ctx, next) => {
  if (ctx.path.includes('/api/post')) {
    ctx.body = ctx.request.body
  }
  if (ctx.path.includes('/api/get')) {
    ctx.body = ctx.query
  }
  next()
}