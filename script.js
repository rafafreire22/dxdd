function allowDrop(ev) {
    ev.preventDefault ();
    }
        
    function drag1(ev) {
    ev.dataTransfer.setData("text",ev.target.id);
    }

    function drag2(ev) {
        ev.dataTransfer.setData("text",ev.target.id);
        }

    function drag3(ev) {
        ev.dataTransfer.setData("text",ev.target.id);
        }

    function drag4(ev) {
       ev.dataTransfer.setData("text",ev.target.id);
        }

    function drag5(ev) {
      ev.dataTransfer.setData("text",ev.target.id);
        }

    function drag6(ev) {
      ev.dataTransfer.setData("text",ev.target.id);
        }

    function drag7(ev) {
      ev.dataTransfer.setData("text",ev.target.id);
        }

    function drag8(ev) {
      ev.dataTransfer.setData("text",ev.target.id);
        }
                  

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    function rand(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
      }

            
var data = ev.dataTransfer.getData("text");
ev.target.appendChild(document.getElementById(data));
 
function sombraimg(){

  const sombras = [
    './img/sombra1.png',
    './img/sombras2.png',
    './img/sombra3.png',
    './img/sombra4.png',
    './img/sombras5.png',
    './img/sombra6.png',
    './img/sombras7.png',
    './img/sombra8.png'
  ];

  const selectB = document.getElementById('selectB');
  const sombra = document.getElementById('sombra');

  
    const randomIndex = Math.floor(Math.random() * sombras.length);
    const imgl = sombras[randomIndex];
  
    sombra.src = imgl;
  };
