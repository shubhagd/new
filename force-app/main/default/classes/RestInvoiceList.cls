@RestResource(urlMapping='/myInvoices1/*')
global class RestInvoiceList {
@httpPost
    global static void createInvoice(List<String> invoiceDesc){
        List<Invoice__c> invoices=new List<Invoice__c>();
        for(String descs:invoiceDesc){
            Invoice__c newInvoice=new Invoice__c();
            newInvoice.Invoice_Desc__c=descs;
            invoices.add(newInvoice);
        }
        insert invoices;
    }
}