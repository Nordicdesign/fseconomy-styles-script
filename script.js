var current_url = window.location.href;

// AIRPORT page
if (current_url.indexOf('/airport.jsp') > 0) {
	$('.form').addClass('airport-search');
	var el = document.getElementsByClassName('form')
	for (let item of el) {
    	item.removeAttribute('style')
	}	
	
	// move ICAO identifier out of table
	var icao = $('#wrapper > div > div.airportInfo > table > tbody > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1)').detach();
	$('.airportInfo').prepend(icao);
	
	$('.airportInfo > table:nth-child(2)').wrap( "<div class='airportInfo-data'></div>" );
	$('.airportInfo-data > table > tbody > tr:nth-child(1) > td').addClass('airportInfo-keydata');
	$('.airportInfo-data > table > tbody > tr:nth-child(1) > td:nth-child(2)').addClass('airportInfo-local-carriers');
	$('#wrapper > div > div.airportInfo > table:first-child').css( "margin", "8px 0 16px" );
	$('.airportInfo-data > table > tbody > tr:nth-child(2) > td').addClass('airportInfo-fbo-space');
}

// AIRCRAFT LOG page
if (current_url.indexOf('/aircraftlog.jsp') > 0) {
	$('[name="aircraftForm"]').addClass('aircraft-log');
	// remove hardcoded borcers
	$('[name="aircraftForm"] table').removeAttr('border')
	$('.content .dataTable:nth-child(2)').addClass('aircraft-log-entries')
	$('.aircraft-log-entries td[colspan="7"]').attr('colspan', 8);
}

// AIRCRAFT FOR SALE
if (current_url.indexOf('/aircraftforsale.jsp') > 0) {
	$("button:contains('Search')").click(function() {
		$('html,body').animate({scrollTop: $('#aircraftTable').offset().top});
		// $('body').animate({ scrollTop: $("#aircraftTable").offset().top }, 500);
	})
}

// LOG
if (current_url.indexOf('/log.jsp') > 0) {
	$('.dataTable table').first().addClass('personal-log');
	$('.dataTable td[colspan="7"] table').addClass('table-pagination');
	$('.dataTable td[colspan="7"]').attr('colspan', 9);
}

// PAYMENT LOG
if (current_url.indexOf('/paymentlog.jsp') > 0) {
	$('.dataTable').addClass('payment-log');
	$(".dataTable table td:nth-child(7) a:contains('')").remove()
	$('.dataTable td[colspan="7"]').attr('colspan', 9);
	// var img = $('.dataTable td:nth-child(8) a img').remove()
	// $('.dataTable td:nth-child(8)').prepend(img)
}

// FBO for sale
// if (current_url.indexOf('/fbosforsale.jsp') > 0) {}

// GMAPS
if (current_url.indexOf('/gmapfbo.jsp') > 0) {
	$('#map').removeAttr('style').addClass('gmaps')
}
