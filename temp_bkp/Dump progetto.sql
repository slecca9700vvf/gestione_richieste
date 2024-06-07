-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema prggestionerichieste
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema prggestionerichieste
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `prggestionerichieste` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `prggestionerichieste` ;

-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_utenti`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_utenti` (
  `id_utente` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `account` VARCHAR(50) NOT NULL,
  `nome` VARCHAR(50) NOT NULL,
  `cognome` VARCHAR(120) NOT NULL,
  `CF` CHAR(16) NOT NULL,
  `classificazione_utente_app` INT NOT NULL,
  `email_utente` VARCHAR(50) NOT NULL,
  `attivo` BIT NOT NULL,
  PRIMARY KEY (`id_utente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_ruoli`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_ruoli` (
  `id_ruolo` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `descrizione_ruolo` VARCHAR(50) NOT NULL,
  `attivo` BIT NOT NULL,
  PRIMARY KEY (`id_ruolo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_settori`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_settori` (
  `id_settore` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `descrizione_settore` VARCHAR(120) NOT NULL,
  `email_settore` VARCHAR(50) NULL,
  `attivo` BIT NOT NULL,
  PRIMARY KEY (`id_settore`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_uffici`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_uffici` (
  `id_ufficio` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `descrizione_ufficio` VARCHAR(120) NOT NULL,
  `descrizione_comando` VARCHAR(120) NOT NULL,
  `email_ufficio` VARCHAR(120) NOT NULL,
  `attivo` BIT NOT NULL,
  PRIMARY KEY (`id_ufficio`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_settori_uffici`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_settori_uffici` (
  `id_settore_ufficio` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_settore` INT UNSIGNED NOT NULL,
  `id_ufficio` INT UNSIGNED NOT NULL,
  `attivo` BIT NOT NULL,
  PRIMARY KEY (`id_settore_ufficio`),
  INDEX `fk_tbl_settori_uffici_tbl_settori_idx1` (`id_settore` ASC) ,
  INDEX `fk_tbl_settori_uffici_tbl_uffici_idx1` (`id_ufficio` ASC) ,
  CONSTRAINT `fk_tbl_settori_uffici_tbl_settori`
    FOREIGN KEY (`id_settore`)
    REFERENCES `prggestionerichieste`.`tbl_settori` (`id_settore`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_settori_uffici_tbl_uffici`
    FOREIGN KEY (`id_ufficio`)
    REFERENCES `prggestionerichieste`.`tbl_uffici` (`id_ufficio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_utenti_uffici_ruoli`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_utenti_uffici_ruoli` (
  `id_utente_ufficio_ruolo` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_utente` INT UNSIGNED NOT NULL,
  `id_ruolo` INT UNSIGNED NOT NULL,
  `id_settore_ufficio` SMALLINT UNSIGNED NOT NULL,
  `attivo` BIT NOT NULL,
  `data_creazione` DATETIME NOT NULL,
  `data_disattivazione` DATETIME NOT NULL,
  INDEX `fk_tbl_utenti_has_tbl_uffici_tbl_utenti1_idx` (`id_utente` ASC) ,
  PRIMARY KEY (`id_utente_ufficio_ruolo`),
  INDEX `fk_tbl_utenti_uffici_ruoli_tbl_ruoli1_idx` (`id_ruolo` ASC) ,
  INDEX `fk_tbl_utenti_uffici_ruoli_tbl_settori_uffici1_idx` (`id_settore_ufficio` ASC) ,
  CONSTRAINT `fk_tbl_utenti_tbl_uffici_tbl_utenti`
    FOREIGN KEY (`id_utente`)
    REFERENCES `prggestionerichieste`.`tbl_utenti` (`id_utente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_utenti_uffici_ruoli_tbl_ruoli`
    FOREIGN KEY (`id_ruolo`)
    REFERENCES `prggestionerichieste`.`tbl_ruoli` (`id_ruolo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_utenti_uffici_ruoli_tbl_settori_uffici1`
    FOREIGN KEY (`id_settore_ufficio`)
    REFERENCES `prggestionerichieste`.`tbl_settori_uffici` (`id_settore_ufficio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_stati_richieste`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_stati_richieste` (
  `id_stato_richiesta` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `descrizione_stato_richiesta` VARCHAR(120) NOT NULL,
  `attivo` BIT NOT NULL,
  PRIMARY KEY (`id_stato_richiesta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_tipologie_richieste`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_tipologie_richieste` (
  `id_tipologia_richiesta` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `descrizione_tipologia_richiesta` VARCHAR(120) NOT NULL,
  `id_stato_richiesta_partenza` INT UNSIGNED NOT NULL,
  `attivo` BIT NOT NULL,
  PRIMARY KEY (`id_tipologia_richiesta`),
  INDEX `fk_tbl_tipologie_richieste_tbl_stati_richieste1_idx` (`id_stato_richiesta_partenza` ASC) ,
  CONSTRAINT `fk_tbl_tipologie_richieste_tbl_stati_richieste`
    FOREIGN KEY (`id_stato_richiesta_partenza`)
    REFERENCES `prggestionerichieste`.`tbl_stati_richieste` (`id_stato_richiesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_priorita`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_priorita` (
  `id_priorita` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `descrizione_priorita` VARCHAR(120) NOT NULL,
  PRIMARY KEY (`id_priorita`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_richieste`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_richieste` (
  `id_richiesta` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero_richiesta` CHAR(14) NOT NULL COMMENT 'COMPLETARE IL RAGIONAMENTO\n',
  `id_stato_richiesta` INT UNSIGNED NOT NULL COMMENT 'Stato attuale della richiesta',
  `id_tipologia_richiesta` SMALLINT UNSIGNED NOT NULL,
  `richiesta_personale` BIT NOT NULL DEFAULT 0,
  `id_priorita` SMALLINT UNSIGNED NOT NULL,
  `data_inserimento_richiesta` DATETIME NOT NULL,
  `data_ultimo_stato_richiesta` DATETIME NOT NULL,
  `id_utente_ufficio_ruolo_stato_corrente` INT UNSIGNED NOT NULL COMMENT 'utente che ha palesato lo stato attuale della richiesta',
  `id_utente_ufficio_ruolo_stato_iniziale` INT UNSIGNED NOT NULL COMMENT 'Utente con relativo ufficio e ruolo all\'atto della richiesta',
  `id_settore_ufficio_evasione` SMALLINT UNSIGNED NOT NULL,
  PRIMARY KEY (`id_richiesta`),
  INDEX `fk_tbl_richieste_tbl_utenti_uffici_ruoli1_idx` (`id_utente_ufficio_ruolo_stato_iniziale` ASC) ,
  INDEX `fk_tbl_richieste_tbl_tipologie_richieste1_idx` (`id_tipologia_richiesta` ASC) ,
  INDEX `fk_tbl_richieste_tbl_priorita1_idx` (`id_priorita` ASC) ,
  INDEX `fk_tbl_richieste_tbl_stati_richieste1_idx` (`id_stato_richiesta` ASC) ,
  INDEX `fk_tbl_richieste_tbl_utenti_uffici_ruoli_statocorrente1_idx` (`id_utente_ufficio_ruolo_stato_corrente` ASC) ,
  INDEX `fk_tbl_richieste_tbl_settori_uffici1_idx` (`id_settore_ufficio_evasione` ASC) ,
  CONSTRAINT `fk_tbl_richieste_tbl_utenti_uffici_ruoli_stato_iniziale`
    FOREIGN KEY (`id_utente_ufficio_ruolo_stato_iniziale`)
    REFERENCES `prggestionerichieste`.`tbl_utenti_uffici_ruoli` (`id_utente_ufficio_ruolo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_richieste_tbl_tipologie_richieste`
    FOREIGN KEY (`id_tipologia_richiesta`)
    REFERENCES `prggestionerichieste`.`tbl_tipologie_richieste` (`id_tipologia_richiesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_richieste_tbl_priorita`
    FOREIGN KEY (`id_priorita`)
    REFERENCES `prggestionerichieste`.`tbl_priorita` (`id_priorita`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_richieste_tbl_stati_richieste`
    FOREIGN KEY (`id_stato_richiesta`)
    REFERENCES `prggestionerichieste`.`tbl_stati_richieste` (`id_stato_richiesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_richieste_tbl_utenti_uffici_ruoli_stato_corrente`
    FOREIGN KEY (`id_utente_ufficio_ruolo_stato_corrente`)
    REFERENCES `prggestionerichieste`.`tbl_utenti_uffici_ruoli` (`id_utente_ufficio_ruolo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_richieste_tbl_settori_uffici`
    FOREIGN KEY (`id_settore_ufficio_evasione`)
    REFERENCES `prggestionerichieste`.`tbl_settori_uffici` (`id_settore_ufficio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_modelli`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_modelli` (
  `id_modello` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `descrizione_modello` VARCHAR(120) NOT NULL,
  `transcodifica_modello` BLOB NOT NULL,
  `attivo` BIT NOT NULL,
  PRIMARY KEY (`id_modello`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_settori_richieste`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_settori_richieste` (
  `id_settore` INT UNSIGNED NOT NULL,
  `id_tipologia_richiesta` SMALLINT UNSIGNED NOT NULL,
  `attivo` BIT NOT NULL,
  PRIMARY KEY (`id_tipologia_richiesta`, `id_settore`),
  INDEX `fk_tbl_settore_richiesta_has_tbl_richieste_tbl_settore_rich1_idx` (`id_settore` ASC) ,
  INDEX `fk_tbl_settori_richieste_tbl_tipologie_richieste1_idx` (`id_tipologia_richiesta` ASC) ,
  CONSTRAINT `fk_tbl_settori_richieste_tbl_settori`
    FOREIGN KEY (`id_settore`)
    REFERENCES `prggestionerichieste`.`tbl_settori` (`id_settore`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_settori_richieste_tbl_tipologie_richieste`
    FOREIGN KEY (`id_tipologia_richiesta`)
    REFERENCES `prggestionerichieste`.`tbl_tipologie_richieste` (`id_tipologia_richiesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_modelli_tipologie_richieste`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_modelli_tipologie_richieste` (
  `id_modello` INT UNSIGNED NOT NULL,
  `id_tipologia_richiesta` SMALLINT UNSIGNED NOT NULL,
  `attivo` BIT NOT NULL,
  `data_disattivazione` DATETIME NULL,
  PRIMARY KEY (`id_tipologia_richiesta`, `id_modello`),
  INDEX `fk_tbl_modelli_tipologie_richieste_tbl_tipologie_richieste1_idx` (`id_tipologia_richiesta` ASC) ,
  CONSTRAINT `fk_tbl_modelli_tipologie_richieste_tbl_modello`
    FOREIGN KEY (`id_modello`)
    REFERENCES `prggestionerichieste`.`tbl_modelli` (`id_modello`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_modelli_tipologie_richieste_tbl_tipologie_richieste`
    FOREIGN KEY (`id_tipologia_richiesta`)
    REFERENCES `prggestionerichieste`.`tbl_tipologie_richieste` (`id_tipologia_richiesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_storico_stati_richieste`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_storico_stati_richieste` (
  `id_storico_stato_richiesta` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `data_stato_richiesta` DATETIME NOT NULL,
  `note` VARCHAR(3000) NULL DEFAULT NULL,
  `id_stato_richiesta` INT UNSIGNED NOT NULL,
  `id_richiesta` INT UNSIGNED NOT NULL,
  `id_utente_ufficio_ruolo` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id_storico_stato_richiesta`),
  INDEX `fk_tbl_storico_stati_richieste_tbl_stati_richieste1_idx` (`id_stato_richiesta` ASC) ,
  INDEX `fk_tbl_storico_stati_richieste_tbl_richieste1_idx` (`id_richiesta` ASC) ,
  INDEX `fk_tbl_storico_stati_richieste_tbl_utenti_uffici_ruoli1_idx` (`id_utente_ufficio_ruolo` ASC) ,
  CONSTRAINT `fk_tbl_storico_stati_richieste_tbl_stati_richieste`
    FOREIGN KEY (`id_stato_richiesta`)
    REFERENCES `prggestionerichieste`.`tbl_stati_richieste` (`id_stato_richiesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_storico_stati_richieste_tbl_richieste`
    FOREIGN KEY (`id_richiesta`)
    REFERENCES `prggestionerichieste`.`tbl_richieste` (`id_richiesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_storico_stati_richieste_tbl_utenti_uffici_ruoli1`
    FOREIGN KEY (`id_utente_ufficio_ruolo`)
    REFERENCES `prggestionerichieste`.`tbl_utenti_uffici_ruoli` (`id_utente_ufficio_ruolo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_modelli_compilati`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_modelli_compilati` (
  `id_modello_compilato` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `file_modello` BLOB NOT NULL,
  `id_modello` INT UNSIGNED NOT NULL,
  `id_richiesta` INT UNSIGNED NOT NULL,
  `transcodifica_modello_compilato` BLOB NOT NULL,
  PRIMARY KEY (`id_modello_compilato`),
  INDEX `fk_modelli_compilati_tbl_modelli1_idx` (`id_modello` ASC) ,
  INDEX `fk_modelli_compilati_tbl_richieste1_idx` (`id_richiesta` ASC) ,
  CONSTRAINT `fk_modelli_compilati_tbl_modelli1`
    FOREIGN KEY (`id_modello`)
    REFERENCES `prggestionerichieste`.`tbl_modelli` (`id_modello`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_modelli_compilati_tbl_richieste1`
    FOREIGN KEY (`id_richiesta`)
    REFERENCES `prggestionerichieste`.`tbl_richieste` (`id_richiesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_flussi_richieste`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_flussi_richieste` (
  `id_stato_richiesta_attuale` INT UNSIGNED NOT NULL,
  `id_stato_richiesta_successivo` INT UNSIGNED NOT NULL,
  `id_tipologia_richiesta` SMALLINT UNSIGNED NOT NULL,
  PRIMARY KEY (`id_stato_richiesta_attuale`, `id_stato_richiesta_successivo`, `id_tipologia_richiesta`),
  INDEX `fk_tbl_flussi_ricchieste_tbl_stati_richieste2_idx` (`id_stato_richiesta_successivo` ASC) ,
  INDEX `fk_tbl_flussi_ricchieste_tbl_tipologie_richieste1_idx` (`id_tipologia_richiesta` ASC) ,
  CONSTRAINT `fk_tbl_flussi_ricchieste_tbl_stati_richieste1`
    FOREIGN KEY (`id_stato_richiesta_attuale`)
    REFERENCES `prggestionerichieste`.`tbl_stati_richieste` (`id_stato_richiesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_flussi_ricchieste_tbl_stati_richieste2`
    FOREIGN KEY (`id_stato_richiesta_successivo`)
    REFERENCES `prggestionerichieste`.`tbl_stati_richieste` (`id_stato_richiesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_flussi_ricchieste_tbl_tipologie_richieste1`
    FOREIGN KEY (`id_tipologia_richiesta`)
    REFERENCES `prggestionerichieste`.`tbl_tipologie_richieste` (`id_tipologia_richiesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_funzionalita`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_funzionalita` (
  `id_funzionalita` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `descrizione_funzionalità` VARCHAR(120) NOT NULL,
  `titolo` VARCHAR(50) NOT NULL,
  `url` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id_funzionalita`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_menu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_menu` (
  `id_menu` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_funzionalita` INT UNSIGNED NOT NULL,
  `id_menu_padre` INT UNSIGNED NULL,
  `titolo` VARCHAR(50) NULL,
  `default` BIT NOT NULL,
  `posizione_menu` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_menu`),
  INDEX `fk_tbl_menu_tbl_menu1_idx` (`id_menu_padre` ASC) ,
  INDEX `fk_tbl_menu_tbl_funzionalita1_idx` (`id_funzionalita` ASC) ,
  CONSTRAINT `fk_tbl_menu_tbl_menu1`
    FOREIGN KEY (`id_menu_padre`)
    REFERENCES `prggestionerichieste`.`tbl_menu` (`id_menu`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_menu_tbl_funzionalita1`
    FOREIGN KEY (`id_funzionalita`)
    REFERENCES `prggestionerichieste`.`tbl_funzionalita` (`id_funzionalita`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_ruoli_funzionalita`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_ruoli_funzionalita` (
  `id_ruolo_funzionalita` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_ruolo` INT UNSIGNED NOT NULL,
  `id_funzionalita` INT UNSIGNED NOT NULL,
  `attivo` BIT NOT NULL,
  PRIMARY KEY (`id_ruolo_funzionalita`),
  INDEX `fk_tbl_ruoli_has_tbl_funzionalita_tbl_funzionalita1_idx` (`id_funzionalita` ASC) ,
  INDEX `fk_tbl_ruoli_has_tbl_funzionalita_tbl_ruoli1_idx` (`id_ruolo` ASC) ,
  CONSTRAINT `fk_tbl_ruoli_has_tbl_funzionalita_tbl_ruoli1`
    FOREIGN KEY (`id_ruolo`)
    REFERENCES `prggestionerichieste`.`tbl_ruoli` (`id_ruolo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_ruoli_has_tbl_funzionalita_tbl_funzionalita1`
    FOREIGN KEY (`id_funzionalita`)
    REFERENCES `prggestionerichieste`.`tbl_funzionalita` (`id_funzionalita`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prggestionerichieste`.`tbl_token`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prggestionerichieste`.`tbl_token` (
  `id_token` INT UNSIGNED NOT NULL,
  `token` VARCHAR(250) NOT NULL,
  `data_fine_token` DATETIME NOT NULL,
  `black_list` INT NULL,
  `id_utente_ufficio_ruolo` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id_token`),
  INDEX `fk_tbl_token_tbl_utenti_uffici_ruoli1_idx` (`id_utente_ufficio_ruolo` ASC) ,
  CONSTRAINT `fk_tbl_token_tbl_utenti_uffici_ruoli1`
    FOREIGN KEY (`id_utente_ufficio_ruolo`)
    REFERENCES `prggestionerichieste`.`tbl_utenti_uffici_ruoli` (`id_utente_ufficio_ruolo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
