$(document).ready(function(){
		$('#sr').mouseover(function(){
			$('#sr2').css('display','block');
		});

		$('#sr').mouseleave(function(){
			$('#sr2').css('display','none');
		});

		$("#dsw").hover(function(){
			$(this).css("font-weight","bold");
	    $("#dsw2").css("display", "block");
	    }, function(){
	    	$(this).css("font-weight","normal");
	    $("#dsw2").css("display", "none");
		});

		$("#sr2").mouseover(function(){
			$(this).css('display','block');
		});

		$("#sr2").mouseleave(function(){
			$(this).css('display','none');
		});

		$("#research").hover(function(){
		$(this).css("font-weight","bold");
	    $("#research2").css("display", "block");
	    }, function(){
	    $(this).css("font-weight","normal");
	    $("#research2").css("display", "none");
	});
		$("#library").hover(function(){
			$(this).css("font-weight","bold");
	    $("#library2").css("display", "block");
	    }, function(){
	    $(this).css("font-weight","normal");
	    $("#library2").css("display", "none");
	});
		$("#semester").hover(function(){
	    $("#sem2").css("display", "block");
	    $(this).css("font-weight","bold");

	    }, function(){
	    $("#sem2").css("display", "none");
	    $(this).css("font-weight","normal");

	});

	});
