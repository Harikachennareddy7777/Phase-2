function submit(){
var career=document.getElementById('careerobject').value;
// console.log(career);
var name=document.getElementById('name').value;
console.log(name);
 var role=document.getElementById('role').value;
 var number=document.getElementById('number').value;
 var email=document.getElementById('email').value;
 var degree=document.getElementById('degree').value;
 var dcollege=document.getElementById('dcollege').value;
 var branch=document.getElementById('branch').value;
var dmarks=document.getElementById('dmarks').value;
var idegree=document.getElementById('idegree').value;
 var icollege=document.getElementById('icollege').value;
 var ibranch=document.getElementById('ibranch').value;
 var imarks=document.getElementById('imarks').value;
 var board=document.getElementById('board').value;
 var school=document.getElementById('school').value;
 var medium=document.getElementById('medium').value;
 var smarks=document.getElementById('smarks').value;
 var skills=document.getElementById('skills').value;
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
        Name:name,
        Role:role,
        Number:number,
        Mail:email,
        Education:[
          {
          Degree:degree,
          Dcollege:dcollege,
          branch:branch,
          marks:dmarks

        },
        {
        Degree:idegree,
        Dcollege:icollege,
        branch:ibranch,
        marks:imarks

      },
      {
      board:board,
      school:school,
     medium:medium,
      marks:smarks

    }
  ],

      skills:skills

  }
  );
}

//error
request.onerror=function(e){
  console.log("error"+e);
}
window.open("index.html","_self");
}
