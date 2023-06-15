ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3035").setExtent([-670772.907048, 589653.001214, 8929857.870776, 6259824.198855]);
var wms_layers = [];


        var lyr_Backgroundmap_0 = new ol.layer.Tile({
            'title': 'Background map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_ERDFM_1 = new ol.format.GeoJSON();
var features_ERDFM_1 = format_ERDFM_1.readFeatures(json_ERDFM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3035'});
var jsonSource_ERDFM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ERDFM_1.addFeatures(features_ERDFM_1);
var lyr_ERDFM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ERDFM_1, 
                style: style_ERDFM_1,
                interactive: true,
    title: 'ERDF M€<br />\
    <img src="styles/legend/ERDFM_1_0.png" /> 0 or N/A<br />\
    <img src="styles/legend/ERDFM_1_1.png" /> 0.01 - 0.30<br />\
    <img src="styles/legend/ERDFM_1_2.png" /> 0.31 - 1.30<br />\
    <img src="styles/legend/ERDFM_1_3.png" /> 1.31 - 10.00<br />\
    <img src="styles/legend/ERDFM_1_4.png" /> 10.01 - 87.00<br />'
        });
var format_NOOFPARTNERS_2 = new ol.format.GeoJSON();
var features_NOOFPARTNERS_2 = format_NOOFPARTNERS_2.readFeatures(json_NOOFPARTNERS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3035'});
var jsonSource_NOOFPARTNERS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NOOFPARTNERS_2.addFeatures(features_NOOFPARTNERS_2);
var lyr_NOOFPARTNERS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NOOFPARTNERS_2, 
                style: style_NOOFPARTNERS_2,
                interactive: true,
    title: 'NO OF PARTNERS<br />\
    <img src="styles/legend/NOOFPARTNERS_2_0.png" /> 0 or N/A<br />\
    <img src="styles/legend/NOOFPARTNERS_2_1.png" /> 1 - 5<br />\
    <img src="styles/legend/NOOFPARTNERS_2_2.png" /> 6 - 15<br />\
    <img src="styles/legend/NOOFPARTNERS_2_3.png" /> 16 - 45<br />\
    <img src="styles/legend/NOOFPARTNERS_2_4.png" /> 46 - 490<br />'
        });
var format_NOOFPROJECTS_3 = new ol.format.GeoJSON();
var features_NOOFPROJECTS_3 = format_NOOFPROJECTS_3.readFeatures(json_NOOFPROJECTS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3035'});
var jsonSource_NOOFPROJECTS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NOOFPROJECTS_3.addFeatures(features_NOOFPROJECTS_3);
var lyr_NOOFPROJECTS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NOOFPROJECTS_3, 
                style: style_NOOFPROJECTS_3,
                interactive: true,
    title: 'NO OF PROJECTS<br />\
    <img src="styles/legend/NOOFPROJECTS_3_0.png" /> 0 or N/A<br />\
    <img src="styles/legend/NOOFPROJECTS_3_1.png" /> 1 - 5<br />\
    <img src="styles/legend/NOOFPROJECTS_3_2.png" /> 6 - 15<br />\
    <img src="styles/legend/NOOFPROJECTS_3_3.png" /> 16 - 35<br />\
    <img src="styles/legend/NOOFPROJECTS_3_4.png" /> 36 - 330<br />'
        });

