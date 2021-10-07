/**
 * @param {number} x
 * @return {number}
 */
/*
var reverse = function(x) {
    
       let pop = 0;
       let lastNumReversed = 0;
       let reverse = 0;
       let toplimit = (Math.pow(2,31)-1)/10;
       let bottomlimit = (Math.pow(-2,31))/10;
        
       while (x !== 0) {
           
              if (reverse > toplimit || reverse < bottomlimit)
              {
                console.log("WARNING OVERFLOWED!!!");
                return 0;
              }
            
           
           pop = x % 10;
           reverse = (reverse * 10) + pop;
           lastNumReversed = reverse;
           x = x/10;
           x = Math.trunc(x);
           console.log("x = " + x);
           console.log("last num reversed= " + lastNumReversed);
       }
    
       return reverse; 
    
    
};
*/






/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

       let reverse = 0;
       let limit = (Math.pow(2,31)-1)/10;

        
       while (x !== 0) {
           
              if (reverse > limit || reverse < -limit)
              {
                console.log("WARNING OVERFLOWED!!!");
                return 0;
              }
            
           reverse = (reverse * 10) +  (x % 10);
           x = Math.trunc(x/10);
           console.log("x = " + x);
           console.log(" reversed= " + reverse);
       }
    
       return reverse; 
    
    
};




