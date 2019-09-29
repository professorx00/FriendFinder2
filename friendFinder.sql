CREATE TABLE `surveys` (
  `filekey` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `photo` varchar(500) NOT NULL,
  `answers` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`filekey`)
) 

INSERT INTO `surveys` (`filekey`,`name`,`photo`,`answers`) VALUES ('1','Rick Sanchez','https://res.cloudinary.com/teepublic/image/private/s--EGcw275V--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1558141309/production/designs/4867877_0.jpg','3,5,4,3,3,4,3,3,5,2');
INSERT INTO `surveys` (`filekey`,`name`,`photo`,`answers`) VALUES ('2','Mr. Meeseeks','https://i1.wp.com/reviewfix.com/wp-content/uploads/2018/06/flat800x800075f.u1.jpg?resize=316%2C421','5,1,2,5,2,1,4,1,2,3');
INSERT INTO `surveys` (`filekey`,`name`,`photo`,`answers`) VALUES ('3','Summer Smith','https://res.cloudinary.com/teepublic/image/private/s--EQp9ILea--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1498919106/production/designs/1705315_0.jpg','4,5,3,4,1,5,1,2,3,1');
INSERT INTO `surveys` (`filekey`,`name`,`photo`,`answers`) VALUES ('4','Morty Smith','https://cdn.imgbin.com/5/25/24/imgbin-morty-smith-rick-sanchez-rick-and-morty-season-3-internet-meme-rick-and-morty-man-in-yellow-shirt-xrhWFRiVPQvxLK5xY7Z0ZQR3P.jpg','5,2,5,2,3,3,3,5,4,4');
INSERT INTO `surveys` (`filekey`,`name`,`photo`,`answers`) VALUES ('5','Mr. Poopypants','https://qph.fs.quoracdn.net/main-qimg-fb94ac008f735da6e136f6ec801c2132.webp','5,1,4,1,4,1,5,4,3,1');
INSERT INTO `surveys` (`filekey`,`name`,`photo`,`answers`) VALUES ('6','Jerry Smith','https://p1.hiclipart.com/preview/541/998/515/rick-and-morty-hq-resource-rick-and-morty-character-illustration-png-clipart.jpg','3,1,2,5,1,1,4,5,2,3');
INSERT INTO `surveys` (`filekey`,`name`,`photo`,`answers`) VALUES ('7','Bird Person','https://qph.fs.quoracdn.net/main-qimg-bde842d4fab43353f6a0f9967f1d6675.webp','5,5,1,3,3,5,5,5,3,1');
INSERT INTO `surveys` (`filekey`,`name`,`photo`,`answers`) VALUES ('8','Scary Terry','https://vignette.wikia.nocookie.net/rickandmorty/images/8/83/ScaryTerrytransparent.gif/revision/latest?cb=20160830143250','5,5,4,5,3,2,1,1,3,5');
INSERT INTO `surveys` (`filekey`,`name`,`photo`,`answers`) VALUES ('9','Abradolf Lincler','https://i.imgflip.com/yc8h6.jpg','3,3,3,4,3,5,3,3,5,2');
INSERT INTO `surveys` (`filekey`,`name`,`photo`,`answers`) VALUES ('10','Jessica','https://p1.hiclipart.com/preview/954/397/112/rick-and-morty-hq-resource-rick-and-morty-character-girl-png-clipart-thumbnail.jpg','5,5,1,1,5,1,4,4,3,4');
INSERT INTO `surveys` (`filekey`,`name`,`photo`,`answers`) VALUES ('11','Beth Smith','https://vignette.wikia.nocookie.net/rick-y-morty-espanol/images/5/58/Beth_Smith.png/revision/latest?cb=20170404111932&path-prefix=es','5,5,1,1,2,1,2,3,2,1');