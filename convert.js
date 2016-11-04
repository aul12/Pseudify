String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function convertCodeToPseudo(code, aliasFile, callback){
    $.get(aliasFile, function (data) {
        for(var c=0; c<data.alias.length; c++){
            code = code.replaceAll(data.alias[c].code, data.alias[c].pseudo)
        }
        callback(code);
    });
}