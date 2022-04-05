const Students=[
		{
			id:01,
			name:'Abdul kaium',
			gpa:5
		},
		{
			id:02,
			name:'Ashik Md Shakil Pranto',
			gpa:6
		},
		{
			id:03,
			name:'Masum Billah',
			gpa:7
		},
		{
			id:04,
			name:'Mubarak mama',
			gpa:7
		},
		{
			id:05,
			name:'Nusrat Jahan',
			gpa:8
		},
		{
			id:06,
			name:'Nishat Mustakim',
			gpa:5
		}


]

const good_student=Students.filter((x)=>{
	return x.gpa>5;
}).map((x)=>{
	return x.name;
})

document.write(good_student);