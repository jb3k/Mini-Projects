CREATE TABLE `orders` (
  `id` integer PRIMARY KEY,
  `quantity` integer,
  `delivery` boolean,
  `created_at` datetime,
  `item_id` integer,
  `address_id` integer,
  `customer_id` integer
);

CREATE TABLE `customers` (
  `id` integer PRIMARY KEY,
  `first_name` text,
  `last_name` text,
  `phone_number` integer
);

CREATE TABLE `address` (
  `id` integer PRIMARY KEY,
  `address` text,
  `city` text,
  `zipcode` integer
);

CREATE TABLE `item` (
  `id` integer PRIMARY KEY,
  `sku` text,
  `name` text,
  `size` text,
  `category` text,
  `price` decimal(2)
);

CREATE TABLE `recipe` (
  `id` integer PRIMARY KEY,
  `item_id` interger,
  `ingredient_id` integer,
  `quantity` integer
);

CREATE TABLE `ingredient` (
  `id` integer PRIMARY KEY,
  `name` text,
  `weight` integer,
  `measurement` text,
  `price` decimal(2)
);

CREATE TABLE `inventory` (
  `id` integer PRIMARY KEY,
  `item_id` interger,
  `quantity` integer
);

CREATE TABLE `staff` (
  `id` integer PRIMARY KEY,
  `first_name` text,
  `last_name` text,
  `position` text,
  `hourly_rate` decimal(2)
);

CREATE TABLE `rotation` (
  `id` integer PRIMARY KEY,
  `work_day` datetime,
  `shift_id` integer,
  `staff_id` integer
);

CREATE TABLE `shift` (
  `id` integer PRIMARY KEY,
  `day_of_week` text,
  `start_time` datetime,
  `end_time` datetime
);

ALTER TABLE `orders` ADD FOREIGN KEY (`item_id`) REFERENCES `item` (`id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`address_id`) REFERENCES `address` (`id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

ALTER TABLE `recipe` ADD FOREIGN KEY (`item_id`) REFERENCES `item` (`id`);

ALTER TABLE `recipe` ADD FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient` (`id`);

ALTER TABLE `inventory` ADD FOREIGN KEY (`item_id`) REFERENCES `item` (`id`);

ALTER TABLE `rotation` ADD FOREIGN KEY (`work_day`) REFERENCES `orders` (`created_at`);

ALTER TABLE `rotation` ADD FOREIGN KEY (`shift_id`) REFERENCES `shift` (`id`);

ALTER TABLE `rotation` ADD FOREIGN KEY (`staff_id`) REFERENCES `staff` (`id`);
