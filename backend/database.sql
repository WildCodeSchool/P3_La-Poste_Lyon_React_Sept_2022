-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: databasep3
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(120) NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `icon` varchar(300) NOT NULL,
  `position` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historical`
--

DROP TABLE IF EXISTS `historical`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historical` (
  `tuto_id` int NOT NULL,
  `user_id` int NOT NULL,
  KEY `tuto_id` (`tuto_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `historical_ibfk_1` FOREIGN KEY (`tuto_id`) REFERENCES `tuto` (`id`),
  CONSTRAINT `historical_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historical`
--

LOCK TABLES `historical` WRITE;
/*!40000 ALTER TABLE `historical` DISABLE KEYS */;
/*!40000 ALTER TABLE `historical` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `noStarted` tinyint(1) NOT NULL,
  `inProgress` tinyint(1) NOT NULL,
  `finished` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stepper`
--

DROP TABLE IF EXISTS `stepper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stepper` (
  `id` int NOT NULL AUTO_INCREMENT,
  `position` int NOT NULL,
  `content` text NOT NULL,
  `tuto_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tuto_id` (`tuto_id`),
  CONSTRAINT `stepper_ibfk_1` FOREIGN KEY (`tuto_id`) REFERENCES `tuto` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stepper`
--

LOCK TABLES `stepper` WRITE;
/*!40000 ALTER TABLE `stepper` DISABLE KEYS */;
/*!40000 ALTER TABLE `stepper` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tuto`
--

DROP TABLE IF EXISTS `tuto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tuto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(120) NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `introduction_text` varchar(800) NOT NULL,
  `category_id` int NOT NULL,
  `user_id` int NOT NULL,
  `creationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `position` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `tuto_ibfk_2` (`user_id`),
  CONSTRAINT `tuto_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `tuto_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tuto`
--

LOCK TABLES `tuto` WRITE;
/*!40000 ALTER TABLE `tuto` DISABLE KEYS */;
/*!40000 ALTER TABLE `tuto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `profilePicture` varchar(255) DEFAULT NULL,
  `level` int DEFAULT '1',
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `creationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Chloé','Bidau','chloebidau@hotmail.fr','$argon2id$v=19$m=65536,t=5,p=1$LUUgzhG3HKC2h3WiHdA25Q$fVVEe8DVvBO3hYRD9WYc6qeLj/Kdv6dZvIdZatvYFD4','0647067609','https://images.vexels.com/media/users/3/276920/isolated/preview/6bb7928ad0c767ef137af6a3b4d1cbfb-duck-with-sunglasses-flat.png',NULL,1,'2023-01-04 13:28:00'),(2,'Marion','Lalonde','marionmizulalonde@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$s96L8bP5O6Ab6f3FwKuHew$/6oWd2Ku1MAob+EMW+Zq4kYRQLaSCTICEkh2lCxEVDs','0666666666','https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif',NULL,1,'2023-01-04 13:29:49'),(3,'Quentin','Ferrari','ferrari.quentinjunk@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$1R5T86AylyPprWTMB/Up+Q$O8LJzLb9fNJOfb1CpeYt9nPTaHKX7DX+1snTBZyTT9k','0666666667','https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.motor1.com%2Fnews%2F596176%2Fferrari-sf90-stradale-novitec-2022%2F&psig=AOvVaw2ti95tJylwnVFqZDudTWy-&ust=1672925500525000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIi9r6ODrvwCFQAAAAAdAAAAABAE',NULL,1,'2023-01-04 13:32:15'),(4,'Arnaud','Champetier','arnaud.champetier9@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$AXGPipQqFqCGnfvkM2IiTA$zdsuETA0LPq6woZ2LzXwfw75AfUSJj3Hjs9fXNpqrh4','0668008148','https://cdn.discordapp.com/attachments/1048258885544316998/1060139983748464750/DALLE_2023-01-02_23.41.52_-_a_horse_wearing_a_green_t-shirt_smoking_a_cigar_and_chilling_in_front_of_a_swimming_pool_hyper_realistic.png',NULL,1,'2023-01-04 13:33:46'),(5,'Morgan','Mezaache','mezaache.morgan@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$4cXuCobA1HmB1aoMr98bhA$RIBFYHZ1RyJreYyeQW/bmmMB8x1EB+0tnJ4Udd6DEWo','0761167419','https://play-lh.googleusercontent.com/KmDQ1FXpC2YwxVHcp0shE754vIc-tKQ0_cJEUl8mb3Fovw4nwj6IY_S7WkGM3PYA2w=w800-h500-rw',NULL,1,'2023-01-04 13:36:24');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-04 15:18:45
