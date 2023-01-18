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

INSERT INTO `tuto` VALUES 
(1,'Les étapes de la connexion','Découvrez les étapes de la connexion à internet','<p>Vous trouverez dans ce tutoriel les étapes nécessaires de la connexion à internet.</p><p>Il s’agit ici d’un tutoriel très général qui vous donnera une vue d’ensemble des étapes à réaliser.</p><p><br></p><p><u style=\"color: rgb(0, 61, 165);\">Les pré-requis :</u></p><ul><li>Un appareil compatible (smartphone, tablette, ordinateur etc.)</li><li>Un modem, ou routeur d’accès à internet (fourni par votre fournisseur d’accès)</li></ul><p><br></p>',1,'2023-01-04 19:02:57',1,1,0,0),
(2,'L\'utilisation du numérique dans la vie courante','Découvrez l\'apport du numérique au quotidien','<p>L’utilisation du numérique se fait au quotidien de nos jours. Mais à quoi celui-ci sert-il ? Dans ce tutoriel nous vous aiguillerons sur toutes les possibilités qu’offre le numérique !</p><p><br></p><p><u style=\"color: rgb(0, 61, 165);\">Les pré-requis :</u></p><ul><li>Aucun</li></ul><p><br></p>',2,'2023-01-16 21:11:00',1,1,0,0),
(3,'Le B.A.-BA du smartphone','<p>Apprenez à connaître votre smartphone</p>','<p>Ce tutoriel vous guidera étape par étape pour apprendre à utiliser les fonctionnalités de base de votre téléphone, telles que passer et répondre à des appels, envoyer des messages et accéder à d\`autres applications.</p><p><br></p><p><u style=\"color: rgb(0, 61, 165);\">Les pré-requis :</u></p><ul><li>Un smartphone ou une tablette “cellulaire”</li></ul><p><br></p>',12,'2023-01-16 21:18:17',NULL,1,0,0),
(4,'Le B.A.-BA de l’ordinateur','<p>Découvrez l\'essentiel de l\'ordinateur</p>','<p>Ce tutoriel vous guidera étape par étape pour apprendre à utiliser les fonctionnalités de base de votre ordinateur.</p><p><br></p><p><u style=\"color: rgb(0, 61, 165);\">Les pré-requis :</u></p><ul><li>Un ordinateur</li></ul><p><br></p>',3,'2023-01-16 21:21:56',NULL,1,0,0),
(5,'La sécurité et le numérique','<p>Parlons \"sécurité\"</p>','<p>La sécurité est importante dans la vie de tous les jours, dans le monde réel ou en ligne ! Découvrez dans ce tutoriel quelques éléments sur lesquels il est important d’être attentif.</p><p><br></p><p><u style=\"color: rgb(0, 61, 165);\">Les pré-requis :</u></p><ul><li>Aucun</li></ul><p><br></p>',11,'2023-01-16 21:25:43',NULL,1,0,0),
(6,'Le Pix','<p>Découvrez le Pix ! </p>','<p>Le Pix est un site qui vous permet d’évaluer votre niveau de maîtrise du numérique mais aussi de progresser et de passer des certifications !</p><p><br></p><p><u style=\"color: rgb(0, 61, 165);\">Les pré-requis :</u></p><ul><li>ordinateur</li><li>connexion internet</li></ul><p><br></p>',5,'2023-01-16 21:35:05',NULL,1,0,0),(7,'Se connecter à un wifi public','<p>Comment accéder à un wifi public</p>','<p>Les points d\'accès à des WIFI publics vous permettent d\'accéder à internet de manière simple,</p><p>et le plus souvent gratuit ! </p><p><br></p><p><u style=\"color: rgb(0, 61, 165);\">Les pré-requis :</u></p><ul><li>ordinateur</li><li>smartphone</li><li>tablette</li></ul>',1,'2023-01-16 21:46:14',NULL,1,0,0),(8,'France Connect','<p>France Connect vous permets d\'accéder aux diverses applications du service public</p>','<p>Afin d\'accéder aux diverses applications du service public, il existe France Connect ! </p><p><br></p><p><u style=\"color: rgb(0, 61, 165);\">Les pré-requis : </u></p><ul><li>Une connexion internet</li><li>Un appareil connecté</li></ul>',1,'2023-01-16 21:55:48',NULL,1,0,0),(9,'Oh non ! Je suis une erreur','<p>Je ne devrais pas être ici</p>','<p>Cette introduction est bien trop courte ...</p>',5,'2023-01-16 22:00:05',NULL,1,0,0);

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

