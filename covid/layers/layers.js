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
var format_ChangePrices_1 = new ol.format.GeoJSON();
var features_ChangePrices_1 = format_ChangePrices_1.readFeatures(json_ChangePrices_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChangePrices_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChangePrices_1.addFeatures(features_ChangePrices_1);
var lyr_ChangePrices_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChangePrices_1, 
                style: style_ChangePrices_1,
                interactive: true,
    title: '%Change Prices<br />\
    <img src="styles/legend/ChangePrices_1_0.png" /> 15.3 - 16.3<br />\
    <img src="styles/legend/ChangePrices_1_1.png" /> 16.3 - 17.6<br />\
    <img src="styles/legend/ChangePrices_1_2.png" /> 17.6 - 18.6<br />\
    <img src="styles/legend/ChangePrices_1_3.png" /> 18.6 - 20.1<br />\
    <img src="styles/legend/ChangePrices_1_4.png" /> 20.1 - 21.9<br />'
        });
var format_CovidCaseRate_2 = new ol.format.GeoJSON();
var features_CovidCaseRate_2 = format_CovidCaseRate_2.readFeatures(json_CovidCaseRate_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CovidCaseRate_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CovidCaseRate_2.addFeatures(features_CovidCaseRate_2);
var lyr_CovidCaseRate_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CovidCaseRate_2, 
                style: style_CovidCaseRate_2,
                interactive: true,
    title: 'Covid Case Rate<br />\
    <img src="styles/legend/CovidCaseRate_2_0.png" /> 5076 - 5076<br />\
    <img src="styles/legend/CovidCaseRate_2_1.png" /> 5076 - 8611<br />\
    <img src="styles/legend/CovidCaseRate_2_2.png" /> 8611 - 11192<br />\
    <img src="styles/legend/CovidCaseRate_2_3.png" /> 11192 - 13104<br />\
    <img src="styles/legend/CovidCaseRate_2_4.png" /> 13104 - 14750<br />'
        });

