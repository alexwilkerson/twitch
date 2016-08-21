$(document).ready(function(){

  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "MedryBW"];
  
  for (var i = 0; i < users.length; i++) {
    (function(i){
      $.getJSON("https://api.twitch.tv/kraken/streams/" + users[i] + "?callback=?", function(json){
        var description = "";
        if (json.stream) {
          description = "<p id='status'>" + json.stream.channel.status + "</p>";
        }
        $("#users").append("<article id='user'><h2 id='name'>" + users[i] + "</h2>" + description + "</article>");
      });
    })(i);
  }

});
