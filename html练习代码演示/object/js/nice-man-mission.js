$(function(){
	var $content = $( "#content" );
	function createContent ( i, index ) {
		// $content.eq( index ).empty().html( ('<li>' + i + '</li>').repeat(10) );
		console.log(i)
	}

	Helper.ui.page("#page-1", {
	    total: 2000,
	    pageSize: 10,
	    change: function ( i ) {
	        createContent( i, 0 );
	    }
	});
})