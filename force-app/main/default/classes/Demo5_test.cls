@isTest
private class Demo5_test{
    @testSetup
    private static void cr(){
        Account ac = new Account();
        ac.Name = 'Test acc';
        insert ac;
    }
    @isTest
    private static void dotest(){
    Demo5 d=new Demo5();
    Account a=[select id,name from Account where name='Test acc'];
    d.getAccount(a);
    }
}