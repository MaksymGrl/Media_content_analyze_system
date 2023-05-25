-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`timestamps`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`timestamps` (
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL);


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Login` TEXT NOT NULL,
  `Password` TEXT NOT NULL,
  `Email` TEXT NOT NULL,
  `Role` TEXT NOT NULL,
  PRIMARY KEY (`Id`));


-- -----------------------------------------------------
-- Table `mydb`.`MediaContent`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`MediaContent` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Type` TEXT NOT NULL,
  `URL` TEXT NOT NULL,
  `Duration` TIME NULL,
  `Metadata` TEXT NOT NULL,
  PRIMARY KEY (`Id`));


-- -----------------------------------------------------
-- Table `mydb`.`Resource`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Resource` (
  `Id` INT NOT NULL,
  `URL` TEXT NOT NULL,
  `MediaContent_Id` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_Resource_MediaContent1_idx` (`MediaContent_Id` ASC) VISIBLE,
  CONSTRAINT `fk_Resource_MediaContent1`
    FOREIGN KEY (`MediaContent_Id`)
    REFERENCES `mydb`.`MediaContent` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`SearchResult`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`SearchResult` (
  `Id` INT NOT NULL,
  `Title` TEXT NOT NULL,
  `Description` TEXT NOT NULL,
  PRIMARY KEY (`Id`));


-- -----------------------------------------------------
-- Table `mydb`.`DateFilter`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`DateFilter` (
  `DateFrom` DATE NOT NULL,
  `DateTo` DATE NOT NULL,
  PRIMARY KEY (`DateFrom`));


-- -----------------------------------------------------
-- Table `mydb`.`ServiceRequest`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ServiceRequest` (
  `Id` INT NOT NULL,
  `Title` TEXT NOT NULL,
  `Description` TEXT NOT NULL,
  `Resource_Id` INT NOT NULL,
  `SearchResult_Id` INT NOT NULL,
  `DateFilter_DateFrom` DATE NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_ServiceRequest_Resource1_idx` (`Resource_Id` ASC) VISIBLE,
  INDEX `fk_ServiceRequest_SearchResult1_idx` (`SearchResult_Id` ASC) VISIBLE,
  INDEX `fk_ServiceRequest_DateFilter1_idx` (`DateFilter_DateFrom` ASC) VISIBLE,
  CONSTRAINT `fk_ServiceRequest_Resource1`
    FOREIGN KEY (`Resource_Id`)
    REFERENCES `mydb`.`Resource` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ServiceRequest_SearchResult1`
    FOREIGN KEY (`SearchResult_Id`)
    REFERENCES `mydb`.`SearchResult` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ServiceRequest_DateFilter1`
    FOREIGN KEY (`DateFilter_DateFrom`)
    REFERENCES `mydb`.`DateFilter` (`DateFrom`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`SupportContent`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`SupportContent` (
  `Id` INT NOT NULL,
  `Title` TEXT NOT NULL,
  `Description` TEXT NOT NULL,
  PRIMARY KEY (`Id`));


-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `Id` INT NOT NULL,
  `Description` TEXT NOT NULL,
  `Created` DATETIME NOT NULL,
  PRIMARY KEY (`Id`));


-- -----------------------------------------------------
-- Table `mydb`.`AcessControl`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`AcessControl` (
  `User_Id` INT NOT NULL,
  `ServiceRequest_Id` INT NOT NULL,
  `SupportContent_Id` INT NOT NULL,
  `Role_Id` INT NOT NULL,
  INDEX `fk_AcessControl_User1_idx` (`User_Id` ASC) VISIBLE,
  INDEX `fk_AcessControl_ServiceRequest1_idx` (`ServiceRequest_Id` ASC) VISIBLE,
  INDEX `fk_AcessControl_SupportContent1_idx` (`SupportContent_Id` ASC) VISIBLE,
  INDEX `fk_AcessControl_Role1_idx` (`Role_Id` ASC) VISIBLE,
  CONSTRAINT `fk_AcessControl_User1`
    FOREIGN KEY (`User_Id`)
    REFERENCES `mydb`.`User` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AcessControl_ServiceRequest1`
    FOREIGN KEY (`ServiceRequest_Id`)
    REFERENCES `mydb`.`ServiceRequest` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AcessControl_SupportContent1`
    FOREIGN KEY (`SupportContent_Id`)
    REFERENCES `mydb`.`SupportContent` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AcessControl_Role1`
    FOREIGN KEY (`Role_Id`)
    REFERENCES `mydb`.`Role` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

USE `mydb` ;

-- -----------------------------------------------------
-- Placeholder table for view `mydb`.`view1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`view1` (`id` INT);

-- -----------------------------------------------------
-- View `mydb`.`view1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`view1`;
USE `mydb`;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
