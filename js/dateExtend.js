//Extend Date to have a few extra fatures
Date.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
Date.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
Date.prototype.dayNames = Date.dayNames;
Date.prototype.monthNames = Date.monthNames;

Date.prototype.getDayName = function() {
	return this.dayNames[this.getDay()];
};
Date.prototype.getDayNameAbbr = function() {
	return this.getDayName().slice(0,4);
};
Date.prototype.getMonthName = function() {
	return this.monthNames[this.getMonth()];
};
Date.prototype.getMonthNameAbbr = function() {
	if ( this.getMonth() === 8) {
		return this.getMonthName().slice(0,4); //SEPT looks better than SEP :)
	} else {
		return this.getMonthName().slice(0,3);
	};
};