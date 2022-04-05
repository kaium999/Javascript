var person=[

		{
			id:01,
			name:'Abdul kaium',
			address:'Thakurgaon'
		},

		{
			id:02,
			name:'Rayan Ferdos',
			address:'Thakurgaon'
		},

		{
			id:03,
			name:'Ahanaf faiaz Nihal',
			address:'Thakurgaon'
		},


		{
			id:04,
			name:'Rayan Murshid ',
			address:'Thakurgaon'
		},

		{
			id:05,
			name:'Nafiz',
			address:'Thakurgaon'
		},

		{
			id:06,
			name:'Nishat Tabbasum',
			address:'Thakurgaon'
		}

]

const newPerson=person.map((variable)=>{
    return variable.name;

});

document.write(newPerson);