// code your solution here


function superbowlWin(record){
    let final =record.find(record =>record.result==="W");
    
        if(final.result==='W'){
            return final.year;
        }
        else{
            console.log('undefined');
        }

   
}