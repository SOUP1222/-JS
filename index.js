console.log("it is working");
//120000+Math.floor(Math.random()*80000
var link = {};
var xx = {};
chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    if (request.stop){
      clearInterval(link[request.id]);
    }else{
      if(true){

        start(request.id, request.name);
        xx[request.id] = ee(request.id, request.name)

      }
    }
    sendResponse({baz: request.id});

});

function ee(projectId, projectName){
  console.log(projectId);
  var id = projectId;
  var name = projectName;
  link[id] = setInterval(
    function(){
      console.log(id);
      start(id, name);
    }, 600000//원하는 시간 X 1000
  );
}

function check(){
  $.ajax({
    url:"https://playentry.org/api/project/5de0f18594650d0024cd2553",
    type: "GET",
    success: function(){
      return true;
    },
    error: function(){
      return false;
    }
  })
}


function start(id){
  $.ajax({
    url: "https://playentry.org/api/project/"+id,
    type: "PUT",
    data: {"category":"기타", "name":"원하는 작품 이름", "isopen":true, "group":[]},
    success: function(data){
      console.log(data);
    }
  });
}
