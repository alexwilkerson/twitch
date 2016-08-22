$(document).ready(function(){

var names = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "MedryBW"];

for (var i = 0; i < names.length; i++) {
  (function(i){
    $.getJSON("https://api.twitch.tv/kraken/streams/" + names[i] + "?callback=?", function(json){
      $("#users").append("<li id='user' class='user'><h2>" + names[i] + "</h2><span class='status " + (json.stream ? "online" : "offline") + "'>" + (json.stream ? json.stream.channel.status : "Offline") + "</span></li>");
    });
  })(i);
}

});
