# "My Personal Website"
#### Video Demo:  <https://www.youtube.com/watch?v=dyLeOZUHnys>
#### Description:

For CS50's final project, I decided to create a personal website for myself, with information about me, my hobbies, my studies and all of the above. The goal of this website was for me to have something to be able to present to others when introducing myself, from day-to-day scenarios up to university applications and formal purposes. Since the final weeks of the course intrigued me, I obviously chose to use HTML, CSS, Javascript and Flask to carry it out, with the first offering me everything I needed for my website setup and the second allowing me to create a login interface. Furthermore, I also chose to use some elements provided with Bootstrap (i.e. the image carousels), further showing how defining the last few weeks of the course were for me. The User Interface (UI) design is heavily inspired by the Supreme website design, given fashion is one of my most significant interests at the time of writing this and I wanted to give a fun "twist" to it. This does not mean, though, that I used any elements directly from that website, since everything is written by me. Before getting into the specifics, now is a good time to note that after the submission of this project into CS50, I plan to purchase my full name's domain (ionaskolonis.com), and adapt the website slightly so I can cheaply host a static version of it available all around the world.

Now for the main features of the website.

Apart from the index / home / landing page (or whatever you wish to call it) and the admin login page, the website contains four main subpages, titled "about me", "project gallery", "CV" and "contact me". As previously mentioned, these cover a variety of different resources and information about me. Before getting into each one and its functionalities, every single page of the website extends a single "layout.html" file. This file contains the header, with the box linking to the homepage and the Javascript coded, constantly updating timestamp, and the footer, with a small decorative copyright label. If the program detects that the user is on the index page, it displays the "admin login" clickable option, and instead of it the "log out" and "view submissions" labels in case the user is already logged in. In terms of the pages of the website themselves, index.html is the simplest of the lot. It features a brief welcome message with information about the website, and below the main menu with separate clickable, hyperlinked buttons for each of the aforementioned four subpages.

Moving on to each subpage, in the order they were listed.

About me:
This is the longest of the four main pages in terms of text amount, and is the first page destined to be seen by the website visitor. It contains a Bootstrap image carousel with a few pictures showing me and my interests, and 3 bodies of text with information about me. Then, before the footer is a short textbox with hyperlinks linking to other pages, encouraging a more user-friendly experience for a visitor who wants to directly navigate to the following pages without having to return to the home page.

Project Gallery:
This page shows a list of projects I've worked on in the past, with dedicated image carousels and paragraphs showcasing each one. Where it is possible, hyperlinks have been added to the title, as an easy way for the website visitor to view the project shown. The code of this page is very easily adaptable for me to be able to add projects as time passes, and I aim to post everything I work on here.

CV:
As mentioned in my video and introduction, this website is also intented to be sent to formal destinations / universities as a more elaborate substitute of a CV. Subsequently, this means it must include a version of my CV, with sections on my Work Experience, Extracuriccular activities, Language-Computer knowledge and more. Also, the online, interactive nature of this CV allows me to add hyperlinks to whichever entry I want, offering a more dynamic and user-friendly experience as opposed to a traditional piece of paper.

Contact me:
The final of the four main pages is contact me. After the user has viewed everything the website has to offer and learnt about me, the natural thing would be to offer them the opportunity to get in touch with me. This is, obviously, the purpose of this page, and it offers several different solutions, including Email, Gmail, instagram and a contact form, all in one menu. The latter is the most interesting, as clicking the menu item causes a retro-stylised contact form to appear below. The form features a name, email and message field, some of which are compulsory and some not.

Admin interface:
Upon clicking the admin login button in the footer of the home page, the visitor is sent to a very simple form of a login page, featuring a box with a username field, a password field and a log in button. If the user enters the wrong password, an error message flashes at the top of the page and they are denied entry. If the login information is correct, they are automatically redirected to the contact form submissions page. This page shows vertically lists all the contact form entries and the information provided, with the box of such in the same aesthetic as the contact form box. At the top left of each form is a trash can icon allowing the admin to delete an entry. Furthermore, the home page in a logged in state now features "view form submissions"  and "log out" buttons in the footer, instead of the previous "log in" button.

This course was an amazing experience, and I'm so happy to top it off with a website I created myself and can call my own!

### If you wish to view the admin side of the website, here is the information:

### username: ionas_webadmin_01
### password: ionas_websiteadmin_01_09!
