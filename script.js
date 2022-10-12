let i=0;


function drawGrid () {
    let mainFlex = document.createElement('div');
    let mainWindow = document.createElement('div');
    mainFlex.id='mainFlex';
    mainWindow.id='mainWindow';
    document.body.appendChild(mainFlex);
    mainFlex.appendChild(mainWindow);
    
    for (i; i<256; i++) {
   let div = document.createElement('div');
    div.id=`box${i+1}`;
    div.className='boxes';
    div.innerHTML = '<div></div>';
    mainWindow.appendChild(div);
    }
    
}

drawGrid();
