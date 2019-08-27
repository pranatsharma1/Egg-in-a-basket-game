// window.onload = function()
// {
//     var canvas = document.getElementById('canvas');
//     canvas.width = window.innerWidth * 0.4 ; 
//     canvas.height = window.innerHeight ;  
//     var c = canvas.getContext('2d');
        
//         var f3=0;
//         var gap=220;
//         var image = new Image();
//         var basket = new Image();
//         var egg = new Image();
        
//         var ex=258; 
//         var ey=520,x1=120,x2=20,flag=0,flag1=0;
//         var gravity=2; 
//         image.src="../images/bg.jpg";
//         basket.src="../images/basketgame.png";
//         egg.src="../images/egg(2).png";
       
//         document.getElementById("canvas").onclick=function() {myfunction()};
//         function myfunction(){
//             f3=1;
//         }
//         // document.addEventListener("keydown",moveUp);
//         // function moveUp()
//         // {
            
//         //     if(ey>320)
//         //     ey-=210;
//         // }
        
    
//     image.onload = function()
//      {
//          function draw(){
//             c.drawImage(image,0,0,window.innerWidth,window.innerHeight );
//             c.drawImage(egg,ex,ey,75,75);
//             c.drawImage(basket,220,520,150,150);
//             c.drawImage(basket,x1,300,150,150);
//             c.drawImage(basket,x2,80,150,150);

            

//             if(x1+150<canvas.width&&flag==0)
//             x1=x1+5;
//             else
//             {
//                 x1=x1-5;
//                 flag=1;
//                 if(x1==0)
//                 flag=0;
//             }
//             if(x2+150<canvas.width&&flag1==0)
//             x2=x2+5;
//             else{
//                 x2=x2-5;
//                 flag1=1;
//                 if(x2==0)
//                 flag1=0;
//             }

//             if(f3==1)
//             {
//                 if(ey>2*(gap+80))
//                 ey-=gravity;
//             }
//             requestAnimationFrame(draw);
//          } 
//          draw();
//      };
     
    

// }

// var ey=520;
// var ex=258;
// window.onload = function()
// {
//  var start = document.getElementById('canvas');
//  var canvas = document.getElementById('canvas');
//  canvas.width=window.innerWidth;
//  canvas.height=window.innerHeight;

//    var gap=300;
//    var image = new Image();
//    var basket = new Image();
//    var egg = new Image();

//    var ex=258; 
//    var ey=520,x1=120,x2=20,flag=0,flag1=0;
//    var gravity=2;

   

//    var bg = new Image();
//    var egg = new Image();
//    var basket = new Image();

//    bg.src = "../images/bg.jpg";
//    egg.src = "../images/egg(2).png";
//    basket.src = "../images/basketgame.png";

// draw();
// }
          
    
// function draw(){
   
//     var c = canvas.getContext('2d');
//       c.drawImage(bg,0,0,window.innerWidth,window.innerHeight );
//       c.drawImage(egg,ex,ey,75,75);
//       c.drawImage(basket,220,520,150,150);
//       c.drawImage(basket,x1,300,150,150);
//       c.drawImage(basket,x2,80,150,150);
    
//     if(x1+150<canvas.width && flag==0){
//      x1=x1+5;
//     } else
//     {
//         x1=x1-5;
//         flag=1;
//         if(x1==0)
//         flag=0;
//     }
        
//     if(x2+150<canvas.width && flag2==0){
//         x2=x2+5;
//        }
//     else
//        {
//         x2=x2-5;
//            flag2=1;
//            if(x2==0)
//            flag2=0;
//        }
//     requestAnimationFrame(draw);
//     }

// window.addEventListener("keydown",function(){
//     var i;
//     for(i=0;i<30;i++)
//     {
       
//     ey=ey-i;
 
//     }

// });

// //setting the motion of basket1 in second jump
    // if(pr==1&&(f3-1)%3==1)
    // {
    //     if(x2+210<canvas.width && f7==0)                  
    //       x2=x2+5;

    //   else
    //   {
    //      x2=x2-5;
    //      f7=1;
    //      if(x2==0)
    //      f7=0;
    //   }
    // }
    // //setting the motion of basket1 in third jump
    // if(pr==1&&(f3-1)%3==2)
    // {
    //     if(x3+210<canvas.width && f7==0)                  
    //       x3=x3+5;

    //   else
    //   {
    //      x3=x3-5;
    //      f7=1;
    //      if(x3==0)
    //      f7=0;
    //   }
    // }
    




                                             //NEW JAVASCRIPT CODE



var check=0;
var bw=210,bh=100;                              //bw=width of basket and bh=height of basket
var ew=140,eh=80;                               //ew=width of egg and eh=height of egg
var f1=0,f2=0,f3=0,f4=0,f5=0,f6=0,f7=0,f8=0;              //flags 
var ey=550;                                     //initial distance of egg from top of canvas
var ex=655;                                     //initial distance of egg from left of canvas
var x1=620,x2=420,x3=20;                        //x1=bask1,x2=bask2,x3=bask3 horizontal distances from left side of canvas
var y1=550,y2=330,y3=110;                       //y1=bask1,y2=bask2,y3=bask3 vertical distances from top side of canvas
var gravity=4;                                  //
var gap=220,temp=0,pr=0;                                    //gap=vertical distance between two baskets 

