const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 920;


const image1 = new Image();
image1.setAttribute('crossOrigin', '');
image1.src='../shiva.jpg';


image1.addEventListener('load',() => {
    
    ctx.drawImage(image1,0,0);
    
    const scannedImage = ctx.getImageData(0,0,canvas.width,canvas.height);
    const scannedData = scannedImage.data;
    
    let mappedImage = [];
    
    
    for(let y=0;y<canvas.height;y++)
    {
        let row = [];
        for(let x=0;x<canvas.width;x++)
        {
            //console.log(scannedData[(y*4*canvas.width) + (x*4)]);
            const red = scannedData[(y*4*canvas.width) + (x*4)];
            const blue = scannedData[(y*4*canvas.width) + (x*4)+1];
            const green = scannedData[(y*4*canvas.width) + (x*4)+2];
            const cellColor = 'rgb(' + red + ','+blue + ','+green + ')';
            const opacity= scannedData[ (y*4*canvas.width) + (x*4)+3];
        
            const cellOpacity = opacity;
            const cell = [cellColor,opacity];
            row.push(cell);

        }

        mappedImage.push(row);
    }
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
   //console.log("color",mappedImage[0][0][0]);
    for(let y=0;y<canvas.height;y+=3)
    {

        for(let x=0;x<canvas.width;x+=3)
        {

            
            ctx.beginPath();
            
           ctx.fillStyle = mappedImage[y][x][0];
           //ctx.fillStyle ='white';
           //ctx.fillStyle ='rgba(255,255,255,'+mappedImage[y][x][1]+')';
           //ctx.arc(x,y,10,0,Math.PI/4);
           // ctx.strokeRect(this.x,this.y,this.size*0.5,this.size*0.5);
            //ctx.strokeStyle = mappedImage[this.position1][this.position2][1];
            ctx.fillText('ॐ',x,y);
            ctx.fill();
        }

    
    }


    
    

    
})

window.addEventListener('mousemove',(event) => {
    let xx = event.x;
    let yy = event.y; 
    
})