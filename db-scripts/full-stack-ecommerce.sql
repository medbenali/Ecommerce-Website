-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 27, 2024 at 03:34 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `full-stack-ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` bigint(20) NOT NULL,
  `date_created` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `date_created`, `email`, `message`, `name`, `subject`) VALUES
(8, '2024-09-26 16:17:33', 'mohamed.benali@esprit.tn        2', 'aaaaaaaaaaaaaaa', 'mohamed', '[Candidature Spontanée] Développeur Junior Full Stack Java/Spring Boot/Angular'),
(9, '2024-09-26 16:37:51', 'aa', 'aaaaaaaa', 'aa', 'aa'),
(10, '2024-09-26 16:38:10', 'aa', 'aaaaaaaa', 'aa', 'aa'),
(11, '2024-09-26 16:38:21', 'aa', 'aaaaaaaa', 'aa', 'aa'),
(12, '2024-09-26 16:38:25', 'aa', 'aaaaaaaa', 'aa', 'aa'),
(13, '2024-09-26 16:40:20', 'aaaaaaaaaaaaa', 'aaaaaaaaaaa', 'a', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(14, '2024-09-26 16:40:34', '&&&&&&&&&&&&&&&', '&&&&&&&&&&&&', '&', '&&&&&&&&&&&&&&&&&&&&&&&&'),
(15, '2024-09-26 16:40:41', 'zzzzzzzzzzzzzzzzzzzzzzzzz', 'zzzzzzzzzzzzzzz', 'zz', 'zzzzzzzzzzzzzzzzzzzzzzzzzzz'),
(16, '2024-09-26 16:42:31', 'éééééééééé', 'ééééééééééé', 'é', 'ééééééééééééééééééééééééé'),
(17, '2024-09-26 16:46:29', 'aaaaaaaa', 'aaaaaaaaaaa', 'a', 'aaaaaaaaaaaaaaaaaaaaa'),
(18, '2024-09-26 16:49:34', 'aaaaaaaaaaa', 'aaaaaaaaaaaaa', 'a', 'aaaaaaaaaaaaaaaaaaaaaa'),
(19, '2024-09-26 16:49:41', 'aaaaaaaaaaa', 'aaaaaaaaaaaaa', 'a', 'aaaaaaaaaaaaaaaaaaaaaa'),
(20, '2024-09-26 16:50:03', 'aaaaaaaaaaaaa', 'aaaaaaaaaa', 'a', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(21, '2024-09-26 16:50:09', 'aaaaaaaaaaa', 'aaaaaaaaaaaa', 'a', 'aaaaaaaaaaaaaaaaaaa'),
(22, '2024-09-26 16:51:39', 'aaaaaaaaaaaaa', 'aaaaaaaaaaaa', 'a', 'aaaaaaaaaaaaaaaaaaaaaaaaa'),
(23, '2024-09-26 16:54:58', 'b', 'd', 'a', 'c'),
(24, '2024-09-26 16:55:34', 'aaaaaaaaaaaaaaaaaaa', 'aaaaaaaaa', 'a', 'aaaaaaaaaaaaaaaaaaaaaaaaaa'),
(25, '2024-09-26 16:55:46', 'aaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaa', 'a', 'aaaaaaaaaaaaaaaaaaa');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` bigint(20) NOT NULL,
  `active` bit(1) DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sku` varchar(255) DEFAULT NULL,
  `unit_price` decimal(19,2) DEFAULT NULL,
  `units_in_stock` int(11) DEFAULT NULL,
  `category_id` bigint(20) NOT NULL,
  `discount_price` decimal(19,2) DEFAULT NULL,
  `product_review` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `active`, `date_created`, `description`, `image_url`, `last_updated`, `name`, `sku`, `unit_price`, `units_in_stock`, `category_id`, `discount_price`, `product_review`) VALUES
(1, b'1', '2024-09-25 11:59:41', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'assets/frontend/images/product/men/product6.jpg', '2024-09-25 11:59:41', 'New Fashion B Nice Elegant', NULL, '125.00', 100, 1, NULL, 25),
(2, b'1', '2024-09-25 12:02:37', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'assets/frontend/images/product/women/product5.jpg', '2024-09-25 12:02:37', 'New Dress A Nice Elegant', NULL, '125.00', 5, 2, NULL, 25),
(3, b'1', '2024-09-25 12:05:10', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'assets/frontend/images/product/women/product6.jpg', '2024-09-25 12:05:10', 'New Dress B Nice Elegant', NULL, '125.00', 8, 2, NULL, 25),
(4, b'1', '2024-09-25 12:07:31', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'assets/frontend/images/product/women/product7.jpg', '2024-09-25 12:07:31', 'New Dress C Nice Elegant', NULL, '125.00', 4, 2, NULL, 20),
(5, b'1', '2024-09-25 12:09:25', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'assets/frontend/images/product/men/product9.jpg', '2024-09-25 12:09:25', 'New Fashion E Nice Elegant', NULL, '125.00', 10, 1, NULL, NULL),
(6, b'1', '2024-09-25 12:11:34', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'assets/frontend/images/product/men/product10.jpg', '2024-09-25 12:11:34', 'New Fashion F Nice Elegant', NULL, '125.00', 12, 1, NULL, NULL),
(7, b'1', '2024-09-25 12:13:39', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'assets/frontend/images/product/electronic/product2.jpg', '2024-09-25 14:13:39', 'Red Wireless Headphone', NULL, '125.00', 20, 3, NULL, NULL),
(8, b'1', '2024-09-25 12:16:05', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'assets/frontend/images/product/electronic/product3.jpg', '2024-09-25 12:16:05', 'Yellow Wireless Headphone', NULL, '125.00', 25, 3, '22.00', 23),
(9, b'1', '2024-09-25 12:19:56', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'assets/frontend/images/product/electronic/product4.jpg', '2024-09-25 12:19:56', 'Hover Skateboard Scooter', NULL, '125.00', 6, 3, '22.00', 23),
(10, b'1', '2024-09-25 12:22:28', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'assets/frontend/images/product/electronic/product5.jpg', '2024-09-25 12:22:28', 'Hover Red Skateboard Scooter', NULL, '125.00', 15, 3, '22.00', 23),
(11, b'1', '2024-09-25 12:25:51', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'assets/frontend/images/product/electronic/product6.jpg', '2024-09-25 12:25:51', 'Canon DSLR Camera 4k', NULL, '125.00', 30, 3, '22.00', 23),
(12, b'1', '2024-09-25 12:27:56', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'assets/frontend/images/product/electronic/product7.jpg', '2024-09-25 12:27:56', 'Nikon DSLR Camera 4k', NULL, '125.00', 10, 3, '22.00', 23),
(13, b'1', '2024-09-25 12:02:37', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'assets/frontend/images/product/women/product5.jpg', '2024-09-25 12:02:37', 'New Dress A Nice Elegant', NULL, '125.00', 5, 2, NULL, 25);

-- --------------------------------------------------------

--
-- Table structure for table `product_category`
--

CREATE TABLE `product_category` (
  `id` bigint(20) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_category`
--

INSERT INTO `product_category` (`id`, `category_name`) VALUES
(1, 'Men Clothing'),
(2, 'Women Clothing'),
(3, 'Electronics');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK5cypb0k23bovo3rn1a5jqs6j4` (`category_id`);

--
-- Indexes for table `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `product_category`
--
ALTER TABLE `product_category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK5cypb0k23bovo3rn1a5jqs6j4` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