INSERT INTO `user` (firstname, lastname, email, hashedPassword, phone, profilePicture, level, admin, creationDate) VALUES  ('Chloé','Bidau','chloebidau@hotmail.fr','$argon2id$v=19$m=65536,t=5,p=1$LUUgzhG3HKC2h3WiHdA25Q$fVVEe8DVvBO3hYRD9WYc6qeLj/Kdv6dZvIdZatvYFD4','0647067609','https://images.vexels.com/media/users/3/276920/isolated/preview/6bb7928ad0c767ef137af6a3b4d1cbfb-duck-with-sunglasses-flat.png',0,1,'2023-01-04 13:28:00'),('Marion','Lalonde','marionmizulalonde@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$s96L8bP5O6Ab6f3FwKuHew$/6oWd2Ku1MAob+EMW+Zq4kYRQLaSCTICEkh2lCxEVDs','0666666666','https://media1.giphy.com/media/AouTvf6gYZpLAIUcpC/giphy.gif?cid=ecf05e47a3zvu2ojmmvm4oja26hzkwq7t6uaabvb833w4bxx&rid=giphy.gif&ct=g',0,1,'2023-01-04 13:29:49'),('Quentin','Ferrari','ferrari.quentinjunk@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$1R5T86AylyPprWTMB/Up+Q$O8LJzLb9fNJOfb1CpeYt9nPTaHKX7DX+1snTBZyTT9k','0666666667','https://media0.giphy.com/media/eK12uCsrAh4wmTXejp/giphy.gif?cid=ecf05e47yp2jb2c90v1znti9xuxykvfvvoucxe60miudlpfu&rid=giphy.gif&ct=g',0,1,'2023-01-04 13:32:15'),('Arnaud','Champetier','arnaud.champetier9@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$AXGPipQqFqCGnfvkM2IiTA$zdsuETA0LPq6woZ2LzXwfw75AfUSJj3Hjs9fXNpqrh4','0668008148','https://cdn.discordapp.com/attachments/1048258885544316998/1060139983748464750/DALLE_2023-01-02_23.41.52_-_a_horse_wearing_a_green_t-shirt_smoking_a_cigar_and_chilling_in_front_of_a_swimming_pool_hyper_realistic.png',0,1,'2023-01-04 13:33:46'),('Morgan','Mezaache','mezaache.morgan@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$4cXuCobA1HmB1aoMr98bhA$RIBFYHZ1RyJreYyeQW/bmmMB8x1EB+0tnJ4Udd6DEWo','0761167419','https://media1.giphy.com/media/OzLUx50KPnlio/giphy.gif?cid=ecf05e47aj6wltyxb920ib7rykyacbo2gr7e9ylya4e3ap9n&rid=giphy.gif&ct=g',0,1,'2023-01-04 13:36:24'),('toto','toto','toto@toto','$argon2id$v=19$m=65536,t=5,p=1$ZsWbC2zbDPLihAEr9yZkYA$vZOhroy/wQKhIcSGIdLy3mNqSYxd0LpjCVwhY9k1Qm4','1234567890',NULL,1,0,'2023-01-10 15:27:36'),
('Jane','Austen','janeausten@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$4cXuCobA1HmB1aoMr98bhA$RIBFYHZ1RyJreYyeQW/bmmMB8x1EB+0tnJ4Udd6DEWo','1234567890',NULL,1,0,'2023-01-10 15:27:36'),
('Emilie','Bronte','emiliebronte@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$4cXuCobA1HmB1aoMr98bhA$RIBFYHZ1RyJreYyeQW/bmmMB8x1EB+0tnJ4Udd6DEWo','1234567890',NULL,1,0,'2023-01-10 15:27:36');

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
  `positionStep` int NOT NULL,
  `content` varchar(10000) NOT NULL,
  `tuto_id` int,
  FOREIGN KEY (tuto_id) REFERENCES tuto(id)
);

