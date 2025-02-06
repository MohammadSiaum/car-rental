-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 10, 2023 at 02:50 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_rental_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `car_id` int(11) NOT NULL,
  `provider_id` int(11) DEFAULT NULL,
  `model` varchar(20) DEFAULT NULL,
  `seating_capacity` varchar(20) DEFAULT NULL,
  `rent_price` varchar(20) DEFAULT NULL,
  `mileage` varchar(20) DEFAULT NULL,
  `aesthetic_condition` varchar(20) DEFAULT NULL,
  `availability` varchar(20) DEFAULT NULL,
  `oil_type` varchar(20) DEFAULT NULL,
  `rating` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`car_id`, `provider_id`, `model`, `seating_capacity`, `rent_price`, `mileage`, `aesthetic_condition`, `availability`, `oil_type`, `rating`) VALUES
(200000, 100005, 'X-corolla', '6', '2000', '200k', 'good', 'available', 'patrol', '5'),
(200001, 100008, 'Allien-x', '3', '2000', '40k', 'good', 'available', 'patrol', '4'),
(200002, 100008, 'Allien-x2', '5', '5000', '200k', 'good', 'available', 'patrol', '4'),
(200003, 100008, 'Auto s2', '6', '30000', '400k', 'good', 'available', 'patrol', '4'),
(200004, 100008, 'Hinse T2', '5', '4000', '200k', 'good', 'available', 'patrol', '4'),
(200007, 100009, 'Auto s2', '6', '30000', '200k', 'good', 'available', 'patrol', '4'),
(200008, NULL, 'Allien-x', '5', '2000', '770k', 'good', 'available', 'patrol', '4'),
(200010, 100010, 'Allien-x2', '8', '50001', '40k', 'good', 'available', 'patrol', '4'),
(200011, 100010, 'Hinse T2', '5', '4001', '200k', 'good', 'available', 'patrol', '4');

-- --------------------------------------------------------

--
-- Table structure for table `car_booking`
--

