/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
name: 'Roza Pozhidaeva',
role: 'Junior Front-End Developer',
contacts: {
    mobile: '+7 999 111 11 11',
    email: 'rouzrise@gmail.com',
    github: 'https://github.com/rouzrise',
    // twitter: string (optional),
    location: 'Russia, Moscow'
    },
welcomeMessage: "I'm happy to start career", 
skills: {
    first: '1 skill',
    second: '2 skill'
},
biopic: 'images/fry.jpg',
display: function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    
    
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").prepend(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);

    var formattedFirstSkill = HTMLfirstSkill.replace("%data%", bio.skills.first);
    $("#skills").append(formattedFirstSkill);
    var formattedSecondSkill = HTMLsecondSkill.replace("%data%", bio.skills.second);
    $("#skills").append(formattedSecondSkill);
}
};

bio.display();
////////


