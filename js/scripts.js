$(document).ready(function() {
  $("#Click").click(function() {
    $("#questions").show();
  });
$(".button").click(function() {
var answer1 = parseInt($('input[name="question1"]:checked').val());
var answer2 = parseInt($('input[name="question2"]:checked').val());
var answer3 = parseInt($('input[name="question3"]:checked').val());
var answer4 = parseInt($('input[name="question4"]:checked').val());
var score=0;

if (answer1==15){
  score+=15;
}
if (answer2==15){
  score+=15;
}
if (answer3==15){
  score+=15;
}
if (answer4==15){
  score+=15;
}
$("#result").val(score);
$("#submit").click(function() {
  $("#result").show();
});
});
});
