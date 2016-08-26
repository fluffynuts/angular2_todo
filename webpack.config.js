const
  environment = (process.env.NODE_ENV || 'development').toLowerCase(),
  fs = require('fs'),
  conf = `./config/webpack.${environment}.js`,
  exists = fs.existsSync(conf);

if (!exists) {
  throw new Error(`Unsupported NODE_ENV: ${environment}`);
}

module.exports = require(conf);