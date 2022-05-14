var result=0;
exports.add = function (req,res,vals) {
    result=parseInt(vals.first)+parseInt(vals.second)
};
exports.subtract = function (req,res,vals) {
    result=parseInt(vals.first)-parseInt(vals.second)
};
exports.multiply = function (req,res,vals) {
    result=parseInt(vals.first)*parseInt(vals.second)
};
exports.division = function (req,res,vals) {
    result=(parseInt(vals.first))/(parseInt(vals.second))
};
exports.displays=function(req,res,vals){
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>"); 
    res.write("<title>Calculator Web Site</title>"); 
    res.write("</head>");
    res.write("<body>");
    res.write("<p style=\"background-color:orange\" ; style=\"font:14pt bold\";>The result is: ");
          res.write(String(result));
    res.write("</p>");
    res.write(
        "<a href='https://amannegash.github.io/myFirstRepository.github.io/Simple%20Calculator%20Lab/'>Another calculation</a>"
      );
    res.write("</body>");
    res.write("</html>");
    return res.end();
};