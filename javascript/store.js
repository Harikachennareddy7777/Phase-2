function submit(){
var career=document.getElementById('careerobject').value;
// console.log(career);
var name=document.getElementById('name').value;
console.log(name);
// var role=document.getElementById('role').values;
// var number=document.getElementById('number').values;
// var email=document.getElementById('email').values;
// var degree=document.getElementById('degree').values;
// var dcollege=document.getElementById('dcollege').values;
// var branch=document.getElementById('branch').values;
// var dmarks=document.getElementById('dmarks').values;
// var idegree=document.getElementById('idegree').values;
// var icollege=document.getElementById('icollege').values;
// var ibranch=document.getElementById('ibranch').values;
// var imarks=document.getElementById('imarks').values;
// var board=document.getElementById('board').values;
// var school=document.getElementById('school').values;
// var medium=document.getElementById('medium').values;
// var smarks=document.getElementById('smarks').values;
// var skills=document.getElementById('skills').values;
var indexedDB=window.indexedDB||window.mozIndexedDB||window.webKitIndexedDB||window.msIndexedDB;

//ternary Operation
indexedDB?console.log("Success"):console.log("browser Not Supported");

var request=indexedDB.open("DBMS",1);
var result;
var store;
console.log(request);

//upgradeneeded
request.onupgradeneeded=function(e){
  result=e.target.result;
  store=result.createObjectStore("resume",{keyPath:'Id',autoIncrement:true});
}

//sucess
request.onsuccess=function(e){
  console.log("reached successfully");
  result=e.target.result;
  // console.log(result);
  var tx=result.transaction("resume","readwrite");
  store=tx.objectStore("resume");
  store.put(
    {
      co:career,
      Name:name

    }
  );
}
//error
request.onerror=function(e){
  console.log("error"+e);
}
}
