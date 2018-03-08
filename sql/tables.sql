-- MySQL dump 10.16  Distrib 10.1.29-MariaDB, for Linux (x86_64)
--
-- Host: faure    Database: cs314
-- ------------------------------------------------------
-- Server version	10.1.29-MariaDB

--
-- Table structure for table `airports`
--

CREATE TABLE `airports` (
  `index` int(11) NOT NULL,
  `id` varchar(1000) DEFAULT NULL,
  `type` varchar(1000) DEFAULT NULL,
  `name` varchar(1000) DEFAULT NULL,
  `latitude` varchar(1000) DEFAULT NULL,
  `longitude` varchar(1000) DEFAULT NULL,
  `elevation` varchar(1000) DEFAULT NULL,
  `continent` varchar(1000) DEFAULT NULL,
  `iso_country` varchar(1000) DEFAULT NULL,
  `iso_region` varchar(1000) DEFAULT NULL,
  `municipality` varchar(1000) DEFAULT NULL,
  `scheduled_service` varchar(1000) DEFAULT NULL,
  `gps_code` varchar(1000) DEFAULT NULL,
  `iata_code` varchar(1000) DEFAULT NULL,
  `local_code` varchar(1000) DEFAULT NULL,
  `home_link` varchar(1000) DEFAULT NULL,
  `wikipedia_link` varchar(1000) DEFAULT NULL,
  `keywords` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`index`),
  FULLTEXT KEY `airports_name_idx` (`name`),
  FULLTEXT KEY `airpots_municipality_idx` (`municipality`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;