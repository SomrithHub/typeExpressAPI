import connection from '../config/database'


const all = async () => {
    return connection.promise().query('SELECT * FROM `users`')
    .then((rows, fields) => { return rows })
    .catch(err => { return err })
}

export default all;
