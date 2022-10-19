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
let boxArray=[];
let noOfMouseovers=0;
let brightValue;

function drawPage (s,i) {
    let pageBox = document.createElement('div');
    let welcomeBox = document.createElement('h1');
    let messageBox = document.createElement('h2');
    welcomeBox.textContent=`Notebook`;
    messageBox.textContent='Feel free to draw in the grid below'
    pageBox.id='pageBox';
    welcomeBox.id='welcomeBox';
    messageBox.id='messageBox';
    mainFlex = document.createElement('div');
    mainFlex.id='mainFlex';
    mainFlex.style.padding="32px";
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
    btnColorMixer.style.backgroundColor="gray"; //this fixes red randomize button / still no hover
    buttonReset.addEventListener('click', ()=> drawInitialGrid());
    /*btnColorMixer.addEventListener('click',()=> {
        normalMode = !normalMode;
        if (!normalMode) {
            pageBox.style.animation= "mymove 0.6s infinite";
            welcomeBox.style.fontSize="40px";
            welcomeBox.innerHTML=`<font color="#FF2626">A</font>
            <font color="#8f34eb">C</font>
            <font color="#28f766">I</font>
            <font color="#FFD523">D&nbsp;&nbsp;</font>
            <font color="#FFD523">M</font>
            <font color="#28f766">O</font>
            <font color="#8f34eb">D</font>
            <font color="#FF2626">E</font>`;
            messageBox.textContent='LET SOME COLORS IN YOUR LIFE'
            
        }else{pageBox.style.animation= "";
            welcomeBox.textContent=`Notebook`;
            messageBox.textContent='Feel free to draw in the grid below'
        };
    });*/
    colorMix();
    drawGrid(s,i);
    //chooseGrid();
    colorInput.value = 'black';
}

