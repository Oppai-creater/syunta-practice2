$(function(){
	setTimeout(movementHighlow());

	function movementHighlow() {
		$(".recruit-circle").animate({
			marginTop:"+=8px"
		},1000).animate({
			marginTop:"-=8px"
		});
		setTimeout(movementHighlow(), 1600);
	}
});
