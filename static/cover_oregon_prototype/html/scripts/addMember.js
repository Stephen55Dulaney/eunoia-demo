$(document).ready(function() {
	$('#sel_howMany').change(function() {
		var diff, $this, $newKeys, i, $newli, prevNo, newNo, prevLabel;

		$this = $(this);
		$newKeys = $('#newKeys');

		// Difference
		diff = $this.val() - $newKeys.find('li').length;

		if(diff > 0){
			
			// foreach difference
			for (i=0; i<diff; i++){
				
				// Need to clone and create new ones
				$newli = $newKeys.find('li:first').clone();
				
				// Get the previous number
				// Look in the html for the second instance of "[" and then the second instance of "]".
				prevLabel = $newKeys.find('li:last label').attr('for');
				prevNo = prevLabel.substring(prevLabel.indexOf("[")+1, prevLabel.indexOf("]"));
				newNo = parseInt(prevNo)+1;
				
				// Simple, just find replace all the instances of [0] in attribute.
				$newli.find('label').attr('for', $newli.find('label').attr('for').replace(/\[0\]/, '['+newNo+']'));
				$newli.find('input').attr('id', $newli.find('input').attr('id').replace(/\[0\]/, '['+newNo+']'));
				$newli.find('input').attr('name', $newli.find('input').attr('name').replace(/\[0\]/, '['+newNo+']'));
				
				$newKeys.append($newli); //Put it into the DOM after the last li
				
			}
		}
		
		if(diff < 0) {
			// Remove n from the end of the li collection
			
			// foreach difference
			for (i=0; i>diff; i--){
				
				$newKeys.find('li:last').remove();
			
			}
		}
	
	});

});