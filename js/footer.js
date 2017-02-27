	mui.init({
				swipeBack:true //启用右滑关闭功能
			});
			var active = null,
				lastid, span;
			mui(".mui-content").on("tap", "a", function() {
				var id = this.getAttribute("id");
				if (!active) {
					this.classList.add("active");
					if (id) {
						span = this.querySelector("span");
						span.classList.remove("mui-" + id);
						span.classList.add("mui-" + id + "-filled");
					}
					active = this;
				} else {
					active.classList.remove("active");
					if (lastid) {
						span.classList.remove("mui-" + lastid + "-filled");
						span.classList.add("mui-" + lastid);
					}

					this.classList.add("active");
					if (id) {
						span = this.querySelector("span");
						span.classList.remove("mui-" + id);
						span.classList.add("mui-" + id + "-filled");
					}

					active = this;
				}
				lastid = id;
			});