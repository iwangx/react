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

    exports.CheckboxList=React.createClass({displayName: "CheckboxList",
        render:function(){
            var items=JSON.parse(this.props.items);
            var repoList = items.map(function (repo) {
                return (
                    React.createElement("label", null, 
                        React.createElement("input", {type: "checkbox"}), 
                        repo
                    )
                );
            });
            return React.createElement("div", null, repoList);
        }
    });

});
