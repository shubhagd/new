public with sharing class MyCustomCode {
  Account acc;
  public MyCustomCode()
  {
      acc = [select id,name from account where id='0015h00001Vfv0CAAR'];
  }
  public Account getMyCustomCode() {
       return acc;
  }
}