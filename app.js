//####################################################################
//    require modules
//####################################################################
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const openapi = require('express-openapi');
const yaml = require('js-yaml');
//const uuidv4 = require('uuid/v4');
const compression = require('compression');
const _ = require('lodash');
//####################################################################
//    require helper
//####################################################################
//const validateHelper = require('./helpers/validate');

var version = require('./package.json').version;

const fs = require('fs');
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)
//const configHelper = require('./helpers/config')


const openAPISpec = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, 'openapi.yaml'), 'utf8'));
//const serverLocation = _.filter(openAPISpec.servers, {'description': configHelper.getCodeEnv()})[0].url;
const serverLocation = _.filter(openAPISpec.servers, {'description': 'local'})[0].url;


const mssqlDBAdapter = require("./database-adapters/MssqlDBAdapter");
const OracleDBAdapter = require("./database-adapters/OracleDBAdapter");

const resHelper = require('./helpers/response');
//const errConst = require('./constants/error');
//const cronHelper = require('./helpers/node-cron');

/////////////////////////////////
// DB testing
////////////////////////////////
//const { Sequelize } = require('sequelize');
// const Connection = require('tedious').Connection;
// 
// const connection = new Connection({
//     userName: 'webuser',
//     password: 'web97',
//     server: 'mssqleform.midland.com.hk',
//     database: 'intranet',
//     options: { 
//       tdsVersion: '7_1'
//     }
// });
// 
// connection.on('connect', (err) => {
//     if (err) {
//         console.log('error connecting', err);
//     } else {
//         console.log('connection successful');
//     }
// });
// 
// connection.connect();

// const { Sequelize, DataTypes } = require('sequelize');
// 
// const sequelize = new Sequelize('intranet', 'webuser', 'web97', {
//     dialect: 'mssql',
//     host: 'mssqleform.midland.com.hk',
//     dialectOptions: {
//         encrypt: false,
//         tdsVersion: '7.1'
//     }
// });
// 
// sequelize.authenticate().then((err) => {
//     console.log('Connection successful', err);
// })
// .catch((err) => {
//     console.log('Unable to connect to database', err);
// });
// 
// 
// const Employee = sequelize.define('employee', {
//   emp_id: {
//     type: DataTypes.STRING,
//     primaryKey: true
//   },
//   eng_surname: {
//     type: DataTypes.STRING
//   },
//   eng_other_name: {
//     type: DataTypes.STRING
//   }
// }, {
//   freezeTableName: true,
//   timestamps: false
// });
// Employee.findAll({
//   where: {
//     dept_id: '00168'
//   }
// }).then( emps => {
//     console.log("All users:", JSON.stringify(emps, null, 2));
//   }
// 
// );

console.log('connection check ended');

//var mssql = new mssqlDBAdapter(configHelper.getMssqleformDBConfig())
const mssqlConfig = {
            client: 'mssql',
            connection: {
                host: '192.168.8.138\\SQLEXPRESS',
                user : 'txweb',
                password : 'trywebshitty',
                database: 'Personal',
                asyncStackTraces: true,
                options: {
                  //tdsVersion: '7_1',
                  enableArithAbort: true,
                  encrypt: false
                }
            },
            asyncStackTraces: true,
            acquireConnectionTimeout: 120000,
            pool: {
                max: 3,
                min: 1,
                idleTimeoutMillis: 30000

                //afterCreate: function (conn, done) {
                //  console.log('Mssql connection created...');
                //  return;
                //}
            }
        }
//const oracleConfig = {
//            client: 'oracledb',
//            connection: {
//                connectString: 'm1db.midland.com.hk:1522/mdb11g',
//                user : 'm1tab',
//                password : 'Awsm1TAB',
//                schema: 'M1'
//            },
//            acquireConnectionTimeout: 120000,
//            pool: {
//                max: 2,
//                min: 1
//            },
//            packageName: 'PKG_M_ONE_TABLET',
//            packages: {
//                settings: 'PKG_M_ONE_TABLET_SZ'
//            }
//        }
var mssql = new mssqlDBAdapter(mssqlConfig)
var db = mssql.getDatabase();
//var oracle = new OracleDBAdapter(oracleConfig)
//var db = oracle.getDatabase();

app.use(cors());
app.use(compression());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  // Inject Database and Helper object to middleware, and use req.xxx to access the database
  req._version = version;
  req.db = db;
  res.db = db;
//  req.redis = redis_db;
//  req.es = es;
//  req.jwt = jwt;
  req.serverLocation = serverLocation;
  res.helper = resHelper;
//  req.log = Logger.getRequestLogger(req);
  return next();
});

app.use((req, res, next) => {
  //initialize request parameters (request_id / start time...)
  resHelper.setReqStartTime(res);
  return next();
})

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('mssql://username:password@localhost/database')
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}
//mssql.check();
/*
  Implement API route here
*/
app.options('*', cors())
openapi.initialize({
  apiDoc: {
    ...openAPISpec,
    'x-express-openapi-additional-middleware': [],
//      //middleware to be executed before entering the actual route 
//      Logger.getAppLogger(),
//      jwt.verify(),
//      jwt.checkUser(),
//      acl.check_permission(),
//      updateAudit.pre_audit()
//    ],
    'x-express-openapi-validation-strict': false
  },
  app: app,
  paths: path.resolve(__dirname, 'routes')
});

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//});

const port = 8051;
//app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`)
//})


(async () => {
  //await oracle.check();
  //await redis.check();
  //await elsaticSearch.check();
  //let port = configHelper.getAppPortNum()
  //let addr = configHelper.getAppListenAddr()
  await app.listen(port);
  console.log(`Server started on ${port}.`)
  //cronHelper.sendWhatsappCron(db);
  //cronHelper.mortgageOptionCron(redis_db, cronlog);
  //cronHelper.traineeUpgradeCron(cronlog, db);
  //cronHelper.m1DataAuditSummaryLogCron(cronlog, db);
  //cronHelper.whatsAppAuthTokenRenewCron(cronlog, redis_db);
  //if (configHelper.getIsHousekeepDataAuditLog()){
  //  cronHelper.m1DataAuditLogHouseKeepCron(cronlog, redis_db);
  //}
})();