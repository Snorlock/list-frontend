export default function auth(url, provider, callback) {

  window.addEventListener("message", receiveMessage.bind(this, callback, url), false);


  var ref = window.open(
    url+"/auth/"+provider+"?url="+window.location.href,
    "FacebookAuth",
    "resizable=true,width=600,height=600,scrollbar=false,centerscreen=true"
  )
}


var receiveMessage = function(callback, url, e) {
  if(url == e.origin) {
      callback(e.data);
  }

}
