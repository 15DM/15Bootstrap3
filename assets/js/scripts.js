// Accordion toggle switch
 
$('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".fa-chevron-circle-down").removeClass("fa-chevron-circle-down").addClass("fa-chevron-circle-up");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".fa-chevron-circle-up").removeClass("fa-chevron-circle-down").addClass("fa-chevron-circle-down");
});