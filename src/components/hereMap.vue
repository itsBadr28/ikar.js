<template>
  <div ref="map" style="width: 50vw; height: 50vh;"></div>
</template>

<script>
export default {
  name: 'hereMap',
  data() {
    return {
      platform: {},
      map: {},
    };
  },
  props: {
    apiKey: String,
    latitude: String,
    longitude: String,
    zoom: String,
  },
  created() {
    this.platform = new H.service.Platform({
      apiKey: this.key,
    });
  },
  mounted() {
    this.map = new H.map(
      this.$$refs.map,
      this.platform.createDefaultLayers().vector.normal.map,
      {
        zoom: this.zoom,
        center: { lat: this.latitude, lng: this.longitude },
      },
    );
  },
  methods: {
    dropMarker(position) {
      const marker = new H.map.marker({ lat: position.latitude, lng: position.longitude });
      this.map.addObject(marker);
    },
  },
};
</script>

<style>

</style>
