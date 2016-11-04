var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    value: "",
    mode: "javascript",
    indentUnit: 4,
    indentWithTabs: true,
    lineWrapping: true,
    lineNumbers: true
});


var result = CodeMirror.fromTextArea(document.getElementById("result"), {
    value: "",
    readOnly: true,
    indentUnit: 4,
    indentWithTabs: true,
    lineWrapping: true,
    lineNumbers: true
});


editor.setValue("");
result.setValue("");

var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

editor.setSize($(window).width()/2 -16, $(window).height() - 32);
result.setSize($(window).width()/2 -16, $(window).height() -32);

editor.on("change", function(){
    convertCodeToPseudo(editor.getValue(), "convertAlias/javascript.json", function (data) {
        result.setValue(data);
    });


});

