var name;

var x;
var y;

var animation,ani_label;

var ani;

var type_;

class castle {
    cBlock(name,x,y,animation,ani_label){
        name=createSprite(x,y,70,70);

        function preload() {
            ani=loadImage(String(animation));
        }
        preload();

        name.addAnimation(String(ani_label),ani);
    }

    constructor(type,name,x,y,animation,ani_label) {
        this.type_=String(type);

        switch (String(this.type_)) {
            case "block" :  cBlock(name,x,y,animation,ani_label);
                            break;
            default : console.log("Error!");
        }
    }
}