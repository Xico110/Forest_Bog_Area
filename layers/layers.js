var wms_layers = [];

// 1. Define Photogrammetry Layer
var lyr_Photogrammetry = new ol.layer.Tile({
    title: 'Photogrammetry',
    visible: true,
    source: new ol.source.XYZ({
        url: 'tiles/{z}/{x}/{y}.jpg',
        attributions: 'Photogrammetry'
    })
});

// 2. Define Google Satellite Layer
var lyr_GoogleSatellite_0 = new ol.layer.Tile({
    'title': 'Google Satellite',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});

lyr_Photogrammetry.setVisible(true);
lyr_GoogleSatellite_0.setVisible(true);

// 3. Declare layersList LAST with both layers inside
var layersList = [lyr_GoogleSatellite_0, lyr_Photogrammetry];