CREATE TABLE `car_booking` (
  `car_booking_id` int(11) NOT NULL,
  `seeker_id` int(11) DEFAULT NULL,
  `car_id` int(11) DEFAULT NULL,
  `days` varchar(20) DEFAULT NULL,
  `start_date` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `car_booking`
--

INSERT INTO `car_booking` (`car_booking_id`, `seeker_id`, `car_id`, `days`, `start_date`) VALUES
(400006, NULL, 200000, '12', '2023-08-28');

-- --------------------------------------------------------

--
-- Table structure for table `car_review`
--

CREATE TABLE `car_review` (
  `car_review_id` int(11) NOT NULL,
  `car_id` int(11) DEFAULT NULL,
  `rating` varchar(20) DEFAULT NULL,
  `review_text` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

CREATE TABLE `drivers` (
  `driver_id` int(11) NOT NULL,
  `provider_id` int(11) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `address` varchar(20) DEFAULT NULL,
  `license_number` varchar(20) DEFAULT NULL,
  `experience` varchar(20) DEFAULT NULL,
  `rating` varchar(20) DEFAULT NULL,
  `availability` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `drivers`
--

INSERT INTO `drivers` (`driver_id`, `provider_id`, `name`, `email`, `address`, `license_number`, `experience`, `rating`, `availability`, `phone`) VALUES
(300000, 100006, 'Jamal', 'jamal@gmail.com', 'Mirpur-1,Dhaka', 'BB05-4503-25', '2 year', '3', 'available', '015942383'),
(300001, 100007, 'sorif', 'sorif@gmail.com', 'Mirpur-10,Dhaka', 'AB05-4503-75', '4 year', '4', 'available', '01693984328'),
(300002, 100008, 'primo x1', 'primo@ph.com', 'mirpur', '5345243523', '2 year', '4', 'available', '01574238943'),
(300003, 100008, 'Toyota', 'toyota@ph.com', 'Badda', '534823490', '5 year', '4', 'available', '0134532984'),
(300005, 100009, 'Tamim', 'tamim@ch.com', 'Dhaka, Bangladesd', '534553', '2 year', '4', 'available', '4098509354594'),
(300006, 100010, 'rofik', 'rofik@g.com', 'Dhaka, Bangladesd', '534553', '5 year', '4', 'available', '6543534'),
(300007, 100010, 'Juman', 'juman@car.com', 'Badda', '534544', '5 year', '4', 'available', '46453456');

-- --------------------------------------------------------

--
-- Table structure for table `driver_review`
--

CREATE TABLE `driver_review` (
  `car_review_id` int(11) NOT NULL,
  `driver_id` int(11) DEFAULT NULL,
  `rating` varchar(20) DEFAULT NULL,
  `review_text` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hired_driver`
--

CREATE TABLE `hired_driver` (
  `hired_id` int(11) NOT NULL,
  `seeker_id` int(11) DEFAULT NULL,
  `driver_id` int(11) DEFAULT NULL,
  `days` varchar(20) DEFAULT NULL,
  `start_date` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hired_driver`
--

INSERT INTO `hired_driver` (`hired_id`, `seeker_id`, `driver_id`, `days`, `start_date`) VALUES
(500011, 100001, 300000, '12', '2023-08-30');

-- --------------------------------------------------------

--
-- Table structure for table `providercar`
--

CREATE TABLE `providercar` (
  `ProviderCar_id` int(11) NOT NULL,
  `Provider_id` int(11) DEFAULT NULL,
  `car_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `providerdriver`
--

CREATE TABLE `providerdriver` (
  `ProviderDriver` int(11) NOT NULL,
  `Provider_id` int(11) DEFAULT NULL,
  `driver_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  `user_password` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `email`, `phone`, `role`, `user_password`) VALUES
(100000, 'Muhin', 'muhin@gmail.com', '017xxxxxx', 'seeker', '12345'),
(100001, 'Ali khan', 'ali@khan.com', '01237742389', 'seeker', '123456'),
(100004, 'Mark Zucker', 'mark@fb.com', '95943892', 'seeker', '1234567'),
(100005, 'foysal', 'foysal@gmail.com', '017734589032', 'provider', '123456'),
(100006, 'sorif', 'sorif@gmail.com', '017735434235', 'provider', '123456'),
(100007, 'Jamal', 'jamal@gmail.com', '01773558424', 'provider', '123456'),
(100008, 'Tamim', 'tamim@cr.com', '01794238432', 'provider', '123456'),
(100009, 'web5', 'web5@ph.com', '8530534953', 'provider', '123456'),
(100010, 'car10', 'car10@ph.com', '6465345', 'provider', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`car_id`),
  ADD KEY `fk_cars_users` (`provider_id`);

--
-- Indexes for table `car_booking`
--
ALTER TABLE `car_booking`
  ADD PRIMARY KEY (`car_booking_id`),
  ADD KEY `fk_bookingCar_cars` (`car_id`),
  ADD KEY `fk_bookingcars_users` (`seeker_id`);

--
-- Indexes for table `car_review`
--
ALTER TABLE `car_review`
  ADD PRIMARY KEY (`car_review_id`),
  ADD KEY `fk_carReview_car` (`car_id`);

--
-- Indexes for table `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`driver_id`),
  ADD KEY `fk_drivers_users` (`provider_id`);

--
-- Indexes for table `driver_review`
--
ALTER TABLE `driver_review`
  ADD PRIMARY KEY (`car_review_id`),
  ADD KEY `fk_driverReview_driver` (`driver_id`);

--
-- Indexes for table `hired_driver`
--
ALTER TABLE `hired_driver`
  ADD PRIMARY KEY (`hired_id`),
  ADD KEY `fk_bookingCar_users` (`seeker_id`),
  ADD KEY `fk_bookingCar_drivers` (`driver_id`);

--
-- Indexes for table `providercar`
--
ALTER TABLE `providercar`
  ADD PRIMARY KEY (`ProviderCar_id`),
  ADD KEY `fk_ProviderCar_Cars` (`Provider_id`);

--
-- Indexes for table `providerdriver`
--
ALTER TABLE `providerdriver`
  ADD PRIMARY KEY (`ProviderDriver`),
  ADD KEY `fk_ProviderDriver_Drivers` (`Provider_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `car_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200012;

--
-- AUTO_INCREMENT for table `car_booking`
--
ALTER TABLE `car_booking`
  MODIFY `car_booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=400007;

--
-- AUTO_INCREMENT for table `car_review`
--
ALTER TABLE `car_review`
  MODIFY `car_review_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `drivers`
--
ALTER TABLE `drivers`
  MODIFY `driver_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=300008;

--
-- AUTO_INCREMENT for table `driver_review`
--
ALTER TABLE `driver_review`
  MODIFY `car_review_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hired_driver`
--
ALTER TABLE `hired_driver`
  MODIFY `hired_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=500013;

--
-- AUTO_INCREMENT for table `providercar`
--
ALTER TABLE `providercar`
  MODIFY `ProviderCar_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `providerdriver`
--
ALTER TABLE `providerdriver`
  MODIFY `ProviderDriver` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100011;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `fk_cars_users` FOREIGN KEY (`provider_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `car_booking`
--
ALTER TABLE `car_booking`
  ADD CONSTRAINT `fk_bookingCar_cars` FOREIGN KEY (`car_id`) REFERENCES `cars` (`car_id`),
  ADD CONSTRAINT `fk_bookingcars_users` FOREIGN KEY (`seeker_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `car_review`
--
ALTER TABLE `car_review`
  ADD CONSTRAINT `fk_Car_review_cars` FOREIGN KEY (`car_id`) REFERENCES `cars` (`car_id`),
  ADD CONSTRAINT `fk_carReview_car` FOREIGN KEY (`car_id`) REFERENCES `cars` (`car_id`);

--
-- Constraints for table `drivers`
--
ALTER TABLE `drivers`
  ADD CONSTRAINT `fk_drivers_users` FOREIGN KEY (`provider_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `driver_review`
--
ALTER TABLE `driver_review`
  ADD CONSTRAINT `fk_driverReview_driver` FOREIGN KEY (`driver_id`) REFERENCES `drivers` (`driver_id`),
  ADD CONSTRAINT `fk_driver_review_driver` FOREIGN KEY (`driver_id`) REFERENCES `drivers` (`driver_id`);

--
-- Constraints for table `hired_driver`
--
ALTER TABLE `hired_driver`
  ADD CONSTRAINT `fk_bookingCar_drivers` FOREIGN KEY (`driver_id`) REFERENCES `drivers` (`driver_id`),
  ADD CONSTRAINT `fk_bookingCar_users` FOREIGN KEY (`seeker_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `providercar`
--
ALTER TABLE `providercar`
  ADD CONSTRAINT `fk_ProviderCar_Cars` FOREIGN KEY (`Provider_id`) REFERENCES `cars` (`car_id`),
  ADD CONSTRAINT `fk_ProviderCar_users` FOREIGN KEY (`Provider_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `providerdriver`
--
ALTER TABLE `providerdriver`
  ADD CONSTRAINT `fk_ProviderDriver_Drivers` FOREIGN KEY (`Provider_id`) REFERENCES `drivers` (`driver_id`),
  ADD CONSTRAINT `fk_ProviderDriver_users` FOREIGN KEY (`Provider_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
