var tools = {
  getParamObj: function () {
    var param = location.search;
    param = decodeURI(param);
    param = param.slice(1);
    var arr = param.split("&")
    var obj = {};
    arr.forEach(function (ele) {
      var temp = ele.split("=");
      obj[temp[0]] = temp[1];
    });
    return obj;
  },
  getParam: function (key) {
    return this.getParamObj()[key];
  }
}