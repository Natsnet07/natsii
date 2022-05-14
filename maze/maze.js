var win = true;

$(document).ready(function(){ 
$("#start").click(
	function()
	{
		$("#status").text("Good Luck.");
		$("div .boundary").removeClass("youlose");
		startGame();
		
	});
});

function startGame()
{
	win = true;
	
	$(".boundary").hover(
	function()
	{
		loose();
	});  
	
	$("#end").click(
	function()
	{
		if(win)
			{
		$("#status").text(" :) You WIN! Play Again ");
		endGame();
			}
	});
	
	$("#maze").mouseleave(
	function()
	{
   loose();
	});
	
}

  function loose()
  {
	 win=false;
		 $("div .boundary").addClass("youlose");
		 $("#status").text(" :( You Lose!  click 'S' to retry.");
  }

	function endGame()
	{
		$("div .boundary").removeClass("youlose");
    $('.boundary').unbind('hover');
		$("#maze").unbind('mouseleave');
	}
