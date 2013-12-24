function _titleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

var AuthorName = function(name) {
		
    var self = this;
    
    self.originalName = name;
    name = name.replace(/^\s+|\s+$/, '').replace(/\./, '');
	
    var matches;
	if (matches = name.match(/^([^,]+?)\s*(JR|SR|II|III|IV|MD|PHD)?\s*,\s*?([^,\s]+?)(?:\s+?([^,]+?))?$/i)) {
		//Last [Suffix], First [Middle]

		self.lastName = _titleCase(matches[1]||'');
		if (matches[3]) {
            if (/^[a-zA-Z]{1,2}$/.test(matches[3])) {
				//Last, FM
				self.firstName = matches[3].charAt(0).toUpperCase();
				self.middleName = matches[3].charAt(1).toUpperCase();
            }
            else {
                self.firstName = _titleCase(matches[3]||'');
                self.middleName = _titleCase(matches[4]||'');
            }
		}
        else {
			//Last, First
			self.firstName = _titleCase(matches[3]||'');
		}
        
		if(matches[2]){
			self.suffix = matches[2];
		}
	} 
    else if (matches = name.match(/^([^,]+?)\s+([A-Z][a-z])$/)) {
		//First Last
		self.firstName=_titleCase($matches[1]||'');
		self.lastName=_titleCase($matches[2]||'');
	} 
    else if (matches = name.match(/^([^,]+?)\s+([a-zA-Z]{1,2})$/)) {
		//Last FM
		self.lastName = _titleCase(matches[1]||'');
		self.firstName = matches[2].charAt(0).toUpperCase();
		self.middleName = matches[2].charAt(1).toUpperCase();
	} 
    else if (matches = name.match(/^(\S+?)\s+(.+\s)?(\S+?)$/)) {
		//First [Middle] Last
		self.lastName = _titleCase(matches[3]||'');
		self.firstName = _titleCase(matches[1]||'');
		if (matches[2]) {
            var tmp = matches[2].replace(/^\s+|\s+$/, '').toLowerCase();
			if (tmp == 'van de' || tmp == 'van den') {
				self.lastName = tmp + ' ' + self.lastName;
			}
            else if (tmp == 'di') {
				self.lastName = 'Di ' + self.lastName;
			}
            else {
				self.middleName = _titleCase(tmp);
			}
		}
	} 
    else {
		self.lastName=_titleCase(name);
	}
    
    return self;
};

AuthorName.prototype.isValid = function() {
    return this.lastName && this.firstName;
}

AuthorName.prototype.shortName = function() {
    if (!this.firstName) {
        return this.lastName;
    }
    
    return this.lastName + ' ' + (this.firstName||'').charAt(0) + (this.middleName ? ' ' + this.middleName.charAt(0) : '');
}

AuthorName.prototype.fullName = function(firstFirst) {
    firstFirst = firstFirst || false;

    var self = this;
    
    if (!self.firstName) {
        return self.lastName;
    }

    if (firstFirst) {
        if(!self.middleName){
            return self.firstName + ' ' + self.lastName;
        }
        else {
            return self.firstName + ' ' + self.middleName + ' ' + self.lastName;
        }
    }
    else {
        if(!self.middleName){
            return self.lastName + ', ' + self.firstName;
        }
        else {
            return self.lastName + ', ' + self.firstName + ' ' + self.middleName;
        }
    }
}

module.exports = AuthorName;