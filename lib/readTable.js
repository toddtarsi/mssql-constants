var SqlRequest = require('mssql').Request;

module.exports = function (sqlConnPool) {
  return function readTable(defWrapper, cb) {
    var req = new SqlRequest(sqlConnPool);
    req.query('SELECT * FROM ' + defWrapper.def.table, (err2, table) => {
      if (err2) return cb(err2);
      defWrapper.table = table.recordset;
      cb(null);
    });
  };
};
