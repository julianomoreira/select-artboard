const { Text, Color } = require("scenegraph");
const { alert, error } = require("./lib/dialogs.js");

async function showAlert() {
    /* we'll display a dialog here */
    await alert("Nothing is selected",
    "In order for me to rename an element, you need to select one.");
}

async function showResult(el) {
    /* we'll display a dialog here */    
    // console.log(el); 
    // switch(el) {
    //     case "Text":
    //         console.log("this is a Text node.");
    //         break;
    //     case "Artboard":
    //         console.log("this is an Artboard node.");
    //         break;
    //     default:   
    //         console.log("sorry nothing selected.")
    // }        
    await alert("Yaay! You selected something",
    `The selected element is ${el}`);
    // console.log("alert:", t instanceof Promise);
    
}

async function myCommand(selection) {
    const {items} = selection;
    // console.log(items);
    if (!items) {        
        showAlert();
        return false;        
    } else {                   
        // Print out types of all child itemss (if any)
        // items.forEach(function (item, i) {
        //     console.log("item:", item);
        //     // console.log("Child " + i + " is a " + childNode.constructor.name);                       
        //     // showResult(childNode.constructor.name, i);
        //     // item.children.forEach(function (child, i){                                                
        //     //     console.log("child:", child);                                                                               
        //     //     showResult(child.name);
        //     // }); 
            
        // });
        for (let item of items) {
            console.log("item:", item);    
            const itemChildren = item.children.map(x => x);        
            for (let child of itemChildren) {                
                console.log("child:", child);
                await showResult(child.name);
            }
        }           
        
    }            
}


// function createRainbowTextHandlerFunction(selection) {

//     const node = new Text();

//     const textData = [
//         { text: "This ", color: "red" },
//         { text: "is ", color: "orange" },
//         { text: "some ", color: "yellow" },
//         { text: "ra", color: "green" },
//         { text: "in", color: "blue" },
//         { text: "bow ", color: "indigo" },
//         { text: "text", color: "violet" }
//     ];

//     node.text = textData.map(item => item.text).join("");

//     // styleRange is an array of styles, and `length`
//     // determines how far into the text each style applies.
//     // A length of 1 means the style applies to one
//     // character.
//     node.styleRanges = textData.map(item => ({
//         length: item.text.length,
//         fill: new Color(item.color),
//         fontSize: 24
//     }));

//     selection.insertionParent.addChild(node);
//     node.moveInParentCoordinates(20, 50);
// }

module.exports = {
    commands: {
        "createRedTextCommand": myCommand        
    }
};
