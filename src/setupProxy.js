const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  let use = app.use(
    createProxyMiddleware('/subgraphs/name/oeth/ethereum-blocks', {
      target: 'http://124.71.108.6:8000',
      changeOrigin: true,
    }),
    createProxyMiddleware('/subgraphs/name/oeth-uniswap/uniswap', {
      target: 'http://124.71.108.6:8000',
      changeOrigin: true,
    }),
    createProxyMiddleware('/index-node/graphql', {
      target: 'http://124.71.108.6:8020',
      changeOrigin: true,
    })
  )
}
