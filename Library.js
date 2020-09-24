var item1,item2;

function isTouching(item1,item2)
{
     
    if( Math.abs(item1.x - item2.x) <= item2.width/2 + item1.width/2)
     {
         return true;
     }
     else
     {
         return false;
     }
}