function addEvent(t,e,n){try{if(null==t||"object"!=typeof t)throw new Error("绑定事件失败，不是对象或对象为空");-[1]?t.addEventListener(e,n):t.attachEvent("on"+e,n)}catch(a){alert(a.message)}}