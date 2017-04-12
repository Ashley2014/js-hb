console.log('before',process.env.NODE_ENV)

process.env.NODE_ENV = 'production'

console.log('after',process.env.NODE_ENV)