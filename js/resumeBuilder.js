/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Matt");

 var formattedName = HTMLheaderName.replace("%data%", "Matthew Riel");
 $("#header").prepend(formattedName);

 var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");
 $("#header").append(formattedRole);
