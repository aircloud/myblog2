/**
 * Created by Xiaotao.Nie on 23/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
var query=require("./mysql.pool");

module.exports = {

    getarticlelist:function(tag,callback){
        var myquery = "select `title` ,`tag` ,`year` ,`month` ,`time` ,`ID`  FROM `myblog_article`  where tag like '%"+tag+"%' order by ID DESC";
        var return_value={};
        return_value.data=[];
        return_value.year=[];
        query(myquery, function (err, value, fields) {
            if(!!value&&value.length) {
                return_value.number=value.length;
                for (var i = 0; i < value.length; i++) {
                    value[i].tag=value[i].tag.split(",");
                    if(return_value.year.indexOf(value[i]['year'])===-1){
                        console.log('new');
                        var this_item={};
                        this_item.year=value[i]['year'];
                        this_item.article=[];
                        this_item.article.push(value[i]);
                        return_value.data.push(this_item);
                        return_value.year.push(value[i]['year']);
                    }
                    else{
                        var dex = return_value.year.indexOf(value[i]['year']);
                        return_value.data[dex].article.push(value[i]);
                    }
                }
            }
            console.log(return_value);
            callback(return_value);
        })
    },

    getactivearticle:function(req,callback){
        console.log("getactivearticle");
        var myquery = "select * from myblog_article where ID = "+req.params.id;
        var myquery2 = "select * from myblog_article  where ID >"+req.params.id+" order by ID";
        var myquery3 = "select * from myblog_article  where ID <"+req.params.id+" order by ID desc";
        var return_value={};
        query(myquery,function(err,value,fields){
            if(value) {
                return_value.title = value[0].title;
                return_value.visitors = value[0].visitors;
                return_value.time = value[0].time;
                return_value.content = value[0].content;
                return_value.tag_tran = value[0].tag;
                return_value.id = value[0].ID;
                return_value.nex = {};
                return_value.pre = {};
                query(myquery2, function (err2, value2, fields2) {
                    if (value2[0]!=null) {
                        return_value.nex.title = value2[0].title;
                        return_value.nex.id = value2[0].ID;
                    }
                    else {
                        return_value.nex.title = "没有下一篇了";
                        return_value.nex.id = return_value.id;
                    }
                    query(myquery3, function (err3, value3, fields3) {
                        if (value3[0]!=null) {
                            return_value.pre.title = value3[0].title;
                            return_value.pre.id = value3[0].ID;
                        }
                        else {
                            return_value.pre.title = "没有上一篇了";
                            return_value.pre.id = return_value.id;
                        }
                        callback({"item": return_value});
                    });
                });
            }
            else{
                callback({"item": return_value});
            }
        });
    },

};
