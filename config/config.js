/*this the configularion file to connect to mongoDB serverOptions.
Change the name myDb to your database name

*/
//var connectionstring = 'mongodb://localhost:27017/hacklife';//Change myDb to yourDBname
exports.serverOptions = {
     'auto_reconnect': true,
     'poolSize': 10
 };
var connectionstring = "mongodb://admin:admin@ds135186.mlab.com:35186/hacklife";
exports.mongoconnectionstring = connectionstring;
