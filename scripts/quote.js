document.addEventListener('DOMContentLoaded', init);

function init() {
  document.getElementById('newQuoteBtn').addEventListener('click', makeNewRequest);
}

function makeNewRequest() {
  var httpRequest = new XMLHttpRequest();
  if(!httpRequest) {
    console.log("failed to create request");
  } else {
    console.log("created a new request");
  }

  httpRequest.open("GET", "https://theysaidso.p.mashape.com/quote?query=software", true);
  httpRequest.setRequestHeader("X-Mashape-Key", "rqZM46yjxNmshV86eo7xauaMV71Yp1KAWsQjsnnc1zpOaAcZmi");

  httpRequest.onload = function(e) {
    if (httpRequest.readyState === 4) {
     if (httpRequest.status === 200) {
       getNewQuote(httpRequest.responseText);
     } else {
       console.error(httpRequest.statusText);
     }
   }
}

  httpRequest.send();
}

function getNewQuote(response) {
  console.log(response);
  var json = JSON.parse(response);
  var quote = json.contents["quote"] + "<br/>" + "-" + json.contents["author"];

  document.getElementById("quote").innerHTML=quote;

}
