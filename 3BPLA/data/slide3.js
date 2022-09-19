(function(){var loadHandler=window['sl_{724FD63F-D754-4A93-8D25-94B8D7FDC0C0}'];loadHandler&&loadHandler(2, '<div id="spr0_10635138"><div id="spr1_10635138" class="kern slide"><img id="img1_10635138" src="data/img2.png" width="1280px" height="720px" alt="" style="left:0px;top:0px;"/><div id="svg7_10635138" style="left:80px;top:180.753px;"><svg width="4" height="100" viewBox="-1 -2 4 100"><g fill="none"><g transform="translate(1,0)"><path stroke="#1cade4" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round" d="M0,0 V96"/></g></g></svg></div></div><div id="spr2_10635138" class="kern slide"><div id="spr3_10635138"><div style="width:0px;"><span id="txt0_10635138" class="nokern relpos" data-width="120.407547" style="left:171.167px;top:-10.07px;">SLAM (</span><span id="txt1_10635138" class="nokern relpos" data-width="830.959045" style="left:171.16px;top:-10.07px;">SIMULTANEOUS LOCALIZATION AND MAPPING-</span></div><div style="width:0px;"><span id="txt2_10635138" class="nokern relpos" data-width="1049.815796" style="left:115.5px;top:29.61px;">ОДНОВРЕМЕННАЯ ЛОКАЛИЗАЦИЯ И ПОСТРОЕНИЕ КАРТЫ</span><span id="txt3_10635138" class="nokern relpos" style="left:115.493px;top:29.61px;">)</span></div></div><div id="spr4_10635138" style="left:37.424px;top:125.508px;"><div style="width:0px;"><span id="txt4_10635138" class="nokern" style="left:9.598px;top:6.598px;">	</span><span id="txt5_10635138" class="nokern" data-width="165.411469" style="left:105.598px;top:1.139px;">Основная </span><span id="txt6_10635138" class="nokern" data-width="84.161461" style="left:257.498px;top:1.139px;">идея </span><span id="txt7_10635138" class="nokern" data-width="97.720055" style="left:338.232px;top:1.139px;">SLAM </span><span id="txt8_10635138" class="nokern" data-width="130.727875" style="left:427.465px;top:1.139px;">состоит </span><span id="txt9_10635138" class="nokern" data-width="27.861980" style="left:548.198px;top:1.139px;">в </span><span id="txt10_10635138" class="nokern" data-width="66.388023" style="left:573.932px;top:1.139px;">том,</span></div><div style="width:0px;"><span id="txt11_10635138" class="nokern" data-width="115.798180" style="left:9.598px;top:42.739px;">чтобы, </span><span id="txt12_10635138" class="nokern" data-width="134.553391" style="left:133.892px;top:42.739px;">оставив </span><span id="txt13_10635138" class="nokern" data-width="122.433601" style="left:274.852px;top:42.739px;">робота </span><span id="txt14_10635138" class="nokern" data-width="27.861980" style="left:404.145px;top:42.739px;">в </span><span id="txt15_10635138" class="nokern" data-width="205.122406" style="left:446.598px;top:42.739px;">неизвестном</span></div><div style="width:0px;"><span id="txt16_10635138" class="nokern" data-width="100.326828" style="left:9.598px;top:84.339px;">месте </span><span id="txt17_10635138" class="nokern" data-width="29.639324" style="left:139.432px;top:84.339px;">и </span><span id="txt18_10635138" class="nokern" data-width="160.722656" style="left:201.932px;top:84.339px;">позволив </span><span id="txt19_10635138" class="nokern" data-width="68.740891" style="left:384.765px;top:84.339px;">ему </span><span id="txt20_10635138" class="nokern" data-width="161.027344" style="left:484.932px;top:84.339px;">двигаться,</span></div><div style="width:0px;"><span id="txt21_10635138" class="nokern" data-width="172.571625" style="left:9.598px;top:125.939px;">построить </span><span id="txt22_10635138" class="nokern" data-width="95.739586" style="left:254.932px;top:125.939px;">карту </span><span id="txt23_10635138" class="nokern" data-width="226.670578" style="left:430.765px;top:125.939px;">окружающего</span></div><div style="width:0px;"><span id="txt24_10635138" class="nokern" data-width="222.709641" style="left:9.598px;top:167.539px;">пространства.</span></div><div style="width:0px;"><span id="txt25_10635138" class="nokern" style="left:9.598px;top:214.557px;">	</span></div><div style="width:0px;"><span id="txt26_10635138" class="nokern" data-width="194.559906" style="left:57.598px;top:250.739px;">Реализация </span><span id="txt27_10635138" class="nokern" data-width="97.720055" style="left:245.098px;top:250.739px;">SLAM </span><span id="txt28_10635138" class="nokern" data-width="47.141930" style="left:339.432px;top:250.739px;">на </span><span id="txt29_10635138" class="nokern" data-width="101.257813" style="left:388.765px;top:250.739px;">борту </span><span id="txt30_10635138" class="nokern" data-width="162.500000" style="left:487.098px;top:250.739px;">позволяет</span></div><div style="width:0px;"><span id="txt31_10635138" class="nokern" data-width="225.164078" style="left:9.598px;top:292.339px;">использовать </span><span id="txt32_10635138" class="nokern" data-width="143.473969" style="left:217.265px;top:292.339px;">роботов </span><span id="txt33_10635138" class="nokern" data-width="25.881512" style="left:346.932px;top:292.339px;">в:</span></div><div style="width:0px;"><span id="txt34_10635138" class="nokern" style="left:9.598px;top:333.939px;">➢</span><span id="txt35_10635138" class="nokern" data-width="396.669281" style="left:57.598px;top:333.939px;">Поисково-спасательных </span><span id="txt36_10635138" class="nokern" data-width="170.760422" style="left:420.598px;top:333.939px;">операциях</span></div><div style="width:0px;"><span id="txt37_10635138" class="nokern" style="left:9.598px;top:375.539px;">➢</span><span id="txt38_10635138" class="nokern" data-width="29.368490" style="left:57.598px;top:375.539px;">В </span><span id="txt39_10635138" class="nokern" data-width="99.835938" style="left:119.645px;top:375.539px;">места </span><span id="txt40_10635138" class="nokern" data-width="80.098961" style="left:248.352px;top:375.539px;">куда </span><span id="txt41_10635138" class="nokern" data-width="115.781258" style="left:359.225px;top:375.539px;">доступ </span><span id="txt42_10635138" class="nokern" data-width="147.654953" style="left:501.932px;top:375.539px;">человека</span></div><div style="width:0px;"><span id="txt43_10635138" class="nokern" data-width="210.420578" style="left:57.598px;top:417.139px;">невозможен </span><span id="txt44_10635138" class="nokern" data-width="68.046875" style="left:252.098px;top:417.139px;">или </span><span id="txt45_10635138" class="nokern" data-width="169.473969" style="left:314.932px;top:417.139px;">ограничен</span></div></div><div id="spr5_10635138" style="left:724.067px;top:283.119px;"><img id="img0_10635138" src="data/img7.jpg" width="555" height="439.5" alt="" style="left:0.09px;top:-0.11px;"/></div><div id="spr6_10635138" style="left:724.068px;top:147.407px;"><div style="width:0px;"><span id="txt46_10635138" class="nokern" data-width="528.446655" style="left:35.455px;top:1.139px;">Что видит мобильный робот при</span></div><div style="width:0px;"><span id="txt47_10635138" class="nokern" data-width="412.039063" style="left:87.789px;top:42.739px;">использовании одного из</span></div><div style="width:0px;"><span id="txt48_10635138" class="nokern" data-width="284.967468" style="left:146.869px;top:84.339px;">алгоритмов SLAM</span></div></div></div></div>');})();