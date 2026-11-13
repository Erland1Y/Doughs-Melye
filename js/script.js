function despliegue(p, div, id) {
    $.ajax({
        url: p+'?id='+id,
        type: 'post',
        cache: false,
        beforeSend: function(data){
            $("#"+div).html('<div id="load" align="center"><p>Cargando contenido. Por Favor, espere...</p></div>');
            },
      success: function(data){
            $('#'+div).fadeOut(1000,function(){
                $("#"+div).html(data).fadeIn(2000);
            });
      }
    })
}