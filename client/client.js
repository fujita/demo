const {GetBgpRequest, GetBgpResponse} = require('./gobgp_pb.js');
const {GobgpApiClient} = require('./gobgp_grpc_web_pb.js');

var client = new GobgpApiClient('http://'+window.location.hostname+':8080', null, null);
var request = new GetBgpRequest();

client.getBgp(request, {}, (err, response) => {
	var g = response.getGlobal();
	console.log(g.getAs())
	document.write('AS number : ', g.getAs() + '<br>')
	document.write('Router ID : ', g.getRouterId() + '<br>')
})
