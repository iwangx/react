/**
 * Created by wangxing on 2015/11/16.
 */
define(function (require, exports, module) {
    exports.Head= React.createClass({displayName: "Head",
        render:function(){
            return React.createElement("h1", null, "这里是头部");
        }
    });
    exports.Footer=React.createClass({displayName: "Footer",
        render:function(){
            return React.createElement("h1", null, "这里是底部");
        }
    });
});
