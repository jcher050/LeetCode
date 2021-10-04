class Solution {
    public int reverse(int x) {
       int pop = 0;
       int  lastNumReversed = 0;
       int reverse = 0;
       int top_limit = Integer.MAX_VALUE/10;
       int bottom_limit = Integer.MIN_VALUE/10;
        
        while (x != 0) {
            
            if (reverse > top_limit || reverse < bottom_limit)
              {
                System.out.println("WARNING OVERFLOWED!!!");
                return 0;
              }
            
           //System.out.println("x = " + x);
           pop = x % 10;
           reverse = (reverse * 10) + pop;
           lastNumReversed = reverse;
           x = x /10;
        }
       return reverse; 
    }
}