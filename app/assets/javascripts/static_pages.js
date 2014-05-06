$(document).ready(function() {
 $("#micropost_content").keydown(function() {
    var remaining_characters;
    remaining_characters = 140 - $(this).val().length;
    if (remaining_characters > 0) {
      $("#remaining").text(remaining_characters + " character(s) left").css("color", "black");
    } else {
      $("#remaining").text(remaining_characters + " character(s) left").css("color", "red");
    }
  });	
	

});

