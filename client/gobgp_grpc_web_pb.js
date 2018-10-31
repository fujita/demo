/**
 * @fileoverview gRPC-Web generated client stub for gobgpapi
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.gobgpapi = require('./gobgp_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.gobgpapi.GobgpApiClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.gobgpapi.GobgpApiPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.gobgpapi.GobgpApiClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.gobgpapi.GobgpApiClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.StartBgpRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_StartBgp = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.StartBgpRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.StartBgpRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.startBgp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/StartBgp',
      request,
      metadata,
      methodInfo_StartBgp,
      callback);
};


/**
 * @param {!proto.gobgpapi.StartBgpRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.startBgp =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.startBgp(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.StopBgpRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_StopBgp = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.StopBgpRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.StopBgpRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.stopBgp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/StopBgp',
      request,
      metadata,
      methodInfo_StopBgp,
      callback);
};


/**
 * @param {!proto.gobgpapi.StopBgpRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.stopBgp =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.stopBgp(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.GetBgpRequest,
 *   !proto.gobgpapi.GetBgpResponse>}
 */
const methodInfo_GetBgp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.GetBgpResponse,
  /** @param {!proto.gobgpapi.GetBgpRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.GetBgpResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.GetBgpRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.gobgpapi.GetBgpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.GetBgpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.getBgp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/GetBgp',
      request,
      metadata,
      methodInfo_GetBgp,
      callback);
};


/**
 * @param {!proto.gobgpapi.GetBgpRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.gobgpapi.GetBgpResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.getBgp =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getBgp(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.AddPeerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AddPeer = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.AddPeerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.AddPeerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.addPeer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/AddPeer',
      request,
      metadata,
      methodInfo_AddPeer,
      callback);
};


/**
 * @param {!proto.gobgpapi.AddPeerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.addPeer =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addPeer(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.DeletePeerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeletePeer = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.DeletePeerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.DeletePeerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.deletePeer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/DeletePeer',
      request,
      metadata,
      methodInfo_DeletePeer,
      callback);
};


/**
 * @param {!proto.gobgpapi.DeletePeerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.deletePeer =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deletePeer(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.ListPeerRequest,
 *   !proto.gobgpapi.ListPeerResponse>}
 */
const methodInfo_ListPeer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.ListPeerResponse,
  /** @param {!proto.gobgpapi.ListPeerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.ListPeerResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.ListPeerRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListPeerResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.listPeer =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/gobgpapi.GobgpApi/ListPeer',
      request,
      metadata,
      methodInfo_ListPeer);
};


/**
 * @param {!proto.gobgpapi.ListPeerRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListPeerResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.listPeer =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/gobgpapi.GobgpApi/ListPeer',
      request,
      metadata,
      methodInfo_ListPeer);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.UpdatePeerRequest,
 *   !proto.gobgpapi.UpdatePeerResponse>}
 */
const methodInfo_UpdatePeer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.UpdatePeerResponse,
  /** @param {!proto.gobgpapi.UpdatePeerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.UpdatePeerResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.UpdatePeerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.gobgpapi.UpdatePeerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.UpdatePeerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.updatePeer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/UpdatePeer',
      request,
      metadata,
      methodInfo_UpdatePeer,
      callback);
};


/**
 * @param {!proto.gobgpapi.UpdatePeerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.gobgpapi.UpdatePeerResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.updatePeer =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updatePeer(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.ResetPeerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ResetPeer = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.ResetPeerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.ResetPeerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.resetPeer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/ResetPeer',
      request,
      metadata,
      methodInfo_ResetPeer,
      callback);
};


/**
 * @param {!proto.gobgpapi.ResetPeerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.resetPeer =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.resetPeer(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.ShutdownPeerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ShutdownPeer = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.ShutdownPeerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.ShutdownPeerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.shutdownPeer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/ShutdownPeer',
      request,
      metadata,
      methodInfo_ShutdownPeer,
      callback);
};


/**
 * @param {!proto.gobgpapi.ShutdownPeerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.shutdownPeer =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.shutdownPeer(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.EnablePeerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_EnablePeer = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.EnablePeerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.EnablePeerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.enablePeer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/EnablePeer',
      request,
      metadata,
      methodInfo_EnablePeer,
      callback);
};


/**
 * @param {!proto.gobgpapi.EnablePeerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.enablePeer =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.enablePeer(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.DisablePeerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DisablePeer = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.DisablePeerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.DisablePeerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.disablePeer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/DisablePeer',
      request,
      metadata,
      methodInfo_DisablePeer,
      callback);
};


/**
 * @param {!proto.gobgpapi.DisablePeerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.disablePeer =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.disablePeer(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.MonitorPeerRequest,
 *   !proto.gobgpapi.MonitorPeerResponse>}
 */
