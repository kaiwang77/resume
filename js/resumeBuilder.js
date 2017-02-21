/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name":"Kevin Repo",
	"role":"web developer",
	"contacts":{
		"mobile":"159-1171-0130",
		"email":"kwang77@126.com",
		"github":"kaiwang77",
		"location":"Yunnan China"
	},
	"biopic":"images/fry.jpg",
	"welcomeMessage":"Welcome to Kevin's resume!",
	"skills":["aweasomeness","html5","css3","javascript"]
};

var education = {
	"schools":[
		{
			"name":"SJTU",
			"location":"Shanghai",
			"degree":"bachelor",
		    "dates":"September,2008-June,2012",
		    "url":"https://www.sjtu.edu.cn",
	    	"major":["applied chemistry"]
	    }
    ],
    "onlineCourses":[
    	{
	    	"title":"frontend-nanodegree",
			"school":"Udacity",
			"dates":"January,2017-March,2017",
			"url":"https://www.youdaxue.com"
    	}
	]
};

var work = {
	"jobs":[
		{
			"employer":"Sino-platinum Metal CO.,Ltd",
			"title":"technician",
	    	"location":"Kunming",
	    	"dates":"July,2012-October,2012",
	    	"description":"I entered this company after graduting from university.We made metal powder using chemistry methods.I was in charge of the producing process.I worked five days a week and the work was pretty simple.Because of the low salary and harmful working enviroument,I left the company after three months."
		},
		{
			"employer":"Xinya real estate",
			"title":"salesman",
			"location":"Kunming",
			"dates":"November,2012-December,2012",
        	"description":"I entered this company after graduting from university.We made metal powder using chemistry methods.I was in charge of the producing process.I worked five days a week and the work was pretty simple.Because of the low salary and harmful working enviroument,I left the company after three months."
		}
	]
};

var projects = {
	"projects":[
		{
			"title":"portfolio",
			"dates":"December,2016",
			"description":"This is my first project.It's a portfolio which contains a short introduction of my works.While making the portfolio,I used the knowledge concerning framework and responsiv page.Framework helps me to align different elements on the web page.Responsiv skills makes the page adapt to viewport and devices of different size.",
			"images":["images/pro0.jpg"]
		},
		{
			"title":"arcade game",
			"dates":"December,2016",
			"description":"This is my first project.It's a portfolio which contains a short introduction of my works.While making the portfolio,I used the knowledge concerning framework and responsiv page.Framework helps me to align different elements on the web page.Responsiv skills makes the page adapt to viewport and devices of different size.",
			"images":["images/pro1.jpg"]
		}
	]
};




bio.displayBio = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$(formattedRole).insertAfter("#name");

	$.each(bio.contacts,function(key,value) {
		var formattedContact = HTMLcontactGeneric.replace("%contact%",key);
		formattedContact = formattedContact.replace("%data%",value);
		$("#topContacts,#footerContacts").append(formattedContact);
	});

	var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedBiopic);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$(formattedWelcomeMessage).insertAfter(".biopic");

	if (bio.skills.length !== 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
};

bio.displayBio();



work.displayWork = function() {
	for(var i = 0 ; i < work.jobs.length ; i++) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		$(".work-entry:last").append(formattedEmployer+formattedTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

work.displayWork();



projects.displayProjects = function() {
	for(var i = 0 ; i < projects.projects.length ; i++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);

		for(var j = 0 ;j < projects.projects[i].images.length ; j++) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
			$(".project-entry:last").append(formattedImage);
		}
	}
};

projects.displayProjects();



education.displaySchools = function() {
	for(var i = 0 ; i < education.schools.length ; i++) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].major.join());
		$(".education-entry:last").append(formattedSchoolMajor);

	}

		$("#education").append(HTMLonlineClasses);
	for(var j = 0 ; j < education.schools.length ; j++) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[j].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[j].school);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[j].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[j].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};

education.displaySchools();

$("#mapDiv").append(googleMap);