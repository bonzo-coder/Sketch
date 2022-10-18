let mainFlex;
let mainWindow;
let button= document.createElement('button');
let colorInput=document.createElement('input');
let btnColorMixer=document.createElement('button');
let divUnderGrid = document.createElement('div');
let buttonReset = document.createElement('button');
let normalMode = true;
let colorDraw;
let colorArray;

function drawPage (s,i) {
    let pageBox = document.createElement('div');
    let welcomeBox = document.createElement('h1');
    let messageBox = document.createElement('h2');
    welcomeBox.textContent='NoteBook';
    messageBox.textContent='Feel free to draw in the grid below'
    pageBox.id='pageBox';
    welcomeBox.id='welcomeBox';
    messageBox.id='messageBox';
    mainFlex = document.createElement('div');
    mainFlex.id='mainFlex';
    divUnderGrid.id='divUnderGrid';
    button.type='button';
    button.id='buttonChoose';
    button.textContent='Change grid size';
    buttonReset.type='button';
    buttonReset.id='buttonReset';
    buttonReset.textContent='Reset grid';
    colorInput.type='color';
    colorInput.id='colorInput';
    btnColorMixer.type='button';
    btnColorMixer.id='colorMixer';
    btnColorMixer.textContent='Randomize'
    document.body.appendChild(pageBox);
    pageBox.appendChild(welcomeBox);
    pageBox.appendChild(messageBox);
    pageBox.appendChild(mainFlex);
    buttonReset.addEventListener('click', ()=> drawInitialGrid());
    drawGrid(s,i);
    //chooseGrid();
    btnColorMixer.addEventListener('click',()=>{
        normalMode = !normalMode;
    });
    
    colorDraw = 'black';
}

/*function colorMix(i) {
    console.log(normalMode);
    colorInput.addEventListener('change',()=>{
    colorDraw = colorInput.value;
    });
    btnColorMixer.addEventListener('click', function() {
        if(normalMode) {
            colorDraw = colorInput.value;
        }else if (!normalMode){
            colorDraw =  colorArray[i-1];
            console.log(colorArray[i]);
        }
        else {console.log(normalMode); }
        });
}*/

function drawGrid (s,i) {
    console.log(s);
    mainWindow = document.createElement('div');
    mainWindow.id='mainWindow';
    mainFlex.appendChild(mainWindow);
    mainFlex.appendChild(divUnderGrid);
    divUnderGrid.appendChild(button);
    divUnderGrid.appendChild(buttonReset);
    divUnderGrid.appendChild(btnColorMixer);
    divUnderGrid.appendChild(colorInput);
    let div = document.createElement('div');
    colorArray = new Array(s*s);
    for (let i=0; i<s*s; i++) {
         div = document.createElement('div');
         div.id=`box${i+1}`;
         div.className='boxes';
         div.innerHTML = '';
         div.style.width=`${(400-2*s)/s}px`;
         div.style.height=`${(400-2*s)/s}px`;
         colorArray[i]='#'+Math.floor(Math.random()*16777215).toString(16);
         div.addEventListener('mouseover',() => 
         {	
            //function colorMix(i) {
                console.log(normalMode);
                colorInput.addEventListener('change',()=>{
                colorDraw = colorInput.value;
                });
                //btnColorMixer.addEventListener('click', function() {
                    if(normalMode) {
                        colorDraw = colorInput.value;
                        document.getElementById(`box${i+1}`).style.backgroundColor = colorDraw;
                    }else if (!normalMode){
                        colorDraw =  colorArray[i-1];
                        console.log(colorArray[i]);
                        document.getElementById(`box${i+1}`).style.backgroundColor = colorDraw;
                    }
                    else {console.log(normalMode); }
                  //  });
           // }
           // document.getElementById(`box${i+1}`).style.backgroundColor = colorDraw;
         });
         mainWindow.appendChild(div);
         };
         
         if (s<5) {
            let mainRadius = document.getElementById('mainWindow');
            mainRadius.style.borderRadius = `30px`;

            let idTopLeft = `box1`;
            let topLeft = document.getElementById(idTopLeft);
            topLeft.style.borderTopLeftRadius=`30px`;

            let idTopRight = `box${s}`;
            let topRight = document.getElementById(idTopRight);
            topRight.style.borderTopRightRadius=`30px`;

            let idBottomLeft = `box${s*(s-1)+1}`;
            let bottomLeft = document.getElementById(idBottomLeft);
            bottomLeft.style.borderBottomLeftRadius=`30px`;

            let idBottomRight = `box${s*s}`;
            let bottomRight = document.getElementById(idBottomRight);
            bottomRight.style.borderBottomRightRadius=`30px`;
        }
         else if (s>0) {
            let mainRadius = document.getElementById('mainWindow');
            mainRadius.style.borderRadius = `${(400-2*s)/s}px`;

            let idTopLeft = `box1`;
            let topLeft = document.getElementById(idTopLeft);
            topLeft.style.borderTopLeftRadius=`${(400-2*s)/s}px`;

            let idTopRight = `box${s}`;
            let topRight = document.getElementById(idTopRight);
            topRight.style.borderTopRightRadius=`${(400-2*s)/s}px`;

            let idBottomLeft = `box${s*(s-1)+1}`;
            let bottomLeft = document.getElementById(idBottomLeft);
            bottomLeft.style.borderBottomLeftRadius=`${(400-2*s)/s}px`;

            let idBottomRight = `box${s*s}`;
            let bottomRight = document.getElementById(idBottomRight);
            bottomRight.style.borderBottomRightRadius=`${(400-2*s)/s}px`;
        }
        else {
           
        }
         console.log(colorArray);
        
   // chooseGrid();
}

function drawInitialGrid () {
    cleanGrid();
    drawPage(16);
}

function cleanGrid () {
    let main = document.getElementById('pageBox');
    main.remove('pageBox');
}

//function chooseGrid () {
    button.addEventListener('click', function() {
        s = parseInt(prompt("Grid size: Type a number from 1 to 100"));
        if (s>0 && s<101) {
            i=0;
            cleanGrid();
            drawPage(s,i);
        }
        else { 
            alert('Try again. Type an integer from 1 to 100');
            drawInitialGrid();
        }
    });
//}

//function buttonChoose () {
    
//}

window.onload = drawPage(16);






