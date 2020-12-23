$(document).ready(function() {
    jQuery("#js-tag-select").select2({
        maximumSelectionLength: 3,
    });
  $('#js-tag-select').val('1'); // Select the option with a value of '1'
  $('#js-tag-select').trigger('change'); // Notify any JS components that the value changed
});
