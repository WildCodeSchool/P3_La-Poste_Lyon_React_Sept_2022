

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `tuto`;

CREATE TABLE `tuto` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(120) NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `introduction_text` varchar(800) NOT NULL,
  `category_id` int NOT NULL,
  `creationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `position` int DEFAULT NULL,
  `notStarted` tinyint(1) DEFAULT '1',
  `inProgress` tinyint(1) DEFAULT '0',
  `finished` tinyint(1) DEFAULT '0',
  FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
);

INSERT INTO `tuto` VALUES (1,'Les étapes de la connexion','test','Vous trouverez dans ce tutoriel les étapes nécessaires de la connexion à internet. Il s’agit ici d’un tutoriel très général qui vous donnera une vue d’ensemble des étapes à réaliser. Les pré-requis :Un appareil compatible (smartphone, tablette, ordinateur etc.)Un modem, ou routeur d’accès à internet (fourni par votre fournisseur d’accès)',1,'2023-01-04 20:02:57',1,1,0,0);

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL UNIQUE,
  `hashedPassword` varchar(255) NOT NULL,
  `phone` varchar(16) DEFAULT NULL UNIQUE,
  `profilePicture` varchar(255) DEFAULT NULL,
  `level` int NOT NULL DEFAULT 1,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `creationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO `user` (firstname, lastname, email, hashedPassword, phone, profilePicture, level, admin, creationDate) VALUES  ('Chloé','Bidau','chloebidau@hotmail.fr','$argon2id$v=19$m=65536,t=5,p=1$LUUgzhG3HKC2h3WiHdA25Q$fVVEe8DVvBO3hYRD9WYc6qeLj/Kdv6dZvIdZatvYFD4','0647067609','https://images.vexels.com/media/users/3/276920/isolated/preview/6bb7928ad0c767ef137af6a3b4d1cbfb-duck-with-sunglasses-flat.png',0,1,'2023-01-04 13:28:00'),('Marion','Lalonde','marionmizulalonde@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$s96L8bP5O6Ab6f3FwKuHew$/6oWd2Ku1MAob+EMW+Zq4kYRQLaSCTICEkh2lCxEVDs','0666666666','https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif',0,1,'2023-01-04 13:29:49'),('Quentin','Ferrari','ferrari.quentinjunk@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$1R5T86AylyPprWTMB/Up+Q$O8LJzLb9fNJOfb1CpeYt9nPTaHKX7DX+1snTBZyTT9k','0666666667','https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.motor1.com%2Fnews%2F596176%2Fferrari-sf90-stradale-novitec-2022%2F&psig=AOvVaw2ti95tJylwnVFqZDudTWy-&ust=1672925500525000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIi9r6ODrvwCFQAAAAAdAAAAABAE',0,1,'2023-01-04 13:32:15'),('Arnaud','Champetier','arnaud.champetier9@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$AXGPipQqFqCGnfvkM2IiTA$zdsuETA0LPq6woZ2LzXwfw75AfUSJj3Hjs9fXNpqrh4','0668008148','https://cdn.discordapp.com/attachments/1048258885544316998/1060139983748464750/DALLE_2023-01-02_23.41.52_-_a_horse_wearing_a_green_t-shirt_smoking_a_cigar_and_chilling_in_front_of_a_swimming_pool_hyper_realistic.png',0,1,'2023-01-04 13:33:46'),('Morgan','Mezaache','mezaache.morgan@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$4cXuCobA1HmB1aoMr98bhA$RIBFYHZ1RyJreYyeQW/bmmMB8x1EB+0tnJ4Udd6DEWo','0761167419','https://play-lh.googleusercontent.com/KmDQ1FXpC2YwxVHcp0shE754vIc-tKQ0_cJEUl8mb3Fovw4nwj6IY_S7WkGM3PYA2w=w800-h500-rw',0,1,'2023-01-04 13:36:24'),('toto','toto','toto@toto','$argon2id$v=19$m=65536,t=5,p=1$ZsWbC2zbDPLihAEr9yZkYA$vZOhroy/wQKhIcSGIdLy3mNqSYxd0LpjCVwhY9k1Qm4','1234567890',NULL,1,0,'2023-01-10 15:27:36');

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(120) NOT NULL,
  `icon` varchar(300) NOT NULL,
  `position` int NOT NULL
);
INSERT INTO `category` (name, icon, position) VALUES ('Se connecter','src/assets/tutorial-category-img/connected.svg',1),('Vie courante','src/assets/tutorial-category-img/currentlife.svg',2),('Utiliser un ordinateur','src/assets/tutorial-category-img/desktop.svg',3),('Se faire aider','src/assets/tutorial-category-img/getHelped.svg',4),('Aller plus loin','src/assets/tutorial-category-img/going.svg',5),('Mails','src/assets/tutorial-category-img/mails.svg',6),('Médias','src/assets/tutorial-category-img/media.svg ',7),('Messages','src/assets/tutorial-category-img/message.svg',8),('Se déplacer','src/assets/tutorial-category-img/navigate.svg',9),('Naviguer sur internet','src/assets/tutorial-category-img/navigateinternet.svg',10),('Sécurité','src/assets/tutorial-category-img/security.svg',11),('Utiliser son téléphone','src/assets/tutorial-category-img/usephone.svg',12);

