public class AccountInsertOwner {
      public static void InsertAccountOwner(List<Account> act)
    {
         for(Account a:act){
            if(a.Industry=='Education'){
                a.Ownership='public';
    }
         }
    }

}