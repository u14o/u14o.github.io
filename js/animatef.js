function animate(obj, json,fn) {
		clearInterval(obj.timer);

		obj.timer = setInterval(function() {
			var flag = true;
			for(var k in json) {
				var leader = parseInt(getStyle(obj, k));
				var step = (json[k] - leader) / 10;

				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				leader = leader + step;
				obj.style[k] = leader + "px";

				if(leader != json[k]) {
					flag = false;
				}

			}
			if(flag) {
				clearInterval(obj.timer);
				if(fn) {
					fn();
				}
			}

		}, 30)

	}
		function getStyle(obj,attr)//obj:访问的盒子  attr:访问的属性
	{
		if(obj.currentStyle){
			return obj.curretStyle[attr];
		}
		else{
			return window.getComputedStyle(obj,null)[attr];
        	}
	}