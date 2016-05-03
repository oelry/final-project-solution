
app.service('phoneBookService', function(){
	this.getContacts = function(){
		return [
			{
				phone : '320-234-2345',
				name  : 'Mom and Dad',
				city  : 'Hutchinson',
				state : 'Minnesota'
			},
			{
				phone : '612-234-2345',
				name  : 'Brother',
				city  : 'Minneapolis',
				state : 'Minnesota'
			},
			{
				phone : '320-234-2345',
				name  : 'Sister',
				city  : 'Plymouth',
				state : 'Minnesota'
			}						
		];
	};
});