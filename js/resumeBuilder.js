var work = {
	'jobs': [
		{
			'employer': 'J&J',
			'title': 'CEO',
			'location': 'Slovakia',
			'dates': '2010-2012',
			'description': 'Maecenas vitae sapien sed dui blandit facilisis sed ac leo. Mauris diam diam, malesuada vitae ex in.'
		},
		{
			'employer': 'Apple',
			'title': 'Software Designer',
			'location': 'Slovakia',
			'dates': '2012-2014',
			'description': 'Aenean et turpis nec massa semper dictum. Quisque dapibus nulla quis nibh imperdiet.'
		}
	]
};

var projects = {
	'projects': [
		{
			'title': 'Explore Universe',
			'dates': 'June 2015',
			'description': 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus, neque eu malesuada aliquetvelit, eget convallis lorem feu',
			'images': ['','']
		},
		{
			'title': 'Finish the webpage',
			'dates': 'December 2015',
			'description': 'Donec quis velit massa. Etiam tempus velit in nibh ullamcorper faucibus. Duis et arcu a elit finibus fringilla',
			'images': ['','']
		}
	]
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);				
			}
		}
	}
}

var bio = {
	'name': 'Peter Krajcir',
	'role': 'Senior Architecture',
	'contacts': {
		'mobile': '+4215348904320984',
		'email': 'peter.krajcir@gmail.com',
		'github': 'peter.krajcir',
		'location': 'Slovakia'
	},
	'welcomeMessage': 'Welcome to my Resume Webpage',
	'skills': ['php','cf','html','css','js'],
	'bioPic': 'images/peter.png'
};

var education = {
	'schools': [
	{
		'name':'University of Slovakia',
		'location': 'Slovakia',
		'degree': 'Uni',
		'majors': ['PhD'],
		'dates': '2004-2010',
		'url': 'http://www.uniofslovakia.sk/'
	}
	],
	'onlineCourses': [
	{
		'title': 'Webdeveloper',
		'school': 'University of Udacity',
		'dates': 'September 2014',
		'url': 'http://www.udacity.com'
	}
	]
};


// Fill index.html with the data

function displayBio() {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
	}
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}



