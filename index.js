// code your solution here
 function superbowlWin(arr){
    const result = arr.find(item => item.result === "W");

    return !! result ? result.year : undefined;
}
   
   superbowlWin(record)