$(function(){
	var $content = $( "#content" );
	function createContent ( i, index ) {
		console.log(i)
	}

	Helper.ui.page("#page-1", {
	    total: 2000,
	    pageSize: 10,
	    change: function ( i ) {
	        createContent( i, 0 );
	    }
	});
	var options = {
		list:".list",//列表标识
		currentPage:1,//初始页（选传，默认1）
		pageSize:5,//每页列表数
		listTotal:100,//列表总数（选传），不传为list总数
	}
	$("#pageBox").paging(options)
	function ajaxDemo(page,pageSize){
		if(!pageSize)var pageSize = 5;
		var data = {},arr=[];
		for(var i = 1;i<=100;i++){
			arr.push(i);
			if(i==pageSize){
				data[1]=arr;
				arr=[];
			}else if(i==pageSize*2){
				data[2]=arr;
				arr=[];
			}else if(i==pageSize*3){
				data[3]=arr;
				arr=[];
			}else if(i==pageSize*4){
				data[4]=arr;
				arr=[];
			}else if(i==pageSize*5){
				data[5]=arr;
				arr=[];
			}else if(i==pageSize*6){
				data[6]=arr;
				arr=[];
			}else if(i==100){
				data[7]=arr;
				arr=[];
			}
		}
		return data[page];
	}
})