const methodInfo_MonitorPeer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.MonitorPeerResponse,
  /** @param {!proto.gobgpapi.MonitorPeerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.MonitorPeerResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.MonitorPeerRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.MonitorPeerResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.monitorPeer =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/gobgpapi.GobgpApi/MonitorPeer',
      request,
      metadata,
      methodInfo_MonitorPeer);
};


/**
 * @param {!proto.gobgpapi.MonitorPeerRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.MonitorPeerResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.monitorPeer =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/gobgpapi.GobgpApi/MonitorPeer',
      request,
      metadata,
      methodInfo_MonitorPeer);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.AddPeerGroupRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AddPeerGroup = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.AddPeerGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.AddPeerGroupRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.addPeerGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/AddPeerGroup',
      request,
      metadata,
      methodInfo_AddPeerGroup,
      callback);
};


/**
 * @param {!proto.gobgpapi.AddPeerGroupRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.addPeerGroup =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addPeerGroup(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.DeletePeerGroupRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeletePeerGroup = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.DeletePeerGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.DeletePeerGroupRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.deletePeerGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/DeletePeerGroup',
      request,
      metadata,
      methodInfo_DeletePeerGroup,
      callback);
};


/**
 * @param {!proto.gobgpapi.DeletePeerGroupRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.deletePeerGroup =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deletePeerGroup(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.UpdatePeerGroupRequest,
 *   !proto.gobgpapi.UpdatePeerGroupResponse>}
 */
const methodInfo_UpdatePeerGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.UpdatePeerGroupResponse,
  /** @param {!proto.gobgpapi.UpdatePeerGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.UpdatePeerGroupResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.UpdatePeerGroupRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.gobgpapi.UpdatePeerGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.UpdatePeerGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.updatePeerGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/UpdatePeerGroup',
      request,
      metadata,
      methodInfo_UpdatePeerGroup,
      callback);
};


/**
 * @param {!proto.gobgpapi.UpdatePeerGroupRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.gobgpapi.UpdatePeerGroupResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.updatePeerGroup =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updatePeerGroup(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.AddDynamicNeighborRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AddDynamicNeighbor = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.AddDynamicNeighborRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.AddDynamicNeighborRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.addDynamicNeighbor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/AddDynamicNeighbor',
      request,
      metadata,
      methodInfo_AddDynamicNeighbor,
      callback);
};


/**
 * @param {!proto.gobgpapi.AddDynamicNeighborRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.addDynamicNeighbor =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addDynamicNeighbor(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.AddPathRequest,
 *   !proto.gobgpapi.AddPathResponse>}
 */
const methodInfo_AddPath = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.AddPathResponse,
  /** @param {!proto.gobgpapi.AddPathRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.AddPathResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.AddPathRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.gobgpapi.AddPathResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.AddPathResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.addPath =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/AddPath',
      request,
      metadata,
      methodInfo_AddPath,
      callback);
};


/**
 * @param {!proto.gobgpapi.AddPathRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.gobgpapi.AddPathResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.addPath =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addPath(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.DeletePathRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeletePath = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.DeletePathRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.DeletePathRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.deletePath =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/DeletePath',
      request,
      metadata,
      methodInfo_DeletePath,
      callback);
};


/**
 * @param {!proto.gobgpapi.DeletePathRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.deletePath =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deletePath(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.ListPathRequest,
 *   !proto.gobgpapi.ListPathResponse>}
 */
const methodInfo_ListPath = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.ListPathResponse,
  /** @param {!proto.gobgpapi.ListPathRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.ListPathResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.ListPathRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListPathResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.listPath =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/gobgpapi.GobgpApi/ListPath',
      request,
      metadata,
      methodInfo_ListPath);
};


/**
 * @param {!proto.gobgpapi.ListPathRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListPathResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.listPath =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/gobgpapi.GobgpApi/ListPath',
      request,
      metadata,
      methodInfo_ListPath);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.GetTableRequest,
 *   !proto.gobgpapi.GetTableResponse>}
 */
