var size = 0;
var placement = 'point';

var style_ERDFM_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("keep_ERDF_MEUR");
    var labelText = "";
    size = 0;
    var labelFont = "18.2px \'Karla SemiBold\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.8;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("keep_ERDF_MEUR") !== null && resolution > 0 && resolution < 1960) {
        labelText = String(feature.get("keep_ERDF_MEUR"));
    }
    if (value >= 0.000000 && value <= 0.005000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(172,172,172,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(252,255,229,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.005000 && value <= 0.310000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(172,172,172,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(248,237,149,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.310000 && value <= 1.310000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(172,172,172,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(233,215,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.310000 && value <= 10.010000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(172,172,172,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(218,182,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10.010000 && value <= 87.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(172,172,172,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(169,134,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
