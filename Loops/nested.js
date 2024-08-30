function yourFirstNested(num) {
   
    for (let i = 0; i < num; i++) {
           let line = '';
          
           for (let j = 1; j <= num; j++) {
               line += j + ' ';
           }
          
           console.log(line);
       }
   }
   