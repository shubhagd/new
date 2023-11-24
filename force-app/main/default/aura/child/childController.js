({
	fireEvent : function(cmp, evt, hpr) {
        alert("Yes, i get called..");
        var e= cmp.getEvent("myEvt");
        e.setParams({"myText":"Last Calss for Aura"});
        e.fire();
		
	}
})