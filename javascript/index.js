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
  var gettingData=store.getAll();

  gettingData.onsuccess=function(getdata){
    console.log(getdata.target.result);
    profile(getdata.target.result);
  }
  var cards=document.querySelector('.cards');
  function profile(getprofile){
    for(i in getprofile){
      let card=document.createElement("div");
      card.classList.add("card");
      cards.appendChild(card);

      let image=document.createElement("img");
      image.src="images/profile.png";
      image.alt="profile";
      card.appendChild(image);

      let a=document.createElement("a");
      a.href="index.html";
      card.appendChild(a);

      let name=document.createElement("h2");
      name.textContent=getprofile[i].Name;
      a.appendChild(name);
    }
  }
}
