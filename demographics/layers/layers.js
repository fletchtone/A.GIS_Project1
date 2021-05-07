var wms_layers = [];


        var lyr_EsriGraydark_0 = new ol.layer.Tile({
            'title': 'Esri Gray (dark)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_WhitePopulation_1 = new ol.format.GeoJSON();
var features_WhitePopulation_1 = format_WhitePopulation_1.readFeatures(json_WhitePopulation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WhitePopulation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WhitePopulation_1.addFeatures(features_WhitePopulation_1);
var lyr_WhitePopulation_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WhitePopulation_1, 
                style: style_WhitePopulation_1,
                interactive: true,
    title: 'White Population<br />\
    <img src="styles/legend/WhitePopulation_1_0.png" /> 123 - 10682<br />\
    <img src="styles/legend/WhitePopulation_1_1.png" /> 10682 - 22714<br />\
    <img src="styles/legend/WhitePopulation_1_2.png" /> 22714 - 31873<br />\
    <img src="styles/legend/WhitePopulation_1_3.png" /> 31873 - 48296<br />\
    <img src="styles/legend/WhitePopulation_1_4.png" /> 48296 - 63096<br />'
        });
var format_BlackPopulation_2 = new ol.format.GeoJSON();
var features_BlackPopulation_2 = format_BlackPopulation_2.readFeatures(json_BlackPopulation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlackPopulation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlackPopulation_2.addFeatures(features_BlackPopulation_2);
var lyr_BlackPopulation_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BlackPopulation_2, 
                style: style_BlackPopulation_2,
                interactive: true,
    title: 'Black Population<br />\
    <img src="styles/legend/BlackPopulation_2_0.png" /> 0 - 198<br />\
    <img src="styles/legend/BlackPopulation_2_1.png" /> 198 - 336<br />\
    <img src="styles/legend/BlackPopulation_2_2.png" /> 336 - 573<br />\
    <img src="styles/legend/BlackPopulation_2_3.png" /> 573 - 956<br />\
    <img src="styles/legend/BlackPopulation_2_4.png" /> 956 - 1953<br />'
        });
var format_AsianPopulation_3 = new ol.format.GeoJSON();
var features_AsianPopulation_3 = format_AsianPopulation_3.readFeatures(json_AsianPopulation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AsianPopulation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AsianPopulation_3.addFeatures(features_AsianPopulation_3);
var lyr_AsianPopulation_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AsianPopulation_3, 
                style: style_AsianPopulation_3,
                interactive: true,
    title: 'Asian Population<br />\
    <img src="styles/legend/AsianPopulation_3_0.png" /> 0 - 645<br />\
    <img src="styles/legend/AsianPopulation_3_1.png" /> 645 - 1158<br />\
    <img src="styles/legend/AsianPopulation_3_2.png" /> 1158 - 1697<br />\
    <img src="styles/legend/AsianPopulation_3_3.png" /> 1697 - 3100<br />\
    <img src="styles/legend/AsianPopulation_3_4.png" /> 3100 - 3842<br />'
        });
var format_HispanicPopulation_4 = new ol.format.GeoJSON();
var features_HispanicPopulation_4 = format_HispanicPopulation_4.readFeatures(json_HispanicPopulation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HispanicPopulation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HispanicPopulation_4.addFeatures(features_HispanicPopulation_4);
var lyr_HispanicPopulation_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HispanicPopulation_4, 
                style: style_HispanicPopulation_4,
                interactive: true,
    title: 'Hispanic Population<br />\
    <img src="styles/legend/HispanicPopulation_4_0.png" /> 13 - 2410<br />\
    <img src="styles/legend/HispanicPopulation_4_1.png" /> 2410 - 5178<br />\
    <img src="styles/legend/HispanicPopulation_4_2.png" /> 5178 - 9320<br />\
    <img src="styles/legend/HispanicPopulation_4_3.png" /> 9320 - 14906<br />\
    <img src="styles/legend/HispanicPopulation_4_4.png" /> 14906 - 22984<br />'
        });