INSERT INTO `stepper` (positionStep, content, tuto_id) VALUES 
(1,'<p><strong style=\"color: rgb(0, 61, 165);\">💻 Étape 1 - Appareils de connexion</strong></p><p><br></p><p>Assurez-vous de disposer d\'un appareil compatible avec internet, comme un <strong>ordinateur</strong>, une <strong>tablette</strong> ou un <strong>smartphone</strong>.</p><p>Vous aurez également besoin d\'un modem ou d\'un routeur qui sera connecté à votre appareil et à votre ligne téléphonique ou à votre connexion haut débit (par exemple, une connexion fibre optique).</p><p>Si vous ne disposez pas de ces équipements, vous devrez les acheter ou les louer auprès de votre fournisseur de services internet.</p>',1),(2,'<p><strong style=\"color: rgb(0, 61, 165);\">🌎 Étape 2 - Se connecter</strong></p><p><br></p><p>Connectez votre appareil à votre modem ou à votre routeur en utilisant un câble Ethernet ou en utilisant le wifi.</p><p>Si vous utilisez le wifi, assurez-vous que votre appareil est configuré pour se connecter au réseau wifi de votre modem ou de votre routeur.</p>',1),(3,'<p><strong style=\"color: rgb(0, 61, 165);\">✅ Étape 3 - Vérifier sa connexion</strong></p><p><br></p><p>Ouvrez votre navigateur internet (par exemple, Google Chrome, Mozilla Firefox ou Safari) et entrez l\'adresse d\'un site web dans la barre d\'adresse. Si vous parvenez à accéder au site web, cela signifie que vous êtes connecté à internet ! <span style=\"color: rgb(0, 61, 165);\">Félicitations</span> !</p><p>Si vous rencontrez des problèmes de connexion, assurez-vous que votre modem ou votre routeur est allumé et que les câbles sont correctement branchés. Vous devriez également vérifier que vous avez bien souscrit à un abonnement internet auprès de votre fournisseur de services internet.</p>',1),(4,'<p><strong style=\"color: rgb(0, 61, 165);\">🛠️ Étape 4 - Configuration nécessaire</strong></p><p><br></p><p>Si vous ne parvenez toujours pas à vous connecter à internet, vous devrez peut-être configurer votre connexion. Pour ce faire, ouvrez les paramètres de votre appareil et accédez à la section \"<strong>Connexion à internet</strong>\" ou \"<strong>Réseau</strong>\".</p><p>Vous devriez y trouver des options pour configurer votre connexion wifi ou Ethernet. Suivez les instructions à l\'écran pour configurer votre connexion. Si vous rencontrez toujours des problèmes, vous devriez contacter votre fournisseur de services internet pour obtenir de l\'aide.</p>',1),(1,'<p><strong style=\"color: rgb(0, 61, 165);\">?🗣️ Étape 1 - Communiquer avec vos proches</strong></p><p><br></p><p>Vous pouvez utiliser le numérique pour communiquer avec vos proches, que ce soit par email, par message instantané ou en utilisant des applications de messagerie comme WhatsApp ou Messenger !</p><p>Vous pouvez également utiliser les réseaux sociaux pour rester en contact avec vos amis et votre famille et partager des photos et des vidéos.</p><p><br></p><p><em style=\"color: rgb(0, 61, 165);\">Vous retrouverez d’ailleurs tous les tutoriels nécessaires pour communiquer pour partager vos photos !</em></p>',2),(2,'<p><strong style=\"color: rgb(0, 61, 165);\">ℹ️ Étape 2 - Accéder à l’information</strong></p><p><br></p><p>Vous pouvez utiliser le numérique pour accéder à des informations sur n\'importe quel sujet, que ce soit pour vos loisirs ou pour votre travail.</p><p>Vous pouvez utiliser un moteur de recherche comme Google pour trouver des articles, des vidéos ou des images sur un sujet qui vous intéresse.</p><p>Attention toutefois à vérifier vos sources, on trouve de tout sur internet !</p>',2),(3,'<p><strong style=\"color: rgb(0, 61, 165);\">🛒 Étape 3 - Faire des achats en ligne</strong></p><p><br></p><p>Le numérique peut vous permettre d’acheter des produits et des services en ligne, que ce soit sur un site de vente en ligne comme Amazon ou sur un site de votre magasin local. Vous pouvez également utiliser votre smartphone pour payer vos achats en magasin en utilisant des applications de paiement mobile comme Google Pay ou Apple Pay.</p>',2),(4,'<p><strong style=\"color: rgb(0, 61, 165);\">📁 Étape 4 - Gérer votre quotidien</strong></p><p><br></p><p>Vous pouvez utiliser le numérique pour gérer votre vie quotidienne, que ce soit en utilisant un calendrier pour planifier vos rendez-vous ou en utilisant des applications de suivi de santé pour suivre votre activité physique et votre alimentation.</p><p>Vous pouvez également utiliser des applications de gestion de budget pour suivre vos dépenses et économiser de l\'argent.</p><p>Encore mieux ! désormais beaucoup de services publics proposent des applications disponibles afin de gérer vos droits, vos factures, vos impôts etc. Ils sont d’ailleurs de plus en plus courant et apparaissent comme la voie la plus rapide pour interagir avec les différents services.</p>',2),(1,'<p><strong style=\"color: rgb(0, 61, 165);\">📱 Étape 1 - Allumer son appareil</strong></p><p><br></p><p>Allumez votre téléphone en appuyant sur le bouton d\'alimentation, généralement situé sur le côté ou en haut du téléphone.</p><p><em style=\"color: rgb(0, 61, 165);\">N’hésitez pas à consulter la notice de votre appareil !</em></p>',3),(2,'<p><strong style=\"color: rgb(0, 61, 165);\">🔐 Étape 2 - Déverrouiller votre téléphone</strong></p><p><br></p><p>Si vous êtes invité à entrer un code de verrouillage, utilisez le clavier pour le saisir et appuyez sur \"OK\" ou sur \"Entrée\".</p><p><br></p><p><span style=\"color: rgb(0, 61, 165);\">Attention</span> : retenez votre code de verrouillage car celui-ci vous sera demandé à chaque redémarrage de votre appareil !</p>',3),(3,'<p><strong style=\"color: rgb(0, 61, 165);\">📞 Étape 3 - Passer un appel</strong></p><p><br></p><p>Vous êtes maintenant sur l’écran d’accueil de votre téléphone.</p><p>Pour passer un appel, appuyez sur l\'icône \"Phone\" ou \"Appel\" sur l\'écran d\'accueil. Cela vous amènera à l\'écran des contacts.</p><p>Généralement l’icône est représentée par un téléphone</p>',3),(4,'<p><strong style=\"color: rgb(0, 61, 165);\">⌨️ Étape 4 - L’utilisation du clavier</strong></p><p><br></p><p>Utilisez le clavier qui est apparu pour entrer le nom ou le numéro de téléphone de la personne à laquelle vous souhaitez parler, puis appuyez sur \"Appeler\" ou sur l\'icône de téléphone.</p>',3),(5,'<p><strong style=\"color: rgb(0, 61, 165);\">☎️ Étape 5 - Répondre à un appel</strong></p><p><br></p><p>Pour répondre à un appel entrant, appuyez sur le bouton \"<strong>Répondre</strong>\" ou sur l\'icône de téléphone. Pour mettre fin à l\'appel, appuyez sur le bouton \"<strong>Terminer</strong>\" ou sur l\'icône de téléphone.</p><p><br></p><p><span style=\"color: rgb(0, 61, 165);\">Attention</span>, certains téléphone demande de faire glisser l’icône pour raccrocher. Pour ceci, vérifier la notice de votre appareil.</p>',3),(6,'<p><strong style=\"color: rgb(0, 61, 165);\">✉️ Étape 6 - Envoyer un message</strong></p><p><br></p><p>Pour envoyer un message texte, appuyez sur l\'icône \"Messages\" ou \"SMS\" sur l\'écran d\'accueil. Sélectionnez le contact à qui vous souhaitez envoyer le message et utilisez le clavier pour écrire votre message.</p><p><br></p><p>Appuyez sur \"<strong>Envoyer</strong>\" pour envoyer le message.</p>',3),(1,'<p><strong style=\"color: rgb(0, 61, 165);\">💻 Étape 1 - Allumer son appareil</strong></p><p><br></p><p>Allumez votre ordinateur en appuyant sur le bouton d\'alimentation, généralement situé à l\'arrière ou sur le côté de l\'ordinateur.</p><p><br></p><p><em>N’hésitez pas à consulter la notice de votre appareil !</em></p>',4),(2,'<p><strong style=\"color: rgb(0, 61, 165);\">? Étape 2 - Déverrouiller votre ordinateur</strong></p><p><br></p><p>Si vous êtes invité à entrer un nom d\'utilisateur et un mot de passe, utilisez le clavier pour les saisir et appuyez sur \"Entrée\" ou sur \"OK\".</p><p><br></p><p><u style=\"color: rgb(0, 61, 165);\">Attention</u> : retenez votre nom d’utilisateur et mot de passe car celui-ci vous sera demandé à chaque redémarrage de votre appareil !</p>',4),(3,'<p><strong style=\"color: rgb(0, 61, 165);\">🖱️ Étape 3 - L’utilisation de la souris ou du pad</strong></p><p><br></p><p>Vous êtes maintenant sur l\'écran d\'accueil de votre ordinateur.</p><p>Vous pouvez utiliser la souris pour cliquer sur les icônes et les programmes que vous souhaitez ouvrir. Si votre ordinateur ne dispose pas de souris et est portable, vous pourrez utiliser le “pad” devant vous pour vous déplacer.</p><p><br></p><p>L’exercice peut sembler difficile dans un premier temps ! Pas d’inquiétude, allez-y à votre rythme.</p>',4),(4,'<p><strong style=\"color: rgb(0, 61, 165);\">💡 Étape 4 - Découvrir à son rythme</strong></p><p><br></p><p>Beaucoup de fonctionnalités sont disponibles sans vous connecter à internet.</p><p>Parcourez votre ordinateur à votre rythme… Vous y découvrirez une calculatrice, des dossiers, une corbeille etc…</p><p><br></p><p>Amusez-vous en découvrant !</p>',4),(5,'<p><strong style=\"color: rgb(0, 61, 165);\">🔍 Étape 5 - Rechercher des informations, parcourir le web.</strong></p><p><br></p><p>A partir de cette étape, une connexion à internet est obligatoire !</p><p>Pour ouvrir un navigateur web, comme Google Chrome ou Mozilla Firefox, cliquez sur l\'icône correspondante sur l\'écran d\'accueil ou sur le bureau</p>',4),(6,'<p><strong style=\"color: rgb(0, 61, 165);\">💻 Étape 6 - Éteindre son ordinateur</strong></p><p><br></p><p>Pour éteindre votre ordinateur, cliquez sur le bouton \"Démarrer\" en bas à gauche de l\'écran, puis sélectionnez \"Eteindre\". Confirmez en cliquant sur \"<strong>Eteindre</strong>\" lorsque vous y êtes invité.</p>',4),(1,'<p><strong style=\"color: rgb(0, 61, 165);\">🦹‍♂️ Les logiciels malveillants </strong></p><p><br></p><p>Les virus informatiques et les logiciels espions peuvent endommager votre ordinateur ou voler vos informations personnelles, comme vos mots de passe ou vos données financières.</p><p>Faites toujours attention à ce que vous téléchargez, vérifiez la source de vos téléchargements.</p><p>Ne cliquez pas sur des liens ou téléchargez des fichiers de sources douteuses.</p><p>Vous pouvez utiliser un logiciel de sécurité pour protéger votre ordinateur contre les virus et les logiciels espions.</p>',5),(2,'<p><strong style=\"color: rgb(0, 61, 165);\">🛡️ Protégez vos données personnelles</strong></p><p><br></p><p>Les cybercriminels peuvent essayer de vous tromper en vous envoyant des emails ou en créant des sites web qui semblent légitimes, mais qui sont en réalité des pièges pour voler vos informations.</p><p>Vos informations personnelles peuvent être utilisées à mauvais escient si elles tombent entre de mauvaises mains. Par exemple, vos données financières pourraient être utilisées pour faire des achats frauduleux ou votre identité pourrait être utilisée pour commettre des crimes.</p><p>Utilisez une connexion sécurisée (avec un cadenas à côté de l\'URL) lorsque vous effectuez des transactions financières ou que vous entrez des informations sensibles en ligne.</p><p>Configurez les paramètres de confidentialité de vos comptes de réseaux sociaux pour limiter les informations que vous partagez en ligne.</p><p><br></p><p><span style=\"color: rgb(0, 61, 165);\">Attention</span> : Il ne faut jamais transmettre votre mot de passe à des inconnus. Vérifiez les expéditeurs des mails et en cas de doute, n’hésitez pas à contacter les services compétents.</p>',5),(1,'<p><strong style=\"color: rgb(0, 61, 165);\">Étape 1 - Créez un compte</strong></p><p><br></p><p>Vous pouvez créez votre compte personnel, mesurez et améliorez votre niveau de maîtrise à partir de défis apprenants et ludiques.</p><p>Ce contenu est totalement gratuit ! Profitez-en</p>',6),(2,'<p><strong style=\"color: rgb(0, 61, 165);\">Étape 2 - Progressez à votre rythme</strong></p><p><br></p><p>Développez des compétences numériques fondamentales pour votre vie personnelle, professionnelle et citoyenne.</p>',6),(3,'<p><strong style=\"color: rgb(0, 61, 165);\">Étape 3 - Valoriser vos compétences</strong></p><p><br></p><p>Vous pouvez passer la Certification Pix (éligible au CPF) et valorisez vos compétences numériques sur votre CV.</p>',6),(1,'<p><strong style=\"color: rgb(0, 61, 165);\">ℹ️ Qu\'est-ce qu\'un hotspot WiFi  ?</strong></p><p><br></p><p>Un hotspot est un point d\'accès. J<span style=\"background-color: rgb(255, 255, 255); color: rgb(32, 33, 36);\">ouant le rôle de relais, il permet de se connecter au réseau Internet. Les hotspots WiFi peuvent être privés ou publics, et payants ou gratuits.</span></p>',7),(2,'<p><strong style=\"color: rgb(0, 61, 165);\">🆓 Pourquoi se connecter à un hotspot public ?</strong></p><p><br></p><p><span style=\"background-color: rgb(255, 255, 255); color: black;\">L’avantage de ce type de réseau est que son utilisation est </span><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 61, 165);\">gratuite</span><span style=\"background-color: rgb(255, 255, 255); color: black;\"> !  ou relativement peu chère (moyennant un passage dans un lieu commercial par exemple, où l\'inscription à une newsletter).</span></p>',7),(3,'<p><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 61, 165);\">? Les limites des connexions gratuites et publiques </strong></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(86, 99, 103);\">&nbsp;</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: black;\">Cela comporte toutefois de nombreux désagréments. En effet, le&nbsp;</span><strong style=\"background-color: rgb(255, 255, 255); color: black;\">temps de connexion est parfois limité</strong><span style=\"background-color: rgb(255, 255, 255); color: black;\">, de plus la connexion sans fil est souvent assez lente, ce qui peut poser problème dans le cas d’échange de fichiers lourds. Parfois, des coupures interviennent.</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: black;\">Enfin, ces réseaux sont ouverts au plus grand nombre, et sont&nbsp;</span><strong style=\"background-color: rgb(255, 255, 255); color: black;\">assez rarement sécurisés</strong><span style=\"background-color: rgb(255, 255, 255); color: black;\">.</span></p><p><br></p><p><span style=\"background-color: rgb(255, 255, 255); color: black;\">Vous en apprendrez plus en suivant les tutoriels de la catégorie \"</span><a href=\"Sécurité\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(0, 61, 165);\"><strong>Sécurité</strong></a><span style=\"background-color: rgb(255, 255, 255); color: black;\">\"</span></p>',7),(1,'<p><strong style=\"color: rgb(0, 61, 165);\">Étape 1 -  Choisissez le service désiré</strong></p><p><br></p><p>Impots, CAF, Pôle Emploi ? Avant de vous connectez à l\'un de ces services, nous vous invitons à télécharger l\'application adéquat ou à vous rendre sur le site internet dédié.</p>',8),(2,'<p><strong style=\"color: rgb(0, 61, 165);\">Étape 2 - Vous authentifiez</strong></p><p><br></p><p>Prêt à parcourir le site en question ? Lors de votre authentification devrait apparaître le sigle \"France Connect\".</p><p><br></p><p>Choisissez le service grâce auquel vous souhaitez vous connecter. Le monde est bien fait ! Une fois connecté il fera directement le lien avec votre profil utilisateur.</p>',8),(3,'<p><strong style=\"color: rgb(0, 61, 165);\">Un peu de prévention</strong></p><p><br></p><p>Attention à ne pas divulger vos informations à des tierces personnes ! Notamment votre numéro de carte vitale, d\'imposition etc.</p><p><br></p><p>Soyez vigilants ! Et pour en savoir plus, n\'hésitez pas à consulter les tutoriels de la page sécurité ! </p>',8),(1,'<p>J\'ai connu bien mieux comme contenu.</p><p>Puis-je être modifié ?</p>',9),(1,'<p>Chaque étape est importante ! </p>',9);
SET FOREIGN_KEY_CHECKS = 1;
