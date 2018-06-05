# Angular-Golf-Shop
This is a basic golf shop, developed with Angular 5 CLI &amp; Visual Studio Code

*NOTES:*
- everything is locally stored on an in-memory-database server, such as **users and products**
- the users are locally stored, so each time the server is refreshed, you will have to recreate your account
- at every refresh, you will have to log in (**sorry**)

*possible loader to be used*
# HTML
ul.loader
  -for (var x = 1; x < 5; x++)
    li(class="item-" + x)
# CSS
$background-color: hsl(0, 0, 15)

body
  background: $background-color
 
    
// Loader vars
$loader-time: 1.3s
$item-size: 10px
$item-delay: 0s
    
.loader
  position: absolute
  height: 10px
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
@for $i from 1 through 4
  $item-delay: $item-delay + 0.1
  .item-#{$i}
    float: left
    width: $item-size
    margin: 0 ($item-size /3)
    border-radius: $item-size /2
    animation: anim $loader-time ease-in-out infinite $item-delay
    animation-fill-mode: backwards
    
@keyframes anim
  0%, 15%, 85%, 100%
    height: $item-size
    background: #ffe272
    transform: translateY(0)
  30%, 70%
    height: $item-size *2
  41%, 50%
    height: $item-size
    background: #ffe272
    transform: translateY(-$item-size*3.25)
  
    


