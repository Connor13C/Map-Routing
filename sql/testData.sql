--
-- Dumping data for table `airports`
--

USE test;

-- First 100 or so
INSERT INTO `airports` VALUES 
(3411,'KBJC','medium_airport','Rocky Mountain Metropolitan Airport','39.90879822','-105.1169968','5673','NA','US','US-CO','Denver','no','KBJC','BJC','BJC',NULL,'http://en.wikipedia.org/wiki/Rocky_Mountain_Metropolitan_Airport','Jefferson County Airport, Jeffco Airport'),
(3413,'KBKF','medium_airport','Buckley Air Force Base','39.701698303200004','-104.751998901','5662','NA','US','US-CO','Aurora','no','KBKF','BFK','BKF',NULL,'http://en.wikipedia.org/wiki/Buckley_Air_Force_Base',NULL),
(3463,'KCOS','large_airport','City of Colorado Springs Municipal Airport','38.805801391602','-104.70099639893','6187','NA','US','US-CO','Colorado Springs','yes','KCOS','COS','COS','https://flycos.coloradosprings.gov/','http://en.wikipedia.org/wiki/Colorado_Springs_Airport',NULL),
(3486,'KDEN','large_airport','Denver International Airport','39.861698150635','-104.672996521','5431','NA','US','US-CO','Denver','yes','KDEN','DEN','DEN','http://www.flydenver.com/','http://en.wikipedia.org/wiki/Denver_International_Airport','DVX, KVDX'),
(3505,'KEGE','medium_airport','Eagle County Regional Airport','39.64260101','-106.9179993','6548','NA','US','US-CO','Eagle','yes','KEGE','EGE','EGE','http://www.eaglecounty.us/airport/','http://en.wikipedia.org/wiki/Eagle_County_Regional_Airport',NULL),
(3557,'KGJT','medium_airport','Grand Junction Regional Airport','39.1223983765','-108.527000427','4858','NA','US','US-CO','Grand Junction','yes','KGJT','GJT','GJT','http://www.gjairport.com/','http://en.wikipedia.org/wiki/Grand_Junction_Regional_Airport',NULL),
(3794,'KPUB','small_airport','Pueblo Memorial Airport','38.289100646972656','-104.49700164794922','4726','NA','US','US-CO','Pueblo','yes','KPUB','PUB','PUB',NULL,'http://en.wikipedia.org/wiki/Pueblo_Memorial_Airport',NULL),
(6529,'00CO','small_airport','Cass Field','40.62220001220703','-104.34400177001953','4830','NA','US','US-CO','Briggsdale','no','00CO',NULL,'00CO',NULL,NULL,NULL),
(6585,'01CO','heliport','St Vincent General Hospital Heliport','39.24530029296875','-106.24600219726562','10175','NA','US','US-CO','Leadville','no','01CO',NULL,'01CO',NULL,NULL,NULL),
(6644,'02CO','small_airport','Mc Cullough Airport','37.64329910279999','-106.04699707','7615','NA','US','US-CO','Monte Vista','no','02CO',NULL,'02CO',NULL,NULL,NULL),
(6701,'03CO','small_airport','Kugel-Strong Airport','40.2125015259','-104.744003296','4950','NA','US','US-CO','Platteville','no','03CO',NULL,'03CO',NULL,NULL,NULL),
(6798,'04V','small_airport','Saguache Municipal Airport','38.0990833','-106.1743889','7826','NA','US','US-CO','Saguache','no','04V',NULL,'04V',NULL,NULL,NULL),
(6813,'05CO','small_airport','Rancho De Aereo Airport','40.2149839','-104.9844228','4978','NA','US','US-CO','Mead','yes','05CO',NULL,'05CO',NULL,NULL,NULL),
(6854,'05V','small_airport','Blanca Airport','37.41109848022461','-105.552001953125','7720','NA','US','US-CO','Blanca','no','05V',NULL,'05V',NULL,NULL,NULL),
(6867,'06CO','small_airport','Jecan Airport','37.38750076293945','-103.69100189208984','5100','NA','US','US-CO','Branson','no','06CO',NULL,'06CO',NULL,NULL,NULL),
(6921,'07CO','small_airport','Comanche Creek Airport','39.26359939575195','-104.427001953125','6620','NA','US','US-CO','Kiowa','no','07CO',NULL,'07CO',NULL,NULL,NULL),
(6969,'08CO','small_airport','Terra Firma Airport','38.73249816894531','-104.04100036621094','5600','NA','US','US-CO','Rush','no','08CO',NULL,'08CO',NULL,NULL,NULL),
(7020,'09CO','small_airport','Cottonwood Field','38.055599212646484','-103.65299987792969','4180','NA','US','US-CO','Swink','no','09CO',NULL,'09CO',NULL,NULL,NULL),
(7117,'0CD0','heliport','Delta County Memorial Hospital Heliport','38.7407989502','-108.052001953','5000','NA','US','US-CO','Delta','no','0CD0',NULL,'0CD0',NULL,NULL,NULL),
(7118,'0CD1','heliport','Colorado Plains Medical Center Heliport','40.2610917','-103.7963389','4356','NA','US','US-CO','Fort Morgan','no','0CD1',NULL,'0CD1',NULL,NULL,NULL),
(7119,'0CD2','small_airport','Foxx Valley Airport','38.652500152600005','-104.23400116','5800','NA','US','US-CO','Yoder','no','0CD2',NULL,'0CD2',NULL,NULL,NULL),
(7120,'0CD3','heliport','Branch\'s Heliport','40.3479995728','-104.527999878','4635','NA','US','US-CO','Kersey','no','0CD3',NULL,'0CD3',NULL,NULL,NULL),
(7121,'0CD4','heliport','Kauffman Heliport','40.1463012695','-104.887001038','5120','NA','US','US-CO','Denver','no','0CD4',NULL,'0CD4',NULL,NULL,NULL),
(7122,'0CD5','small_airport','Pinon Canyon Airport','37.490501403799996','-104.143997192','5686','NA','US','US-CO','Trinidad','no','0CD5',NULL,'0CD5',NULL,NULL,NULL),
(7123,'0CD6','heliport','Exempla Good Samaritan Heliport','39.971698761','-105.084999084','5204','NA','US','US-CO','Lafayette','no','0CD6',NULL,'0CD6',NULL,NULL,NULL),
(7124,'0CD7','small_airport','Fox Hole Airport','40.004699707','-105.071998596','5135','NA','US','US-CO','Lafayette','no','0CD7',NULL,'0CD7',NULL,NULL,NULL),
(7125,'0CD8','heliport','Prowers Medical Center Heliport','38.0710983276','-102.60900116','3575','NA','US','US-CO','Lamar','no','0CD8',NULL,'0CD8',NULL,NULL,NULL),
(7126,'0CD9','heliport','Swedish S.W. Medical Heliport','39.603099823','-105.091003418','5563','NA','US','US-CO','Littleton','no','0CD9',NULL,'0CD9',NULL,NULL,NULL),
(7137,'0CO0','heliport','Longmont United Hospital Heliport','40.178901672399995','-105.125999451','5047','NA','US','US-CO','Longmont','no','0CO0',NULL,'0CO0',NULL,NULL,NULL),
(7138,'0CO1','small_airport','Dave\'s Airport','40.0332984924','-105.124000549','5170','NA','US','US-CO','Louisville','no','0CO1',NULL,'0CO1',NULL,NULL,NULL),
(7139,'0CO2','small_airport','Buckhorn Ranch Airport','38.8518981934','-106.93282','8980','NA','US','US-CO','Crested Butte','no','0CO2','CSE','0CO2',NULL,NULL,NULL),
(7140,'0CO3','small_airport','Greggs Nr 1 Airport','39.8894004822','-104.544998169','5373','NA','US','US-CO','Bennett','no','0CO3',NULL,'0CO3',NULL,NULL,NULL),
(7141,'0CO4','heliport','Geo-Seis Helicopters Heliport','40.5899009705','-105.04599762','4935','NA','US','US-CO','Fort Collins','no','0CO4',NULL,'0CO4',NULL,NULL,NULL),
(7142,'0CO5','small_airport','Chenoweth Airport','39.8333015442','-103.589996338','4697','NA','US','US-CO','Last Chance','no','0CO5',NULL,'0CO5',NULL,NULL,NULL),
(7143,'0CO6','small_airport','Flying M & M Ranch Airport','38.2193984985','-108.212997437','8000','NA','US','US-CO','Norwood','no','0CO6',NULL,'0CO6',NULL,NULL,NULL),
(7144,'0CO7','heliport','Century Helicopters Heliport','40.5854988098','-105.040000916','4935','NA','US','US-CO','Fort Collins','no','0CO7',NULL,'0CO7',NULL,NULL,NULL),
(7145,'0CO8','small_airport','Cartwheel Airport','40.2083015442','-105.013000488','5010','NA','US','US-CO','Mead','no','0CO8',NULL,'0CO8',NULL,NULL,NULL),
(7146,'0CO9','small_airport','Van Treese Airport','37.6582984924','-106.033996582','7613','NA','US','US-CO','Monte Vista','no','0CO9',NULL,'0CO9',NULL,NULL,NULL),
(7655,'10CO','small_airport','Silkman Farms Inc. Airport','39.45470047','-102.212997437','4000','NA','US','US-CO','Burlington','no','10CO',NULL,'10CO',NULL,NULL,NULL),
(7704,'11CO','heliport','Channel 7 Heliport','39.72529983520508','-104.98400115966797','5300','NA','US','US-CO','Denver','no','11CO',NULL,'11CO',NULL,NULL,NULL),
(7754,'12CO','small_airport','Omega 1 STOLport','38.83549880981445','-107.81500244140625','6409','NA','US','US-CO','Hotchkiss','no','12CO',NULL,'12CO',NULL,NULL,NULL),
(7813,'13CO','heliport','Mann Heliport','40.555599212646484','-106.84400177001953','7500','NA','US','US-CO','Steamboat Springs','no','13CO',NULL,'13CO',NULL,NULL,NULL),
(7873,'14CO','small_airport','Good Pasture Airport','38.097198486328125','-104.91000366210938','6000','NA','US','US-CO','Beulah','no','14CO',NULL,'14CO',NULL,NULL,NULL),
(7932,'15CO','heliport','Swedish Medical Center Heliport','39.654701232910156','-104.97100067138672','5374','NA','US','US-CO','Englewood','no','15CO',NULL,'15CO',NULL,NULL,NULL),
(8085,'18CO','heliport','Rangely District Hospital Heliport','40.0807991027832','-108.80400085449219','5224','NA','US','US-CO','Rangely','no','18CO',NULL,'18CO',NULL,NULL,NULL),
(8132,'19CO','heliport','Memorial Hospital Heliport','38.84040069580078','-104.79900360107422','6155','NA','US','US-CO','Colorado Springs','no','19CO',NULL,'19CO',NULL,NULL,NULL),
(8231,'1CD0','heliport','Murphy Heliport','40.142799377441406','-105.00299835205078','4870','NA','US','US-CO','Longmont','no','1CD0',NULL,'1CD0',NULL,NULL,NULL),
(8232,'1CD1','small_airport','Reed Airport','40.69029998779297','-104.86699676513672','5350','NA','US','US-CO','Nunn','no','1CD1',NULL,'1CD1',NULL,NULL,NULL),
(8233,'1CD2','small_airport','Tonga Airport','40.167198181152344','-104.79299926757812','4925','NA','US','US-CO','Platteville','no','1CD2',NULL,'1CD2',NULL,NULL,NULL),
(8234,'1CD4','small_airport','Eagle Soaring Airport','40.509300231933594','-106.94300079345703','6600','NA','US','US-CO','Steam Boat Springs','no','1CD4',NULL,'1CD4',NULL,NULL,NULL),
(8235,'1CD5','heliport','Rio Grande Hospital Heliport','37.67499923706055','-106.36299896240234','7190','NA','US','US-CO','Del Norte','no','1CD5',NULL,'1CD5',NULL,NULL,NULL),
(8245,'1CO0','heliport','Aurora Regional Medical Center Heliport','39.68830108642578','-104.83200073242188','5604','NA','US','US-CO','Aurora','no','1CO0',NULL,'1CO0',NULL,NULL,NULL),
(8246,'1CO1','heliport','Mount Morrison Heliport','39.6692008972168','-105.22000122070312','7881','NA','US','US-CO','Morrison','no','1CO1',NULL,'1CO1',NULL,NULL,NULL),
(8247,'1CO2','small_airport','Williams Ranch Airport','38.162498474121094','-108.33999633789062','6842','NA','US','US-CO','Norwood','no','1CO2',NULL,'1CO2',NULL,NULL,NULL),
(8248,'1CO3','small_airport','Bellmore Farms Airport','40.7041015625','-104.7979965209961','5225','NA','US','US-CO','Nunn','no','1CO3',NULL,'1CO3',NULL,NULL,NULL),
(8249,'1CO4','small_airport','Clifford Field','38.57500076293945','-107.95899963378906','5560','NA','US','US-CO','Olathe','no','1CO4',NULL,'1CO4',NULL,NULL,NULL),
(8250,'1CO5','small_airport','Melon Field','38.01530075073242','-103.6989974975586','4260','NA','US','US-CO','Rocky Ford','no','1CO5',NULL,'1CO5',NULL,NULL,NULL),
(8251,'1CO6','heliport','Lands End Microwave Heliport','39.09049987792969','-108.22100067138672','9940','NA','US','US-CO','Palisade','no','1CO6',NULL,'1CO6',NULL,NULL,NULL),
(8252,'1CO7','small_airport','Dodsworth Airport','38.55139923095703','-105.99199676513672','7480','NA','US','US-CO','Salida','no','1CO7',NULL,'1CO7',NULL,NULL,NULL),
(8253,'1CO8','small_airport','Everitt Airport','39.52920150756836','-104.65799713134766','6295','NA','US','US-CO','Parker','no','1CO8',NULL,'1CO8',NULL,NULL,NULL),
(8254,'1CO9','heliport','MCHD Heliport','37.362998962402344','-108.57499694824219','6153','NA','US','US-CO','Cortez','no','1CO9',NULL,'1CO9',NULL,NULL,NULL),
(8781,'20CO','heliport','Lookout Center Rooftop Heliport','39.73550033569336','-105.20700073242188','5918','NA','US','US-CO','Golden','no','20CO',NULL,'20CO',NULL,NULL,NULL),
(8827,'21CO','heliport','Lookout Center Parking Lot Heliport','39.73440170288086','-105.20600128173828','5898','NA','US','US-CO','Golden','no','21CO',NULL,'21CO',NULL,NULL,NULL),
(8880,'22CO','small_airport','Flying E Airport','39.958057403599994','-104.485557556','5100','NA','US','US-CO','Brighton','no','22CO',NULL,'22CO',NULL,NULL,NULL),
(8934,'23CO','small_airport','High Mesa Airport','38.84389877319336','-103.98999786376953','6000','NA','US','US-CO','Rush','no','23CO',NULL,'23CO',NULL,NULL,NULL),
(8992,'24CO','heliport','Ibm Building 910 Heliport','40.06639862060547','-105.20600128173828','5150','NA','US','US-CO','Boulder','no','24CO',NULL,'24CO',NULL,NULL,NULL),
(9046,'25CO','small_airport','Crystal Lakes Airport','40.851600646972656','-105.63300323486328','8440','NA','US','US-CO','Red Feather Lakes','no','25CO',NULL,'25CO',NULL,NULL,NULL),
(9095,'26CO','heliport','Lockheed Martin Cmd & Cntrl Sys Heliport','38.9838981628','-104.801002502','6685','NA','US','US-CO','Colorado Springs','no','26CO',NULL,'26CO',NULL,NULL,NULL),
(9143,'27CO','small_airport','Roubideau Airport','38.72600173950195','-108.12899780273438','4900','NA','US','US-CO','Delta','no','27CO',NULL,'27CO',NULL,NULL,NULL),
(9193,'28CO','heliport','Blm Fire Center Heliport','39.117801666259766','-108.53900146484375','4820','NA','US','US-CO','Grand Junction','no','28CO',NULL,'28CO',NULL,NULL,NULL),
(9241,'29CO','heliport','St Mary\'s Hospital & Medical Center Heliport','39.089815','-108.562855','4650','NA','US','US-CO','Grand Junction','no','29CO',NULL,'29CO',NULL,NULL,NULL),
(9355,'2CO0','heliport','Heli-Support Ii Heliport','40.58359909057617','-106.98500061035156','4935','NA','US','US-CO','Fort Collins','no','2CO0',NULL,'2CO0',NULL,NULL,NULL),
(9356,'2CO1','small_airport','Cherokee Trail Ranch Airport','39.11050033569336','-104.58399963378906','7240','NA','US','US-CO','Peyton','no','2CO1',NULL,'2CO1',NULL,NULL,NULL),
(9357,'2CO2','small_airport','CMRS Airdrome Airport','38.540298461899994','-106.105003357','7872','NA','US','US-CO','Poncha Springs','no','2CO2',NULL,'2CO2',NULL,NULL,NULL),
(9358,'2CO3','small_airport','Jackrabbit Strip','40.375','-104.87300109863281','5000','NA','US','US-CO','Milliken','no','2CO3',NULL,'2CO3',NULL,NULL,NULL),
(9359,'2CO4','heliport','Presbyterian/St Luke\'s Medical Center Heliport','39.7494010925293','-104.96900177001953','5291','NA','US','US-CO','Denver','no','2CO4',NULL,'2CO4',NULL,NULL,NULL),
(9360,'2CO5','small_airport','Edenway Airport','38.347198486328125','-104.63200378417969','4970','NA','US','US-CO','Pueblo','no','2CO5',NULL,'2CO5',NULL,NULL,NULL),
(9361,'2CO6','heliport','Manor House Heliport','39.58689880371094','-105.16899871826172','6220','NA','US','US-CO','Littleton','no','2CO6',NULL,'2CO6',NULL,NULL,NULL),
(9362,'2CO7','heliport','St Mary-Corwin Hospital Heliport','38.23360061645508','-104.62300109863281','4817','NA','US','US-CO','Pueblo','no','2CO7',NULL,'2CO7',NULL,NULL,NULL),
(9363,'2CO8','heliport','East Morgan County Hospital Heliport','40.25830078125','-103.64900207519531','4280','NA','US','US-CO','Brush','no','2CO8',NULL,'2CO8',NULL,NULL,NULL),
(9364,'2CO9','heliport','Lands End Heliport','39.072167','-108.511167','4630','NA','US','US-CO','Grand Junction','no','2CO9',NULL,'2CO9',NULL,NULL,NULL),
(9912,'30CO','small_airport','Coyote Creek Ranch Airport','38.67250061035156','-105.33599853515625','8030','NA','US','US-CO','Guffey','no','30CO',NULL,'30CO',NULL,NULL,NULL),
(9954,'31CO','heliport','Montrose Memorial Hospital Heliport','38.480499267578125','-107.86900329589844','5812','NA','US','US-CO','Montrose','no','31CO',NULL,'31CO',NULL,NULL,NULL),
(9995,'32CO','small_airport','Braun Airport','38.455299377441406','-105.08399963378906','5543','NA','US','US-CO','Penrose','no','32CO',NULL,'32CO',NULL,NULL,NULL),
(10040,'33CO','small_airport','Melby Ranch Airstrip','37.064998626708984','-105.46399688720703','8820','NA','US','US-CO','San Luis','no','33CO',NULL,'33CO',NULL,NULL,NULL),
(10084,'34CO','small_airport','Simons Airport','39.716400146484375','-104.73200225830078','5525','NA','US','US-CO','Aurora','no','34CO',NULL,'34CO',NULL,NULL,NULL),
(10131,'35CO','small_airport','Lone Tree Ranch Airport','38.88199996948242','-103.80899810791016','5525','NA','US','US-CO','Punkin Center','no','35CO',NULL,'35CO',NULL,NULL,NULL),
(10178,'36CO','small_airport','Fat Chance Airport','39.10609817504883','-104.54399871826172','7100','NA','US','US-CO','Peyton','no','36CO',NULL,'36CO',NULL,NULL,NULL),
(10221,'37CO','heliport','Ash Mesa Heliport','38.56719970703125','-107.99600219726562','5681','NA','US','US-CO','Olathe','no','37CO',NULL,'37CO',NULL,NULL,NULL),
(10271,'38CO','heliport','Basin Clinic Heliport','38.21860122680664','-108.2760009765625','5400','NA','US','US-CO','Naturita','no','38CO',NULL,'38CO',NULL,NULL,NULL),
(10319,'39CO','small_airport','Flying M Ranch Airport','38.487998962402344','-107.67400360107422','7200','NA','US','US-CO','Montrose','no','39CO',NULL,'39CO',NULL,NULL,NULL),
(10423,'3CO0','small_airport','Sky Island Ranch Airport','38.73749923706055','-108.00599670410156','5300','NA','US','US-CO','Delta','no','3CO0',NULL,'3CO0',NULL,NULL,NULL),
(10424,'3CO1','small_airport','Cridler Field','38.84830093383789','-107.83300018310547','6460','NA','US','US-CO','Hotchkiss','no','3CO1',NULL,'3CO1',NULL,NULL,NULL),
(10425,'3CO2','small_airport','Mertens Airport','40.61750030517578','-103.33300018310547','4192','NA','US','US-CO','Sterling','no','3CO2',NULL,'3CO2',NULL,NULL,NULL),
(10426,'3CO3','heliport','Sterling Regional Medical Center Heliport','40.61249923706055','-103.22000122070312','3946','NA','US','US-CO','Sterling','no','3CO3',NULL,'3CO3',NULL,NULL,NULL),
(10427,'3CO4','small_airport','Tercio Ranch Airstrip','37.070899963378906','-105.01899719238281','7957','NA','US','US-CO','Stonewall','no','3CO4',NULL,'3CO4',NULL,NULL,NULL),
(10428,'3CO5','heliport','Texas Creek Heliport','38.409400939941406','-105.58499908447266','6250','NA','US','US-CO','Texas Creek','no','3CO5',NULL,'3CO5',NULL,NULL,NULL),
(10429,'3CO7','small_airport','Dietrichs Airport','39.33250045776367','-104.56600189208984','6780','NA','US','US-CO','Elizabeth','no','3CO7',NULL,'3CO7',NULL,NULL,NULL),
(10430,'3CO8','heliport','E.P.M.C. Heliport','40.371700286865234','-105.51599884033203','7674','NA','US','US-CO','Estes Park','no','3CO8',NULL,'3CO8',NULL,NULL,NULL),
(10431,'3CO9','heliport','D B Smith Memorial Heliport','38.712501525878906','-105.14199829101562','9710','NA','US','US-CO','Victor','no','3CO9',NULL,'3CO9',NULL,NULL,NULL),
(10950,'41CO','small_airport','Flying Dog Ranch Airstrip','39.971111','-107.611111','7020','NA','US','US-CO','Meeker','no','41CO',NULL,'41CO',NULL,NULL,NULL);

-- Dump completed on 2018-03-04 18:12:25
