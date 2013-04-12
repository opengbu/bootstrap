$db = mysql_connect("localhost","root","");

mysql_query("DROP DATABASE timeTable_main");
mysql_query("CREATE DATABASE timeTable_main CHARACTER SET utf8 COLLATE utf8_general_ci");
mysql_select_db("timeTable_main",$db);
mysql_query("CREATE TABLE day (id INT(3) AUTO_INCREMENT PRIMARY KEY, day VARCHAR(64) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci AUTO_INCREMENT=1");
mysql_query("CREATE TABLE lesson (id INT AUTO_INCREMENT PRIMARY KEY, lesson VARCHAR(64) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci AUTO_INCREMENT=1");
mysql_query("CREATE TABLE time (id INT AUTO_INCREMENT PRIMARY KEY,start DATE(6) NOT NULL,finish DATE(6) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci AUTO_INCREMENT=1");
mysql_query("CREATE TABLE timetable (userid INT, messageid INT, readtime TIMESTAMP, PRIMARY KEY (userid, messageid)) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci AUTO_INCREMENT=1");
mysql_query("ALTER TABLE message ADD CONSTRAINT FK_MESSAGE_USERID FOREIGN KEY(userid) REFERENCES  user(id) ON UPDATE CASCADE");
mysql_query("ALTER TABLE message ADD CONSTRAINT FK_MESSAGE_CHATID FOREIGN KEY(chatid) REFERENCES  chat(id) ON UPDATE CASCADE");
mysql_query("ALTER TABLE usermessage ADD CONSTRAINT FK_USERMESSAGE_USERID FOREIGN KEY(userid) REFERENCES  user(id) ON DELETE ON UPDATE CASCADE");
mysql_query("ALTER TABLE usermessage ADD CONSTRAINT FK_USERMESSAGE_MESSAGEID FOREIGN KEY(messageid) REFERENCES  message(id) ON DELETE CASCADE ON UPDATE CASCADE");
mysql_query("ALTER TABLE `message` ADD INDEX (`mtime`)");
mysql_query("ALTER TABLE `message` ADD INDEX (`messagetext`)");
mysql_query("ALTER TABLE `message` ADD INDEX (`userid`)");
mysql_query("ALTER TABLE `message` ADD INDEX (`chatid`)");
mysql_query("ALTER TABLE `message` ADD INDEX (`id`)");
mysql_query("ALTER TABLE `usermessage` ADD INDEX (`userid`)");
mysql_query("ALTER TABLE `usermessage` ADD INDEX (`messageid`)");
mysql_query("ALTER TABLE `chat` ADD INDEX (`id`)");
mysql_query("ALTER TABLE `chat` ADD INDEX (`name`)");
mysql_query("ALTER TABLE `chat` ADD UNIQUE (`name`)");
mysql_query("ALTER TABLE `user` ADD INDEX (`id`)");
mysql_query("ALTER TABLE `user` ADD INDEX (`name`)");
mysql_query("ALTER TABLE  user` ADD INDEX (  `lastip` )");
mysql_query("ALTER TABLE `user` ADD UNIQUE (`name`)");
mysql_query("INSERT INTO `chat` (`id`,`name`) VALUES ('1','main');");// главный чат
mysql_query("INSERT INTO `user` (`id`,`name`) VALUES ('1','anonymous');");
echo "База данных создана!"