export const projectList = [{
    name: 'StatisGoat',
    imgPath: '../../public/images/StatisGoat.png',
    summary: 'Designed for sports bettors and passionate fans of the beautiful game, StatisGoat will attempt to centralize the resources users need to make reliable, informed predictions on matches from Europe’s' +
        'most talented leagues.Lineup displays and player- specific stat visualizations will inspire users to challenge their bias and make scientific predictions on match outcomes and events.Comparing these predictions' +
        'to those of StatisGoat’s human - inspired machine learning algorithms will once again push users to challenge their understanding of the game and integrate what their predictions might have failed to consider.' +
        'With their updated knowledge, users can engage in passionate discussions about their predictions, or the ones StatisGoat provides them, or head over to their sports book of choice and more accurately evaluate' +
        'which bets are the best value for money.',
    technologies: 'C#, JavaScript, HTML/CSS, Python, Bootstrap, PostgreSQL',
    github: "https://github.com/Tyler2440/StatisGoat",
},
{
    name: 'Multiplayer Tank Video Game',
    imgPath: '../../public/images/Tanks.png',
    summary: 'Created with Visual Studio\'s Console Application, I was in a team of 2 to create an online video game where the main goal is to control a tank to win the game by destroying other people\'s tanks. It' +
        'featured shooting, driving around the map, and different powerups to help you win the game.\n This project involved two main aspects: the client, and the server. The client was built via a console application that' +
        'took an ip and a password to connect to a given server, then user\'s inputs to control their tank in the game. Every frame (~17 ms) the screen would refresh, updating the view of new powerups, where other tanks were,' +
        'and any changes to the map. The server was responsible for hosting each game server that users hosted as well as updating each client with the new information for each frame.',
    technologies: 'C#, JSON',
    github: "https://github.com/Tyler2440/Multiplayer-Tank-Game",
},
{
    name: 'Cooperative Spreadsheet',
    imgPath: '../../public/images/CoopSpreadsheet.png',
    summary: 'Created in a team of 5, I worked on both the server and client-side applications for a cooperative spreadsheet appliation. This application allows users to host or join a server that contained one or ' +
    'many spreadsheets that users could edit or create with other users. When launching the application, the user has the ability to select a server to join or to create their own. In either case, the user can ' +
    'create/join a spreadsheet that other users are connected to and seamlessly edit the spreadsheet with other users. If a user wants to save the spreadsheet for themselves or upload their own, the user can select ' +
    'the option in the dropdown to perform those actions.\n In this project, it consisted of two major aspects: the client and the server. The client was in charge of allowing users to connect to a server as well ' +
    'as variety of options like editing, saving, or creating spreadsheets. With each edit to a spreadsheet, the client would do a variety of safety checks to ensure that the move would not invalidate any cells ' +
    'of the spreadsheet, of which would invalidate the server\'s version of the spreadsheet as well as anyone\'s who is connected to it. If the move is valid, the client sends the operation to the server to update ' +
    'the spreadsheets of other users. The server handled many operations: joining, leaving, editing, and saving, among other operations to ensure seamless transitions between different servers and spreadsheets ' +
    'hosted in each server. The client was written entirely in C#, while the server was written entirely in C++.',
    technologies: 'C#, C++',
    github: "https://github.com/Tyler2440/Coop-Spreadsheet",
},
{
    name: 'TA Application Website',
    imgPath: '../../public/images/TAApplication.png',
    summary: 'Created in a team of 2, I worked to create a TA Application website that allowed users from administrators to professors to students to create, edit, and administor student applications to become TA. ' +
    'When signed in as a student, the student has the ability to browse every course accepting applications to become a TA, along with course details and offerings. From the options, a student can apply to become ' +
    'a TA by transferring their information from their profile, selecting which oferrings they want to apply for, and when they can work during the week. Professors then have the ability to select students they ' +
    'want to be the TA for the courses they offer. Administrators have the ability to add, remove, and edit courses offered, create/remove professor and student profiles, as well as other administrative abilities.' +
    '\n In this project, it consisted of two major aspects: the front-end and the back-end. The front-end was all developed with HTML/CSS and JavaScript while the back-end comprised of C#, SQL, LINQ, and deployment ' +
    'on AWS. The C# helped manage the regular back-end of web applications, but also allowed easy access to updating the databases that helped store information for the project.',
    technologies: '.NET, C#, HTML/CSS, JavaScript, SQL, Bootstrap, AWS, LINQ',
    github: "https://github.com/Tyler2440/TA-Application",
},
]