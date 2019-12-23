                                             //NEW JAVASCRIPT CODE

var check=0;
var bw=210,bh=100;                              //bw=width of basket and bh=height of basket
var ew=140,eh=80;                               //ew=width of egg and eh=height of egg
var f1=0,f2=0,f3=0,f4=0,f5=0,f6=0,f7=0,f8=0,f9=0;              //flags 
var ey=550;                                     //initial distance of egg from top of canvas
var ex=655;                                     //initial distance of egg from left of canvas
var x1=620,x2=420,x3=20,g=0;                        //x1=bask1,x2=bask2,x3=bask3 horizontal distances from left side of canvas
var y1=550,y2=330,y3=110;                       //y1=bask1,y2=bask2,y3=bask3 vertical distances from top side of canvas
var gravity=4;                                  //
var gap=220,temp=0,pr=0,count=-1;                                    //gap=vertical distance between two baskets 
window.onload = function(){
 if(g==0)
 document.getElementById("canvas").addEventListener("click", myFunction);  //on clicking on canvas, myFunction will be called  
  
 function myFunction() 
  {
    f3++;
    count++;
    stop=1;
    f4=0,f5=0,f6=0,f8=0,f9=0,temp=0;
    
  }
  
  var canvas = document.getElementById('canvas');
  canvas.width=window.innerWidth;                 //width of canvas
  canvas.height=window.innerHeight;               //height of canvas
  
  draw();                                         //calling the function draw 
}

