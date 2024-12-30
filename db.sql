-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2024 at 08:52 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `television_networks`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Recommended'),
(2, 'Popular'),
(3, 'Featured'),
(4, 'Favorites'),
(5, 'Watch Later');

-- --------------------------------------------------------

--
-- Table structure for table `channels`
--

CREATE TABLE `channels` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `channels`
--

INSERT INTO `channels` (`id`, `name`, `status`) VALUES
(1, 'CNN', 1),
(305, 'HBO', 1),
(306, 'BBC One', 1),
(307, 'CNN', 1),
(308, 'ESPN', 1),
(309, 'National Geographic', 1),
(310, 'Discovery Channel', 1),
(311, 'Fox News', 1),
(312, 'MTV', 1),
(313, 'History Channel', 1),
(314, 'Cartoon Network', 1),
(315, 'Starz', 1),
(316, 'Showtime', 1),
(317, 'Paramount Network', 1),
(318, 'TBS', 1),
(319, 'AMC', 1),
(320, 'FX', 1),
(321, 'NBC', 1),
(322, 'ABC', 1),
(323, 'CBS', 1),
(324, 'Telemundo', 1),
(325, 'Univision', 1),
(326, 'Sky News', 1),
(327, 'Al Jazeera', 1),
(328, 'Bloomberg', 1),
(329, 'ESPN2', 1),
(330, 'TNT', 1),
(331, 'USA Network', 1),
(332, 'Oxygen', 1),
(333, 'CMT', 1),
(334, 'We TV', 1),
(335, 'Lifetime', 1),
(336, 'Bravo', 1),
(337, 'The CW', 1),
(338, 'IFC', 1),
(339, 'Adult Swim', 1),
(340, 'HGTV', 1),
(341, 'Food Network', 1),
(342, 'Cooking Channel', 1),
(343, 'Travel Channel', 1),
(344, 'DIY Network', 1),
(345, 'Animal Planet', 1),
(346, 'Sci-Fi Channel', 1),
(347, 'Syfy', 1),
(348, 'Lifetime Movie Network', 1),
(349, 'Hallmark Channel', 1),
(350, 'ION Television', 1),
(351, 'QVC', 1),
(352, 'HSN', 1),
(353, 'PBS', 1),
(354, 'SundanceTV', 1),
(355, 'Nat Geo Wild', 1),
(356, 'BBC America', 1),
(357, 'Logo TV', 1),
(358, 'Cineplex', 1),
(359, 'Netflix', 1),
(360, 'Hulu', 1),
(361, 'Amazon Prime Video', 1),
(362, 'Disney+', 1),
(363, 'YouTube', 1),
(364, 'Vimeo', 1),
(365, 'Crunchyroll', 1),
(366, 'Tubi', 1),
(367, 'Pluto TV', 1),
(368, 'Peacock', 1),
(369, 'Paramount+', 1),
(370, 'Apple TV+', 1),
(371, 'FuboTV', 1),
(372, 'Philo', 1),
(373, 'Sling TV', 1),
(374, 'YouTube TV', 1),
(375, 'BBC News', 1),
(376, 'Sky Sports', 1),
(377, 'beIN Sports', 1),
(378, 'ESPN Deportes', 1),
(379, 'NBC Sports', 1),
(380, 'Golf Channel', 1),
(381, 'NFL Network', 1),
(382, 'MLB Network', 1),
(383, 'NBA TV', 1),
(384, 'NHL Network', 1),
(385, 'SEC Network', 1),
(386, 'ACC Network', 1),
(387, 'Big Ten Network', 1),
(388, 'MotorTrend', 1),
(389, 'ESPN Classic', 1),
(390, 'Speed Channel', 1),
(391, 'Outdoor Channel', 1),
(392, 'RFD-TV', 1),
(393, 'Weather Channel', 1),
(394, 'Tennis Channel', 1),
(395, 'NBCSN', 1),
(396, 'Sportsnet', 1),
(397, 'RugbyPass', 1),
(398, 'EuroSport', 1),
(399, 'FIFA TV', 1),
(400, 'NFL RedZone', 1),
(401, 'For the Fans', 1),
(402, 'NASCAR', 1),
(403, 'Olympics Channel', 1);

-- --------------------------------------------------------

--
-- Table structure for table `channelss`
--

CREATE TABLE `channelss` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `channelss`
--