window.onload = function(){
 //var start = document.getElementById('canvas');
 
 document.getElementById("canvas").onclick = function() {myFunction()};  //on clicking on canvas, myFunction will be called  
  function myFunction() 
  {
    f3++;
    f4=0,f5=0,f6=0,f8=0,temp=0;
    
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

    bg.src = "../images/bg.jpg";                         //giving the source of background image
    egg.src = "../images/egg(2).png";                    //giving the source of image of egg
    basket1.src = "../images/basketgame.png";            //giving the source of image of first basket
    basket2.src = "../images/basketgame.png";            //giving the source of image of second basket
    basket3.src = "../images/basketgame.png";            //giving the source of image of third basket
    
    c.drawImage(bg,0,0,canvas.width,canvas.height);      //drawing the background image at x=0,y=0,width,height
    c.drawImage(egg,ex,ey,ew,eh);                       //drawing the image of egg at ex,ey,width=140,height=80
    c.drawImage(basket1,x1,y1,bw,bh);                    //drawing the image of basket1 at x,y=520 and bw=210,bh=130
    c.drawImage(basket2,x2,y2,bw,bh);                    //drawing the image of basket2 at x1,y=300 and bw=210,bh=130
    c.drawImage(basket3,x3,y3,bw,bh);                    //drawing the image of basket3 at x2,y=80 and bw=210,bh=130

    if(ey==330)
    f8=1;
    //setting the motion of basket1
    if(pr==1)
    {
        if(x1+210<canvas.width && f7==0)                  
          x1=x1+5;

      else
      {
         x1=x1-5;
         f7=1;
         if(x1==0)
         f7=0;
      }
    }
    
    //setting the motion of basket2
    if(x2+210<canvas.width && f1==0)                  
     x2=x2+5;

     else
    {
        x2=x2-5;
        f1=1;
        if(x2==0)
        f1=0;
    }

    // setting the motion of basket3
       if(x3+210<canvas.width && f2==0)
       {
          x3=x3+5;
       }
       else
       {
           x3=x3-5;
           f2=1;
           if(x3==0)
           f2=0;
       }


    //setting the first jump of egg
    if((f3-1)%3==0)                                                  
    {
        if(f4==0)
        {
            if(ey<=280)
            temp=1;

            if(temp==1 && !(ex>=x2-10 && ex<=x2+180))
               ey+=gravity;    
            
            else if(ey>280&&temp==0)
               ey-=gravity;
               
        }    
        
        if(f8==1)
        {
            if(ex>=x2-10 && ex<=x2+180){
        
            ex=x2+35;
            ey=y2;
            f4=1;
            f5=0;

            // if(pr==0)
            // {
            //   //ey=330;
            // //   ex=x2+35;
            // //   f4=1;
            // //   f5=0;
            // }
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

    else if((f3-1)%3==1)
    {
        if(f4==0)
        {
            if(ey<=280)
            temp=1;

            if(temp==1&&ey!=330)
               ey+=gravity;    
            
            else if(ey>280&&temp==0)
               ey-=gravity;
 
        }    
        
        if(f8==1 && (ex>=x3-10 && ex<=x3+180))
        {
            ex=x3+35;
            ey=y3;
            f4=1;
            f5=0;

            if(pr==0)
            {
              //ey=330;
            //   ex=x2+35;
            //   f4=1;
            //   f5=0;
            }
          if(y3<550)
          {
              
              y3+=4;
              y1+=4;
              y2+=2;
              if(y2>560)
              {
                y2=0;
                pr=1;
              }  
          }
        }  
    }

    //setting the third jump of egg
    else if((f3-1)%3==2)
    {
        if(f4==0)
        {
            if(ey<=280)
            temp=1;

            if(temp==1&&ey!=330)
               ey+=gravity;    
            
            else if(ey>280&&temp==0)
               ey-=gravity;
 
        }    
        
        if(f8==1 && (ex>=x1-10 && ex<=x1+180))
        {
            ex=x1+35;
            ey=y1;
            f4=1;
            f5=0;

            if(pr==0)
            {
              //ey=330;
            //   ex=x2+35;
            //   f4=1;
            //   f5=0;
            }
          if(y1<550)
          {     
              y1+=4;
              y2+=4;
              y3+=2;
              if(y3>560)
              {
                y3=0;
                pr=1;
              }  
          }
        }  
    }
    
    // else if(f5==1)
    // {
    //     if(f6==0)
    //        ey-=gravity;

    //     if(ey==(80) && (ex>=x3-30 && ex<=x3+130))
    //     {
    //        ey=80;
    //        ex=x3+35;
    //        f6=1;
    //        f4=1;
    //     }
    // }
       
    requestAnimationFrame(draw);                       //repeatedly calling the function draw
}