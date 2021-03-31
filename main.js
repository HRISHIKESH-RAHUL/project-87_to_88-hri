var canvas = new fabric.Canvas('myCanvas');
hero_image_height = 30;
hero_image_width = 30;
groot_x = 10;
groot_y = 10;

var groot_objects = "";
var hero_image_object = "";
function groot_update(){
    fabric.Image.fromURL("player_groot.png", function(Img){
        groot_objects = Img;

        groot_objects.scaleToWidth(150);
        groot_objects.scaleToHeight(150);
        groot_objects.set({
            top:groot_y,
            left:groot_x
        });
        canvas.add(groot_objects);
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
       hero_image_objects = Img;

        hero_image_objects.scaleToWidth(hero_image_width);
       hero_image_objects.scaleToHeight(hero_image_height);
        hero_image_objects.set({
            top:groot_y,
            left:groot_x
        });
        canvas.add(hero_image_objects);
    })
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80'){
    console.log("p and shift pressed together");
    hero_image_height = hero_image_height + 10;
    hero_image_width = hero_image_width + 10;
    document.getElementById("current_width").innerHTML = hero_image_width;
    document.getElementById("current_height").innerHTML = hero_image_height;
}

if(e.shiftKey == true && keyPressed == '77'){
    console.log("m and shift pressed together");
    hero_image_height = hero_image_height - 10;
    hero_image_width = hero_image_width - 10;
    document.getElementById("current_width").innerHTML = hero_image_width;
    document.getElementById("current_height").innerHTML = hero_imagse_height;
}

if(keyPressed == '38'){
up();
console.log("up");
}
if(keyPressed == '40'){
down();
console.log("down");
}
if(keyPressed == '39'){
right();
console.log("right");
}
if(keyPressed == '37'){
left();
console.log("left");
}
if(keyPressed == '70'){
new_image('thor_face.png');
console.log("f");
}
if(keyPressed == '66'){
new_image('ironman_body.png');
console.log("b")
}
if(keyPressed == '76'){
new_image('spiderman_legs.png')
console.log("l")
} 
if(keyPressed == '82'){
new_image('thor_right_hand.png');
console.log("r");
}
if(keyPressed == '72'){
new_image('captain_america_left_hand.png');
console.log("h");
}
}

function up(){
    if (groot_y >= 0){
        groot_y = groota_y - hero_image_height;
      console.log("hero image height = "+ hero_image_height);
      console.log("up arrow is pressed, x = "+ groot_x + " y = " + groot_y);
      canvas.remove(groot_objects);
      groot_update();
    }  
  }
  
  function down(){
      if (groot_y <= 600){
        groot_y = groot_y + hero_image_height;
        console.log("hero image height = "+ hero_image_height);
        console.log("up arrow is pressed, x = "+ groot_x + " y = " + groot_y);
        canvas.remove(groot_objects);
        groot_update();
      }  
    }
  
    function left(){
      if (groot_x >= 0){
        groot_x = groot_x - hero_image_width;
        console.log("hero image width = "+ hero_image_width);
        console.log("up arrow is pressed, x = "+ groot_x + " y = " + groot_y);
        canvas.remove(groot_objects);
        groot_update();
      }  
    }
  
    function right(){
      if (groot_x <= 1000){
        groot_x = groot_x + hero_image_width;
        console.log("hero image width = "+ hero_image_width);
        console.log("up arrow is pressed, x = "+ groot_x + " y = " + groot_y);
        canvas.remove(groot_objects);
        groot_update();
      }  
    }         
           