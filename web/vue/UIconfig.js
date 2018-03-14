// This config is used in both the
// frontend as well as the web server.

// see https://github.com/askmike/gekko/blob/stable/docs/installing_gekko_on_a_server.md

const CONFIG = {
  headless: false,
  api: {
    // host: '127.0.0.1',
    // port: 3000,
    host: '0.0.0.0',
    port: 80,
    timeout: 120000 // 2 minutes
  },
  ui: {
    ssl: false,
    // host: '0.0.0.0',
    // port: 3000,
    host: 'gordongekko.us-east-1.elasticbeanstalk.com',
    port: 80,
    path: '/'
  },
  adapter: 'postgresql',
  postgresql: {
    path: 'plugins/postgresql',
    version: 0.1,
    connectionString: 'postgres://budfox:GordonGekko@trading.cw86y7awzy2g.us-east-1.rds.amazonaws.com:5432',
    database: 'gekko',
    schema: 'public',
    dependencies: [{
      module: 'pg',
      version: '6.1.0'
    }]
  }
}

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
