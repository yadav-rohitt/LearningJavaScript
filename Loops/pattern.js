function patternOfN(num) {
    
    let curr = 1;
    for(let line = 1; line <=num ; line++){
      let str = "";
      for(let number = 1; number <=num; number++){
        str += curr +" " ;
        curr++ ;
      }
      console.log(str);
    }
}
