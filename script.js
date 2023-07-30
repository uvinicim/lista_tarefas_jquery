$(document).ready(
    function(){
        $('#button').click(
            function(){
                let adicionar = $('input[name=lista]').val();
                $('ul').append('<li>' + adicionar + '</li>');
            });

        $("input[name=lista]").keyup(function(event){
        if(event.keyCode == 13){
            $("#button").click();
        }         
    });
    
        $(document).on('click','li', function(){
        $(this).css("text-decoration", "line-through")   
        });
    
    $('input').focus(function() {
        $(this).val('');
    });
    
    
        $('ul').sortable(); 
        
        
    
    }
);

