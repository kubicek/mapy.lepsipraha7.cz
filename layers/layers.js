var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: [new ol.layer.Tile({title: 'OSM', source: new ol.source.OSM()})]});
var lyr_Ortofotomapa1938 = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://mpp.praha.eu/arcgis/services/MAP/Ortofotomapa_archiv/MapServer/WMSServer",
                          params: {"LAYERS": "25", "TILED": "true"},
                        })),
                        title: "Ortofotomapa 1938"
                      });
var lyr_1884 = new ol.layer.Image({
                            opacity: 1,
                            title: "1884",
                            source: new ol.source.ImageStatic({
                               url: "./layers/1884.jpg",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageSize: [3156, 3046],
                                imageExtent: [1600825.237173, 6456564.757884, 1609438.502730, 6464877.814566]
                            })
                        });
var lyr_tovarnybubna = new ol.layer.Vector({
                source: new ol.source.GeoJSON({object: geojson_tovarnybubna}), 
                style: style_tovarnybubna,
                title: "tovarny_bubna"
            });

lyr_Ortofotomapa1938.setVisible(false);
lyr_1884.setVisible(false);
lyr_tovarnybubna.setVisible(true);
var layersList = [baseLayer,lyr_Ortofotomapa1938,lyr_1884,lyr_tovarnybubna];