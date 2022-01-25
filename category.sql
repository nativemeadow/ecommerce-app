-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 24, 2022 at 10:28 PM
-- Server version: 8.0.27
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` text NOT NULL,
  `description` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `category_order` int NOT NULL,
  `parent_category` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `description`, `image`, `category_order`, `parent_category`) VALUES
(1, 'Sand, Gravel, and Decorative Landscaping Rocks', 'The key to landscaping in California is to maximize water efficiency, and strategically use decorative rocks and fillers in places where plants can’t grow. Designing your exteriors to be functional, efficient, and aesthetically appealing is a great way to increase your enjoyment and the value of your home. To improve your landscape\'s function, choose from a wide variety of filler materials, such as our sands, pea gravels, and crushed grain rock, as well as base rock materials. To increase aesthetic beauty, we offer a large variety of crushed rock, as well as decorative, polished, and premium pebbles. See for a guide to all our landscaping sands, gravels, and rocks.\r\n\r\nDisclaimer: Product pictures of natural stone are not an exact representation of the product hues seen in natural light. There are natural color variations in stone and exact color match is not guaranteed. We recommend verifying the product color at our location before placing your order online.', 'sand-grave-decorative-rocks.jpg', 1, NULL),
(2, 'Natural Stone', NULL, 'natural-stone.jpg', 2, NULL),
(3, 'Composts, Mulches, Soils & Amendments\r\n', NULL, 'compost-mulch.jpg', 3, NULL),
(4, 'Biologicals, Fertilizers & Bagged Soils\r\n', NULL, 'fertilizers-amendments.jpg', 4, NULL),
(5, 'Pottery & Garden Ornaments', 'We carry an extensive line of pottery and statues. \r\nVisit our location in San Carlos for our new and ever evolving inventory.', 'pottery-garden-ornements.jpg', 5, NULL),
(6, 'Water Features', NULL, 'water-features.jpg', 6, NULL),
(7, 'Building Materials & Tools', NULL, 'tools.jpg', 7, NULL),
(8, 'Precast Concrete Products', 'Please refer to our vendor websites for your paver selections, you\'ll be redirected by clicking on the picture below. \r\n\r\nFor more information and to place your order, call us at (650) 364 1730.', 'precast-concrete.jpg', 8, NULL),
(11, 'Boulders', 'Boulders are a timeless natural resource that enhances the beauty of any landscaped area. Use them as a focal point in your garden or as a complimentary element. Boulders could also be enjoyed as a natural seating in an outdoor space. Our boulders are sold by weight of the individual piece. We carry a wide variety of natural boulders from granite to quartzite to basalt and more! With natural variations between each boulder, no two are alike. \r\n\r\nVisit our yard to handpick your unique boulders!\r\n\r\nDisclaimer: Many stone types may have concentrations of iron, and with the exposure to moisture, rust stains may be bleeding to the surface of the stone. For many stone types there is no way of knowing prior to installation if this will be an issue.', 'boulders.jpg', 10, 2),
(13, 'Dimensional Stones', 'Dimensional Stones are cut stones with rectilinear edges, making installation of natural stone quite easy. Create your own desired pattern with various sizes. Most dimensional stones are offered from 12\" X 12\" size. Custom sizes are made to order.', 'dimensional-stone.jpg', 11, 2),
(14, 'Driveway Cubes, Cobbles & Pavers', NULL, 'driveway-cubes-cobbles-pavers.jpg', 12, 2),
(15, 'Drystack & Wall Rocks\r\n', NULL, 'drystack-wall-rocks.jpg', 13, 2),
(16, 'Irregular Flagstones', 'Irregular Flagstones are available as stand-up select on a pallet. Due to the variations between each pallets, we recommend that our customers visit our yard to select the exact pallet before setting up a delivery. For smaller quantities, we offer an open bin option to hand select your flagstones from.', 'irregular-flagstone.jpg', 14, 2),
(17, 'Ledgestones', NULL, 'ledgerstones.jpg', 15, 2),
(18, 'Veneer Panels', NULL, 'veneer-panels.jpg', 16, 2),
(19, 'Sand', NULL, 'sand.jpg', 17, 1),
(20, 'Gravel', NULL, 'gravel.jpg', 18, 1),
(21, 'Base Rock', NULL, 'base-rock.jpg', 19, 1),
(22, 'Path Fines', NULL, 'path-fines.jpg', 20, 1),
(23, 'Crushed Rock', NULL, 'crushed-rock.jpg', 21, 1),
(24, 'Decorative Pebbles', NULL, 'decorative-pebbles.jpg', 22, 1),
(25, 'Polished Pebbles', NULL, 'polished-pebbles.jpg', 23, 1),
(26, 'Premium Pebbles', NULL, 'premium-pebbles.jpg', 24, 1),
(27, 'Bocce Ball Court Materials', '<h1>Bocce Court Surface Materials</h1>\r\n\r\nWhen building a backyard bocce court, be sure to choose lasting materials that are low maintenance and that facilitate fast play while offering minimal bounce. Choose from our bocce court materials below, or see our guide to building a backyard bocce court for more tips and advice.', 'bocce-ball-court-materials.jpg', 25, 1),
(28, 'Amendments', '<h1>Organic Soil Amendments</h1>\r\n\r\nThe ideal soil consists of a balance of sand, loam, clay, organic matter, minerals, water, and air, but rarely do we get to start with the perfect combination. That\'s why we offer a number of soil amendments that are perfect for California\'s main soil types: sandy, loamy, and clay. For tips on how to amend, see our guide to amendments for California soils.', 'amendments.jpg', 26, 3),
(29, 'Compost', '<h1>Organic Garden Composts</h1>\r\n\r\nCompost is decomposed organic matter that is rich in nutrients and often a course, dark brown, peat-like material. Adding compost to your soil improves the overall structure and texture. It increases the capacity to hold water in sandy soils, and enhances drainage in heavy clay soils. It also attracts earthworms that help aerate the soil and beneficial microbiology that helps convert material into molecules and elements that plants can more easily absorb.\r\n\r\nNot sure which compost is best for your needs? Check out our guide to choosing the right compost for your flower or vegetable garden.', 'compost.jpg', 27, 3),
(31, 'Mulches', 'Mulch is a generic term for a ground cover that protects the soil. Organic and natural mulch helps with moisture retention, weed prevention and water loss due to surface evaporation. Covering your landscape with at least 1\" of mulch helps provide the soil with the much needed protection from the natural weathering elements. The mulch will decompose over time, providing carbon matter and feeding your soil. Choose from a variety of mulch to match your garden aesthetics.\r\n\r\nNot sure which compost is best for your needs? Check out our guide to choosing the right compost for your flower or vegetable garden.', 'mulches.jpg', 29, 3),
(32, 'Soils', '<h1>SOIL IS LIFE!</h1>\r\n\r\nThe ideal soil is made up of a balance between clay, sand, loam, organic matter, minerals, water and air. At Lyngso, we believe in the soil food web with a healthy balance of microorganisms that help the soil be alive, organic, and full of life. We pride ourselves in our extensive knowledge of soil biology and are happy to recommend the right kind of soil for your garden to thrive! \r\n\r\nSee our how to guide on improving your soil\'s structure, feeding your soil, and protecting your soil.  \r\n\r\nNot sure which compost is best for your needs? Check out our guide to choosing the right compost for your flower or vegetable garden.', 'soils.jpg', 30, 3),
(33, 'Biologicals, Minerals & Liquid Fertilizers', NULL, 'biological-minerals-liquid-fertilizers.jpg', 31, 4),
(34, 'Down To Earth Single & Blended Fertilizers', NULL, 'down-to-earth.jpg', 32, 4),
(35, 'Pre-bagged Soils & Composts', NULL, 'pre-bagged-soils-composts.jpg', 33, 4),
(36, 'Sheet Mulching Supplies', NULL, 'sheet-mulching-supplies.jpg', 34, 4),
(40, 'Pottery', NULL, 'pottery.jpg', 35, 5),
(41, 'Earthenware Planters', NULL, 'earthenware-planters.jpg', 36, 40),
(43, 'Statuary', NULL, 'statuary.jpg', 37, 5),
(44, 'Columns', NULL, 'columns.jpg', 38, 6),
(45, 'Basins', NULL, 'basisn.jpg', 39, 6),
(46, 'Pumps', NULL, 'basins.jpg', 40, 6),
(47, 'Plumbing', NULL, 'plumbing.jpg', 41, 6),
(48, 'Lighting', NULL, 'lighting.jpg', 42, 6),
(49, 'Installation Parts', NULL, 'installation-parts.jpg', 43, 6),
(50, 'Water Treatments', NULL, 'installation-parts.jpg', 44, 6),
(51, 'Cement, Grout & Quikrete', NULL, 'cement-grout-quikrete.jpg', 45, 7),
(52, 'Sand(Pre-Bagged)', NULL, 'pre-bagged-sand.jpg', 46, 7),
(53, 'Stains, Sealers & Cleaners', NULL, 'stains-sealers-cleaners.jpg', 47, 7),
(54, 'Structural & Edging', NULL, 'structural-and-edging.jpg', 48, 7),
(55, 'tools', NULL, 'construction-tools.jpg', 49, 7),
(56, 'Blads', NULL, 'blades.jpg', 50, 7),
(57, 'Calstone', NULL, 'calstone.jpg', 51, 8),
(58, 'Step Stone', NULL, 'step-stone.jpg', 52, 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `category_order` (`category_order`),
  ADD KEY `parent_category` (`parent_category`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
