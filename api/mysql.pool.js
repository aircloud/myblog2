/**
 * Created by Xiaotao.Nie on 23/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
//导入所需模块
var mysql=require("mysql");
//导入配置文件
var cfg  =require("../config/mysql.config");
var pool = mysql.createPool({
    host:      cfg.DBHOST,
    user:      cfg.DBUSER,
    password:  cfg.DBPWD,
    database:  cfg.DBNAME
});
//导出查询相关
var query=function(sql,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
            conn.query(sql,function(qerr,vals,fields){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(qerr,vals,fields);
            });
        }
    });
};

module.exports=query;
