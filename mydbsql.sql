-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: react_app
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `ID_CA` int NOT NULL AUTO_INCREMENT,
  `Nome_Categoria` varchar(256) NOT NULL,
  PRIMARY KEY (`ID_CA`),
  UNIQUE KEY `Nome_Categoria_UNIQUE` (`Nome_Categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (3,'Altro'),(2,'BackEnd'),(1,'FrontEnd'),(4,'IT');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `corso`
--

DROP TABLE IF EXISTS `corso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `corso` (
  `ID_C` int NOT NULL AUTO_INCREMENT,
  `Nome_Corso` varchar(255) DEFAULT NULL,
  `Descrizione_breve` varchar(255) DEFAULT NULL,
  `Descrizione_completa` text,
  `Durata` int DEFAULT NULL,
  `FK_CA` int DEFAULT NULL,
  PRIMARY KEY (`ID_C`),
  KEY `corso_ibfk_1_idx` (`FK_CA`),
  CONSTRAINT `corso_ibfk_1` FOREIGN KEY (`FK_CA`) REFERENCES `categoria` (`ID_CA`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corso`
--

LOCK TABLES `corso` WRITE;
/*!40000 ALTER TABLE `corso` DISABLE KEYS */;
INSERT INTO `corso` VALUES (1,'Introduction to Programming','Basics of coding','Imparate i fondamenti della programmazione utilizzando Python. Non è richiesta alcuna esperienza precedente.',1,2),(2,'Data Science Fundamentals','Data analysis & manipulation','Analisi, manipolazione e visualizzazione dei dati con Python.',2,4),(3,'Web Development','Creating websites','Imparare a costruire e distribuire siti web utilizzando HTML, CSS e JavaScript.',2,1),(4,'Cybersecurity Basics','Protecting digital assets','Introduzione alle pratiche e ai principi di cybersecurity per la salvaguardia delle informazioni online.',1,4),(5,'Artificial Intelligence','AI concepts & applications','Esplorazione dei fondamenti dell\'IA e degli algoritmi di apprendimento automatico.',2,4),(6,'Blockchain Fundamentals','Understanding blockchain','Introduzione alla tecnologia blockchain e alle sue applicazioni in vari campi.',1,4),(7,'Digital Marketing','Online marketing strategies','Imparare le tecniche di marketing digitale, tra cui SEO, email marketing e social media marketing.',1,3),(8,'Graphic Design','Design principles & software','Corso completo di progettazione grafica con Adobe Creative Suite.',2,3),(9,'3D Modeling and Animation','Creating 3D content','Imparare a creare modelli e animazioni 3D con Blender.',2,3),(10,'Entrepreneurship','Starting a business','Guida all\'avvio e alla gestione di una nuova impresa, che copre gli aspetti essenziali dalla pianificazione aziendale alla raccolta di fondi.',1,3),(14,'Java Programming','Basics of coding java','Imparare a codificare in Java, un solido linguaggio di programmazione utilizzato per creare software, applicazioni web e mobili e altro ancora.',2,2),(30,'prova','prova','a',2,2);
/*!40000 ALTER TABLE `corso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruolo`
--

DROP TABLE IF EXISTS `ruolo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ruolo` (
  `ID_G` int NOT NULL AUTO_INCREMENT,
  `TIPOLOGIA` varchar(256) NOT NULL,
  PRIMARY KEY (`ID_G`),
  UNIQUE KEY `TIPOLOGIA_UNIQUE` (`TIPOLOGIA`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruolo`
--

LOCK TABLES `ruolo` WRITE;
/*!40000 ALTER TABLE `ruolo` DISABLE KEYS */;
INSERT INTO `ruolo` VALUES (1,'Admin'),(2,'Docente'),(4,'SuperAdmin');
/*!40000 ALTER TABLE `ruolo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utente`
--

DROP TABLE IF EXISTS `utente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utente` (
  `ID_U` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(255) DEFAULT NULL,
  `Cognome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID_U`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utente`
--

LOCK TABLES `utente` WRITE;
/*!40000 ALTER TABLE `utente` DISABLE KEYS */;
INSERT INTO `utente` VALUES (7,'Simone','De Meis','Simone@icloud.com','b83cb68a006bf684628aaae5775e3794fe4d9ee57bb3d5c9173772b5cd4a4a94'),(8,'Laura','Piazza','laura.piazza@gmail.com','f4dcbb5c2473c1aab6494a9504b5deebea5d02fb50d4127a6d9fccf95b804e0c'),(12,'Cristina','Otto','cri.otto@gmail.com','c052241adb1b1c8e6ac25df66510585fdb91bc7f3c68bc0291c9c9ca02f2d65c'),(14,'Gianni','Rossi','gianni.nove@gmail.com','557578c848208a1e72f7b73330014cfb69518bf8f73d164aaf4a1961f7e76829'),(15,'Lorena','Salvaggio','lorena.salvaggio@gmail.com','2646a8e07c06adfe84610d317ceb5eed1d27383b41358d9d346ac537c7ff82a5'),(33,'Gabriele','Saporito','sapgabriele@hotmail.it','c00f37b0dd6519f4e824f968c9ef04c8513883842285dfe269160529cd8629e7'),(34,'Mauro','Saporito','mauro@gmail.com','a0a5da31370f6d7bd62b6ee6e4ba439c7fb441ba42a9da7f1d939de8b0ab78bf'),(46,'Michela','Napoli','michela@gmail.com','defa2465c171465e954f65102deb2414e1ee58d505238bb911ae18afa6cb68c4'),(47,'Federica','Creta','federica@gmail.com','0f3e472f6cd55ed23d2179a1a074598c9da59ead14f3cda5f198306752dd777c'),(54,'Luca','Dante','luca@gmail.com','9c6cf4d23f1d2672cb8725db2920a56b7055acf5f8edbf76afb50c6ea0e32723');
/*!40000 ALTER TABLE `utente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utente_ruolo`
--

DROP TABLE IF EXISTS `utente_ruolo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utente_ruolo` (
  `FK_R` int NOT NULL,
  `FK_U` int NOT NULL,
  PRIMARY KEY (`FK_R`,`FK_U`),
  KEY `FK_U` (`FK_U`),
  CONSTRAINT `utente_ruolo_ibfk_1` FOREIGN KEY (`FK_R`) REFERENCES `ruolo` (`ID_G`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `utente_ruolo_ibfk_2` FOREIGN KEY (`FK_U`) REFERENCES `utente` (`ID_U`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utente_ruolo`
--

LOCK TABLES `utente_ruolo` WRITE;
/*!40000 ALTER TABLE `utente_ruolo` DISABLE KEYS */;
INSERT INTO `utente_ruolo` VALUES (2,7),(2,15),(1,33),(1,54);
/*!40000 ALTER TABLE `utente_ruolo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utenti_corsi`
--

DROP TABLE IF EXISTS `utenti_corsi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utenti_corsi` (
  `FK_UC` int NOT NULL,
  `FK_CU` int NOT NULL,
  PRIMARY KEY (`FK_UC`,`FK_CU`),
  KEY `utenti_corsi_ibfk_2_idx` (`FK_CU`),
  CONSTRAINT `utenti_corsi_ibfk_1` FOREIGN KEY (`FK_UC`) REFERENCES `utente` (`ID_U`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `utenti_corsi_ibfk_2` FOREIGN KEY (`FK_CU`) REFERENCES `corso` (`ID_C`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utenti_corsi`
--

LOCK TABLES `utenti_corsi` WRITE;
/*!40000 ALTER TABLE `utenti_corsi` DISABLE KEYS */;
INSERT INTO `utenti_corsi` VALUES (34,2),(34,4),(34,5),(34,6),(34,7),(7,14),(8,14);
/*!40000 ALTER TABLE `utenti_corsi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-12 17:36:19
