-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: prggestionerichieste
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `tbl_blacklisted_tokens`
--

DROP TABLE IF EXISTS `tbl_blacklisted_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_blacklisted_tokens` (
  `id_token` int unsigned NOT NULL AUTO_INCREMENT,
  `token` varchar(250) NOT NULL,
  PRIMARY KEY (`id_token`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_blacklisted_tokens`
--

LOCK TABLES `tbl_blacklisted_tokens` WRITE;
/*!40000 ALTER TABLE `tbl_blacklisted_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_blacklisted_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_flussi_richieste`
--

DROP TABLE IF EXISTS `tbl_flussi_richieste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_flussi_richieste` (
  `id_stato_richiesta_attuale` int unsigned NOT NULL,
  `id_stato_richiesta_successivo` int unsigned NOT NULL,
  `id_tipologia_richiesta` smallint unsigned NOT NULL,
  `id_flusso_richiesta` bigint NOT NULL,
  PRIMARY KEY (`id_stato_richiesta_attuale`,`id_stato_richiesta_successivo`,`id_tipologia_richiesta`),
  KEY `fk_tbl_flussi_ricchieste_tbl_stati_richieste2_idx` (`id_stato_richiesta_successivo`),
  KEY `fk_tbl_flussi_ricchieste_tbl_tipologie_richieste1_idx` (`id_tipologia_richiesta`),
  CONSTRAINT `fk_tbl_flussi_ricchieste_tbl_stati_richieste1` FOREIGN KEY (`id_stato_richiesta_attuale`) REFERENCES `tbl_stati_richieste` (`id_stato_richiesta`),
  CONSTRAINT `fk_tbl_flussi_ricchieste_tbl_stati_richieste2` FOREIGN KEY (`id_stato_richiesta_successivo`) REFERENCES `tbl_stati_richieste` (`id_stato_richiesta`),
  CONSTRAINT `fk_tbl_flussi_ricchieste_tbl_tipologie_richieste1` FOREIGN KEY (`id_tipologia_richiesta`) REFERENCES `tbl_tipologie_richieste` (`id_tipologia_richiesta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_flussi_richieste`
--

LOCK TABLES `tbl_flussi_richieste` WRITE;
/*!40000 ALTER TABLE `tbl_flussi_richieste` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_flussi_richieste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_funzionalita`
--

DROP TABLE IF EXISTS `tbl_funzionalita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_funzionalita` (
  `id_funzionalita` int unsigned NOT NULL AUTO_INCREMENT,
  `descrizione_funzionalità` varchar(120) NOT NULL,
  `titolo` varchar(50) NOT NULL,
  `url` varchar(250) NOT NULL,
  `descrizione_funzionalita` varchar(120) NOT NULL,
  PRIMARY KEY (`id_funzionalita`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_funzionalita`
--

LOCK TABLES `tbl_funzionalita` WRITE;
/*!40000 ALTER TABLE `tbl_funzionalita` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_funzionalita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_menu`
--

DROP TABLE IF EXISTS `tbl_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_menu` (
  `id_menu` int unsigned NOT NULL AUTO_INCREMENT,
  `id_funzionalita` int unsigned NOT NULL,
  `id_menu_padre` int unsigned DEFAULT NULL,
  `titolo` varchar(50) DEFAULT NULL,
  `default` bit(1) NOT NULL,
  `posizione_menu` varchar(45) NOT NULL,
  PRIMARY KEY (`id_menu`),
  KEY `fk_tbl_menu_tbl_menu1_idx` (`id_menu_padre`),
  KEY `fk_tbl_menu_tbl_funzionalita1_idx` (`id_funzionalita`),
  CONSTRAINT `fk_tbl_menu_tbl_funzionalita1` FOREIGN KEY (`id_funzionalita`) REFERENCES `tbl_funzionalita` (`id_funzionalita`),
  CONSTRAINT `fk_tbl_menu_tbl_menu1` FOREIGN KEY (`id_menu_padre`) REFERENCES `tbl_menu` (`id_menu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_menu`
--

LOCK TABLES `tbl_menu` WRITE;
/*!40000 ALTER TABLE `tbl_menu` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_modelli`
--

DROP TABLE IF EXISTS `tbl_modelli`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_modelli` (
  `id_modello` int unsigned NOT NULL AUTO_INCREMENT,
  `descrizione_modello` varchar(120) NOT NULL,
  `transcodifica_modello` blob NOT NULL,
  `attivo` bit(1) NOT NULL,
  PRIMARY KEY (`id_modello`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_modelli`
--

LOCK TABLES `tbl_modelli` WRITE;
/*!40000 ALTER TABLE `tbl_modelli` DISABLE KEYS */;
INSERT INTO `tbl_modelli` VALUES (1,'Acquisto',_binary '{\r\n    \"Destinatario\": {\r\n        \"NomeDestinatario\": \"\",\r\n        \"RecapitiPEC\": [\r\n            \"\"\r\n        ],\r\n        \"RecapitiTelefonico\": [\r\n            \"\"\r\n        ],\r\n        \"Indirizzo\": [\r\n            \"\"\r\n        ]\r\n    },\r\n    \"TipologiaModello\": \"con tabella o con corpo del testo\",\r\n    \"Note\": \"\",\r\n    \"Oggetto\": \"Acquisto\",\r\n    \"Sezioni\": [\r\n        {\r\n            \"DescrizioneSezione\": \"\",\r\n            \"TipologiaSezione\": \"Dipartimento|Direzione|Comando\"\r\n        }\r\n    ],\r\n    \"SottoSezioneComando\": {\r\n        \"DescrizioneSottoSezione\": \"\",\r\n        \"ElencoCampi\": []\r\n    },\r\n    \"Firma\": {\r\n        \"Firmatario\": [\r\n            \"\"\r\n        ]\r\n    }\r\n}',_binary ''),(2,'Assegnazione Materiale Informatico',_binary '{\r\n    \"Destinatario\": {\r\n        \"NomeDestinatario\": \"\",\r\n        \"RecapitiPEC\": [\r\n            \"\"\r\n        ],\r\n        \"RecapitiTelefonico\": [\r\n            \"\"\r\n        ],\r\n        \"Indirizzo\": [\r\n            \"\"\r\n        ]\r\n    },\r\n    \"TipologiaModello\": \"con tabella o con corpo del testo\",\r\n    \"Note\": \"\",\r\n    \"Oggetto\": \"Assegnazione Materiale Informatico\",\r\n    \"Sezioni\": [\r\n        {\r\n            \"DescrizioneSezione\": \"\",\r\n            \"TipologiaSezione\": \"Dipartimento|Direzione|Comando\"\r\n        }\r\n    ],\r\n    \"SottoSezioneComando\": {\r\n        \"DescrizioneSottoSezione\": \"\",\r\n        \"ElencoCampi\": []\r\n    },\r\n    \"Firma\": {\r\n        \"Firmatario\": [\r\n            \"\"\r\n        ]\r\n    }\r\n}',_binary ''),(3,'Assegnazione Materiale Operativo',_binary '{\r\n    \"Destinatario\": {\r\n        \"NomeDestinatario\": \"\",\r\n        \"RecapitiPEC\": [\r\n            \"\"\r\n        ],\r\n        \"RecapitiTelefonico\": [\r\n            \"\"\r\n        ],\r\n        \"Indirizzo\": [\r\n            \"\"\r\n        ]\r\n    },\r\n    \"TipologiaModello\": \"con tabella o con corpo del testo\",\r\n    \"Note\": \"\",\r\n    \"Oggetto\": \"Assegnazione Materiale Operativo\",\r\n    \"Sezioni\": [\r\n        {\r\n            \"DescrizioneSezione\": \"\",\r\n            \"TipologiaSezione\": \"Dipartimento|Direzione|Comando\"\r\n        }\r\n    ],\r\n    \"SottoSezioneComando\": {\r\n        \"DescrizioneSottoSezione\": \"\",\r\n        \"ElencoCampi\": []\r\n    },\r\n    \"Firma\": {\r\n        \"Firmatario\": [\r\n            \"\"\r\n        ]\r\n    }\r\n}',_binary ''),(4,'Assegnazione Materiale Logistico',_binary '{\r\n    \"Destinatario\": {\r\n        \"NomeDestinatario\": \"\",\r\n        \"RecapitiPEC\": [\r\n            \"\"\r\n        ],\r\n        \"RecapitiTelefonico\": [\r\n            \"\"\r\n        ],\r\n        \"Indirizzo\": [\r\n            \"\"\r\n        ]\r\n    },\r\n    \"TipologiaModello\": \"con tabella o con corpo del testo\",\r\n    \"Note\": \"\",\r\n    \"Oggetto\": \"Assegnazione Materiale Logistico\",\r\n    \"Sezioni\": [\r\n        {\r\n            \"DescrizioneSezione\": \"\",\r\n            \"TipologiaSezione\": \"Dipartimento|Direzione|Comando\"\r\n        }\r\n    ],\r\n    \"SottoSezioneComando\": {\r\n        \"DescrizioneSottoSezione\": \"\",\r\n        \"ElencoCampi\": []\r\n    },\r\n    \"Firma\": {\r\n        \"Firmatario\": [\r\n            \"\"\r\n        ]\r\n    }\r\n}',_binary ''),(5,'Corsi',_binary '{\r\n    \"Destinatario\": {\r\n        \"NomeDestinatario\": \"\",\r\n        \"RecapitiPEC\": [\r\n            \"\"\r\n        ],\r\n        \"RecapitiTelefonico\": [\r\n            \"\"\r\n        ],\r\n        \"Indirizzo\": [\r\n            \"\"\r\n        ]\r\n    },\r\n    \"TipologiaModello\": \"con tabella o con corpo del testo\",\r\n    \"Note\": \"\",\r\n    \"Oggetto\": \"Corsi\",\r\n    \"Sezioni\": [\r\n        {\r\n            \"DescrizioneSezione\": \"\",\r\n            \"TipologiaSezione\": \"Dipartimento|Direzione|Comando\"\r\n        }\r\n    ],\r\n    \"SottoSezioneComando\": {\r\n        \"DescrizioneSottoSezione\": \"\",\r\n        \"ElencoCampi\": []\r\n    },\r\n    \"Firma\": {\r\n        \"Firmatario\": [\r\n            \"\"\r\n        ]\r\n    }\r\n}',_binary ''),(6,'DPI',_binary '{\r\n    \"data\": [\r\n        {\r\n            \"name\": \"grouped_product_type\",\r\n            \"label\": \"Campi raggruppati\",\r\n            \"type\": \"grouped\",\r\n            \"required\": true,\r\n            \"multiple\": true,\r\n            \"value\": [\r\n                {\r\n                    \"name\": \"product_type\",\r\n                    \"label\": \"Prodotto\",\r\n                    \"type\": \"text\",\r\n                    \"required\": true,\r\n                    \"regex\": \"\",\r\n                    \"value\": \"\"\r\n                },\r\n                {\r\n                    \"name\": \"quantity_type\",\r\n                    \"label\": \"Quantità\",\r\n                    \"type\": \"number\",\r\n                    \"required\": true,\r\n                    \"regex\": \"\",\r\n                    \"value\": \"\"\r\n                },\r\n                {\r\n                    \"name\": \"Descrizione\",\r\n                    \"type\": \"textarea\",\r\n                    \"required\": true,\r\n                    \"regex\": \"\",\r\n                    \"value\": \"\"\r\n                },\r\n                {\r\n                    \"name\": \"Campo select ?\",\r\n                    \"type\": \"select\",\r\n                    \"subitem\": [\r\n                        {\r\n                            \"name\": \"type1\",\r\n                            \"value\": \"Tipologia 1\"\r\n                        },\r\n                        {\r\n                            \"name\": \"type2\",\r\n                            \"value\": \"Tipologia 2\"\r\n                        },\r\n                        {\r\n                            \"name\": \"type3\",\r\n                            \"value\": \"Tipologia 3\"\r\n                        }\r\n                    ]\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            \"name\": \"Note\",\r\n            \"type\": \"textarea\",\r\n            \"multiple\": true,\r\n            \"value\": \"\"\r\n        },\r\n        {\r\n            \"name\": \"Tipologia\",\r\n            \"type\": \"select\",\r\n            \"subitem\": [\r\n                {\r\n                    \"name\": \"type1\",\r\n                    \"value\": \"Tipologia 1\"\r\n                },\r\n                {\r\n                    \"name\": \"type2\",\r\n                    \"value\": \"Tipologia 2\"\r\n                },\r\n                {\r\n                    \"name\": \"type3\",\r\n                    \"value\": \"Tipologia 3\"\r\n                }\r\n            ],\r\n            \"value\": \"\"\r\n        },\r\n        {\r\n            \"name\": \"Tipologia\",\r\n            \"type\": \"radio\",\r\n            \"subitem\": [\r\n                {\r\n                    \"name\": \"nome1\",\r\n                    \"value\": \"Tipologia 1\"\r\n                },\r\n                {\r\n                    \"name\": \"nam2\",\r\n                    \"value\": \"Tipologia 2\"\r\n                },\r\n                {\r\n                    \"name\": \"type3\",\r\n                    \"value\": \"Tipologia 3\"\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            \"name\": \"Tipologia\",\r\n            \"type\": \"checkbox\",\r\n            \"subitem\": [\r\n                {\r\n                    \"name\": \"nome1\",\r\n                    \"value\": \"Tipologia 1\"\r\n                },\r\n                {\r\n                    \"name\": \"type2\",\r\n                    \"value\": \"Tipologia 2\"\r\n                },\r\n                {\r\n                    \"name\": \"type3\",\r\n                    \"value\": \"Tipologia 3\"\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            \"name\": \"Data\",\r\n            \"type\": \"date\",\r\n            \"value\": \"timestamp\",\r\n            \"required\": true,\r\n            \"regex\": \"\",\r\n            \"multiple\": true\r\n        }\r\n    ]\r\n}',_binary '');
/*!40000 ALTER TABLE `tbl_modelli` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_modelli_compilati`
--

DROP TABLE IF EXISTS `tbl_modelli_compilati`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_modelli_compilati` (
  `id_modello_compilato` int unsigned NOT NULL AUTO_INCREMENT,
  `file_modello` blob NOT NULL,
  `id_modello` int unsigned NOT NULL,
  `id_richiesta` int unsigned NOT NULL,
  `transcodifica_modello_compilato` blob NOT NULL,
  PRIMARY KEY (`id_modello_compilato`),
  KEY `fk_modelli_compilati_tbl_modelli1_idx` (`id_modello`),
  KEY `fk_modelli_compilati_tbl_richieste1_idx` (`id_richiesta`),
  CONSTRAINT `fk_modelli_compilati_tbl_modelli1` FOREIGN KEY (`id_modello`) REFERENCES `tbl_modelli` (`id_modello`),
  CONSTRAINT `fk_modelli_compilati_tbl_richieste1` FOREIGN KEY (`id_richiesta`) REFERENCES `tbl_richieste` (`id_richiesta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_modelli_compilati`
--

LOCK TABLES `tbl_modelli_compilati` WRITE;
/*!40000 ALTER TABLE `tbl_modelli_compilati` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_modelli_compilati` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_modelli_tipologie_richieste`
--

DROP TABLE IF EXISTS `tbl_modelli_tipologie_richieste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_modelli_tipologie_richieste` (
  `id_modello` int unsigned NOT NULL,
  `id_tipologia_richiesta` smallint unsigned NOT NULL,
  `attivo` bit(1) NOT NULL,
  `data_disattivazione` datetime DEFAULT NULL,
  `id_modello_tipologia_richiesta` bigint NOT NULL,
  PRIMARY KEY (`id_tipologia_richiesta`,`id_modello`),
  KEY `fk_tbl_modelli_tipologie_richieste_tbl_tipologie_richieste1_idx` (`id_tipologia_richiesta`),
  KEY `fk_tbl_modelli_tipologie_richieste_tbl_modello` (`id_modello`),
  CONSTRAINT `fk_tbl_modelli_tipologie_richieste_tbl_modello` FOREIGN KEY (`id_modello`) REFERENCES `tbl_modelli` (`id_modello`),
  CONSTRAINT `fk_tbl_modelli_tipologie_richieste_tbl_tipologie_richieste` FOREIGN KEY (`id_tipologia_richiesta`) REFERENCES `tbl_tipologie_richieste` (`id_tipologia_richiesta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_modelli_tipologie_richieste`
--

LOCK TABLES `tbl_modelli_tipologie_richieste` WRITE;
/*!40000 ALTER TABLE `tbl_modelli_tipologie_richieste` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_modelli_tipologie_richieste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_priorita`
--

DROP TABLE IF EXISTS `tbl_priorita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_priorita` (
  `id_priorita` smallint unsigned NOT NULL AUTO_INCREMENT,
  `descrizione_priorita` varchar(120) NOT NULL,
  PRIMARY KEY (`id_priorita`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_priorita`
--

LOCK TABLES `tbl_priorita` WRITE;
/*!40000 ALTER TABLE `tbl_priorita` DISABLE KEYS */;
INSERT INTO `tbl_priorita` VALUES (1,'Alta');
/*!40000 ALTER TABLE `tbl_priorita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_richieste`
--

DROP TABLE IF EXISTS `tbl_richieste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_richieste` (
  `id_richiesta` int unsigned NOT NULL AUTO_INCREMENT,
  `numero_richiesta` char(14) NOT NULL COMMENT 'COMPLETARE IL RAGIONAMENTO\n',
  `id_stato_richiesta` int unsigned NOT NULL COMMENT 'Stato attuale della richiesta',
  `id_tipologia_richiesta` smallint unsigned NOT NULL,
  `richiesta_personale` bit(1) NOT NULL DEFAULT b'0',
  `id_priorita` smallint unsigned NOT NULL,
  `data_inserimento_richiesta` datetime NOT NULL,
  `data_ultimo_stato_richiesta` datetime NOT NULL,
  `id_utente_ufficio_ruolo_stato_corrente` int unsigned NOT NULL COMMENT 'utente che ha palesato lo stato attuale della richiesta',
  `id_utente_ufficio_ruolo_stato_iniziale` int unsigned NOT NULL COMMENT 'Utente con relativo ufficio e ruolo all''atto della richiesta',
  `id_settore_ufficio` smallint unsigned NOT NULL,
  PRIMARY KEY (`id_richiesta`),
  KEY `fk_tbl_richieste_tbl_utenti_uffici_ruoli1_idx` (`id_utente_ufficio_ruolo_stato_iniziale`),
  KEY `fk_tbl_richieste_tbl_tipologie_richieste1_idx` (`id_tipologia_richiesta`),
  KEY `fk_tbl_richieste_tbl_priorita1_idx` (`id_priorita`),
  KEY `fk_tbl_richieste_tbl_stati_richieste1_idx` (`id_stato_richiesta`),
  KEY `fk_tbl_richieste_tbl_utenti_uffici_ruoli_statocorrente1_idx` (`id_utente_ufficio_ruolo_stato_corrente`),
  KEY `fk_tbl_richieste_tbl_settori_uffici1_idx` (`id_settore_ufficio`),
  CONSTRAINT `fk_tbl_richieste_tbl_priorita` FOREIGN KEY (`id_priorita`) REFERENCES `tbl_priorita` (`id_priorita`),
  CONSTRAINT `fk_tbl_richieste_tbl_settori_uffici` FOREIGN KEY (`id_settore_ufficio`) REFERENCES `tbl_settori_uffici` (`id_settore_ufficio`),
  CONSTRAINT `fk_tbl_richieste_tbl_stati_richieste` FOREIGN KEY (`id_stato_richiesta`) REFERENCES `tbl_stati_richieste` (`id_stato_richiesta`),
  CONSTRAINT `fk_tbl_richieste_tbl_tipologie_richieste` FOREIGN KEY (`id_tipologia_richiesta`) REFERENCES `tbl_tipologie_richieste` (`id_tipologia_richiesta`),
  CONSTRAINT `fk_tbl_richieste_tbl_utenti_uffici_ruoli_stato_corrente` FOREIGN KEY (`id_utente_ufficio_ruolo_stato_corrente`) REFERENCES `tbl_utenti_uffici_ruoli` (`id_utente_ufficio_ruolo`),
  CONSTRAINT `fk_tbl_richieste_tbl_utenti_uffici_ruoli_stato_iniziale` FOREIGN KEY (`id_utente_ufficio_ruolo_stato_iniziale`) REFERENCES `tbl_utenti_uffici_ruoli` (`id_utente_ufficio_ruolo`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_richieste`
--

LOCK TABLES `tbl_richieste` WRITE;
/*!40000 ALTER TABLE `tbl_richieste` DISABLE KEYS */;
INSERT INTO `tbl_richieste` VALUES (1,'123123',1,1,_binary '',1,'2024-07-22 00:00:00','2024-07-22 00:00:00',1,1,1),(5,'55555555',1,1,_binary '',1,'2024-07-22 00:00:00','2024-07-22 00:00:00',1,1,1),(6,'123123',1,1,_binary '',1,'2023-07-22 00:00:00','2024-07-22 00:00:00',1,1,2),(22,'123',1,1,_binary '\0',1,'2024-07-22 16:30:53','2024-07-22 16:30:53',1,1,1),(23,'123',1,1,_binary '\0',1,'2024-07-22 16:34:47','2024-07-22 16:34:47',1,1,1),(24,'123',1,1,_binary '\0',1,'2024-07-22 16:40:41','2024-07-22 16:40:41',1,1,1),(25,'REQ-Acquisti-2',1,1,_binary '\0',1,'2024-07-22 20:16:22','2024-07-22 20:16:22',1,1,1),(26,'REQ-Acqu-24072',1,1,_binary '\0',1,'2024-07-22 20:19:14','2024-07-22 20:19:14',1,1,1),(27,'R-A-240722-837',1,1,_binary '\0',1,'2024-07-22 20:21:06','2024-07-22 20:21:06',1,1,1),(28,'R-A-722-6095-0',1,1,_binary '\0',1,'2024-07-22 20:23:20','2024-07-22 20:23:20',1,1,1),(29,'R-A-2-1043-000',1,1,_binary '\0',1,'2024-07-22 20:24:33','2024-07-22 20:24:33',1,1,1),(30,'R-A-2407-3002-',1,1,_binary '\0',1,'2024-07-22 20:25:19','2024-07-22 20:25:19',1,1,1),(31,'R-A-2407-129-0',1,1,_binary '\0',1,'2024-07-22 20:30:28','2024-07-22 20:30:28',1,1,1),(32,'R-A-2407-525-1',1,1,_binary '\0',1,'2024-07-22 20:35:34','2024-07-22 20:35:34',1,1,1),(33,'R-A-24-934-1Z',1,1,_binary '\0',1,'2024-07-22 20:35:51','2024-07-22 20:35:51',1,1,1),(34,'R-A-24-679-1ZZ',1,1,_binary '\0',1,'2024-07-22 20:36:59','2024-07-22 20:36:59',1,1,1),(35,'R-A-240-900-1Z',1,1,_binary '\0',1,'2024-07-22 20:37:23','2024-07-22 20:37:23',1,1,1),(36,'R-A-24-338-1ZZ',1,1,_binary '\0',1,'2024-07-22 20:38:19','2024-07-22 20:38:19',1,1,1),(37,'R-A-24-982-1ZZ',1,1,_binary '\0',1,'2024-07-22 21:01:11','2024-07-22 21:01:11',1,1,1),(38,'R-A-24-888-1ZZ',1,1,_binary '\0',1,'2024-07-22 19:10:18','2024-07-22 19:10:18',1,1,1),(39,'R-A-24-479-1ZZ',1,1,_binary '\0',1,'2024-07-22 19:12:42','2024-07-22 19:12:42',1,1,1),(40,'R-A-24-883-1ZZ',1,1,_binary '\0',1,'2024-07-22 19:14:51','2024-07-22 19:14:51',1,1,1),(41,'R-A-24-480-1ZZ',1,1,_binary '\0',1,'2024-07-22 21:16:54','2024-07-22 21:16:54',1,1,1),(42,'R-A-24-656-1ZZ',1,1,_binary '\0',1,'2024-07-23 06:45:40','2024-07-23 06:45:40',1,1,1),(43,'R-A-24-784-1ZZ',1,1,_binary '\0',1,'2024-07-23 06:45:47','2024-07-23 06:45:47',1,1,1),(44,'R-A-24-224-1ZZ',1,1,_binary '\0',1,'2024-07-23 06:45:49','2024-07-23 06:45:49',1,1,1),(45,'R-A-24-932-1ZZ',1,1,_binary '\0',1,'2024-07-23 06:46:06','2024-07-23 06:46:06',1,1,1),(46,'R-A-24-123-1ZZ',1,1,_binary '\0',1,'2024-07-23 07:02:13','2024-07-23 07:02:13',1,1,1),(47,'R-A-24-111-1ZZ',1,1,_binary '\0',1,'2024-07-23 08:50:25','2024-07-23 08:50:25',1,1,1),(48,'R-A-24-071-1ZZ',1,1,_binary '\0',1,'2024-07-23 08:50:28','2024-07-23 08:50:28',1,1,1),(49,'R-A-24-230-1ZZ',1,1,_binary '\0',1,'2024-07-23 08:50:30','2024-07-23 08:50:30',1,1,1);
/*!40000 ALTER TABLE `tbl_richieste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_ruoli`
--

DROP TABLE IF EXISTS `tbl_ruoli`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_ruoli` (
  `id_ruolo` int unsigned NOT NULL AUTO_INCREMENT,
  `descrizione_ruolo` varchar(50) NOT NULL,
  `attivo` bit(1) NOT NULL,
  PRIMARY KEY (`id_ruolo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ruoli`
--

LOCK TABLES `tbl_ruoli` WRITE;
/*!40000 ALTER TABLE `tbl_ruoli` DISABLE KEYS */;
INSERT INTO `tbl_ruoli` VALUES (1,'Acquidti',_binary '');
/*!40000 ALTER TABLE `tbl_ruoli` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_ruoli_funzionalita`
--

DROP TABLE IF EXISTS `tbl_ruoli_funzionalita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_ruoli_funzionalita` (
  `id_ruolo_funzionalita` int unsigned NOT NULL AUTO_INCREMENT,
  `id_ruolo` int unsigned NOT NULL,
  `id_funzionalita` int unsigned NOT NULL,
  `attivo` bit(1) NOT NULL,
  PRIMARY KEY (`id_ruolo_funzionalita`),
  KEY `fk_tbl_ruoli_has_tbl_funzionalita_tbl_funzionalita1_idx` (`id_funzionalita`),
  KEY `fk_tbl_ruoli_has_tbl_funzionalita_tbl_ruoli1_idx` (`id_ruolo`),
  CONSTRAINT `fk_tbl_ruoli_has_tbl_funzionalita_tbl_funzionalita1` FOREIGN KEY (`id_funzionalita`) REFERENCES `tbl_funzionalita` (`id_funzionalita`),
  CONSTRAINT `fk_tbl_ruoli_has_tbl_funzionalita_tbl_ruoli1` FOREIGN KEY (`id_ruolo`) REFERENCES `tbl_ruoli` (`id_ruolo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ruoli_funzionalita`
--

LOCK TABLES `tbl_ruoli_funzionalita` WRITE;
/*!40000 ALTER TABLE `tbl_ruoli_funzionalita` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_ruoli_funzionalita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_settori`
--

DROP TABLE IF EXISTS `tbl_settori`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_settori` (
  `id_settore` int unsigned NOT NULL AUTO_INCREMENT,
  `descrizione_settore` varchar(120) NOT NULL,
  `email_settore` varchar(50) DEFAULT NULL,
  `attivo` bit(1) NOT NULL,
  PRIMARY KEY (`id_settore`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_settori`
--

LOCK TABLES `tbl_settori` WRITE;
/*!40000 ALTER TABLE `tbl_settori` DISABLE KEYS */;
INSERT INTO `tbl_settori` VALUES (1,'Acquisti','acquisti@vigilfuoco.it',_binary ''),(2,'Informatico','informatica@vigilfuoco.it',_binary '');
/*!40000 ALTER TABLE `tbl_settori` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_settori_richieste`
--

DROP TABLE IF EXISTS `tbl_settori_richieste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_settori_richieste` (
  `id_settore` int unsigned NOT NULL,
  `id_tipologia_richiesta` smallint unsigned NOT NULL,
  `attivo` bit(1) NOT NULL,
  `id_settore_richiesta` bigint NOT NULL,
  PRIMARY KEY (`id_tipologia_richiesta`,`id_settore`),
  KEY `fk_tbl_settore_richiesta_has_tbl_richieste_tbl_settore_rich1_idx` (`id_settore`),
  KEY `fk_tbl_settori_richieste_tbl_tipologie_richieste1_idx` (`id_tipologia_richiesta`),
  CONSTRAINT `fk_tbl_settori_richieste_tbl_settori` FOREIGN KEY (`id_settore`) REFERENCES `tbl_settori` (`id_settore`),
  CONSTRAINT `fk_tbl_settori_richieste_tbl_tipologie_richieste` FOREIGN KEY (`id_tipologia_richiesta`) REFERENCES `tbl_tipologie_richieste` (`id_tipologia_richiesta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_settori_richieste`
--

LOCK TABLES `tbl_settori_richieste` WRITE;
/*!40000 ALTER TABLE `tbl_settori_richieste` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_settori_richieste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_settori_uffici`
--

DROP TABLE IF EXISTS `tbl_settori_uffici`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_settori_uffici` (
  `id_settore_ufficio` smallint unsigned NOT NULL AUTO_INCREMENT,
  `id_settore` int unsigned NOT NULL,
  `id_ufficio` int unsigned NOT NULL,
  `attivo` bit(1) NOT NULL,
  PRIMARY KEY (`id_settore_ufficio`),
  KEY `fk_tbl_settori_uffici_tbl_settori_idx1` (`id_settore`),
  KEY `fk_tbl_settori_uffici_tbl_uffici_idx1` (`id_ufficio`) /*!80000 INVISIBLE */,
  CONSTRAINT `fk_tbl_settori_uffici_tbl_settori` FOREIGN KEY (`id_settore`) REFERENCES `tbl_settori` (`id_settore`),
  CONSTRAINT `fk_tbl_settori_uffici_tbl_uffici` FOREIGN KEY (`id_ufficio`) REFERENCES `tbl_uffici` (`id_ufficio`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_settori_uffici`
--

LOCK TABLES `tbl_settori_uffici` WRITE;
/*!40000 ALTER TABLE `tbl_settori_uffici` DISABLE KEYS */;
INSERT INTO `tbl_settori_uffici` VALUES (1,1,1,_binary ''),(2,2,2,_binary '');
/*!40000 ALTER TABLE `tbl_settori_uffici` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_stati_richieste`
--

DROP TABLE IF EXISTS `tbl_stati_richieste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_stati_richieste` (
  `id_stato_richiesta` int unsigned NOT NULL AUTO_INCREMENT,
  `descrizione_stato_richiesta` varchar(120) NOT NULL,
  `attivo` bit(1) NOT NULL,
  PRIMARY KEY (`id_stato_richiesta`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_stati_richieste`
--

LOCK TABLES `tbl_stati_richieste` WRITE;
/*!40000 ALTER TABLE `tbl_stati_richieste` DISABLE KEYS */;
INSERT INTO `tbl_stati_richieste` VALUES (1,'Inserita',_binary ''),(2,'Inviata a Referente Ufficio',_binary ''),(3,'Approvata Referente Ufficio',_binary ''),(4,'Richiesta Integrazione Referente Ufficio',_binary ''),(5,'Rifiutata Referente Ufficio',_binary ''),(6,'Approvata Responsabile Settore',_binary ''),(7,'Richiesta Integrazione Responsabile Settore',_binary ''),(8,'Rifiutata Responsabile Settore',_binary ''),(9,'Approvata Comandante',_binary ''),(10,'Negato Consenso',_binary ''),(11,'Inviata Ufficio Evasione',_binary ''),(12,'Evasa',_binary ''),(998,'Richiesta Privata',_binary ''),(999,'Richiesta Ufficio',_binary '');
/*!40000 ALTER TABLE `tbl_stati_richieste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_storico_stati_richieste`
--

DROP TABLE IF EXISTS `tbl_storico_stati_richieste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_storico_stati_richieste` (
  `id_storico_stato_richiesta` bigint unsigned NOT NULL AUTO_INCREMENT,
  `data_stato_richiesta` datetime NOT NULL,
  `note` varchar(3000) DEFAULT NULL,
  `id_stato_richiesta` int unsigned NOT NULL,
  `id_richiesta` int unsigned NOT NULL,
  `id_utente_ufficio_ruolo` int unsigned NOT NULL,
  PRIMARY KEY (`id_storico_stato_richiesta`),
  KEY `fk_tbl_storico_stati_richieste_tbl_stati_richieste1_idx` (`id_stato_richiesta`),
  KEY `fk_tbl_storico_stati_richieste_tbl_richieste1_idx` (`id_richiesta`),
  KEY `fk_tbl_storico_stati_richieste_tbl_utenti_uffici_ruoli1_idx` (`id_utente_ufficio_ruolo`),
  CONSTRAINT `fk_tbl_storico_stati_richieste_tbl_richieste` FOREIGN KEY (`id_richiesta`) REFERENCES `tbl_richieste` (`id_richiesta`),
  CONSTRAINT `fk_tbl_storico_stati_richieste_tbl_stati_richieste` FOREIGN KEY (`id_stato_richiesta`) REFERENCES `tbl_stati_richieste` (`id_stato_richiesta`),
  CONSTRAINT `fk_tbl_storico_stati_richieste_tbl_utenti_uffici_ruoli1` FOREIGN KEY (`id_utente_ufficio_ruolo`) REFERENCES `tbl_utenti_uffici_ruoli` (`id_utente_ufficio_ruolo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_storico_stati_richieste`
--

LOCK TABLES `tbl_storico_stati_richieste` WRITE;
/*!40000 ALTER TABLE `tbl_storico_stati_richieste` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_storico_stati_richieste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_tipologie_richieste`
--

DROP TABLE IF EXISTS `tbl_tipologie_richieste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_tipologie_richieste` (
  `id_tipologia_richiesta` smallint unsigned NOT NULL AUTO_INCREMENT,
  `descrizione_tipologia_richiesta` varchar(120) NOT NULL,
  `id_stato_richiesta_partenza` int unsigned NOT NULL,
  `attivo` bit(1) NOT NULL,
  PRIMARY KEY (`id_tipologia_richiesta`),
  KEY `fk_tbl_tipologie_richieste_tbl_stati_richieste1_idx` (`id_stato_richiesta_partenza`),
  CONSTRAINT `fk_tbl_tipologie_richieste_tbl_stati_richieste` FOREIGN KEY (`id_stato_richiesta_partenza`) REFERENCES `tbl_stati_richieste` (`id_stato_richiesta`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_tipologie_richieste`
--

LOCK TABLES `tbl_tipologie_richieste` WRITE;
/*!40000 ALTER TABLE `tbl_tipologie_richieste` DISABLE KEYS */;
INSERT INTO `tbl_tipologie_richieste` VALUES (1,'Acquisto',999,_binary ''),(2,'Assegnazione Materiale Informatico',3,_binary ''),(3,'Assegnazione Materiale Operativo',3,_binary '\0'),(4,'Assegnazione Materiale Logistico',3,_binary ''),(5,'Corsi',3,_binary ''),(6,'DPI',3,_binary ''),(7,'Fascicolo Sanitario',998,_binary '');
/*!40000 ALTER TABLE `tbl_tipologie_richieste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_uffici`
--

DROP TABLE IF EXISTS `tbl_uffici`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_uffici` (
  `id_ufficio` int unsigned NOT NULL AUTO_INCREMENT,
  `descrizione_ufficio` varchar(120) NOT NULL,
  `descrizione_comando` varchar(120) NOT NULL,
  `email_ufficio` varchar(120) NOT NULL,
  `attivo` bit(1) NOT NULL,
  PRIMARY KEY (`id_ufficio`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_uffici`
--

LOCK TABLES `tbl_uffici` WRITE;
/*!40000 ALTER TABLE `tbl_uffici` DISABLE KEYS */;
INSERT INTO `tbl_uffici` VALUES (1,'Ufficio Acquisti','Comando VV.F. Campobasso','comando.campobasso@vigilfuoco.it',_binary ''),(2,'Ufficio Informatico','Comando VV.F. Campobasso','ufficio.informatico@vigilfuoco.it',_binary '');
/*!40000 ALTER TABLE `tbl_uffici` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_utenti`
--

DROP TABLE IF EXISTS `tbl_utenti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_utenti` (
  `id_utente` int unsigned NOT NULL AUTO_INCREMENT,
  `account` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cognome` varchar(120) NOT NULL,
  `CF` char(16) NOT NULL,
  `classificazione_utente_app` int NOT NULL,
  `email_utente` varchar(50) NOT NULL,
  `attivo` bit(1) NOT NULL,
  PRIMARY KEY (`id_utente`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_utenti`
--

LOCK TABLES `tbl_utenti` WRITE;
/*!40000 ALTER TABLE `tbl_utenti` DISABLE KEYS */;
INSERT INTO `tbl_utenti` VALUES (1,'antonioroberto.diterlizzi','ANTONIO ROBERTO','DI TERLIZZI','DTRNNR85E11L109U',0,'antonioroberto.diterlizzi@vigilfuoco.it',_binary '\0'),(3,'simone.lecca','SIMONE','LECCA','LCCSMN97C11H856K',0,'simone.lecca@vigilfuoco.it',_binary '\0'),(4,'angelo.piccialli','ANGELO','PICCIALLI','PCCNGL74B15G224C',0,'angelo.piccialli@vigilfuoco.it',_binary '\0'),(5,'giovanni.mucciolo','GIOVANNI','MUCCIOLO','MCCGNN96B23A091G',0,'giovanni.mucciolo@vigilfuoco.it',_binary '\0'),(6,'maurizio.megna','MAURIZIO','MEGNA','MGNMRZ74A27H501U',0,'maurizio.megna@vigilfuoco.it',_binary '\0');
/*!40000 ALTER TABLE `tbl_utenti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_utenti_uffici_ruoli`
--

DROP TABLE IF EXISTS `tbl_utenti_uffici_ruoli`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_utenti_uffici_ruoli` (
  `id_utente_ufficio_ruolo` int unsigned NOT NULL AUTO_INCREMENT,
  `id_utente` int unsigned NOT NULL,
  `id_ruolo` int unsigned NOT NULL,
  `id_settore_ufficio` smallint unsigned NOT NULL,
  `attivo` bit(1) NOT NULL,
  `data_creazione` datetime NOT NULL,
  `data_disattivazione` datetime NOT NULL,
  PRIMARY KEY (`id_utente_ufficio_ruolo`),
  KEY `fk_tbl_utenti_has_tbl_uffici_tbl_utenti1_idx` (`id_utente`),
  KEY `fk_tbl_utenti_uffici_ruoli_tbl_ruoli1_idx` (`id_ruolo`),
  KEY `fk_tbl_utenti_uffici_ruoli_tbl_settori_uffici1_idx` (`id_settore_ufficio`),
  CONSTRAINT `fk_tbl_utenti_tbl_uffici_tbl_utenti` FOREIGN KEY (`id_utente`) REFERENCES `tbl_utenti` (`id_utente`),
  CONSTRAINT `fk_tbl_utenti_uffici_ruoli_tbl_ruoli` FOREIGN KEY (`id_ruolo`) REFERENCES `tbl_ruoli` (`id_ruolo`),
  CONSTRAINT `fk_tbl_utenti_uffici_ruoli_tbl_settori_uffici1` FOREIGN KEY (`id_settore_ufficio`) REFERENCES `tbl_settori_uffici` (`id_settore_ufficio`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_utenti_uffici_ruoli`
--

LOCK TABLES `tbl_utenti_uffici_ruoli` WRITE;
/*!40000 ALTER TABLE `tbl_utenti_uffici_ruoli` DISABLE KEYS */;
INSERT INTO `tbl_utenti_uffici_ruoli` VALUES (1,1,1,1,_binary '','2024-06-11 00:00:00','2024-06-11 00:00:00');
/*!40000 ALTER TABLE `tbl_utenti_uffici_ruoli` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-23 11:18:56
