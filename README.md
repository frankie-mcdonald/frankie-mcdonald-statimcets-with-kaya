St'at'imcets with Kaya

Overview
This is an app to teach the St'at'imc language, with learning resources with spelling and sound bites to hear the correct pronuncitation. Followed up with skill testing questions at the end of each lesson. These lessons will go from easy to hard with each users progress tracked. (something similar to duolingo).

Problem Space
I have found that there aren't enough language resources for the St'at'imc nation. I feel that we need more fun ways to learn as we enter a digital age where most people are online and learn best given a challenge.

User Profile
Anyone who wants to learn the St'at'imc language. It can also be used as a teaching tool in schools in the St'at'imc nation.

Features
List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe how these features are implemented, only what needs to be implemented.

---User registration and authentication--- -As a user, I want to create an account so that I can save my progress and access it across devices. -As a user, I want to log in securely to access my personalized data. -As a user, I want to reset my password in case I forget it.

---Vocabulary Learning--- -As a user, I want to browse vocabulary words categorized by topics (e.g., greetings, animals, numbers) so that I can focus on areas of interest. -As a user, I want to hear native pronunciations of words to improve my speaking skills. -As a user, I want to see example sentences using vocabulary words so I can understand their context.

---Learning Modules--- -As a user, I want to access interactive lessons that teach me the basics of St'at'imcets so I can learn at my own pace. -As a user, I want lessons to include quizzes and exercises to reinforce my learning. -As a user, I want lessons to build on previous ones to provide a structured learning path.

---Progress tracking--- -As a user, I want to view my learning progress, such as lessons completed, vocabulary learned, and streaks maintained, to stay motivated.

---Gamification--- -As a user, I want to be able to play games to test my knowledge.

Implementation
Tech Stack
I plan on using React, and creating my own database (I couldnt find one for the St'at'imc language unfortunately), I do use First Voices for translations and pronunciations. I also have assets from my previous projects (sound bites, and animation clips for the first few lessons). As for the api, I may have to create my own as well.

APIs
Sitemap
List the pages of your app with brief descriptions. You can show this visually, or write it out.

Landing page -Welcome to learning with Kaya (image with introduction) -Summary of the app -Call to action-button to start learning

User authentication -Login page -Sign up page

Dashboard/Home page -main hub showing word of the day, phrase of the day, button to sign up or login, buttons to go to numbers page, alphabet page, lessons button (which is only available when logged in so we cann track users progress).

Lessons List Displays a list of all available lessons. Content: Lesson titles, brief descriptions, and completion status. Lesson Details Description: An interactive learning page for a specific lesson. Content: Text, audio, and interactive exercises (e.g., multiple-choice, drag-and-drop).

Mockups
Data
Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out.

-A User interacts with multiple Lessons, Vocabulary, and Exercises. -A Lesson contains multiple Vocabulary and Exercises. -Vocabulary can exist in multiple Lessons and Exercises. -Progress tracks the relationship between a User, Lessons, and Vocabulary.

Endpoints
List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

---User authentication--- POST/api/auth/register Register a new user Parameters (username, email, password)

POST/api/auth/login Login an existing user Parameters (email, password)

---Vocabulary--- GET/api/vocabulary Retrieve a list of vocabulary words and their meanings. Parameters (category(ie, greetings, numbers, animals, etc))

---Lessons--- GET/api/lessons Retrieve all available lessons for vocabulary being learned.

GET/api/lessons/:id Retrieve details of a specific lesson Parameters (id)

---Progress Tracking--- GET /api/progress/:userId Retrieve a users progress Parameters (userId)

POST /api/progress Update a users progress Parameters (userId, lessonId,)

Roadmap
Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date.

---January 12-17 LAST WEEK--- Work on pages and their functionality. backend to make sure users can login, ---January 5-11 --- Create databases and api, design pages, focus on at least 4 lessons and vocabulary sections (numbers, animals, greetings, and letter pronunciation)

Future Implementations
Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.
