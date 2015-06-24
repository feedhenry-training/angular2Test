function cloudService() {
  this.makeCall = function(params, cb){
    console.log(params);
    $fh.cloud(
      {
        path: 'hello',
        data: {
          hello: params
        }
      },
      function (res) {
      	console.log(res);
        cb(null, res.msg);
      },
      function (code, errorprops, params) {
      	console.log(code);

        cb(code, null)
      }
    );

  }
}