define(function (require, exports, module) {
    var common = require("common/common");
    var Footer=common.Footer;
    var Head=common.Head;
    var CheckboxList=common.CheckboxList;
    React.render(
        React.createElement(CheckboxList, {items: "[1,2,3,4]"}),
        document.body
    );
});
