var chart = am4core.create("globediv", am4maps.MapChart);
chart.geodata = am4geodata_worldLow;
chart.projection = new am4maps.projections.Orthographic();
chart.deltaLatitude = -30;
chart.panBehavior = "rotateLongLat";
chart.marginTop = 20;
chart.marginBottom = 20;

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;
polygonSeries.north = 90;
polygonSeries.south = -90;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#d7e7ce");
polygonTemplate.stroke = am4core.color("#aaa");
polygonTemplate.strokeWidth = 1;

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");

var grid = chart.series.push(new am4maps.GraticuleSeries());
grid.toBack();

chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#aadaff");
chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;
chart.backgroundSeries.toBack();



