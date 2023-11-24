@RestResource (urlmapping='/MyInvoice/*')
Global class webser1 {
    @httpGet
    Global static List<Invoice__c> getinvoice(){
        List<Invoice__c> inv=[select id,name from Invoice__c];
            return inv;
        }
    @httppost
    Global static void createinv(String invDesc){
        Invoice__c d=new Invoice__c();
        d.Invoice_Desc__c=invDesc;
        insert d;
        
    }
        

    }