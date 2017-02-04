/*jslint browser: true*/
/*global L, jQuery, alert*/
/*global $, jQuery, alert*/

var map = L.map('mymap').setView([37.7288, -119.6095], 9);

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiamdnb21lejg4IiwiYSI6ImNpeWdjcjM1eDAzNGgzOHJ3ZTh2aWNhOXMifQ.rP6UZz16DXfkW6KoDFdfGA", {attribution: "Mapbox", maxZoom: 18, minZoom: 2}).addTo(map);


// campgrounds geojson

var tent = new L.Icon({
    iconUrl: "images/tent1.svg",
    iconSize: [16,16],
    iconAnchor: [8,16],
    popupAnchor: [0,-16],
});
    

function stylefunc_camp (feature, layer) {
    layer.bindPopup(feature.properties.POILABEL);
    layer.setIcon(tent);
};

var campgrounds = new L.GeoJSON.AJAX("js/campgrounds.geojson", {
    onEachFeature: stylefunc_camp
});

campgrounds.addTo(map);

// trailheads geojson

var hiker = new L.Icon({
    iconUrl: "images/trail.svg",
    iconSize: [16,16],
    iconAnchor: [8,16],
    popupAnchor: [0,-16]
});

function stylefunc_trail (feature, layer) {
    layer.bindPopup(feature.properties.POILABEL);
    layer.setIcon(hiker);
};

var trailheads = new L.GeoJSON.AJAX("js/trailheads.geojson", {
    onEachFeature: stylefunc_trail
});

trailheads.addTo(map);

// gas stations geojson

var gstation = new L.Icon({
    iconUrl: "images/gstation.svg",
    iconSize: [16,16],
    iconAnchor: [8,16],
    popupAnchor: [0,-16]
});

function stylefunc_gstation (feature, layer) {
    layer.bindPopup(feature.properties.POILABEL);
    layer.setIcon(gstation);
};

var gas_station = new L.GeoJSON.AJAX("js/gstation.geojson", {
    onEachFeature: stylefunc_gstation
});

gas_station.addTo(map);

// hospital geojson

var hospital = new L.Icon({
    iconUrl: "images/hospital.svg",
    iconSize: [16,16],
    iconAnchor: [8,16],
    popupAnchor: [0,-16]
});

function stylefunc_hospital (feature, layer) {
    layer.bindPopup(feature.properties.POILABEL);
    layer.setIcon(hospital);
};

var hospital_data = new L.GeoJSON.AJAX("js/hospital.geojson", {
    onEachFeature: stylefunc_hospital
});

hospital_data.addTo(map);

// nps boundary geojson

var nps_boundary = new L.GeoJSON.AJAX("js/npsboundary.geojson", {
    className: 'nps_boundary'
});

nps_boundary.addTo(map);




