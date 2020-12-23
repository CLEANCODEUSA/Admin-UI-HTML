jQuery(document).ready(function(){
  
  //initially hide several divs
  $('#select-event-type-div').siblings().hide();

  //select-event-type
  $('#select-event-type').click(function(e){
    divShowHide($(this));
  })

  $('#event-details').click(function(e){
    divShowHide($(this));
  });
  
  $('#registration').click(function(e){
    divShowHide($(this));
  });

  $('#demographics').click(function(e){
    divShowHide($(this));
  });

  $('#qualifications').click(function(e){
    divShowHide($(this));
  });

});

function divShowHide(event){
  var selected = $(event).attr("id");
  $('#'+selected+'-div').show();
  $('#'+selected+'-div').siblings().hide();
}


jQuery(document).ready(function(){
	var list = $("#create-new-event-menu li");
	var li = list.children();
	var lengthMinusOne = li.length - 1;
	var index = 0;
	var num = $("#create-new-event-menu li").length;

	var prevLi = $(li[0]).css("border-bottom", "2px solid #7FC4FD");

	$("#next-btn").click(function(){
	   index++;
	   if (index > lengthMinusOne) index = 0;
	   prevLi.css("border-bottom","unset");
	   prevLi = $(li[index]).css("border-bottom", "2px solid #7FC4FD").click();
	});
	$("#previous-btn").click(function(){
	   index--;
	   if (index < 0) index = lengthMinusOne;
	   prevLi.css("border-bottom","unset");
	   prevLi = $(li[index]).click().css("border-bottom", "2px solid #7FC4FD").click();
	});
});


//sortable js
jQuery(document).ready(function () {
    
    var example2Left = document.getElementById('field-selection'),
    example2Right = document.getElementById('attendee-registration');
    
    new Sortable(example2Left, {
        group: 'shared', // set both lists to same group
        animation: 150
    });

    new Sortable(example2Right, {
        group: 'shared',
        animation: 150
    });
});

// date picker js
jQuery(document).ready(function () {
  $('#datetimepicker1, #datetimepicker2').datepicker({
      format: "dd/mm/yyyy",
      language: "en",
      autoclose: true,
      todayHighlight: true
  });
});

// select2 js
jQuery(document).ready(function () {
    jQuery("#js-tag-select").select2({
        maximumSelectionLength: 3,
    });
  $('#js-tag-select').val('1'); // Select the option with a value of '1'
  $('#js-tag-select').trigger('change'); // Notify any JS components that the value changed
});
