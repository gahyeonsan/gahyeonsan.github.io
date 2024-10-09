$("#Random").html("");
   
$('#content-table tr').each(function(){
	if($(this).is(':visible')){
  	$("#Random").append(`<tr>${$(this).html()}</tr>`);
  }
});
          
