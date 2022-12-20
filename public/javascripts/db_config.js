exports.mysql_setting = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'graduationwork',
    timezone: 'jst'
};
exports.loginSQL = 'SELECT * from customer where user_id=? AND password=?'
exports.insertRecordSQL = 'INSERT INTO chat_histories(history_index,user_id,message,date_time) VALUES(?, ?, ?, ?)';
exports.getHistoriesSQL = 'SELECT * FROM chat_histories';
exports.deleteHistorySQL = 'TRUNCATE TABLE chat_histories';