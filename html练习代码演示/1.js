 //    var box = document.all.table;
	// function alls(ele){
	// 	document.getElementsByClassName("c1")[0].checked = true;
	// }
	// function allns(ele){
 //        document.getElementsByClassName("c1")[0].checked = false;	
	// }

	


	// var cities = [
	// ["东城区","西城区","海定区","朝阳区","石景山区"],
	// ["浦东区","嘉定区","奉贤区","宝山区","闵行区"],
	// ["南京市","苏州市","无锡市","南通市","常州市"],
	// ["石家庄市","唐山市","秦皇岛市","保定市","沧州市"],
	// ["成都市","绵阳市","攀枝花市","乐山市","自贡市"]
	// ];
	// var select1 = document.all.select1.children;
	// var select2 = document.all.select2;
	// function sel1(ele){
	// 	select2.textContent="";
	// 	var index = ele.selectedIndex;
	// 			for(var j = 0;j < cities.length;j++){	
	// 		var opt = document.createElement('option');
	// 		opt.textContent = cities[index][j];
	// 		select2.appendChild(opt);
	// 	}
	// 	// console.log(select2.innerHTML);
	// }



    
    // var box1 = document.all.table1;
    // // function jian(ele){
    // 	if(document.getElementsByClassName("num")[0].value>0){
    // 		document.getElementsByClassName("num")[0].value--;	
    // 	}
    // }
    // function jia(ele){
    //     document.getElementsByClassName("num")[0].value++;   
    // }
    // function jian1(ele){
    // 	if(document.getElementsByClassName("num")[1].value>0){
    // 		document.getElementsByClassName("num")[1].value--;	
    // 	}
    // }
    // function jia1(ele){
    //     document.getElementsByClassName("num")[1].value++;   
    // }
    // function jian2(ele){
    // 	if(document.getElementsByClassName("num")[2].value>0){
    // 		document.getElementsByClassName("num")[2].value--;	
    // 	}
    // }
    // function jia2(ele){
    //     document.getElementsByClassName("num")[2].value++;   
    // }


     var box1 = document.all.table1;
     function jian(ele){
    	if(document.getElementById("num1").value>0){
    		document.getElementById("num1").value--;
    		document.getElementById("total1").value = parseInt(document.getElementById("num1").value)*4488;
    		document.getElementById("total").value = parseInt(document.getElementById("total1").value)+parseInt(document.getElementById("total2").value)+parseInt(document.getElementById("total3").value);
    	}
    	
    }
    function jia(ele){
        document.getElementById("num1").value++;  
        document.getElementById("total1").value = parseInt(document.getElementById("num1").value)*4488;
        document.getElementById("total").value = parseInt(document.getElementById("total1").value)+parseInt(document.getElementById("total2").value)+parseInt(document.getElementById("total3").value);
    }
    function jian1(ele){
    	if(document.getElementById("num2").value>0){
    		document.getElementById("num2").value--;
    		document.getElementById("total2").value = parseInt(document.getElementById("num2").value)*5288;
    		document.getElementById("total").value = parseInt(document.getElementById("total1").value)+parseInt(document.getElementById("total2").value)+parseInt(document.getElementById("total3").value);
    	}
    }
    function jia1(ele){
        document.getElementById("num2").value++; 
        document.getElementById("total2").value = parseInt(document.getElementById("num2").value)*5288;
        document.getElementById("total").value = parseInt(document.getElementById("total1").value)+parseInt(document.getElementById("total2").value)+parseInt(document.getElementById("total3").value);
    }
    function jian2(ele){
    	if(document.getElementById("num3").value>0){
    		document.getElementById("num3").value--;
    		document.getElementById("total3").value = parseInt(document.getElementById("num3").value)*4288;
    		document.getElementById("total").value = parseInt(document.getElementById("total1").value)+parseInt(document.getElementById("total2").value)+parseInt(document.getElementById("total3").value);
    	}
    }
    function jia2(ele){
        document.getElementById("num3").value++;  
        document.getElementById("total3").value = parseInt(document.getElementById("num3").value)*4288;
        document.getElementById("total").value = parseInt(document.getElementById("total1").value)+parseInt(document.getElementById("total2").value)+parseInt(document.getElementById("total3").value);
    }


     
