(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{17:function(e,t,s){},23:function(e,t,s){"use strict";s.r(t);var a=s(2),i=s.n(a),n=s(9),o=s.n(n),r=(s(17),s(6)),c=s(3),d=s(7),l=s(1),h=s(12),u=s(11),b=(s(4),s(5),s(0));var m=function(){return Object(b.jsx)("div",{className:"flex",children:Object(b.jsx)("div",{className:"title",children:"SNAKE"})})},v=function(e){return Object(b.jsxs)("div",{className:"flex flex-col",children:[Object(b.jsx)("div",{className:"score",children:e.currentScore}),Object(b.jsxs)("div",{className:"best-score",children:[Object(b.jsxs)("span",{className:"subTitle",children:["best:","\xa0"]}),e.bestScore]})]})},j=function(e){var t;switch(e.cellType){case"none":t=Object(b.jsx)("div",{});break;case"head":t=Object(b.jsx)("div",{className:"snake-head"});break;case"body":t=Object(b.jsx)("div",{className:"snake-body"});break;case"food":t=Object(b.jsx)("div",{className:"snake-food "+e.foodClass});break;default:t=Object(b.jsx)("div",{})}return Object(b.jsx)("div",{className:"board-cell flex-center",children:t})},f=function(e){for(var t=[],s=e.boardWidth,a=e.boardHeight,i=e.snake,n=e.foodCoordinate,o=0;o<a;o++){for(var r=[],c=0;c<s;c++)i.isHead([o,c])?r.push(Object(b.jsx)(j,{cellType:"head"})):i.isOn([o,c])?r.push(Object(b.jsx)(j,{cellType:"body"})):n[0]===o&&n[1]===c?r.push(Object(b.jsx)(j,{foodClass:e.foodClass,cellType:"food"})):r.push(Object(b.jsx)(j,{cellType:"none"}));t.push(r)}return Object(b.jsx)("div",{className:"flex",children:Object(b.jsx)("div",{className:"game-board",children:t})})},O=function(){function e(){Object(c.a)(this,e),this.head=null,this.tail=!0,this.size=0}return Object(d.a)(e,[{key:"isHead",value:function(e){return this.head.coordinates[0]===e[0]&&this.head.coordinates[1]===e[1]}},{key:"isOn",value:function(e,t){if(null==this.head)return!1;for(var s=t?this.head.next:this.head;s;){if(s.coordinates[0]===e[0]&&s.coordinates[1]===e[1])return!0;s=s.next}return!1}},{key:"eat",value:function(){for(var e=this.head;e.next;)e=e.next;var t=e.direction,s="R";switch(t){case"T":s=[e.coordinates[0]+1,e.coordinates[1]];break;case"R":s=[e.coordinates[0],e.coordinates[1]-1];break;case"B":s=[e.coordinates[0]-1,e.coordinates[1]];break;case"L":s=[e.coordinates[0],e.coordinates[1]+1]}this.add(new g(s,t))}},{key:"add",value:function(e){var t;if(e.tail=!0,null==this.head)this.head=e;else{for(t=this.head;t.next;)t=t.next;t.tail=!1,t.next=e}this.size++}},{key:"clear",value:function(e){this.head=null,this.size=0}}]),e}(),g=function e(t,s){Object(c.a)(this,e),this.coordinates=t,this.direction=s,this.next=null},k=function e(t,s){Object(c.a)(this,e),this.coordinates=t,this.nextDirection=s},x=s(10),p=s.n(x),y=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(c.a)(this,s),(e=t.call(this)).foodClasses=["blueberry","cherry","grapes","raspberry","strawberry"],e.turningPoints=[],e.boardWidth=20,e.boardHeight=15,e.snakeDelay=100,e.allowSwipe=!0,e.eatAudio=new Audio("https://drive.google.com/uc?export=download&id=1NdXfpUa7qaGQwC1UjO7gshgBb5_78oZq"),e.gameOverAudio=new Audio("https://drive.google.com/uc?export=download&id=1eRdNu3Q3XZ6VGaveLiPHMjpSQxp1i_vu");var a=new O;return a.add(new g([1,3],"R")),a.add(new g([1,2],"R")),a.add(new g([1,1],"R")),e.state={currentScore:0,bestScore:0,gameOverMsg:"",snake:a,foodCoordinate:[8,18],foodClass:e.foodClasses[e.getRandomInt(0,e.foodClasses.length-1)],gameOverDisplay:!1,gameMenuDisplay:!0},e.updateSnakeState=e.updateSnakeState.bind(Object(l.a)(e)),e.onSwipeMove=e.onSwipeMove.bind(Object(l.a)(e)),e.keyListner=e.keyListner.bind(Object(l.a)(e)),e.startGame=e.startGame.bind(Object(l.a)(e)),e.gameOver=e.gameOver.bind(Object(l.a)(e)),e.endGame=e.endGame.bind(Object(l.a)(e)),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.eatAudio.load(),this.gameOverAudio.load();var e=localStorage.getItem("bestScore");e=null===e?0:parseInt(e),this.setState({bestScore:null===e?0:e}),document.addEventListener("keydown",this.keyListner,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyListner,!1)}},{key:"keyListner",value:function(e){var t=e.keyCode,s=this.state.snake,a=new k(null,null);switch(t){case 38:if(console.log("Top"),"T"===s.head.direction||"B"===s.head.direction)return;a.nextDirection="T",a.coordinates=Object(r.a)(s.head.coordinates),this.turningPoints.push(a),this.setState({snake:s});break;case 39:if(console.log("Right"),"R"===s.head.direction||"L"===s.head.direction)return;a.nextDirection="R",a.coordinates=Object(r.a)(s.head.coordinates),this.turningPoints.push(a),this.setState({snake:s});break;case 40:if(console.log("Bottom"),"B"===s.head.direction||"T"===s.head.direction)return;a.nextDirection="B",a.coordinates=Object(r.a)(s.head.coordinates),this.turningPoints.push(a),this.setState({snake:s});break;case 37:if(console.log("Left"),"L"===s.head.direction||"R"===s.head.direction)return;a.nextDirection="L",a.coordinates=Object(r.a)(s.head.coordinates),this.turningPoints.push(a),this.setState({snake:s})}}},{key:"startGame",value:function(e){this.snakeDelay=e,this.setState({gameMenuDisplay:!1,gameOverDisplay:!1}),this.intervalId=window.setInterval(this.updateSnakeState,this.snakeDelay)}},{key:"endGame",value:function(){var e=new O;e.add(new g([1,3],"R")),e.add(new g([1,2],"R")),e.add(new g([1,1],"R")),this.setState({currentScore:0,snake:e,foodCoordinate:[8,18],foodClass:this.foodClasses[this.getRandomInt(0,this.foodClasses.length-1)],gameOverDisplay:!1,gameMenuDisplay:!0})}},{key:"updateSnakeState",value:function(){var e=this.state.snake,t=e.head;if(e.isOn(t.coordinates,!0))this.gameOver();else{switch(t.direction){case"T":if(t.coordinates[0]<0)return void this.gameOver();break;case"R":if(t.coordinates[1]>this.boardWidth-1)return void this.gameOver();break;case"B":if(t.coordinates[0]>this.boardHeight-1)return void this.gameOver();break;case"L":if(t.coordinates[1]<0)return void this.gameOver()}for(;t;){switch(this.turningPoints.some((function(e){return e.coordinates[0]===t.coordinates[0]&&e.coordinates[1]===t.coordinates[1]}))&&(t.direction=this.turningPoints.filter((function(e){return e.coordinates[0]===t.coordinates[0]&&e.coordinates[1]===t.coordinates[1]}))[0].nextDirection,t.tail&&this.turningPoints.shift()),t.direction){case"T":t.coordinates[0]--;break;case"R":t.coordinates[1]++;break;case"B":t.coordinates[0]++;break;case"L":t.coordinates[1]--}t=t.next}if(e.head.coordinates[0]===this.state.foodCoordinate[0]&&e.head.coordinates[1]===this.state.foodCoordinate[1]){for(var s=this.state.currentScore+5,a=0,i=0;i=this.getRandomInt(0,this.boardHeight-1),a=this.getRandomInt(0,this.boardWidth-1),i===this.state.foodCoordinate[0]&&a===this.state.foodCoordinate[1]||e.isOn([i,a]););e.eat(),this.eatAudio.play(),this.setState({snake:e,currentScore:s,foodCoordinate:[i,a],foodClass:this.foodClasses[this.getRandomInt(0,this.foodClasses.length-1)]})}else this.setState({snake:e})}}},{key:"gameOver",value:function(){this.gameOverAudio.play(),clearInterval(this.intervalId),this.turningPoints=[];var e=localStorage.getItem("bestScore");e=null===e?0:parseInt(e);var t="GAME OVER!";this.state.currentScore>e&&(localStorage.setItem("bestScore",this.state.currentScore),e=this.state.currentScore,t="NEW BEST!"),this.setState({gameOverDisplay:!0,bestScore:e,gameOverMsg:t})}},{key:"getRandomInt",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}},{key:"onSwipeMove",value:function(e,t){var s=e.x,a=e.y;this.allowSwipe&&(Math.abs(s)>2||Math.abs(a)>2)&&(this.allowSwipe=!1,Math.abs(a)>Math.abs(s)?this.keyListner({keyCode:a>0?40:38}):this.keyListner({keyCode:s>0?39:37}))}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"app-bg",onTouchStart:function(){e.allowSwipe=!0},children:Object(b.jsx)(p.a,{className:"full-height flex flex-center",onSwipeMove:this.onSwipeMove,children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsx)("div",{className:"titleContainer",children:Object(b.jsx)("div",{className:"border",children:Object(b.jsx)(m,{})})}),Object(b.jsx)("div",{className:"scoreContainer",children:Object(b.jsx)("div",{className:"border",children:Object(b.jsx)(v,{bestScore:this.state.bestScore,currentScore:this.state.currentScore})})})]}),Object(b.jsx)("div",{className:"border mt-2",children:Object(b.jsx)(f,{getRandomInt:this.getRandomInt,boardWidth:this.boardWidth,boardHeight:this.boardHeight,snake:this.state.snake,currentScore:this.state.currentScore,foodCoordinate:this.state.foodCoordinate,foodClass:this.state.foodClass,gameOverDisplay:this.state.gameOverDisplay})}),this.state.gameMenuDisplay&&Object(b.jsxs)("div",{className:"border menu-overlay mt-2",children:[Object(b.jsxs)("div",{className:"flex flex-center",children:[Object(b.jsx)("div",{className:"snake-food snake menu-food mr-4"}),Object(b.jsx)("div",{className:"game-over-text",children:"MENU"}),Object(b.jsx)("div",{className:"snake-food snake invert menu-food ml-4"})]}),Object(b.jsxs)("div",{className:"flex mt-2",children:[Object(b.jsx)("span",{onClick:this.startGame.bind(this,200),className:"snakeButton mr-1",children:"EASY"}),Object(b.jsx)("span",{onClick:this.startGame.bind(this,120),className:"snakeButton mr-1 ml-1",children:"MEDIUM"}),Object(b.jsx)("span",{onClick:this.startGame.bind(this,75),className:"snakeButton ml-1",children:"HARD"})]})]}),this.state.gameOverDisplay&&Object(b.jsxs)("div",{className:"border gameover-overlay mt-2",children:[Object(b.jsx)("div",{className:"game-over-text",children:this.state.gameOverMsg}),Object(b.jsx)("div",{className:"flex mt-2",children:Object(b.jsx)("span",{onClick:this.endGame,className:"snakeButton mr-1 ml-1",children:"RESTART"})})]})]})})})}}]),s}(a.Component),S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,o=t.getTTFB;s(e),a(e),i(e),n(e),o(e)}))};o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),S()},4:function(e,t,s){},5:function(e,t,s){}},[[23,1,2]]]);
//# sourceMappingURL=main.7b44ab79.chunk.js.map