 var canvas = new fabric.Canvas("myCanvas");
 var biw = 30;
 var bih = 30;
 var px = 10;
 var py = 10;
 var plj = "";
 var block_Image_object = "";
 function player_update(e_obj){
     fabric.Image.fromURL("player.png",function(Img){
     plj = Img;
     plj.scaleToHeight(140);
plj.scaleToWidth(140);
plj.set({top:py,left:px});
canvas.add(plj);
 });
 }
 function new_img(get_image){
     fabric.Image.fromURL(get_image,function(Img){
    
         block_Image_object.scaleToWidth = 20;
         block_Image_object.scaleToHeight = 20;
          block_Image_object.Set({top:py,left:px});
          canvas.add(block_image_object);
     
    });
 }
     window.addEventListener("keydown",my_keydown);
     function my_keydown(e){
         var kp = e.keyCode;
         console.log(kp);
     if (kp == '86'){
         console.log("V is pressed");
         biw = biw + 10;
        bih = bih + 10;
         document.getElementById("current_wid").innerHTML= biw;
     document.getElementById("current_hie").innerHTML = bih;
     }
    if (kp == '78'){
        console.log("N is pressed");
        biw = biw - 10;
        bih = bih - 10;
    document.getElementById("current_wid").innerHTML= biw;
    document.getElementById("current_hie") .innerHTML=bih;
    }
if(kp == '37'){
    left();
    console.log("left");
}
if (kp == '39'){
    right();
    console.log("right");
}
if (kp == '38'){
    up();
    console.log("up");
}
if(kp == '40'){
    down();
    console.log("down");
}
if(kp == '76'){
    new_img('cloud.jpg');
    console.log("l is pressed");
}
if (kp == '74'){
    new_img('trunk,jpg');
    console.log("j is pressed");
}
 if(kp == '71'){   
new_img('roof.jpg');
console.log("g is pressed");
}
     }





        