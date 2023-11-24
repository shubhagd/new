@isTest
private class Demo_Test
{
@testSetup
static void doTestDataSetup(){
Account act=new Account();
act.name='Test Account';
insert act;
}
public testMethod static void doTest(){
Test.startTest();
Demo d=new Demo();
d.sayHello();
integer r=d.add(10,10);
System.assertEquals(20,r,'Result is not equals');
Account a=[select id,name from account where name='Test Account'];
d.getAccount(a);

user u=[select id from user where userName='yashkumar@ltimindtree@gmail.com'];
System.runAs(u){
Merchandise__c m=new Merchandise__c();
m.name='Test Jeans';
insert m;
Merchandise__c mer=[select id,name from Merchandise__c where name='Test Jeans'];
delete mer;
}
Test.stopTest();
}
}