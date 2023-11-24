public class industryEdu {
    public static void industryEducation(List<Account> acc){
        for(Account a:acc){
            if(a.Industry=='Education'){
                a.Ownership='Public';
            }
        }
    }

}