<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>index</title>
<link rel="stylesheet" href="/mts/css/bootstrap.css">
</head>
<body class="container">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a href class="navbar-brand">myBank</a>
	</nav>
	
	<div class="col-sm-6 col-md-6">
		<div class="card">
			<div class="card-header">Txr Form </div>
			<div class="card-body">
				<div class="alert alert-success">
				${statusMessage}
				</div>
				<div class="alert alert-success">
				${fromAccount.num}  ==> ${fromAccount.balance}
				</div>
				<div class="alert alert-success">
				${toAccount.num}  ==> ${toAccount.balance}
				</div>
			</div>
		</div>
	</div>
	
</body>
</html>