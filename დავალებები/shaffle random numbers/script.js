$(document).ready(function () {
    let arr = []
    
    $('#sh').click(function () {
        arr = []
        $('#container').empty()
    })
        for (let i = 0; i < 10; i++) {
            let ran = Math.floor((Math.random() * 10))
            arr.push(`<span> ${ran} </span>`)
        }
        
        for (key in arr) {
            console.log(key, arr[key]);
        }
        
        
        $('#container').append(arr)
        console.log(arr);
        console.log($("#container:nth-child(n)"));
        $("#container:nth-child(n)").css("color" ,"white")
        
        $('#acc').click(function () {
        $('#container').empty()
        console.log(arr.sort((a, b) => { return a - b; }))
        $('#container').append(arr)
    })

    $('#dec').click(function () {
        $('#container').empty()
        arr.sort((a, b) => { return a - b; })
        console.log(arr.reverse())
        $('#container').append(arr)
    })
    
    $('text').click(function () { $(this).remove(); });
})
