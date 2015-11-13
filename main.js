var N=7;
var field=[];
var cursor=false;
initModelField();
field[0][1][2]=true;
field[0][2][3]=true;
field[0][3][1]=true;
field[0][3][2]=true;
field[0][3][3]=true;
console.log(field[0]);
initHtmlField();

function neighboursNumber(i,j){
    return 0+field[+cursor][i-1][j-1]+field[+cursor][i-1][j]+field[+cursor][i-1][j+1]+
        field[+cursor][i][j-1]+field[+cursor][i][j+1]+
        field[+cursor][i+1][j-1]+field[+cursor][i+1][j]+field[+cursor][i+1][j+1];
}

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

function initHtmlField(){
    document.write('<input value="recalc" onclick="recalc()" type="button"></input>');
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

function recalc(){
    for (var i=1;i<N+1;i++){
        for (var j=1;j<N+1; j++){
            var n=neighboursNumber(i,j);

            field[+!cursor][i][j]=false;
            //console.log(i,j,n,field[+cursor][i][j]);
            document.body.childNodes[3].childNodes[i-1].childNodes[j-1].className='';
            if (field[+cursor][i][j] && (n===2 || n===3)) field[+!cursor][i][j]=true;
            if ((!field[+cursor][i][j]) && n===3) field[+!cursor][i][j]=true;
            if (field[+!cursor][i][j])
                document.body.childNodes[3].childNodes[i-1].childNodes[j-1].className='alive';
        }
    }
    cursor=!cursor;
}