public with sharing class WithSharingMethod {

   public Account getMyClass(){
   Account a=[select id,name from account where id='0015h00001W9imy'];
   return a;
}
}