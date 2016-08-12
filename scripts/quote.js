document.addEventListener('DOMContentLoaded', init);

function init() {
  document.getElementById('newQuoteBtn').addEventListener('click', makeNewRequest);
  var httpRequest;
}

function makeNewRequest() {
  httpRequest = new XMLHttpRequest();
  if(!httpRequest) {
    console.log("failed to create request");
  } else {
    console.log("created a new request");
  }
  httpRequest.open("GET", "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", true);
  httpRequest.onreadystatechange = checkRequestResponse;
  httpRequest.send();
}

function checkRequestResponse() {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
     getNewQuote(httpRequest.responseText);
    } else {
     console.error(httpRequest.statusText);
    }
  }
}

function getNewQuote(response) {
  console.log(response);
  var json = JSON.parse(response);
  var quote = json.quoteText + "<br/>" + "-" + json.quoteAuthor;

  document.getElementById("quote").innerHTML=quote;

}
