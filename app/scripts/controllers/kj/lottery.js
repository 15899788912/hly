// JavaScript Document
	//弹出设置窗口
	$('#sort dd').live('click', function() {
		$('html').addClass('body_h');
		$('body').addClass('body_h');
		$('#sort_content').addClass('show');
		$('#sort_content').siblings(".bd").hide();
		$('.asort').eq($(this).index()).addClass('show');
    $(".nav-menus").removeClass("nav_show").addClass("nav_hidden");
	});
	$('.asort .hd .btn_qd').live('click', function() {
		$('html').removeClass('body_h');
		$('body').removeClass('body_h');
		$('#sort_content').removeClass('show');
		var _this = $(this);
		setTimeout(function() {
			_this.parent().parent().parent().removeClass('show');
		}, 300);
	});
	$('.hd .btn_qx').live('click', function() {
		$('html').removeClass('body_h');
		$('body').removeClass('body_h');
		$('#sort_content').removeClass('show');
		var _this = $(this);
		setTimeout(function() {
			_this.parent().parent().parent().removeClass('show');
		}, 300);
	});
	//设置窗口定制采种
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	    clickEvent="click";
	} else {
	    clickEvent="click";
	}
(function($){
	$('.edtlist-nochked').on(clickEvent,'li',function(){
	    $(this).appendTo('.edtlist-chked');
		//提示:用户没有定制彩种 显示或隐藏判断
		if(($.trim($('.edtlist-chked').text()))==""){
			$('#choice').show();
		}else{
			$('#choice').hide();
		}

	});

	var sToEdtlist;
	$('.edtlist-chked').on(clickEvent,'li',function(){
	    sToEdtlist=$(this).attr('flag');
	    $(this).appendTo('.'+sToEdtlist);
		//提示:用户没有定制彩种 显示或隐藏判断
		if(($.trim($('.edtlist-chked').text()))==""){
			$('#choice').show();
		}else{
			$('#choice').hide();
		}

	});


	//book();

})(jQuery);
function book(){
	var in_arr = loc_in?loc_in.split(","):[],in_h=[],out_h=[],def=[];
	for(var i in book_arr){
    	def.push('<li id = "b_'+book_arr[i]['id']+'" flag="edtlist-flag1"><span>'+book_arr[i]['name']+'</span></li>');
		if(in_array("b_"+book_arr[i]['id'],in_arr)){
			in_h.push('<li id = "b_'+book_arr[i]['id']+'" flag="edtlist-flag1"><span>'+book_arr[i]['name']+'</span></li>');
		}else{
			out_h.push('<li id = "b_'+book_arr[i]['id']+'" flag="edtlist-flag1"><span>'+book_arr[i]['name']+'</span></li>');
		}
	}
	if(in_arr.length>0){
    	$("#b_in_ul").html("");
    	$("#b_out_ul").html("");
    	$("#b_in_ul").append(in_h.join(""));
		$("#b_out_ul").append(out_h.join(""));
	}else{
    	$("#b_in_ul").append(def.join(""));
	}
}

function in_array(search,array){
    for(var i in array){
        if(array[i]==search){
            return true;
        }
    }
    return false;
}

