new Vue({
  el: "#exercise",
  data: {
    efecto: "",
    classA: "classA",
    classB: "classB",
    myClass: "myClass",
    class4: "class4",
    class41: "class41",
    setClass41: "false",
    myStyleSelect: "",
    width: 25
  },
  methods: {
    startEffect: function() {
      var v = this;
      setInterval(function() {
        v.efecto = v.efecto === "highlight" ? "shrink" : "highlight";
      }, 2000);
    },
    startProgress: function() {
      var v = this;
      setInterval(function() {
        v.width = v.width + v.width * 0.25;
      }, 1000);
    }
  },
  computed: {
    myStyle: function() {
      return {
        backgroundColor: "blue",
        width: 100 + "px",
        height: 100 + "px"
      };
    },
    myStyle2: function() {
      return {
        border: 1 + "px solid black"
      };
    },
    progressBarStyle: function() {
      return {
        backgroundColor: "red",
        width: this.width,
        height: "50px"
      };
    }
  }
});
