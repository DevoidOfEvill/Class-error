var name;

var x;
var y;

var animation,ani_label;

var ani;

var type_;

/* -------------------------------------------------------------------------- */

class castle {

    constructor(type,name,x,y,animation,ani_label) {
        this.type_=type;

        switch (type) {
            case "block"||"default" :  name=createSprite(x,y,70,70);
        
                            function preload() {
                                ani=loadAnimation(String(animation));
                            }
                            preload();
        
                            name.addAnimation(ani_label,ani);
                            
                            break;
            default : console.log("Error!");
        }
    }

    /*switch (this.type_) {
        case 'b' :  cBlock("asdf",200,200,"UI/SciFi/lPanel.png","panel");
                        break;
        default : console.log("Error!");
                    break;
    }*/

    cBlock(name,x,y,animation,ani_label){
        name=createSprite(x,y,70,70);

        function preload() {
            ani=loadImage(String(animation));
        }
        preload();

        name.addAnimation(String(ani_label),ani);
    }

    
}