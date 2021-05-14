//hide alert
$(document).ready(function() {

	$("#alertSuccess").hide();
	$("#alertError").hide();
	$("#hidOrderIDSave").val("");
	$("#DELIVERY")[0].reset();
});

$(document).on("click", "#btnSave", function(event) {

	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	// Form validation-------------------
	var status = validateDeliveryForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	
	// If valid------------------------
	var type = ($("#deliveryId").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "DeliveryAPI",
		type : type,
		data : $("#DELIVERY").serialize(),
		dataType : "text",
		complete : function(response, status) {
			//console.log(status);
			onDeliverySaveComplete(response.responseText, status);
			window.location.reload(true);
		}
	});

});

function onDeliverySaveComplete(response, status) {
	
	if (status == "success") {
		
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success") {
			
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#DeliveryGrid").html(resultSet.data);
			
		} else if (resultSet.status.trim() == "error") {
			
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error") {
		
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
		
	} else {
		
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	
	$("#deliveryId").val("");
	$("#DELIVERY")[0].reset();
}

$(document).on("click", ".btnRemove", function(event) {
	
	$.ajax({
		url : "DeliveryAPI",
		type : "DELETE",
		data : "deliveryId=" + event.target.value,
		dataType : "text",
		complete : function(response, status) {
			onDeliveryDeleteComplete(response.responseText, status);
			window.location.reload(true);
		}
	});
});

function onDeliveryDeleteComplete(response, status) {
	
	if (status == "success") {
		
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success") {
			
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#DeliveryGrid").html(resultSet.data);
			
		} else if (resultSet.status.trim() == "error") {
			
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
		
	} else if (status == "error") {
		
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
		
	} else {
		
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

// UPDATE==========================================
$(document).on("click",".btnUpdate",function(event)
		{
			$("#deliveryId").val($(this).closest("tr").find('td:eq(0)').text());
			$("#deliveryFee").val($(this).closest("tr").find('td:eq(1)').text());
			$("#date").val($(this).closest("tr").find('td:eq(2)').text());
			$("#location").val($(this).closest("tr").find('td:eq(3)').text());
			$("#time").val($(this).closest("tr").find('td:eq(4)').text());
				
		});


// CLIENT-MODEL====================
	function validateDeliveryForm()
	{
		//delivery fee--------------------
		if ($("#deliveryFee").val().trim() == "")
		{
			return "delivery fee."; 
		} 
		
		// is numerical value 
		var tmpPrice = $("#deliveryFee").val().trim(); 
		if (!$.isNumeric(tmpPrice))
		{
			return "Insert a numerical value for delivery fee."; 
		} 
		
		// convert to decimal price 
		$("#deliveryFee").val(parseFloat(tmpPrice).toFixed(2));
		
		 
	
		//date-------------------
		if ($("#date").val().trim() == "")
		{
			return "Insert date."; 
		} 
		
		
		//location
		if ($("#location").val().trim() == "")
		{
			return "Insert location."; 
		} 
		
		
		//time
		if ($("#time").val().trim() == "")
		{
			return "Insert time."; 
		}
		
		return true;
	} 