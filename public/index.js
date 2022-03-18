$(document).ready(function(){
    $('#login').click(function (){
        console.log('sono stato clicatto')
        let data = 'ciao'
        $.ajax({
            type: "POST",
            url: '/schifo',
            data: data,
          // contentType: 'application/x-www-form-urlencoded',
          contentType: 'application/json',
            success: function (msg){
                console.log('it worked sono succ', msg)
                if (msg === "done"){
                    console.log('yeeee')
                }
            },
            error: function (){
                console.log('nope, it didnt work sono err' )
            } 
    }) 
    })

    $('#register').click(function (){
        
    })
})