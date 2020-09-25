// chrome.tabs.executeScript({file:"jquery.js"}, function(){
//   chrome.tabs.executeScript({file:"index.js"});
// });
/*
console.log("it is working");

var link = "";


$('.stop').click(function(){
  if(xx != null) {
    clearInterval(xx);
  }
});


function start(){
  $.ajax({
    url: "https://playentry.org/api/project/"+link,
    type: "PUT",
    data: {"category":"기타", "name":"RGB", "isopen":true, "group":[]},
    success: function(data){
      console.log(data);
    }
  });
}
*/



chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let url = tabs[0].url;
    console.log(url);
    if(url.startsWith("https://playentry.org/")){
      chrome.tabs.executeScript({file:"jquery.js"}, function(){
        chrome.tabs.executeScript({file:"index.js"}, function(){
          $('.start').click(function(){
            console.log($('.projectId').val());
            chrome.tabs.sendMessage(tabs[0].id,{id: $('.projectId').val(), name:$('.projectName').val(), stop:false}, function(response) {
              // var a = document.querySelector('.ul');
              // var li = document.createElement('li');
              // li.className = response.baz;
              // li.innerHTML = `<div class="text">${response.baz}</div><div class="on">on</div>`;
              // a.appendChild(li);
              $('ul').html($('ul').html()+`<li class="${response.baz}">
              <div class="text">${response.baz}</div><div class="on">on</div>
              </li>`);
            });
          });

          $('.stop').click(function(){
            console.log("stop");
            chrome.tabs.sendMessage(tabs[0].id, {id: $('.projectId').val(), name:$('.projectName').val(), stop:true}, function(response) {
              $(`.${response.baz}`).remove();
            });
          });
        });
      })
    }
});
