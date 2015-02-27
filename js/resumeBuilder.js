var work = {
	'jobs': [
		{
			'employer': 'J&J',
			'title': 'CEO',
			'location': 'Bratislava, Slovakia',
			'dates': '2010-2012',
			'description': 'Maecenas vitae sapien sed dui blandit facilisis sed ac leo. Mauris diam diam, malesuada vitae ex in.'
		},
		{
			'employer': 'Apple',
			'title': 'Software Designer',
			'location': 'Zilina, Slovakia',
			'dates': '2012-2014',
			'description': 'Aenean et turpis nec massa semper dictum. Quisque dapibus nulla quis nibh imperdiet.'
		}
	]
};

work.display = function() {
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

var projects = {
	'projects': [
		{
			'title': 'Explore Universe',
			'dates': 'June 2015',
			'description': 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus, neque eu malesuada aliquetvelit, eget convallis lorem feu',
			'images': ['images/197x148.gif', 'images/197x148.gif']
		},
		{
			'title': 'Finish the webpage',
			'dates': 'December 2015',
			'description': 'Donec quis velit massa. Etiam tempus velit in nibh ullamcorper faucibus. Duis et arcu a elit finibus fringilla',
			'images': ['images/197x148.gif']
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
		'twitter': 'piti',
		'location': 'Slovakia'
	},
	'welcomeMessage': 'Welcome to my Resume Webpage',
	'skills': ['php','cf','html','css','js'],
	'bioPic': 'images/fry.jpg'
};

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);	

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);	
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);	

	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);	
		}
		
	}
}
bio.displayFooter = function() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#footerContacts").append(formattedGithub);	
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(formattedLocation);
}


var education = {
	'schools': [
	{
		'name':'University of Slovakia',
		'location': 'Slovakia',
		'degree': 'Uni',
		'majors': ['PhD'],
		'dates': 2010,
		'url': 'http://www.uniofslovakia.sk/'
	},
	{
		'name':'Harvard',
		'location': 'USA',
		'degree': 'Uni',
		'majors': ['Bc','Mgr','PhD'],
		'dates': 2012,
		'url': 'http://www.harvard.edu/'
	}	
	],
	'onlineCourses': [
	{
		'title': 'Webdeveloper',
		'school': 'University of Udacity',
		'dates': 2014,
		'url': 'http://www.udacity.com'
	},
	{
		'title': 'Puzzle Master',
		'school': 'Puzzle school',
		'dates': 2013,
		'url': 'http://www.puzzlemaster.com'
	}	
	]
};

education.display = function() {
	if (education.schools.length > 0) {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedName+formattedDegree);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLoc);

			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors.join(','));
			$(".education-entry:last").append(formattedMajor);
		}
	}

	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);

		for (onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].school);
			$(".education-entry:last").append(formattedTitle+formattedSchool);

			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedUrl);
		}
	}
}


bio.display();
work.display();
projects.display();
education.display();
bio.displayFooter();
$("#mapDiv").append(googleMap);

