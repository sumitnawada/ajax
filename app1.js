$(function(){
    
$("#clickme").click(function(){
    
    
  /*$.getJSON( "age.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( " " )
  }).appendTo( "body" );
});*/



$.ajax({
    
    url:'age.json',
    dataType:'json',
    success:function(data){
    
    var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( " " )
  }).appendTo( "body" );
},
statusCode:{
                    
                    404: function(){
    
    alert("there was a problem ");
}
                    }
  });
});

});

