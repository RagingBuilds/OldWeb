$(document).ready(function(){
 $("#close").click(function(){
	$(".modal").modal("hide");
 });
 $("#done").click(function(){
    alert("You clicked Done");
	$(".modal").modal("hide");
 });
 $.validator.setDefaults({
	submitHandler: function() { 
		$.ajax({
		  type: "POST",
		  url: "server.php",
		  data: $(".contact-us").serialize()
		}).done(function( msg ) {
		    $(".modal .ajax_data").html("<pre>"+msg+"</pre>");
		    $(".modal").modal("show");
		});
	}
 }); 
 $('.contact-us').validate(
 {
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    url: {
      required: true,
	  url : true	
    },
    comment: {
      required: true,
	  maxlength: 200 	
    }
  },
  errorClass: "help-inline",
  highlight: function(label) {
    $(label).closest('.control-group').removeClass('success').addClass('error');
  },
  success: function(label) {
    label
      .text('OK!').addClass('valid')
      .closest('.control-group').addClass('success');
  }
 });
}); // end document.ready