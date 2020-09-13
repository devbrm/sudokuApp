(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{33:function(e,t,a){e.exports=a(59)},38:function(e,t,a){},39:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),o=a.n(l),c=(a(38),a(15)),i=a(3),s=a(7),u=a(11),m=a(18),d=function(e){var t=JSON.parse(localStorage.getItem("sudokuHistory"));!t||t.length<1?localStorage.setItem("sudokuHistory",JSON.stringify([e])):(t.push(e),localStorage.setItem("sudokuHistory",JSON.stringify(t)))};var p=function(e){var t,a=Object(n.useContext)(j),l=a.state,o=a.dispatch,c=e.row,i=e.col,m=e.value,p=e.editable,f=e.id,g=Object(n.useRef)(null),v=Object(n.useState)(""),h=Object(s.a)(v,2),E=h[0],b=h[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{ref:g,id:f,type:"text",className:"fields",readOnly:p,onClick:function(){if(!l.startTime){var e=JSON.parse(localStorage.getItem("sudokuRoot")).timer,t=e.startTime,a=e.endTime;l.startTime=t||a?Math.abs(a-t-Date.now()):Date.now()}var n=Object(u.a)(Object(u.a)({},l),{},{previousRef:{ref:g.current,row:c,col:i}});o({type:"refupdated",payload:n})},onChange:function(e){var a=e.target,n=a.id,r=a.readOnly,s=e.target.value.slice(-1);if(s.match(/[\D0]/gi)||r)return g.current.classList.add("warning"),t&&clearTimeout(t),void(t=setTimeout((function(){g.current.classList.remove("warning")}),400));if(b(s),E!==s){var u=l.data;s=Number(s);var m={row:c,col:i,value:s,id:Number(n),editable:p};u[c][i]=m,d(u),o({type:"sudokuFieldModified",payload:l})}},value:m||""}))};var f=function(e){var t=e.data;return r.a.createElement("div",{className:"rows"},t.map((function(e,a){return r.a.createElement(p,{key:t[a].col,editable:e.editable,value:e.value,id:e.id,row:e.row,col:e.col})})))},g=(a(39),a(26));var v=function(e){var t=e.value;return r.a.createElement("button",{value:t},t)};var h=function(){var e=Object(n.useContext)(j),t=e.state,a=e.dispatch,l=t.data,o=Object(n.useState)(""),c=Object(s.a)(o,2),i=c[0],m=c[1];localStorage.getItem("sudokuHistory")||localStorage.setItem("sudokuHistory","[]");var p=JSON.parse(localStorage.getItem("sudokuHistory")),f=p.length,h=Object(n.useState)(f-1),E=Object(s.a)(h,2),b=E[0],y=E[1];Object(n.useEffect)((function(){if(p[b]){var e=Object(u.a)(Object(u.a)({},t),{},{data:p[b]});a({type:"sudokuFieldModified",payload:e})}}),[b]),Object(n.useEffect)((function(){if(y(f-1),b+1<f-1){var e=JSON.parse(localStorage.getItem("sudokuHistory")),t=e.slice(-1);e.splice(b+1);var a=[].concat(Object(g.a)(e),Object(g.a)(t));localStorage.setItem("sudokuHistory",JSON.stringify(a))}}),[f]);var k=function(e,n){if(!n){var r=t.previousRef,o=r.row,c=r.col,i=l[o][c],s=i.editable,m=i.id,p={row:o,col:c,value:e,id:Number(m),editable:s};l[o][c]=p,t.startTime||(t.startTime=Date.now()),d(l,s),a({type:"sudokuFieldModified",payload:Object(u.a)({},t)})}};return r.a.createElement("div",{className:"options-comtainer"},r.a.createElement("div",{className:"undo-redo",onClick:function(e){if(e.target.closest("button"))switch(e.target.closest("button").name){case"undo":b<0?y((function(e){return e+1})):p[b-1]&&y((function(e){return e-1}));break;case"redo":b>=f?y((function(e){return e-1})):p[b+1]&&y((function(e){return e+1}));break;case"clear":var a=t.previousRef,n=a.row,r=a.col,o=l[n][r],c=o.editable;if(null===o.value)return;k(null,c)}}},r.a.createElement("button",{name:"undo"},r.a.createElement("i",{className:"fas fa-2x fa-angle-left"})),r.a.createElement("button",{name:"redo"},r.a.createElement("i",{className:"fas fa-2x fa-angle-right"})),r.a.createElement("button",{name:"clear"},r.a.createElement("i",{className:"fas fa-2x  fa-backspace"}))),r.a.createElement("div",{className:"options"},r.a.createElement("div",{onClick:function(e){if(e.target.closest("button")){var a=e.target.closest("button").value;if(a=Number(a),m(a),i!==a){var n=t.previousRef,r=n.row,o=n.col,c=l[r][o].editable;k(a,c)}}},className:"primary-options"},[1,2,3,4,5,6,7,8,9].map((function(e,t){return r.a.createElement(v,{key:t,value:e})})))))},E=function(e){var t=Math.floor(e/3600).toString().padStart(2,"0"),a=Math.floor(e%3600/60).toString().padStart(2,"0"),n=Math.floor(e%60).toString().padStart(2,"0");return t<0?"".concat(t," : ").concat(a," : ").concat(n):"".concat(a," : ").concat(n)};var b=function(){var e=Object(n.useContext)(j).state,t=Object(n.useState)(0),a=Object(s.a)(t,2),l=a[0],o=a[1],c=JSON.parse(localStorage.getItem("sudokuRoot")),i=c.puzzle,u=(c.timer,{puzzle:i,timer:{startTime:Date.now()}});return Object(n.useEffect)((function(){var t=setInterval((function(){o((Date.now()-e.startTime)/1e3),u.timer.endTime=Date.now(),localStorage.setItem("sudokuRoot",JSON.stringify(u))}),1e3);return function(){clearInterval(t)}}),[]),r.a.createElement("div",{className:"time"},E(l))},y=function(e){var t=e.data,a=e.solution;if(a&&a.length){var n=t.flat().map((function(e){return e.value}));return!n.some((function(e){return"number"!==typeof e}))&&n.every((function(e,t){return n[t]===a[t]}))}};var k=function(){return r.a.createElement("div",{className:"victory-message"},r.a.createElement("h1",null,"Hurray you made us proud"),r.a.createElement("div",{className:"gif-continer"},r.a.createElement("img",{src:"https://media.giphy.com/media/g9582DNuQppxC/giphy.gif",alt:"GIF "}),r.a.createElement("img",{src:"https://media.giphy.com/media/l0MYCn3DDRBBqk6nS/giphy.gif",alt:"GIF "}),r.a.createElement("img",{src:"https://media.giphy.com/media/l49JHLpRSLhecYEmI/giphy.gif",alt:"GIF "}),r.a.createElement("img",{src:"https://media.giphy.com/media/fxsqOYnIMEefC/giphy.gif",alt:"GIF "}),r.a.createElement("img",{src:"https://media.giphy.com/media/3o6fJ1BM7R2EBRDnxK/giphy.gif",alt:"GIF "})))},S=a(22),w=a.n(S);w.a.initializeApp({apiKey:"AIzaSyDI48wefq-0EtVcxXPT9-QF1RW8kLW2cog",authDomain:"sudoku-game-6d16e.firebaseapp.com",databaseURL:"https://sudoku-game-6d16e.firebaseio.com",projectId:"sudoku-game-6d16e",storageBucket:"sudoku-game-6d16e.appspot.com",messagingSenderId:"72397466967",appId:"1:72397466967:web:2345c4e691f8a1ff106212",measurementId:"G-P8FS1CC5NC"});var O=w.a.database(),N=O.ref("highScores"),j=(w.a,r.a.createContext());var I=r.a.memo((function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),c=Object(s.a)(o,2),i=c[0],d=c[1],p=Object(n.useState)(""),g=Object(s.a)(p,2),v=g[0],S=g[1],w=Object(n.useReducer)((function(e,t){switch(t.type){case"onload":return t.payload;case"modifications":case"sudokuFieldModified":return Object(u.a)({},t.payload);case"refupdated":return t.payload;default:return e}}),{}),O=Object(s.a)(w,2),I=O[0],z=O[1],T=Object(n.useState)(!1),x=Object(s.a)(T,2),R=x[0],J=x[1],C=function(){var e=a.map((function(e){return null===e?e:e+1}));return{puzzle:e,isSolved:!1,data:H(e),solution:i,previousRef:{row:0,col:0}}},H=function(e){for(var t=[],a=0;a<9;a++){t[a]||(t[a]=[]);for(var n=0;n<9;n++){var r=e[9*a+n];t[a].push({row:a,col:n,value:r,id:9*a+n,editable:null!==r})}}return t};Object(n.useEffect)((function(){if(JSON.parse(localStorage.getItem("sudokuHistory")).length>0)F();else{l(Object(m.makepuzzle)());localStorage.setItem("sudokuRoot",JSON.stringify({puzzle:[],timer:{startTime:0,endTime:0}}))}}),[]),Object(n.useEffect)((function(){a.length>0&&d(Object(m.solvepuzzle)(a).map((function(e){return e+1}))),z({type:"onload",payload:C()}),J(!0)}),[a]),Object(n.useEffect)((function(){z({type:"onload",payload:C()});var e=0,t=0;if(JSON.parse(localStorage.getItem("sudokuRoot")).timer){var a=JSON.parse(localStorage.getItem("sudokuRoot")).timer;e=a.startTime,t=a.endTime}var n={puzzle:I.puzzle,timer:{startTime:e,endTime:t}};localStorage.setItem("sudokuRoot",JSON.stringify(n))}),[i]),Object(n.useEffect)((function(){y(I)&&(I.isSolved=!0,z({type:"modifications",payload:I}))}),[I]),Object(n.useEffect)((function(){if(localStorage.setItem("playerName",JSON.stringify(v)),I.isSolved){var e=JSON.parse(localStorage.getItem("sudokuRoot")).timer,t=e.startTime,a=e.endTime,n=a-t,r=E((a-t)/1e3);v.length&&S((new Date).toLocaleString().split(",")[1].trim()),N.push({name:v,time:n,string:r})}}),[I]);var D,F=function(){if(window.confirm("Previous game found \n keep it ?")){var e=JSON.parse(localStorage.getItem("sudokuRoot")).puzzle.map((function(e){return null===e?e:e-1}));l(e),d(Object(m.solvepuzzle)(e).map((function(e){return e+1}))),document.querySelector(".popup").classList.add("display"),setTimeout((function(){document.querySelector(".popup").classList.remove("display")}),5e3)}else{localStorage.setItem("sudokuHistory","[]");localStorage.setItem("sudokuRoot",JSON.stringify({puzzle:[],timer:{startTime:0,endTime:0}})),l(Object(m.makepuzzle)())}};return r.a.createElement("section",{id:"sudoku-container"},r.a.createElement("header",null,r.a.createElement("div",{className:"popup"},"Press the back button once to get previous data."),r.a.createElement("h1",null,"Sudoku Online"),r.a.createElement("div",{className:"header-links-container"},r.a.createElement("span",null,r.a.createElement("a",{href:"https://devbrm.github.io/portfolio/",target:"_blank"},r.a.createElement("i",{className:"fas fa-2x fa-globe-asia"}))),r.a.createElement("span",null,r.a.createElement("a",{href:"https://github.com/devbrm",target:"_blank"},r.a.createElement("i",{className:"fab fa-2x fa-github"}))),r.a.createElement("span",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/devbrm/",target:"_blank"},r.a.createElement("i",{className:"fab fa-2x fa-linkedin"})))),r.a.createElement("p",null,"Made with \u2764 by Braham Prakash")),r.a.createElement(j.Provider,{value:{state:I,dispatch:z}},r.a.createElement("main",null,I.isSolved?r.a.createElement(k,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"qoute"},"lorem ipsum"),r.a.createElement("div",{className:"sudokuContainer"},r.a.createElement("div",{className:"sudoku"},R&&I.data.map((function(e,t){return r.a.createElement(f,{key:e[t].row,data:e})})))),I.startTime?r.a.createElement(b,null):r.a.createElement("div",{className:"time"},"00 : 00"),r.a.createElement("input",{className:"player-name",type:"text",onChange:function(e){var t=e.target.value;if(t.match(/[^a-z\s\d]/gi)){var a=document.querySelector(".player-name");return a.classList.add("invalid"),D&&clearTimeout(D),void(D=setTimeout((function(){a.classList.remove("invalid")}),1500))}S(t)},placeholder:"Put Champion's name here",value:v}),r.a.createElement(h,null)))),r.a.createElement("footer",null,r.a.createElement("div",null,"\xa9 braham prakash 2020 ")))}));var z=function(){return r.a.createElement("section",{id:"how-to-play"},r.a.createElement("h2",null,"How to play Sudoku"),r.a.createElement("p",null,"Sudoku is an interesting and engaging puzzle game. It is also quite popular in the world today because the rules that govern it are simple to learn and understand. With a little bit of thinking, focus, and patience, you can arrive at the solution when solving Sudoku. There\u2019s no need for guesswork!"),r.a.createElement("p",null,"The goal of Sudoku is to fill in a 9\xd79 grid with digits so that each column, row, and 3\xd73 section contain the numbers between 1 to 9. At the beginning of the game, the 9\xd79 grid will have some of the squares filled in. Your job is to use logic to fill in the missing digits and complete the grid. Don\u2019t forget, a move is correct if:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Every row should contain digits 1 to 9 without reapeating"),r.a.createElement("li",null,"Every column should also contain digits 1 to 9 without reapeating"),r.a.createElement("li",null,"Any 3\xd73 grid should not contain more than one of the same number from 1 to 9")),r.a.createElement("div",{className:"video-container"},r.a.createElement("h2",null,"Here are few tutorials"),r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/OtKxtvMUahA",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/URHZiLu1-LI",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))};var T=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){N.once("value").then((function(e){var t=e.val(),a=Object.keys(e.val()),n=[];a.forEach((function(e){n.push({id:e,name:t[e].name,time:t[e].time,string:t[e].string})})),n.sort((function(e,t){return e.time-t.time})),l(n)}))}),[]),r.a.createElement("section",{id:"highscores"},r.a.createElement("h2",null,"Highscores"),r.a.createElement("p",{className:"heading"},r.a.createElement("span",null,"Name"),r.a.createElement("span",null,"score")),a&&a.map((function(e){var t=e.id,a=e.name,n=e.string;return r.a.createElement("p",{key:t,className:"score"},r.a.createElement("span",null,a),r.a.createElement("span",{className:"time"},n))})))};var x=function(){return r.a.createElement("section",{id:"rate"},r.a.createElement("div",{onClick:function(e){if(e.target.closest("span")){var t=JSON.parse(localStorage.getItem("playerName")),a=e.target.closest("span").children[0].textContent;console.log(t,a),O.ref("ratings").push({name:t,rating:a})}},className:"emojis-container"},"How was yor experience?",r.a.createElement("span",{value:"bad"},"\ud83d\ude14",r.a.createElement("p",null,"bad")),r.a.createElement("span",{value:"ok"},"\ud83d\ude42",r.a.createElement("p",null,"ok")),r.a.createElement("span",{value:"good"},"\ud83d\ude0a",r.a.createElement("p",null,"good")),r.a.createElement("span",{value:"awesome"},"\ud83e\udd29",r.a.createElement("p",null,"awesome")),r.a.createElement("span",{value:"fantastic"},"\ud83d\ude0d",r.a.createElement("p",null,"fantastic")),r.a.createElement("span",{value:"Infinite"},"\ud83d\udc96",r.a.createElement("p",null,"loved"))))};var R=function(){return r.a.createElement(c.a,null,r.a.createElement("section",{id:"menu"},r.a.createElement("nav",null,r.a.createElement("h2",null,r.a.createElement(c.b,{to:"/how-to-play"},"How to Play")),r.a.createElement("h2",null,r.a.createElement(c.b,{to:"/"},"Play")),r.a.createElement("h2",null,r.a.createElement(c.b,{to:"/highscores"},"view highscores")),r.a.createElement("h2",null,r.a.createElement(c.b,{to:"/rate"},"Rate it!")),r.a.createElement("h2",null,r.a.createElement("a",{href:"https://devbrm.github.io/portfolio/",target:"_blank"},"Visit Developer's site")),r.a.createElement("div",{className:"links-container"},r.a.createElement("span",null,r.a.createElement("a",{href:"https://devbrm.github.io/portfolio/",target:"_blank"},r.a.createElement("i",{className:"fas fa-3x fa-globe-asia"}))),r.a.createElement("span",null,r.a.createElement("a",{href:"https://github.com/devbrm",target:"_blank"},r.a.createElement("i",{className:"fab fa-3x fa-github"}))),r.a.createElement("span",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/devbrm/",target:"_blank"},r.a.createElement("i",{className:"fab fa-3x fa-linkedin"})))))),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/sudokuApp",exact:!0,component:I}),r.a.createElement(i.a,{path:"/how-to-play",exact:!0,component:z}),r.a.createElement(i.a,{path:"/highscores",exact:!0,component:T}),r.a.createElement(i.a,{path:"/rate",exact:!0,component:x})))};var J=function(){return r.a.createElement("div",{onClick:function(e){var t=document.querySelector(".ham-icon"),a=document.querySelector("#menu nav");if(e.target===t)a.classList.toggle("toggleElement");else{if(e.target.parentElement===a)return;a.classList.remove("toggleElement")}},className:"App"},r.a.createElement("div",{className:"ham-icon"}),r.a.createElement(R,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.51fc6451.chunk.js.map