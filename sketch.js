function setup(){
    createCanvas(600, 600);
    background(255, 165, 60);
}

    let ballX = 300;
    let ballY = 300;
    let ballXMove = 2;
    let ballYMove = 1;
    let circleDia = 35;
function draw(){
    background(255, 165, 60);
    
    if(ballX >= 600-circleDia/2){
        ballXMove *= -1;
        ballXMove-=random(0,4);
    }
    else if(ballX <= circleDia/2){
        ballXMove *= -1;
        ballXMove+=random(0,4);
    }
    else if(ballY >= 600-circleDia/2){
        ballYMove *= -1;
        ballYMove-=random(0,4);
    }
    else if(ballY <= circleDia/2){
        ballYMove *= -1; 
        ballYMove+=random(0,4);
    
    }
    fill(0, 255, 0);
    noStroke();
    circle(ballX += ballXMove, ballY += ballYMove, circleDia);
}