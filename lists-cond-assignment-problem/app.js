const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      list: [],
      show: true,
    };
  },
  methods: {
    addToList() {
      this.list.push(this.enteredValue);
    },

    onShow() {
      this.show = !this.show;
    },
  },
});

app.mount("#assignment");
