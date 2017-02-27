     function scroll()
	    {
		if(window.pageYOffset != null){
			return {
				left:Window.pageXOffset,
				top:window.pageYOffset
			}
		}
		else if(document.compatMode === "CSS1Compat"){
			return{
				left:document.documentElement.scrollLeft,
				top:document.documentElement.scrollTop
			}
		}
		else{
			return{
			
			    left:document.body.scrollLeft,
				top:document.body.scrollTop
			}
		}
	}