function draw()
{
    var c = canvas.getContext('2d');

    var egg = new Image();                               //declaring the egg image
    var basket1 = new Image();                           //declaring the first basket
    var basket2 = new Image();                           //declaring the second basket
    var basket3 = new Image();                           //declaring the third basket
    var bg = new Image();                                //declaring the background of canvas
    var gameover= new Image();
    
    bg.src = "../images/bg9.jpg";                         //giving the source of background image
    egg.src = "../images/egg(2).png";                    //giving the source of image of egg
    basket1.src = "../images/basketgame.png";            //giving the source of image of first basket
    basket2.src = "../images/basketgame.png";            //giving the source of image of second basket
    basket3.src = "../images/basketgame.png";            //giving the source of image of third basket
    gameover.src="../images/gameover.jpg";
    if(g==0)
    {
    c.drawImage(bg,0,0,canvas.width,canvas.height);      //drawing the background image at x=0,y=0,width,height
    c.drawImage(egg,ex,ey,ew,eh);                       //drawing the image of egg at ex,ey,width=140,height=80
    c.drawImage(basket1,x1,y1,bw,bh);                    //drawing the image of basket1 at x,y=520 and bw=210,bh=130
    c.drawImage(basket2,x2,y2,bw,bh);                    //drawing the image of basket2 at x1,y=300 and bw=210,bh=130
    c.drawImage(basket3,x3,y3,bw,bh);                    //drawing the image of basket3 at x2,y=80 and bw=210,bh=130
    }
    if(g==1)
    {
      c.drawImage(gameover,0,0,canvas.width,canvas.height);
      
      alert("GAME OVER\n"+"Your score is "+count+"\nRefresh this page twice to restart the Game");
    }
    if(ey==350)
    f8=1;
    if(ey>680)
    g=1;
    //setting the motion of basket1 such that the basket does not move out of the canvas
    if(pr==1)
    {
        if(x1+210<canvas.width && f7==0)                  
          x1=x1+5+0.15*f3;                  //varying the speed of basket in x-direction

      else
      {
         x1=x1-5-0.2*f3;
         f7=1;
         if(x1<=0)
         f7=0;
      }
    }
    
    //setting the motion of basket2 such that the basket does not move out of the canvas
    if(x2+210<canvas.width && f1==0)                  
     x2=x2+8+0.1*f3;                       //varying the speed of basket in x-direction

     else
    {
        x2=x2-8-0.1*f3;
        f1=1;
        if(x2<=0)
        f1=0;
    }

    // setting the motion of basket3 such that the basket does not move out of the canvas
       if(x3+210<canvas.width && f2==0)
       {
          x3=x3+12+0.2*f3;                //varying the speed of basket in x-direction
       }
       else
       {
           x3=x3-12-0.18*f3;
           f2=1;
           if(x3<=0)
           f2=0;
       }


    //setting the first jump of egg
    if((f3-1)%3==0&&g==0)                                                //f3=1,4,7   
    {
        if(f4==0)
        {
            if(ey<=260)                                   // ye second basket ki round about position hai 
            temp=1;                                       // agar egg is position se niche hai to uski height badahte jao          

            if(temp==1 && f9==0)
              ey+=gravity;                                // increasing the position of the egg from the top of canvas(i.e falling of egg)
            
            else if(ey>260&&temp==0)                      // decreasing the position of the egg from the top of canvas(i.e. jumping of egg) 
               ey-=gravity;         
               
        }    
        
        if((f8==1)||f3%3==1)
        {
            if(ex>=x2-10 && ex<=x2+180 && ey<=y2 )     //agar egg basket ki is range me hai aur y coordinates bhi match kr rha hai
            {

              f9=1;
              ex=x2+35;                               // place the egg at the center of basket
              ey=y2;                                  // egg ka y coordinate equal to the basket's y coordinate
              f4=1;
              f5=0;
            
              // making the transitions happen (eggs ki positions me adla badli)
              if(y2<550)
              {   
                 y2+=4;                               
                 y3+=4;                             
                 y1+=2;
                
                 if(y1>560)
                {
                  y1=0;
                  pr=1;
                }  
              
              }
           }
       
        }  
    }

   //setting the second jump of egg

    else if((f3-1)%3==1&&g==0)                                           //f3=2,5,8
    {
        if(f4==0)
        {
            if(ey<=260)                                                  // ye second basket ki round about position hai
            temp=1;                                                      // agar egg is position se niche hai to uski height badahte jao

            // if(temp==1&&ey!=330)
            //    ey+=gravity;    
            if(temp==1 && f9==0)
              ey+=gravity;                                            // increasing the position of the egg from the top of canvas(i.e falling of egg)

            
            else if(ey>260&&temp==0)
              ey-=gravity;                                           // decreasing the position of the egg from the top of canvas(i.e. jumping of egg) 
 
        }    
        
        if(f8==1||f3%3==2)
        {
            if((ex>=x3-10 && ex<=x3+180) && (ey<=y3))              //agar egg basket ki is range me hai aur y coordinates bhi match kr rha hai
            {
             
            f9=1;
            ex=x3+35;                                             // place the egg at the center of basket
            ey=y3;                                                // egg ka y coordinate equal to the basket's y coordinate
            f4=1;
            f5=0;
          
          // making the transitions happen (eggs ki positions me adla badli)
          if(y3<550)
          {
              
              y3+=4;
              y1+=4;
              y2+=2;
              if(y2>560)
              {
                y2=0;
                //pr=1;
              }  
          }
        }
        }  
    }

    //setting the third jump of egg
    else if((f3-1)%3==2&&g==0)                                             //f3=3,6,9
    {
        if(f4==0)
        {
            if(ey<=260)
            temp=1;

            // if(temp==1&&ey!=330)
            //    ey+=gravity;    
            if(temp==1 && f9==0)
              ey+=gravity;   
            
            else if(ey>260&&temp==0)
              ey-=gravity;
 
        }    
        
        if(f8==1||f3%3==0)
        {
            if( (ex>=x1-10 && ex<=x1+180)&&ey<=y1)
            {
              console.log(f3);
            f9=1;
            ex=x1+35;
            ey=y1;
            f4=1;
            f5=0;
           
          if(y1<550)
          {     
              y1+=4;
              y2+=4;
              y3+=2;
              if(y3>560)
              {
                y3=0;
                //pr=1;
              }  
          }
        }
        }  
    }
    
       
    requestAnimationFrame(draw);                       //repeatedly calling the function draw
}
