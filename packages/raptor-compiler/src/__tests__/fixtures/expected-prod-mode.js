define('x-class_and_template', ['engine'], function (engine) {

function tmpl(a){const{h:b}=a;return[b("section",{},[])]}const Test=1;class ClassAndTemplate extends engine.Element{constructor(){super(),this.t=Test,this.counter=0;}render(){return tmpl}}

return ClassAndTemplate;

});
