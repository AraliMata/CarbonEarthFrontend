const municipios = {
    "Acacoyagua":{"bs_primarios3":3.08, "bs_primarios6":2.22, "bs_secundarios3":164.16, "bs_secundarios6":148.29, "zona":"","hf": "3,349,300.00","ce": "161,771.19","rc": "28,699,424.74"},
  "Acala":{"bs_primarios3":36.31, "bs_primarios6":35.32, "bs_secundarios3":77.94, "bs_secundarios6":78.38, "zona":"","hf": "15,051.00","ce": "726.96","rc": "128,422.85"},
  "Acapetahua":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":4.25, "bs_secundarios6":8.3, "zona":"","hf": "11,370.00","ce": "549.17","rc": "97,389.44"},
  "Altamirano":{"bs_primarios3":121.83, "bs_primarios6":91.91, "bs_secundarios3":615.46, "bs_secundarios6":547.52, "zona":"","hf": "830.00","ce": "40.09","rc": "4,023.82"},
  "Amatán":{"bs_primarios3":42.11, "bs_primarios6":36.05, "bs_secundarios3":106.94, "bs_secundarios6":100.82, "zona":"","hf": "63,943.00","ce": "3,088.45","rc": "547,266.48"},
  "Amatenango de la Frontera":{"bs_primarios3":58.81, "bs_primarios6":25.53, "bs_secundarios3":126.89, "bs_secundarios6":148.64, "zona":"","hf": "13,687.00","ce": "661.08","rc": "116,442.66"},
  "Amatenango del Valle":{"bs_primarios3":18.45, "bs_primarios6":22.94, "bs_secundarios3":61.43, "bs_secundarios6":50.19, "zona":"","hf": "17,417.00","ce": "841.24","rc": "148,893.06"},
  "Angel Albino Corzo":{"bs_primarios3":163.23, "bs_primarios6":150.38, "bs_secundarios3":233.91, "bs_secundarios6":237.69, "zona":"","hf": "7,313.00","ce": "353.22","rc": "60,790.72"},
  "Arriaga":{"bs_primarios3":72.25, "bs_primarios6":63.23, "bs_secundarios3":226.95, "bs_secundarios6":252.82, "zona":"","hf": "38,807.00","ce": "1,874.38","rc": "331,010.66"},
  "Bejucal de Ocampo":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":27.24, "bs_secundarios6":25.41, "zona":"","hf": "31,605.00","ce": "1,526.52","rc": "270,700.51"},
  "Bella Vista":{"bs_primarios3":2.17, "bs_primarios6":2.17, "bs_secundarios3":57.75, "bs_secundarios6":58.4, "zona":"","hf": "2,541.00","ce": "122.73","rc": "21,481.28"},
  "Berriozábal":{"bs_primarios3":13.81, "bs_primarios6":13.17, "bs_secundarios3":169.57, "bs_secundarios6":160.64, "zona":"","hf": "6,057.00","ce": "292.55","rc": "51,062.93"},
  "Bochil":{"bs_primarios3":30.81, "bs_primarios6":19.53, "bs_secundarios3":285.57, "bs_secundarios6":221.06, "zona":"","hf": "17,381.00","ce": "839.50","rc": "147,775.74"},
  "El Bosque":{"bs_primarios3":14.61, "bs_primarios6":13.09, "bs_secundarios3":92.52, "bs_secundarios6":80.04, "zona":"","hf": "24,059.00","ce": "1,162.05","rc": "204,999.52"},
  "Cacahoatán":{"bs_primarios3":42.53, "bs_primarios6":33.67, "bs_secundarios3":21.67, "bs_secundarios6":28.56, "zona":"","hf": "9,313.00","ce": "449.82","rc": "79,353.28"},
  "Catazajá":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":15.54, "bs_secundarios6":21, "zona":"","hf": "6,223.00","ce": "300.57","rc": "53,024.32"},
  "Cintalapa":{"bs_primarios3":655.26, "bs_primarios6":502.12, "bs_secundarios3":1515.13, "bs_secundarios6":1547.93, "zona":"","hf": "2,100.00","ce": "101.43","rc": "17,893.47"},
  "Coapilla":{"bs_primarios3":4.61, "bs_primarios6":4.61, "bs_secundarios3":128.58, "bs_secundarios6":119.9, "zona":"","hf": "205,005.00","ce": "9,901.74","rc": "1,746,786.10"},
  "Comitán de Domínguez":{"bs_primarios3":108.8, "bs_primarios6":87.15, "bs_secundarios3":393.69, "bs_secundarios6":391.65, "zona":"","hf": "12,451.00","ce": "601.38","rc": "106,091.24"},
  "La Concordia":{"bs_primarios3":606.17, "bs_primarios6":586.03, "bs_secundarios3":812.57, "bs_secundarios6":762.65, "zona":"","hf": "47,880.00","ce": "2,312.60","rc": "407,971.12"},
  "Copainalá":{"bs_primarios3":53.34, "bs_primarios6":42.85, "bs_secundarios3":162.23, "bs_secundarios6":164.25, "zona":"","hf": "134,868.00","ce": "6,514.12","rc": "1,149,169.77"},
  "Chalchihuitán":{"bs_primarios3":48.43, "bs_primarios6":37.61, "bs_secundarios3":106.11, "bs_secundarios6":88.44, "zona":"","hf": "20,710.00","ce": "1,000.29","rc": "176,463.70"},
  "Chamula":{"bs_primarios3":69.19, "bs_primarios6":57.23, "bs_secundarios3":112.35, "bs_secundarios6":139.84, "zona":"","hf": "12,605.00","ce": "608.82","rc": "107,403.42"},
  "Chanal":{"bs_primarios3":74.43, "bs_primarios6":75.74, "bs_secundarios3":185.19, "bs_secundarios6":167.01, "zona":"","hf": "19,707.00","ce": "951.85","rc": "167,917.43"},
  "Chapultenango":{"bs_primarios3":44.25, "bs_primarios6":36.26, "bs_secundarios3":46.25, "bs_secundarios6":55, "zona":"","hf": "24,275.00","ce": "1,172.48","rc": "206,839.99"},
  "Chenalhó":{"bs_primarios3":1.59, "bs_primarios6":0, "bs_secundarios3":106.42, "bs_secundarios6":47.44, "zona":"","hf": "9,126.00","ce": "440.79","rc": "77,759.91"},
  "Chiapa de Corzo":{"bs_primarios3":17.86, "bs_primarios6":10.94, "bs_secundarios3":289.68, "bs_secundarios6":308.33, "zona":"","hf": "4,744.00","ce": "229.14","rc": "40,422.20"},
  "Chiapilla":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":0.56, "bs_secundarios6":0.01, "zona":"","hf": "31,927.00","ce": "1,542.07","rc": "272,040.39"},
  "Chicoasén":{"bs_primarios3":4.37, "bs_primarios6":1.45, "bs_secundarios3":103, "bs_secundarios6":93.87, "zona":"","hf": "1.00","ce": "0.05","rc": "8.52"},
  "Chicomuselo":{"bs_primarios3":48.23, "bs_primarios6":39.68, "bs_secundarios3":457.7, "bs_secundarios6":454.89, "zona":"","hf": "9,532.00","ce": "460.40","rc": "81,219.31"},
  "Chilón":{"bs_primarios3":337.5, "bs_primarios6":209.21, "bs_secundarios3":1071.75, "bs_secundarios6":739.06, "zona":"","hf": "49,457.00","ce": "2,388.77","rc": "421,408.26"},
  "Escuintla":{"bs_primarios3":31.81, "bs_primarios6":22.21, "bs_secundarios3":167.74, "bs_secundarios6":153.98, "zona":"","hf": "94,827.00","ce": "4,580.14","rc": "807,992.42"},
  "Francisco León":{"bs_primarios3":17.53, "bs_primarios6":12.94, "bs_secundarios3":71.21, "bs_secundarios6":74.8, "zona":"","hf": "17,619.00","ce": "851.00","rc": "150,126.21"},
  "Frontera Comalapa":{"bs_primarios3":24.17, "bs_primarios6":19.91, "bs_secundarios3":184.36, "bs_secundarios6":161.96, "zona":"","hf": "8,774.00","ce": "423.78","rc": "74,760.62"},
  "Frontera Hidalgo":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":0, "bs_secundarios6":0, "zona":"","hf": "18,187.00","ce": "878.43","rc": "154,965.97"},
  "La Grandeza":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":5.31, "bs_secundarios6":4.91, "zona":"","hf": "0.00","ce": "0.00","rc": "0.00"},
  "Huehuetán":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":0, "bs_secundarios6":0, "zona":"","hf": "491.00","ce": "23.72","rc": "4,183.66"},
  "Huixtán":{"bs_primarios3":27.87, "bs_primarios6":25.99, "bs_secundarios3":52.03, "bs_secundarios6":72.85, "zona":"","hf": "0.00","ce": "0.00","rc": "0.00"},
  "Huitiupán":{"bs_primarios3":52.43, "bs_primarios6":25.3, "bs_secundarios3":132.53, "bs_secundarios6":122.97, "zona":"","hf": "9,884.00","ce": "477.40","rc": "84,218.60"},
  "Huixtla":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":17.78, "bs_secundarios6":5.85, "zona":"","hf": "14,827.00","ce": "716.14","rc": "126,336.42"},
  "La Independencia":{"bs_primarios3":28.75, "bs_primarios6":27.93, "bs_secundarios3":285.82, "bs_secundarios6":234.54, "zona":"","hf": "585.00","ce": "28.26","rc": "4,984.61"},
  "Ixhuatán":{"bs_primarios3":19.05, "bs_primarios6":15.33, "bs_secundarios3":20.37, "bs_secundarios6":21.24, "zona":"","hf": "26,247.00","ce": "1,267.73","rc": "223,642.81"},
  "Ixtacomitán":{"bs_primarios3":2.36, "bs_primarios6":0.54, "bs_secundarios3":33.29, "bs_secundarios6":34.26, "zona":"","hf": "3,657.00","ce": "176.63","rc": "31,160.20"},
  "Ixtapa":{"bs_primarios3":55.45, "bs_primarios6":23.38, "bs_secundarios3":133.15, "bs_secundarios6":134.4, "zona":"","hf": "3,480.00","ce": "168.08","rc": "29,652.04"},
  "Ixtapangajoya":{"bs_primarios3":0.97, "bs_primarios6":0.61, "bs_secundarios3":21.95, "bs_secundarios6":27.23, "zona":"","hf": "15,778.00","ce": "762.08","rc": "134,439.60"},
  "Jiquipilas":{"bs_primarios3":371.39, "bs_primarios6":333.15, "bs_secundarios3":299.2, "bs_secundarios6":284.1, "zona":"","hf": "2,784.00","ce": "134.47","rc": "23,721.63"},
  "Jitotol":{"bs_primarios3":64.33, "bs_primarios6":56.57, "bs_secundarios3":112.92, "bs_secundarios6":114.81, "zona":"","hf": "61,725.00","ce": "2,981.32","rc": "525,940.21"},
  "Juárez":{"bs_primarios3":53.89, "bs_primarios6":30.28, "bs_secundarios3":32.23, "bs_secundarios6":27.85, "zona":"","hf": "17,138.00","ce": "827.77","rc": "146,027.76"},
  "Larráinzar":{"bs_primarios3":0.3, "bs_primarios6":0.41, "bs_secundarios3":96.58, "bs_secundarios6":97.09, "zona":"","hf": "5,813.00","ce": "280.77","rc": "49,530.83"},
  "La Libertad":{"bs_primarios3":36.89, "bs_primarios6":31.39, "bs_secundarios3":5.29, "bs_secundarios6":14.95, "zona":"","hf": "9,750.00","ce": "470.93","rc": "83,076.83"},
  "Mapastepec":{"bs_primarios3":147.76, "bs_primarios6":131.5, "bs_secundarios3":367.63, "bs_secundarios6":293.72, "zona":"","hf": "4,634.00","ce": "223.82","rc": "39,484.92"},
  "Las Margaritas":{"bs_primarios3":507.13, "bs_primarios6":471.51, "bs_secundarios3":1521.97, "bs_secundarios6":1570.44, "zona":"","hf": "42,522.00","ce": "2,053.81","rc": "362,317.21"},
  "Mazapa de Madero":{"bs_primarios3":8.27, "bs_primarios6":7.1, "bs_secundarios3":68.54, "bs_secundarios6":72.33, "zona":"","hf": "204,195.00","ce": "9,862.62","rc": "1,739,884.34"},
  "Mazatán":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":0, "bs_secundarios6":0, "zona":"","hf": "7,943.00","ce": "383.65","rc": "67,679.92"},
  "Metapa":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":0, "bs_secundarios6":0, "zona":"","hf": "0.00","ce": "0.00","rc": "0.00"},
  "Mitontic":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":22.22, "bs_secundarios6":22.24, "zona":"","hf": "0.00","ce": "0.00","rc": "0.00"},
  "Motozintla":{"bs_primarios3":97.59, "bs_primarios6":73.01, "bs_secundarios3":196.59, "bs_secundarios6":214.86, "zona":"","hf": "2,224.00","ce": "107.42","rc": "18,950.04"},
  "Nicolás Ruíz":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":5.79, "bs_secundarios6":3.82, "zona":"","hf": "28,787.00","ce": "1,390.41","rc": "245,285.39"},
  "Ocosingo":{"bs_primarios3":5212.74, "bs_primarios6":4798.06, "bs_secundarios3":2683.35, "bs_secundarios6":2168.70, "zona":"","hf": "382.00","ce": "18.45","rc": "3,254.91"},
  "Ocotepec":{"bs_primarios3":9.47, "bs_primarios6":9.35, "bs_secundarios3":51.46, "bs_secundarios6":50.92, "zona":"","hf": "696,676.00","ce": "33,649.45","rc": "5,936,167.19"},
  "Ocozocoautla de Espinosa":{"bs_primarios3":358.96, "bs_primarios6":300.95, "bs_secundarios3":848.66, "bs_secundarios6":858.67, "zona":"","hf": "6,027.00","ce": "291.10","rc": "51,354.26"},
  "Ostuacán":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":119.59, "bs_secundarios6":123.1, "zona":"","hf": "115,962.00","ce": "5,600.96","rc": "988,077.41"},
  "Osumacinta":{"bs_primarios3":8.66, "bs_primarios6":0, "bs_secundarios3":49.22, "bs_secundarios6":38.31, "zona":"","hf": "12,310.00","ce": "594.57","rc": "104,889.82"},
  "Oxchuc":{"bs_primarios3":2.98, "bs_primarios6":2.56, "bs_secundarios3":285.64, "bs_secundarios6":201.21, "zona":"","hf": "3,831.00","ce": "185.04","rc": "32,642.80"},
  "Palenque":{"bs_primarios3":128.97, "bs_primarios6":98.58, "bs_secundarios3":992.84, "bs_secundarios6":812.47, "zona":"","hf": "20,377.00","ce": "984.21","rc": "173,626.30"},
  "Pantelhó":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":88.06, "bs_secundarios6":21.44, "zona":"","hf": "91,105.00","ce": "4,400.37","rc": "776,278.37"},
  "Pantepec":{"bs_primarios3":25.04, "bs_primarios6":17.72, "bs_secundarios3":42.32, "bs_secundarios6":46.63, "zona":"","hf": "2,144.00","ce": "103.56","rc": "18,268.38"},
  "Pichucalco":{"bs_primarios3":11.83, "bs_primarios6":2.38, "bs_secundarios3":67.5, "bs_secundarios6":72.56, "zona":"","hf": "6,435.00","ce": "310.81","rc": "54,830.70"},
  "Pijijiapan":{"bs_primarios3":82.2, "bs_primarios6":76.3, "bs_secundarios3":513.43, "bs_secundarios6":489.74, "zona":"","hf": "7,494.00","ce": "361.96","rc": "63,854.13"},
  "El Porvenir":{"bs_primarios3":0.12, "bs_primarios6":0.24, "bs_secundarios3":34.36, "bs_secundarios6":32.65, "zona":"","hf": "56,604.00","ce": "2,733.97","rc": "482,305.70"},
  "Villa Comaltitlán":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":29.75, "bs_secundarios6":23.43, "zona":"","hf": "3,289.00","ce": "158.86","rc": "28,024.58"},
  "Pueblo Nuevo Solistahuacán":{"bs_primarios3":9.95, "bs_primarios6":5.91, "bs_secundarios3":126.07, "bs_secundarios6":120.98, "zona":"","hf": "2,343.00","ce": "113.17","rc": "19,964.00"},
  "Rayón":{"bs_primarios3":24.75, "bs_primarios6":11.78, "bs_secundarios3":7.85, "bs_secundarios6":20.46, "zona":"","hf": "12,689.00","ce": "612.88","rc": "108,119.16"},
  "Reforma":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":0, "bs_secundarios6":0, "zona":"","hf": "3,224.00","ce": "155.72","rc": "27,470.74"},
  "Las Rosas":{"bs_primarios3":30.18, "bs_primarios6":27.94, "bs_secundarios3":54.14, "bs_secundarios6":53.72, "zona":"","hf": "0.00","ce": "0.00","rc": "0.00"},
  "Sabanilla":{"bs_primarios3":8.7, "bs_primarios6":2.96, "bs_secundarios3":141.76, "bs_secundarios6":98.04, "zona":"","hf": "8,166.00","ce": "394.42","rc": "69,580.04"},
  "Salto de Agua":{"bs_primarios3":68.11, "bs_primarios6":46.32, "bs_secundarios3":506.93, "bs_secundarios6":287.05, "zona":"","hf": "10,100.00","ce": "487.83","rc": "86,059.07"},
  "San Cristóbal de las Casas":{"bs_primarios3":101.22, "bs_primarios6":101.92, "bs_secundarios3":104.12, "bs_secundarios6":85.86, "zona":"","hf": "33,337.00","ce": "1,610.18","rc": "284,054.58"},
  "San Fernando":{"bs_primarios3":23.86, "bs_primarios6":14.57, "bs_secundarios3":209.78, "bs_secundarios6":165.61, "zona":"","hf": "18,778.00","ce": "906.98","rc": "160,001.70"},
  "Siltepec":{"bs_primarios3":238.11, "bs_primarios6":208.49, "bs_secundarios3":237.55, "bs_secundarios6":275.35, "zona":"","hf": "18,018.00","ce": "870.27","rc": "153,525.97"},
  "Simojovel":{"bs_primarios3":22.42, "bs_primarios6":13.56, "bs_secundarios3":158.25, "bs_secundarios6":135.43, "zona":"","hf": "48,384.00","ce": "2,336.95","rc": "412,265.55"},
  "Sitalá":{"bs_primarios3":14.93, "bs_primarios6":4.7, "bs_secundarios3":69.92, "bs_secundarios6":22.54, "zona":"","hf": "14,899.00","ce": "719.62","rc": "126,949.91"},
  "Socoltenango":{"bs_primarios3":5.29, "bs_primarios6":5.27, "bs_secundarios3":73.48, "bs_secundarios6":105.98, "zona":"","hf": "2,724.00","ce": "131.57","rc": "23,210.39"},
  "Solosuchiapa":{"bs_primarios3":20.31, "bs_primarios6":14.46, "bs_secundarios3":25.41, "bs_secundarios6":38.26, "zona":"","hf": "11,125.00","ce": "537.34","rc": "94,792.79"},
  "Soyaló":{"bs_primarios3":5.47, "bs_primarios6":1.3, "bs_secundarios3":62.19, "bs_secundarios6":45.43, "zona":"","hf": "5,272.00","ce": "254.64","rc": "44,921.13"},
  "Suchiapa":{"bs_primarios3":21.56, "bs_primarios6":21.63, "bs_secundarios3":118.68, "bs_secundarios6":121.33, "zona":"","hf": "4,673.00","ce": "225.71","rc": "39,817.23"},
  "Suchiate":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":0, "bs_secundarios6":0, "zona":"","hf": "14,296.00","ce": "690.50","rc": "121,811.93"},
  "Sunuapa":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":19.46, "bs_secundarios6":17.28, "zona":"","hf": "0.00","ce": "0.00","rc": "0.00"},
  "Tapachula":{"bs_primarios3":22.98, "bs_primarios6":22.77, "bs_secundarios3":61.48, "bs_secundarios6":60.56, "zona":"","hf": "1,728.00","ce": "83.46","rc": "14,723.77"},
  "Tapalapa":{"bs_primarios3":21.97, "bs_primarios6":16.41, "bs_secundarios3":43.84, "bs_secundarios6":49.28, "zona":"","hf": "8,333.00","ce": "402.48","rc": "71,002.99"},
  "Tapilula":{"bs_primarios3":2.1, "bs_primarios6":0.63, "bs_secundarios3":3.18, "bs_secundarios6":12.65, "zona":"","hf": "6,569.00","ce": "317.28","rc": "55,972.48"},
  "Tecpatán":{"bs_primarios3":20, "bs_primarios6":17.75, "bs_secundarios3":124.11, "bs_secundarios6":119.16, "zona":"","hf": "1,328.00","ce": "64.14","rc": "11,315.49"},
  "Tenejapa":{"bs_primarios3":10, "bs_primarios6":4.19, "bs_secundarios3":85.31, "bs_secundarios6":65.73, "zona":"","hf": "13,691.00","ce": "661.28","rc": "116,656.90"},
  "Teopisca":{"bs_primarios3":65.3, "bs_primarios6":66.84, "bs_secundarios3":127.85, "bs_secundarios6":113.13, "zona":"","hf": "6,992.00","ce": "337.71","rc": "59,576.73"},
  "Tila":{"bs_primarios3":57.81, "bs_primarios6":46.79, "bs_secundarios3":343.68, "bs_secundarios6":273.71, "zona":"","hf": "17,997.00","ce": "869.26","rc": "153,347.04"},
  "Tonalá":{"bs_primarios3":69.68, "bs_primarios6":59.28, "bs_secundarios3":521.49, "bs_secundarios6":525.56, "zona":"","hf": "32,050.00","ce": "1,548.02","rc": "273,088.44"},
  "Totolapa":{"bs_primarios3":45.79, "bs_primarios6":40.22, "bs_secundarios3":25.34, "bs_secundarios6":25.03, "zona":"","hf": "58,484.00","ce": "2,824.78","rc": "498,324.62"},
  "La Trinitaria":{"bs_primarios3":73.71, "bs_primarios6":69.3, "bs_secundarios3":673.81, "bs_secundarios6":598.44, "zona":"","hf": "6,525.00","ce": "315.16","rc": "55,597.57"},
  "Tumbalá":{"bs_primarios3":24.27, "bs_primarios6":19.16, "bs_secundarios3":243.36, "bs_secundarios6":88.22, "zona":"","hf": "66,774.00","ce": "3,225.18","rc": "568,961.22"},
  "Tuxtla Gutiérrez":{"bs_primarios3":2.5, "bs_primarios6":2.38, "bs_secundarios3":115.84, "bs_secundarios6":115.72, "zona":"","hf": "10,738.00","ce": "518.65","rc": "91,495.28"},
  "Tuxtla Chico":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":0, "bs_secundarios6":0, "zona":"","hf": "11,810.00","ce": "570.42","rc": "100,629.47"},
  "Tuzantán":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":0, "bs_secundarios6":0, "zona":"","hf": "0.00","ce": "0.00","rc": "0.00"},
  "Tzimol":{"bs_primarios3":32.02, "bs_primarios6":29.83, "bs_secundarios3":84.81, "bs_secundarios6":110.41, "zona":"","hf": "0.00","ce": "0.00","rc": "0.00"},
  "Unión Juárez":{"bs_primarios3":2.26, "bs_primarios6":2.15, "bs_secundarios3":3.96, "bs_secundarios6":4.93, "zona":"","hf": "14,024.00","ce": "677.36","rc": "119,494.30"},
  "Venustiano Carranza":{"bs_primarios3":23.13, "bs_primarios6":11.35, "bs_secundarios3":237.55, "bs_secundarios6":253.03, "zona":"","hf": "708.00","ce": "34.20","rc": "6,032.66"},
  "Villa Corzo":{"bs_primarios3":816.26, "bs_primarios6":654.91, "bs_secundarios3":774.91, "bs_secundarios6":754.38, "zona":"","hf": "26,438.00","ce": "1,276.96","rc": "225,270.27"},
  "Villaflores":{"bs_primarios3":525.19, "bs_primarios6":378.72, "bs_secundarios3":386.48, "bs_secundarios6":547.74, "zona":"","hf": "140,929.00","ce": "6,806.87","rc": "1,200,813.73"},
  "Yajalón":{"bs_primarios3":19.99, "bs_primarios6":18.46, "bs_secundarios3":103.32, "bs_secundarios6":62.95, "zona":"","hf": "92,646.00","ce": "4,474.80","rc": "789,408.77"},
  "San Lucas":{"bs_primarios3":9.24, "bs_primarios6":6.57, "bs_secundarios3":27.85, "bs_secundarios6":23.83, "zona":"","hf": "8,141.00","ce": "393.21","rc": "69,367.02"},
  "Zinacantán":{"bs_primarios3":51.31, "bs_primarios6":50.03, "bs_secundarios3":87.32, "bs_secundarios6":52.88, "zona":"","hf": "3,040.00","ce": "146.83","rc": "25,902.93"},
  "San Juan Cancuc":{"bs_primarios3":0.46, "bs_primarios6":0.89, "bs_secundarios3":64.76, "bs_secundarios6":29.68, "zona":"","hf": "10,291.00","ce": "497.06","rc": "87,686.52"},
  "Aldama":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":12.8, "bs_secundarios6":12.5, "zona":"","hf": "3,057.00","ce": "147.65","rc": "26,047.78"},
  "Benemérito de las Américas":{"bs_primarios3":470.37, "bs_primarios6":191.41, "bs_secundarios3":219.88, "bs_secundarios6":129.85, "zona":"","hf": "1,250.00","ce": "60.38","rc": "10,650.88"},
  "Maravilla Tenejapa":{"bs_primarios3":242.48, "bs_primarios6":231.81, "bs_secundarios3":209.46, "bs_secundarios6":112.32, "zona":"","hf": "32,126.00","ce": "1,551.69","rc": "273,736.01"},
  "Marqués de Comillas":{"bs_primarios3":416.1, "bs_primarios6":178, "bs_secundarios3":257.27, "bs_secundarios6":194.71, "zona":"","hf": "34,413.00","ce": "1,662.15","rc": "293,222.85"},
  "Montecristo de Guerrero":{"bs_primarios3":61.96, "bs_primarios6":50.27, "bs_secundarios3":112.14, "bs_secundarios6":106.78, "zona":"","hf": "37,271.00","ce": "1,800.19","rc": "317,575.01"},
  "San Andrés Duraznal":{"bs_primarios3":5.2, "bs_primarios6":1.77, "bs_secundarios3":22.81, "bs_secundarios6":26.25, "zona":"","hf": "15,705.00","ce": "758.55","rc": "133,817.59"},
  "Santiago el Pinar":{"bs_primarios3":0, "bs_primarios6":0, "bs_secundarios3":10, "bs_secundarios6":8.75, "zona":"","hf": "2,802.00","ce": "135.34","rc": "23,875.00"}
  
  }
  
  const mapStyle = [
    {
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ visibility: "on" }, { color: "#fcfcfc" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ visibility: "on" }, { color: "#bfd4ff" }],
    },
  ];
  let map;
  let censusMin = Number.MAX_VALUE,
    censusMax = -Number.MAX_VALUE;
  
  function initMap() {
    // load the map
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 17, lng: -93 },
      zoom: 8,
      styles: mapStyle,
    });
  
    loadMapShapes();
    // set up the style rules and events for google.maps.Data
    map.data.setStyle(styleFeature);
    map.data.addListener("mouseover", mouseInToRegion);
    map.data.addListener("mouseout", mouseOutOfRegion);
  
    // wire up the button
    const selectBox = document.getElementById("chiapas");
  
    /*google.maps.event.addDomListener(selectBox, "change", () => {
      //clearCensusData();
      console.log("Seleccionó municipio");
      //loadCensusData(selectBox.options[selectBox.selectedIndex].value);
      //cargarMunicipios();
    });*/
    // state polygons only need to be loaded once, do them now
    
  }
  
  /** Loads the state boundary polygons from a GeoJSON source. */
  function loadMapShapes() {
    // load US state outline polygons from a GeoJson file
    map.data.loadGeoJson(
      "https://raw.githubusercontent.com/angelnmara/geojson/master/Municipios/07_Chiapas.json",
      { idPropertyName: "NAME_2" }
    );
    // wait for the request to complete by listening for the first feature to be
    // added
    google.maps.event.addListenerOnce(map.data, "addfeature", () => {
      google.maps.event.trigger(
        document.getElementById("chiapas"),
        "change"
      );
    });
  }
  
  
  /**
   * Loads the census data from a simulated API call to the US Census API.
   *
   * @param {string} variable
   * 
   * 
   */
  function loadCensusData(variable) {
  
  
  
    // load the requested variable from the census API (using local copies)
    const xhr = new XMLHttpRequest();
    //xhr.open("GET", "localhost:3000/datos-chiapas");
    console.log("Estoy en cargar datos");
    xhr.onreadystatechange = function () {
  
      console.log("Los agarró");
      
  
      const censusData = JSON.parse(xhr.responseText);
      console.log(censusData);
      //const municipios = censusData[0];
  
      const response = fetch('localhost:3000/datos-chiapas').then(function(response) {
            return response.json
          }).then(out =>
            console.log('Checkout this JSON! ', out)).catch(function(err) {
            console.log(err)
          });
   
      console.log(response);
  
      /*const fetch = require("node-fetch");
  
      
  
      const response = fetch("localhost:3000/datos-chiapas")
      .then(response => {
         return response.json();
      })
      .then(jsondata => console.log(jsondata));
  
      console.log(response)
      
      const municipios = response[0]*/
      console.log(municipios)
  
      /*for(var municipio in municipios) {
        if(municipios[municipio] instanceof Object) {
            printValues(municipios[municipio]);
  
            const state = map.data.getFeatureById(municipio);
  
            if (state) {
              state.setProperty("datos", municipio);
            }
  
        };
      }*/
  
      /*censusData.shift(); // the first row contains column names
      censusData.forEach((row) => {
        const censusVariable = parseFloat(row);
        const stateId = row[1];
  
        // keep track of min and max values
        if (censusVariable < censusMin) {
          censusMin = censusVariable;
        }
  
        if (censusVariable > censusMax) {
          censusMax = censusVariable;
        }
  
        const state = map.data.getFeatureById(stateId);
  
        // update the existing row with the new data
        if (state) {
          state.setProperty("census_variable", censusVariable);
        }
      });*/
      // update and display the legend
      
      /*document.getElementById("census-min").textContent =
        censusMin.toLocaleString();
      document.getElementById("census-max").textContent =
        censusMax.toLocaleString();*/
    };
    xhr.open("GET", "localhost:3000/datos-chiapas");
    xhr.send();
  }
  
  /** Removes census data from each shape on the map and resets the UI. */
  function clearCensusData() {
    censusMin = Number.MAX_VALUE;
    censusMax = -Number.MAX_VALUE;
    map.data.forEach((row) => {
      row.setProperty("datos", undefined);
    });
    document.getElementById("data-box").style.display = "none";
    document.getElementById("data-caret").style.display = "none";
  }
  
  /**
   * Applies a gradient style based on the 'census_variable' column.
   * This is the callback passed to data.setStyle() and is called for each row in
   * the data set.  Check out the docs for Data.StylingFunction.
   *
   * @param {google.maps.Data.Feature} feature
   */
  function styleFeature(feature) {
    const low = [5, 69, 54]; // color of smallest datum
    const high = [151, 83, 34]; // color of largest datum
    // delta represents where the value sits between the min and max
    /*const delta =
      (feature.getProperty("census_variable") - censusMin) /
      (censusMax - censusMin);
    const color = [];
  
    for (let i = 0; i < 3; i++) {
      // calculate an integer color based on the delta
      color.push((high[i] - low[i]) * delta + low[i]);
    }*/
  
    // determine whether to show this shape or not
    let showRow = true;
  
    /*if (
      feature.getProperty("datos") == null ||
      isNaN(feature.getProperty("datos"))
    ) {
      showRow = false;
    }*/
  
    let outlineWeight = 0.5,
      zIndex = 1;
  
    if (feature.getProperty("state") === "hover") {
      outlineWeight = zIndex = 2;
    }
    return {
      strokeWeight: outlineWeight,
      strokeColor: "#fff",
      zIndex: zIndex,
      fillColor: "#000",
      //fillColor: "hsl(" + color[0] + "," + color[1] + "%," + color[2] + "%)",
      fillOpacity: 0.75,
      visible: showRow,
    };
  }
  
  /**
   * Responds to the mouse-in event on a map shape (state).
   *
   * @param {?google.maps.MapMouseEvent} e
   */
  function mouseInToRegion(e) {
    // set the hover state so the setStyle function can change the border
    e.feature.setProperty("state", "hover");
  
    const municipio =
      e.feature['l'];
    const data = municipios[municipio];
  
    console.log(data)
    console.log(e.feature)
  
    bsp6 = "Superficie con bosques y selvas primarios: "+ municipios[municipio]["bs_primarios6"] + "\n";
    bss6 = " Superficie con bosques y selvas secundarios: " + municipios[municipio]["bs_secundarios6"] + "\n";
    hf = "\nHectáreas forestales " + municipios[municipio]["hf"] + "\n";
    ce = "\nCarbono emitido " + municipios[municipio]["ce"] + "\n";
    rc = "\nRemución de carbono " + municipios[municipio]["rc"] + "\n";
    var string =   bsp6 +  bss6  + hf +  ce + rc  ;
    
    
    // update the label
    /*document.getElementById("data-label").textContent =
      e.feature.getProperty("NAME");*/
    //document.getElementById("data-value").textContent = string.toLocaleString();
    document.getElementById("mun").textContent = municipio.toLocaleString();
    document.getElementById("uno").textContent = bsp6.toLocaleString();
    document.getElementById("dos").textContent = bss6.toLocaleString();
    document.getElementById("tres").textContent = hf.toLocaleString();
    document.getElementById("cuatro").textContent = ce.toLocaleString();
    document.getElementById("cinco").textContent = rc.toLocaleString();
    //document.getElementById("bss6").textContent = "Superficie con bosques y selvas secundarios:" + bss6;
    document.getElementById("data-box").style.display = "block";
   
  }
  
  /**
   * Responds to the mouse-out event on a map shape (state).
   *
   */
  function mouseOutOfRegion(e) {
    // reset the hover state, returning the border to normal
    e.feature.setProperty("state", "normal");
  }
  
  window.initMap = initMap;
  
  