lyr_EsriGraydark_0.setVisible(true);lyr_ChangePrices_1.setVisible(true);lyr_CovidCaseRate_2.setVisible(true);
var layersList = [lyr_EsriGraydark_0,lyr_ChangePrices_1,lyr_CovidCaseRate_2];
lyr_ChangePrices_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZIP5': 'ZIP5', 'COUNTYNBR': 'COUNTYNBR', 'NAME': 'NAME', 'SYMBOL': 'SYMBOL', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Case Rate': 'Case Rate', 'Population': 'Population', 'White': 'White', 'Black': 'Black', 'Asian': 'Asian', 'Hispanic': 'Hispanic', 'Dec. 19': 'Dec. 19', 'Jan.20': 'Jan.20', 'Feb.20': 'Feb.20', 'Mar.20': 'Mar.20', 'Dec.20': 'Dec.20', 'Jan.21': 'Jan.21', 'Feb.21': 'Feb.21', 'Mar.21': 'Mar.21', '%Change': '%Change', 'SLCo_Regio': 'SLCo_Regio', 'SLCo_SizeR': 'SLCo_SizeR', 'SLCo_12/31': 'SLCo_12/31', 'SLCo_1/31/': 'SLCo_1/31/', 'SLCo_2/29/': 'SLCo_2/29/', 'SLCo_3/31/': 'SLCo_3/31/', 'SLCo_4/30/': 'SLCo_4/30/', 'SLCo_5/31/': 'SLCo_5/31/', 'SLCo_6/30/': 'SLCo_6/30/', 'SLCo_7/31/': 'SLCo_7/31/', 'SLCo_8/31/': 'SLCo_8/31/', 'SLCo_9/30/': 'SLCo_9/30/', 'SLCo_10/31': 'SLCo_10/31', 'SLCo_11/30': 'SLCo_11/30', 'SLCo_12/_1': 'SLCo_12/_1', 'SLCo_1/3_1': 'SLCo_1/3_1', 'SLCo_2/28/': 'SLCo_2/28/', 'SLCo_3/3_1': 'SLCo_3/3_1', 'SLCo_ZIP_c': 'SLCo_ZIP_c', 'SLCo_Case_': 'SLCo_Case_', 'SLCo_Morta': 'SLCo_Morta', 'SLCo_Vax_c': 'SLCo_Vax_c', 'Zip.Pop_id': 'Zip.Pop_id', 'Zip.Pop_To': 'Zip.Pop_To', 'Zip.Pop_Wh': 'Zip.Pop_Wh', 'Zip.Pop_%': 'Zip.Pop_%', 'Zip.Pop_Bl': 'Zip.Pop_Bl', 'Zip.Pop__1': 'Zip.Pop__1', 'Zip.Pop_As': 'Zip.Pop_As', 'Zip.Pop__2': 'Zip.Pop__2', 'Zip.Pop_Hi': 'Zip.Pop_Hi', 'Zip.Pop__3': 'Zip.Pop__3', });
lyr_CovidCaseRate_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZIP5': 'ZIP5', 'COUNTYNBR': 'COUNTYNBR', 'NAME': 'NAME', 'SYMBOL': 'SYMBOL', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Case Rate': 'Case Rate', 'Population': 'Population', 'White': 'White', 'Black': 'Black', 'Asian': 'Asian', 'Hispanic': 'Hispanic', 'SLCo_Regio': 'SLCo_Regio', 'SLCo_SizeR': 'SLCo_SizeR', 'SLCo_12/31': 'SLCo_12/31', 'SLCo_1/31/': 'SLCo_1/31/', 'SLCo_2/29/': 'SLCo_2/29/', 'SLCo_3/31/': 'SLCo_3/31/', 'SLCo_4/30/': 'SLCo_4/30/', 'SLCo_5/31/': 'SLCo_5/31/', 'SLCo_6/30/': 'SLCo_6/30/', 'SLCo_7/31/': 'SLCo_7/31/', 'SLCo_8/31/': 'SLCo_8/31/', 'SLCo_9/30/': 'SLCo_9/30/', 'SLCo_10/31': 'SLCo_10/31', 'SLCo_11/30': 'SLCo_11/30', 'SLCo_12/_1': 'SLCo_12/_1', 'SLCo_1/3_1': 'SLCo_1/3_1', 'SLCo_2/28/': 'SLCo_2/28/', 'SLCo_3/3_1': 'SLCo_3/3_1', 'SLCo_ZIP_c': 'SLCo_ZIP_c', 'SLCo_Case_': 'SLCo_Case_', 'SLCo_Morta': 'SLCo_Morta', 'SLCo_Vax_c': 'SLCo_Vax_c', 'Zip.Pop_id': 'Zip.Pop_id', 'Zip.Pop_To': 'Zip.Pop_To', 'Zip.Pop_Wh': 'Zip.Pop_Wh', 'Zip.Pop_%': 'Zip.Pop_%', 'Zip.Pop_Bl': 'Zip.Pop_Bl', 'Zip.Pop__1': 'Zip.Pop__1', 'Zip.Pop_As': 'Zip.Pop_As', 'Zip.Pop__2': 'Zip.Pop__2', 'Zip.Pop_Hi': 'Zip.Pop_Hi', 'Zip.Pop__3': 'Zip.Pop__3', });
lyr_ChangePrices_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ZIP5': 'TextEdit', 'COUNTYNBR': 'TextEdit', 'NAME': 'TextEdit', 'SYMBOL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Case Rate': 'TextEdit', 'Population': 'TextEdit', 'White': 'TextEdit', 'Black': 'TextEdit', 'Asian': 'TextEdit', 'Hispanic': 'TextEdit', 'Dec. 19': 'TextEdit', 'Jan.20': 'TextEdit', 'Feb.20': 'TextEdit', 'Mar.20': 'TextEdit', 'Dec.20': 'TextEdit', 'Jan.21': 'TextEdit', 'Feb.21': 'TextEdit', 'Mar.21': 'TextEdit', '%Change': 'TextEdit', 'SLCo_Regio': 'TextEdit', 'SLCo_SizeR': 'TextEdit', 'SLCo_12/31': 'TextEdit', 'SLCo_1/31/': 'TextEdit', 'SLCo_2/29/': 'TextEdit', 'SLCo_3/31/': 'TextEdit', 'SLCo_4/30/': 'TextEdit', 'SLCo_5/31/': 'TextEdit', 'SLCo_6/30/': 'TextEdit', 'SLCo_7/31/': 'TextEdit', 'SLCo_8/31/': 'TextEdit', 'SLCo_9/30/': 'TextEdit', 'SLCo_10/31': 'TextEdit', 'SLCo_11/30': 'TextEdit', 'SLCo_12/_1': 'TextEdit', 'SLCo_1/3_1': 'TextEdit', 'SLCo_2/28/': 'TextEdit', 'SLCo_3/3_1': 'TextEdit', 'SLCo_ZIP_c': 'TextEdit', 'SLCo_Case_': 'TextEdit', 'SLCo_Morta': 'TextEdit', 'SLCo_Vax_c': 'TextEdit', 'Zip.Pop_id': 'TextEdit', 'Zip.Pop_To': 'TextEdit', 'Zip.Pop_Wh': 'TextEdit', 'Zip.Pop_%': 'TextEdit', 'Zip.Pop_Bl': 'TextEdit', 'Zip.Pop__1': 'TextEdit', 'Zip.Pop_As': 'TextEdit', 'Zip.Pop__2': 'TextEdit', 'Zip.Pop_Hi': 'TextEdit', 'Zip.Pop__3': 'TextEdit', });
lyr_CovidCaseRate_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'ZIP5': 'TextEdit', 'COUNTYNBR': 'TextEdit', 'NAME': 'TextEdit', 'SYMBOL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Case Rate': 'TextEdit', 'Population': 'TextEdit', 'White': 'TextEdit', 'Black': 'TextEdit', 'Asian': 'TextEdit', 'Hispanic': 'TextEdit', 'SLCo_Regio': 'TextEdit', 'SLCo_SizeR': 'TextEdit', 'SLCo_12/31': 'TextEdit', 'SLCo_1/31/': 'TextEdit', 'SLCo_2/29/': 'TextEdit', 'SLCo_3/31/': 'TextEdit', 'SLCo_4/30/': 'TextEdit', 'SLCo_5/31/': 'TextEdit', 'SLCo_6/30/': 'TextEdit', 'SLCo_7/31/': 'TextEdit', 'SLCo_8/31/': 'TextEdit', 'SLCo_9/30/': 'TextEdit', 'SLCo_10/31': 'TextEdit', 'SLCo_11/30': 'TextEdit', 'SLCo_12/_1': 'TextEdit', 'SLCo_1/3_1': 'TextEdit', 'SLCo_2/28/': 'TextEdit', 'SLCo_3/3_1': 'TextEdit', 'SLCo_ZIP_c': 'TextEdit', 'SLCo_Case_': 'TextEdit', 'SLCo_Morta': 'TextEdit', 'SLCo_Vax_c': 'TextEdit', 'Zip.Pop_id': 'TextEdit', 'Zip.Pop_To': 'TextEdit', 'Zip.Pop_Wh': 'TextEdit', 'Zip.Pop_%': 'TextEdit', 'Zip.Pop_Bl': 'TextEdit', 'Zip.Pop__1': 'TextEdit', 'Zip.Pop_As': 'TextEdit', 'Zip.Pop__2': 'TextEdit', 'Zip.Pop_Hi': 'TextEdit', 'Zip.Pop__3': 'TextEdit', });
lyr_ChangePrices_1.set('fieldLabels', {'OBJECTID': 'no label', 'ZIP5': 'no label', 'COUNTYNBR': 'no label', 'NAME': 'no label', 'SYMBOL': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Case Rate': 'no label', 'Population': 'no label', 'White': 'no label', 'Black': 'no label', 'Asian': 'no label', 'Hispanic': 'no label', 'Dec. 19': 'no label', 'Jan.20': 'no label', 'Feb.20': 'no label', 'Mar.20': 'no label', 'Dec.20': 'no label', 'Jan.21': 'no label', 'Feb.21': 'no label', 'Mar.21': 'inline label', '%Change': 'no label', 'SLCo_Regio': 'no label', 'SLCo_SizeR': 'no label', 'SLCo_12/31': 'no label', 'SLCo_1/31/': 'no label', 'SLCo_2/29/': 'no label', 'SLCo_3/31/': 'no label', 'SLCo_4/30/': 'no label', 'SLCo_5/31/': 'no label', 'SLCo_6/30/': 'no label', 'SLCo_7/31/': 'no label', 'SLCo_8/31/': 'no label', 'SLCo_9/30/': 'no label', 'SLCo_10/31': 'no label', 'SLCo_11/30': 'no label', 'SLCo_12/_1': 'no label', 'SLCo_1/3_1': 'no label', 'SLCo_2/28/': 'no label', 'SLCo_3/3_1': 'no label', 'SLCo_ZIP_c': 'no label', 'SLCo_Case_': 'no label', 'SLCo_Morta': 'no label', 'SLCo_Vax_c': 'no label', 'Zip.Pop_id': 'no label', 'Zip.Pop_To': 'no label', 'Zip.Pop_Wh': 'no label', 'Zip.Pop_%': 'no label', 'Zip.Pop_Bl': 'no label', 'Zip.Pop__1': 'no label', 'Zip.Pop_As': 'no label', 'Zip.Pop__2': 'no label', 'Zip.Pop_Hi': 'no label', 'Zip.Pop__3': 'no label', });
lyr_CovidCaseRate_2.set('fieldLabels', {'OBJECTID': 'no label', 'ZIP5': 'no label', 'COUNTYNBR': 'no label', 'NAME': 'no label', 'SYMBOL': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Case Rate': 'no label', 'Population': 'no label', 'White': 'no label', 'Black': 'no label', 'Asian': 'no label', 'Hispanic': 'no label', 'SLCo_Regio': 'no label', 'SLCo_SizeR': 'no label', 'SLCo_12/31': 'no label', 'SLCo_1/31/': 'no label', 'SLCo_2/29/': 'no label', 'SLCo_3/31/': 'no label', 'SLCo_4/30/': 'no label', 'SLCo_5/31/': 'no label', 'SLCo_6/30/': 'no label', 'SLCo_7/31/': 'no label', 'SLCo_8/31/': 'no label', 'SLCo_9/30/': 'no label', 'SLCo_10/31': 'no label', 'SLCo_11/30': 'no label', 'SLCo_12/_1': 'no label', 'SLCo_1/3_1': 'no label', 'SLCo_2/28/': 'no label', 'SLCo_3/3_1': 'no label', 'SLCo_ZIP_c': 'no label', 'SLCo_Case_': 'no label', 'SLCo_Morta': 'no label', 'SLCo_Vax_c': 'no label', 'Zip.Pop_id': 'no label', 'Zip.Pop_To': 'no label', 'Zip.Pop_Wh': 'no label', 'Zip.Pop_%': 'no label', 'Zip.Pop_Bl': 'no label', 'Zip.Pop__1': 'no label', 'Zip.Pop_As': 'no label', 'Zip.Pop__2': 'no label', 'Zip.Pop_Hi': 'no label', 'Zip.Pop__3': 'no label', });
lyr_CovidCaseRate_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});