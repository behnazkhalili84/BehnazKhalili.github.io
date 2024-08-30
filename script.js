function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const translations = {
  en: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      hello: "Hello, I'm",
      fullName: "Behnaz Khalili",
      title: "Full Stack & Mobile Developer",
      downloadCV: "Download CV",
      contactInfo: "Contact Info",
      knowMore:"Get To Know More",
      objective:"Objective",
      resume:"Profile Summary",
      myObj:"Dynamic and results-driven software designer and developer with over nine years of experience in building and maintaining software applications. Proficient in mobile and web development with expertise in React Native, Flutter, Swift UI, and Kotlin Multiplatform. Adept at backend programming using Java, Spring, Python, and various database systems, including IBM DB2 and MongoDB. Strong skills in frontend technologies like HTML, CSS, and JavaScript. Known for exceptional communication and teamwork abilities, effectively collaborating with colleagues and stakeholders to achieve project goals. Demonstrates strong problem-solving skills and adaptability in dynamic environments, ensuring efficient and creative solutions to complex challenges. Proven leadership in managing projects, fostering a positive work environment, and guiding teams towards success. Currently enhancing WordPress skills as a website specialist while pursuing further education in Mobile and Web Application Development.",
      explore:"Explore My",
      key:"Key Qualification",
      skills:"Skills",
      education:"Education",
      education3:"Mobile and Web Application Development ",
      eduloc3:"John Abbott College",
      eduTime3:"October 2023 – Present",
      education2:"Master's in Information Technology - Software Design and Development",
      eduloc2:"Shiraz University",
      eduTime2:"January 2012 - September 2014",
      education1:"Bachelor's in Computer Engineering – Hardware",
      eduloc1:"Central Branch of Tehran Islamic Azad University",
      eduTime1:"September 2004-July 2008",
      experience3:"Software Designer and Developer",
      expTime3:"December 2014 – October 2023 ",
      expeDesc31:"Analyzed requirements and designed, developed, and implemented software applications.",
      expeDesc32:"Assist in designing, coding, and maintaining mobile applications using Java",
      expeDesc33:"Strong experience in working with relational databases and mastery of SQL language, including writing SQL procedures in IBM DB2.",
      expeDes34:"Designed and implemented services using Service-Oriented Architecture (SOA) .",
      expeDesc35:"Collaborated using JIRA and Trello for project management, tracking progress, and coordinating with team members.",
      expeDesc36:"Managed version control using Git, GitHub, and Bitbucket to maintain code integrity.",
      experience2:"Quality Assurance Specialist",
      expTime2:"August 2012 – December 2014",
      expeDesc21:"Develop and execute test plans to validate software functionality and performance against requirements.",
      expeDesc22:"Identify, document, and track defects, collaborating with developers to resolve issues.",
      expeDes23:"Experience with iterative web development and test-driven development ",
      experience1:"Technical Support Specialist            ",
      expTime1:"August 2008 – July 2012",
      expTime4:"July 2024– Present",
      expeDesc11:"Provided production support, debugging, and database management.",
      expeDesc12:"Participated in the improvement and automation of internal processes and development tools.",
      expeDesc41:"Developing and maintaining WordPress sites, themes and plugins",
      expeDesc42:"Manage and update website content, including text, images, and multimedia elements, using the WordPress CMS",
      expeDesc43:"Optimize website performance by implementing best practices for site speed, SEO, and user experience.",
      expeDes13:"Collaborated with a team of software developers, architects, analysts, and quality assurance specialists.",
      inTouch:"Get in Touch",
      contact:"Contact Me",
      frontTitle:"Frontend Skills",
      backTitle:"Backend Skills",
      databaseTitle:"Database Skills",
      mobileTitle:"Mobile Skills",
      generalTitle:"General Skills",
      softSkills:"Soft Skills",
      experienced:"Experienced",
      basic:"Basic",
      intermediate:"Intermediate",
      advanced:"Advanced",
      excellent:"Excellent",
      spedu1:"Specialization in Hardware Engineering",
      spedu2:"Specialization in Software Engineering",
      spedu3:"Focus on Mobile Development",
      activeMember:"Active Member of the Coding Club",
      graduate:"Graduated with Honors",
      behsazanDesc:"Behsazan Mellat is a prominent Iranian company specializing in software development for the banking and financial sectors. It provides innovative solutions like core banking systems, payment platforms, and CRM tools, utilizing advanced technologies such as Java, Spring, and IBM DB2. Known for enhancing digital banking experiences, Behsazan Mellat plays a key role in modernizing Iran’s banking industry.",
      yaasDesc:"Yaas Arghavani Industrial Engineering is an Iranian company that provides engineering solutions, project management, and quality assurance services across various industries. The company focuses on optimizing industrial processes, ensuring high-quality standards, and enhancing operational efficiency for its clients through innovative engineering practices and collaborative project execution.",
      mehreganDesc:"The Mehregan Library in Montreal is a cultural center serving the Iranian community and those interested in Persian culture. It offers a collection of Persian books, periodicals, and multimedia resources, along with cultural and educational programs. The library's website provides information about its resources, events, and services."


      // Add other translations here
  },
  fr: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
      hello: "Bonjour, je suis",
      fullName: "Behnaz Khalili",
      title: "Développeur Full Stack & Mobile",
      downloadCV: "Télécharger CV",
      contactInfo: "Coordonnées",
      knowMore:"En savoir plus",
      objective:"Objectif",
      resume:"Résumé du Profil",
      myObj:"Concepteur et développeur de logiciels dynamique et axé sur les résultats, avec plus de neuf ans d'expérience dans la création et la maintenance d'applications logicielles. Compétent en développement mobile et web, avec une expertise en React Native, Flutter, Swift UI et Kotlin Multiplatform. Expérimenté en programmation backend utilisant Java, Spring, Python et divers systèmes de bases de données, y compris IBM DB2 et MongoDB. Solides compétences en technologies frontend telles que HTML, CSS et JavaScript. Réputé pour ses compétences exceptionnelles en communication et en travail d'équipe, collaborant efficacement avec les collègues et les parties prenantes pour atteindre les objectifs des projets. Démonstration de solides compétences en résolution de problèmes et d'adaptabilité dans des environnements dynamiques, garantissant des solutions efficaces et créatives à des défis complexes. Leadership avéré dans la gestion de projets, la promotion d'un environnement de travail positif et la direction des équipes vers le succès. Actuellement en train de perfectionner ses compétences en WordPress en tant que spécialiste de sites Web tout en poursuivant des études supplémentaires en développement d'applications mobiles et web.",
      explore:"Explorez mon",
      key:"Qualification clé",
      skills:"Compétences",
      education:"Éducation",
      education3:"Développement d'Applications Mobiles et Web (AEC)",
      eduloc3:"CÉGEP John Abbott ",
      eduTime3:"Octobre 2023 – Présent",
      education2:"Master en Technologie de l'Information - Conception et Développement Logiciel",
      eduloc2:"Université de Shiraz",
      eduTime2:"Janvier 2012 - Septembre 2014",
      education1:"Licence en Génie Informatique – Matériel",
      eduloc1:"Université Islamique Azad de Téhéran - Branche Centrale",
      eduTime1:"Septembre 2004-Juillet 2008",
      experience3:"Conceptrice et Développeuse Logicielle",
      expTime3:"Décembre 2014 – Octobre 2023",
      expeDesc31:"Analyse des besoins et conception, développement et mise en œuvre d'applications logicielles",
      expeDesc32:"Participer à la conception, au codage et à la maintenance d'applications mobiles en utilisant Java",
      expeDesc33:"Solide expérience de travail avec des bases de données relationnelles et maîtrise du langage SQL, y compris la rédaction de procédures SQL dans IBM DB2.",
      expeDes34:"Conception et mise en œuvre de services en utilisant l'architecture orientée services (SOA).",
      expeDesc35:"Collaboration avec JIRA et Trello pour la gestion de projet, le suivi des progrès et la coordination avec les membres de l'équipe.",
      expeDesc36:"Gestion du contrôle de version en utilisant Git, GitHub et Bitbucket pour maintenir l'intégrité du code.",
      experience2:"Spécialiste en Assurance Qualité",
      expTime2:"Août 2012 – Décembre 2014",
      expeDesc21:"Développement et exécution de plans de test pour valider la fonctionnalité et les performances des logiciels par rapport aux exigences.",
      expeDesc22:"Identification, documentation et suivi des défauts, en collaboration avec les développeurs pour résoudre les problèmes.",
      expeDes23:"Expérience en développement web itératif et développement piloté par les tests.",
      experience1:"Spécialiste en Support Technique",
      expTime1:"Août 2008 – Juillet 2012",
      expTime4:"Juillet 2024 – Présent",
      expeDesc11:"Support de production, débogage et gestion de bases de données.",
      expeDesc12:"Participation à l'amélioration et à l'automatisation des processus internes et des outils de développement.",
      expeDes13:"Collaboration avec une équipe de développeurs logiciels, d'architectes, d'analystes et de spécialistes en assurance qualité. ",
      expeDesc41:"Développer et maintenir des sites WordPress, des thèmes et des plugins.",
      expeDesc42:"Gérer et mettre à jour le contenu du site web, y compris les textes, les images et les éléments multimédias, en utilisant le CMS WordPress.",
      expeDesc43:"Optimiser les performances du site web en mettant en œuvre les meilleures pratiques en matière de vitesse de chargement, de référencement (SEO) et d'expérience utilisateur.",
      inTouch:"Entrer en contact",
      contact:"Contactez-moi",
      frontTitle:"Compétences Frontend",
      backTitle:"Compétences Backend",
      databaseTitle:"Compétences en bases de données",
      mobileTitle:"Compétences Mobiles",
      generalTitle:"Compétences Générales",
      softSkills:"Compétences Douces",
      experienced:"Expérimenté",
      basic:"Basique",
      intermediate:"Intermédiaire",
      advanced:"Avancé",
      excellent:"Excellent",
      spedu1:"Spécialisation en Ingénierie Matérielle",
      spedu2:"Spécialisation en Ingénierie Logicielle",
      spedu3:"Focus sur le Développement Mobile",
      activeMember:"Membre actif du club de codage",
      graduate:"Diplômé avec mention",
      behsazanDesc:"Behsazan Mellat est une entreprise iranienne de premier plan spécialisée dans le développement de logiciels pour les secteurs bancaire et financier. Elle propose des solutions innovantes telles que des systèmes bancaires de base, des plateformes de paiement et des outils de CRM, en utilisant des technologies avancées comme Java, Spring et IBM DB2. Connue pour l'amélioration des expériences bancaires numériques, Behsazan Mellat joue un rôle clé dans la modernisation de l'industrie bancaire en Iran.",
      yaasDesc:"Yaas Arghavani Industrial Engineering est une entreprise iranienne qui fournit des solutions d'ingénierie, de gestion de projets et d'assurance qualité dans divers secteurs industriels. L'entreprise se concentre sur l'optimisation des processus industriels, la garantie de normes de qualité élevées et l'amélioration de l'efficacité opérationnelle pour ses clients grâce à des pratiques d'ingénierie innovantes et à une exécution collaborative des projets.",
      mehllatDesc:"La Banque Mellat est l'une des plus grandes banques privées d'Iran, offrant une gamme complète de services financiers, y compris les services de détail, les services bancaires aux entreprises et les services bancaires d'investissement. Créée pour soutenir la croissance économique, la Banque Mellat est connue pour son vaste réseau d'agences, ses solutions bancaires numériques innovantes et son fort engagement envers le service client, ce qui en fait un acteur clé du secteur financier iranien.",
      mehreganDesc:"La Bibliothèque Mehregan à Montréal est un centre culturel dédié à la communauté iranienne et à ceux intéressés par la culture persane. Elle propose une collection de livres, périodiques et ressources multimédias en persan, ainsi que des programmes culturels et éducatifs. Le site web de la bibliothèque fournit des informations sur ses ressources, événements et services."
      // Add other translations here
  },
};

function changeLanguage(language) {
  document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      element.textContent = translations[language][key];
  });
  const downloadButton = document.querySelector(".btn.btn-color-2");
  if (language === "en") {
      downloadButton.onclick = () => window.open('./assets/resume-example.pdf');
  } else if (language === "fr") {
      downloadButton.onclick = () => window.open('./assets/resume-fr-example.pdf');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  changeLanguage("en"); // Load English by default
});

