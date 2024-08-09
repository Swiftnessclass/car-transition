let container=document.getElementById("container");
let model1=document.getElementById("Lamborghini Sian");
let model2=document.getElementById("MaseratiMC");
let model3=document.getElementById("PininfarinaBattista");
let model4=document.getElementById("rimacnevera");
let speed=document.getElementById("speed");
let turbo=document.getElementById("turbo");
let mph=document.getElementById("mph");
let power=document.getElementById("power");
let logo=document.getElementById("logo");
let us=document.getElementById("us");

let model=document.getElementById("model");


logo.onclick=()=>{
    container.style.backgroundImage="url(krish.jpg)";
    container.stytle.backgroundColor=rgba(255, 197, 197, 1);
}

us.onclick=()=>{
    container.innerHTML=`<p>About Toyota Motor Corporation</p>
    <p>Toyota Motor Corporation is a Japanese multinational automotive manufacturer founded in 1937 by Kiichiro Toyoda. Headquartered in Toyota City, Japan, the company is one of the largest and most successful automobile manufacturers in the world.To create an automobile that is safe, environmentally friendly, and fun to drive, and to contribute to the development of a more prosperous society through our business activities.</p>
    <button id="back-button">back</button>`;   
  
    const backbutton=document.getElementById("back-button");

    backbutton.onclick=()=>{
      container.innerHTML="thNKYOU";
    };
  };


model1.onclick=()=>{
    
    container.style.backgroundImage="url(LamborghiniSian.webp)";
    container.style.backgroundColor = "rgba(0,0,0,0.5)";
   
    //name
    model.innerHTML="<p>Lamborghini Sian</p>";
    speed.innerHTML="<p>220</p> <p>top speed</p>"
    speed.style.fontSize = "30px";
    speed.style.fontWeight="200px";
  //turbo
    turbo.innerHTML="<p>56.5 litre</p><p>SV</p>";
    turbo.style.fontSize = "30px";
    turbo.style.fontWeight="200px";
  //mph
    mph.innerHTML="<p>34bhp</p><P>electrical oomph</p> ";
    mph.style.fontSize="30px";
    mph.style.fontWeight="200px";
  //power
    power.innerHTML="<p>62mph</p><p>less thn 2.8sec</P>";
    power.style.fontSize="30px";
    power.style.fontWeight="200px";



   
    
}

model2.onclick=()=>{
    
    container.style.backgroundImage="url(MaseratiMC.webp)";
    container.style.backgroundColor = "rgba(0,0,0,0.5)";
   
    //name
    model.innerHTML="MaseratiMC";
    //speed
    speed.innerHTML="<p>325</p><p>top speed</p>";
    speed.style.fontSize = "30px";
    speed.style.fontWeight="200px";
    
    //turbo
    turbo.innerHTML="<p>621bph & 538lb</p><p>torque</p>";
    turbo.style.fontSize = "30px";
    turbo.style.fontWeight="200px";
    //mph
    mph.innerHTML="<p>207bhp</p><P>per litre</p> ";
    mph.style.fontSize="30px";
    mph.style.fontWeight="200px";
    //power
    power.innerHTML="<p>205</p><p>power</P>";
    power.style.fontSize="30px";
    power.style.fontWeight="200px";


   
     
   
}

model3.onclick=()=>{
    
    container.style.backgroundImage="url(PininfarinaBattista.webp)";
    container.style.backgroundColor = "rgba(0,0,0,0.5)";
    
    //name
    model.innerHTML="PininfarinaBattista";
    //speed
    speed.innerHTML="<p>358</p><p>top speed</p>";
    speed.style.fontSize = "30px";
    speed.style.fontWeight="200px";
    //turbo
    turbo.innerHTML="<p>0-186</p><p>mph</p>";
     turbo.style.fontSize = "30px";
    turbo.style.fontWeight="200px";
    //mph 
    mph.innerHTML="<p>200bhp</p><P>per litre</p> ";
     mph.style.fontSize="30px";
     mph.style.fontWeight="200px";
    //power
    power.innerHTML="<p>200</p><p>power</P>";
    power.style.fontSize="30px";
    power.style.fontWeight="200px";

    

   
     
    
}

model4.onclick=()=>{
    
    container.style.backgroundImage="url(rimacnevera.webp)";
    container.style.backgroundColor = "rgba(0,0,0,0.5)";
   
    //name
    model.innerHTML="rimacnevera";
    //speed
    speed.innerHTML="<p>258</p><p>top speed</p>";
    speed.style.fontSize = "30px";
    speed.style.fontWeight="200px";
    //turbo
    turbo.innerHTML="<p>1914bhp</p><p>1740lb</p>";
  turbo.style.fontSize = "30px";
  turbo.style.fontWeight="200px";
  //mph
  mph.innerHTML="<p>120kwh</p><P>battery</p> ";
  mph.style.fontSize="30px";
  mph.style.fontWeight="200px";
  //power
  power.innerHTML="<p>100mph</p><p>4.3sec</P>";
  power.style.fontSize="30px";
  power.style.fontWeight="200px";

     
    
}

