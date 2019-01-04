$(function() {
  $(document).on('click', '.add', addIngredient);
  $(document).on('click', '.delete', deleteIngredient);
  $(document).on('keypress', function(e) {
      var par = $(e.target).attr('class');
      if ( e.which === 13 && par == 'ingredient-name') {
          addIngredient();
      }
  });
  
  var previousValue = parseFloat($("#previousServing").val());

  $('.serving').bind('keyup', function(event) {
    var newValue = parseFloat($(event.target).val());
    updateServings(previousValue, newValue)
  });

  $('.lessServing').click(function(){
  var previousValue = parseFloat($("#previousServing").val());
  var newValue = previousValue - 1;
  $('.serving').val(newValue);
  $('#previousServing').val(newValue);
  updateServings(previousValue, newValue)
  });

  $('.moreServing').click(function(){
  var previousValue = parseFloat($("#previousServing").val());
  var newValue = previousValue + 1;
  $('.serving').val(newValue);
  $('#previousServing').val(newValue);
  updateServings(previousValue, newValue)
  });
});

function addIngredient() {
  var newIngredient = '<li class="ingredient"> <input type="number" name="serving" class="amount" value="" placeholder="1" /> <input type="text" name="ingredient-name" class="ingredient-name" value="" placeholder="ingredient name" /> <button class="delete" tabindex="-1">X</button></li>';
  $('.ingredients').append(newIngredient);
  $('.amount').focus();
};

function deleteIngredient() {
  $(this).parent().remove();
}

function updateServings(previousValue, newValue) {
  if (previousValue && newValue) {
      $('.ingredient').each(function(index, elem) {
          var ingredientNow = parseFloat($('.amount', elem).val());
          //alert(ingredientNow);
          var oldIngredientAmount = ingredientNow;
          var newIngredientAmount = oldIngredientAmount * newValue / previousValue;
          $('.amount', elem).val(roundToTwo(newIngredientAmount));
          //ingredientNow.text(roundToTwo(newIngredientAmount));
      });
      $('#previousServing').val(newValue);
  }
};

function roundToTwo(num) {    
  return +(Math.round(num + "e+2")  + "e-2");
};