lyr_EsriGraydark_0.setVisible(true);lyr_WhitePopulation_1.setVisible(true);lyr_BlackPopulation_2.setVisible(true);lyr_AsianPopulation_3.setVisible(true);lyr_HispanicPopulation_4.setVisible(true);
var layersList = [lyr_EsriGraydark_0,lyr_WhitePopulation_1,lyr_BlackPopulation_2,lyr_AsianPopulation_3,lyr_HispanicPopulation_4];
lyr_WhitePopulation_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZIP5': 'ZIP5', 'COUNTYNBR': 'COUNTYNBR', 'NAME': 'NAME', 'SYMBOL': 'SYMBOL', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Case Rate': 'Case Rate', 'Population': 'Population', 'White': 'White', 'Black': 'Black', 'Asian': 'Asian', 'Hispanic': 'Hispanic', 'SLCo_Regio': 'SLCo_Regio', 'SLCo_SizeR': 'SLCo_SizeR', 'SLCo_12/31': 'SLCo_12/31', 'SLCo_1/31/': 'SLCo_1/31/', 'SLCo_2/29/': 'SLCo_2/29/', 'SLCo_3/31/': 'SLCo_3/31/', 'SLCo_4/30/': 'SLCo_4/30/', 'SLCo_5/31/': 'SLCo_5/31/', 'SLCo_6/30/': 'SLCo_6/30/', 'SLCo_7/31/': 'SLCo_7/31/', 'SLCo_8/31/': 'SLCo_8/31/', 'SLCo_9/30/': 'SLCo_9/30/', 'SLCo_10/31': 'SLCo_10/31', 'SLCo_11/30': 'SLCo_11/30', 'SLCo_12/_1': 'SLCo_12/_1', 'SLCo_1/3_1': 'SLCo_1/3_1', 'SLCo_2/28/': 'SLCo_2/28/', 'SLCo_3/3_1': 'SLCo_3/3_1', 'SLCo_ZIP_c': 'SLCo_ZIP_c', 'SLCo_Case_': 'SLCo_Case_', 'SLCo_Morta': 'SLCo_Morta', 'SLCo_Vax_c': 'SLCo_Vax_c', 'Zip.Pop_id': 'Zip.Pop_id', 'Zip.Pop_To': 'Zip.Pop_To', 'Zip.Pop_Wh': 'Zip.Pop_Wh', 'Zip.Pop_%': 'Zip.Pop_%', 'Zip.Pop_Bl': 'Zip.Pop_Bl', 'Zip.Pop__1': 'Zip.Pop__1', 'Zip.Pop_As': 'Zip.Pop_As', 'Zip.Pop__2': 'Zip.Pop__2', 'Zip.Pop_Hi': 'Zip.Pop_Hi', 'Zip.Pop__3': 'Zip.Pop__3', });
lyr_BlackPopulation_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZIP5': 'ZIP5', 'COUNTYNBR': 'COUNTYNBR', 'NAME': 'NAME', 'SYMBOL': 'SYMBOL', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Case Rate': 'Case Rate', 'Population': 'Population', 'White': 'White', 'Black': 'Black', 'Asian': 'Asian', 'Hispanic': 'Hispanic', 'SLCo_Regio': 'SLCo_Regio', 'SLCo_SizeR': 'SLCo_SizeR', 'SLCo_12/31': 'SLCo_12/31', 'SLCo_1/31/': 'SLCo_1/31/', 'SLCo_2/29/': 'SLCo_2/29/', 'SLCo_3/31/': 'SLCo_3/31/', 'SLCo_4/30/': 'SLCo_4/30/', 'SLCo_5/31/': 'SLCo_5/31/', 'SLCo_6/30/': 'SLCo_6/30/', 'SLCo_7/31/': 'SLCo_7/31/', 'SLCo_8/31/': 'SLCo_8/31/', 'SLCo_9/30/': 'SLCo_9/30/', 'SLCo_10/31': 'SLCo_10/31', 'SLCo_11/30': 'SLCo_11/30', 'SLCo_12/_1': 'SLCo_12/_1', 'SLCo_1/3_1': 'SLCo_1/3_1', 'SLCo_2/28/': 'SLCo_2/28/', 'SLCo_3/3_1': 'SLCo_3/3_1', 'SLCo_ZIP_c': 'SLCo_ZIP_c', 'SLCo_Case_': 'SLCo_Case_', 'SLCo_Morta': 'SLCo_Morta', 'SLCo_Vax_c': 'SLCo_Vax_c', 'Zip.Pop_id': 'Zip.Pop_id', 'Zip.Pop_To': 'Zip.Pop_To', 'Zip.Pop_Wh': 'Zip.Pop_Wh', 'Zip.Pop_%': 'Zip.Pop_%', 'Zip.Pop_Bl': 'Zip.Pop_Bl', 'Zip.Pop__1': 'Zip.Pop__1', 'Zip.Pop_As': 'Zip.Pop_As', 'Zip.Pop__2': 'Zip.Pop__2', 'Zip.Pop_Hi': 'Zip.Pop_Hi', 'Zip.Pop__3': 'Zip.Pop__3', });
lyr_AsianPopulation_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZIP5': 'ZIP5', 'COUNTYNBR': 'COUNTYNBR', 'NAME': 'NAME', 'SYMBOL': 'SYMBOL', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Case Rate': 'Case Rate', 'Population': 'Population', 'White': 'White', 'Black': 'Black', 'Asian': 'Asian', 'Hispanic': 'Hispanic', 'SLCo_Regio': 'SLCo_Regio', 'SLCo_SizeR': 'SLCo_SizeR', 'SLCo_12/31': 'SLCo_12/31', 'SLCo_1/31/': 'SLCo_1/31/', 'SLCo_2/29/': 'SLCo_2/29/', 'SLCo_3/31/': 'SLCo_3/31/', 'SLCo_4/30/': 'SLCo_4/30/', 'SLCo_5/31/': 'SLCo_5/31/', 'SLCo_6/30/': 'SLCo_6/30/', 'SLCo_7/31/': 'SLCo_7/31/', 'SLCo_8/31/': 'SLCo_8/31/', 'SLCo_9/30/': 'SLCo_9/30/', 'SLCo_10/31': 'SLCo_10/31', 'SLCo_11/30': 'SLCo_11/30', 'SLCo_12/_1': 'SLCo_12/_1', 'SLCo_1/3_1': 'SLCo_1/3_1', 'SLCo_2/28/': 'SLCo_2/28/', 'SLCo_3/3_1': 'SLCo_3/3_1', 'SLCo_ZIP_c': 'SLCo_ZIP_c', 'SLCo_Case_': 'SLCo_Case_', 'SLCo_Morta': 'SLCo_Morta', 'SLCo_Vax_c': 'SLCo_Vax_c', 'Zip.Pop_id': 'Zip.Pop_id', 'Zip.Pop_To': 'Zip.Pop_To', 'Zip.Pop_Wh': 'Zip.Pop_Wh', 'Zip.Pop_%': 'Zip.Pop_%', 'Zip.Pop_Bl': 'Zip.Pop_Bl', 'Zip.Pop__1': 'Zip.Pop__1', 'Zip.Pop_As': 'Zip.Pop_As', 'Zip.Pop__2': 'Zip.Pop__2', 'Zip.Pop_Hi': 'Zip.Pop_Hi', 'Zip.Pop__3': 'Zip.Pop__3', });
lyr_HispanicPopulation_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZIP5': 'ZIP5', 'COUNTYNBR': 'COUNTYNBR', 'NAME': 'NAME', 'SYMBOL': 'SYMBOL', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Case Rate': 'Case Rate', 'Population': 'Population', 'White': 'White', 'Black': 'Black', 'Asian': 'Asian', 'Hispanic': 'Hispanic', 'SLCo_Regio': 'SLCo_Regio', 'SLCo_SizeR': 'SLCo_SizeR', 'SLCo_12/31': 'SLCo_12/31', 'SLCo_1/31/': 'SLCo_1/31/', 'SLCo_2/29/': 'SLCo_2/29/', 'SLCo_3/31/': 'SLCo_3/31/', 'SLCo_4/30/': 'SLCo_4/30/', 'SLCo_5/31/': 'SLCo_5/31/', 'SLCo_6/30/': 'SLCo_6/30/', 'SLCo_7/31/': 'SLCo_7/31/', 'SLCo_8/31/': 'SLCo_8/31/', 'SLCo_9/30/': 'SLCo_9/30/', 'SLCo_10/31': 'SLCo_10/31', 'SLCo_11/30': 'SLCo_11/30', 'SLCo_12/_1': 'SLCo_12/_1', 'SLCo_1/3_1': 'SLCo_1/3_1', 'SLCo_2/28/': 'SLCo_2/28/', 'SLCo_3/3_1': 'SLCo_3/3_1', 'SLCo_ZIP_c': 'SLCo_ZIP_c', 'SLCo_Case_': 'SLCo_Case_', 'SLCo_Morta': 'SLCo_Morta', 'SLCo_Vax_c': 'SLCo_Vax_c', 'Zip.Pop_id': 'Zip.Pop_id', 'Zip.Pop_To': 'Zip.Pop_To', 'Zip.Pop_Wh': 'Zip.Pop_Wh', 'Zip.Pop_%': 'Zip.Pop_%', 'Zip.Pop_Bl': 'Zip.Pop_Bl', 'Zip.Pop__1': 'Zip.Pop__1', 'Zip.Pop_As': 'Zip.Pop_As', 'Zip.Pop__2': 'Zip.Pop__2', 'Zip.Pop_Hi': 'Zip.Pop_Hi', 'Zip.Pop__3': 'Zip.Pop__3', });
lyr_WhitePopulation_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ZIP5': 'TextEdit', 'COUNTYNBR': 'TextEdit', 'NAME': 'TextEdit', 'SYMBOL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Case Rate': 'TextEdit', 'Population': 'TextEdit', 'White': 'TextEdit', 'Black': 'TextEdit', 'Asian': 'TextEdit', 'Hispanic': 'TextEdit', 'SLCo_Regio': 'TextEdit', 'SLCo_SizeR': 'TextEdit', 'SLCo_12/31': 'TextEdit', 'SLCo_1/31/': 'TextEdit', 'SLCo_2/29/': 'TextEdit', 'SLCo_3/31/': 'TextEdit', 'SLCo_4/30/': 'TextEdit', 'SLCo_5/31/': 'TextEdit', 'SLCo_6/30/': 'TextEdit', 'SLCo_7/31/': 'TextEdit', 'SLCo_8/31/': 'TextEdit', 'SLCo_9/30/': 'TextEdit', 'SLCo_10/31': 'TextEdit', 'SLCo_11/30': 'TextEdit', 'SLCo_12/_1': 'TextEdit', 'SLCo_1/3_1': 'TextEdit', 'SLCo_2/28/': 'TextEdit', 'SLCo_3/3_1': 'TextEdit', 'SLCo_ZIP_c': 'TextEdit', 'SLCo_Case_': 'TextEdit', 'SLCo_Morta': 'TextEdit', 'SLCo_Vax_c': 'TextEdit', 'Zip.Pop_id': 'TextEdit', 'Zip.Pop_To': 'TextEdit', 'Zip.Pop_Wh': 'TextEdit', 'Zip.Pop_%': 'TextEdit', 'Zip.Pop_Bl': 'TextEdit', 'Zip.Pop__1': 'TextEdit', 'Zip.Pop_As': 'TextEdit', 'Zip.Pop__2': 'TextEdit', 'Zip.Pop_Hi': 'TextEdit', 'Zip.Pop__3': 'TextEdit', });
lyr_BlackPopulation_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'ZIP5': 'TextEdit', 'COUNTYNBR': 'TextEdit', 'NAME': 'TextEdit', 'SYMBOL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Case Rate': 'TextEdit', 'Population': 'TextEdit', 'White': 'TextEdit', 'Black': 'TextEdit', 'Asian': 'TextEdit', 'Hispanic': 'TextEdit', 'SLCo_Regio': 'TextEdit', 'SLCo_SizeR': 'TextEdit', 'SLCo_12/31': 'TextEdit', 'SLCo_1/31/': 'TextEdit', 'SLCo_2/29/': 'TextEdit', 'SLCo_3/31/': 'TextEdit', 'SLCo_4/30/': 'TextEdit', 'SLCo_5/31/': 'TextEdit', 'SLCo_6/30/': 'TextEdit', 'SLCo_7/31/': 'TextEdit', 'SLCo_8/31/': 'TextEdit', 'SLCo_9/30/': 'TextEdit', 'SLCo_10/31': 'TextEdit', 'SLCo_11/30': 'TextEdit', 'SLCo_12/_1': 'TextEdit', 'SLCo_1/3_1': 'TextEdit', 'SLCo_2/28/': 'TextEdit', 'SLCo_3/3_1': 'TextEdit', 'SLCo_ZIP_c': 'TextEdit', 'SLCo_Case_': 'TextEdit', 'SLCo_Morta': 'TextEdit', 'SLCo_Vax_c': 'TextEdit', 'Zip.Pop_id': 'TextEdit', 'Zip.Pop_To': 'TextEdit', 'Zip.Pop_Wh': 'TextEdit', 'Zip.Pop_%': 'TextEdit', 'Zip.Pop_Bl': 'TextEdit', 'Zip.Pop__1': 'TextEdit', 'Zip.Pop_As': 'TextEdit', 'Zip.Pop__2': 'TextEdit', 'Zip.Pop_Hi': 'TextEdit', 'Zip.Pop__3': 'TextEdit', });
lyr_AsianPopulation_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ZIP5': 'TextEdit', 'COUNTYNBR': 'TextEdit', 'NAME': 'TextEdit', 'SYMBOL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Case Rate': 'TextEdit', 'Population': 'TextEdit', 'White': 'TextEdit', 'Black': 'TextEdit', 'Asian': 'TextEdit', 'Hispanic': 'TextEdit', 'SLCo_Regio': 'TextEdit', 'SLCo_SizeR': 'TextEdit', 'SLCo_12/31': 'TextEdit', 'SLCo_1/31/': 'TextEdit', 'SLCo_2/29/': 'TextEdit', 'SLCo_3/31/': 'TextEdit', 'SLCo_4/30/': 'TextEdit', 'SLCo_5/31/': 'TextEdit', 'SLCo_6/30/': 'TextEdit', 'SLCo_7/31/': 'TextEdit', 'SLCo_8/31/': 'TextEdit', 'SLCo_9/30/': 'TextEdit', 'SLCo_10/31': 'TextEdit', 'SLCo_11/30': 'TextEdit', 'SLCo_12/_1': 'TextEdit', 'SLCo_1/3_1': 'TextEdit', 'SLCo_2/28/': 'TextEdit', 'SLCo_3/3_1': 'TextEdit', 'SLCo_ZIP_c': 'TextEdit', 'SLCo_Case_': 'TextEdit', 'SLCo_Morta': 'TextEdit', 'SLCo_Vax_c': 'TextEdit', 'Zip.Pop_id': 'TextEdit', 'Zip.Pop_To': 'TextEdit', 'Zip.Pop_Wh': 'TextEdit', 'Zip.Pop_%': 'TextEdit', 'Zip.Pop_Bl': 'TextEdit', 'Zip.Pop__1': 'TextEdit', 'Zip.Pop_As': 'TextEdit', 'Zip.Pop__2': 'TextEdit', 'Zip.Pop_Hi': 'TextEdit', 'Zip.Pop__3': 'TextEdit', });
lyr_HispanicPopulation_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'ZIP5': 'TextEdit', 'COUNTYNBR': 'TextEdit', 'NAME': 'TextEdit', 'SYMBOL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Case Rate': 'TextEdit', 'Population': 'TextEdit', 'White': 'TextEdit', 'Black': 'TextEdit', 'Asian': 'TextEdit', 'Hispanic': 'TextEdit', 'SLCo_Regio': 'TextEdit', 'SLCo_SizeR': 'TextEdit', 'SLCo_12/31': 'TextEdit', 'SLCo_1/31/': 'TextEdit', 'SLCo_2/29/': 'TextEdit', 'SLCo_3/31/': 'TextEdit', 'SLCo_4/30/': 'TextEdit', 'SLCo_5/31/': 'TextEdit', 'SLCo_6/30/': 'TextEdit', 'SLCo_7/31/': 'TextEdit', 'SLCo_8/31/': 'TextEdit', 'SLCo_9/30/': 'TextEdit', 'SLCo_10/31': 'TextEdit', 'SLCo_11/30': 'TextEdit', 'SLCo_12/_1': 'TextEdit', 'SLCo_1/3_1': 'TextEdit', 'SLCo_2/28/': 'TextEdit', 'SLCo_3/3_1': 'TextEdit', 'SLCo_ZIP_c': 'TextEdit', 'SLCo_Case_': 'TextEdit', 'SLCo_Morta': 'TextEdit', 'SLCo_Vax_c': 'TextEdit', 'Zip.Pop_id': 'TextEdit', 'Zip.Pop_To': 'TextEdit', 'Zip.Pop_Wh': 'TextEdit', 'Zip.Pop_%': 'TextEdit', 'Zip.Pop_Bl': 'TextEdit', 'Zip.Pop__1': 'TextEdit', 'Zip.Pop_As': 'TextEdit', 'Zip.Pop__2': 'TextEdit', 'Zip.Pop_Hi': 'TextEdit', 'Zip.Pop__3': 'TextEdit', });
lyr_WhitePopulation_1.set('fieldLabels', {'OBJECTID': 'no label', 'ZIP5': 'no label', 'COUNTYNBR': 'no label', 'NAME': 'no label', 'SYMBOL': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Case Rate': 'no label', 'Population': 'no label', 'White': 'no label', 'Black': 'no label', 'Asian': 'no label', 'Hispanic': 'no label', 'SLCo_Regio': 'no label', 'SLCo_SizeR': 'no label', 'SLCo_12/31': 'no label', 'SLCo_1/31/': 'no label', 'SLCo_2/29/': 'no label', 'SLCo_3/31/': 'no label', 'SLCo_4/30/': 'no label', 'SLCo_5/31/': 'no label', 'SLCo_6/30/': 'no label', 'SLCo_7/31/': 'no label', 'SLCo_8/31/': 'no label', 'SLCo_9/30/': 'no label', 'SLCo_10/31': 'no label', 'SLCo_11/30': 'no label', 'SLCo_12/_1': 'no label', 'SLCo_1/3_1': 'no label', 'SLCo_2/28/': 'no label', 'SLCo_3/3_1': 'no label', 'SLCo_ZIP_c': 'no label', 'SLCo_Case_': 'no label', 'SLCo_Morta': 'no label', 'SLCo_Vax_c': 'no label', 'Zip.Pop_id': 'no label', 'Zip.Pop_To': 'no label', 'Zip.Pop_Wh': 'no label', 'Zip.Pop_%': 'no label', 'Zip.Pop_Bl': 'no label', 'Zip.Pop__1': 'no label', 'Zip.Pop_As': 'no label', 'Zip.Pop__2': 'no label', 'Zip.Pop_Hi': 'no label', 'Zip.Pop__3': 'no label', });
lyr_BlackPopulation_2.set('fieldLabels', {'OBJECTID': 'no label', 'ZIP5': 'no label', 'COUNTYNBR': 'no label', 'NAME': 'no label', 'SYMBOL': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Case Rate': 'no label', 'Population': 'no label', 'White': 'no label', 'Black': 'no label', 'Asian': 'no label', 'Hispanic': 'no label', 'SLCo_Regio': 'no label', 'SLCo_SizeR': 'no label', 'SLCo_12/31': 'no label', 'SLCo_1/31/': 'no label', 'SLCo_2/29/': 'no label', 'SLCo_3/31/': 'no label', 'SLCo_4/30/': 'no label', 'SLCo_5/31/': 'no label', 'SLCo_6/30/': 'no label', 'SLCo_7/31/': 'no label', 'SLCo_8/31/': 'no label', 'SLCo_9/30/': 'no label', 'SLCo_10/31': 'no label', 'SLCo_11/30': 'no label', 'SLCo_12/_1': 'no label', 'SLCo_1/3_1': 'no label', 'SLCo_2/28/': 'no label', 'SLCo_3/3_1': 'no label', 'SLCo_ZIP_c': 'no label', 'SLCo_Case_': 'no label', 'SLCo_Morta': 'no label', 'SLCo_Vax_c': 'no label', 'Zip.Pop_id': 'no label', 'Zip.Pop_To': 'no label', 'Zip.Pop_Wh': 'no label', 'Zip.Pop_%': 'no label', 'Zip.Pop_Bl': 'no label', 'Zip.Pop__1': 'no label', 'Zip.Pop_As': 'no label', 'Zip.Pop__2': 'no label', 'Zip.Pop_Hi': 'no label', 'Zip.Pop__3': 'no label', });
lyr_AsianPopulation_3.set('fieldLabels', {'OBJECTID': 'no label', 'ZIP5': 'no label', 'COUNTYNBR': 'no label', 'NAME': 'no label', 'SYMBOL': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Case Rate': 'no label', 'Population': 'no label', 'White': 'no label', 'Black': 'no label', 'Asian': 'no label', 'Hispanic': 'no label', 'SLCo_Regio': 'no label', 'SLCo_SizeR': 'no label', 'SLCo_12/31': 'no label', 'SLCo_1/31/': 'no label', 'SLCo_2/29/': 'no label', 'SLCo_3/31/': 'no label', 'SLCo_4/30/': 'no label', 'SLCo_5/31/': 'no label', 'SLCo_6/30/': 'no label', 'SLCo_7/31/': 'no label', 'SLCo_8/31/': 'no label', 'SLCo_9/30/': 'no label', 'SLCo_10/31': 'no label', 'SLCo_11/30': 'no label', 'SLCo_12/_1': 'no label', 'SLCo_1/3_1': 'no label', 'SLCo_2/28/': 'no label', 'SLCo_3/3_1': 'no label', 'SLCo_ZIP_c': 'no label', 'SLCo_Case_': 'no label', 'SLCo_Morta': 'no label', 'SLCo_Vax_c': 'no label', 'Zip.Pop_id': 'no label', 'Zip.Pop_To': 'no label', 'Zip.Pop_Wh': 'no label', 'Zip.Pop_%': 'no label', 'Zip.Pop_Bl': 'no label', 'Zip.Pop__1': 'no label', 'Zip.Pop_As': 'no label', 'Zip.Pop__2': 'no label', 'Zip.Pop_Hi': 'no label', 'Zip.Pop__3': 'no label', });
lyr_HispanicPopulation_4.set('fieldLabels', {'OBJECTID': 'no label', 'ZIP5': 'no label', 'COUNTYNBR': 'no label', 'NAME': 'no label', 'SYMBOL': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Case Rate': 'no label', 'Population': 'no label', 'White': 'no label', 'Black': 'no label', 'Asian': 'no label', 'Hispanic': 'no label', 'SLCo_Regio': 'no label', 'SLCo_SizeR': 'no label', 'SLCo_12/31': 'no label', 'SLCo_1/31/': 'no label', 'SLCo_2/29/': 'no label', 'SLCo_3/31/': 'no label', 'SLCo_4/30/': 'no label', 'SLCo_5/31/': 'no label', 'SLCo_6/30/': 'no label', 'SLCo_7/31/': 'no label', 'SLCo_8/31/': 'no label', 'SLCo_9/30/': 'no label', 'SLCo_10/31': 'no label', 'SLCo_11/30': 'no label', 'SLCo_12/_1': 'no label', 'SLCo_1/3_1': 'no label', 'SLCo_2/28/': 'no label', 'SLCo_3/3_1': 'no label', 'SLCo_ZIP_c': 'no label', 'SLCo_Case_': 'no label', 'SLCo_Morta': 'no label', 'SLCo_Vax_c': 'no label', 'Zip.Pop_id': 'no label', 'Zip.Pop_To': 'no label', 'Zip.Pop_Wh': 'no label', 'Zip.Pop_%': 'no label', 'Zip.Pop_Bl': 'no label', 'Zip.Pop__1': 'no label', 'Zip.Pop_As': 'no label', 'Zip.Pop__2': 'no label', 'Zip.Pop_Hi': 'no label', 'Zip.Pop__3': 'no label', });
lyr_HispanicPopulation_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});