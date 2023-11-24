/*1.Create a aura component where you have to demonstrate documentation and design.
 
<aura:component implements="force:appHostable,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId,forceCommunity:availableForAllPageTypes,force:lightningQuickAction" access="global" >
<aura:attribute type="String" name="myText" default=""/>
<div>
<p>Hello world</p>
</div>
</aura:component>
-----------
<aura:documentation>
<aura:description>Printing hello world</aura:description>
<aura:example name="ExampleName" ref="c:Docanddesign" label="Helloworld">
</aura:example>
</aura:documentation>
------------
<design:component>
<design:attribute name="myText" label="Page Heading" datasource="printing hello world"/>
</design:component>
 
**********************************************************************************************************
 
2.Create a LWC component where you have to create a new record for Lead object using LDS.
<template>
<div>
<lightning-record-form
            object-api-name="Lead"
            layout-type="full"
            columns="3">
</lightning-record-form>
</div>
</template>
-----------------
**********************************************************************************************************
3.Create a aura component to create a new record for Lead object using LDS.
<aura:component implements="force:appHostable,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId,forceCommunity:availableForAllPageTypes,force:lightningQuickAction" access="global" >
<Lightning:recordForm objectApiName="Lead"
                          layoutType="Full"
                          columns="3"/>
</aura:component>
**********************************************************************************************************
4.Write a program to demonstrate life cycle of Aura as well as LWC.
AURA LIFECYCLE:
<aura:component controller="AccInfo" implements="force:appHostable,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId,forceCommunity:availableForAllPageTypes,force:lightningQuickAction" access="global" >
<aura:attribute type="String" name="formHeading" default="Account Information"/>
<aura:attribute type="String" name="AccountName" default=""/>
<div class="slds-text-heading_large">
<div class="slds-text-align_center">
            {!v.formHeading}
</div>
</div>
<div class="slds-align_absolute-center">
<div class="slds-size_3-of-8">
<lightning:input type="text" label="Enter Account Name" value="{!v.AccountName}"/>
<lightning:button label="Save" onclick="{!c.myMethod}"/>
</div>
</div>
</aura:component>
--------------------
({
	myMethod : function(component, event, helper) {
		alert('I am controller');
        helper.helperMethod(component, event)
	}
})
--------------------
({
	helperMethod : function(component,event) {
		 alert('I am your helper, let me know');
        var aname=component.get("v.AccountName");
        alert('Account Name = '+aname);
        var action=component.get('c.insertAccontDetails');
        action.setParams({
            "anm" : aname,
        });
        action.setCallback(this, function(a)
        {
            var state =a.getState();
            if(state == 'SUCCESS')
            {
                alert('Record Inserted successfully');
            }
                           });
        $A.enqueueAction(action);
 
	}
-----------------------
({
    render:function(component, helper){
        var ret=this.superRender();
        alert('I am from render');
        return ret;
    },
    afterRender: function(component, helper){
        this.superAfterRender();
        alert('I am from afterRender');
    },
    rerender:function(component, helper){
        this.superRerender();
        alert('I am from rerender');
    },
    unrender:function(){
        this.superUnrender();
        alert('I am from unrender-going to destroy');
    }
})
--------------------
public class AccInfo {
	 @auraEnabled
    public static void insertAccontDetails(String anm){
        Account act = new Account();
        act.Name = anm;
        insert act;
    }
}
**********************************************************************************************************
LWC LIFECYCLE HOOK:
<template>
<div>
        Child Component
</div>
</template>
---------------
import { LightningElement } from 'lwc';
 
export default class Lwclifecycle extends LightningElement {
    constructor()
    {
        super();
        console.log('Child Constructor is called');
    }
    connectedCallback(){
        console.log('Child connectedCallback is called');
    }
    renderedCallback(){
        console.log('Child renderedCallback is called');
    }
     disconnectedCallback(){
        console.log('Child disconnectedCallback is called');
     }
     errorCallback(){
        console.log('Child errorCallback is called');
     }
     handleClick(){
        if(this.isVisible==true){
            this.isVisible==false; 
        }else{
            this.isVisible==true;
        }
     }
}
**********************************************************************************************************
5.Create a Navigation services to open contact object record for insertion(use 'new').
<template>
<lightning-card title="Navigation Services">
<div>
<lightning-button label="Contact Home" onclick={openContactHome}>
</lightning-button>
</div>
</lightning-card>
</template>
------------------------
import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
 
export default class connavigation extends NavigationMixin(LightningElement) {
    openContactHome(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes:{
                objectApiName: 'Contact',
                actionName:'home'
            }
        });
    }
}
**********************************************************************************************************
6.Create a Aura component where you have to insert Merchandise object.
<aura:component controller="MerInfo" implements="force:appHostable,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId,forceCommunity:availableForAllPageTypes,force:lightningQuickAction" access="global" >
<aura:attribute type="String" name="formHeading" default="Merchandise Information"/>
<aura:attribute type="String" name="MName" default=""/>
<aura:attribute type="String" name="MDesc" default=""/>
<aura:attribute type="String" name="MPrice" default=""/>
<aura:attribute type="String" name="MStock" default=""/>
<div class="slds-text-heading_large">
<div class="slds-text-align_center">
            {!v.formHeading}
</div>
</div>
<div class="slds-align_absolute-center">
<div class="slds-size_3-of-8">
<lightning:input type="text" label="Enter Merchandise Name" value="{!v.MName}"/>
<lightning:input type="text" label="Merchandise desc" value="{!v.MDesc}"/>
<lightning:input type="text" label="Enter Merchandise Price" value="{!v.MPrice}"/>
<lightning:input type="text" label="Enter Merchandise Stock" value="{!v.MStock}"/>
<lightning:button label="Save" name="MerInfo" onclick="{!c.myMethod}"/>
</div>
</div>
</aura:component>
----------------------------------
({
	myMethod : function(component, event, helper) {
		alert('I got called')
        helper.helperMethod(component, event)
	}
})
----------------------------------
({
	helperMethod : function(component, helper) {
        var MeName=component.get('v.MName');
        alert('Merchandise Name = '+MeName);
        var MeDesc=component.get('v.MDesc');
        alert('Merchandise Description = '+MeDesc);
        var MePrice=component.get('v.MPrice');
        alert('Merchandise Price = '+MePrice);
        var MeStock=component.get('v.MStock');
        alert('Merchandise Stock = '+MeStock);
         var action = component.get('c.insertMerDetails');
        action.setParams({
            "mn" : MeName,
            "md" : MeDesc,
            "mp" : MePrice,
            "ms" : MeStock
        });
        action.setCallback(this, function(a){
             var state = a.getState();
            if(state == 'SUCCESS'){
                alert('Record Inserted Successfully..');
            }
        });
        $A.enqueueAction(action);
	}
})
---------------------------
public class MerInfo {
	@auraEnabled
    public Static void insertMerDetails(String mn,String md,String mp,String ms){
    	Merchandise__c m = new Merchandise__c();
        m.name = mn;
        m.Merchandise_desc__c = md;
        m.Merchandise_price__c = Integer.valueOf(mp);
        m.Merchandise_stock__c = Integer.valueOf(ms);
        insert m;
    }
}
*/