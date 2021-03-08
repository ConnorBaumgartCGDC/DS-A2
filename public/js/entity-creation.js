//setObject3D reference
//https://aframe.io/docs/1.1.0/core/entity.html#setobject3d-type-obj
'use strict';

AFRAME.registerComponent('entity-creation', {
  schema: {
    
  },
  init: function () {

    //local reference to entity and set property value
    const Context_AF = this;
    Context_AF.sphere = document.querySelector('#sphere');
     
    var sceneEl = document.querySelector('a-scene');
    var i = 0;

    //define sizes of connect4 board size
    const connect4_width = 7;
    const connect4_height = 6;
    //window.connect4_array = []; 

    Context_AF.el.addEventListener('click', function(event) {
      //takes button id's and determines colour and position index
      const elemId = event.target.id;
      const strArr = elemId.split('_');
      const col = strArr[0];
      const index = strArr[1];

      //if the position index is 'reset', then clear and recreate the grid
      if(strArr[0] == 'reset'){

        window.connect4_array = []; //by attaching it the window object it is truly global and accessible anywhere

        console.log('create grid system');
        //initializes grid
        for (let w = 0; w <= connect4_width; w++) {          
          let h_array = []; //create an array that represents all the elements in each column

          for (let h = 0; h <= connect4_height; h++) {
            h_array.push('none'); //we can use three colors for colour 'none', 'red', 'blue' default is none (no colour selected)
          }

          //push "y-axis/column" array into each width section
          connect4_array.push(h_array);

          //remove all spheres
          sceneEl.querySelectorAll('a-entity').forEach(el => {
            if(el.getAttribute('id') == 'sphere')
            {
              console.log('SPHERE BEGONE');
    
              sceneEl.removeChild(el);
            }
          });
        }
      }
      else {
        //base locations
        var blx = -14
        var bly = 2
        //buffer
        var buffx = 1.35;
        var buffy = buffx
        //x,y coordinates on grid
        var y = 0;
        var x = parseInt(index - 1);

        //find point on column that has no sphere
        for(i=0;i<connect4_height;i++){
          if(connect4_array[i][x] == 'none'){
            y = i;
            break;
          }
        }
        //console.log("colour: " + connect4_array[y][x]);

        if (connect4_array[y][x] == 'none') {
          //create sphere
          var entityEl1 = document.createElement('a-entity');
          entityEl1.setAttribute('id', 'sphere')
          entityEl1.setAttribute('geometry', 'primitive:sphere; radius:1');
          sceneEl.appendChild(entityEl1);
          entityEl1.setAttribute('position', '0, ' + (bly + y*buffy) + ', ' + (blx + x*buffx));
          entityEl1.setAttribute('scale', '0.5, 0.5, 0.5');

          if(col == 'blue'){
            entityEl1.setAttribute('material', 'color:blue');
          } else {
            entityEl1.setAttribute('material', 'color:red');
          }
          connect4_array[y][x] = col;
          //console.log(connect4_array[y][x]);
        }
      }
      console.log('LET THERE BE SPHERE at column ' + index + ' with colour ' + col);

    })
   
  }

});