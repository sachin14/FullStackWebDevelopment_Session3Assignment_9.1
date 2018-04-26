//This code creates a object and returns about yourself

//function starts

function createObject(name, height){
  
    this.name = name;
    this.height = height;
    this.aboutYourself = function(){
        console.log("I am " + this.name + ". I am " + this.height + " cm height");
    }
 }
    //create an instance of object
    var me = new createObject("Bala", 168);
    me.aboutYourself();

