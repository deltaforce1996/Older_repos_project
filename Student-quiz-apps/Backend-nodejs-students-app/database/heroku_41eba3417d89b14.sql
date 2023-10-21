-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2020 at 08:31 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `heroku_41eba3417d89b14`
--

-- --------------------------------------------------------

--
-- Table structure for table `childs`
--

CREATE TABLE `childs` (
  `Child_ID` varchar(10) NOT NULL COMMENT 'รหัสเด็ก',
  `Child_Information` varchar(50) NOT NULL COMMENT 'ชื่อ-สกุล เด็ก',
  `Child_Age` int(3) NOT NULL COMMENT 'อายุของเด็ก',
  `Score_ID` varchar(10) DEFAULT NULL COMMENT 'รหัสคะแนน',
  `Type_ID_No_Frist` varchar(10) DEFAULT NULL COMMENT 'ประเถทที่ 1',
  `Type_ID_No_Second` varchar(10) DEFAULT NULL COMMENT 'ประเถทที่ 2',
  `Type_ID_No_Third` varchar(10) DEFAULT NULL COMMENT 'ประเถทที่ 3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `childs`
--

INSERT INTO `childs` (`Child_ID`, `Child_Information`, `Child_Age`, `Score_ID`, `Type_ID_No_Frist`, `Type_ID_No_Second`, `Type_ID_No_Third`) VALUES
('C07575d862', 'เด็กหญิงมีนณิสา หมื่นพล', 4, 'S1b17e929', 'T01', 'T02', 'T03'),
('C1bdae4593', 'ด.ช.นิสสรณ์ หนูพิมทอง', 3, 'S1d327535', 'T01', NULL, NULL),
('C1ee3ea153', 'ธรรธิวา อมรพันธ์', 3, NULL, NULL, NULL, NULL),
('C2710f7268', 'หมอย', 3, 'S61908f469', 'T01', 'T02', NULL),
('C3d7b2e171', 'เด็กหญิงไมโล ไซซิง', 4, 'Sfbfd89107', 'T01', NULL, NULL),
('C4237e4759', 'นูราณีย์', 5, NULL, NULL, NULL, NULL),
('C5ecba7602', 'ดดด', 3, 'S48e7da844', 'T01', NULL, 'T03'),
('C67d0bb79', 'ปุญญพัฒน์ มะยะเฉียว', 3, 'S2b9667363', 'T01', NULL, NULL),
('C7224a457', 'สกาย', 5, 'S31786f361', NULL, NULL, NULL),
('C7ac9a9368', 'Name ', 25, 'S11d117814', 'T01', 'T02', 'T03'),
('C952cfd934', 'พรยุภา', 3, 'S2961ce362', NULL, NULL, 'T03'),
('Cb38090981', 'Congratulations', 5, 'S21aca9869', 'T01', 'T02', 'T03'),
('Cbdefa5636', 'น้าบุ', 3, NULL, NULL, NULL, NULL),
('Cc7c4eb438', 'เรนนี่', 3, 'S08627b486', NULL, 'T02', 'T03'),
('Cd8f47f714', 'อาทิวรา รุ่งสว่าง', 3, 'Sc85958980', 'T01', NULL, NULL),
('Cdeba15977', 'ด.ช.วรัญญู ทองเกลี้ยง', 2, 'S7e45f0648', NULL, 'T02', NULL),
('Cdfe223321', 'พงศกร ฉิมมณี', 5, 'S3a18d6871', NULL, NULL, NULL),
('Ce3ebfd437', 'ศุภกร', 6, 'Sfbd70b333', NULL, 'T02', NULL),
('Ce41afb359', 'สิรินภา ยัดไธสง', 6, 'Sdc6f8d478', NULL, 'T02', NULL),
('Ce59032810', 'พรพิพัฒน์ นวลวัฒน์', 3, 'Sdc5f89404', 'T01', 'T02', NULL),
('Cf8d372350', 'ไบร์ท', 3, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `loguseapp`
--

CREATE TABLE `loguseapp` (
  `ChildID` varchar(10) NOT NULL,
  `Date` date DEFAULT NULL,
  `Time` time DEFAULT NULL,
  `ScoreOne` int(11) DEFAULT NULL,
  `ScoreTwo` int(11) DEFAULT NULL,
  `ScoreThree` int(11) DEFAULT NULL,
  `Type_One` varchar(10) DEFAULT NULL,
  `Type_Two` varchar(10) DEFAULT NULL,
  `Type_Three` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `scores`
--

CREATE TABLE `scores` (
  `Score_ID` varchar(10) NOT NULL COMMENT 'รหัสคะแนน',
  `Score_Group_First` int(10) NOT NULL COMMENT 'คะแนนกลุ่ม 1',
  `Score_Group_Second` int(10) NOT NULL COMMENT 'คะแนนกลุ่ม 2',
  `Score_Group_Third` int(10) NOT NULL COMMENT 'คะแนนกลุ่ม 3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `scores`
--

INSERT INTO `scores` (`Score_ID`, `Score_Group_First`, `Score_Group_Second`, `Score_Group_Third`) VALUES
('S08627b486', 12, 16, 23),
('S11d117814', 18, 24, 21),
('S1a1634504', 6, 8, 9),
('S1b17e929', 36, 18, 17),
('S1d327535', 27, 11, 5),
('S21aca9869', 27, 31, 21),
('S252ea4907', 0, 0, 0),
('S2961ce362', 12, 8, 16),
('S2b9667363', 37, 13, 7),
('S31786f361', 9, 9, 8),
('S3a18d6871', 0, 0, 1),
('S3e9386860', 2, 1, 2),
('S48e7da844', 18, 8, 17),
('S61908f469', 22, 26, 10),
('S63783d261', 3, 3, 3),
('S7e45f0648', 12, 14, 7),
('Sab755c434', 0, 0, 0),
('Sc85958980', 25, 6, 6),
('Sc932d8461', 0, 0, 0),
('Sca374b824', 7, 0, 0),
('Sdc5f89404', 19, 16, 9),
('Sdc6f8d478', 13, 15, 8),
('Sfbd70b333', 9, 22, 6),
('Sfbfd89107', 23, 5, 11);

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `Type_ID` varchar(5) NOT NULL,
  `Type_Name` varchar(25) NOT NULL,
  `Type_URL` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`Type_ID`, `Type_Name`, `Type_URL`) VALUES
('T01', 'อาการขาดสมาธิ', 'https://medium.com/@yanindeltaforce/%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%B2%E0%B8%94%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%98%E0%B8%B4-35e193ce2b68'),
('T02', 'อาการซนอยู่ไม่นิ่ง', 'https://medium.com/@yanindeltaforce/%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AB%E0%B8%B8%E0%B8%99%E0%B8%AB%E0%B8%B1%E0%B8%99%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B9%88%E0%B8%99-ef7018536887'),
('T03', 'หุนหันพลันแล่น', 'https://medium.com/@yanindeltaforce/%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8B%E0%B8%99%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%99%E0%B8%B4%E0%B9%88%E0%B8%87-29ed8234f89f');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `User_ID` varchar(225) NOT NULL COMMENT 'รหัสประชาชน',
  `User_Information` varchar(50) NOT NULL COMMENT 'ชื่อ-สกุล',
  `Child_ID` varchar(10) NOT NULL COMMENT 'รหัสเด็ก',
  `User_Profile` varchar(225) NOT NULL COMMENT 'รูปโปรไฟล์'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`User_ID`, `User_Information`, `Child_ID`, `User_Profile`) VALUES
('30363230343938303832', 'น.ส.รัชดา พันทอง', 'C1bdae4593', 'IMG'),
('30363431303436333531', 'วินันยา พรหมอินทร์', 'Cd8f47f714', 'IMG'),
('30373737', 'ทราบหนุ่มกอฟไนท์', 'Cf8d372350', 'IMG'),
('30383339363838313737', 'ฟ้ารดา', 'C7224a457', 'IMG'),
('30383632383734343537', 'โศรยา ช่วยชู', 'Cdfe223321', 'IMG'),
('30383736323932303336', 'Thanks Very much', 'Cb38090981', 'IMG'),
('30383937323339333039', 'Hey ', 'C7ac9a9368', 'IMG'),
('30393039313930353538', 'สมใจ ยัดไธสง', 'Ce41afb359', 'IMG'),
('30393336333133313032', 'นิธินาฏ ชัยสิทธิ์', 'C1ee3ea153', 'IMG'),
('30393435383135373933', 'เกษวะลิน ขุนพานเพิง', 'Ce59032810', 'IMG'),
('30393532363734343736', 'บุษยา', 'Cbdefa5636', 'IMG'),
('30393831323534333936', 'นันท์ ชนก ถั่วเถื่อน', 'Cc7c4eb438', 'IMG'),
('313233343536', 'แม่ทรายพ่อไนท์ไทยกอฟหนุ่ม', 'C2710f7268', 'IMG'),
('3132333435363738', 'ยุวดี ศรีสมบัติ', 'C952cfd934', 'IMG'),
('31383430313030303233383739', 'ขวัญฤทัย แจ่มจำนัส', 'C67d0bb79', 'IMG'),
('31393439393030333233313331', 'นางสาวอนุสสรา หมื่นพล', 'C07575d862', 'IMG'),
('31393530313030323234353132', 'นางสาวอานีสา ไซซิง', 'C3d7b2e171', 'IMG'),
('31393630383030313230353037', 'แพนเค้ก เวียร์', 'C4237e4759', 'IMG'),
('32383430323031303339373238', 'น.ส.รสสุคนธ์ พันโกฏิ', 'Cdeba15977', 'IMG'),
('35323132', 'กกกก', 'C5ecba7602', 'IMG'),
('3837363534333231', 'สุนิษา ไหมห้วย', 'Ce3ebfd437', 'IMG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `childs`
--
ALTER TABLE `childs`
  ADD PRIMARY KEY (`Child_ID`),
  ADD UNIQUE KEY `Score_ID` (`Score_ID`),
  ADD KEY `Type_ID_No_Frist` (`Type_ID_No_Frist`),
  ADD KEY `Type_ID_No_Second` (`Type_ID_No_Second`),
  ADD KEY `Type_ID_No_Third` (`Type_ID_No_Third`);

--
-- Indexes for table `loguseapp`
--
ALTER TABLE `loguseapp`
  ADD PRIMARY KEY (`ChildID`);

--
-- Indexes for table `scores`
--
ALTER TABLE `scores`
  ADD PRIMARY KEY (`Score_ID`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`Type_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`User_ID`),
  ADD UNIQUE KEY `Child_ID` (`Child_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `childs`
--
ALTER TABLE `childs`
  ADD CONSTRAINT `childs_ibfk_1` FOREIGN KEY (`Score_ID`) REFERENCES `scores` (`Score_ID`),
  ADD CONSTRAINT `childs_ibfk_2` FOREIGN KEY (`Type_ID_No_Frist`) REFERENCES `types` (`Type_ID`),
  ADD CONSTRAINT `childs_ibfk_3` FOREIGN KEY (`Type_ID_No_Second`) REFERENCES `types` (`Type_ID`),
  ADD CONSTRAINT `childs_ibfk_4` FOREIGN KEY (`Type_ID_No_Third`) REFERENCES `types` (`Type_ID`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`Child_ID`) REFERENCES `childs` (`Child_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
