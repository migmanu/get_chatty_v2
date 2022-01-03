console.log('Client side script running')

window.onload=function() {
    var button = document.getElementById("testButton");
    button.addEventListener('click', function(event) {
        event.preventDefault()
        console.log('the button has been clicked, beware...')
    })
}

