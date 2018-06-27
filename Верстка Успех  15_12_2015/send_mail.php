<?php
	if((isset($_POST['username'])&&$_POST['username']!="")&&(isset($_POST['userphone'])&&$_POST['userphone']!="")){ 
		$headers  = "Content-type: text/html; charset=utf-8 \r\n";
		$mail_message = "Меня зовут " . $_POST["username"] . ";\nМой EMail: " . $_POST["usermail"] . ";\nМой телефон: " . $_POST["userphone"] . ";\n" . $_POST["message"];
		mail("550032.brest@gmail.com", "Курсы", $mail_message, $headers);
		echo "<head>
			<style>
				@font-face{
					font-family: Roboto-Bold;
					src: url(fonts/Roboto-Bold.ttf);
				}
			
				body{
					background-color: rgb(138, 169, 174);
					text-align: center;
				}
				
				div {
					position: absolute;
					width: 100%;
					text-align: center;
					z-index:2;
					font: 30px Roboto-Bold;
					color:#3c515c;
					text-shadow: 2px 2px 5px gray;
				}
				
				#back{
					position: fixed;
					transition: all 0.7s;
					opacity: 0.7;
					top: 20px;
					left: 20px;
					cursor: pointer;
				}
				
				#back:hover{
					opacity: 1;
					transition: all 0.7s;
				}
			</style>
		</head>";
		echo "<body>";
		echo "<img src = 'images/main.png'>";
		echo "<a href = 'index.html'><img src = 'images/BackArrow.png' id = 'back'></a>";
		echo "<div>";
		echo "Ваше сообщение отправлено";
		echo "</div>";
		echo "</body>";
	}
	else echo "<h1>500 Internel Server Error</h1>";
?>