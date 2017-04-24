$(document).ready(function(){
//Highlites on Contact form
$("#fullname").focus(function () {
  $(this).css('background','#ff4d4d');
});
$("#fullname").blur(function() {
  $(this).css("background","white");
});
$("#email").focus(function () {
  $(this).css('background','#ff4d4d');
});
$("#email").blur(function() {
  $(this).css("background","white");
});
$("#location").focus(function () {
  $(this).css('background','#ff4d4d');
});
$("#location").blur(function() {
  $(this).css("background","white");
});
$("#question").focus(function () {
  $(this).css('background','#ff4d4d');
});
$("#question").blur(function() {
  $(this).css("background","white");
});
//Hightlights on Hardware
$("#i3").hover(
         function() {
            $(this).css("background-color", "red");
       },
         function() {
             $(this).css("background-color", "darkgrey");
});
$("#i5").hover(
         function() {
            $(this).css("background-color", "red");
       },
         function() {
             $(this).css("background-color", "darkgrey");
});
$("#i7").hover(
         function() {
            $(this).css("background-color", "red");
       },
         function() {
             $(this).css("background-color", "darkgrey");
});
$("#8gb").hover(
         function() {
            $(this).css("background-color", "red");
       },
         function() {
             $(this).css("background-color", "darkgrey");
});
$('#16gb').hover(
         function() {
            $(this).css("background-color", "red");
       },
         function() {
             $(this).css("background-color", "darkgrey");
});
$("#vrh").hover(
         function() {
            $(this).css("background-color", "red");
       },
         function() {
             $(this).css("background-color", "darkgrey");
});
$("#3ds").hover(
         function() {
            $(this).css("background-color", "red");
       },
         function() {
             $(this).css("background-color", "darkgrey");
});
$("#ss").hover(
         function() {
            $(this).css("background-color", "red");
       },
         function() {
             $(this).css("background-color", "darkgrey");
});


        //Test Checkboxes/Radio Buttons Script
        // loop through each form and handle submit event
   for (var i=0;i<document.forms.length;i++) {
     var form = document.forms[i];
     form.addEventListener('submit', function(e){
       e.preventDefault();
       var results = '';
      // loop through all checkboxes to see if checked
      var checkboxes = form.querySelectorAll("input[type='checkbox']");
      for(var k = 0; k < checkboxes.length; k++) {
        results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
      }
      // loop through all radio butotns to display value
      var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
      for(var m = 0; m < radiobuttons.length; m++) {
        results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
      }
      // alert results
      console.log(results);
    });
  }
  /*Search String*/
  var $robots = $('#robots li');
$(".form-control").keyup(function() {
    var re = new RegExp($(this).val(), "i"); // "i" means it's case-insensitive
    $robots.show().filter(function() {
        return !re.test($(this).text());
    }).hide();
});
 //Thumbnail Hover script
$(".thumbnail").hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        });
$('#searchBar').keyup(function() {
  window.location.href='robots.html';
        });

});
