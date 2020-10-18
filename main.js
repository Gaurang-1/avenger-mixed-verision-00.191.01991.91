var canvas=new fabric.canvas('myCanvas');

height=80;
width=50;

x=433;
y=343;

var block_image="";
var player_objects="";

function player_update(){
    fabric.Image.fromURL("spidy.jpg",function (Img){
        player_objects=Img;
    
        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(140);
        player_objects.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_objects);
    
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function (Img){
    block_image=Img;

    block_image.scaleToWidth(block_width);
    block_image.scaleToHeight(block_height);
    block_image.set({
        top:player_y,
        left:player_x

    });
    canvas.add(block_image);
    });

}
