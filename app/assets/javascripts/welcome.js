
$(document).ready( function(){
  $.ajax({ 
    url: 'http://json-server.devpointlabs.com/api/v1/products',
    method: 'GET',
  }).done( function(products){
    products.forEach(function(product){
      var list = $('#products')
    })
  })
  })