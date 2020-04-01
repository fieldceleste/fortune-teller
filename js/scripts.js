$(document).ready(function () {
  $("form#fortune_quiz").submit(function (event) {
    event.preventDefault();
    var unlucky_events = [];
    $("input:checkbox[name=unlucky_events]:checked").each(function () {
      unlucky_events.push($(this).val());
    });
    var lucky_events = [];
    $("input:checkbox[name=lucky_events]:checked").each(function () {
      lucky_events.push($(this).val());
    });
    if (unlucky_events.length < lucky_events.length)
    {
    $("#fortune").append("You will have a great rest of the year, and will succeed at anything you put your mind to.")
    }
    else if (unlucky_events.length > lucky_events.length)
    {
    $("#fortune").append("You may not have such a great rest of the year. There may be some obstacles in your way.")
    }
    else if (unlucky_events.length = lucky_events.length)
    {
    $("#fortune").append("Things are coming togther for you. You may meet someone very important this year.")
    }

    $("#fortune").show();
  $("#fortune_quiz").hide();

});
});