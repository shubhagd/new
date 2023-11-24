public class MerchandiseArchCls {
    public static void insertMerchandiseArch(List<Merchandise__c> mer){
        Merchandise_Arch__c ma;
        List<Merchandise_Arch__c> malist=new List<Merchandise_Arch__c>();
       
        //Bulkify trigger
        for(Merchandise__c m : mer){
            ma=new Merchandise_Arch__c();
            ma.name=m.name;
            malist.add(ma);
        }
         insert malist; 
    }

}