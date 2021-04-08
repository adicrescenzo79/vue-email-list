var app = new Vue({
  el: '#root',
  data: {
    mails: [],
  },
  methods: {
    getMail: function(){
      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          let mail = response.data.response;
          this.mails.push(mail);
        });
      }
      console.log(this.mails);
    }
  }
})
