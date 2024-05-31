//demo.js
let id1=document.getElementById("id1")
let id2=document.getElementById("id2")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(id2.closest("#id2"))
console.log(id1.contains(id2))
console.log(id2.contains(id2))
console.log(id2.contains(id1))


//html code
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="box" id="id1">This is an element 1 <span id="sp1">Span1 </span> </div>
  <div class="box" id="id2">This is an element 2 </div>

  <script src="demo.js"></script>

  <!--
  This script places a badge on your repl's full-browser view back to your repl's cover
  page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
  teal, blue, blurple, magenta, pink!
  -->
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script>
</body>

</html>
