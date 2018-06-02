
var model = {
    //data for bio section
    bio: {
    name: 'Roza Rouzrise',
    role: 'Junior Front-End Developer',
    contacts: {
        mobile: '+7 999 111 11 11',
        email: 'rouz@rouzrise.com',
        github: 'https://github.com/rouzrise',
        // twitter: string (optional),
        location: 'Russia, Moscow'
        },
    welcomeMessage: "I'm happy to start new career", 
    skills: {
        first: '1 skill',
        second: '2 skill'
    },
    biopic: 'images/fry.jpg'
    }
};

var controller = {
    init: function() {
        viewBio.init();
    },

    //gets bio data from model
    getBio: function() {
        return model.bio;
    }
};

var viewBio = {
    init: function() {
        var bio = controller.getBio();

        var header = document.getElementById('header');
        var topContacts = document.getElementById('topContacts');

        //creates role element
        this.HTMLheaderRole = document.createElement('span');
        this.HTMLheaderRole.innerHTML = bio.role; 
        header.prepend(this.HTMLheaderRole);

        //creates name element
        this.HTMLheaderName = document.createElement('h1');
        this.HTMLheaderName.id = "name";
        this.HTMLheaderName.innerHTML = bio.name; 
        header.prepend(this.HTMLheaderName);

        //creates contact list with help of contactGeneric() function
        this.contactGeneric();

        //creates picture element
        this.HTMLbioPic = document.createElement('img');
        this.HTMLbioPic.className = "biopic";
        this.HTMLbioPic.src = bio.biopic;
        header.append(this.HTMLbioPic);

         //creates welcome message element
        this.HTMLwelcomeMsg = document.createElement('span');
        this.HTMLwelcomeMsg.className = "welcome-message";
        header.append(this.HTMLwelcomeMsg);

         //creates 'Skills at a Glance' string
        this.HTMLskillsStart = document.createElement('h3');
        this.HTMLskillsStart.innerHTML = "Skills at a Glance:";
        this.HTMLskillsStart.id = 'skills-h3';
        header.append(this.HTMLskillsStart);

         //creates ul-container for skills elements
        this.HTMLskillsList = document.createElement('ul');
        this.HTMLskillsList.id = 'skills';
        this.HTMLskillsList.className = 'flex-column';
        header.append(this.HTMLskillsList);

        //creates skills elements
        for (var key in bio.skills) {
            var skillItem = document.createElement('li');
            skillItem.className = 'flex-item';
            var skillItemSpan = document.createElement('span');
            skillItemSpan.className = 'white-text';
            skillItemSpan.innerHTML = (bio.skills[key]); //gets skill properties from bio skills object

            skillItem.append(skillItemSpan);
            this.HTMLskillsList.append(skillItem);

        }
    },

    contactGeneric: function() {
        var bio = controller.getBio();

        for (var key in bio.contacts) {
            var topContacts = document.getElementById('topContacts');
            var contactGeneric = document.createElement('li');
            var contactGenericFirstSpan = document.createElement('span');
            var contactGenericSecondSpan = document.createElement('span');

            contactGeneric.className = "flex-item";
            contactGenericFirstSpan.className = "orange-text";
            contactGenericFirstSpan.innerHTML = key; //gets keys from bio contacts object
            contactGenericSecondSpan.className = "white-text";
            contactGenericSecondSpan.innerHTML = bio.contacts[key]; //gets contacts properties from bio contacts object

            contactGeneric.append(contactGenericFirstSpan);
            contactGeneric.append(contactGenericSecondSpan);

            topContacts.append(contactGeneric);    
        }
    }
};

controller.init();
