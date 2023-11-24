@RestResource(urlMapping='/myInvoices/*')
global class RestInvoice {
    @httpGet
    global static List<Invoice__c> getInvoices(){
        List<Invoice__c> records=[select id,name from Invoice__c];
        return records;
    }
    @httpPost
    global static void createInvoice(String invoiceDesc){
        Invoice__c invoice=new Invoice__c();
        invoice.Invoice_Desc__c=invoiceDesc;
        insert invoice;
    }
    @httpDelete
    global static void deleteInvoice(){
        RestRequest request=RestContext.request;
        RestResponse response=RestContext.response;
        String recordId=request.requestURI.subString(request.requestURI.lastIndexOf('/')+1);
      //  String id1=recordId;
        Invoice__c record=[select id,name from Invoice__c where id=: recordId];
        delete record;
    }
 
}