// create a bulb effect after every three seconds
// J S C O D E
setInterval(async function(){
    document.querySelector("#yoyo").classList.toggle("yoyo")
    document.querySelector("#yoyo2").classList.toggle("yoyo2")
    document.querySelector("#yoyo3").classList.toggle("yoyo3")
},300)

----------------------------------------------------
  // C S S C O D E
.yoyo{
    background-color: rgb(0, 255, 30);
}

.yoyo2{
    background-color: rgb(255, 115, 0);
}

.yoyo3{
    background-color: rgb(255, 0, 225);
}

.bulb{
    height: 300px;
    width: 240px;
}

.bulb2{
    height: 300px;
    width: 240px;
}

.bulb3{
    height: 300px;
    width: 240px;
}


----------------------------------------------------
  //   H T M L C O D E
<body>
  <div id="yoyo" class="bulb">
    <b>Hey this is bulb</b>
  </div>

  <div id="yoyo2" class="bulb2">

  </div>
  <div id="yoyo3" class="bulb3">
    
  </div>
  <script src="demo.js"></script>

</body>
