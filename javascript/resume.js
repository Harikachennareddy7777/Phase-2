var query=window.location.search.substring(1).split("?");
var parent;
query.map((data)=>{
  let splitdata=data.split("=");
  parent=parseInt(splitdata[1]);
});
//store.js data paste here
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
  var getExact=store.get("parent");
  getExact.onsuccess=function(get){
    console.log(get.target.result);
    pro(get.target.result)
  }
  var left=document.querySelector(".left");
var right=document.querySelector(".right");
function pro(profile){
  var image=document.createElement("img");
  image.src="#";
  image.alt="profile";
  left.appendChild(image);
}
}
