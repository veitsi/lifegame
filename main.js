var N=5;
var field=[];
initModelField();
field[0][1][1]=true;
field[0][2][2]=true;
console.log(field[0]);
initHtmlField();

function initModelField(){
    field[0]=[];
    field[1]=[];
    for (var i=0;i<=N+1;i++){
        field[0][i]=[];
        field[1][i]=[];
        for(var j=0;j<=N+1;j++){
            field[0][i][j]=false;
            field[1][i][j]=false;
            console.log('cell '+i+","+j);
        }
    }
}
//<div id="game-field">
//    <div class="row">
//    <div></div><div></div><div></div><div></div><div></div>
//</div>
//<div class="row">
//    <div></div><div class="alive"></div><div></div><div class="alive"></div><div></div>
//</div>
//<div class="row">
//    <div></div><div class="alive"></div><div></div><div></div><div></div>
//</div>
//<div class="row">
//    <div></div><div></div><div></div><div></div><div></div>
//</div>
//<div class="row">
//    <div></div><div></div><div></div><div></div><div></div>
//</div>
//</div>
function initHtmlField(){
    document.write('<div id="game-field">')
    for (var i=1;i<N+1;i++){
        document.write('<div class="row">')
        for (var j=1;j<N+1; j++){
            document.write('<div ');
            if (field[0][i][j]) document.write('class="alive"');
            document.write('></div>');
        }
        document.write('</div>');
    }
    document.write('</div>');

}

function renderField(num){
    num=num||0;
    for (var i=1;i<N+1;i++){
        for (var j=1;j<N+1; j++){

        }
    }

}