@isTest
private class demo29_test{
@testsetup
static void dotestsetup(){
account act=new account();
act.name='Test Account';
insert act;
}
public testmethod static void dotest(){
demo29 d=new demo29();
Account a=[select id,name from account where name='Test Account'];
d.getaccount(a);
}
}