-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 08 avr. 2024 à 19:28
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestion_port`
--

-- --------------------------------------------------------

--
-- Structure de la table `authorisation`
--

DROP TABLE IF EXISTS `authorisation`;
CREATE TABLE IF NOT EXISTS `authorisation` (
  `authorisation_id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(220) COLLATE utf8mb3_icelandic_ci NOT NULL,
  `code` int NOT NULL,
  PRIMARY KEY (`authorisation_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_icelandic_ci;

--
-- Déchargement des données de la table `authorisation`
--

INSERT INTO `authorisation` (`authorisation_id`, `nom`, `code`) VALUES
(1, 'Romeo Carlos', 2323),
(2, 'Romeo Carlos', 2323),
(3, 'Boss', 2323),
(4, 'Chris bro', 2323),
(5, 'lolo lala', 2323),
(6, 'Carl', 2323);

-- --------------------------------------------------------

--
-- Structure de la table `douane_declare`
--

DROP TABLE IF EXISTS `douane_declare`;
CREATE TABLE IF NOT EXISTS `douane_declare` (
  `id_declare` int NOT NULL AUTO_INCREMENT,
  `produit` varchar(200) COLLATE utf8mb3_icelandic_ci NOT NULL,
  `modele` varchar(200) COLLATE utf8mb3_icelandic_ci NOT NULL,
  `etat_produit` enum('good','acceptable','hard') COLLATE utf8mb3_icelandic_ci NOT NULL,
  `pays` varchar(200) COLLATE utf8mb3_icelandic_ci NOT NULL,
  `menace` varchar(200) COLLATE utf8mb3_icelandic_ci NOT NULL,
  `navire` varchar(200) COLLATE utf8mb3_icelandic_ci NOT NULL,
  `prix_vente` int NOT NULL,
  `prix_douane` int NOT NULL,
  `auth` enum('auth','non_auth') COLLATE utf8mb3_icelandic_ci NOT NULL,
  `description` text COLLATE utf8mb3_icelandic_ci NOT NULL,
  PRIMARY KEY (`id_declare`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_icelandic_ci;

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id_message` int NOT NULL AUTO_INCREMENT,
  `message_contenu` text COLLATE utf8mb3_icelandic_ci NOT NULL,
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`id_message`),
  KEY `id_user_fk` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_icelandic_ci;

-- --------------------------------------------------------

--
-- Structure de la table `planification`
--

DROP TABLE IF EXISTS `planification`;
CREATE TABLE IF NOT EXISTS `planification` (
  `id_planification` int NOT NULL AUTO_INCREMENT,
  `navire` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_icelandic_ci DEFAULT NULL,
  `navire_contenu` text CHARACTER SET utf8mb3 COLLATE utf8mb3_icelandic_ci,
  `time` time DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`id_planification`),
  KEY `id_user__fk` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_icelandic_ci;

--
-- Déchargement des données de la table `planification`
--

