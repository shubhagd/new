public with sharing class MyClass1 {

    public Account getMyClass1() {
    Account a=[select id,name from account where id='0015h00001W9imy'];
        return a;
    }

}