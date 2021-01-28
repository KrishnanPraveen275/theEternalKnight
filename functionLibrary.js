function move(a){
    /*if(a.x <= 634 && a.x >= 0 && a.y <= 613 && a.y >= 0){
        if(keyDown('w')){
            a.y-=5
        }
        if(keyDown('s')){
            a.y+=5
        }
        if(keyDown('a')){
            a.x-=5
        }
        if(keyDown('d')){
            a.x+=5
        }
    }*/
    if(a.x >= 0 && a.y <= 613 && a.y >= 0){
        if(keyDown('a')){
            a.x-=5
        }
    }
    if(a.x <= 634 && a.y <= 613 && a.y >= 0){
        if(keyDown('d')){
            a.x+=5
        }
    }
    if(a.x <= 634 && a.x >= 0 && a.y >= 0){
        if(keyDown('w')){
            a.y-=5
        }
    }
    if(a.x <= 634 && a.x >= 0 && a.y <= 613){
        if(keyDown('s')){
            a.y+=5
        }
    }
}

function aim(a){
    a.shapeColor = "red"
    a.x = mouseX
    a.y = mouseY
}

function shoot(b,o,t){
    if(frameCount%10 === 0){
      b = createSprite(o.x,o.y,10,10);
      b.shapeColor = "red"  
      b.velocityX = ((o.x-t.x)*(-1))/30
      b.velocityY = ((o.y-t.y)*(-1))/30
    }
}

function mirror(a,b){
    if(a.x<b.x) {
        b.mirrorX(-1)
      }
      else {
        b.mirrorX(1)
      }
}

function spawn(){
    var r = Math.round(random(30,70))
    var r1
    if(frameCount % r === 0){
        a = createSprite(0,0,20,30)
        r1 = Math.round(random(1,4))
        if(r1 === 1){
            i = 0
            j = Math.round(random(0,400))
            a.x = i
            a.y = j
            a.velocityX = random(2,6)
            a.velocityY = random(-4,4)
        }
        if(r1 === 2){
            i = displayWidth-900
            j = Math.round(random(0,400))
            a.x = i
            a.y = j
            a.velocityX = random(-2-6)
            a.velocityY = random(-4,4)
        }
        if(r1 === 3){
            i = Math.round(random(0,400))
            j = 0
            a.x = i
            a.y = j
            a.velocityX = random(-4,4)
            a.velocityY = random(2,6)
        }
        if(r1 === 4){
            i = Math.round(random(0,400))
            j = displayHeight-250
            a.x = i
            a.y = j
            a.velocityX = random(-4,4)
            a.velocityY = random(-2,-6)
        }
    } 
}