const methodInfo_GetTable = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.GetTableResponse,
  /** @param {!proto.gobgpapi.GetTableRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.GetTableResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.GetTableRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.gobgpapi.GetTableResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.GetTableResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.getTable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/GetTable',
      request,
      metadata,
      methodInfo_GetTable,
      callback);
};


/**
 * @param {!proto.gobgpapi.GetTableRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.gobgpapi.GetTableResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.getTable =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getTable(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.MonitorTableRequest,
 *   !proto.gobgpapi.MonitorTableResponse>}
 */
const methodInfo_MonitorTable = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.MonitorTableResponse,
  /** @param {!proto.gobgpapi.MonitorTableRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.MonitorTableResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.MonitorTableRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.MonitorTableResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.monitorTable =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/gobgpapi.GobgpApi/MonitorTable',
      request,
      metadata,
      methodInfo_MonitorTable);
};


/**
 * @param {!proto.gobgpapi.MonitorTableRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.MonitorTableResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.monitorTable =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/gobgpapi.GobgpApi/MonitorTable',
      request,
      metadata,
      methodInfo_MonitorTable);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.AddVrfRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AddVrf = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.AddVrfRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.AddVrfRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.addVrf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/AddVrf',
      request,
      metadata,
      methodInfo_AddVrf,
      callback);
};


/**
 * @param {!proto.gobgpapi.AddVrfRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.addVrf =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addVrf(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.DeleteVrfRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeleteVrf = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.DeleteVrfRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.DeleteVrfRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.deleteVrf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/DeleteVrf',
      request,
      metadata,
      methodInfo_DeleteVrf,
      callback);
};


/**
 * @param {!proto.gobgpapi.DeleteVrfRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.deleteVrf =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteVrf(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.ListVrfRequest,
 *   !proto.gobgpapi.ListVrfResponse>}
 */
const methodInfo_ListVrf = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.ListVrfResponse,
  /** @param {!proto.gobgpapi.ListVrfRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.ListVrfResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.ListVrfRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListVrfResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.listVrf =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/gobgpapi.GobgpApi/ListVrf',
      request,
      metadata,
      methodInfo_ListVrf);
};


/**
 * @param {!proto.gobgpapi.ListVrfRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListVrfResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.listVrf =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/gobgpapi.GobgpApi/ListVrf',
      request,
      metadata,
      methodInfo_ListVrf);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.AddPolicyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AddPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.AddPolicyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.AddPolicyRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.addPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/AddPolicy',
      request,
      metadata,
      methodInfo_AddPolicy,
      callback);
};


/**
 * @param {!proto.gobgpapi.AddPolicyRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.addPolicy =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addPolicy(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.DeletePolicyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeletePolicy = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.DeletePolicyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.DeletePolicyRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.deletePolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/DeletePolicy',
      request,
      metadata,
      methodInfo_DeletePolicy,
      callback);
};


/**
 * @param {!proto.gobgpapi.DeletePolicyRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.deletePolicy =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deletePolicy(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.ListPolicyRequest,
 *   !proto.gobgpapi.ListPolicyResponse>}
 */
const methodInfo_ListPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.ListPolicyResponse,
  /** @param {!proto.gobgpapi.ListPolicyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.ListPolicyResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.ListPolicyRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListPolicyResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.listPolicy =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/gobgpapi.GobgpApi/ListPolicy',
      request,
      metadata,
      methodInfo_ListPolicy);
};


/**
 * @param {!proto.gobgpapi.ListPolicyRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListPolicyResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.listPolicy =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/gobgpapi.GobgpApi/ListPolicy',
      request,
      metadata,
      methodInfo_ListPolicy);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.SetPoliciesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_SetPolicies = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.SetPoliciesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.SetPoliciesRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.setPolicies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/SetPolicies',
      request,
      metadata,
      methodInfo_SetPolicies,
      callback);
};


/**
 * @param {!proto.gobgpapi.SetPoliciesRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.setPolicies =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setPolicies(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.AddDefinedSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AddDefinedSet = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.AddDefinedSetRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.AddDefinedSetRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.addDefinedSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/AddDefinedSet',
      request,
      metadata,
      methodInfo_AddDefinedSet,
      callback);
};


/**
 * @param {!proto.gobgpapi.AddDefinedSetRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.addDefinedSet =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addDefinedSet(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.DeleteDefinedSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeleteDefinedSet = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.DeleteDefinedSetRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.DeleteDefinedSetRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.deleteDefinedSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/DeleteDefinedSet',
      request,
      metadata,
      methodInfo_DeleteDefinedSet,
      callback);
};


/**
 * @param {!proto.gobgpapi.DeleteDefinedSetRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.deleteDefinedSet =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteDefinedSet(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.ListDefinedSetRequest,
 *   !proto.gobgpapi.ListDefinedSetResponse>}
 */
