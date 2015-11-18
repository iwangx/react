/**
 * Created by wangxing on 2015/11/16.
 */
define(function (require, exports, module) {
    exports.Head= React.createClass({
        render:function(){
            return <h1>这里是头部</h1>;
        }
    });
    exports.Footer=React.createClass({
        render:function(){
            return <h1>这里是底部</h1>;
        }
    });

    exports.CheckboxList=React.createClass({
        render:function(){
            var items=JSON.parse(this.props.items);
            var repoList = items.map(function (repo) {
                return (
                    <label>
                        <input type="checkbox" />
                        {repo}
                    </label>
                );
            });
            return <div>{repoList}</div>;
        }
    });

});
