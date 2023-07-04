const express = require('express')
const route = express.Router()

const mysql = require('mysql2');
const dataBase = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'users'
});


dataBase.getConnection(error => {
    if (error) {
        console.log('error');
    }
    console.log('data connected successfully');
});

//Teacher login
route.post('/teacher-login', async (req, res) => {

    dataBase.getConnection((error, connection) => {
        if (error) {
            throw error;
        }

        let selectQuery = 'SELECT * FROM teacher WHERE username=? AND password=?';


        let query = mysql.format(selectQuery, [req.body.username, req.body.password]);
        console.log(query);

        dataBase.query(query, (error, data) => {
            if (error) {
                connection.release();
                console.error(error);
                return;
            }
            if (data.length > 0) {
                connection.release();

                return res.status(200).json({ message: "valid" });
            }
            else {
                return res.status(200).json({ message: "invalid" });
                connection.release();
            }


        });
    });

})



//students login
route.post('/student-login', async (req, res) => {


    dataBase.getConnection((error, connection) => {
        if (error) throw error;

        let selectQuery = 'SELECT * FROM students WHERE roll_no=? and date_of_birth=?';
        let query = mysql.format(selectQuery, [req.body.roll_no, req.body.date_of_birth]);

        dataBase.query(query, (error, data) => {
            if (error) {
                connection.release();
                console.error(error);
                return;

            }
            if (data.length > 0) {
                connection.release();

                return res.status(200).json({ message: "valid" });
            }
            else {
                connection.release();
                return res.status(200).json({ message: "invalid" });

            }
        });
    });

})




//Add Student Data
route.post('/add-student', async (req, res) => {

    dataBase.getConnection((error, connection) => {
        if (error) throw error;

        let selectQuery = 'SELECT * FROM students WHERE roll_no=?'
        let query = mysql.format(selectQuery, [req.body.roll_no]);
        dataBase.query(query, (error, data) => {
            if (error) {
                connection.release();
                console.error(error);
                return;
            }
            // rows fetch
            console.log(data);
            if (data.length > 0) {
                connection.release();
                return res.status(200).json({ message: "Data Already exist" });
            }

            else {
                let insertQuery = 'INSERT INTO students (roll_no,name,date_of_birth,score) VALUES (?,?,?,?)';
                let Query = mysql.format(insertQuery, [req.body.roll_no, req.body.name, req.body.date_of_birth, req.body.score]);
                dataBase.query(Query, (error, data) => {
                    if (error) {
                        connection.release();
                        console.error(error);
                        return;

                    }
                    connection.release();
                    return res.status(200).json({ message: "Added Successfully" });

                })
            }
        })
    })

})




//Edit 
route.post('/edit', async (req, res) => {
    dataBase.getConnection((error, connection) => {
        if (error) throw error;

        let updateQuery = "UPDATE students SET name = ? , date_of_birth=? ,score=? WHERE roll_no = ?";
        let query = mysql.format(updateQuery, [req.body.name, req.body.date_of_birth, req.body.score, req.body.roll_no]);

        dataBase.query(query, (error, response) => {
            if (error) {
                connection.release();
                console.error(error);
                return;
            }
            // checking in console that rows updated
            console.log(response.affectedRows);
        });
        connection.release();
        return res.status(200).json({ message: "valid" });
    })
})


//View All Students Results list
route.get('/getusers', async (req, res) => {
    dataBase.getConnection((err, connection) => {
        if (err) throw err;

        let selectQuery = 'SELECT * FROM students';
        dataBase.query(selectQuery, (err, results) => {
            if (err) {
                connection.release();
                console.error(err);
                return;
            }

            connection.release();
            return res.status(200).json({ message: "valid", data: results });

        });
    });

})


//view results according to roll no
route.get('/viewresult/:roll_no', async (req, res) => {


    dataBase.getConnection((error, connection) => {
        if (error) throw error;

        let selectQuery = 'SELECT * FROM students Where roll_no=?';
        let query = mysql.format(selectQuery, [req.params.roll_no]);
        dataBase.query(query, (error, data) => {
            if (error) {
                connection.release();
                console.error(error);
                return;

            }
            connection.release();
            return res.status(200).json({ data: data });
        });
    });

})



//delete 
route.get('/delete/:roll_no', async (req, res) => {

    dataBase.getConnection((error, connection) => {
        if (error) throw error;

        let selectQuery = 'DELETE FROM students WHERE roll_no=?';
        let query = mysql.format(selectQuery, [req.params.roll_no]);

        dataBase.query(query, (error, data) => {
            if (error) {
                connection.release();
                console.error(error);
                return;
            }


            connection.release();
            return res.status(200).json({ message: "valid" });


        });
    });

})


module.exports = route