const methodInfo_ListDefinedSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.ListDefinedSetResponse,
  /** @param {!proto.gobgpapi.ListDefinedSetRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.ListDefinedSetResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.ListDefinedSetRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListDefinedSetResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.listDefinedSet =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/gobgpapi.GobgpApi/ListDefinedSet',
      request,
      metadata,
      methodInfo_ListDefinedSet);
};


/**
 * @param {!proto.gobgpapi.ListDefinedSetRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListDefinedSetResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.listDefinedSet =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/gobgpapi.GobgpApi/ListDefinedSet',
      request,
      metadata,
      methodInfo_ListDefinedSet);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.AddStatementRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AddStatement = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.AddStatementRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.AddStatementRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.addStatement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/AddStatement',
      request,
      metadata,
      methodInfo_AddStatement,
      callback);
};


/**
 * @param {!proto.gobgpapi.AddStatementRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.addStatement =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addStatement(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.DeleteStatementRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeleteStatement = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.DeleteStatementRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.DeleteStatementRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.deleteStatement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/DeleteStatement',
      request,
      metadata,
      methodInfo_DeleteStatement,
      callback);
};


/**
 * @param {!proto.gobgpapi.DeleteStatementRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.deleteStatement =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteStatement(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.ListStatementRequest,
 *   !proto.gobgpapi.ListStatementResponse>}
 */
const methodInfo_ListStatement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.ListStatementResponse,
  /** @param {!proto.gobgpapi.ListStatementRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.ListStatementResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.ListStatementRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListStatementResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.listStatement =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/gobgpapi.GobgpApi/ListStatement',
      request,
      metadata,
      methodInfo_ListStatement);
};


/**
 * @param {!proto.gobgpapi.ListStatementRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListStatementResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.listStatement =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/gobgpapi.GobgpApi/ListStatement',
      request,
      metadata,
      methodInfo_ListStatement);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.AddPolicyAssignmentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AddPolicyAssignment = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.AddPolicyAssignmentRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.AddPolicyAssignmentRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.addPolicyAssignment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/AddPolicyAssignment',
      request,
      metadata,
      methodInfo_AddPolicyAssignment,
      callback);
};


/**
 * @param {!proto.gobgpapi.AddPolicyAssignmentRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.addPolicyAssignment =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addPolicyAssignment(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.DeletePolicyAssignmentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeletePolicyAssignment = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.DeletePolicyAssignmentRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.DeletePolicyAssignmentRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.deletePolicyAssignment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/DeletePolicyAssignment',
      request,
      metadata,
      methodInfo_DeletePolicyAssignment,
      callback);
};


/**
 * @param {!proto.gobgpapi.DeletePolicyAssignmentRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.deletePolicyAssignment =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deletePolicyAssignment(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.ListPolicyAssignmentRequest,
 *   !proto.gobgpapi.ListPolicyAssignmentResponse>}
 */
const methodInfo_ListPolicyAssignment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.ListPolicyAssignmentResponse,
  /** @param {!proto.gobgpapi.ListPolicyAssignmentRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.ListPolicyAssignmentResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.ListPolicyAssignmentRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListPolicyAssignmentResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.listPolicyAssignment =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/gobgpapi.GobgpApi/ListPolicyAssignment',
      request,
      metadata,
      methodInfo_ListPolicyAssignment);
};


/**
 * @param {!proto.gobgpapi.ListPolicyAssignmentRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListPolicyAssignmentResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.listPolicyAssignment =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/gobgpapi.GobgpApi/ListPolicyAssignment',
      request,
      metadata,
      methodInfo_ListPolicyAssignment);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.SetPolicyAssignmentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_SetPolicyAssignment = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.SetPolicyAssignmentRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.SetPolicyAssignmentRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.setPolicyAssignment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/SetPolicyAssignment',
      request,
      metadata,
      methodInfo_SetPolicyAssignment,
      callback);
};


/**
 * @param {!proto.gobgpapi.SetPolicyAssignmentRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.setPolicyAssignment =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setPolicyAssignment(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.AddRpkiRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AddRpki = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.AddRpkiRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.AddRpkiRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.addRpki =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/AddRpki',
      request,
      metadata,
      methodInfo_AddRpki,
      callback);
};


/**
 * @param {!proto.gobgpapi.AddRpkiRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.addRpki =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addRpki(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.DeleteRpkiRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeleteRpki = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.DeleteRpkiRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.DeleteRpkiRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.deleteRpki =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/DeleteRpki',
      request,
      metadata,
      methodInfo_DeleteRpki,
      callback);
};


/**
 * @param {!proto.gobgpapi.DeleteRpkiRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.deleteRpki =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteRpki(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.ListRpkiRequest,
 *   !proto.gobgpapi.ListRpkiResponse>}
 */
