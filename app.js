var names = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "comster404", "brunofin", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "MedryBW"];

function listUsers(){
  for (var i = 0; i < names.length; i++) {
    (function(i){
      $.getJSON("https://api.twitch.tv/kraken/streams/" + names[i] + "?callback=?", function(json){
        var description = "";
        var online = "";
        var hidden = false;
        if (json.status === 422) {
          description = "Account closed.";
          online = "closed";
          hidden = true;
        } else if (json.stream) {
          description = json.stream.channel.status;
          online = "online";
          hidden = false;
        } else {
          description = "Offline.";
          online = "offline";
          hidden = true;
        }
        $("#users").append("<li id='user' class='user " + online + "'><h2 class='name'><a href='https://twitch.tv/" + names[i].toLowerCase() + "'>" + names[i] + "</a>" + (json.stream ? "" : " | " + description) + "</h2><span class='description" + (hidden ? " hidden" : "") + "'>" + description + "</span></li>");
      });
    })(i);
  }

  $("#all").click(function(){
    $(".closed").removeClass("hidden");
    $(".online").removeClass("hidden");
    $(".offline").removeClass("hidden");
  });
  
  $("#on").click(function(){
    $(".closed").addClass("hidden");
    $(".online").removeClass("hidden");
    $(".offline").addClass("hidden");
  });

  $("#off").click(function(){
    $(".closed").addClass("hidden");
    $(".online").addClass("hidden");
    $(".offline").removeClass("hidden");
  });
}

$(document).ready(function(){

  listUsers();

});