DROP TABLE IF EXISTS `historical`;

CREATE TABLE `historical` (
  `tuto_id` int NOT NULL,
  `user_id` int NOT NULL,
  FOREIGN KEY (tuto_id) REFERENCES tuto(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS `stepper`;

CREATE TABLE `stepper` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `position` int NOT NULL,
  `content` varchar(3000) NOT NULL,
  `tuto_id` int DEFAULT NULL,
  FOREIGN KEY (tuto_id) REFERENCES tuto(id)
);

INSERT INTO `stepper` (position, content, tuto_id) VALUES (2,'🌎 Étape 2 - Se connecter. Connectez votre appareil à votre modem ou à votre routeur en utilisant un câble Ethernet ou en utilisant le wifi. Si vous utilisez le wifi, assurez-vous que votre appareil est configuré pour se connecter au réseau wifi de votre modem ou de votre routeur.',1),(1,'💻 Étape 1 - Appareils de connexion Assurez-vous de disposer d\'un appareil compatible avec internet, comme un ordinateur, une tablette ou un smartphone. Vous aurez également besoin d\"un modem ou d\"un routeur qui sera connecté à votre appareil et à votre ligne téléphonique ou à votre connexion haut débit (par exemple, une connexion fibre optique). Si vous ne disposez pas de ces équipements, vous devrez les acheter ou les louer auprès de votre fournisseur de services internet.',1),(3,'✅ Étape 3 - Vérifier sa connexion. Ouvrez votre navigateur internet (par exemple, Google Chrome, Mozilla Firefox ou Safari) et entrez l\'adresse d\'un site web dans la barre d\'adresse. Si vous parvenez à accéder au site web, cela signifie que vous êtes connecté à internet ! Félicitations ! Si vous rencontrez des problèmes de connexion, assurez-vous que votre modem ou votre routeur est allumé et que les câbles sont correctement branchés. Vous devriez également vérifier que vous avez bien souscrit à un abonnement internet auprès de votre fournisseur de services internet.',1),( 4,'🛠️ Étape 4 - Configuration. Si vous ne parvenez toujours pas à vous connecter à internet, vous devrez peut-être configurer votre connexion. Pour ce faire, ouvrez les paramètres de votre appareil et accédez à la section Connexion à internet ou `Réseau`.Vous devriez y trouver des options pour configurer votre connexion wifi ou Ethernet. Suivez les instructions à l\'écran pour configurer votre connexion. Si vous rencontrez toujours des problèmes, vous devriez contacter votre fournisseur de services internet pour obtenir de l\'aide. Pour aller plus loin, découvrez des vidéos en ligne ....',1);

SET FOREIGN_KEY_CHECKS = 1;