function colorMix () {
    colorInput.style.visibility='visible'; // januszerka, zeby paleta kolorow wrocila
    btnColorMixer.addEventListener('click',()=> {
        normalMode = !normalMode;
        if (!normalMode) {//jak zamiast pagebox dodam document.body to nie dziala wylaczenie....
            pageBox.style.animation= "mymove 0.6s infinite";
            welcomeBox.style.fontSize="32px";
            welcomeBox.innerHTML=`<font color="#FF2626">A</font>
            <font color="#8f34eb">C</font>
            <font color="#28f766">I</font>
            <font color="#FFD523">D&nbsp;&nbsp;</font>
            <font color="#FFD523">M</font>
            <font color="#28f766">O</font>
            <font color="#8f34eb">D</font>
            <font color="#FF2626">E</font>`;
            messageBox.textContent='LET SOME COLORS IN YOUR LIFE';
            btnColorMixer.style.backgroundColor="red";
            btnColorMixer.textContent='ESCAPE';
            mainFlex.style.backgroundColor="blue";
            mainFlex.style.padding="10px";
            mainFlex.style.border='22px double red';
            mainWindow.style.border='22px solid #f7b928';
            mainWindow.style.backgroundColor='#f7b928';
            colorInput.style.visibility='hidden'; // hidden bo w colormixie nie dziala paleta kolorów
            

        }else{pageBox.style.animation= "";
            welcomeBox.textContent=`Notebook`;
            messageBox.textContent='Feel free to draw in the grid below';
            btnColorMixer.style.backgroundColor="gray";
            btnColorMixer.textContent='Again?'; //hoover nie dziala!! i po reset zostaje czerwony
            mainFlex.style.backgroundColor="";
            mainFlex.style.border='';
            mainFlex.style.padding="32px";
            mainWindow.style.border='22px solid gray';
            mainWindow.style.backgroundColor='gray';
            colorInput.style.visibility='visible';
        };
    });
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
         colorArray[i]='#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
         boxArray[i]='box'+(i+1);
         div.addEventListener('mouseover',() => {	
            //function colorMix(i) {
            colorInput.addEventListener('change',()=>{
            colorDraw = colorInput.value;
            });
            //btnColorMixer.addEventListener('click', function() {
            if(normalMode) {
                colorDraw = colorInput.value;
                document.getElementById(`box${i+1}`).style.backgroundColor = colorDraw;
            }else {
                colorDraw =  colorArray[i];
                colorInput.addEventListener('change',()=>{                 //not working - after mixer user cannot input color
                    colorDraw = colorInput.value;
                });
                document.getElementById(`box${i+1}`).style.backgroundColor = colorDraw;
                               /* for (let j=0; j<7; j++){
                                    document.getElementById(`box${i+1}`).addEventListener(
                                        "mouseover", (e)=> {
                                    let brightArr = [1.5, 1.2, 0.9, 0.6, 0.4, 0.2, 0.1]
                                    document.getElementById(`box${i+1}`).style.filter =`brightness(${1.5-0.3*e})`;// `brightness(${brightArr[j]})`;
                                    console.log(brightArr[j]);        
                            });
                        }*/
            }
                   // });
           // }
           // document.getElementById(`box${i+1}`).style.backgroundColor = colorDraw;
         });
         mainWindow.appendChild(div);
    }
        /*boxArray.forEach(Document.getElementById(`${boxArray}`),() => {
            document.getElementById(`box${i+1}`).addEventListener(
                "mouseover", (e)=> {
            let brightArr = [1.5, 1.2, 0.9, 0.6, 0.4, 0.2, 0.1]
            document.getElementById(`box${i+1}`).style.filter =`brightness(${1.5-0.3*e})`;// `brightness(${brightArr[j]})`;
            console.log(brightArr[j]);
        });*/
        
        //czy to musi tu byc?? to nizej
    boxArray.forEach(element => {
        let e=0;
        document.getElementById(`${element}`).addEventListener("mouseover", ()=> {
            if (e<8){
                brightValue =  document.getElementById(`${element}`).value=e;
                brightArr = [1.5, 1.2, 0.9, 0.6, 0.4, 0.2, 0.1, 0]
                let brightChoose = brightArr[brightValue];
                e = e+1;
                    //noOfMouseovers += 1;
                //brightValue = brightValue - 0.3;
                document.getElementById(`${element}`).style.filter =`brightness(${brightChoose})`;
                //document.getElementById(`${element}`).style.filter =`blur(3px)`; //blur strasznie wolny w colormix
            } else {};
        });
    });
        
     /*   for (let j=0; j<7; j++){
            let divos =[...document.querySelectorAll(`[id="box"]`)].addEventListener("mouseover", ()=> {
            let brightArr = [1.5, 1.2, 0.9, 0.6, 0.4, 0.2, 0.1]
            divos.style.filter = `brightness(${brightArr[j]})`;
            console.log(brightArr[j]);
    });
}*/
        /*for (let j=0; j<7; j++){
            document.querySelectorAll('div.boxes').addEventListener("mouseover", ()=> {
            let brightArr = [1.5, 1.2, 0.9, 0.6, 0.4, 0.2, 0.1]
            div.style.filter =/*`brightness(${1.5-0.3*e})`; `brightness(${brightArr[j]})`;
            console.log(brightArr[j]); 
    });*/ 
         /*div.addEventListener('mouseover',() => {
            for (let j=0; j<7; j++){
                let brightArr = [1.5, 1.2, 0.9, 0.6, 0.4, 0.2, 0.1]
                document.getElementById(`box${i+1}`).style.filter = `brightness(0.3)`;
                console.log(brightArr[j]);
            };
        });*/

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
    }else if (s>0) {
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
    }else {};
   // chooseGrid();
}

function drawInitialGrid () {
    normalMode = true;
    s=16;
    cleanGrid();
    drawPage(s);
    //dlaczego tak to dziala?? dlaczego ten eventListener musi tu byc??
    /*btnColorMixer.addEventListener('click',()=>{
        normalMode = !normalMode;
    });*/
    colorMix();
    boxArray=[];
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
            normalMode = true;
            boxArray=[];
            cleanGrid();
            drawPage(s,i);
             //dlaczego tak to dziala?? dlaczego ten eventListener musi tu byc??
            /*btnColorMixer.addEventListener('click',()=>{
                normalMode = !normalMode;
            });*/
            colorMix();
        }
        else { 
            alert('Try again. Type an integer from 1 to 100');
            drawInitialGrid();
        }
    });
//function buttonChoose () {
window.onload = drawPage(16);






