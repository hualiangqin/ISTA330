/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/

var isCrossing = function(s) {
    let matrix = [];
    let pos = [0,0];
    matrix.push(pos);
    for (i=0; i<s.length; i++){
        let newPos = pos.slice();
        if (s.charAt(i) == "N"){
            newPos[1]+=1;
        }else if (s.charAt(i) == "S"){
            newPos[1]-=1;
        }else if (s.charAt(i) == "E"){
            newPos[0]+=1;
        }else if (s.charAt(i) == "W"){
            newPos[0]-=1;
        }
        matrix.push(newPos);
        pos = newPos;
    }
    for (i=0; i<matrix.length; i++){
        for (j=i+1; j<matrix.length; j++){
            if (matrix[i][0] == matrix[j][0] && matrix[i][1] == matrix[j][1]){
                return true;
            }
        }
    }
    return false;
};