// This config is used in both the
// frontend as well as the web server.

// see https://github.com/askmike/gekko/blob/stable/docs/installing_gekko_on_a_server.md

const CONFIG = {
  headless: false,
  api: {
    // port: 80,
    port: 3000,
    // host: '0.0.0.0',
    host: '127.0.0.1',
    // host: 'localhost',
    timeout: 120000 // 2 minutes
  },
  ui: {
    ssl: false,
    // port: 80,
    port: 3000,
    // host: 'gordongekko.us-east-1.elasticbeanstalk.com',
    host: 'localhost',
    // host: '0.0.0.0',
    path: '/'
  },
  adapter: 'sqlite',
  // adapter: 'postgresql',
  // postgresql: {
  //   path: 'plugins/postgresql',
  //   version: 0.1,
  //   connectionString: 'postgres://budfox:GordonGekko@localhost:5432',
  //   // connectionString: 'postgres://budfox:GordonGekko@db:5432',
  //   // connectionString: 'postgres://budfox:GordonGekko@trading.cw86y7awzy2g.us-east-1.rds.amazonaws.com:5432',
  //   database: 'gekko',
  //   schema: 'public',
  //   dependencies: [{
  //     module: 'pg',
  //     version: '6.1.0'
  //   }]
  // }
}

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
