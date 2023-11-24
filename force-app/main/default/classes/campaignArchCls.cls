public class campaignArchCls {
      public static void CampainInsert(List<Campaign> cam)
    {
        Campaign_Arch__c ca;
        List<Campaign_Arch__c> calist=new List<Campaign_Arch__c>();
        for(Campaign c:cam)
        {
            ca=new Campaign_Arch__c();
            ca.name=c.name;
            calist.add(ca);
        }
        insert calist;
    }

}