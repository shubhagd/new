@RestResource(urlMapping='/MyInvoicess/*')
Global class RestDelete {
@httpDelete
    Global static void deleteRecord(){
        RestRequest request=RestContext.request;
        RestResponse response=RestContext.response;
        String recordId=request.requestURI.substring(request.requestURI.lastIndexof('/')+1);
        Invoice__c record=[select id,name from Invoice__c where id=:recordId];
        Delete record;
    }
    
}