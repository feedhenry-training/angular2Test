function DisplayComponent(cloud) {
    this.cloudResponse = 'Cloud Response: ';
    this.sayHello = function(myName) {
        console.log(myName);
        var self = this;
        
        cloud.makeCall(myName, function(err, response){
            console.log('Back from cloud call');
            console.log(response)
            self.cloudResponse = 'Cloud Response: ' + response;
        })
        
    };

}

DisplayComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: "my-app",
    injectables: [cloudService]
  }),
  new angular.ViewAnnotation({
     templateUrl:'app/form.html'
  })
];


DisplayComponent.parameters = [[cloudService]];
document.addEventListener("DOMContentLoaded", function() {
  angular.bootstrap(DisplayComponent);
});