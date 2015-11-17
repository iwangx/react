/**
 * Created by wangxing on 2015/11/9.
 */
(function(){

    var version={
        "modal/modal1":13,
        "modal/modal2":13,
        "modal/modal3":22,
        "modal/modal4":12,
        "css/common":20
    };

    var name = "js";
    var cookie = document.cookie || "";
    var type = cookie.match(/S_ENV=(online|devel|local)/);
    if(type) {
        type = type[1];
    }else {
        type = "online";
    }
    var domain = "";
    switch(type) {
        case "devel":
            domain = "http://teststatic.show.wepiao.com";
            seajs.config({
                base:domain + '/' + name + '/dist/js'
            });
            break;
        case "local":
            domain = "http://localhost:3000";
            seajs.config({
                base:domain + '/' + name + '/'
            });
            break;
        default:
            domain = "http://static{0}.show.wepiao.com";
            seajs.config({
                base:domain + '/' + name + '/dist/js'
            });
            seajs.Module.cdn = 0;
            seajs.on('fetch', function(data) {
                if(data && data.uri) {
                    data.requestUri = data.uri.replace("{0}", seajs.Module.cdn % 4);
                    seajs.Module.cdn++;
                }
                return data.requestUri || data.uri;
            });
    }
    seajs.config({
        charset: 'utf-8'
    });

    seajs.on('fetch', function(data) {
        if(data && data.uri){
            var key =  data.uri.replace(/.*\/([^\/]+\/[^\/]+)$/, '$1').replace(/\.[^\.]+$/,"");
            if(!localStorage.getItem(key)){
                localStorage.setItem(key,version[key])
            }else if(localStorage.getItem(key)!=version[key]){
                data.requestUri = data.uri+"?v="+version[key];
                localStorage.setItem(key,version[key])
            }
            return data.requestUri || data.uri;
        }
    });

    var styleSheets = document.querySelectorAll("link[rel='stylesheet']");
    for(var j= 0,length=styleSheets.length;j<length;j++){
        var item= styleSheets[j];
        if(item.href&&!item.disabled){
            var key =  item.href.replace(/.*\/([^\/]+\/[^\/]+)$/, '$1').replace(/\.[^\.]+$/,"");
            if(!localStorage.getItem(key)){
                localStorage.setItem(key,version[key])
            }else if(localStorage.getItem(key)!=version[key]){
                item.href = item.href+"?v="+version[key];
                localStorage.setItem(key,version[key])
            }
        }
    }

    var scripts=document.scripts;
    for(var i= 0,len=scripts.length;i<len;i++){
        if(scripts[i].attributes["data-start"]){
            seajs.use(scripts[i].attributes["data-start"].value);
        }
    }
})();