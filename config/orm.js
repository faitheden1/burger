//Import (require) `connection.js` into `orm.js

var connection = require("./connection");

var orm = {
    selectAll: (table, cb) => {
        // console.log(table);
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (table, column, value, cb) => {
        // console.log("this is table: " + table);
        // console.log("this is column" + column);
        // console.log("this is value" + value);
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, column, value], (err, res) => {
            if(err) throw err;
            // console.log(res);
            cb(res);
        });
    },
    updateOne: (table, column, burgerId, cb) => {
        var queryString = "UPDATE ?? SET ?? = 1 WHERE id = ?";
        connection.query(queryString, [table, column, burgerId], (err, res) => {
            console.log("update" + queryString);
            if (err) throw err;
            console.log(res);
            cb(res);
    });
    }
}

module.exports = orm;

// var connection = require("connection.js");

// function selectAll() {
//     connection.query("SELECT * FROM burger", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//         return result 
//       });
// };

// function insertOne(burger_name, devoured) {
//     var sql = "INSERT INTO burger (burger_name, devoured, burgerId) VALUES (" + burger_name + ", " + devoured + ")";
//     // connection.query( sql, "insertOne FROM burger", function (err, result, fields) {
//         connection.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//             return result
//           }); 

// function updateOne(burger_name, devoured) {
//     var sql = "UPDATE INTO burger (burger_name, devoured) VALUES (" + burger_name + ", " + devoured + ")";
    
//         connection.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//              return result
//   }); 

//   function updateOne(table, column, burgerId, cb) {
//     var sql = "UPDATE ?? SET ?? = 1 WHERE id = ?";
//     connection.query(sql, [table, column, burgerId], (err, res) => {
//         console.log("update" + sql);
//         if (err) throw err;
//         console.log(res);
//         cb(res)
// });


// // Export connection for our ORM to use.
// module.exports = orm;
