const visualizer = require('../visualizer'); 

exports.index = function(request, response) {
    return visualizer.render("./View/register.html", response);
}
