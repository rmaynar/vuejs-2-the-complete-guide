new Vue({
  el: "#app",
  data: {
    showStart: true,
    myHealth: 80,
    monsterHealth: 80,
    myAttackPw: 0,
    monsterAttackPw: 0
  },
  methods: {
    attack: function() {
      this.myAttackPw = Math.random() * 9;
      this.monsterAttackPw = Math.random() * 5;
      this.myHealth = this.myHealth - this.monsterAttackPw;
      this.monsterHealth = this.monsterHealth - this.myAttackPw;
    },
    powerAttack: function() {
      this.myAttackPw = Math.random() * 10;
      this.monsterAttackPw = Math.random() * 7;
      this.myHealth = this.myHealth - this.monsterAttackPw;
      this.monsterHealth = this.monsterHealth - this.myAttackPw;
    },
    heal: function() {
      var power = Math.random() * 10;
      this.myHealth = this.myHealth + power;
      power = Math.random() * 7;
      this.myHealth = this.myHealth - power;
    },
    giveup: function() {
      this.myHealth = 80;
      this.monsterHealth = 80;
      showStart = true;
    }
  },
  computed: {
    myHealthStyle: function() {
      return {
        width: this.myHealth + "%"
      };
    },
    monsterHealthStyle: function() {
      return {
        width: this.monsterHealth + "%"
      };
    }
  }
});
