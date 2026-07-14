
let moveForce = 0; // max popup movement in pixels
let rotateForc = 14; // max popup rotation in deg

$(window).mousemove(function(e) {

    let docX = $(this).width();
    let docY = $(this).height();

    let moveX = (e.pageX - docX/2) / (docX/2) * (-moveForce);
    let moveY = (e.pageY - docY/2) / (docY/2) * (-moveForce);

    let rotateY = (e.pageX / docX * rotateForc*2) - rotateForc;
    let rotateX = -((e.pageY / docY * rotateForc*2) - rotateForc);

    $("#MoveTitle")
    .css("left" , moveX + 'px')
    .css("top" , moveY + 'px')
    .css("transform" , "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateZ(20px)");

})