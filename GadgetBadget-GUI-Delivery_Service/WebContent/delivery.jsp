<%@page import="model.Delivery"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Delivery Management</title>
<link href="myStyle.css" rel="stylesheet" />
		<link rel="stylesheet" href="Views/bootstrap.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
		<script src="Components/jquery-3.5.0.min.js"></script>
		<script src="Components/Order.js"></script>
</head>
<body>

		<div class="container">
	
			
				<center>
					<h1><b>Delivery Management</b></h1>
				</center>
			
			<br><br>
			
			<fieldset>
	
				<legend><b><h3>Delivery Management Service</h3></b></legend>
					<form id="ORDER" name="ORDER" class="border border-light p-5">
						
						<div class="form-outline mb-4">
						    <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Delivery Fee:</label>
						    <input type="hidden" id="orderID" name="orderID">
						    <input type="text" id="orderCode" class="form-control" name="orderCode">						    
						</div>
						
						<div class="form-outline mb-4">
						    <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Date:</label>
						    <input type="text" id="orderType" class="form-control" name="orderType">						    
						</div>
						
						<div class="form-outline mb-4">
						    <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Location:</label>
						    <input type="text" id="customerName" class="form-control" name="customerName">						    
						</div>
						
						<div class="form-outline mb-4">
						    <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Time:</label>
						    <input type="text" id="customerContact" class="form-control" name="customerContact">						    
						</div>
						
						
						 
						
						    
						  </div>						
						<br> 
						<div id="alertSuccess" class="alert alert-success"></div>
						<div id="alertError" class="alert alert-danger"></div>	
						<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary btn-lg btn-block"> 
						
					</form>



</fieldset>
			
			<br> 
			
			
				<fieldset>
					<legend><b>View Delivery Details</b></legend>
					<form method="post" action="delivery.jsp" class="table table-striped">
						<%
						    Delivery viewOrder = new Delivery();
							out.print(viewOrder.readDeliverys());
						%>
					</form>
					<br>
				</fieldset>
			
		</div>
</body>
</html>