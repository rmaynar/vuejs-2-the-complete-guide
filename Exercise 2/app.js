new Vue({
  el: "#exercise",
  data: {
    value: ""
  },
  methods: {
    alertMe: function() {
      alert("Hey there!");
    },
    update: function(event) {
      this.value = event.target.value;
    }
  }
});