const methodInfo_ListRpki = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.ListRpkiResponse,
  /** @param {!proto.gobgpapi.ListRpkiRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.ListRpkiResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.ListRpkiRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListRpkiResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.listRpki =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/gobgpapi.GobgpApi/ListRpki',
      request,
      metadata,
      methodInfo_ListRpki);
};


/**
 * @param {!proto.gobgpapi.ListRpkiRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListRpkiResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.listRpki =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/gobgpapi.GobgpApi/ListRpki',
      request,
      metadata,
      methodInfo_ListRpki);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.EnableRpkiRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_EnableRpki = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.EnableRpkiRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.EnableRpkiRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.enableRpki =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/EnableRpki',
      request,
      metadata,
      methodInfo_EnableRpki,
      callback);
};


/**
 * @param {!proto.gobgpapi.EnableRpkiRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.enableRpki =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.enableRpki(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.DisableRpkiRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DisableRpki = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.DisableRpkiRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.DisableRpkiRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.disableRpki =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/DisableRpki',
      request,
      metadata,
      methodInfo_DisableRpki,
      callback);
};


/**
 * @param {!proto.gobgpapi.DisableRpkiRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.disableRpki =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.disableRpki(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.ResetRpkiRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ResetRpki = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.ResetRpkiRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.ResetRpkiRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.resetRpki =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/ResetRpki',
      request,
      metadata,
      methodInfo_ResetRpki,
      callback);
};


/**
 * @param {!proto.gobgpapi.ResetRpkiRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.resetRpki =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.resetRpki(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.ListRpkiTableRequest,
 *   !proto.gobgpapi.ListRpkiTableResponse>}
 */
const methodInfo_ListRpkiTable = new grpc.web.AbstractClientBase.MethodInfo(
  proto.gobgpapi.ListRpkiTableResponse,
  /** @param {!proto.gobgpapi.ListRpkiTableRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.gobgpapi.ListRpkiTableResponse.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.ListRpkiTableRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListRpkiTableResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.listRpkiTable =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/gobgpapi.GobgpApi/ListRpkiTable',
      request,
      metadata,
      methodInfo_ListRpkiTable);
};


/**
 * @param {!proto.gobgpapi.ListRpkiTableRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.gobgpapi.ListRpkiTableResponse>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.listRpkiTable =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/gobgpapi.GobgpApi/ListRpkiTable',
      request,
      metadata,
      methodInfo_ListRpkiTable);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.EnableZebraRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_EnableZebra = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.EnableZebraRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.EnableZebraRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.enableZebra =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/EnableZebra',
      request,
      metadata,
      methodInfo_EnableZebra,
      callback);
};


/**
 * @param {!proto.gobgpapi.EnableZebraRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.enableZebra =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.enableZebra(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.EnableMrtRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_EnableMrt = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.EnableMrtRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.EnableMrtRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.enableMrt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/EnableMrt',
      request,
      metadata,
      methodInfo_EnableMrt,
      callback);
};


/**
 * @param {!proto.gobgpapi.EnableMrtRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.enableMrt =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.enableMrt(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.DisableMrtRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DisableMrt = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.DisableMrtRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.DisableMrtRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.disableMrt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/DisableMrt',
      request,
      metadata,
      methodInfo_DisableMrt,
      callback);
};


/**
 * @param {!proto.gobgpapi.DisableMrtRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.disableMrt =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.disableMrt(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.AddBmpRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AddBmp = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.AddBmpRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.AddBmpRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.addBmp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/AddBmp',
      request,
      metadata,
      methodInfo_AddBmp,
      callback);
};


/**
 * @param {!proto.gobgpapi.AddBmpRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.addBmp =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addBmp(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.gobgpapi.DeleteBmpRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeleteBmp = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.gobgpapi.DeleteBmpRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.gobgpapi.DeleteBmpRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiClient.prototype.deleteBmp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/gobgpapi.GobgpApi/DeleteBmp',
      request,
      metadata,
      methodInfo_DeleteBmp,
      callback);
};


/**
 * @param {!proto.gobgpapi.DeleteBmpRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.gobgpapi.GobgpApiPromiseClient.prototype.deleteBmp =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteBmp(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.gobgpapi;