lyr_Backgroundmap_0.setVisible(true);lyr_ERDFM_1.setVisible(false);lyr_NOOFPARTNERS_2.setVisible(false);lyr_NOOFPROJECTS_3.setVisible(true);
var layersList = [lyr_Backgroundmap_0,lyr_ERDFM_1,lyr_NOOFPARTNERS_2,lyr_NOOFPROJECTS_3];
lyr_ERDFM_1.set('fieldAliases', {'NUTS_ID': 'NUTS_ID', 'LEVL_CODE': 'LEVL_CODE', 'CNTR_CODE': 'Country', 'NAME_LATN': 'Region name', 'NUTS_NAME': 'NUTS_NAME', 'FID': 'FID', 'keep_No_of_projects': 'No of projects', 'keep_No_of_partners': 'No of partners', 'keep_Total_budgets_MEUR': 'Total project budgets (M€)', 'keep_ERDF_MEUR': 'ERDF total (M€)', });
lyr_NOOFPARTNERS_2.set('fieldAliases', {'NUTS_ID': 'NUTS_ID', 'LEVL_CODE': 'LEVL_CODE', 'CNTR_CODE': 'Country', 'NAME_LATN': 'Region name', 'NUTS_NAME': 'NUTS_NAME', 'FID': 'FID', 'keep_No_of_projects': 'No of projects', 'keep_No_of_partners': 'No of partners', 'keep_Total_budgets_MEUR': 'Total project budgets (M€)', 'keep_ERDF_MEUR': 'ERDF total (M€)', });
lyr_NOOFPROJECTS_3.set('fieldAliases', {'NUTS_ID': 'NUTS_ID', 'LEVL_CODE': 'LEVL_CODE', 'CNTR_CODE': 'Country', 'NAME_LATN': 'Region name', 'NUTS_NAME': 'NUTS_NAME', 'FID': 'FID', 'keep_No_of_projects': 'No of projects', 'keep_No_of_partners': 'No of partners', 'keep_Total_budgets_MEUR': 'Total project budgets (M€)', 'keep_ERDF_MEUR': 'ERDF total (M€)', });
lyr_ERDFM_1.set('fieldImages', {'NUTS_ID': 'Hidden', 'LEVL_CODE': 'Hidden', 'CNTR_CODE': 'TextEdit', 'NAME_LATN': 'TextEdit', 'NUTS_NAME': 'Hidden', 'FID': 'Hidden', 'keep_No_of_projects': 'Range', 'keep_No_of_partners': 'Range', 'keep_Total_budgets_MEUR': 'TextEdit', 'keep_ERDF_MEUR': 'TextEdit', });
lyr_NOOFPARTNERS_2.set('fieldImages', {'NUTS_ID': 'Hidden', 'LEVL_CODE': 'Hidden', 'CNTR_CODE': 'TextEdit', 'NAME_LATN': 'TextEdit', 'NUTS_NAME': 'Hidden', 'FID': 'Hidden', 'keep_No_of_projects': 'Range', 'keep_No_of_partners': 'Range', 'keep_Total_budgets_MEUR': 'TextEdit', 'keep_ERDF_MEUR': 'TextEdit', });
lyr_NOOFPROJECTS_3.set('fieldImages', {'NUTS_ID': 'Hidden', 'LEVL_CODE': 'Hidden', 'CNTR_CODE': 'TextEdit', 'NAME_LATN': 'TextEdit', 'NUTS_NAME': 'Hidden', 'FID': 'Hidden', 'keep_No_of_projects': 'Range', 'keep_No_of_partners': 'Range', 'keep_Total_budgets_MEUR': 'TextEdit', 'keep_ERDF_MEUR': 'TextEdit', });
lyr_ERDFM_1.set('fieldLabels', {'CNTR_CODE': 'inline label', 'NAME_LATN': 'inline label', 'keep_No_of_projects': 'inline label', 'keep_No_of_partners': 'inline label', 'keep_Total_budgets_MEUR': 'inline label', 'keep_ERDF_MEUR': 'inline label', });
lyr_NOOFPARTNERS_2.set('fieldLabels', {'CNTR_CODE': 'inline label', 'NAME_LATN': 'inline label', 'keep_No_of_projects': 'inline label', 'keep_No_of_partners': 'inline label', 'keep_Total_budgets_MEUR': 'inline label', 'keep_ERDF_MEUR': 'inline label', });
lyr_NOOFPROJECTS_3.set('fieldLabels', {'CNTR_CODE': 'inline label', 'NAME_LATN': 'inline label', 'keep_No_of_projects': 'inline label', 'keep_No_of_partners': 'inline label', 'keep_Total_budgets_MEUR': 'inline label', 'keep_ERDF_MEUR': 'inline label', });
lyr_NOOFPROJECTS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});