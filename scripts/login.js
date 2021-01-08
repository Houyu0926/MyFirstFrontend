$(function(){
				var btn = $("input").eq(2);
				btn.click(function(){
					var useNameVal = $("input").eq(0).val();
					var pswdVal = $("input").eq(1).val();//点击事件先获取input输入框中的值
					findUser(useNameVal,pswdVal);//调用下面的findUser函数，里面传参数：userName和password.
				})
				function findUser(useNameVal,pswdVal){
					$.ajax({
						type:"post",
						url:"http://localhost:8080/Practice2/FindUser?action=checkUser",
						async:true,
						dataType:"jsonp",
						jsonpCallback:"successCallback",
						data:{name:useNameVal,password:pswdVal},
						success:function(result){//后台返回result
							console.log(result);
							if(result=="0"){ //返回值为0表示账号与密码匹配正确
								alert("恭喜登录成功！");
								window.location.href="newFile.html";
							}else{//否则匹配不正确，登录失败。
								alert("抱歉，账号和密码不匹配！");
							}
						},
						error:function(){
							alert("对不起，请求出错！");
						}
					});
				}
			})