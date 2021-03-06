const fs = require('fs');

class Place {
    x;
    y;

    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}

class BusStop {
    x;
    y;
    name;
    
    constructor (name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
}

class PlacesDebug {
    places;

    constructor() {
        this.places = new Array();
    }

    debug(){
        this.places = [...this.places, new BusStop("Srch,točna", 832, 66)];
        this.places = [...this.places, new BusStop("Srch,obecní úřad", 637, 66)];
        this.places = [...this.places, new Place(619, 66)];
        this.places = [...this.places, new Place(461, 96)];
        this.places = [...this.places, new BusStop("Srch,Pohránov", 423, 105)];
        this.places = [...this.places, new BusStop("Srch,Hrádek", 354, 122)];
        this.places = [...this.places, new Place(348, 124)];
        this.places = [...this.places, new BusStop("Doubravice", 375, 187)];
        this.places = [...this.places, new Place(393, 227)];
        this.places = [...this.places, new Place(385, 251)];
        this.places = [...this.places, new BusStop("Semtín, hlavní brána", 351, 251)];
        this.places = [...this.places, new BusStop("Semtín, vlečka", 319, 251)];
        this.places = [...this.places, new BusStop("Rybitví, závod", 295, 251)];
        this.places = [...this.places, new Place(274, 283)];
        this.places = [...this.places, new BusStop("Rybitví, léčebna", 266, 299)];
        this.places = [...this.places, new BusStop("Rybitví, křižovatka", 255, 326)];
        this.places = [...this.places, new Place(249, 341)];
        this.places = [...this.places, new BusStop("Rybitví, Stavební šk.", 235, 341)];
        this.places = [...this.places, new BusStop("Černá u Boh., bytovky", 239, 364)];
        this.places = [...this.places, new BusStop("Černá u Boh.", 215, 424)];
        this.places = [...this.places, new Place(138, 406)];
        this.places = [...this.places, new BusStop("Živanice, Dědek", 68, 388)];
        this.places = [...this.places, new Place(68, 417)];
        this.places = [...this.places, new BusStop("Živanice", 68, 457)];
        this.places = [...this.places, new BusStop("Živanice, Nerad, odb.", 68, 512)];
        this.places = [...this.places, new BusStop("Živanice, Nerad", 68, 580)];
        this.places = [...this.places, new BusStop("UMA, továrna", 262, 251)];
        this.places = [...this.places, new BusStop("UMA, točna", 231, 251)];
        this.places = [...this.places, new BusStop("Lázdně Bohdaneč, aut. nádr.", 203, 251)];
        this.places = [...this.places, new BusStop("Lázdně Bohdaneč, nám.", 178, 251)];
        this.places = [...this.places, new BusStop("Lázdně Bohdaneč, točna", 147, 251)];
        this.places = [...this.places, new BusStop("Semtín zastávka", 416, 251)];
        this.places = [...this.places, new Place(503, 251)];
        this.places = [...this.places, new BusStop("Globus", 524, 251)];
        this.places = [...this.places, new BusStop("Trnová", 603, 251)];
        this.places = [...this.places, new Place(629, 251)];
        this.places = [...this.places, new BusStop("Globus, parkoviště", 503, 288)];
        this.places = [...this.places, new Place(503, 160)];
        this.places = [...this.places, new BusStop("Ohrazenice,točna", 468, 160)];
        this.places = [...this.places, new BusStop("Ohrazenice,Semtínská", 538, 160)];
        this.places = [...this.places, new Place(629, 160)];
        this.places = [...this.places, new Place(813, 160)];
        this.places = [...this.places, new BusStop("Staré Hradiště, Na Hledíku", 871, 174)];
        this.places = [...this.places, new BusStop("Staré Hradiště, ObÚ", 972, 206)];
        this.places = [...this.places, new Place(1022, 222)];
        this.places = [...this.places, new BusStop("Staré Hradiště, Psinek", 1051, 222)];
        this.places = [...this.places, new BusStop("Staré Hradiště, Brozany", 1140, 222)];
        this.places = [...this.places, new Place(1162, 222)];
        this.places = [...this.places, new BusStop("Ráby, křižovatka", 1162, 204)];
        this.places = [...this.places, new BusStop("Ráby, prodejna", 1162, 173)];
        this.places = [...this.places, new BusStop("Ráby, Kunětická hora", 1162, 139)];
        this.places = [...this.places, new BusStop("Němčice, chaloupky", 1162, 112)];
        this.places = [...this.places, new BusStop("Němčice, rybníček", 1162, 88)];
        this.places = [...this.places, new BusStop("Dříteč", 1162, 49)];
        this.places = [...this.places, new BusStop("Ohrazenice,škola", 629, 178)];
        this.places = [...this.places, new Place(629, 243)];
        this.places = [...this.places, new BusStop("Trnová", 649, 243)];
        this.places = [...this.places, new BusStop("Poděbradská", 788, 243)];
        this.places = [...this.places, new Place(833, 243)];
        this.places = [...this.places, new Place(871, 302)];
        this.places = [...this.places, new BusStop("Hradecká", 871, 377)];
        this.places = [...this.places, new Place(871, 444)];
        this.places = [...this.places, new BusStop("Univerzita", 995, 444)];
        this.places = [...this.places, new Place(1022, 444)];
        this.places = [...this.places, new BusStop("Cihelna, točna", 1022, 366)];
        this.places = [...this.places, new BusStop("Fáblovka", 1022, 296)];
        this.places = [...this.places, new Place(1022, 272)];
        this.places = [...this.places, new BusStop("Fáblovka, točna", 978, 272)];
        this.places = [...this.places, new BusStop("Staré Hradiště, hostinec", 1022, 250)];
        this.places = [...this.places, new BusStop("Trnová, nám.", 629, 280)];
        this.places = [...this.places, new BusStop("Polabiny, TÚ", 629, 341)];
        this.places = [...this.places, new BusStop("Polabiny, Sluneční", 629, 401)];
        this.places = [...this.places, new BusStop("Polabiny, Okrajová", 629, 425)];
        this.places = [...this.places, new Place(629, 444)];
        this.places = [...this.places, new BusStop("Rosice, Kréta", 519, 444)];
        this.places = [...this.places, new BusStop("Rosice, pošta", 433, 444)];
        this.places = [...this.places, new BusStop("Rosice, náměstí", 397, 444)];
        this.places = [...this.places, new BusStop("Rosice, Gen. Svobody", 353, 444)];
        this.places = [...this.places, new BusStop("Rosice, točna", 295, 444)];
        this.places = [...this.places, new BusStop("Rybitví, zadní brána", 271, 389)];
        this.places = [...this.places, new BusStop("Bělehradská", 673, 444)];
        this.places = [...this.places, new Place(775, 444)];
        this.places = [...this.places, new BusStop("Polabiny, hotel", 813, 444)];
        this.places = [...this.places, new BusStop("Polabiny, Kosmonautů", 775, 386)];
        this.places = [...this.places, new BusStop("Polabiny, točna", 775, 327)];
        this.places = [...this.places, new BusStop("Kpt. Bartoše", 629, 507)];
        this.places = [...this.places, new BusStop("Lidická", 629, 584)];
        this.places = [...this.places, new BusStop("Polabiny, Albert HM", 629, 824)];
        this.places = [...this.places, new BusStop("Stavařov", 871, 509)];
        this.places = [...this.places, new BusStop("Zimní stadion", 871, 562)];
        this.places = [...this.places, new BusStop("Zimní stadion", 871, 674)];
        this.places = [...this.places, new Place(871, 700)];
        this.places = [...this.places, new BusStop("Sukova", 923, 700)];
        this.places = [...this.places, new BusStop("Sukova", 988, 700)];
        this.places = [...this.places, new Place(1081, 700)];
        this.places = [...this.places, new BusStop("Náměstí Republiky", 1081, 782)];
        this.places = [...this.places, new BusStop("Masarikovo náměstí", 871, 810)];
        this.places = [...this.places, new Place(871, 880)];
        this.places = [...this.places, new BusStop("Třída Míru", 924, 878)];
        this.places = [...this.places, new BusStop("U Grandu", 1052, 871)];
        this.places = [...this.places, new Place(1081, 866)];
        this.places = [...this.places, new BusStop("Palackého", 814, 880)];
        this.places = [...this.places, new Place(787, 882)];
        this.places = [...this.places, new BusStop("Palackého", 787, 888)];
        this.places = [...this.places, new BusStop("Autobus. nádraží", 719, 887)];
        this.places = [...this.places, new BusStop("Hlavní nádraží", 654, 894)];
        this.places = [...this.places, new Place(629, 893)];
        this.places = [...this.places, new BusStop("Albert HM", 603, 893)];
        this.places = [...this.places, new Place(570, 895)];
        this.places = [...this.places, new BusStop("Nadjezd Paramo", 570, 921)];
        this.places = [...this.places, new BusStop("K Polabinám", 775, 785)];//Tady končí 14
        this.places = [...this.places, new BusStop("K Polabinám", 775, 760)];
        this.places = [...this.places, new Place(775, 750)];
        this.places = [...this.places, new BusStop("Závodu míru, sídliště", 730, 750)];
        this.places = [...this.places, new BusStop("Závodu míru", 680, 750)];
        this.places = [...this.places, new BusStop("17. listopadu", 871, 997)];
        this.places = [...this.places, new BusStop("Jana Palacha", 871, 1102)];
        this.places = [...this.places, new Place(871, 1182)];
        this.places = [...this.places, new BusStop("Domov mládeže", 793, 1182)];
        this.places = [...this.places, new BusStop("Teplého", 668, 1182)];
        this.places = [...this.places, new Place(624, 1182)];
        this.places = [...this.places, new BusStop("Dopravní podnik, vozovna", 620, 1165)];   //Dopravní podnik pro trolejbus
        this.places = [...this.places, new BusStop("Dopravní podnik", 600, 1182)];
        this.places = [...this.places, new Place(570, 1185)];
        this.places = [...this.places, new BusStop("Závodiště", 511, 1185)];
        this.places = [...this.places, new Place(458, 1185)];
        this.places = [...this.places, new BusStop("Letiště", 422, 1185)];
        this.places = [...this.places, new BusStop("Letiště terminál", 422, 1270)];
        this.places = [...this.places, new Place(411, 1185)];
        this.places = [...this.places, new BusStop("Popkovice, školka", 370, 1210)];
        this.places = [...this.places, new Place(331, 1185)];
        this.places = [...this.places, new BusStop("Popkovice, hostinec", 298, 1185)];
        this.places = [...this.places, new BusStop("Svítkov, les", 458, 1150)];
        this.places = [...this.places, new Place(458, 1039)];
        this.places = [...this.places, new BusStop("Svítkov, škola", 433, 1039)];
        this.places = [...this.places, new BusStop("Svítkov, Kostnická", 368, 1039)];
        this.places = [...this.places, new Place(331, 1039)];
        this.places = [...this.places, new BusStop("Svítkov, park", 331, 1047)];
        this.places = [...this.places, new Place(331, 1085)];
        this.places = [...this.places, new BusStop("Popkovice, křižovatka", 331, 1152)];
        this.places = [...this.places, new Place(276, 1185)];
        this.places = [...this.places, new Place(257, 1085)];
        this.places = [...this.places, new BusStop("Svítkov, stadion", 267, 1071)];
        this.places = [...this.places, new Place(402, 864)];
        this.places = [...this.places, new BusStop("Nové Srnojedy", 382, 864)];
        this.places = [...this.places, new BusStop("Staré Srnojedy", 357, 864)];
        this.places = [...this.places, new BusStop("Lány na Důlku, Krchleby", 332, 864)];
        this.places = [...this.places, new BusStop("Lány na Důlku", 307, 864)];
        this.places = [...this.places, new BusStop("Lány na Důlku, Na Cihelně", 283, 864)];
        this.places = [...this.places, new BusStop("Opočínek, točna", 249, 864)];
        this.places = [...this.places, new Place(261, 1185)];
        this.places = [...this.places, new Place(261, 1397)];
        this.places = [...this.places, new BusStop("Starý Mateřov", 323, 1397)];
        this.places = [...this.places, new BusStop("Starý Mateřov, křižovatka", 370, 1397)];
        this.places = [...this.places, new BusStop("Čepí, prodejna", 370, 1512)];
        this.places = [...this.places, new BusStop("Staré Čivice, Přeloučská", 238, 1185)];
        this.places = [...this.places, new BusStop("Staré Čivice, hostinec", 214, 1185)];
        this.places = [...this.places, new Place(193, 1185)];
        this.places = [...this.places, new Place(214, 1185)];
        this.places = [...this.places, new Place(174, 1185)];
        this.places = [...this.places, new BusStop("Staré Čivice, točna", 192, 1215)];
        this.places = [...this.places, new BusStop("Staré Čivice, Na Štěpnici", 196, 1171)];
        this.places = [...this.places, new BusStop("Staré Čivice, Panasonic", 205, 1144)];
        this.places = [...this.places, new Place(222, 1091)];
        this.places = [...this.places, new BusStop("Staré Čivice, JTEKT", 205, 1092)];
        this.places = [...this.places, new BusStop("Staré Čivice, KYB", 157, 1094)];
        this.places = [...this.places, new Place(125, 1095)];
        this.places = [...this.places, new BusStop("Staré Čivice, Průmyslová zóna", 139, 995)];
        this.places = [...this.places, new BusStop("Lexova", 624, 1215)];
        this.places = [...this.places, new Place(624, 1241)];
        this.places = [...this.places, new BusStop("Dukla, u náměstí", 648, 1241)];
        this.places = [...this.places, new BusStop("Dukla, KD", 755, 1241)];
        this.places = [...this.places, new BusStop("Gorkého škola", 834, 1241)];
        this.places = [...this.places, new Place(871, 1241)];
        this.places = [...this.places, new BusStop("Gorkého", 871, 1228)];
        this.places = [...this.places, new BusStop("Gorkého", 871, 1265)];
        this.places = [...this.places, new BusStop("Dukla, náměstí", 624, 1291)];
        this.places = [...this.places, new Place(624, 1333)];
        this.places = [...this.places, new BusStop("Jilemnického", 698, 1333)];
        this.places = [...this.places, new BusStop("Staňkova, škola", 785, 1333)];
        this.places = [...this.places, new Place(871, 1333)];
        this.places = [...this.places, new Place(624, 1396)];
        this.places = [...this.places, new BusStop("Dukla, točna", 624, 1424)];
        this.places = [...this.places, new BusStop("Kapitána Nálepky", 700, 1396)];
        this.places = [...this.places, new BusStop("Demokratické mládeže", 827, 1396)];
        this.places = [...this.places, new Place(871, 1396)];
        this.places = [...this.places, new BusStop("Chrudimská", 871, 1402)];
        this.places = [...this.places, new BusStop("Čacké", 871, 1422)];
        this.places = [...this.places, new BusStop("Jesničánky, točna", 871, 1452)];
        this.places = [...this.places, new BusStop("Dražkovice, križovatka", 871, 1484)];
        this.places = [...this.places, new BusStop("Dražkovice", 871, 1514)];
        this.places = [...this.places, new Place(871, 1535)];
        this.places = [...this.places, new BusStop("Mikulovice, škola", 897, 1535)];
        this.places = [...this.places, new BusStop("Mikulovice, Staňkova", 964, 1535)];
        this.places = [...this.places, new Place(871, 1388)];
        this.places = [...this.places, new BusStop("Zborovské náměstí", 871, 1355)];
        this.places = [...this.places, new Place(1074, 1388)];
        this.places = [...this.places, new BusStop("Krematorium", 1100, 1388)];
        this.places = [...this.places, new Place(1170, 1388)];
        this.places = [...this.places, new Place(871, 1314)];
        this.places = [...this.places, new BusStop("U kapitána", 901, 1314)];
        this.places = [...this.places, new BusStop("Ulice Svobody", 1123, 1314)];
        this.places = [...this.places, new Place(1170, 1314)];
        this.places = [...this.places, new BusStop("S. K. Neumanna", 1170, 1266)];
        this.places = [...this.places, new BusStop("Výzkumný ústav", 1170, 1176)];
        this.places = [...this.places, new BusStop("Karla IV.", 1170, 1005)];
        this.places = [...this.places, new BusStop("Náměstí Republiky", 1081, 908)];
        this.places = [...this.places, new Place(1081, 925)];
        this.places = [...this.places, new Place(1170, 925)];
        this.places = [...this.places, new BusStop("Krajský úřad", 1302, 925)];
        this.places = [...this.places, new Place(1074, 1474)];
        this.places = [...this.places, new BusStop("Nemošická, bytovky", 1200, 1474)];
        this.places = [...this.places, new Place(1418, 925)];
        this.places = [...this.places, new Place(1423, 857)];
        this.places = [...this.places, new BusStop("Zlatá štika", 1462, 842)];
        this.places = [...this.places, new Place(1498, 827)];
        this.places = [...this.places, new BusStop("Na Bukovině", 1537, 827)];
        this.places = [...this.places, new BusStop("Na Haldě", 1660, 823)];
        this.places = [...this.places, new Place(1703, 822)];
        this.places = [...this.places, new BusStop("Husova", 1728, 815)];
        this.places = [...this.places, new Place(1776, 802)];
        this.places = [...this.places, new BusStop("Dubina, centrum", 1776, 785)];
        this.places = [...this.places, new BusStop("Hůrka", 1776, 638)];
        this.places = [...this.places, new Place(1776, 588)];
        this.places = [...this.places, new BusStop("Sezemice, Počaply", 1807, 549)];
        this.places = [...this.places, new BusStop("Sezemice, zámostí", 1789, 522)];
        this.places = [...this.places, new BusStop("Sezemice, pošta", 1751, 510)];
        this.places = [...this.places, new BusStop("Spojil", 1896, 588)];
        this.places = [...this.places, new BusStop("Spojil, točna", 2019, 588)];
        this.places = [...this.places, new Place(1562, 925)];
        this.places = [...this.places, new BusStop("Sakařova", 1587, 925)];
        this.places = [...this.places, new BusStop("Holubova", 1628, 925)];
        this.places = [...this.places, new BusStop("Bezdíčkova", 1681, 925)];
        this.places = [...this.places, new BusStop("Židov, točna", 1745, 925)];
        this.places = [...this.places, new Place(1786, 925)];
        this.places = [...this.places, new Place(1786, 900)];
        this.places = [...this.places, new Place(1815, 900)];
        this.places = [...this.places, new BusStop("Dubina, garáže", 1815, 871)];
        this.places = [...this.places, new BusStop("Blahoutova", 1906, 871)];
        this.places = [...this.places, new BusStop("Dubina, centrum", 1815, 800)];
        this.places = [...this.places, new Place(1815, 757)];
        this.places = [...this.places, new Place(1868, 757)];
        this.places = [...this.places, new BusStop("Dubina, sever", 1868, 690)];
        this.places = [...this.places, new BusStop("Dubina, Dubinská", 1959, 656)];
        this.places = [...this.places, new Place(2018, 676)];
        this.places = [...this.places, new BusStop("Dubina, penzion", 2016, 682)];
        this.places = [...this.places, new BusStop("Dubina, točna", 1967, 802)];
        this.places = [...this.places, new Place(1967, 871)];
        this.places = [...this.places, new BusStop("Na Drážce", 1786, 994)];
        this.places = [...this.places, new BusStop("U Kostelíčka", 1562, 966)];
        this.places = [...this.places, new Place(1562, 1000)];
        this.places = [...this.places, new BusStop("U Kostelíčka", 1562, 1028)];
        this.places = [...this.places, new BusStop("Štrossova", 1562, 1075)];
        this.places = [...this.places, new Place(1562, 1140)];
        this.places = [...this.places, new BusStop("Nemocnice", 1562, 1181)];
        this.places = [...this.places, new BusStop("Kyjevská", 1562, 1225)];
        this.places = [...this.places, new BusStop("Pardubičky, točna", 1562, 1282)];
        this.places = [...this.places, new BusStop("Průmyslová", 1652, 1282)];
        this.places = [...this.places, new BusStop("Na Okrouhlíku", 1662, 1044)];
        this.places = [...this.places, new Place(1319, 1474)];
        this.places = [...this.places, new Place(1467, 1511)];
        this.places = [...this.places, new BusStop("Nemošice, škola", 1495, 1519)];
        this.places = [...this.places, new Place(1517, 1523)];
        this.places = [...this.places, new BusStop("Nemošice, Nábřežní", 1555, 1496)];
        this.places = [...this.places, new BusStop("Nemošice, točna", 1616, 1450)];
        this.places = [...this.places, new Place(1617, 1550)];
        this.places = [...this.places, new BusStop("Ostřešany, hřiště", 1630, 1550)];
        this.places = [...this.places, new BusStop("Ostřešany, škola", 1718, 1550)];
        this.places = [...this.places, new BusStop("Ostřešany, park", 1810, 1550)];
        this.places = [...this.places, new BusStop("Ostřešany, točna", 1921, 1550)];
        this.places = [...this.places, new Place(1809, 1101)];
        this.places = [...this.places, new BusStop("Slovany, Dašická", 1830, 1101)];
        this.places = [...this.places, new BusStop("Slovany, Spojilská", 1883, 1101)];
        this.places = [...this.places, new BusStop("Slovany, U Přejezdu", 1930, 1101)];
        this.places = [...this.places, new Place(1978, 1101)];
        this.places = [...this.places, new Place(1786, 1140)];
        this.places = [...this.places, new BusStop("K nemocnici", 1543, 1140)];
        this.places = [...this.places, new Place(1211, 1140)];
        this.places = [...this.places, new BusStop("Hlaváčova", 951, 1065)];
        this.places = [...this.places, new Place(784, 1021)];
        this.places = [...this.places, new Place(700, 889)];
        this.places = [...this.places, new Place(1755, 1282)];
        this.places = [...this.places, new BusStop("U Zámečku", 1755, 1300)];
        this.places = [...this.places, new BusStop("Zdravotnická, škola", 1755, 1370)];
        this.places = [...this.places, new BusStop("Zámeček", 1778, 1282)];
        this.places = [...this.places, new BusStop("Zámeček", 1797, 1268)];
        this.places = [...this.places, new BusStop("Silo", 1837, 1282)];
        this.places = [...this.places, new Place(1853, 1282)];
        this.places = [...this.places, new Place(1853, 1318)];
        this.places = [...this.places, new BusStop("Mlékárna", 1865, 1318)];
        this.places = [...this.places, new BusStop("Dělnická", 1949, 1318)];
        this.places = [...this.places, new BusStop("Řempo", 2025, 1318)];
        this.places = [...this.places, new Place(2057, 1318)];
        this.places = [...this.places, new BusStop("Drozice", 2057, 1365)];
        this.places = [...this.places, new BusStop("Černá za Bory, pošta", 1991, 1282)];
        this.places = [...this.places, new Place(2057, 1318)];
        this.places = [...this.places, new BusStop("Holandská", 2069, 1282)];
        this.places = [...this.places, new Place(2080, 1134)];
        this.places = [...this.places, new Place(2091, 1111)];
        this.places = [...this.places, new BusStop("Staročernsko", 2139, 1003)];
        this.places = [...this.places, new BusStop("Černá za Bory, odb. žel. zast.", 2116, 1111)];
        this.places = [...this.places, new BusStop("Dašice, Pod Dubem", 2204, 1111)];
        this.places = [...this.places, new Place(2228, 1111)];
        this.places = [...this.places, new BusStop("Dašice, Zminný", 2243, 1111)];
        this.places = [...this.places, new BusStop("Sezemice, Veská", 2228, 872)];
        this.places = [...this.places, new Place(2146, 1282)];
        this.places = [...this.places, new BusStop("Černá za Bory", 2146, 1310)];
        this.places = [...this.places, new Place(2146, 1325)];
        this.places = [...this.places, new BusStop("Mnětice, u mostu", 2146, 1391)];
        this.places = [...this.places, new BusStop("Mnětice, točna", 2146, 1433)];
        this.places = [...this.places, new BusStop("Mnětice", 2146, 1468)];
        this.places = [...this.places, new BusStop("Tuněchody, kavárna", 2146, 1496)];
        this.places = [...this.places, new BusStop("Tuněchody, kostel", 2146, 1535)];
        this.places = [...this.places, new BusStop("Tuněchody, cihelna", 2146, 1568)];
        this.places = [...this.places, new BusStop("Úhřetice", 2146, 1604)];
        this.places = [...this.places, new BusStop("Hostovická", 2186, 1303)];
        this.places = [...this.places, new BusStop("Černá za Bory, točna", 2206, 1282)];
        this.places = [...this.places, new Place(2206, 1325)];
        this.places = [...this.places, new BusStop("Žižín", 2272, 1282)];
        this.places = [...this.places, new BusStop("Hostovice", 2244, 1453)];
        this.places = [...this.places, new Place(2053, 1282)];
        this.places = [...this.places, new Place(619, 96)];
        
        for(let i = 0; i < this.places.length; i++) {
            this.places[i].id = i + 1;
        }

        const placesJson = JSON.stringify(this.places);
        fs.writeFile(__dirname + "/../server/files/places.json", placesJson, (err) => {
            if(err) {
                return console.log(err);
            }
            console.log("Places were updated successfully!");
        });
    }
}

var places = new PlacesDebug();
places.debug();