-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema listit
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema listit
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `listit` DEFAULT CHARACTER SET utf8 ;
USE `listit` ;

-- -----------------------------------------------------
-- Table `listit`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `listit`.`categories` (
  `category_id` INT(11) NOT NULL,
  `category_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`category_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `listit`.`item_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `listit`.`item_category` (
  `item_id` INT(11) NOT NULL,
  `category_id` INT(11) NOT NULL,
  PRIMARY KEY (`item_id`, `category_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `listit`.`items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `listit`.`items` (
  `item_id` INT(11) NOT NULL AUTO_INCREMENT,
  `item_name` VARCHAR(45) NOT NULL,
  `quantity` INT(11) NOT NULL,
  `category_id` INT(11) NULL DEFAULT NULL,
  `checked` VARCHAR(5) NULL DEFAULT NULL,
  PRIMARY KEY (`item_id`),
  UNIQUE INDEX `item_name_UNIQUE` (`item_name` ASC) VISIBLE,
  INDEX `category_id_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `listit`.`categories` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 80
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `listit`.`lists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `listit`.`lists` (
  `list_id` INT(11) NOT NULL AUTO_INCREMENT,
  `list_name` VARCHAR(45) NULL DEFAULT NULL,
  `user_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`list_id`),
  UNIQUE INDEX `list_id_UNIQUE` (`list_id` ASC) VISIBLE,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `listit`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `listit`.`users` (
  `user_id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(10000) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 29
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