INSERT INTO `planification` (`id_planification`, `navire`, `navire_contenu`, `time`, `id_user`) VALUES
(2, 'navire Koffi', 'Voiture', '20:00:00', 1),
(3, 'Navire de Guerre', 'Chart', '06:30:00', NULL),
(4, 'Mavire Bosss', 'tenu vestimentaire', '18:45:00', NULL),
(5, 'Navire Kodjo', 'Matériel de beauté', '19:48:00', NULL),
(11, 'Navire KK de beauté', 'moto', '19:57:00', NULL),
(12, 'Navire KK de beauté', 'moto', '19:57:00', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `rapport`
--

DROP TABLE IF EXISTS `rapport`;
CREATE TABLE IF NOT EXISTS `rapport` (
  `id_rapport` int NOT NULL AUTO_INCREMENT,
  `id_user` int DEFAULT NULL,
  `contenu` text COLLATE utf8mb3_icelandic_ci NOT NULL,
  `rapportTitre` varchar(150) COLLATE utf8mb3_icelandic_ci NOT NULL,
  PRIMARY KEY (`id_rapport`),
  KEY `IdUser_fk` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_icelandic_ci;

--
-- Déchargement des données de la table `rapport`
--

INSERT INTO `rapport` (`id_rapport`, `id_user`, `contenu`, `rapportTitre`) VALUES
(1, NULL, 'de 7h 00 à 11h décharge des vehicule du navire TananRebe avec chargement des véhicule de livraison génerer par 10 hommes', 'rapport sur la deecharge des carguieson'),
(2, NULL, 'Décharge des matérielle or de prix pour le nord du togo aujourd\'hui le 27 à 17h 00 \r\nà 12h repos de tout la famille. dégustation de codoro sur un portique 7h repartition de l\'équipe', 'Navire TchinTchin Venu tout droit de chine '),
(3, NULL, 'jjjqlfjqmlfjlqsjf sqf qslkfjqsml fqmslf mqsdfjm qslfqsfqsdf sq mfqsldmjfsqml fmqsdf qmsfdlj qmslf qsmlf mqslf qsmlfjm qsfqslf mqsfq sfdm qslmdfjqsml fsqml df qsmflsdqj flmsqfjsqfqs fq of cm cmxovi woivwx cv vwxcmxw cv v a vsd lm dsq f sf sqldf qmsljdfm q djvmlj dqsmlf jvsq vsd vlsjvmqlsdj vmldsjvj qsdvj sljdvqs vjmlqsv qsmlv mlsdjvml jdmvj dj vmlkdjvlsdjvlvovj v vsdlqvklmsdjv qsmdvjqsld jvsqdjvqs dv sdlvjmldjeozn mdjv mojjdjsmljjldskml ml ml j', 'Déchargement du Navire Kodjo vi'),
(4, NULL, 'lqfjdlkdjfmlf qsfd jmqlsfdj f qsf lsdfj mslqf sflmsjf lfsj  fmfoi fmdf qsdljf sqmlo  c vlj vljf mqsdfj sqflkfj eio fmdqsf sqfdj lsfdj lqsfj lfqfmqs fqsjmf lsjf msqf  mfze fdsj fsjfmsql fmlf jmf sqldf mlskqdjf le fds mf dslf jlsfjsmqlfj sfj s fjflsqjfjezaojopsi v', 'rapport sur la décharge des moto à 19h');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(60) COLLATE utf8mb3_icelandic_ci NOT NULL,
  `prenoms` varchar(60) COLLATE utf8mb3_icelandic_ci NOT NULL,
  `email` varchar(225) COLLATE utf8mb3_icelandic_ci NOT NULL,
  `password` varchar(225) CHARACTER SET utf8mb3 COLLATE utf8mb3_icelandic_ci NOT NULL,
  `job` enum('visiteur','travailleur','admin','douane') COLLATE utf8mb3_icelandic_ci DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_icelandic_ci;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id_user`, `nom`, `prenoms`, `email`, `password`, `job`) VALUES
(1, 'Carlos', 'Romeo', 'amerocar101@gmail.com', '$2b$05$3lDYdFsuiSI/p0C/p/sEWusGSQKTwPvpD5jnd6J2Vs0Hj5rq5vvDS', 'travailleur'),
(2, 'Tchintchin', 'eunice', 'tchintchin@gmail.com', '$2b$05$20tH278ktKcvXux/PtL/tuZGbufLnjiAQjL6soKdgNmSOb6r/UNXC', 'travailleur'),
(4, 'Rebbe', 'Rebecca', 'Rebecca@gmail.com', '$2b$05$r92jQHGJQoslWi8JZChxcuFYOBIoHDkbq8nCnP9oTOINdHkgqCu8W', 'travailleur'),
(5, 'Rebeccavi', 'RebeccaVi', 'Reb@gmail.com', '$2b$05$uoeUpj/xSPHi5WN/K56lEuYNX7MRuvLHvSlRRR2h.d.UyC7Z1wcxC', 'visiteur'),
(6, 'EuniceVi', 'euniceGan', 'EuniceVi@gmail.com', '$2b$05$tyc2HyOcuaKlTrBx.7fbXuPuev6VedU3KGsYgXcB6pQTKfKAmJK/C', 'admin'),
(7, 'ROcarlo', 'Carl', 'carlos3@gmail.com', '$2b$05$RbXbXBRa4kNEKkyxrH.UE.MQe/2rsKgmUHe5kzEEnvD1q.rFzhnU2', 'travailleur'),
(9, 'rRebRomEu', 'EUnREb', 'ER@gmail.com', '$2b$05$QMemwYuGzznzMmLj6C8VluLuUPetAUzQl8N3uW4W4wrOi/KvkPmUi', 'travailleur'),
(10, 'sébastien', 'gérare', 'Gege@gmail.com', '$2b$05$nSvp0e7Gd7iSby/mI0OtY.HRNUEdXNpf35lTjhHHsfOE2kMMsLKgq', 'visiteur'),
(11, 'Rhomanus', 'Roma', 'Rhomaus@gmail.com', '$2b$05$qQx/VutzGKxdwUlL.yzWI.EMqel495cMYLMuj5.VdU02r7Oi2JeFS', 'admin');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `id_user_fk` FOREIGN KEY (`id_user`) REFERENCES `utilisateurs` (`id_user`);

--
-- Contraintes pour la table `planification`
--
ALTER TABLE `planification`
  ADD CONSTRAINT `id_user__fk` FOREIGN KEY (`id_user`) REFERENCES `utilisateurs` (`id_user`);

--
-- Contraintes pour la table `rapport`
--
ALTER TABLE `rapport`
  ADD CONSTRAINT `IdUser_fk` FOREIGN KEY (`id_user`) REFERENCES `utilisateurs` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
