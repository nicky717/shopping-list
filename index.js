$('.shopping-list').empty();
$(document).ready(function(event){
$('#js-shopping-list-form').on('submit', function(event){
			event.preventDefault();
			var getItem = function(){

				return $('#shopping-list-entry').val();


			}();

			(function(itemToAdd){
				itemToAdd = getItem;
				$('.shopping-list').append('<li><span class="shopping-item">' + itemToAdd + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
				$('#shopping-list-entry').val('');
			})();



			

		});


		/*to check/uncheck an item*/

	(function(){

		$('.shopping-list').on('click','.shopping-item-toggle', function(event){

			
			$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	
			


		});

	})();
		

		/*to delete an item*/

	(function(){

		$('.shopping-list').on('click','.shopping-item-delete', function(event){

			
			$(this).closest('li').remove();
	
			


		});

	})();
		
});