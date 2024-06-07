//callback functions-calling inside a function to anotherr function
function loadScript(src,callback){
    var script=document.createElement("script")
    script.src=src;
    script.onload=function(){
        console.log("loaded script:"+src)
        callback()  //it is used to call a another function 
    }
    script.onerror=function(){
        console.log(src)
    }
    document.body.appendChild(script)
}
function hello(){
    alert("hey this is good")
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello)
