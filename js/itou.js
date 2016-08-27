
	$(document).ready(function(){
		$("#dowebok").fullpage({
			menu: '#menu',
			css3: true,
			easing: 'easeInOutCubic',
            easingcss3: 'ease',
            controlArrowColor: '#fff',
			slidesNavigation: true,
			slidesNavPosition: 'left',
			autoScrolling: true,
			controlArrows: false,
			navigation: true,
		});


		$(".helpicon01").mouseover(function(){
			$(".helpcont01").css("display","block")
		});
		$(".helpicon01").mouseout(function(){
			$(".helpcont01").css("display","none")
		});

		$(".helpicon02").mouseover(function(){
			$(".helpcont02").css("display","block")
		});
		$(".helpicon02").mouseout(function(){
			$(".helpcont02").css("display","none")
		});



		$(".functionmenu li").click(function(){
			$(".functionmenu li").removeClass("current")
			$(this).addClass("current")
		});


				// 站主帮助页
		$("#question_list h3.question_header").click(function(){
			$(this).addClass("current").next("div.question_body").slideToggle(300).siblings("div.question_body").slideUp("slow");
			$(this).siblings().removeClass("current");
		});

  		$(".question_list2 h3.question_header2").click(function(){
    		$(this).next("div.question_body2").slideToggle(300).siblings("div.question_body2").slideUp("slow");
  		});

  		

	function autoPlay(start,obj,objBar,total,classname){
		var n=start;
		this.play=function(){
			for(var i=0;i<total;i++){
				obj[i].className=objBar[i].className="";
			}
			obj[n].className=objBar[n].className=classname;
			n++;
			n=n==total?0:n;
		}
	}
	window.onload=function(){
		var odd=$("#website dd");
		var obar=$("#website dt p");
		var ntotal=odd.length;
		odd[0].className=obar[0].className="active";
		var ohot = new autoPlay(0,odd,obar,ntotal,"active");
		loop=setInterval(function(){ohot.play();},3000);
		//选号
		var odd=$("#xuanhao dd");
		var obar=$("#xuanhao dt p");
		var ntotal=odd.length;
		var onews = new autoPlay(0,odd,obar,ntotal,"active");
		loop=setInterval(function(){onews.play();},3000);
		// //店主管理
		var odd=$("#manage dd");
		var obar=$("#manage dt p");
		odd[0].className=obar[0].className="active";
		var ntotal=odd.length;
		var other = new autoPlay(0,odd,obar,ntotal,"active");
		loop=setInterval(function(){other.play();},3000);
		//用户引流
		var odd=$("#user dd");
		var obar=$("#user dt p");
		odd[0].className=obar[0].className="active";
		var ntotal=odd.length;
		var onuser = new autoPlay(0,odd,obar,ntotal,"active");
		loop=setInterval(function(){onuser.play();},3000);
	}
	});	



		window.onload=function(){
		var oLis=$('#helpmain_nav dd');
		var oDivs=$('#tabCon > div');
			for(var i=0;i<oLis.length;i++){
				oLis[i].index=i;
				oLis[i].onclick=function(){
					for(var n=0;n<oLis.length;n++){
						oLis[n].className='';
						oDivs[n].className='hide';
					}
					this.className='on';
					oDivs[this.index].className='';
				}
			}
		}


		// 软件下载页轮播
		window.onload = function(){
            var list = document.getElementById('downlist');
            var buttons = document.getElementById('downbutton').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var animated = false;
            var interval = 3000;
            var timer;
            
            function animate(offset){
            	animated = true;
                var time = 300;
                var interval = 10;
                var speed = offset/(time/interval); 
            	var newLeft = parseInt(list.style.left) + offset;
            	var go = function(){
	            	if((speed > 0 && parseInt(list.style.left) < newLeft ) || ((speed < 0) && parseInt(list.style.left) > newLeft )){
	            		list.style.left = parseInt(list.style.left) + speed + "px";
	            		setTimeout(go,interval)
	            	}
	            	else{
	            		animated = false;
	            		list.style.left = newLeft + "px";
		            	if(newLeft > 0){
		            		list.style.left = -2400 + "px"; 
		            	}
		            	if(newLeft < -2400){
		            		list.style.left = 0 + "px";
		            	}
	            	}
	            }
	            go();
            	
            }
            function play(){
            	timer = setInterval(function(){
            		next.onclick()
            	},3000);
            }
            play();
            function stop(){
            	clearInterval(timer);
            }

            next.onclick = function(){
            	if(index == 4){
            		index = 1;
            	}
            	else{
            		index += 1;	
            	}
            	
            	showButton();
            	if (!animated) {
            		animate(-800);
            	}
                
            } 
            prev.onclick = function(){
            	if(index == 1){
            		index = 4;
            	}
            	else{
            		index -= 1;	
            	}
            	
            	showButton();
            	if (!animated) {
            		animate(800);
            	}
            } 

            function showButton(){
            	for (var i = 0; i < buttons.length; i++) {
            		if(buttons[i].className == "on"){
            			buttons[i].className = "";
            			break;
            		}
            	}	
            	buttons[index-1].className = "on";
            		
            	
            }
            for (var i = 0; i < buttons.length; i++) {
               	buttons[i].onmouseover = function(){
               		if(this.className == "on"){
               			return;
               		}
               		var myIndex = parseInt(this.getAttribute("index"));
               		var offset = -800*(myIndex - index);
               		animate(offset);
               		index = myIndex;
               		showButton();
               	}
            } 
 
        }