INSERT INTO `channelss` (`id`, `name`, `status`) VALUES
(1, 'Channel 1', 1),
(2, 'Channel 2', 1),
(3, 'Channel 3', 1),
(4, 'Channel 4', 1),
(5, 'Channel 5', 1),
(6, 'Channel 6', 1),
(7, 'Channel 7', 1),
(8, 'Channel 8', 1),
(9, 'Channel 9', 1),
(10, 'Channel 10', 1),
(11, 'Channel 11', 1),
(12, 'Channel 12', 1),
(13, 'Channel 13', 1),
(14, 'Channel 14', 1),
(15, 'Channel 15', 1),
(16, 'Channel 16', 1),
(17, 'Channel 17', 1),
(18, 'Channel 18', 1),
(19, 'Channel 19', 1),
(20, 'Channel 20', 1),
(21, 'Channel 21', 1),
(22, 'Channel 22', 1),
(23, 'Channel 23', 1),
(24, 'Channel 24', 1),
(25, 'Channel 25', 1),
(26, 'Channel 26', 1),
(27, 'Channel 27', 1),
(28, 'Channel 28', 1),
(29, 'Channel 29', 1),
(30, 'Channel 30', 1),
(31, 'Channel 31', 1),
(32, 'Channel 32', 1),
(33, 'Channel 33', 1),
(34, 'Channel 34', 1),
(35, 'Channel 35', 1),
(36, 'Channel 36', 1),
(37, 'Channel 37', 1),
(38, 'Channel 38', 1),
(39, 'Channel 39', 1),
(40, 'Channel 40', 1),
(41, 'Channel 41', 1),
(42, 'Channel 42', 1),
(43, 'Channel 43', 1),
(44, 'Channel 44', 1),
(45, 'Channel 45', 1),
(46, 'Channel 46', 1),
(47, 'Channel 47', 1),
(48, 'Channel 48', 1),
(49, 'Channel 49', 1),
(50, 'Channel 50', 1),
(51, 'Channel 51', 1),
(52, 'Channel 52', 1),
(53, 'Channel 53', 1),
(54, 'Channel 54', 1),
(55, 'Channel 55', 1),
(56, 'Channel 56', 1),
(57, 'Channel 57', 1),
(58, 'Channel 58', 1),
(59, 'Channel 59', 1),
(60, 'Channel 60', 1),
(61, 'Channel 61', 1),
(62, 'Channel 62', 1),
(63, 'Channel 63', 1),
(64, 'Channel 64', 1),
(65, 'Channel 65', 1),
(66, 'Channel 66', 1),
(67, 'Channel 67', 1),
(68, 'Channel 68', 1),
(69, 'Channel 69', 1),
(70, 'Channel 70', 1),
(71, 'Channel 71', 1),
(72, 'Channel 72', 1),
(73, 'Channel 73', 1),
(74, 'Channel 74', 1),
(75, 'Channel 75', 1),
(76, 'Channel 76', 1),
(77, 'Channel 77', 1),
(78, 'Channel 78', 1),
(79, 'Channel 79', 1),
(80, 'Channel 80', 1),
(81, 'Channel 81', 1),
(82, 'Channel 82', 1),
(83, 'Channel 83', 1),
(84, 'Channel 84', 1),
(85, 'Channel 85', 1),
(86, 'Channel 86', 1),
(87, 'Channel 87', 1),
(88, 'Channel 88', 1),
(89, 'Channel 89', 1),
(90, 'Channel 90', 1),
(91, 'Channel 91', 1),
(92, 'Channel 92', 1),
(93, 'Channel 93', 1),
(94, 'Channel 94', 1),
(95, 'Channel 95', 1),
(96, 'Channel 96', 1),
(97, 'Channel 97', 1),
(98, 'Channel 98', 1),
(99, 'Channel 99', 1),
(100, 'Channel 100', 1);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `firstname` varchar(56) NOT NULL,
  `lastname` varchar(67) NOT NULL,
  `email` varchar(54) NOT NULL,
  `phone` bigint(78) NOT NULL,
  `role` varchar(65) NOT NULL,
  `department` varchar(45) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `firstname`, `lastname`, `email`, `phone`, `role`, `department`, `username`, `password`) VALUES
(6, 'selam', 'mulugeta', 'danielelasemail@gmail.com', 96753456, 'ADMIN', 'IT', 'dad', '$2a$10$e0ypRyALXIotMafr8iWGQO9RcEKE8UBlHwMg36sHWnHfHTTNgH6Fy'),
(7, 'Daniel', 'Elias', 'd@gmail.com', 8877777, 'admin', 'it', 'add', '$2a$10$./C.qJWOkfJfPVpJhSSNpOcgAG5fKi1bE5a60iXoyAUZeJubJgC26'),
(9, 'Habtamu', 'Elias', 'd@gmail.com', 8877777, 'admin', 'it', 'iop', '$2a$10$kbrYu/LXQtNzetlitH2b0eYGAV3i5snD2uXgl.YlWkYB.umbVA/zm'),
(10, 'Daniel', 'Elias ', 'danielelasemail@gmail.com', 967533213, 'admin', 'it', 'kale', '$2a$10$b543RqQK7OBsrQJUqcRsa.QgzygN.V/I0SlkyfSgL6tuYUcwsk9z6');

-- --------------------------------------------------------

--
-- Table structure for table `programs`
--

CREATE TABLE `programs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `duration` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  `channelId` int(11) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `programs`
--

INSERT INTO `programs` (`id`, `title`, `duration`, `description`, `typeId`, `channelId`, `categoryId`, `status`) VALUES
(66, 'FOX', 56, 'its nice updated\n', 1, 1, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `name`) VALUES
(1, 'Live TV'),
(2, 'Movies'),
(3, 'TV Shows'),
(4, 'Sports');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(54) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'testUser', '', 'hashed_password_here');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `channels`
--
ALTER TABLE `channels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `channelss`
--
ALTER TABLE `channelss`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `programs`
--
ALTER TABLE `programs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `typeId` (`typeId`),
  ADD KEY `channelId` (`channelId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `channels`
--
ALTER TABLE `channels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=404;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `programs`
--
ALTER TABLE `programs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `programs`
--
ALTER TABLE `programs`
  ADD CONSTRAINT `programs_ibfk_1` FOREIGN KEY (`typeId`) REFERENCES `types` (`id`),
  ADD CONSTRAINT `programs_ibfk_2` FOREIGN KEY (`channelId`) REFERENCES `channels` (`id`),
  ADD CONSTRAINT `programs_ibfk_3` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
