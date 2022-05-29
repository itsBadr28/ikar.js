<template>
 <!-- eslint-disable  -->
  <div class="relative h-[500px] w-full ">
      <GeoErrorModel @closeGeoError="closeGeoError" v-if="geoError" :geoErrorMsg="geoErrorMsg" />
      <MapFeatures  :fetchCoords="fetchCoords" :coords="coords" @toggleSearchResults="toggleSearchResults" @getGeolocation="getGeolocation" @plotResult="plotResult"
      @removeResult="removeResult" :searchResults="searchResults" class="w-full md:w-auto absolute md:top-[40px] md:left-[60px] z-[2]" />
      <div  id="map" class="h-full z-[1]"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import leaflet from 'leaflet';
import GeoErrorModel from './GeoErrorModal.vue';
import MapFeatures from './MapFeatures.vue';

export default {
  name: 'Map-',
  components: {
    GeoErrorModel,
    MapFeatures,
  },
  setup() {
    let map;
    onMounted(() => {
      // init map
      map = leaflet.map("map").setView([36.245, 6.570], 15);
      leaflet.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.VUE_APP_API_KEY}`, {
        attribution: 'Map ikar agency in constantine',
        maxZoom: 18,
        id: 'mapbox/outdoors-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: process.env.VUE_APP_API_KEY,
      }).addTo(map);
      // getGeolocation();
      const marker = leaflet.marker([36.245, 6.570], {})
        .addTo(map)
        .bindPopup('<h1> hi, is a popup fvvvvvv <h1/> ')
        .openPopup();
    });

    const coords = ref(null);
    const fetchCoords = ref(null);
    const geoMarker = ref(null);
    const geoError = ref(null);
    const geoErrorMsg = ref("ddddd");
    const getGeolocation = () => {
      // if function is called, only run if we dont have coords
      if (!coords.value) {
        // check to see if we have coods in session sotrage
        if (sessionStorage.getItem("coords")) {
          coords.value = JSON.parse(sessionStorage.getItem("coords"));
          plotGeoLocation(coords.value);
          return;
        }
        // else get coords from geolocation API
        fetchCoords.value = true;
        navigator.geolocation.getCurrentPosition(setCoords, getLocError);
        return;
      }
      // otherwise, remove location
      coords.value = null;
      sessionStorage.removeItem("coords");
      map.removeLayer(geoMarker.value);
    };
    const setCoords = (pos) => {
      // stop fetching
      fetchCoords.value = null;
      // set coords in session storage
      const setSessionCoords = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      sessionStorage.setItem("coords", JSON.stringify(setSessionCoords));
      // set ref coords value
      coords.value = setSessionCoords;
      plotGeoLocation(coords.value);
    };
    const getLocError = (error) => {
      // stop fetching coords
      fetchCoords.value = null;
      geoError.value = true;
      geoErrorMsg.value = error.message;
    };
    const plotGeoLocation = (coords) => {
      // create custom marker
      const customMarker = leaflet.icon({
        iconUrl: require("../assets/img/Ellipse 83.svg"),
        iconSize: [35, 35],
        riseOnHover: false,
      });
      // create new marker with coords and custom marker
      geoMarker.value = leaflet
        .marker([coords.lat, coords.lng], { icon: customMarker })
        .addTo(map);
      // set map view to current location
      map.setView([coords.lat, coords.lng], 15);
    };
    const resultMarker = ref(null);
    const plotResult = (coords) => {
      // If there is already a marker, remove it. Only allow 1
      if (resultMarker.value) {
        map.removeLayer(resultMarker.value);
      }
      const customMarker = leaflet.icon({
        iconUrl: require("../assets/img/map-marker-blue.svg"),
        iconSize: [35, 35], // size of the icon
      });
      resultMarker.value = leaflet
        .marker([coords.coordinates[1], coords.coordinates[0]], { icon: customMarker })
        .addTo(map);
      map.setView([coords.coordinates[1], coords.coordinates[0]], 13);
    };
    const removeResult = () => {
      map.removeLayer(resultMarker.value);
    };
    const closeGeoError = () => {
      geoErrorMsg.value = null;
      geoError.value = null;
    };
    const searchResults = ref(null);
    const toggleSearchResults = () => {
      searchResults.value = !searchResults.value;
    };
    const closeSearchResults = () => {
      searchResults.value = null;
    };
    return {
      geoError,
      closeGeoError,
      geoErrorMsg,
      fetchCoords,
      coords,
      getGeolocation,
      plotResult,
      searchResults,
      toggleSearchResults,
      closeSearchResults,
      removeResult,
    };
  },
};
</script>

<style>

</style>
