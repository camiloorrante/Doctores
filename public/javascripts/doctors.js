window.onload = function(){

    // const http=Vue.http
    var App = new Vue({
        el: '#addForm',
        data: {
            idHospital: '',
            name2: '',
            lastname: '',
            secondlastname: '',
            profesionalid: '',
            bcaddress: '',
        },
        events: {},
        methods:{
            processAdd: function(el, err){
                console.log(name2.value);
                body = {idHospital: idHospital.value, name: name2.value, lastname: lastname.value, secondlastname: secondlastname.value, profesionalid: profesionalid.value, bcaddress: bcaddress.value};
                console.log(body);
                this.$http.post('/api/doctors', body, []).then((response) => {
                    this.message = response.data.message;
                  });
            }
        }
      });
router.put('/todo/:id', function(req, res) {
    models.Todo.find({
      where: {
        id: req.params.id
      }
    }).then(function(todo) {
      if(todo){
        todo.updateAttributes({
          title: req.body.title,
          complete: req.body.complete
        }).then(function(todo) {
          res.send(todo);
        });
      }
    });
  });

    }