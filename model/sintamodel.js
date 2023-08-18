const db = require('../config');

// exports.getSinta = (res) => {
//     const sql = "SELECT * from users";
//     //execute data
//     db.query(sql, (error, result) => {
//         if (error) return console.log(error);
//     //response data
//         // const data = JSON.parse(JSON.stringify(result))
//         const dataSinta = {
//             title: "ini H1 di index.ejs",
//             data: JSON.parse(JSON.stringify(result))
//        }
//         res.render('index', { dataSinta })
//         res.end();
//     })
// }

exports.getHome = (res) => {
    res.render('home', {});
}