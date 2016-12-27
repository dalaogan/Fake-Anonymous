function addEvent(elem,eventType,func){
	try{
	   if(elem !=null && typeof elem=="object"){
		   if(-[1,]){
			   //IE9+
			   elem.addEventListener(eventType,func);
		   }else{
	      		   //IE6/7/8
		       elem.attachEvent("on"+eventType,func);
				   }
	    }else{
		    throw new Error("绑定事件失败，不是对象或对象为空");
		}
	}catch(e){
		alert(e.message);	
	}
} 