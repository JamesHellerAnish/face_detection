$(()=>{
    $('#add_face').click(()=>{
        if($('#add_face_input').val()!=''){
            $.get('/add_face',{
                name:$('#add_face_input').val()
            },(data)=>{
                console.log('Face now can be detected for '+ data)
                $('#add_face_input').val('')
                $('#msg').text('Face now can be detected for '+data)
            })
        }
    })
    $('#detect_face').click(()=>{
        $.get('/detect_face',(data)=>{
            $('#msg').text('Face was detected for '+data)
        })
    })
})