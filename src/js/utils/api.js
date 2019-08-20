function getData(url, callback) {
  $.ajax({
    url: url,
    method: "GET"
  })
   .done(function( data ) {
    console.log(data);
    callback(data)
  })
   .fail(function( error ) {
    console.log( 'Error: ' , error )
  })

}




export default getData
