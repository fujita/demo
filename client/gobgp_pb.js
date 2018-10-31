/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.exportSymbol('proto.gobgpapi.Actions', null, global);
goog.exportSymbol('proto.gobgpapi.AddBmpRequest', null, global);
goog.exportSymbol('proto.gobgpapi.AddBmpRequest.MonitoringPolicy', null, global);
goog.exportSymbol('proto.gobgpapi.AddDefinedSetRequest', null, global);
goog.exportSymbol('proto.gobgpapi.AddDynamicNeighborRequest', null, global);
goog.exportSymbol('proto.gobgpapi.AddPathRequest', null, global);
goog.exportSymbol('proto.gobgpapi.AddPathResponse', null, global);
goog.exportSymbol('proto.gobgpapi.AddPathStreamRequest', null, global);
goog.exportSymbol('proto.gobgpapi.AddPaths', null, global);
goog.exportSymbol('proto.gobgpapi.AddPathsConfig', null, global);
goog.exportSymbol('proto.gobgpapi.AddPathsState', null, global);
goog.exportSymbol('proto.gobgpapi.AddPeerGroupRequest', null, global);
goog.exportSymbol('proto.gobgpapi.AddPeerRequest', null, global);
goog.exportSymbol('proto.gobgpapi.AddPolicyAssignmentRequest', null, global);
goog.exportSymbol('proto.gobgpapi.AddPolicyRequest', null, global);
goog.exportSymbol('proto.gobgpapi.AddRpkiRequest', null, global);
goog.exportSymbol('proto.gobgpapi.AddStatementRequest', null, global);
goog.exportSymbol('proto.gobgpapi.AddVrfRequest', null, global);
goog.exportSymbol('proto.gobgpapi.AfiSafi', null, global);
goog.exportSymbol('proto.gobgpapi.AfiSafiConfig', null, global);
goog.exportSymbol('proto.gobgpapi.AfiSafiState', null, global);
goog.exportSymbol('proto.gobgpapi.ApplyPolicy', null, global);
goog.exportSymbol('proto.gobgpapi.AsPathLength', null, global);
goog.exportSymbol('proto.gobgpapi.AsPathLengthType', null, global);
goog.exportSymbol('proto.gobgpapi.AsPrependAction', null, global);
goog.exportSymbol('proto.gobgpapi.CommunityAction', null, global);
goog.exportSymbol('proto.gobgpapi.CommunityActionType', null, global);
goog.exportSymbol('proto.gobgpapi.Conditions', null, global);
goog.exportSymbol('proto.gobgpapi.Conditions.RouteType', null, global);
goog.exportSymbol('proto.gobgpapi.Confederation', null, global);
goog.exportSymbol('proto.gobgpapi.DefaultRouteDistance', null, global);
goog.exportSymbol('proto.gobgpapi.DefinedSet', null, global);
goog.exportSymbol('proto.gobgpapi.DefinedType', null, global);
goog.exportSymbol('proto.gobgpapi.DeleteBmpRequest', null, global);
goog.exportSymbol('proto.gobgpapi.DeleteDefinedSetRequest', null, global);
goog.exportSymbol('proto.gobgpapi.DeletePathRequest', null, global);
goog.exportSymbol('proto.gobgpapi.DeletePeerGroupRequest', null, global);
goog.exportSymbol('proto.gobgpapi.DeletePeerRequest', null, global);
goog.exportSymbol('proto.gobgpapi.DeletePolicyAssignmentRequest', null, global);
goog.exportSymbol('proto.gobgpapi.DeletePolicyRequest', null, global);
goog.exportSymbol('proto.gobgpapi.DeleteRpkiRequest', null, global);
goog.exportSymbol('proto.gobgpapi.DeleteStatementRequest', null, global);
goog.exportSymbol('proto.gobgpapi.DeleteVrfRequest', null, global);
goog.exportSymbol('proto.gobgpapi.Destination', null, global);
goog.exportSymbol('proto.gobgpapi.DisableMrtRequest', null, global);
goog.exportSymbol('proto.gobgpapi.DisablePeerRequest', null, global);
goog.exportSymbol('proto.gobgpapi.DisableRpkiRequest', null, global);
goog.exportSymbol('proto.gobgpapi.DynamicNeighbor', null, global);
goog.exportSymbol('proto.gobgpapi.Ebgp', null, global);
goog.exportSymbol('proto.gobgpapi.EbgpConfig', null, global);
goog.exportSymbol('proto.gobgpapi.EbgpMultihop', null, global);
goog.exportSymbol('proto.gobgpapi.EbgpState', null, global);
goog.exportSymbol('proto.gobgpapi.EnableMrtRequest', null, global);
goog.exportSymbol('proto.gobgpapi.EnablePeerRequest', null, global);
goog.exportSymbol('proto.gobgpapi.EnableRpkiRequest', null, global);
goog.exportSymbol('proto.gobgpapi.EnableZebraRequest', null, global);
goog.exportSymbol('proto.gobgpapi.Family', null, global);
goog.exportSymbol('proto.gobgpapi.Family.Afi', null, global);
goog.exportSymbol('proto.gobgpapi.Family.Safi', null, global);
goog.exportSymbol('proto.gobgpapi.GetBgpRequest', null, global);
goog.exportSymbol('proto.gobgpapi.GetBgpResponse', null, global);
goog.exportSymbol('proto.gobgpapi.GetTableRequest', null, global);
goog.exportSymbol('proto.gobgpapi.GetTableResponse', null, global);
goog.exportSymbol('proto.gobgpapi.Global', null, global);
goog.exportSymbol('proto.gobgpapi.GracefulRestart', null, global);
goog.exportSymbol('proto.gobgpapi.Ibgp', null, global);
goog.exportSymbol('proto.gobgpapi.IbgpConfig', null, global);
goog.exportSymbol('proto.gobgpapi.IbgpState', null, global);
goog.exportSymbol('proto.gobgpapi.ListDefinedSetRequest', null, global);
goog.exportSymbol('proto.gobgpapi.ListDefinedSetResponse', null, global);
goog.exportSymbol('proto.gobgpapi.ListPathRequest', null, global);
goog.exportSymbol('proto.gobgpapi.ListPathResponse', null, global);
goog.exportSymbol('proto.gobgpapi.ListPeerRequest', null, global);
goog.exportSymbol('proto.gobgpapi.ListPeerResponse', null, global);
goog.exportSymbol('proto.gobgpapi.ListPolicyAssignmentRequest', null, global);
goog.exportSymbol('proto.gobgpapi.ListPolicyAssignmentResponse', null, global);
goog.exportSymbol('proto.gobgpapi.ListPolicyRequest', null, global);
goog.exportSymbol('proto.gobgpapi.ListPolicyResponse', null, global);
goog.exportSymbol('proto.gobgpapi.ListRpkiRequest', null, global);
goog.exportSymbol('proto.gobgpapi.ListRpkiResponse', null, global);
goog.exportSymbol('proto.gobgpapi.ListRpkiTableRequest', null, global);
goog.exportSymbol('proto.gobgpapi.ListRpkiTableResponse', null, global);
goog.exportSymbol('proto.gobgpapi.ListStatementRequest', null, global);
goog.exportSymbol('proto.gobgpapi.ListStatementResponse', null, global);
goog.exportSymbol('proto.gobgpapi.ListVrfRequest', null, global);
goog.exportSymbol('proto.gobgpapi.ListVrfResponse', null, global);
goog.exportSymbol('proto.gobgpapi.LocalPrefAction', null, global);
goog.exportSymbol('proto.gobgpapi.LongLivedGracefulRestart', null, global);
goog.exportSymbol('proto.gobgpapi.LongLivedGracefulRestartConfig', null, global);
goog.exportSymbol('proto.gobgpapi.LongLivedGracefulRestartState', null, global);
goog.exportSymbol('proto.gobgpapi.MatchSet', null, global);
goog.exportSymbol('proto.gobgpapi.MatchType', null, global);
goog.exportSymbol('proto.gobgpapi.MedAction', null, global);
goog.exportSymbol('proto.gobgpapi.MedActionType', null, global);
goog.exportSymbol('proto.gobgpapi.Message', null, global);
goog.exportSymbol('proto.gobgpapi.Messages', null, global);
goog.exportSymbol('proto.gobgpapi.MonitorPeerRequest', null, global);
goog.exportSymbol('proto.gobgpapi.MonitorPeerResponse', null, global);
goog.exportSymbol('proto.gobgpapi.MonitorTableRequest', null, global);
goog.exportSymbol('proto.gobgpapi.MonitorTableResponse', null, global);
goog.exportSymbol('proto.gobgpapi.MpGracefulRestart', null, global);
goog.exportSymbol('proto.gobgpapi.MpGracefulRestartConfig', null, global);
goog.exportSymbol('proto.gobgpapi.MpGracefulRestartState', null, global);
goog.exportSymbol('proto.gobgpapi.NexthopAction', null, global);
goog.exportSymbol('proto.gobgpapi.Path', null, global);
goog.exportSymbol('proto.gobgpapi.Peer', null, global);
goog.exportSymbol('proto.gobgpapi.PeerConf', null, global);
goog.exportSymbol('proto.gobgpapi.PeerConf.RemovePrivateAs', null, global);
goog.exportSymbol('proto.gobgpapi.PeerGroup', null, global);
goog.exportSymbol('proto.gobgpapi.PeerGroupConf', null, global);
goog.exportSymbol('proto.gobgpapi.PeerGroupConf.RemovePrivateAs', null, global);
goog.exportSymbol('proto.gobgpapi.PeerGroupState', null, global);
goog.exportSymbol('proto.gobgpapi.PeerGroupState.RemovePrivateAs', null, global);
goog.exportSymbol('proto.gobgpapi.PeerState', null, global);
goog.exportSymbol('proto.gobgpapi.PeerState.AdminState', null, global);
goog.exportSymbol('proto.gobgpapi.PeerState.SessionState', null, global);
goog.exportSymbol('proto.gobgpapi.Policy', null, global);
goog.exportSymbol('proto.gobgpapi.PolicyAssignment', null, global);
goog.exportSymbol('proto.gobgpapi.PolicyDirection', null, global);
goog.exportSymbol('proto.gobgpapi.Prefix', null, global);
goog.exportSymbol('proto.gobgpapi.PrefixLimit', null, global);
goog.exportSymbol('proto.gobgpapi.Queues', null, global);
goog.exportSymbol('proto.gobgpapi.RPKIConf', null, global);
goog.exportSymbol('proto.gobgpapi.RPKIState', null, global);
goog.exportSymbol('proto.gobgpapi.RPKIValidation', null, global);
goog.exportSymbol('proto.gobgpapi.RPKIValidation.Reason', null, global);
goog.exportSymbol('proto.gobgpapi.RPKIValidation.State', null, global);
goog.exportSymbol('proto.gobgpapi.ResetPeerRequest', null, global);
goog.exportSymbol('proto.gobgpapi.ResetPeerRequest.SoftResetDirection', null, global);
goog.exportSymbol('proto.gobgpapi.ResetRpkiRequest', null, global);
goog.exportSymbol('proto.gobgpapi.Resource', null, global);
goog.exportSymbol('proto.gobgpapi.Roa', null, global);
goog.exportSymbol('proto.gobgpapi.RouteAction', null, global);
goog.exportSymbol('proto.gobgpapi.RouteReflector', null, global);
goog.exportSymbol('proto.gobgpapi.RouteSelectionOptions', null, global);
goog.exportSymbol('proto.gobgpapi.RouteSelectionOptionsConfig', null, global);
goog.exportSymbol('proto.gobgpapi.RouteSelectionOptionsState', null, global);
goog.exportSymbol('proto.gobgpapi.RouteServer', null, global);
goog.exportSymbol('proto.gobgpapi.RouteTargetMembership', null, global);
goog.exportSymbol('proto.gobgpapi.RouteTargetMembershipConfig', null, global);
goog.exportSymbol('proto.gobgpapi.RouteTargetMembershipState', null, global);
goog.exportSymbol('proto.gobgpapi.RoutingPolicy', null, global);
goog.exportSymbol('proto.gobgpapi.Rpki', null, global);
goog.exportSymbol('proto.gobgpapi.SetPoliciesRequest', null, global);
goog.exportSymbol('proto.gobgpapi.SetPolicyAssignmentRequest', null, global);
goog.exportSymbol('proto.gobgpapi.ShutdownPeerRequest', null, global);
goog.exportSymbol('proto.gobgpapi.StartBgpRequest', null, global);
goog.exportSymbol('proto.gobgpapi.Statement', null, global);
goog.exportSymbol('proto.gobgpapi.StopBgpRequest', null, global);
goog.exportSymbol('proto.gobgpapi.TableLookupOption', null, global);
goog.exportSymbol('proto.gobgpapi.TableLookupPrefix', null, global);
goog.exportSymbol('proto.gobgpapi.Timers', null, global);
goog.exportSymbol('proto.gobgpapi.TimersConfig', null, global);
goog.exportSymbol('proto.gobgpapi.TimersState', null, global);
goog.exportSymbol('proto.gobgpapi.Transport', null, global);
goog.exportSymbol('proto.gobgpapi.UpdatePeerGroupRequest', null, global);
goog.exportSymbol('proto.gobgpapi.UpdatePeerGroupResponse', null, global);
goog.exportSymbol('proto.gobgpapi.UpdatePeerRequest', null, global);
goog.exportSymbol('proto.gobgpapi.UpdatePeerResponse', null, global);
goog.exportSymbol('proto.gobgpapi.UseMultiplePaths', null, global);
goog.exportSymbol('proto.gobgpapi.UseMultiplePathsConfig', null, global);
goog.exportSymbol('proto.gobgpapi.UseMultiplePathsState', null, global);
goog.exportSymbol('proto.gobgpapi.Vrf', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.StartBgpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.StartBgpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.StartBgpRequest.displayName = 'proto.gobgpapi.StartBgpRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.StartBgpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.StartBgpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.StartBgpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.StartBgpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    global: (f = msg.getGlobal()) && proto.gobgpapi.Global.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.StartBgpRequest}
 */
proto.gobgpapi.StartBgpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.StartBgpRequest;
  return proto.gobgpapi.StartBgpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.StartBgpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.StartBgpRequest}
 */
proto.gobgpapi.StartBgpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Global;
      reader.readMessage(value,proto.gobgpapi.Global.deserializeBinaryFromReader);
      msg.setGlobal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.StartBgpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.StartBgpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.StartBgpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.StartBgpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGlobal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Global.serializeBinaryToWriter
    );
  }
};


/**
 * optional Global global = 1;
 * @return {?proto.gobgpapi.Global}
 */
proto.gobgpapi.StartBgpRequest.prototype.getGlobal = function() {
  return /** @type{?proto.gobgpapi.Global} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Global, 1));
};


/** @param {?proto.gobgpapi.Global|undefined} value */
proto.gobgpapi.StartBgpRequest.prototype.setGlobal = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.StartBgpRequest.prototype.clearGlobal = function() {
  this.setGlobal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.StartBgpRequest.prototype.hasGlobal = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.StopBgpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.StopBgpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.StopBgpRequest.displayName = 'proto.gobgpapi.StopBgpRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.StopBgpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.StopBgpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.StopBgpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.StopBgpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.StopBgpRequest}
 */
proto.gobgpapi.StopBgpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.StopBgpRequest;
  return proto.gobgpapi.StopBgpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.StopBgpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.StopBgpRequest}
 */
proto.gobgpapi.StopBgpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.StopBgpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.StopBgpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.StopBgpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.StopBgpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.GetBgpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.GetBgpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.GetBgpRequest.displayName = 'proto.gobgpapi.GetBgpRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.GetBgpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.GetBgpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.GetBgpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.GetBgpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.GetBgpRequest}
 */
proto.gobgpapi.GetBgpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.GetBgpRequest;
  return proto.gobgpapi.GetBgpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.GetBgpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.GetBgpRequest}
 */
proto.gobgpapi.GetBgpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.GetBgpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.GetBgpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.GetBgpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.GetBgpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.GetBgpResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.GetBgpResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.GetBgpResponse.displayName = 'proto.gobgpapi.GetBgpResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.GetBgpResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.GetBgpResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.GetBgpResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.GetBgpResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    global: (f = msg.getGlobal()) && proto.gobgpapi.Global.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.GetBgpResponse}
 */
proto.gobgpapi.GetBgpResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.GetBgpResponse;
  return proto.gobgpapi.GetBgpResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.GetBgpResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.GetBgpResponse}
 */
proto.gobgpapi.GetBgpResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Global;
      reader.readMessage(value,proto.gobgpapi.Global.deserializeBinaryFromReader);
      msg.setGlobal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.GetBgpResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.GetBgpResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.GetBgpResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.GetBgpResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGlobal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Global.serializeBinaryToWriter
    );
  }
};


/**
 * optional Global global = 1;
 * @return {?proto.gobgpapi.Global}
 */
proto.gobgpapi.GetBgpResponse.prototype.getGlobal = function() {
  return /** @type{?proto.gobgpapi.Global} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Global, 1));
};


/** @param {?proto.gobgpapi.Global|undefined} value */
proto.gobgpapi.GetBgpResponse.prototype.setGlobal = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.GetBgpResponse.prototype.clearGlobal = function() {
  this.setGlobal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.GetBgpResponse.prototype.hasGlobal = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddPeerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddPeerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddPeerRequest.displayName = 'proto.gobgpapi.AddPeerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddPeerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddPeerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddPeerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPeerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.gobgpapi.Peer.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddPeerRequest}
 */
proto.gobgpapi.AddPeerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddPeerRequest;
  return proto.gobgpapi.AddPeerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddPeerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddPeerRequest}
 */
proto.gobgpapi.AddPeerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Peer;
      reader.readMessage(value,proto.gobgpapi.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddPeerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddPeerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddPeerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPeerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Peer.serializeBinaryToWriter
    );
  }
};


/**
 * optional Peer peer = 1;
 * @return {?proto.gobgpapi.Peer}
 */
proto.gobgpapi.AddPeerRequest.prototype.getPeer = function() {
  return /** @type{?proto.gobgpapi.Peer} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Peer, 1));
};


/** @param {?proto.gobgpapi.Peer|undefined} value */
proto.gobgpapi.AddPeerRequest.prototype.setPeer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.AddPeerRequest.prototype.clearPeer = function() {
  this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AddPeerRequest.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DeletePeerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DeletePeerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DeletePeerRequest.displayName = 'proto.gobgpapi.DeletePeerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DeletePeerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DeletePeerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DeletePeerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeletePeerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pb_interface: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DeletePeerRequest}
 */
proto.gobgpapi.DeletePeerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DeletePeerRequest;
  return proto.gobgpapi.DeletePeerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DeletePeerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DeletePeerRequest}
 */
proto.gobgpapi.DeletePeerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInterface(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DeletePeerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DeletePeerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DeletePeerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeletePeerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterface();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.DeletePeerRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.DeletePeerRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string interface = 2;
 * @return {string}
 */
proto.gobgpapi.DeletePeerRequest.prototype.getInterface = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.DeletePeerRequest.prototype.setInterface = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListPeerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListPeerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListPeerRequest.displayName = 'proto.gobgpapi.ListPeerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListPeerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListPeerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListPeerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPeerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    enableadvertised: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListPeerRequest}
 */
proto.gobgpapi.ListPeerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListPeerRequest;
  return proto.gobgpapi.ListPeerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListPeerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListPeerRequest}
 */
proto.gobgpapi.ListPeerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableadvertised(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListPeerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListPeerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListPeerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPeerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnableadvertised();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.ListPeerRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.ListPeerRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool enableAdvertised = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.ListPeerRequest.prototype.getEnableadvertised = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.ListPeerRequest.prototype.setEnableadvertised = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListPeerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListPeerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListPeerResponse.displayName = 'proto.gobgpapi.ListPeerResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListPeerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListPeerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListPeerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPeerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.gobgpapi.Peer.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListPeerResponse}
 */
proto.gobgpapi.ListPeerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListPeerResponse;
  return proto.gobgpapi.ListPeerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListPeerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListPeerResponse}
 */
proto.gobgpapi.ListPeerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Peer;
      reader.readMessage(value,proto.gobgpapi.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListPeerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListPeerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListPeerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPeerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Peer.serializeBinaryToWriter
    );
  }
};


/**
 * optional Peer peer = 1;
 * @return {?proto.gobgpapi.Peer}
 */
proto.gobgpapi.ListPeerResponse.prototype.getPeer = function() {
  return /** @type{?proto.gobgpapi.Peer} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Peer, 1));
};


/** @param {?proto.gobgpapi.Peer|undefined} value */
proto.gobgpapi.ListPeerResponse.prototype.setPeer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.ListPeerResponse.prototype.clearPeer = function() {
  this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ListPeerResponse.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.UpdatePeerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.UpdatePeerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.UpdatePeerRequest.displayName = 'proto.gobgpapi.UpdatePeerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.UpdatePeerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.UpdatePeerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.UpdatePeerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.UpdatePeerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.gobgpapi.Peer.toObject(includeInstance, f),
    doSoftResetIn: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.UpdatePeerRequest}
 */
proto.gobgpapi.UpdatePeerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.UpdatePeerRequest;
  return proto.gobgpapi.UpdatePeerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.UpdatePeerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.UpdatePeerRequest}
 */
proto.gobgpapi.UpdatePeerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Peer;
      reader.readMessage(value,proto.gobgpapi.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoSoftResetIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.UpdatePeerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.UpdatePeerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.UpdatePeerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.UpdatePeerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Peer.serializeBinaryToWriter
    );
  }
  f = message.getDoSoftResetIn();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Peer peer = 1;
 * @return {?proto.gobgpapi.Peer}
 */
proto.gobgpapi.UpdatePeerRequest.prototype.getPeer = function() {
  return /** @type{?proto.gobgpapi.Peer} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Peer, 1));
};


/** @param {?proto.gobgpapi.Peer|undefined} value */
proto.gobgpapi.UpdatePeerRequest.prototype.setPeer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.UpdatePeerRequest.prototype.clearPeer = function() {
  this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.UpdatePeerRequest.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool do_soft_reset_in = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.UpdatePeerRequest.prototype.getDoSoftResetIn = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.UpdatePeerRequest.prototype.setDoSoftResetIn = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.UpdatePeerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.UpdatePeerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.UpdatePeerResponse.displayName = 'proto.gobgpapi.UpdatePeerResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.UpdatePeerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.UpdatePeerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.UpdatePeerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.UpdatePeerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    needsSoftResetIn: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.UpdatePeerResponse}
 */
proto.gobgpapi.UpdatePeerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.UpdatePeerResponse;
  return proto.gobgpapi.UpdatePeerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.UpdatePeerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.UpdatePeerResponse}
 */
proto.gobgpapi.UpdatePeerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNeedsSoftResetIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.UpdatePeerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.UpdatePeerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.UpdatePeerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.UpdatePeerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNeedsSoftResetIn();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool needs_soft_reset_in = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.UpdatePeerResponse.prototype.getNeedsSoftResetIn = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.UpdatePeerResponse.prototype.setNeedsSoftResetIn = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ResetPeerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ResetPeerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ResetPeerRequest.displayName = 'proto.gobgpapi.ResetPeerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ResetPeerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ResetPeerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ResetPeerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ResetPeerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    communication: jspb.Message.getFieldWithDefault(msg, 2, ""),
    soft: jspb.Message.getFieldWithDefault(msg, 3, false),
    direction: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ResetPeerRequest}
 */
proto.gobgpapi.ResetPeerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ResetPeerRequest;
  return proto.gobgpapi.ResetPeerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ResetPeerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ResetPeerRequest}
 */
proto.gobgpapi.ResetPeerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommunication(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSoft(value);
      break;
    case 4:
      var value = /** @type {!proto.gobgpapi.ResetPeerRequest.SoftResetDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ResetPeerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ResetPeerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ResetPeerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ResetPeerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommunication();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSoft();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.gobgpapi.ResetPeerRequest.SoftResetDirection = {
  IN: 0,
  OUT: 1,
  BOTH: 2
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.ResetPeerRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.ResetPeerRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string communication = 2;
 * @return {string}
 */
proto.gobgpapi.ResetPeerRequest.prototype.getCommunication = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.ResetPeerRequest.prototype.setCommunication = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool soft = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.ResetPeerRequest.prototype.getSoft = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.gobgpapi.ResetPeerRequest.prototype.setSoft = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional SoftResetDirection direction = 4;
 * @return {!proto.gobgpapi.ResetPeerRequest.SoftResetDirection}
 */
proto.gobgpapi.ResetPeerRequest.prototype.getDirection = function() {
  return /** @type {!proto.gobgpapi.ResetPeerRequest.SoftResetDirection} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.gobgpapi.ResetPeerRequest.SoftResetDirection} value */
proto.gobgpapi.ResetPeerRequest.prototype.setDirection = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ShutdownPeerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ShutdownPeerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ShutdownPeerRequest.displayName = 'proto.gobgpapi.ShutdownPeerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ShutdownPeerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ShutdownPeerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ShutdownPeerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ShutdownPeerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    communication: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ShutdownPeerRequest}
 */
proto.gobgpapi.ShutdownPeerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ShutdownPeerRequest;
  return proto.gobgpapi.ShutdownPeerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ShutdownPeerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ShutdownPeerRequest}
 */
proto.gobgpapi.ShutdownPeerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommunication(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ShutdownPeerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ShutdownPeerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ShutdownPeerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ShutdownPeerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommunication();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.ShutdownPeerRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.ShutdownPeerRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string communication = 2;
 * @return {string}
 */
proto.gobgpapi.ShutdownPeerRequest.prototype.getCommunication = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.ShutdownPeerRequest.prototype.setCommunication = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.EnablePeerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.EnablePeerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.EnablePeerRequest.displayName = 'proto.gobgpapi.EnablePeerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.EnablePeerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.EnablePeerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.EnablePeerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.EnablePeerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.EnablePeerRequest}
 */
proto.gobgpapi.EnablePeerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.EnablePeerRequest;
  return proto.gobgpapi.EnablePeerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.EnablePeerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.EnablePeerRequest}
 */
proto.gobgpapi.EnablePeerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.EnablePeerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.EnablePeerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.EnablePeerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.EnablePeerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.EnablePeerRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.EnablePeerRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DisablePeerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DisablePeerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DisablePeerRequest.displayName = 'proto.gobgpapi.DisablePeerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DisablePeerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DisablePeerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DisablePeerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DisablePeerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    communication: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DisablePeerRequest}
 */
proto.gobgpapi.DisablePeerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DisablePeerRequest;
  return proto.gobgpapi.DisablePeerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DisablePeerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DisablePeerRequest}
 */
proto.gobgpapi.DisablePeerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommunication(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DisablePeerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DisablePeerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DisablePeerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DisablePeerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommunication();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.DisablePeerRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.DisablePeerRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string communication = 2;
 * @return {string}
 */
proto.gobgpapi.DisablePeerRequest.prototype.getCommunication = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.DisablePeerRequest.prototype.setCommunication = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.MonitorPeerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.MonitorPeerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.MonitorPeerRequest.displayName = 'proto.gobgpapi.MonitorPeerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.MonitorPeerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.MonitorPeerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.MonitorPeerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MonitorPeerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    current: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.MonitorPeerRequest}
 */
proto.gobgpapi.MonitorPeerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.MonitorPeerRequest;
  return proto.gobgpapi.MonitorPeerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.MonitorPeerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.MonitorPeerRequest}
 */
proto.gobgpapi.MonitorPeerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCurrent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.MonitorPeerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.MonitorPeerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.MonitorPeerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MonitorPeerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrent();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.MonitorPeerRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.MonitorPeerRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool current = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.MonitorPeerRequest.prototype.getCurrent = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.MonitorPeerRequest.prototype.setCurrent = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.MonitorPeerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.MonitorPeerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.MonitorPeerResponse.displayName = 'proto.gobgpapi.MonitorPeerResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.MonitorPeerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.MonitorPeerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.MonitorPeerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MonitorPeerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.gobgpapi.Peer.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.MonitorPeerResponse}
 */
proto.gobgpapi.MonitorPeerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.MonitorPeerResponse;
  return proto.gobgpapi.MonitorPeerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.MonitorPeerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.MonitorPeerResponse}
 */
proto.gobgpapi.MonitorPeerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Peer;
      reader.readMessage(value,proto.gobgpapi.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.MonitorPeerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.MonitorPeerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.MonitorPeerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MonitorPeerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Peer.serializeBinaryToWriter
    );
  }
};


/**
 * optional Peer peer = 1;
 * @return {?proto.gobgpapi.Peer}
 */
proto.gobgpapi.MonitorPeerResponse.prototype.getPeer = function() {
  return /** @type{?proto.gobgpapi.Peer} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Peer, 1));
};


/** @param {?proto.gobgpapi.Peer|undefined} value */
proto.gobgpapi.MonitorPeerResponse.prototype.setPeer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.MonitorPeerResponse.prototype.clearPeer = function() {
  this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.MonitorPeerResponse.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddPeerGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddPeerGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddPeerGroupRequest.displayName = 'proto.gobgpapi.AddPeerGroupRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddPeerGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddPeerGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddPeerGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPeerGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerGroup: (f = msg.getPeerGroup()) && proto.gobgpapi.PeerGroup.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddPeerGroupRequest}
 */
proto.gobgpapi.AddPeerGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddPeerGroupRequest;
  return proto.gobgpapi.AddPeerGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddPeerGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddPeerGroupRequest}
 */
proto.gobgpapi.AddPeerGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.PeerGroup;
      reader.readMessage(value,proto.gobgpapi.PeerGroup.deserializeBinaryFromReader);
      msg.setPeerGroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddPeerGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddPeerGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddPeerGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPeerGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.PeerGroup.serializeBinaryToWriter
    );
  }
};


/**
 * optional PeerGroup peer_group = 1;
 * @return {?proto.gobgpapi.PeerGroup}
 */
proto.gobgpapi.AddPeerGroupRequest.prototype.getPeerGroup = function() {
  return /** @type{?proto.gobgpapi.PeerGroup} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.PeerGroup, 1));
};


/** @param {?proto.gobgpapi.PeerGroup|undefined} value */
proto.gobgpapi.AddPeerGroupRequest.prototype.setPeerGroup = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.AddPeerGroupRequest.prototype.clearPeerGroup = function() {
  this.setPeerGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AddPeerGroupRequest.prototype.hasPeerGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DeletePeerGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DeletePeerGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DeletePeerGroupRequest.displayName = 'proto.gobgpapi.DeletePeerGroupRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DeletePeerGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DeletePeerGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DeletePeerGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeletePeerGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DeletePeerGroupRequest}
 */
proto.gobgpapi.DeletePeerGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DeletePeerGroupRequest;
  return proto.gobgpapi.DeletePeerGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DeletePeerGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DeletePeerGroupRequest}
 */
proto.gobgpapi.DeletePeerGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DeletePeerGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DeletePeerGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DeletePeerGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeletePeerGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.gobgpapi.DeletePeerGroupRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.DeletePeerGroupRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.UpdatePeerGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.UpdatePeerGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.UpdatePeerGroupRequest.displayName = 'proto.gobgpapi.UpdatePeerGroupRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.UpdatePeerGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.UpdatePeerGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.UpdatePeerGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.UpdatePeerGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerGroup: (f = msg.getPeerGroup()) && proto.gobgpapi.PeerGroup.toObject(includeInstance, f),
    doSoftResetIn: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.UpdatePeerGroupRequest}
 */
proto.gobgpapi.UpdatePeerGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.UpdatePeerGroupRequest;
  return proto.gobgpapi.UpdatePeerGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.UpdatePeerGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.UpdatePeerGroupRequest}
 */
proto.gobgpapi.UpdatePeerGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.PeerGroup;
      reader.readMessage(value,proto.gobgpapi.PeerGroup.deserializeBinaryFromReader);
      msg.setPeerGroup(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoSoftResetIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.UpdatePeerGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.UpdatePeerGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.UpdatePeerGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.UpdatePeerGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.PeerGroup.serializeBinaryToWriter
    );
  }
  f = message.getDoSoftResetIn();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional PeerGroup peer_group = 1;
 * @return {?proto.gobgpapi.PeerGroup}
 */
proto.gobgpapi.UpdatePeerGroupRequest.prototype.getPeerGroup = function() {
  return /** @type{?proto.gobgpapi.PeerGroup} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.PeerGroup, 1));
};


/** @param {?proto.gobgpapi.PeerGroup|undefined} value */
proto.gobgpapi.UpdatePeerGroupRequest.prototype.setPeerGroup = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.UpdatePeerGroupRequest.prototype.clearPeerGroup = function() {
  this.setPeerGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.UpdatePeerGroupRequest.prototype.hasPeerGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool do_soft_reset_in = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.UpdatePeerGroupRequest.prototype.getDoSoftResetIn = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.UpdatePeerGroupRequest.prototype.setDoSoftResetIn = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.UpdatePeerGroupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.UpdatePeerGroupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.UpdatePeerGroupResponse.displayName = 'proto.gobgpapi.UpdatePeerGroupResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.UpdatePeerGroupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.UpdatePeerGroupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.UpdatePeerGroupResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.UpdatePeerGroupResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    needsSoftResetIn: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.UpdatePeerGroupResponse}
 */
proto.gobgpapi.UpdatePeerGroupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.UpdatePeerGroupResponse;
  return proto.gobgpapi.UpdatePeerGroupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.UpdatePeerGroupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.UpdatePeerGroupResponse}
 */
proto.gobgpapi.UpdatePeerGroupResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNeedsSoftResetIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.UpdatePeerGroupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.UpdatePeerGroupResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.UpdatePeerGroupResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.UpdatePeerGroupResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNeedsSoftResetIn();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool needs_soft_reset_in = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.UpdatePeerGroupResponse.prototype.getNeedsSoftResetIn = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.UpdatePeerGroupResponse.prototype.setNeedsSoftResetIn = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddDynamicNeighborRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddDynamicNeighborRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddDynamicNeighborRequest.displayName = 'proto.gobgpapi.AddDynamicNeighborRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddDynamicNeighborRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddDynamicNeighborRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddDynamicNeighborRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddDynamicNeighborRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dynamicNeighbor: (f = msg.getDynamicNeighbor()) && proto.gobgpapi.DynamicNeighbor.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddDynamicNeighborRequest}
 */
proto.gobgpapi.AddDynamicNeighborRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddDynamicNeighborRequest;
  return proto.gobgpapi.AddDynamicNeighborRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddDynamicNeighborRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddDynamicNeighborRequest}
 */
proto.gobgpapi.AddDynamicNeighborRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.DynamicNeighbor;
      reader.readMessage(value,proto.gobgpapi.DynamicNeighbor.deserializeBinaryFromReader);
      msg.setDynamicNeighbor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddDynamicNeighborRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddDynamicNeighborRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddDynamicNeighborRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddDynamicNeighborRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDynamicNeighbor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.DynamicNeighbor.serializeBinaryToWriter
    );
  }
};


/**
 * optional DynamicNeighbor dynamic_neighbor = 1;
 * @return {?proto.gobgpapi.DynamicNeighbor}
 */
proto.gobgpapi.AddDynamicNeighborRequest.prototype.getDynamicNeighbor = function() {
  return /** @type{?proto.gobgpapi.DynamicNeighbor} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.DynamicNeighbor, 1));
};


/** @param {?proto.gobgpapi.DynamicNeighbor|undefined} value */
proto.gobgpapi.AddDynamicNeighborRequest.prototype.setDynamicNeighbor = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.AddDynamicNeighborRequest.prototype.clearDynamicNeighbor = function() {
  this.setDynamicNeighbor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AddDynamicNeighborRequest.prototype.hasDynamicNeighbor = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddPathRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddPathRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddPathRequest.displayName = 'proto.gobgpapi.AddPathRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddPathRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddPathRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddPathRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPathRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: jspb.Message.getFieldWithDefault(msg, 1, 0),
    vrfId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    path: (f = msg.getPath()) && proto.gobgpapi.Path.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddPathRequest}
 */
proto.gobgpapi.AddPathRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddPathRequest;
  return proto.gobgpapi.AddPathRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddPathRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddPathRequest}
 */
proto.gobgpapi.AddPathRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.Resource} */ (reader.readEnum());
      msg.setResource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVrfId(value);
      break;
    case 3:
      var value = new proto.gobgpapi.Path;
      reader.readMessage(value,proto.gobgpapi.Path.deserializeBinaryFromReader);
      msg.setPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddPathRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddPathRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddPathRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPathRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getVrfId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPath();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gobgpapi.Path.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource resource = 1;
 * @return {!proto.gobgpapi.Resource}
 */
proto.gobgpapi.AddPathRequest.prototype.getResource = function() {
  return /** @type {!proto.gobgpapi.Resource} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.Resource} value */
proto.gobgpapi.AddPathRequest.prototype.setResource = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string vrf_id = 2;
 * @return {string}
 */
proto.gobgpapi.AddPathRequest.prototype.getVrfId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.AddPathRequest.prototype.setVrfId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Path path = 3;
 * @return {?proto.gobgpapi.Path}
 */
proto.gobgpapi.AddPathRequest.prototype.getPath = function() {
  return /** @type{?proto.gobgpapi.Path} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Path, 3));
};


/** @param {?proto.gobgpapi.Path|undefined} value */
proto.gobgpapi.AddPathRequest.prototype.setPath = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gobgpapi.AddPathRequest.prototype.clearPath = function() {
  this.setPath(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AddPathRequest.prototype.hasPath = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddPathResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddPathResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddPathResponse.displayName = 'proto.gobgpapi.AddPathResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddPathResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddPathResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddPathResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPathResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: msg.getUuid_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddPathResponse}
 */
proto.gobgpapi.AddPathResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddPathResponse;
  return proto.gobgpapi.AddPathResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddPathResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddPathResponse}
 */
proto.gobgpapi.AddPathResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddPathResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddPathResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddPathResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPathResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes uuid = 1;
 * @return {string}
 */
proto.gobgpapi.AddPathResponse.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes uuid = 1;
 * This is a type-conversion wrapper around `getUuid()`
 * @return {string}
 */
proto.gobgpapi.AddPathResponse.prototype.getUuid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUuid()));
};


/**
 * optional bytes uuid = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUuid()`
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddPathResponse.prototype.getUuid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUuid()));
};


/** @param {!(string|Uint8Array)} value */
proto.gobgpapi.AddPathResponse.prototype.setUuid = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DeletePathRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DeletePathRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DeletePathRequest.displayName = 'proto.gobgpapi.DeletePathRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DeletePathRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DeletePathRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DeletePathRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeletePathRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: jspb.Message.getFieldWithDefault(msg, 1, 0),
    vrfId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    family: (f = msg.getFamily()) && proto.gobgpapi.Family.toObject(includeInstance, f),
    path: (f = msg.getPath()) && proto.gobgpapi.Path.toObject(includeInstance, f),
    uuid: msg.getUuid_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DeletePathRequest}
 */
proto.gobgpapi.DeletePathRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DeletePathRequest;
  return proto.gobgpapi.DeletePathRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DeletePathRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DeletePathRequest}
 */
proto.gobgpapi.DeletePathRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.Resource} */ (reader.readEnum());
      msg.setResource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVrfId(value);
      break;
    case 3:
      var value = new proto.gobgpapi.Family;
      reader.readMessage(value,proto.gobgpapi.Family.deserializeBinaryFromReader);
      msg.setFamily(value);
      break;
    case 4:
      var value = new proto.gobgpapi.Path;
      reader.readMessage(value,proto.gobgpapi.Path.deserializeBinaryFromReader);
      msg.setPath(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DeletePathRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DeletePathRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DeletePathRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeletePathRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getVrfId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFamily();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gobgpapi.Family.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.gobgpapi.Path.serializeBinaryToWriter
    );
  }
  f = message.getUuid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional Resource resource = 1;
 * @return {!proto.gobgpapi.Resource}
 */
proto.gobgpapi.DeletePathRequest.prototype.getResource = function() {
  return /** @type {!proto.gobgpapi.Resource} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.Resource} value */
proto.gobgpapi.DeletePathRequest.prototype.setResource = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string vrf_id = 2;
 * @return {string}
 */
proto.gobgpapi.DeletePathRequest.prototype.getVrfId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.DeletePathRequest.prototype.setVrfId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Family family = 3;
 * @return {?proto.gobgpapi.Family}
 */
proto.gobgpapi.DeletePathRequest.prototype.getFamily = function() {
  return /** @type{?proto.gobgpapi.Family} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Family, 3));
};


/** @param {?proto.gobgpapi.Family|undefined} value */
proto.gobgpapi.DeletePathRequest.prototype.setFamily = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gobgpapi.DeletePathRequest.prototype.clearFamily = function() {
  this.setFamily(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.DeletePathRequest.prototype.hasFamily = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Path path = 4;
 * @return {?proto.gobgpapi.Path}
 */
proto.gobgpapi.DeletePathRequest.prototype.getPath = function() {
  return /** @type{?proto.gobgpapi.Path} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Path, 4));
};


/** @param {?proto.gobgpapi.Path|undefined} value */
proto.gobgpapi.DeletePathRequest.prototype.setPath = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.gobgpapi.DeletePathRequest.prototype.clearPath = function() {
  this.setPath(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.DeletePathRequest.prototype.hasPath = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes uuid = 5;
 * @return {string}
 */
proto.gobgpapi.DeletePathRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes uuid = 5;
 * This is a type-conversion wrapper around `getUuid()`
 * @return {string}
 */
proto.gobgpapi.DeletePathRequest.prototype.getUuid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUuid()));
};


/**
 * optional bytes uuid = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUuid()`
 * @return {!Uint8Array}
 */
proto.gobgpapi.DeletePathRequest.prototype.getUuid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUuid()));
};


/** @param {!(string|Uint8Array)} value */
proto.gobgpapi.DeletePathRequest.prototype.setUuid = function(value) {
  jspb.Message.setProto3BytesField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListPathRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.ListPathRequest.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.ListPathRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListPathRequest.displayName = 'proto.gobgpapi.ListPathRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.ListPathRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListPathRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListPathRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListPathRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPathRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    family: (f = msg.getFamily()) && proto.gobgpapi.Family.toObject(includeInstance, f),
    prefixesList: jspb.Message.toObjectList(msg.getPrefixesList(),
    proto.gobgpapi.TableLookupPrefix.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListPathRequest}
 */
proto.gobgpapi.ListPathRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListPathRequest;
  return proto.gobgpapi.ListPathRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListPathRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListPathRequest}
 */
proto.gobgpapi.ListPathRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.Resource} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.gobgpapi.Family;
      reader.readMessage(value,proto.gobgpapi.Family.deserializeBinaryFromReader);
      msg.setFamily(value);
      break;
    case 4:
      var value = new proto.gobgpapi.TableLookupPrefix;
      reader.readMessage(value,proto.gobgpapi.TableLookupPrefix.deserializeBinaryFromReader);
      msg.addPrefixes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListPathRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListPathRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListPathRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPathRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFamily();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gobgpapi.Family.serializeBinaryToWriter
    );
  }
  f = message.getPrefixesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.gobgpapi.TableLookupPrefix.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource type = 1;
 * @return {!proto.gobgpapi.Resource}
 */
proto.gobgpapi.ListPathRequest.prototype.getType = function() {
  return /** @type {!proto.gobgpapi.Resource} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.Resource} value */
proto.gobgpapi.ListPathRequest.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.gobgpapi.ListPathRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.ListPathRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Family family = 3;
 * @return {?proto.gobgpapi.Family}
 */
proto.gobgpapi.ListPathRequest.prototype.getFamily = function() {
  return /** @type{?proto.gobgpapi.Family} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Family, 3));
};


/** @param {?proto.gobgpapi.Family|undefined} value */
proto.gobgpapi.ListPathRequest.prototype.setFamily = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gobgpapi.ListPathRequest.prototype.clearFamily = function() {
  this.setFamily(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ListPathRequest.prototype.hasFamily = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated TableLookupPrefix prefixes = 4;
 * @return {!Array.<!proto.gobgpapi.TableLookupPrefix>}
 */
proto.gobgpapi.ListPathRequest.prototype.getPrefixesList = function() {
  return /** @type{!Array.<!proto.gobgpapi.TableLookupPrefix>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.TableLookupPrefix, 4));
};


/** @param {!Array.<!proto.gobgpapi.TableLookupPrefix>} value */
proto.gobgpapi.ListPathRequest.prototype.setPrefixesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.gobgpapi.TableLookupPrefix=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.TableLookupPrefix}
 */
proto.gobgpapi.ListPathRequest.prototype.addPrefixes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.gobgpapi.TableLookupPrefix, opt_index);
};


proto.gobgpapi.ListPathRequest.prototype.clearPrefixesList = function() {
  this.setPrefixesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListPathResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListPathResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListPathResponse.displayName = 'proto.gobgpapi.ListPathResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListPathResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListPathResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListPathResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPathResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    destination: (f = msg.getDestination()) && proto.gobgpapi.Destination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListPathResponse}
 */
proto.gobgpapi.ListPathResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListPathResponse;
  return proto.gobgpapi.ListPathResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListPathResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListPathResponse}
 */
proto.gobgpapi.ListPathResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Destination;
      reader.readMessage(value,proto.gobgpapi.Destination.deserializeBinaryFromReader);
      msg.setDestination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListPathResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListPathResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListPathResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPathResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Destination.serializeBinaryToWriter
    );
  }
};


/**
 * optional Destination destination = 1;
 * @return {?proto.gobgpapi.Destination}
 */
proto.gobgpapi.ListPathResponse.prototype.getDestination = function() {
  return /** @type{?proto.gobgpapi.Destination} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Destination, 1));
};


/** @param {?proto.gobgpapi.Destination|undefined} value */
proto.gobgpapi.ListPathResponse.prototype.setDestination = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.ListPathResponse.prototype.clearDestination = function() {
  this.setDestination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ListPathResponse.prototype.hasDestination = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddPathStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.AddPathStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.AddPathStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddPathStreamRequest.displayName = 'proto.gobgpapi.AddPathStreamRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.AddPathStreamRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddPathStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddPathStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddPathStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPathStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: jspb.Message.getFieldWithDefault(msg, 1, 0),
    vrfId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pathsList: jspb.Message.toObjectList(msg.getPathsList(),
    proto.gobgpapi.Path.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddPathStreamRequest}
 */
proto.gobgpapi.AddPathStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddPathStreamRequest;
  return proto.gobgpapi.AddPathStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddPathStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddPathStreamRequest}
 */
proto.gobgpapi.AddPathStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.Resource} */ (reader.readEnum());
      msg.setResource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVrfId(value);
      break;
    case 3:
      var value = new proto.gobgpapi.Path;
      reader.readMessage(value,proto.gobgpapi.Path.deserializeBinaryFromReader);
      msg.addPaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddPathStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddPathStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddPathStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPathStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getVrfId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPathsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.gobgpapi.Path.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resource resource = 1;
 * @return {!proto.gobgpapi.Resource}
 */
proto.gobgpapi.AddPathStreamRequest.prototype.getResource = function() {
  return /** @type {!proto.gobgpapi.Resource} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.Resource} value */
proto.gobgpapi.AddPathStreamRequest.prototype.setResource = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string vrf_id = 2;
 * @return {string}
 */
proto.gobgpapi.AddPathStreamRequest.prototype.getVrfId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.AddPathStreamRequest.prototype.setVrfId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Path paths = 3;
 * @return {!Array.<!proto.gobgpapi.Path>}
 */
proto.gobgpapi.AddPathStreamRequest.prototype.getPathsList = function() {
  return /** @type{!Array.<!proto.gobgpapi.Path>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.Path, 3));
};


/** @param {!Array.<!proto.gobgpapi.Path>} value */
proto.gobgpapi.AddPathStreamRequest.prototype.setPathsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.gobgpapi.Path=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.Path}
 */
proto.gobgpapi.AddPathStreamRequest.prototype.addPaths = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.gobgpapi.Path, opt_index);
};


proto.gobgpapi.AddPathStreamRequest.prototype.clearPathsList = function() {
  this.setPathsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.GetTableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.GetTableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.GetTableRequest.displayName = 'proto.gobgpapi.GetTableRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.GetTableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.GetTableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.GetTableRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.GetTableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    family: (f = msg.getFamily()) && proto.gobgpapi.Family.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.GetTableRequest}
 */
proto.gobgpapi.GetTableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.GetTableRequest;
  return proto.gobgpapi.GetTableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.GetTableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.GetTableRequest}
 */
proto.gobgpapi.GetTableRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.Resource} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.gobgpapi.Family;
      reader.readMessage(value,proto.gobgpapi.Family.deserializeBinaryFromReader);
      msg.setFamily(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.GetTableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.GetTableRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.GetTableRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.GetTableRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getFamily();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.Family.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Resource type = 1;
 * @return {!proto.gobgpapi.Resource}
 */
proto.gobgpapi.GetTableRequest.prototype.getType = function() {
  return /** @type {!proto.gobgpapi.Resource} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.Resource} value */
proto.gobgpapi.GetTableRequest.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Family family = 2;
 * @return {?proto.gobgpapi.Family}
 */
proto.gobgpapi.GetTableRequest.prototype.getFamily = function() {
  return /** @type{?proto.gobgpapi.Family} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Family, 2));
};


/** @param {?proto.gobgpapi.Family|undefined} value */
proto.gobgpapi.GetTableRequest.prototype.setFamily = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.GetTableRequest.prototype.clearFamily = function() {
  this.setFamily(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.GetTableRequest.prototype.hasFamily = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.gobgpapi.GetTableRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.gobgpapi.GetTableRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.GetTableResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.GetTableResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.GetTableResponse.displayName = 'proto.gobgpapi.GetTableResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.GetTableResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.GetTableResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.GetTableResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.GetTableResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    numDestination: jspb.Message.getFieldWithDefault(msg, 1, 0),
    numPath: jspb.Message.getFieldWithDefault(msg, 2, 0),
    numAccepted: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.GetTableResponse}
 */
proto.gobgpapi.GetTableResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.GetTableResponse;
  return proto.gobgpapi.GetTableResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.GetTableResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.GetTableResponse}
 */
proto.gobgpapi.GetTableResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumDestination(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumPath(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumAccepted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.GetTableResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.GetTableResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.GetTableResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.GetTableResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumDestination();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNumPath();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getNumAccepted();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 num_destination = 1;
 * @return {number}
 */
proto.gobgpapi.GetTableResponse.prototype.getNumDestination = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.GetTableResponse.prototype.setNumDestination = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 num_path = 2;
 * @return {number}
 */
proto.gobgpapi.GetTableResponse.prototype.getNumPath = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.GetTableResponse.prototype.setNumPath = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 num_accepted = 3;
 * @return {number}
 */
proto.gobgpapi.GetTableResponse.prototype.getNumAccepted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.GetTableResponse.prototype.setNumAccepted = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.MonitorTableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.MonitorTableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.MonitorTableRequest.displayName = 'proto.gobgpapi.MonitorTableRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.MonitorTableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.MonitorTableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.MonitorTableRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MonitorTableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    family: (f = msg.getFamily()) && proto.gobgpapi.Family.toObject(includeInstance, f),
    current: jspb.Message.getFieldWithDefault(msg, 4, false),
    postPolicy: jspb.Message.getFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.MonitorTableRequest}
 */
proto.gobgpapi.MonitorTableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.MonitorTableRequest;
  return proto.gobgpapi.MonitorTableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.MonitorTableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.MonitorTableRequest}
 */
proto.gobgpapi.MonitorTableRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.Resource} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.gobgpapi.Family;
      reader.readMessage(value,proto.gobgpapi.Family.deserializeBinaryFromReader);
      msg.setFamily(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCurrent(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPostPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.MonitorTableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.MonitorTableRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.MonitorTableRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MonitorTableRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFamily();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gobgpapi.Family.serializeBinaryToWriter
    );
  }
  f = message.getCurrent();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPostPolicy();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional Resource type = 1;
 * @return {!proto.gobgpapi.Resource}
 */
proto.gobgpapi.MonitorTableRequest.prototype.getType = function() {
  return /** @type {!proto.gobgpapi.Resource} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.Resource} value */
proto.gobgpapi.MonitorTableRequest.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.gobgpapi.MonitorTableRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.MonitorTableRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Family family = 3;
 * @return {?proto.gobgpapi.Family}
 */
proto.gobgpapi.MonitorTableRequest.prototype.getFamily = function() {
  return /** @type{?proto.gobgpapi.Family} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Family, 3));
};


/** @param {?proto.gobgpapi.Family|undefined} value */
proto.gobgpapi.MonitorTableRequest.prototype.setFamily = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gobgpapi.MonitorTableRequest.prototype.clearFamily = function() {
  this.setFamily(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.MonitorTableRequest.prototype.hasFamily = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool current = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.MonitorTableRequest.prototype.getCurrent = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.gobgpapi.MonitorTableRequest.prototype.setCurrent = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool post_policy = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.MonitorTableRequest.prototype.getPostPolicy = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.gobgpapi.MonitorTableRequest.prototype.setPostPolicy = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.MonitorTableResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.MonitorTableResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.MonitorTableResponse.displayName = 'proto.gobgpapi.MonitorTableResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.MonitorTableResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.MonitorTableResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.MonitorTableResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MonitorTableResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: (f = msg.getPath()) && proto.gobgpapi.Path.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.MonitorTableResponse}
 */
proto.gobgpapi.MonitorTableResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.MonitorTableResponse;
  return proto.gobgpapi.MonitorTableResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.MonitorTableResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.MonitorTableResponse}
 */
proto.gobgpapi.MonitorTableResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Path;
      reader.readMessage(value,proto.gobgpapi.Path.deserializeBinaryFromReader);
      msg.setPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.MonitorTableResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.MonitorTableResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.MonitorTableResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MonitorTableResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Path.serializeBinaryToWriter
    );
  }
};


/**
 * optional Path path = 1;
 * @return {?proto.gobgpapi.Path}
 */
proto.gobgpapi.MonitorTableResponse.prototype.getPath = function() {
  return /** @type{?proto.gobgpapi.Path} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Path, 1));
};


/** @param {?proto.gobgpapi.Path|undefined} value */
proto.gobgpapi.MonitorTableResponse.prototype.setPath = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.MonitorTableResponse.prototype.clearPath = function() {
  this.setPath(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.MonitorTableResponse.prototype.hasPath = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddVrfRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddVrfRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddVrfRequest.displayName = 'proto.gobgpapi.AddVrfRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddVrfRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddVrfRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddVrfRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddVrfRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    vrf: (f = msg.getVrf()) && proto.gobgpapi.Vrf.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddVrfRequest}
 */
proto.gobgpapi.AddVrfRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddVrfRequest;
  return proto.gobgpapi.AddVrfRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddVrfRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddVrfRequest}
 */
proto.gobgpapi.AddVrfRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Vrf;
      reader.readMessage(value,proto.gobgpapi.Vrf.deserializeBinaryFromReader);
      msg.setVrf(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddVrfRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddVrfRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddVrfRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddVrfRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVrf();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Vrf.serializeBinaryToWriter
    );
  }
};


/**
 * optional Vrf vrf = 1;
 * @return {?proto.gobgpapi.Vrf}
 */
proto.gobgpapi.AddVrfRequest.prototype.getVrf = function() {
  return /** @type{?proto.gobgpapi.Vrf} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Vrf, 1));
};


/** @param {?proto.gobgpapi.Vrf|undefined} value */
proto.gobgpapi.AddVrfRequest.prototype.setVrf = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.AddVrfRequest.prototype.clearVrf = function() {
  this.setVrf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AddVrfRequest.prototype.hasVrf = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DeleteVrfRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DeleteVrfRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DeleteVrfRequest.displayName = 'proto.gobgpapi.DeleteVrfRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DeleteVrfRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DeleteVrfRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DeleteVrfRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeleteVrfRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DeleteVrfRequest}
 */
proto.gobgpapi.DeleteVrfRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DeleteVrfRequest;
  return proto.gobgpapi.DeleteVrfRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DeleteVrfRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DeleteVrfRequest}
 */
proto.gobgpapi.DeleteVrfRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DeleteVrfRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DeleteVrfRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DeleteVrfRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeleteVrfRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.gobgpapi.DeleteVrfRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.DeleteVrfRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListVrfRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListVrfRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListVrfRequest.displayName = 'proto.gobgpapi.ListVrfRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListVrfRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListVrfRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListVrfRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListVrfRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListVrfRequest}
 */
proto.gobgpapi.ListVrfRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListVrfRequest;
  return proto.gobgpapi.ListVrfRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListVrfRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListVrfRequest}
 */
proto.gobgpapi.ListVrfRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListVrfRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListVrfRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListVrfRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListVrfRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.gobgpapi.ListVrfRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.ListVrfRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListVrfResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListVrfResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListVrfResponse.displayName = 'proto.gobgpapi.ListVrfResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListVrfResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListVrfResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListVrfResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListVrfResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    vrf: (f = msg.getVrf()) && proto.gobgpapi.Vrf.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListVrfResponse}
 */
proto.gobgpapi.ListVrfResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListVrfResponse;
  return proto.gobgpapi.ListVrfResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListVrfResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListVrfResponse}
 */
proto.gobgpapi.ListVrfResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Vrf;
      reader.readMessage(value,proto.gobgpapi.Vrf.deserializeBinaryFromReader);
      msg.setVrf(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListVrfResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListVrfResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListVrfResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListVrfResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVrf();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Vrf.serializeBinaryToWriter
    );
  }
};


/**
 * optional Vrf vrf = 1;
 * @return {?proto.gobgpapi.Vrf}
 */
proto.gobgpapi.ListVrfResponse.prototype.getVrf = function() {
  return /** @type{?proto.gobgpapi.Vrf} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Vrf, 1));
};


/** @param {?proto.gobgpapi.Vrf|undefined} value */
proto.gobgpapi.ListVrfResponse.prototype.setVrf = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.ListVrfResponse.prototype.clearVrf = function() {
  this.setVrf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ListVrfResponse.prototype.hasVrf = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddPolicyRequest.displayName = 'proto.gobgpapi.AddPolicyRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    policy: (f = msg.getPolicy()) && proto.gobgpapi.Policy.toObject(includeInstance, f),
    referExistingStatements: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddPolicyRequest}
 */
proto.gobgpapi.AddPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddPolicyRequest;
  return proto.gobgpapi.AddPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddPolicyRequest}
 */
proto.gobgpapi.AddPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Policy;
      reader.readMessage(value,proto.gobgpapi.Policy.deserializeBinaryFromReader);
      msg.setPolicy(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReferExistingStatements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Policy.serializeBinaryToWriter
    );
  }
  f = message.getReferExistingStatements();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Policy policy = 1;
 * @return {?proto.gobgpapi.Policy}
 */
proto.gobgpapi.AddPolicyRequest.prototype.getPolicy = function() {
  return /** @type{?proto.gobgpapi.Policy} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Policy, 1));
};


/** @param {?proto.gobgpapi.Policy|undefined} value */
proto.gobgpapi.AddPolicyRequest.prototype.setPolicy = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.AddPolicyRequest.prototype.clearPolicy = function() {
  this.setPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AddPolicyRequest.prototype.hasPolicy = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool refer_existing_statements = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.AddPolicyRequest.prototype.getReferExistingStatements = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.AddPolicyRequest.prototype.setReferExistingStatements = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DeletePolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DeletePolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DeletePolicyRequest.displayName = 'proto.gobgpapi.DeletePolicyRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DeletePolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DeletePolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DeletePolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeletePolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    policy: (f = msg.getPolicy()) && proto.gobgpapi.Policy.toObject(includeInstance, f),
    preserveStatements: jspb.Message.getFieldWithDefault(msg, 2, false),
    all: jspb.Message.getFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DeletePolicyRequest}
 */
proto.gobgpapi.DeletePolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DeletePolicyRequest;
  return proto.gobgpapi.DeletePolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DeletePolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DeletePolicyRequest}
 */
proto.gobgpapi.DeletePolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Policy;
      reader.readMessage(value,proto.gobgpapi.Policy.deserializeBinaryFromReader);
      msg.setPolicy(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreserveStatements(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DeletePolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DeletePolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DeletePolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeletePolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Policy.serializeBinaryToWriter
    );
  }
  f = message.getPreserveStatements();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional Policy policy = 1;
 * @return {?proto.gobgpapi.Policy}
 */
proto.gobgpapi.DeletePolicyRequest.prototype.getPolicy = function() {
  return /** @type{?proto.gobgpapi.Policy} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Policy, 1));
};


/** @param {?proto.gobgpapi.Policy|undefined} value */
proto.gobgpapi.DeletePolicyRequest.prototype.setPolicy = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.DeletePolicyRequest.prototype.clearPolicy = function() {
  this.setPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.DeletePolicyRequest.prototype.hasPolicy = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool preserve_statements = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.DeletePolicyRequest.prototype.getPreserveStatements = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.DeletePolicyRequest.prototype.setPreserveStatements = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool all = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.DeletePolicyRequest.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.gobgpapi.DeletePolicyRequest.prototype.setAll = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListPolicyRequest.displayName = 'proto.gobgpapi.ListPolicyRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListPolicyRequest}
 */
proto.gobgpapi.ListPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListPolicyRequest;
  return proto.gobgpapi.ListPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListPolicyRequest}
 */
proto.gobgpapi.ListPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.gobgpapi.ListPolicyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.ListPolicyRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListPolicyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListPolicyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListPolicyResponse.displayName = 'proto.gobgpapi.ListPolicyResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListPolicyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListPolicyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListPolicyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPolicyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    policy: (f = msg.getPolicy()) && proto.gobgpapi.Policy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListPolicyResponse}
 */
proto.gobgpapi.ListPolicyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListPolicyResponse;
  return proto.gobgpapi.ListPolicyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListPolicyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListPolicyResponse}
 */
proto.gobgpapi.ListPolicyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Policy;
      reader.readMessage(value,proto.gobgpapi.Policy.deserializeBinaryFromReader);
      msg.setPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListPolicyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListPolicyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListPolicyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPolicyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Policy.serializeBinaryToWriter
    );
  }
};


/**
 * optional Policy policy = 1;
 * @return {?proto.gobgpapi.Policy}
 */
proto.gobgpapi.ListPolicyResponse.prototype.getPolicy = function() {
  return /** @type{?proto.gobgpapi.Policy} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Policy, 1));
};


/** @param {?proto.gobgpapi.Policy|undefined} value */
proto.gobgpapi.ListPolicyResponse.prototype.setPolicy = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.ListPolicyResponse.prototype.clearPolicy = function() {
  this.setPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ListPolicyResponse.prototype.hasPolicy = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.SetPoliciesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.SetPoliciesRequest.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.SetPoliciesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.SetPoliciesRequest.displayName = 'proto.gobgpapi.SetPoliciesRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.SetPoliciesRequest.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.SetPoliciesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.SetPoliciesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.SetPoliciesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.SetPoliciesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    definedSetsList: jspb.Message.toObjectList(msg.getDefinedSetsList(),
    proto.gobgpapi.DefinedSet.toObject, includeInstance),
    policiesList: jspb.Message.toObjectList(msg.getPoliciesList(),
    proto.gobgpapi.Policy.toObject, includeInstance),
    assignmentsList: jspb.Message.toObjectList(msg.getAssignmentsList(),
    proto.gobgpapi.PolicyAssignment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.SetPoliciesRequest}
 */
proto.gobgpapi.SetPoliciesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.SetPoliciesRequest;
  return proto.gobgpapi.SetPoliciesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.SetPoliciesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.SetPoliciesRequest}
 */
proto.gobgpapi.SetPoliciesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.DefinedSet;
      reader.readMessage(value,proto.gobgpapi.DefinedSet.deserializeBinaryFromReader);
      msg.addDefinedSets(value);
      break;
    case 2:
      var value = new proto.gobgpapi.Policy;
      reader.readMessage(value,proto.gobgpapi.Policy.deserializeBinaryFromReader);
      msg.addPolicies(value);
      break;
    case 3:
      var value = new proto.gobgpapi.PolicyAssignment;
      reader.readMessage(value,proto.gobgpapi.PolicyAssignment.deserializeBinaryFromReader);
      msg.addAssignments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.SetPoliciesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.SetPoliciesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.SetPoliciesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.SetPoliciesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefinedSetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.gobgpapi.DefinedSet.serializeBinaryToWriter
    );
  }
  f = message.getPoliciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.gobgpapi.Policy.serializeBinaryToWriter
    );
  }
  f = message.getAssignmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.gobgpapi.PolicyAssignment.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DefinedSet defined_sets = 1;
 * @return {!Array.<!proto.gobgpapi.DefinedSet>}
 */
proto.gobgpapi.SetPoliciesRequest.prototype.getDefinedSetsList = function() {
  return /** @type{!Array.<!proto.gobgpapi.DefinedSet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.DefinedSet, 1));
};


/** @param {!Array.<!proto.gobgpapi.DefinedSet>} value */
proto.gobgpapi.SetPoliciesRequest.prototype.setDefinedSetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.gobgpapi.DefinedSet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.DefinedSet}
 */
proto.gobgpapi.SetPoliciesRequest.prototype.addDefinedSets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gobgpapi.DefinedSet, opt_index);
};


proto.gobgpapi.SetPoliciesRequest.prototype.clearDefinedSetsList = function() {
  this.setDefinedSetsList([]);
};


/**
 * repeated Policy policies = 2;
 * @return {!Array.<!proto.gobgpapi.Policy>}
 */
proto.gobgpapi.SetPoliciesRequest.prototype.getPoliciesList = function() {
  return /** @type{!Array.<!proto.gobgpapi.Policy>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.Policy, 2));
};


/** @param {!Array.<!proto.gobgpapi.Policy>} value */
proto.gobgpapi.SetPoliciesRequest.prototype.setPoliciesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.gobgpapi.Policy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.Policy}
 */
proto.gobgpapi.SetPoliciesRequest.prototype.addPolicies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gobgpapi.Policy, opt_index);
};


proto.gobgpapi.SetPoliciesRequest.prototype.clearPoliciesList = function() {
  this.setPoliciesList([]);
};


/**
 * repeated PolicyAssignment assignments = 3;
 * @return {!Array.<!proto.gobgpapi.PolicyAssignment>}
 */
proto.gobgpapi.SetPoliciesRequest.prototype.getAssignmentsList = function() {
  return /** @type{!Array.<!proto.gobgpapi.PolicyAssignment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.PolicyAssignment, 3));
};


/** @param {!Array.<!proto.gobgpapi.PolicyAssignment>} value */
proto.gobgpapi.SetPoliciesRequest.prototype.setAssignmentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.gobgpapi.PolicyAssignment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.PolicyAssignment}
 */
proto.gobgpapi.SetPoliciesRequest.prototype.addAssignments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.gobgpapi.PolicyAssignment, opt_index);
};


proto.gobgpapi.SetPoliciesRequest.prototype.clearAssignmentsList = function() {
  this.setAssignmentsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddDefinedSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddDefinedSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddDefinedSetRequest.displayName = 'proto.gobgpapi.AddDefinedSetRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddDefinedSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddDefinedSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddDefinedSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddDefinedSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    definedSet: (f = msg.getDefinedSet()) && proto.gobgpapi.DefinedSet.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddDefinedSetRequest}
 */
proto.gobgpapi.AddDefinedSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddDefinedSetRequest;
  return proto.gobgpapi.AddDefinedSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddDefinedSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddDefinedSetRequest}
 */
proto.gobgpapi.AddDefinedSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.DefinedSet;
      reader.readMessage(value,proto.gobgpapi.DefinedSet.deserializeBinaryFromReader);
      msg.setDefinedSet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddDefinedSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddDefinedSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddDefinedSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddDefinedSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefinedSet();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.DefinedSet.serializeBinaryToWriter
    );
  }
};


/**
 * optional DefinedSet defined_set = 1;
 * @return {?proto.gobgpapi.DefinedSet}
 */
proto.gobgpapi.AddDefinedSetRequest.prototype.getDefinedSet = function() {
  return /** @type{?proto.gobgpapi.DefinedSet} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.DefinedSet, 1));
};


/** @param {?proto.gobgpapi.DefinedSet|undefined} value */
proto.gobgpapi.AddDefinedSetRequest.prototype.setDefinedSet = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.AddDefinedSetRequest.prototype.clearDefinedSet = function() {
  this.setDefinedSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AddDefinedSetRequest.prototype.hasDefinedSet = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DeleteDefinedSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DeleteDefinedSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DeleteDefinedSetRequest.displayName = 'proto.gobgpapi.DeleteDefinedSetRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DeleteDefinedSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DeleteDefinedSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DeleteDefinedSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeleteDefinedSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    definedSet: (f = msg.getDefinedSet()) && proto.gobgpapi.DefinedSet.toObject(includeInstance, f),
    all: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DeleteDefinedSetRequest}
 */
proto.gobgpapi.DeleteDefinedSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DeleteDefinedSetRequest;
  return proto.gobgpapi.DeleteDefinedSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DeleteDefinedSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DeleteDefinedSetRequest}
 */
proto.gobgpapi.DeleteDefinedSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.DefinedSet;
      reader.readMessage(value,proto.gobgpapi.DefinedSet.deserializeBinaryFromReader);
      msg.setDefinedSet(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DeleteDefinedSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DeleteDefinedSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DeleteDefinedSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeleteDefinedSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefinedSet();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.DefinedSet.serializeBinaryToWriter
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional DefinedSet defined_set = 1;
 * @return {?proto.gobgpapi.DefinedSet}
 */
proto.gobgpapi.DeleteDefinedSetRequest.prototype.getDefinedSet = function() {
  return /** @type{?proto.gobgpapi.DefinedSet} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.DefinedSet, 1));
};


/** @param {?proto.gobgpapi.DefinedSet|undefined} value */
proto.gobgpapi.DeleteDefinedSetRequest.prototype.setDefinedSet = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.DeleteDefinedSetRequest.prototype.clearDefinedSet = function() {
  this.setDefinedSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.DeleteDefinedSetRequest.prototype.hasDefinedSet = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool all = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.DeleteDefinedSetRequest.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.DeleteDefinedSetRequest.prototype.setAll = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListDefinedSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListDefinedSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListDefinedSetRequest.displayName = 'proto.gobgpapi.ListDefinedSetRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListDefinedSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListDefinedSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListDefinedSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListDefinedSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListDefinedSetRequest}
 */
proto.gobgpapi.ListDefinedSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListDefinedSetRequest;
  return proto.gobgpapi.ListDefinedSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListDefinedSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListDefinedSetRequest}
 */
proto.gobgpapi.ListDefinedSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.DefinedType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListDefinedSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListDefinedSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListDefinedSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListDefinedSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional DefinedType type = 1;
 * @return {!proto.gobgpapi.DefinedType}
 */
proto.gobgpapi.ListDefinedSetRequest.prototype.getType = function() {
  return /** @type {!proto.gobgpapi.DefinedType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.DefinedType} value */
proto.gobgpapi.ListDefinedSetRequest.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.gobgpapi.ListDefinedSetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.ListDefinedSetRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListDefinedSetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListDefinedSetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListDefinedSetResponse.displayName = 'proto.gobgpapi.ListDefinedSetResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListDefinedSetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListDefinedSetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListDefinedSetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListDefinedSetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    definedSet: (f = msg.getDefinedSet()) && proto.gobgpapi.DefinedSet.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListDefinedSetResponse}
 */
proto.gobgpapi.ListDefinedSetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListDefinedSetResponse;
  return proto.gobgpapi.ListDefinedSetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListDefinedSetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListDefinedSetResponse}
 */
proto.gobgpapi.ListDefinedSetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.DefinedSet;
      reader.readMessage(value,proto.gobgpapi.DefinedSet.deserializeBinaryFromReader);
      msg.setDefinedSet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListDefinedSetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListDefinedSetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListDefinedSetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListDefinedSetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefinedSet();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.DefinedSet.serializeBinaryToWriter
    );
  }
};


/**
 * optional DefinedSet defined_set = 1;
 * @return {?proto.gobgpapi.DefinedSet}
 */
proto.gobgpapi.ListDefinedSetResponse.prototype.getDefinedSet = function() {
  return /** @type{?proto.gobgpapi.DefinedSet} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.DefinedSet, 1));
};


/** @param {?proto.gobgpapi.DefinedSet|undefined} value */
proto.gobgpapi.ListDefinedSetResponse.prototype.setDefinedSet = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.ListDefinedSetResponse.prototype.clearDefinedSet = function() {
  this.setDefinedSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ListDefinedSetResponse.prototype.hasDefinedSet = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddStatementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddStatementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddStatementRequest.displayName = 'proto.gobgpapi.AddStatementRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddStatementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddStatementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddStatementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddStatementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    statement: (f = msg.getStatement()) && proto.gobgpapi.Statement.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddStatementRequest}
 */
proto.gobgpapi.AddStatementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddStatementRequest;
  return proto.gobgpapi.AddStatementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddStatementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddStatementRequest}
 */
proto.gobgpapi.AddStatementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Statement;
      reader.readMessage(value,proto.gobgpapi.Statement.deserializeBinaryFromReader);
      msg.setStatement(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddStatementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddStatementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddStatementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddStatementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatement();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Statement.serializeBinaryToWriter
    );
  }
};


/**
 * optional Statement statement = 1;
 * @return {?proto.gobgpapi.Statement}
 */
proto.gobgpapi.AddStatementRequest.prototype.getStatement = function() {
  return /** @type{?proto.gobgpapi.Statement} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Statement, 1));
};


/** @param {?proto.gobgpapi.Statement|undefined} value */
proto.gobgpapi.AddStatementRequest.prototype.setStatement = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.AddStatementRequest.prototype.clearStatement = function() {
  this.setStatement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AddStatementRequest.prototype.hasStatement = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DeleteStatementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DeleteStatementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DeleteStatementRequest.displayName = 'proto.gobgpapi.DeleteStatementRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DeleteStatementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DeleteStatementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DeleteStatementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeleteStatementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    statement: (f = msg.getStatement()) && proto.gobgpapi.Statement.toObject(includeInstance, f),
    all: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DeleteStatementRequest}
 */
proto.gobgpapi.DeleteStatementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DeleteStatementRequest;
  return proto.gobgpapi.DeleteStatementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DeleteStatementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DeleteStatementRequest}
 */
proto.gobgpapi.DeleteStatementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Statement;
      reader.readMessage(value,proto.gobgpapi.Statement.deserializeBinaryFromReader);
      msg.setStatement(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DeleteStatementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DeleteStatementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DeleteStatementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeleteStatementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatement();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Statement.serializeBinaryToWriter
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Statement statement = 1;
 * @return {?proto.gobgpapi.Statement}
 */
proto.gobgpapi.DeleteStatementRequest.prototype.getStatement = function() {
  return /** @type{?proto.gobgpapi.Statement} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Statement, 1));
};


/** @param {?proto.gobgpapi.Statement|undefined} value */
proto.gobgpapi.DeleteStatementRequest.prototype.setStatement = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.DeleteStatementRequest.prototype.clearStatement = function() {
  this.setStatement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.DeleteStatementRequest.prototype.hasStatement = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool all = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.DeleteStatementRequest.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.DeleteStatementRequest.prototype.setAll = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListStatementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListStatementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListStatementRequest.displayName = 'proto.gobgpapi.ListStatementRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListStatementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListStatementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListStatementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListStatementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListStatementRequest}
 */
proto.gobgpapi.ListStatementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListStatementRequest;
  return proto.gobgpapi.ListStatementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListStatementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListStatementRequest}
 */
proto.gobgpapi.ListStatementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListStatementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListStatementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListStatementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListStatementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.gobgpapi.ListStatementRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.ListStatementRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListStatementResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListStatementResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListStatementResponse.displayName = 'proto.gobgpapi.ListStatementResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListStatementResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListStatementResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListStatementResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListStatementResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    statement: (f = msg.getStatement()) && proto.gobgpapi.Statement.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListStatementResponse}
 */
proto.gobgpapi.ListStatementResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListStatementResponse;
  return proto.gobgpapi.ListStatementResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListStatementResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListStatementResponse}
 */
proto.gobgpapi.ListStatementResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Statement;
      reader.readMessage(value,proto.gobgpapi.Statement.deserializeBinaryFromReader);
      msg.setStatement(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListStatementResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListStatementResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListStatementResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListStatementResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatement();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Statement.serializeBinaryToWriter
    );
  }
};


/**
 * optional Statement statement = 1;
 * @return {?proto.gobgpapi.Statement}
 */
proto.gobgpapi.ListStatementResponse.prototype.getStatement = function() {
  return /** @type{?proto.gobgpapi.Statement} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Statement, 1));
};


/** @param {?proto.gobgpapi.Statement|undefined} value */
proto.gobgpapi.ListStatementResponse.prototype.setStatement = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.ListStatementResponse.prototype.clearStatement = function() {
  this.setStatement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ListStatementResponse.prototype.hasStatement = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddPolicyAssignmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddPolicyAssignmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddPolicyAssignmentRequest.displayName = 'proto.gobgpapi.AddPolicyAssignmentRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddPolicyAssignmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddPolicyAssignmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddPolicyAssignmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPolicyAssignmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assignment: (f = msg.getAssignment()) && proto.gobgpapi.PolicyAssignment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddPolicyAssignmentRequest}
 */
proto.gobgpapi.AddPolicyAssignmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddPolicyAssignmentRequest;
  return proto.gobgpapi.AddPolicyAssignmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddPolicyAssignmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddPolicyAssignmentRequest}
 */
proto.gobgpapi.AddPolicyAssignmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.PolicyAssignment;
      reader.readMessage(value,proto.gobgpapi.PolicyAssignment.deserializeBinaryFromReader);
      msg.setAssignment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddPolicyAssignmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddPolicyAssignmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddPolicyAssignmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPolicyAssignmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssignment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.PolicyAssignment.serializeBinaryToWriter
    );
  }
};


/**
 * optional PolicyAssignment assignment = 1;
 * @return {?proto.gobgpapi.PolicyAssignment}
 */
proto.gobgpapi.AddPolicyAssignmentRequest.prototype.getAssignment = function() {
  return /** @type{?proto.gobgpapi.PolicyAssignment} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.PolicyAssignment, 1));
};


/** @param {?proto.gobgpapi.PolicyAssignment|undefined} value */
proto.gobgpapi.AddPolicyAssignmentRequest.prototype.setAssignment = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.AddPolicyAssignmentRequest.prototype.clearAssignment = function() {
  this.setAssignment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AddPolicyAssignmentRequest.prototype.hasAssignment = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DeletePolicyAssignmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DeletePolicyAssignmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DeletePolicyAssignmentRequest.displayName = 'proto.gobgpapi.DeletePolicyAssignmentRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DeletePolicyAssignmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DeletePolicyAssignmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DeletePolicyAssignmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeletePolicyAssignmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assignment: (f = msg.getAssignment()) && proto.gobgpapi.PolicyAssignment.toObject(includeInstance, f),
    all: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DeletePolicyAssignmentRequest}
 */
proto.gobgpapi.DeletePolicyAssignmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DeletePolicyAssignmentRequest;
  return proto.gobgpapi.DeletePolicyAssignmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DeletePolicyAssignmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DeletePolicyAssignmentRequest}
 */
proto.gobgpapi.DeletePolicyAssignmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.PolicyAssignment;
      reader.readMessage(value,proto.gobgpapi.PolicyAssignment.deserializeBinaryFromReader);
      msg.setAssignment(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DeletePolicyAssignmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DeletePolicyAssignmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DeletePolicyAssignmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeletePolicyAssignmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssignment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.PolicyAssignment.serializeBinaryToWriter
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional PolicyAssignment assignment = 1;
 * @return {?proto.gobgpapi.PolicyAssignment}
 */
proto.gobgpapi.DeletePolicyAssignmentRequest.prototype.getAssignment = function() {
  return /** @type{?proto.gobgpapi.PolicyAssignment} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.PolicyAssignment, 1));
};


/** @param {?proto.gobgpapi.PolicyAssignment|undefined} value */
proto.gobgpapi.DeletePolicyAssignmentRequest.prototype.setAssignment = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.DeletePolicyAssignmentRequest.prototype.clearAssignment = function() {
  this.setAssignment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.DeletePolicyAssignmentRequest.prototype.hasAssignment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool all = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.DeletePolicyAssignmentRequest.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.DeletePolicyAssignmentRequest.prototype.setAll = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListPolicyAssignmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListPolicyAssignmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListPolicyAssignmentRequest.displayName = 'proto.gobgpapi.ListPolicyAssignmentRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListPolicyAssignmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListPolicyAssignmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListPolicyAssignmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPolicyAssignmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListPolicyAssignmentRequest}
 */
proto.gobgpapi.ListPolicyAssignmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListPolicyAssignmentRequest;
  return proto.gobgpapi.ListPolicyAssignmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListPolicyAssignmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListPolicyAssignmentRequest}
 */
proto.gobgpapi.ListPolicyAssignmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.gobgpapi.PolicyDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListPolicyAssignmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListPolicyAssignmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListPolicyAssignmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPolicyAssignmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.gobgpapi.ListPolicyAssignmentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.ListPolicyAssignmentRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PolicyDirection direction = 2;
 * @return {!proto.gobgpapi.PolicyDirection}
 */
proto.gobgpapi.ListPolicyAssignmentRequest.prototype.getDirection = function() {
  return /** @type {!proto.gobgpapi.PolicyDirection} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.gobgpapi.PolicyDirection} value */
proto.gobgpapi.ListPolicyAssignmentRequest.prototype.setDirection = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListPolicyAssignmentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListPolicyAssignmentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListPolicyAssignmentResponse.displayName = 'proto.gobgpapi.ListPolicyAssignmentResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListPolicyAssignmentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListPolicyAssignmentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListPolicyAssignmentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPolicyAssignmentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    assignment: (f = msg.getAssignment()) && proto.gobgpapi.PolicyAssignment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListPolicyAssignmentResponse}
 */
proto.gobgpapi.ListPolicyAssignmentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListPolicyAssignmentResponse;
  return proto.gobgpapi.ListPolicyAssignmentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListPolicyAssignmentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListPolicyAssignmentResponse}
 */
proto.gobgpapi.ListPolicyAssignmentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.PolicyAssignment;
      reader.readMessage(value,proto.gobgpapi.PolicyAssignment.deserializeBinaryFromReader);
      msg.setAssignment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListPolicyAssignmentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListPolicyAssignmentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListPolicyAssignmentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListPolicyAssignmentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssignment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.PolicyAssignment.serializeBinaryToWriter
    );
  }
};


/**
 * optional PolicyAssignment assignment = 1;
 * @return {?proto.gobgpapi.PolicyAssignment}
 */
proto.gobgpapi.ListPolicyAssignmentResponse.prototype.getAssignment = function() {
  return /** @type{?proto.gobgpapi.PolicyAssignment} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.PolicyAssignment, 1));
};


/** @param {?proto.gobgpapi.PolicyAssignment|undefined} value */
proto.gobgpapi.ListPolicyAssignmentResponse.prototype.setAssignment = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.ListPolicyAssignmentResponse.prototype.clearAssignment = function() {
  this.setAssignment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ListPolicyAssignmentResponse.prototype.hasAssignment = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.SetPolicyAssignmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.SetPolicyAssignmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.SetPolicyAssignmentRequest.displayName = 'proto.gobgpapi.SetPolicyAssignmentRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.SetPolicyAssignmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.SetPolicyAssignmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.SetPolicyAssignmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.SetPolicyAssignmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assignment: (f = msg.getAssignment()) && proto.gobgpapi.PolicyAssignment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.SetPolicyAssignmentRequest}
 */
proto.gobgpapi.SetPolicyAssignmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.SetPolicyAssignmentRequest;
  return proto.gobgpapi.SetPolicyAssignmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.SetPolicyAssignmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.SetPolicyAssignmentRequest}
 */
proto.gobgpapi.SetPolicyAssignmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.PolicyAssignment;
      reader.readMessage(value,proto.gobgpapi.PolicyAssignment.deserializeBinaryFromReader);
      msg.setAssignment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.SetPolicyAssignmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.SetPolicyAssignmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.SetPolicyAssignmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.SetPolicyAssignmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssignment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.PolicyAssignment.serializeBinaryToWriter
    );
  }
};


/**
 * optional PolicyAssignment assignment = 1;
 * @return {?proto.gobgpapi.PolicyAssignment}
 */
proto.gobgpapi.SetPolicyAssignmentRequest.prototype.getAssignment = function() {
  return /** @type{?proto.gobgpapi.PolicyAssignment} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.PolicyAssignment, 1));
};


/** @param {?proto.gobgpapi.PolicyAssignment|undefined} value */
proto.gobgpapi.SetPolicyAssignmentRequest.prototype.setAssignment = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.SetPolicyAssignmentRequest.prototype.clearAssignment = function() {
  this.setAssignment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.SetPolicyAssignmentRequest.prototype.hasAssignment = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddRpkiRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddRpkiRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddRpkiRequest.displayName = 'proto.gobgpapi.AddRpkiRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddRpkiRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddRpkiRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddRpkiRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddRpkiRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lifetime: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddRpkiRequest}
 */
proto.gobgpapi.AddRpkiRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddRpkiRequest;
  return proto.gobgpapi.AddRpkiRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddRpkiRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddRpkiRequest}
 */
proto.gobgpapi.AddRpkiRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLifetime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddRpkiRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddRpkiRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddRpkiRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddRpkiRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getLifetime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.AddRpkiRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.AddRpkiRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.gobgpapi.AddRpkiRequest.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.AddRpkiRequest.prototype.setPort = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 lifetime = 3;
 * @return {number}
 */
proto.gobgpapi.AddRpkiRequest.prototype.getLifetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.AddRpkiRequest.prototype.setLifetime = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DeleteRpkiRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DeleteRpkiRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DeleteRpkiRequest.displayName = 'proto.gobgpapi.DeleteRpkiRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DeleteRpkiRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DeleteRpkiRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DeleteRpkiRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeleteRpkiRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DeleteRpkiRequest}
 */
proto.gobgpapi.DeleteRpkiRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DeleteRpkiRequest;
  return proto.gobgpapi.DeleteRpkiRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DeleteRpkiRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DeleteRpkiRequest}
 */
proto.gobgpapi.DeleteRpkiRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DeleteRpkiRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DeleteRpkiRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DeleteRpkiRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeleteRpkiRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.DeleteRpkiRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.DeleteRpkiRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.gobgpapi.DeleteRpkiRequest.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.DeleteRpkiRequest.prototype.setPort = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListRpkiRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListRpkiRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListRpkiRequest.displayName = 'proto.gobgpapi.ListRpkiRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListRpkiRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListRpkiRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListRpkiRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListRpkiRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    family: (f = msg.getFamily()) && proto.gobgpapi.Family.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListRpkiRequest}
 */
proto.gobgpapi.ListRpkiRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListRpkiRequest;
  return proto.gobgpapi.ListRpkiRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListRpkiRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListRpkiRequest}
 */
proto.gobgpapi.ListRpkiRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Family;
      reader.readMessage(value,proto.gobgpapi.Family.deserializeBinaryFromReader);
      msg.setFamily(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListRpkiRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListRpkiRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListRpkiRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListRpkiRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFamily();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Family.serializeBinaryToWriter
    );
  }
};


/**
 * optional Family family = 1;
 * @return {?proto.gobgpapi.Family}
 */
proto.gobgpapi.ListRpkiRequest.prototype.getFamily = function() {
  return /** @type{?proto.gobgpapi.Family} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Family, 1));
};


/** @param {?proto.gobgpapi.Family|undefined} value */
proto.gobgpapi.ListRpkiRequest.prototype.setFamily = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.ListRpkiRequest.prototype.clearFamily = function() {
  this.setFamily(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ListRpkiRequest.prototype.hasFamily = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListRpkiResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListRpkiResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListRpkiResponse.displayName = 'proto.gobgpapi.ListRpkiResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListRpkiResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListRpkiResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListRpkiResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListRpkiResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    server: (f = msg.getServer()) && proto.gobgpapi.Rpki.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListRpkiResponse}
 */
proto.gobgpapi.ListRpkiResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListRpkiResponse;
  return proto.gobgpapi.ListRpkiResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListRpkiResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListRpkiResponse}
 */
proto.gobgpapi.ListRpkiResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Rpki;
      reader.readMessage(value,proto.gobgpapi.Rpki.deserializeBinaryFromReader);
      msg.setServer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListRpkiResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListRpkiResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListRpkiResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListRpkiResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Rpki.serializeBinaryToWriter
    );
  }
};


/**
 * optional Rpki server = 1;
 * @return {?proto.gobgpapi.Rpki}
 */
proto.gobgpapi.ListRpkiResponse.prototype.getServer = function() {
  return /** @type{?proto.gobgpapi.Rpki} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Rpki, 1));
};


/** @param {?proto.gobgpapi.Rpki|undefined} value */
proto.gobgpapi.ListRpkiResponse.prototype.setServer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.ListRpkiResponse.prototype.clearServer = function() {
  this.setServer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ListRpkiResponse.prototype.hasServer = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.EnableRpkiRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.EnableRpkiRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.EnableRpkiRequest.displayName = 'proto.gobgpapi.EnableRpkiRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.EnableRpkiRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.EnableRpkiRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.EnableRpkiRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.EnableRpkiRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.EnableRpkiRequest}
 */
proto.gobgpapi.EnableRpkiRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.EnableRpkiRequest;
  return proto.gobgpapi.EnableRpkiRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.EnableRpkiRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.EnableRpkiRequest}
 */
proto.gobgpapi.EnableRpkiRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.EnableRpkiRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.EnableRpkiRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.EnableRpkiRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.EnableRpkiRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.EnableRpkiRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.EnableRpkiRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.gobgpapi.EnableRpkiRequest.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.EnableRpkiRequest.prototype.setPort = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DisableRpkiRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DisableRpkiRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DisableRpkiRequest.displayName = 'proto.gobgpapi.DisableRpkiRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DisableRpkiRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DisableRpkiRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DisableRpkiRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DisableRpkiRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DisableRpkiRequest}
 */
proto.gobgpapi.DisableRpkiRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DisableRpkiRequest;
  return proto.gobgpapi.DisableRpkiRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DisableRpkiRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DisableRpkiRequest}
 */
proto.gobgpapi.DisableRpkiRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DisableRpkiRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DisableRpkiRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DisableRpkiRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DisableRpkiRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.DisableRpkiRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.DisableRpkiRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.gobgpapi.DisableRpkiRequest.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.DisableRpkiRequest.prototype.setPort = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ResetRpkiRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ResetRpkiRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ResetRpkiRequest.displayName = 'proto.gobgpapi.ResetRpkiRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ResetRpkiRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ResetRpkiRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ResetRpkiRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ResetRpkiRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    soft: jspb.Message.getFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ResetRpkiRequest}
 */
proto.gobgpapi.ResetRpkiRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ResetRpkiRequest;
  return proto.gobgpapi.ResetRpkiRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ResetRpkiRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ResetRpkiRequest}
 */
proto.gobgpapi.ResetRpkiRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSoft(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ResetRpkiRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ResetRpkiRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ResetRpkiRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ResetRpkiRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSoft();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.ResetRpkiRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.ResetRpkiRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.gobgpapi.ResetRpkiRequest.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.ResetRpkiRequest.prototype.setPort = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool soft = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.ResetRpkiRequest.prototype.getSoft = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.gobgpapi.ResetRpkiRequest.prototype.setSoft = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListRpkiTableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListRpkiTableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListRpkiTableRequest.displayName = 'proto.gobgpapi.ListRpkiTableRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListRpkiTableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListRpkiTableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListRpkiTableRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListRpkiTableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    family: (f = msg.getFamily()) && proto.gobgpapi.Family.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListRpkiTableRequest}
 */
proto.gobgpapi.ListRpkiTableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListRpkiTableRequest;
  return proto.gobgpapi.ListRpkiTableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListRpkiTableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListRpkiTableRequest}
 */
proto.gobgpapi.ListRpkiTableRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Family;
      reader.readMessage(value,proto.gobgpapi.Family.deserializeBinaryFromReader);
      msg.setFamily(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListRpkiTableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListRpkiTableRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListRpkiTableRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListRpkiTableRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFamily();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Family.serializeBinaryToWriter
    );
  }
};


/**
 * optional Family family = 1;
 * @return {?proto.gobgpapi.Family}
 */
proto.gobgpapi.ListRpkiTableRequest.prototype.getFamily = function() {
  return /** @type{?proto.gobgpapi.Family} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Family, 1));
};


/** @param {?proto.gobgpapi.Family|undefined} value */
proto.gobgpapi.ListRpkiTableRequest.prototype.setFamily = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.ListRpkiTableRequest.prototype.clearFamily = function() {
  this.setFamily(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ListRpkiTableRequest.prototype.hasFamily = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ListRpkiTableResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ListRpkiTableResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ListRpkiTableResponse.displayName = 'proto.gobgpapi.ListRpkiTableResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ListRpkiTableResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ListRpkiTableResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ListRpkiTableResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListRpkiTableResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    roa: (f = msg.getRoa()) && proto.gobgpapi.Roa.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ListRpkiTableResponse}
 */
proto.gobgpapi.ListRpkiTableResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ListRpkiTableResponse;
  return proto.gobgpapi.ListRpkiTableResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ListRpkiTableResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ListRpkiTableResponse}
 */
proto.gobgpapi.ListRpkiTableResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Roa;
      reader.readMessage(value,proto.gobgpapi.Roa.deserializeBinaryFromReader);
      msg.setRoa(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ListRpkiTableResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ListRpkiTableResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ListRpkiTableResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ListRpkiTableResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoa();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Roa.serializeBinaryToWriter
    );
  }
};


/**
 * optional Roa roa = 1;
 * @return {?proto.gobgpapi.Roa}
 */
proto.gobgpapi.ListRpkiTableResponse.prototype.getRoa = function() {
  return /** @type{?proto.gobgpapi.Roa} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Roa, 1));
};


/** @param {?proto.gobgpapi.Roa|undefined} value */
proto.gobgpapi.ListRpkiTableResponse.prototype.setRoa = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.ListRpkiTableResponse.prototype.clearRoa = function() {
  this.setRoa(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ListRpkiTableResponse.prototype.hasRoa = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.EnableZebraRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.EnableZebraRequest.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.EnableZebraRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.EnableZebraRequest.displayName = 'proto.gobgpapi.EnableZebraRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.EnableZebraRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.EnableZebraRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.EnableZebraRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.EnableZebraRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.EnableZebraRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    routeTypesList: jspb.Message.getRepeatedField(msg, 2),
    version: jspb.Message.getFieldWithDefault(msg, 3, 0),
    nexthopTriggerEnable: jspb.Message.getFieldWithDefault(msg, 4, false),
    nexthopTriggerDelay: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.EnableZebraRequest}
 */
proto.gobgpapi.EnableZebraRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.EnableZebraRequest;
  return proto.gobgpapi.EnableZebraRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.EnableZebraRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.EnableZebraRequest}
 */
proto.gobgpapi.EnableZebraRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRouteTypes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNexthopTriggerEnable(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNexthopTriggerDelay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.EnableZebraRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.EnableZebraRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.EnableZebraRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.EnableZebraRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRouteTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getNexthopTriggerEnable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getNexthopTriggerDelay();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.gobgpapi.EnableZebraRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.EnableZebraRequest.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string route_types = 2;
 * @return {!Array.<string>}
 */
proto.gobgpapi.EnableZebraRequest.prototype.getRouteTypesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array.<string>} value */
proto.gobgpapi.EnableZebraRequest.prototype.setRouteTypesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.gobgpapi.EnableZebraRequest.prototype.addRouteTypes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.gobgpapi.EnableZebraRequest.prototype.clearRouteTypesList = function() {
  this.setRouteTypesList([]);
};


/**
 * optional uint32 version = 3;
 * @return {number}
 */
proto.gobgpapi.EnableZebraRequest.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.EnableZebraRequest.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool nexthop_trigger_enable = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.EnableZebraRequest.prototype.getNexthopTriggerEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.gobgpapi.EnableZebraRequest.prototype.setNexthopTriggerEnable = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional uint32 nexthop_trigger_delay = 5;
 * @return {number}
 */
proto.gobgpapi.EnableZebraRequest.prototype.getNexthopTriggerDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.gobgpapi.EnableZebraRequest.prototype.setNexthopTriggerDelay = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.EnableMrtRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.EnableMrtRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.EnableMrtRequest.displayName = 'proto.gobgpapi.EnableMrtRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.EnableMrtRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.EnableMrtRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.EnableMrtRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.EnableMrtRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dumpType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    filename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    interval: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.EnableMrtRequest}
 */
proto.gobgpapi.EnableMrtRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.EnableMrtRequest;
  return proto.gobgpapi.EnableMrtRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.EnableMrtRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.EnableMrtRequest}
 */
proto.gobgpapi.EnableMrtRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDumpType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setInterval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.EnableMrtRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.EnableMrtRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.EnableMrtRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.EnableMrtRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDumpType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional int32 dump_type = 1;
 * @return {number}
 */
proto.gobgpapi.EnableMrtRequest.prototype.getDumpType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.EnableMrtRequest.prototype.setDumpType = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string filename = 2;
 * @return {string}
 */
proto.gobgpapi.EnableMrtRequest.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.EnableMrtRequest.prototype.setFilename = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 interval = 3;
 * @return {number}
 */
proto.gobgpapi.EnableMrtRequest.prototype.getInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.EnableMrtRequest.prototype.setInterval = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DisableMrtRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DisableMrtRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DisableMrtRequest.displayName = 'proto.gobgpapi.DisableMrtRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DisableMrtRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DisableMrtRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DisableMrtRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DisableMrtRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DisableMrtRequest}
 */
proto.gobgpapi.DisableMrtRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DisableMrtRequest;
  return proto.gobgpapi.DisableMrtRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DisableMrtRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DisableMrtRequest}
 */
proto.gobgpapi.DisableMrtRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DisableMrtRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DisableMrtRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DisableMrtRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DisableMrtRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddBmpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddBmpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddBmpRequest.displayName = 'proto.gobgpapi.AddBmpRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddBmpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddBmpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddBmpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddBmpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddBmpRequest}
 */
proto.gobgpapi.AddBmpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddBmpRequest;
  return proto.gobgpapi.AddBmpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddBmpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddBmpRequest}
 */
proto.gobgpapi.AddBmpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {!proto.gobgpapi.AddBmpRequest.MonitoringPolicy} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddBmpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddBmpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddBmpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddBmpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.gobgpapi.AddBmpRequest.MonitoringPolicy = {
  PRE: 0,
  POST: 1,
  BOTH: 2,
  LOCAL: 3,
  ALL: 4
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.AddBmpRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.AddBmpRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.gobgpapi.AddBmpRequest.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.AddBmpRequest.prototype.setPort = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional MonitoringPolicy type = 3;
 * @return {!proto.gobgpapi.AddBmpRequest.MonitoringPolicy}
 */
proto.gobgpapi.AddBmpRequest.prototype.getType = function() {
  return /** @type {!proto.gobgpapi.AddBmpRequest.MonitoringPolicy} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.gobgpapi.AddBmpRequest.MonitoringPolicy} value */
proto.gobgpapi.AddBmpRequest.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DeleteBmpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DeleteBmpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DeleteBmpRequest.displayName = 'proto.gobgpapi.DeleteBmpRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DeleteBmpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DeleteBmpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DeleteBmpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeleteBmpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DeleteBmpRequest}
 */
proto.gobgpapi.DeleteBmpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DeleteBmpRequest;
  return proto.gobgpapi.DeleteBmpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DeleteBmpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DeleteBmpRequest}
 */
proto.gobgpapi.DeleteBmpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DeleteBmpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DeleteBmpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DeleteBmpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DeleteBmpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.DeleteBmpRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.DeleteBmpRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.gobgpapi.DeleteBmpRequest.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.DeleteBmpRequest.prototype.setPort = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Family = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.Family, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Family.displayName = 'proto.gobgpapi.Family';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Family.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Family.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Family} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Family.toObject = function(includeInstance, msg) {
  var f, obj = {
    afi: jspb.Message.getFieldWithDefault(msg, 1, 0),
    safi: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Family}
 */
proto.gobgpapi.Family.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Family;
  return proto.gobgpapi.Family.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Family} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Family}
 */
proto.gobgpapi.Family.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.Family.Afi} */ (reader.readEnum());
      msg.setAfi(value);
      break;
    case 2:
      var value = /** @type {!proto.gobgpapi.Family.Safi} */ (reader.readEnum());
      msg.setSafi(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Family.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Family.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Family} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Family.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAfi();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSafi();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.gobgpapi.Family.Afi = {
  AFI_UNKNOWN: 0,
  AFI_IP: 1,
  AFI_IP6: 2,
  AFI_L2VPN: 25,
  AFI_OPAQUE: 16397
};

/**
 * @enum {number}
 */
proto.gobgpapi.Family.Safi = {
  SAFI_UNKNOWN: 0,
  SAFI_UNICAST: 1,
  SAFI_MULTICAST: 2,
  SAFI_MPLS_LABEL: 4,
  SAFI_ENCAPSULATION: 7,
  SAFI_VPLS: 65,
  SAFI_EVPN: 70,
  SAFI_MPLS_VPN: 128,
  SAFI_MPLS_VPN_MULTICAST: 129,
  SAFI_ROUTE_TARGET_CONSTRAINTS: 132,
  SAFI_FLOW_SPEC_UNICAST: 133,
  SAFI_FLOW_SPEC_VPN: 134,
  SAFI_KEY_VALUE: 241
};

/**
 * optional Afi afi = 1;
 * @return {!proto.gobgpapi.Family.Afi}
 */
proto.gobgpapi.Family.prototype.getAfi = function() {
  return /** @type {!proto.gobgpapi.Family.Afi} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.Family.Afi} value */
proto.gobgpapi.Family.prototype.setAfi = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Safi safi = 2;
 * @return {!proto.gobgpapi.Family.Safi}
 */
proto.gobgpapi.Family.prototype.getSafi = function() {
  return /** @type {!proto.gobgpapi.Family.Safi} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.gobgpapi.Family.Safi} value */
proto.gobgpapi.Family.prototype.setSafi = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.RPKIValidation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.RPKIValidation.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.RPKIValidation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.RPKIValidation.displayName = 'proto.gobgpapi.RPKIValidation';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.RPKIValidation.repeatedFields_ = [3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.RPKIValidation.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.RPKIValidation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.RPKIValidation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RPKIValidation.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 2, 0),
    matchedList: jspb.Message.toObjectList(msg.getMatchedList(),
    proto.gobgpapi.Roa.toObject, includeInstance),
    unmatchedAsList: jspb.Message.toObjectList(msg.getUnmatchedAsList(),
    proto.gobgpapi.Roa.toObject, includeInstance),
    unmatchedLengthList: jspb.Message.toObjectList(msg.getUnmatchedLengthList(),
    proto.gobgpapi.Roa.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.RPKIValidation}
 */
proto.gobgpapi.RPKIValidation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.RPKIValidation;
  return proto.gobgpapi.RPKIValidation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.RPKIValidation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.RPKIValidation}
 */
proto.gobgpapi.RPKIValidation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.RPKIValidation.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {!proto.gobgpapi.RPKIValidation.Reason} */ (reader.readEnum());
      msg.setReason(value);
      break;
    case 3:
      var value = new proto.gobgpapi.Roa;
      reader.readMessage(value,proto.gobgpapi.Roa.deserializeBinaryFromReader);
      msg.addMatched(value);
      break;
    case 4:
      var value = new proto.gobgpapi.Roa;
      reader.readMessage(value,proto.gobgpapi.Roa.deserializeBinaryFromReader);
      msg.addUnmatchedAs(value);
      break;
    case 5:
      var value = new proto.gobgpapi.Roa;
      reader.readMessage(value,proto.gobgpapi.Roa.deserializeBinaryFromReader);
      msg.addUnmatchedLength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.RPKIValidation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.RPKIValidation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.RPKIValidation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RPKIValidation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMatchedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.gobgpapi.Roa.serializeBinaryToWriter
    );
  }
  f = message.getUnmatchedAsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.gobgpapi.Roa.serializeBinaryToWriter
    );
  }
  f = message.getUnmatchedLengthList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.gobgpapi.Roa.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.gobgpapi.RPKIValidation.State = {
  STATE_NONE: 0,
  STATE_NOT_FOUND: 1,
  STATE_VALID: 2,
  STATE_INVALID: 3
};

/**
 * @enum {number}
 */
proto.gobgpapi.RPKIValidation.Reason = {
  REASOT_NONE: 0,
  REASON_AS: 1,
  REASON_LENGTH: 2
};

/**
 * optional State state = 1;
 * @return {!proto.gobgpapi.RPKIValidation.State}
 */
proto.gobgpapi.RPKIValidation.prototype.getState = function() {
  return /** @type {!proto.gobgpapi.RPKIValidation.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.RPKIValidation.State} value */
proto.gobgpapi.RPKIValidation.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Reason reason = 2;
 * @return {!proto.gobgpapi.RPKIValidation.Reason}
 */
proto.gobgpapi.RPKIValidation.prototype.getReason = function() {
  return /** @type {!proto.gobgpapi.RPKIValidation.Reason} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.gobgpapi.RPKIValidation.Reason} value */
proto.gobgpapi.RPKIValidation.prototype.setReason = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Roa matched = 3;
 * @return {!Array.<!proto.gobgpapi.Roa>}
 */
proto.gobgpapi.RPKIValidation.prototype.getMatchedList = function() {
  return /** @type{!Array.<!proto.gobgpapi.Roa>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.Roa, 3));
};


/** @param {!Array.<!proto.gobgpapi.Roa>} value */
proto.gobgpapi.RPKIValidation.prototype.setMatchedList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.gobgpapi.Roa=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.Roa}
 */
proto.gobgpapi.RPKIValidation.prototype.addMatched = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.gobgpapi.Roa, opt_index);
};


proto.gobgpapi.RPKIValidation.prototype.clearMatchedList = function() {
  this.setMatchedList([]);
};


/**
 * repeated Roa unmatched_as = 4;
 * @return {!Array.<!proto.gobgpapi.Roa>}
 */
proto.gobgpapi.RPKIValidation.prototype.getUnmatchedAsList = function() {
  return /** @type{!Array.<!proto.gobgpapi.Roa>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.Roa, 4));
};


/** @param {!Array.<!proto.gobgpapi.Roa>} value */
proto.gobgpapi.RPKIValidation.prototype.setUnmatchedAsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.gobgpapi.Roa=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.Roa}
 */
proto.gobgpapi.RPKIValidation.prototype.addUnmatchedAs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.gobgpapi.Roa, opt_index);
};


proto.gobgpapi.RPKIValidation.prototype.clearUnmatchedAsList = function() {
  this.setUnmatchedAsList([]);
};


/**
 * repeated Roa unmatched_length = 5;
 * @return {!Array.<!proto.gobgpapi.Roa>}
 */
proto.gobgpapi.RPKIValidation.prototype.getUnmatchedLengthList = function() {
  return /** @type{!Array.<!proto.gobgpapi.Roa>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.Roa, 5));
};


/** @param {!Array.<!proto.gobgpapi.Roa>} value */
proto.gobgpapi.RPKIValidation.prototype.setUnmatchedLengthList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.gobgpapi.Roa=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.Roa}
 */
proto.gobgpapi.RPKIValidation.prototype.addUnmatchedLength = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.gobgpapi.Roa, opt_index);
};


proto.gobgpapi.RPKIValidation.prototype.clearUnmatchedLengthList = function() {
  this.setUnmatchedLengthList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Path = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.Path.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.Path, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Path.displayName = 'proto.gobgpapi.Path';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.Path.repeatedFields_ = [2,21];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Path.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Path.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Path} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Path.toObject = function(includeInstance, msg) {
  var f, obj = {
    nlri: msg.getNlri_asB64(),
    pattrsList: msg.getPattrsList_asB64(),
    age: jspb.Message.getFieldWithDefault(msg, 3, 0),
    best: jspb.Message.getFieldWithDefault(msg, 4, false),
    isWithdraw: jspb.Message.getFieldWithDefault(msg, 5, false),
    validationDetail: (f = msg.getValidationDetail()) && proto.gobgpapi.RPKIValidation.toObject(includeInstance, f),
    noImplicitWithdraw: jspb.Message.getFieldWithDefault(msg, 8, false),
    family: (f = msg.getFamily()) && proto.gobgpapi.Family.toObject(includeInstance, f),
    sourceAsn: jspb.Message.getFieldWithDefault(msg, 10, 0),
    sourceId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    filtered: jspb.Message.getFieldWithDefault(msg, 12, false),
    stale: jspb.Message.getFieldWithDefault(msg, 13, false),
    isFromExternal: jspb.Message.getFieldWithDefault(msg, 14, false),
    neighborIp: jspb.Message.getFieldWithDefault(msg, 15, ""),
    uuid: msg.getUuid_asB64(),
    isNexthopInvalid: jspb.Message.getFieldWithDefault(msg, 17, false),
    identifier: jspb.Message.getFieldWithDefault(msg, 18, 0),
    localIdentifier: jspb.Message.getFieldWithDefault(msg, 19, 0),
    anyNlri: (f = msg.getAnyNlri()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    anyPattrsList: jspb.Message.toObjectList(msg.getAnyPattrsList(),
    google_protobuf_any_pb.Any.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Path}
 */
proto.gobgpapi.Path.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Path;
  return proto.gobgpapi.Path.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Path} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Path}
 */
proto.gobgpapi.Path.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNlri(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addPattrs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAge(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBest(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsWithdraw(value);
      break;
    case 7:
      var value = new proto.gobgpapi.RPKIValidation;
      reader.readMessage(value,proto.gobgpapi.RPKIValidation.deserializeBinaryFromReader);
      msg.setValidationDetail(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoImplicitWithdraw(value);
      break;
    case 9:
      var value = new proto.gobgpapi.Family;
      reader.readMessage(value,proto.gobgpapi.Family.deserializeBinaryFromReader);
      msg.setFamily(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSourceAsn(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceId(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFiltered(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStale(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFromExternal(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setNeighborIp(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUuid(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNexthopInvalid(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIdentifier(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLocalIdentifier(value);
      break;
    case 20:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setAnyNlri(value);
      break;
    case 21:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addAnyPattrs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Path.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Path.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Path} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Path.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNlri_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPattrsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
  f = message.getAge();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getBest();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsWithdraw();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getValidationDetail();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.gobgpapi.RPKIValidation.serializeBinaryToWriter
    );
  }
  f = message.getNoImplicitWithdraw();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getFamily();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.gobgpapi.Family.serializeBinaryToWriter
    );
  }
  f = message.getSourceAsn();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getSourceId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getFiltered();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getStale();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getIsFromExternal();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getNeighborIp();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getUuid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getIsNexthopInvalid();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getIdentifier();
  if (f !== 0) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = message.getLocalIdentifier();
  if (f !== 0) {
    writer.writeUint32(
      19,
      f
    );
  }
  f = message.getAnyNlri();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getAnyPattrsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes nlri = 1;
 * @return {string}
 */
proto.gobgpapi.Path.prototype.getNlri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes nlri = 1;
 * This is a type-conversion wrapper around `getNlri()`
 * @return {string}
 */
proto.gobgpapi.Path.prototype.getNlri_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNlri()));
};


/**
 * optional bytes nlri = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNlri()`
 * @return {!Uint8Array}
 */
proto.gobgpapi.Path.prototype.getNlri_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNlri()));
};


/** @param {!(string|Uint8Array)} value */
proto.gobgpapi.Path.prototype.setNlri = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated bytes pattrs = 2;
 * @return {!Array.<string>}
 */
proto.gobgpapi.Path.prototype.getPattrsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes pattrs = 2;
 * This is a type-conversion wrapper around `getPattrsList()`
 * @return {!Array.<string>}
 */
proto.gobgpapi.Path.prototype.getPattrsList_asB64 = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.bytesListAsB64(
      this.getPattrsList()));
};


/**
 * repeated bytes pattrs = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPattrsList()`
 * @return {!Array.<!Uint8Array>}
 */
proto.gobgpapi.Path.prototype.getPattrsList_asU8 = function() {
  return /** @type {!Array.<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getPattrsList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.gobgpapi.Path.prototype.setPattrsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.gobgpapi.Path.prototype.addPattrs = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.gobgpapi.Path.prototype.clearPattrsList = function() {
  this.setPattrsList([]);
};


/**
 * optional int64 age = 3;
 * @return {number}
 */
proto.gobgpapi.Path.prototype.getAge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.Path.prototype.setAge = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool best = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.Path.prototype.getBest = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.gobgpapi.Path.prototype.setBest = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_withdraw = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.Path.prototype.getIsWithdraw = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.gobgpapi.Path.prototype.setIsWithdraw = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional RPKIValidation validation_detail = 7;
 * @return {?proto.gobgpapi.RPKIValidation}
 */
proto.gobgpapi.Path.prototype.getValidationDetail = function() {
  return /** @type{?proto.gobgpapi.RPKIValidation} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RPKIValidation, 7));
};


/** @param {?proto.gobgpapi.RPKIValidation|undefined} value */
proto.gobgpapi.Path.prototype.setValidationDetail = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.gobgpapi.Path.prototype.clearValidationDetail = function() {
  this.setValidationDetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Path.prototype.hasValidationDetail = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool no_implicit_withdraw = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.Path.prototype.getNoImplicitWithdraw = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.gobgpapi.Path.prototype.setNoImplicitWithdraw = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional Family family = 9;
 * @return {?proto.gobgpapi.Family}
 */
proto.gobgpapi.Path.prototype.getFamily = function() {
  return /** @type{?proto.gobgpapi.Family} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Family, 9));
};


/** @param {?proto.gobgpapi.Family|undefined} value */
proto.gobgpapi.Path.prototype.setFamily = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.gobgpapi.Path.prototype.clearFamily = function() {
  this.setFamily(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Path.prototype.hasFamily = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 source_asn = 10;
 * @return {number}
 */
proto.gobgpapi.Path.prototype.getSourceAsn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.gobgpapi.Path.prototype.setSourceAsn = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string source_id = 11;
 * @return {string}
 */
proto.gobgpapi.Path.prototype.getSourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.gobgpapi.Path.prototype.setSourceId = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool filtered = 12;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.Path.prototype.getFiltered = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 12, false));
};


/** @param {boolean} value */
proto.gobgpapi.Path.prototype.setFiltered = function(value) {
  jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool stale = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.Path.prototype.getStale = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 13, false));
};


/** @param {boolean} value */
proto.gobgpapi.Path.prototype.setStale = function(value) {
  jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool is_from_external = 14;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.Path.prototype.getIsFromExternal = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 14, false));
};


/** @param {boolean} value */
proto.gobgpapi.Path.prototype.setIsFromExternal = function(value) {
  jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional string neighbor_ip = 15;
 * @return {string}
 */
proto.gobgpapi.Path.prototype.getNeighborIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.gobgpapi.Path.prototype.setNeighborIp = function(value) {
  jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional bytes uuid = 16;
 * @return {string}
 */
proto.gobgpapi.Path.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes uuid = 16;
 * This is a type-conversion wrapper around `getUuid()`
 * @return {string}
 */
proto.gobgpapi.Path.prototype.getUuid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUuid()));
};


/**
 * optional bytes uuid = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUuid()`
 * @return {!Uint8Array}
 */
proto.gobgpapi.Path.prototype.getUuid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUuid()));
};


/** @param {!(string|Uint8Array)} value */
proto.gobgpapi.Path.prototype.setUuid = function(value) {
  jspb.Message.setProto3BytesField(this, 16, value);
};


/**
 * optional bool is_nexthop_invalid = 17;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.Path.prototype.getIsNexthopInvalid = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 17, false));
};


/** @param {boolean} value */
proto.gobgpapi.Path.prototype.setIsNexthopInvalid = function(value) {
  jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional uint32 identifier = 18;
 * @return {number}
 */
proto.gobgpapi.Path.prototype.getIdentifier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.gobgpapi.Path.prototype.setIdentifier = function(value) {
  jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional uint32 local_identifier = 19;
 * @return {number}
 */
proto.gobgpapi.Path.prototype.getLocalIdentifier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {number} value */
proto.gobgpapi.Path.prototype.setLocalIdentifier = function(value) {
  jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional google.protobuf.Any any_nlri = 20;
 * @return {?proto.google.protobuf.Any}
 */
proto.gobgpapi.Path.prototype.getAnyNlri = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 20));
};


/** @param {?proto.google.protobuf.Any|undefined} value */
proto.gobgpapi.Path.prototype.setAnyNlri = function(value) {
  jspb.Message.setWrapperField(this, 20, value);
};


proto.gobgpapi.Path.prototype.clearAnyNlri = function() {
  this.setAnyNlri(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Path.prototype.hasAnyNlri = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * repeated google.protobuf.Any any_pattrs = 21;
 * @return {!Array.<!proto.google.protobuf.Any>}
 */
proto.gobgpapi.Path.prototype.getAnyPattrsList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 21));
};


/** @param {!Array.<!proto.google.protobuf.Any>} value */
proto.gobgpapi.Path.prototype.setAnyPattrsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.gobgpapi.Path.prototype.addAnyPattrs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.google.protobuf.Any, opt_index);
};


proto.gobgpapi.Path.prototype.clearAnyPattrsList = function() {
  this.setAnyPattrsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Destination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.Destination.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.Destination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Destination.displayName = 'proto.gobgpapi.Destination';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.Destination.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Destination.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Destination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Destination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Destination.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pathsList: jspb.Message.toObjectList(msg.getPathsList(),
    proto.gobgpapi.Path.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Destination}
 */
proto.gobgpapi.Destination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Destination;
  return proto.gobgpapi.Destination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Destination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Destination}
 */
proto.gobgpapi.Destination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 2:
      var value = new proto.gobgpapi.Path;
      reader.readMessage(value,proto.gobgpapi.Path.deserializeBinaryFromReader);
      msg.addPaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Destination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Destination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Destination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Destination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPathsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.gobgpapi.Path.serializeBinaryToWriter
    );
  }
};


/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.gobgpapi.Destination.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.Destination.prototype.setPrefix = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Path paths = 2;
 * @return {!Array.<!proto.gobgpapi.Path>}
 */
proto.gobgpapi.Destination.prototype.getPathsList = function() {
  return /** @type{!Array.<!proto.gobgpapi.Path>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.Path, 2));
};


/** @param {!Array.<!proto.gobgpapi.Path>} value */
proto.gobgpapi.Destination.prototype.setPathsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.gobgpapi.Path=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.Path}
 */
proto.gobgpapi.Destination.prototype.addPaths = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gobgpapi.Path, opt_index);
};


proto.gobgpapi.Destination.prototype.clearPathsList = function() {
  this.setPathsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.TableLookupPrefix = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.TableLookupPrefix, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.TableLookupPrefix.displayName = 'proto.gobgpapi.TableLookupPrefix';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.TableLookupPrefix.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.TableLookupPrefix.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.TableLookupPrefix} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.TableLookupPrefix.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lookupOption: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.TableLookupPrefix}
 */
proto.gobgpapi.TableLookupPrefix.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.TableLookupPrefix;
  return proto.gobgpapi.TableLookupPrefix.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.TableLookupPrefix} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.TableLookupPrefix}
 */
proto.gobgpapi.TableLookupPrefix.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 2:
      var value = /** @type {!proto.gobgpapi.TableLookupOption} */ (reader.readEnum());
      msg.setLookupOption(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.TableLookupPrefix.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.TableLookupPrefix.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.TableLookupPrefix} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.TableLookupPrefix.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLookupOption();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.gobgpapi.TableLookupPrefix.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.TableLookupPrefix.prototype.setPrefix = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TableLookupOption lookup_option = 2;
 * @return {!proto.gobgpapi.TableLookupOption}
 */
proto.gobgpapi.TableLookupPrefix.prototype.getLookupOption = function() {
  return /** @type {!proto.gobgpapi.TableLookupOption} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.gobgpapi.TableLookupOption} value */
proto.gobgpapi.TableLookupPrefix.prototype.setLookupOption = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Peer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.Peer.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.Peer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Peer.displayName = 'proto.gobgpapi.Peer';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.Peer.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Peer.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Peer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Peer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Peer.toObject = function(includeInstance, msg) {
  var f, obj = {
    applyPolicy: (f = msg.getApplyPolicy()) && proto.gobgpapi.ApplyPolicy.toObject(includeInstance, f),
    conf: (f = msg.getConf()) && proto.gobgpapi.PeerConf.toObject(includeInstance, f),
    ebgpMultihop: (f = msg.getEbgpMultihop()) && proto.gobgpapi.EbgpMultihop.toObject(includeInstance, f),
    routeReflector: (f = msg.getRouteReflector()) && proto.gobgpapi.RouteReflector.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.gobgpapi.PeerState.toObject(includeInstance, f),
    timers: (f = msg.getTimers()) && proto.gobgpapi.Timers.toObject(includeInstance, f),
    transport: (f = msg.getTransport()) && proto.gobgpapi.Transport.toObject(includeInstance, f),
    routeServer: (f = msg.getRouteServer()) && proto.gobgpapi.RouteServer.toObject(includeInstance, f),
    gracefulRestart: (f = msg.getGracefulRestart()) && proto.gobgpapi.GracefulRestart.toObject(includeInstance, f),
    afiSafisList: jspb.Message.toObjectList(msg.getAfiSafisList(),
    proto.gobgpapi.AfiSafi.toObject, includeInstance),
    addPaths: (f = msg.getAddPaths()) && proto.gobgpapi.AddPaths.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Peer}
 */
proto.gobgpapi.Peer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Peer;
  return proto.gobgpapi.Peer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Peer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Peer}
 */
proto.gobgpapi.Peer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.ApplyPolicy;
      reader.readMessage(value,proto.gobgpapi.ApplyPolicy.deserializeBinaryFromReader);
      msg.setApplyPolicy(value);
      break;
    case 2:
      var value = new proto.gobgpapi.PeerConf;
      reader.readMessage(value,proto.gobgpapi.PeerConf.deserializeBinaryFromReader);
      msg.setConf(value);
      break;
    case 3:
      var value = new proto.gobgpapi.EbgpMultihop;
      reader.readMessage(value,proto.gobgpapi.EbgpMultihop.deserializeBinaryFromReader);
      msg.setEbgpMultihop(value);
      break;
    case 4:
      var value = new proto.gobgpapi.RouteReflector;
      reader.readMessage(value,proto.gobgpapi.RouteReflector.deserializeBinaryFromReader);
      msg.setRouteReflector(value);
      break;
    case 5:
      var value = new proto.gobgpapi.PeerState;
      reader.readMessage(value,proto.gobgpapi.PeerState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 6:
      var value = new proto.gobgpapi.Timers;
      reader.readMessage(value,proto.gobgpapi.Timers.deserializeBinaryFromReader);
      msg.setTimers(value);
      break;
    case 7:
      var value = new proto.gobgpapi.Transport;
      reader.readMessage(value,proto.gobgpapi.Transport.deserializeBinaryFromReader);
      msg.setTransport(value);
      break;
    case 8:
      var value = new proto.gobgpapi.RouteServer;
      reader.readMessage(value,proto.gobgpapi.RouteServer.deserializeBinaryFromReader);
      msg.setRouteServer(value);
      break;
    case 9:
      var value = new proto.gobgpapi.GracefulRestart;
      reader.readMessage(value,proto.gobgpapi.GracefulRestart.deserializeBinaryFromReader);
      msg.setGracefulRestart(value);
      break;
    case 10:
      var value = new proto.gobgpapi.AfiSafi;
      reader.readMessage(value,proto.gobgpapi.AfiSafi.deserializeBinaryFromReader);
      msg.addAfiSafis(value);
      break;
    case 11:
      var value = new proto.gobgpapi.AddPaths;
      reader.readMessage(value,proto.gobgpapi.AddPaths.deserializeBinaryFromReader);
      msg.setAddPaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Peer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Peer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Peer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Peer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplyPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.ApplyPolicy.serializeBinaryToWriter
    );
  }
  f = message.getConf();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.PeerConf.serializeBinaryToWriter
    );
  }
  f = message.getEbgpMultihop();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gobgpapi.EbgpMultihop.serializeBinaryToWriter
    );
  }
  f = message.getRouteReflector();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.gobgpapi.RouteReflector.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.gobgpapi.PeerState.serializeBinaryToWriter
    );
  }
  f = message.getTimers();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.gobgpapi.Timers.serializeBinaryToWriter
    );
  }
  f = message.getTransport();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.gobgpapi.Transport.serializeBinaryToWriter
    );
  }
  f = message.getRouteServer();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.gobgpapi.RouteServer.serializeBinaryToWriter
    );
  }
  f = message.getGracefulRestart();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.gobgpapi.GracefulRestart.serializeBinaryToWriter
    );
  }
  f = message.getAfiSafisList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.gobgpapi.AfiSafi.serializeBinaryToWriter
    );
  }
  f = message.getAddPaths();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.gobgpapi.AddPaths.serializeBinaryToWriter
    );
  }
};


/**
 * optional ApplyPolicy apply_policy = 1;
 * @return {?proto.gobgpapi.ApplyPolicy}
 */
proto.gobgpapi.Peer.prototype.getApplyPolicy = function() {
  return /** @type{?proto.gobgpapi.ApplyPolicy} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.ApplyPolicy, 1));
};


/** @param {?proto.gobgpapi.ApplyPolicy|undefined} value */
proto.gobgpapi.Peer.prototype.setApplyPolicy = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.Peer.prototype.clearApplyPolicy = function() {
  this.setApplyPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Peer.prototype.hasApplyPolicy = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PeerConf conf = 2;
 * @return {?proto.gobgpapi.PeerConf}
 */
proto.gobgpapi.Peer.prototype.getConf = function() {
  return /** @type{?proto.gobgpapi.PeerConf} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.PeerConf, 2));
};


/** @param {?proto.gobgpapi.PeerConf|undefined} value */
proto.gobgpapi.Peer.prototype.setConf = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.Peer.prototype.clearConf = function() {
  this.setConf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Peer.prototype.hasConf = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EbgpMultihop ebgp_multihop = 3;
 * @return {?proto.gobgpapi.EbgpMultihop}
 */
proto.gobgpapi.Peer.prototype.getEbgpMultihop = function() {
  return /** @type{?proto.gobgpapi.EbgpMultihop} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.EbgpMultihop, 3));
};


/** @param {?proto.gobgpapi.EbgpMultihop|undefined} value */
proto.gobgpapi.Peer.prototype.setEbgpMultihop = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gobgpapi.Peer.prototype.clearEbgpMultihop = function() {
  this.setEbgpMultihop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Peer.prototype.hasEbgpMultihop = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RouteReflector route_reflector = 4;
 * @return {?proto.gobgpapi.RouteReflector}
 */
proto.gobgpapi.Peer.prototype.getRouteReflector = function() {
  return /** @type{?proto.gobgpapi.RouteReflector} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RouteReflector, 4));
};


/** @param {?proto.gobgpapi.RouteReflector|undefined} value */
proto.gobgpapi.Peer.prototype.setRouteReflector = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.gobgpapi.Peer.prototype.clearRouteReflector = function() {
  this.setRouteReflector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Peer.prototype.hasRouteReflector = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PeerState state = 5;
 * @return {?proto.gobgpapi.PeerState}
 */
proto.gobgpapi.Peer.prototype.getState = function() {
  return /** @type{?proto.gobgpapi.PeerState} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.PeerState, 5));
};


/** @param {?proto.gobgpapi.PeerState|undefined} value */
proto.gobgpapi.Peer.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.gobgpapi.Peer.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Peer.prototype.hasState = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Timers timers = 6;
 * @return {?proto.gobgpapi.Timers}
 */
proto.gobgpapi.Peer.prototype.getTimers = function() {
  return /** @type{?proto.gobgpapi.Timers} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Timers, 6));
};


/** @param {?proto.gobgpapi.Timers|undefined} value */
proto.gobgpapi.Peer.prototype.setTimers = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.gobgpapi.Peer.prototype.clearTimers = function() {
  this.setTimers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Peer.prototype.hasTimers = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Transport transport = 7;
 * @return {?proto.gobgpapi.Transport}
 */
proto.gobgpapi.Peer.prototype.getTransport = function() {
  return /** @type{?proto.gobgpapi.Transport} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Transport, 7));
};


/** @param {?proto.gobgpapi.Transport|undefined} value */
proto.gobgpapi.Peer.prototype.setTransport = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.gobgpapi.Peer.prototype.clearTransport = function() {
  this.setTransport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Peer.prototype.hasTransport = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional RouteServer route_server = 8;
 * @return {?proto.gobgpapi.RouteServer}
 */
proto.gobgpapi.Peer.prototype.getRouteServer = function() {
  return /** @type{?proto.gobgpapi.RouteServer} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RouteServer, 8));
};


/** @param {?proto.gobgpapi.RouteServer|undefined} value */
proto.gobgpapi.Peer.prototype.setRouteServer = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.gobgpapi.Peer.prototype.clearRouteServer = function() {
  this.setRouteServer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Peer.prototype.hasRouteServer = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional GracefulRestart graceful_restart = 9;
 * @return {?proto.gobgpapi.GracefulRestart}
 */
proto.gobgpapi.Peer.prototype.getGracefulRestart = function() {
  return /** @type{?proto.gobgpapi.GracefulRestart} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.GracefulRestart, 9));
};


/** @param {?proto.gobgpapi.GracefulRestart|undefined} value */
proto.gobgpapi.Peer.prototype.setGracefulRestart = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.gobgpapi.Peer.prototype.clearGracefulRestart = function() {
  this.setGracefulRestart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Peer.prototype.hasGracefulRestart = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated AfiSafi afi_safis = 10;
 * @return {!Array.<!proto.gobgpapi.AfiSafi>}
 */
proto.gobgpapi.Peer.prototype.getAfiSafisList = function() {
  return /** @type{!Array.<!proto.gobgpapi.AfiSafi>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.AfiSafi, 10));
};


/** @param {!Array.<!proto.gobgpapi.AfiSafi>} value */
proto.gobgpapi.Peer.prototype.setAfiSafisList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.gobgpapi.AfiSafi=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.AfiSafi}
 */
proto.gobgpapi.Peer.prototype.addAfiSafis = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.gobgpapi.AfiSafi, opt_index);
};


proto.gobgpapi.Peer.prototype.clearAfiSafisList = function() {
  this.setAfiSafisList([]);
};


/**
 * optional AddPaths add_paths = 11;
 * @return {?proto.gobgpapi.AddPaths}
 */
proto.gobgpapi.Peer.prototype.getAddPaths = function() {
  return /** @type{?proto.gobgpapi.AddPaths} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.AddPaths, 11));
};


/** @param {?proto.gobgpapi.AddPaths|undefined} value */
proto.gobgpapi.Peer.prototype.setAddPaths = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.gobgpapi.Peer.prototype.clearAddPaths = function() {
  this.setAddPaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Peer.prototype.hasAddPaths = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.PeerGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.PeerGroup.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.PeerGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.PeerGroup.displayName = 'proto.gobgpapi.PeerGroup';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.PeerGroup.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.PeerGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.PeerGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.PeerGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.PeerGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    applyPolicy: (f = msg.getApplyPolicy()) && proto.gobgpapi.ApplyPolicy.toObject(includeInstance, f),
    conf: (f = msg.getConf()) && proto.gobgpapi.PeerGroupConf.toObject(includeInstance, f),
    ebgpMultihop: (f = msg.getEbgpMultihop()) && proto.gobgpapi.EbgpMultihop.toObject(includeInstance, f),
    routeReflector: (f = msg.getRouteReflector()) && proto.gobgpapi.RouteReflector.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && proto.gobgpapi.PeerGroupState.toObject(includeInstance, f),
    timers: (f = msg.getTimers()) && proto.gobgpapi.Timers.toObject(includeInstance, f),
    transport: (f = msg.getTransport()) && proto.gobgpapi.Transport.toObject(includeInstance, f),
    routeServer: (f = msg.getRouteServer()) && proto.gobgpapi.RouteServer.toObject(includeInstance, f),
    gracefulRestart: (f = msg.getGracefulRestart()) && proto.gobgpapi.GracefulRestart.toObject(includeInstance, f),
    afiSafisList: jspb.Message.toObjectList(msg.getAfiSafisList(),
    proto.gobgpapi.AfiSafi.toObject, includeInstance),
    addPaths: (f = msg.getAddPaths()) && proto.gobgpapi.AddPaths.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.PeerGroup}
 */
proto.gobgpapi.PeerGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.PeerGroup;
  return proto.gobgpapi.PeerGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.PeerGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.PeerGroup}
 */
proto.gobgpapi.PeerGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.ApplyPolicy;
      reader.readMessage(value,proto.gobgpapi.ApplyPolicy.deserializeBinaryFromReader);
      msg.setApplyPolicy(value);
      break;
    case 2:
      var value = new proto.gobgpapi.PeerGroupConf;
      reader.readMessage(value,proto.gobgpapi.PeerGroupConf.deserializeBinaryFromReader);
      msg.setConf(value);
      break;
    case 3:
      var value = new proto.gobgpapi.EbgpMultihop;
      reader.readMessage(value,proto.gobgpapi.EbgpMultihop.deserializeBinaryFromReader);
      msg.setEbgpMultihop(value);
      break;
    case 4:
      var value = new proto.gobgpapi.RouteReflector;
      reader.readMessage(value,proto.gobgpapi.RouteReflector.deserializeBinaryFromReader);
      msg.setRouteReflector(value);
      break;
    case 5:
      var value = new proto.gobgpapi.PeerGroupState;
      reader.readMessage(value,proto.gobgpapi.PeerGroupState.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 6:
      var value = new proto.gobgpapi.Timers;
      reader.readMessage(value,proto.gobgpapi.Timers.deserializeBinaryFromReader);
      msg.setTimers(value);
      break;
    case 7:
      var value = new proto.gobgpapi.Transport;
      reader.readMessage(value,proto.gobgpapi.Transport.deserializeBinaryFromReader);
      msg.setTransport(value);
      break;
    case 8:
      var value = new proto.gobgpapi.RouteServer;
      reader.readMessage(value,proto.gobgpapi.RouteServer.deserializeBinaryFromReader);
      msg.setRouteServer(value);
      break;
    case 9:
      var value = new proto.gobgpapi.GracefulRestart;
      reader.readMessage(value,proto.gobgpapi.GracefulRestart.deserializeBinaryFromReader);
      msg.setGracefulRestart(value);
      break;
    case 10:
      var value = new proto.gobgpapi.AfiSafi;
      reader.readMessage(value,proto.gobgpapi.AfiSafi.deserializeBinaryFromReader);
      msg.addAfiSafis(value);
      break;
    case 11:
      var value = new proto.gobgpapi.AddPaths;
      reader.readMessage(value,proto.gobgpapi.AddPaths.deserializeBinaryFromReader);
      msg.setAddPaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.PeerGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.PeerGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.PeerGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.PeerGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplyPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.ApplyPolicy.serializeBinaryToWriter
    );
  }
  f = message.getConf();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.PeerGroupConf.serializeBinaryToWriter
    );
  }
  f = message.getEbgpMultihop();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gobgpapi.EbgpMultihop.serializeBinaryToWriter
    );
  }
  f = message.getRouteReflector();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.gobgpapi.RouteReflector.serializeBinaryToWriter
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.gobgpapi.PeerGroupState.serializeBinaryToWriter
    );
  }
  f = message.getTimers();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.gobgpapi.Timers.serializeBinaryToWriter
    );
  }
  f = message.getTransport();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.gobgpapi.Transport.serializeBinaryToWriter
    );
  }
  f = message.getRouteServer();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.gobgpapi.RouteServer.serializeBinaryToWriter
    );
  }
  f = message.getGracefulRestart();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.gobgpapi.GracefulRestart.serializeBinaryToWriter
    );
  }
  f = message.getAfiSafisList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.gobgpapi.AfiSafi.serializeBinaryToWriter
    );
  }
  f = message.getAddPaths();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.gobgpapi.AddPaths.serializeBinaryToWriter
    );
  }
};


/**
 * optional ApplyPolicy apply_policy = 1;
 * @return {?proto.gobgpapi.ApplyPolicy}
 */
proto.gobgpapi.PeerGroup.prototype.getApplyPolicy = function() {
  return /** @type{?proto.gobgpapi.ApplyPolicy} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.ApplyPolicy, 1));
};


/** @param {?proto.gobgpapi.ApplyPolicy|undefined} value */
proto.gobgpapi.PeerGroup.prototype.setApplyPolicy = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.PeerGroup.prototype.clearApplyPolicy = function() {
  this.setApplyPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.PeerGroup.prototype.hasApplyPolicy = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PeerGroupConf conf = 2;
 * @return {?proto.gobgpapi.PeerGroupConf}
 */
proto.gobgpapi.PeerGroup.prototype.getConf = function() {
  return /** @type{?proto.gobgpapi.PeerGroupConf} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.PeerGroupConf, 2));
};


/** @param {?proto.gobgpapi.PeerGroupConf|undefined} value */
proto.gobgpapi.PeerGroup.prototype.setConf = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.PeerGroup.prototype.clearConf = function() {
  this.setConf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.PeerGroup.prototype.hasConf = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EbgpMultihop ebgp_multihop = 3;
 * @return {?proto.gobgpapi.EbgpMultihop}
 */
proto.gobgpapi.PeerGroup.prototype.getEbgpMultihop = function() {
  return /** @type{?proto.gobgpapi.EbgpMultihop} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.EbgpMultihop, 3));
};


/** @param {?proto.gobgpapi.EbgpMultihop|undefined} value */
proto.gobgpapi.PeerGroup.prototype.setEbgpMultihop = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gobgpapi.PeerGroup.prototype.clearEbgpMultihop = function() {
  this.setEbgpMultihop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.PeerGroup.prototype.hasEbgpMultihop = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RouteReflector route_reflector = 4;
 * @return {?proto.gobgpapi.RouteReflector}
 */
proto.gobgpapi.PeerGroup.prototype.getRouteReflector = function() {
  return /** @type{?proto.gobgpapi.RouteReflector} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RouteReflector, 4));
};


/** @param {?proto.gobgpapi.RouteReflector|undefined} value */
proto.gobgpapi.PeerGroup.prototype.setRouteReflector = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.gobgpapi.PeerGroup.prototype.clearRouteReflector = function() {
  this.setRouteReflector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.PeerGroup.prototype.hasRouteReflector = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PeerGroupState info = 5;
 * @return {?proto.gobgpapi.PeerGroupState}
 */
proto.gobgpapi.PeerGroup.prototype.getInfo = function() {
  return /** @type{?proto.gobgpapi.PeerGroupState} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.PeerGroupState, 5));
};


/** @param {?proto.gobgpapi.PeerGroupState|undefined} value */
proto.gobgpapi.PeerGroup.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.gobgpapi.PeerGroup.prototype.clearInfo = function() {
  this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.PeerGroup.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Timers timers = 6;
 * @return {?proto.gobgpapi.Timers}
 */
proto.gobgpapi.PeerGroup.prototype.getTimers = function() {
  return /** @type{?proto.gobgpapi.Timers} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Timers, 6));
};


/** @param {?proto.gobgpapi.Timers|undefined} value */
proto.gobgpapi.PeerGroup.prototype.setTimers = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.gobgpapi.PeerGroup.prototype.clearTimers = function() {
  this.setTimers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.PeerGroup.prototype.hasTimers = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Transport transport = 7;
 * @return {?proto.gobgpapi.Transport}
 */
proto.gobgpapi.PeerGroup.prototype.getTransport = function() {
  return /** @type{?proto.gobgpapi.Transport} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Transport, 7));
};


/** @param {?proto.gobgpapi.Transport|undefined} value */
proto.gobgpapi.PeerGroup.prototype.setTransport = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.gobgpapi.PeerGroup.prototype.clearTransport = function() {
  this.setTransport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.PeerGroup.prototype.hasTransport = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional RouteServer route_server = 8;
 * @return {?proto.gobgpapi.RouteServer}
 */
proto.gobgpapi.PeerGroup.prototype.getRouteServer = function() {
  return /** @type{?proto.gobgpapi.RouteServer} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RouteServer, 8));
};


/** @param {?proto.gobgpapi.RouteServer|undefined} value */
proto.gobgpapi.PeerGroup.prototype.setRouteServer = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.gobgpapi.PeerGroup.prototype.clearRouteServer = function() {
  this.setRouteServer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.PeerGroup.prototype.hasRouteServer = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional GracefulRestart graceful_restart = 9;
 * @return {?proto.gobgpapi.GracefulRestart}
 */
proto.gobgpapi.PeerGroup.prototype.getGracefulRestart = function() {
  return /** @type{?proto.gobgpapi.GracefulRestart} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.GracefulRestart, 9));
};


/** @param {?proto.gobgpapi.GracefulRestart|undefined} value */
proto.gobgpapi.PeerGroup.prototype.setGracefulRestart = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.gobgpapi.PeerGroup.prototype.clearGracefulRestart = function() {
  this.setGracefulRestart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.PeerGroup.prototype.hasGracefulRestart = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated AfiSafi afi_safis = 10;
 * @return {!Array.<!proto.gobgpapi.AfiSafi>}
 */
proto.gobgpapi.PeerGroup.prototype.getAfiSafisList = function() {
  return /** @type{!Array.<!proto.gobgpapi.AfiSafi>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.AfiSafi, 10));
};


/** @param {!Array.<!proto.gobgpapi.AfiSafi>} value */
proto.gobgpapi.PeerGroup.prototype.setAfiSafisList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.gobgpapi.AfiSafi=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.AfiSafi}
 */
proto.gobgpapi.PeerGroup.prototype.addAfiSafis = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.gobgpapi.AfiSafi, opt_index);
};


proto.gobgpapi.PeerGroup.prototype.clearAfiSafisList = function() {
  this.setAfiSafisList([]);
};


/**
 * optional AddPaths add_paths = 11;
 * @return {?proto.gobgpapi.AddPaths}
 */
proto.gobgpapi.PeerGroup.prototype.getAddPaths = function() {
  return /** @type{?proto.gobgpapi.AddPaths} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.AddPaths, 11));
};


/** @param {?proto.gobgpapi.AddPaths|undefined} value */
proto.gobgpapi.PeerGroup.prototype.setAddPaths = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.gobgpapi.PeerGroup.prototype.clearAddPaths = function() {
  this.setAddPaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.PeerGroup.prototype.hasAddPaths = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DynamicNeighbor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DynamicNeighbor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DynamicNeighbor.displayName = 'proto.gobgpapi.DynamicNeighbor';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DynamicNeighbor.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DynamicNeighbor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DynamicNeighbor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DynamicNeighbor.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    peerGroup: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DynamicNeighbor}
 */
proto.gobgpapi.DynamicNeighbor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DynamicNeighbor;
  return proto.gobgpapi.DynamicNeighbor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DynamicNeighbor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DynamicNeighbor}
 */
proto.gobgpapi.DynamicNeighbor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerGroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DynamicNeighbor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DynamicNeighbor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DynamicNeighbor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DynamicNeighbor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPeerGroup();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.gobgpapi.DynamicNeighbor.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.DynamicNeighbor.prototype.setPrefix = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string peer_group = 2;
 * @return {string}
 */
proto.gobgpapi.DynamicNeighbor.prototype.getPeerGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.DynamicNeighbor.prototype.setPeerGroup = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.ApplyPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.ApplyPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.ApplyPolicy.displayName = 'proto.gobgpapi.ApplyPolicy';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.ApplyPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.ApplyPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.ApplyPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ApplyPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    inPolicy: (f = msg.getInPolicy()) && proto.gobgpapi.PolicyAssignment.toObject(includeInstance, f),
    exportPolicy: (f = msg.getExportPolicy()) && proto.gobgpapi.PolicyAssignment.toObject(includeInstance, f),
    importPolicy: (f = msg.getImportPolicy()) && proto.gobgpapi.PolicyAssignment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.ApplyPolicy}
 */
proto.gobgpapi.ApplyPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.ApplyPolicy;
  return proto.gobgpapi.ApplyPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.ApplyPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.ApplyPolicy}
 */
proto.gobgpapi.ApplyPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.PolicyAssignment;
      reader.readMessage(value,proto.gobgpapi.PolicyAssignment.deserializeBinaryFromReader);
      msg.setInPolicy(value);
      break;
    case 2:
      var value = new proto.gobgpapi.PolicyAssignment;
      reader.readMessage(value,proto.gobgpapi.PolicyAssignment.deserializeBinaryFromReader);
      msg.setExportPolicy(value);
      break;
    case 3:
      var value = new proto.gobgpapi.PolicyAssignment;
      reader.readMessage(value,proto.gobgpapi.PolicyAssignment.deserializeBinaryFromReader);
      msg.setImportPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.ApplyPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.ApplyPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.ApplyPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.ApplyPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.PolicyAssignment.serializeBinaryToWriter
    );
  }
  f = message.getExportPolicy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.PolicyAssignment.serializeBinaryToWriter
    );
  }
  f = message.getImportPolicy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gobgpapi.PolicyAssignment.serializeBinaryToWriter
    );
  }
};


/**
 * optional PolicyAssignment in_policy = 1;
 * @return {?proto.gobgpapi.PolicyAssignment}
 */
proto.gobgpapi.ApplyPolicy.prototype.getInPolicy = function() {
  return /** @type{?proto.gobgpapi.PolicyAssignment} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.PolicyAssignment, 1));
};


/** @param {?proto.gobgpapi.PolicyAssignment|undefined} value */
proto.gobgpapi.ApplyPolicy.prototype.setInPolicy = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.ApplyPolicy.prototype.clearInPolicy = function() {
  this.setInPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ApplyPolicy.prototype.hasInPolicy = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PolicyAssignment export_policy = 2;
 * @return {?proto.gobgpapi.PolicyAssignment}
 */
proto.gobgpapi.ApplyPolicy.prototype.getExportPolicy = function() {
  return /** @type{?proto.gobgpapi.PolicyAssignment} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.PolicyAssignment, 2));
};


/** @param {?proto.gobgpapi.PolicyAssignment|undefined} value */
proto.gobgpapi.ApplyPolicy.prototype.setExportPolicy = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.ApplyPolicy.prototype.clearExportPolicy = function() {
  this.setExportPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ApplyPolicy.prototype.hasExportPolicy = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PolicyAssignment import_policy = 3;
 * @return {?proto.gobgpapi.PolicyAssignment}
 */
proto.gobgpapi.ApplyPolicy.prototype.getImportPolicy = function() {
  return /** @type{?proto.gobgpapi.PolicyAssignment} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.PolicyAssignment, 3));
};


/** @param {?proto.gobgpapi.PolicyAssignment|undefined} value */
proto.gobgpapi.ApplyPolicy.prototype.setImportPolicy = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gobgpapi.ApplyPolicy.prototype.clearImportPolicy = function() {
  this.setImportPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.ApplyPolicy.prototype.hasImportPolicy = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.PrefixLimit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.PrefixLimit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.PrefixLimit.displayName = 'proto.gobgpapi.PrefixLimit';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.PrefixLimit.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.PrefixLimit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.PrefixLimit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.PrefixLimit.toObject = function(includeInstance, msg) {
  var f, obj = {
    family: (f = msg.getFamily()) && proto.gobgpapi.Family.toObject(includeInstance, f),
    maxPrefixes: jspb.Message.getFieldWithDefault(msg, 2, 0),
    shutdownThresholdPct: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.PrefixLimit}
 */
proto.gobgpapi.PrefixLimit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.PrefixLimit;
  return proto.gobgpapi.PrefixLimit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.PrefixLimit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.PrefixLimit}
 */
proto.gobgpapi.PrefixLimit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Family;
      reader.readMessage(value,proto.gobgpapi.Family.deserializeBinaryFromReader);
      msg.setFamily(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxPrefixes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setShutdownThresholdPct(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.PrefixLimit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.PrefixLimit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.PrefixLimit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.PrefixLimit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFamily();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Family.serializeBinaryToWriter
    );
  }
  f = message.getMaxPrefixes();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getShutdownThresholdPct();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional Family family = 1;
 * @return {?proto.gobgpapi.Family}
 */
proto.gobgpapi.PrefixLimit.prototype.getFamily = function() {
  return /** @type{?proto.gobgpapi.Family} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Family, 1));
};


/** @param {?proto.gobgpapi.Family|undefined} value */
proto.gobgpapi.PrefixLimit.prototype.setFamily = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.PrefixLimit.prototype.clearFamily = function() {
  this.setFamily(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.PrefixLimit.prototype.hasFamily = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 max_prefixes = 2;
 * @return {number}
 */
proto.gobgpapi.PrefixLimit.prototype.getMaxPrefixes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.PrefixLimit.prototype.setMaxPrefixes = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 shutdown_threshold_pct = 3;
 * @return {number}
 */
proto.gobgpapi.PrefixLimit.prototype.getShutdownThresholdPct = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.PrefixLimit.prototype.setShutdownThresholdPct = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.PeerConf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.PeerConf.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.PeerConf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.PeerConf.displayName = 'proto.gobgpapi.PeerConf';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.PeerConf.repeatedFields_ = [11,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.PeerConf.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.PeerConf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.PeerConf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.PeerConf.toObject = function(includeInstance, msg) {
  var f, obj = {
    authPassword: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    localAs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    neighborAddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    peerAs: jspb.Message.getFieldWithDefault(msg, 5, 0),
    peerGroup: jspb.Message.getFieldWithDefault(msg, 6, ""),
    peerType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    removePrivateAs: jspb.Message.getFieldWithDefault(msg, 8, 0),
    routeFlapDamping: jspb.Message.getFieldWithDefault(msg, 9, false),
    sendCommunity: jspb.Message.getFieldWithDefault(msg, 10, 0),
    remoteCapList: jspb.Message.toObjectList(msg.getRemoteCapList(),
    google_protobuf_any_pb.Any.toObject, includeInstance),
    localCapList: jspb.Message.toObjectList(msg.getLocalCapList(),
    google_protobuf_any_pb.Any.toObject, includeInstance),
    id: jspb.Message.getFieldWithDefault(msg, 13, ""),
    neighborInterface: jspb.Message.getFieldWithDefault(msg, 14, ""),
    vrf: jspb.Message.getFieldWithDefault(msg, 15, ""),
    allowOwnAs: jspb.Message.getFieldWithDefault(msg, 16, 0),
    replacePeerAs: jspb.Message.getFieldWithDefault(msg, 17, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.PeerConf}
 */
proto.gobgpapi.PeerConf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.PeerConf;
  return proto.gobgpapi.PeerConf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.PeerConf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.PeerConf}
 */
proto.gobgpapi.PeerConf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLocalAs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNeighborAddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPeerAs(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerGroup(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPeerType(value);
      break;
    case 8:
      var value = /** @type {!proto.gobgpapi.PeerConf.RemovePrivateAs} */ (reader.readEnum());
      msg.setRemovePrivateAs(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRouteFlapDamping(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSendCommunity(value);
      break;
    case 11:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addRemoteCap(value);
      break;
    case 12:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addLocalCap(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setNeighborInterface(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setVrf(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAllowOwnAs(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReplacePeerAs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.PeerConf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.PeerConf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.PeerConf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.PeerConf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocalAs();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getNeighborAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPeerAs();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getPeerGroup();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPeerType();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getRemovePrivateAs();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getRouteFlapDamping();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getSendCommunity();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getRemoteCapList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getLocalCapList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getNeighborInterface();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getVrf();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getAllowOwnAs();
  if (f !== 0) {
    writer.writeUint32(
      16,
      f
    );
  }
  f = message.getReplacePeerAs();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.gobgpapi.PeerConf.RemovePrivateAs = {
  NONE: 0,
  ALL: 1,
  REPLACE: 2
};

/**
 * optional string auth_password = 1;
 * @return {string}
 */
proto.gobgpapi.PeerConf.prototype.getAuthPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerConf.prototype.setAuthPassword = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.gobgpapi.PeerConf.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerConf.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 local_as = 3;
 * @return {number}
 */
proto.gobgpapi.PeerConf.prototype.getLocalAs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerConf.prototype.setLocalAs = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string neighbor_address = 4;
 * @return {string}
 */
proto.gobgpapi.PeerConf.prototype.getNeighborAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerConf.prototype.setNeighborAddress = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 peer_as = 5;
 * @return {number}
 */
proto.gobgpapi.PeerConf.prototype.getPeerAs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerConf.prototype.setPeerAs = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string peer_group = 6;
 * @return {string}
 */
proto.gobgpapi.PeerConf.prototype.getPeerGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerConf.prototype.setPeerGroup = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 peer_type = 7;
 * @return {number}
 */
proto.gobgpapi.PeerConf.prototype.getPeerType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerConf.prototype.setPeerType = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional RemovePrivateAs remove_private_as = 8;
 * @return {!proto.gobgpapi.PeerConf.RemovePrivateAs}
 */
proto.gobgpapi.PeerConf.prototype.getRemovePrivateAs = function() {
  return /** @type {!proto.gobgpapi.PeerConf.RemovePrivateAs} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.gobgpapi.PeerConf.RemovePrivateAs} value */
proto.gobgpapi.PeerConf.prototype.setRemovePrivateAs = function(value) {
  jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional bool route_flap_damping = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.PeerConf.prototype.getRouteFlapDamping = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.gobgpapi.PeerConf.prototype.setRouteFlapDamping = function(value) {
  jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional uint32 send_community = 10;
 * @return {number}
 */
proto.gobgpapi.PeerConf.prototype.getSendCommunity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerConf.prototype.setSendCommunity = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * repeated google.protobuf.Any remote_cap = 11;
 * @return {!Array.<!proto.google.protobuf.Any>}
 */
proto.gobgpapi.PeerConf.prototype.getRemoteCapList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 11));
};


/** @param {!Array.<!proto.google.protobuf.Any>} value */
proto.gobgpapi.PeerConf.prototype.setRemoteCapList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.gobgpapi.PeerConf.prototype.addRemoteCap = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.google.protobuf.Any, opt_index);
};


proto.gobgpapi.PeerConf.prototype.clearRemoteCapList = function() {
  this.setRemoteCapList([]);
};


/**
 * repeated google.protobuf.Any local_cap = 12;
 * @return {!Array.<!proto.google.protobuf.Any>}
 */
proto.gobgpapi.PeerConf.prototype.getLocalCapList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 12));
};


/** @param {!Array.<!proto.google.protobuf.Any>} value */
proto.gobgpapi.PeerConf.prototype.setLocalCapList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.gobgpapi.PeerConf.prototype.addLocalCap = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.google.protobuf.Any, opt_index);
};


proto.gobgpapi.PeerConf.prototype.clearLocalCapList = function() {
  this.setLocalCapList([]);
};


/**
 * optional string id = 13;
 * @return {string}
 */
proto.gobgpapi.PeerConf.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerConf.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string neighbor_interface = 14;
 * @return {string}
 */
proto.gobgpapi.PeerConf.prototype.getNeighborInterface = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerConf.prototype.setNeighborInterface = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string vrf = 15;
 * @return {string}
 */
proto.gobgpapi.PeerConf.prototype.getVrf = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerConf.prototype.setVrf = function(value) {
  jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional uint32 allow_own_as = 16;
 * @return {number}
 */
proto.gobgpapi.PeerConf.prototype.getAllowOwnAs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerConf.prototype.setAllowOwnAs = function(value) {
  jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional bool replace_peer_as = 17;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.PeerConf.prototype.getReplacePeerAs = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 17, false));
};


/** @param {boolean} value */
proto.gobgpapi.PeerConf.prototype.setReplacePeerAs = function(value) {
  jspb.Message.setProto3BooleanField(this, 17, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.PeerGroupConf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.PeerGroupConf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.PeerGroupConf.displayName = 'proto.gobgpapi.PeerGroupConf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.PeerGroupConf.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.PeerGroupConf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.PeerGroupConf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.PeerGroupConf.toObject = function(includeInstance, msg) {
  var f, obj = {
    authPassword: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    localAs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    peerAs: jspb.Message.getFieldWithDefault(msg, 4, 0),
    peerGroupName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    peerType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    removePrivateAs: jspb.Message.getFieldWithDefault(msg, 7, 0),
    routeFlapDamping: jspb.Message.getFieldWithDefault(msg, 8, false),
    sendCommunity: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.PeerGroupConf}
 */
proto.gobgpapi.PeerGroupConf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.PeerGroupConf;
  return proto.gobgpapi.PeerGroupConf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.PeerGroupConf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.PeerGroupConf}
 */
proto.gobgpapi.PeerGroupConf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLocalAs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPeerAs(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerGroupName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPeerType(value);
      break;
    case 7:
      var value = /** @type {!proto.gobgpapi.PeerGroupConf.RemovePrivateAs} */ (reader.readEnum());
      msg.setRemovePrivateAs(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRouteFlapDamping(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSendCommunity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.PeerGroupConf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.PeerGroupConf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.PeerGroupConf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.PeerGroupConf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocalAs();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPeerAs();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPeerGroupName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPeerType();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getRemovePrivateAs();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getRouteFlapDamping();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getSendCommunity();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.gobgpapi.PeerGroupConf.RemovePrivateAs = {
  NONE: 0,
  ALL: 1,
  REPLACE: 2
};

/**
 * optional string auth_password = 1;
 * @return {string}
 */
proto.gobgpapi.PeerGroupConf.prototype.getAuthPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerGroupConf.prototype.setAuthPassword = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.gobgpapi.PeerGroupConf.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerGroupConf.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 local_as = 3;
 * @return {number}
 */
proto.gobgpapi.PeerGroupConf.prototype.getLocalAs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerGroupConf.prototype.setLocalAs = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 peer_as = 4;
 * @return {number}
 */
proto.gobgpapi.PeerGroupConf.prototype.getPeerAs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerGroupConf.prototype.setPeerAs = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string peer_group_name = 5;
 * @return {string}
 */
proto.gobgpapi.PeerGroupConf.prototype.getPeerGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerGroupConf.prototype.setPeerGroupName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 peer_type = 6;
 * @return {number}
 */
proto.gobgpapi.PeerGroupConf.prototype.getPeerType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerGroupConf.prototype.setPeerType = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional RemovePrivateAs remove_private_as = 7;
 * @return {!proto.gobgpapi.PeerGroupConf.RemovePrivateAs}
 */
proto.gobgpapi.PeerGroupConf.prototype.getRemovePrivateAs = function() {
  return /** @type {!proto.gobgpapi.PeerGroupConf.RemovePrivateAs} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.gobgpapi.PeerGroupConf.RemovePrivateAs} value */
proto.gobgpapi.PeerGroupConf.prototype.setRemovePrivateAs = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional bool route_flap_damping = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.PeerGroupConf.prototype.getRouteFlapDamping = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.gobgpapi.PeerGroupConf.prototype.setRouteFlapDamping = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional uint32 send_community = 9;
 * @return {number}
 */
proto.gobgpapi.PeerGroupConf.prototype.getSendCommunity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerGroupConf.prototype.setSendCommunity = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.PeerGroupState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.PeerGroupState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.PeerGroupState.displayName = 'proto.gobgpapi.PeerGroupState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.PeerGroupState.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.PeerGroupState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.PeerGroupState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.PeerGroupState.toObject = function(includeInstance, msg) {
  var f, obj = {
    authPassword: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    localAs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    peerAs: jspb.Message.getFieldWithDefault(msg, 4, 0),
    peerGroupName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    peerType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    removePrivateAs: jspb.Message.getFieldWithDefault(msg, 7, 0),
    routeFlapDamping: jspb.Message.getFieldWithDefault(msg, 8, false),
    sendCommunity: jspb.Message.getFieldWithDefault(msg, 9, 0),
    totalPaths: jspb.Message.getFieldWithDefault(msg, 10, 0),
    totalPrefixes: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.PeerGroupState}
 */
proto.gobgpapi.PeerGroupState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.PeerGroupState;
  return proto.gobgpapi.PeerGroupState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.PeerGroupState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.PeerGroupState}
 */
proto.gobgpapi.PeerGroupState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLocalAs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPeerAs(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerGroupName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPeerType(value);
      break;
    case 7:
      var value = /** @type {!proto.gobgpapi.PeerGroupState.RemovePrivateAs} */ (reader.readEnum());
      msg.setRemovePrivateAs(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRouteFlapDamping(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSendCommunity(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPaths(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPrefixes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.PeerGroupState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.PeerGroupState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.PeerGroupState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.PeerGroupState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocalAs();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPeerAs();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPeerGroupName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPeerType();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getRemovePrivateAs();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getRouteFlapDamping();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getSendCommunity();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getTotalPaths();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getTotalPrefixes();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.gobgpapi.PeerGroupState.RemovePrivateAs = {
  NONE: 0,
  ALL: 1,
  REPLACE: 2
};

/**
 * optional string auth_password = 1;
 * @return {string}
 */
proto.gobgpapi.PeerGroupState.prototype.getAuthPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerGroupState.prototype.setAuthPassword = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.gobgpapi.PeerGroupState.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerGroupState.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 local_as = 3;
 * @return {number}
 */
proto.gobgpapi.PeerGroupState.prototype.getLocalAs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerGroupState.prototype.setLocalAs = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 peer_as = 4;
 * @return {number}
 */
proto.gobgpapi.PeerGroupState.prototype.getPeerAs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerGroupState.prototype.setPeerAs = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string peer_group_name = 5;
 * @return {string}
 */
proto.gobgpapi.PeerGroupState.prototype.getPeerGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerGroupState.prototype.setPeerGroupName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 peer_type = 6;
 * @return {number}
 */
proto.gobgpapi.PeerGroupState.prototype.getPeerType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerGroupState.prototype.setPeerType = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional RemovePrivateAs remove_private_as = 7;
 * @return {!proto.gobgpapi.PeerGroupState.RemovePrivateAs}
 */
proto.gobgpapi.PeerGroupState.prototype.getRemovePrivateAs = function() {
  return /** @type {!proto.gobgpapi.PeerGroupState.RemovePrivateAs} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.gobgpapi.PeerGroupState.RemovePrivateAs} value */
proto.gobgpapi.PeerGroupState.prototype.setRemovePrivateAs = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional bool route_flap_damping = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.PeerGroupState.prototype.getRouteFlapDamping = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.gobgpapi.PeerGroupState.prototype.setRouteFlapDamping = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional uint32 send_community = 9;
 * @return {number}
 */
proto.gobgpapi.PeerGroupState.prototype.getSendCommunity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerGroupState.prototype.setSendCommunity = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 total_paths = 10;
 * @return {number}
 */
proto.gobgpapi.PeerGroupState.prototype.getTotalPaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerGroupState.prototype.setTotalPaths = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 total_prefixes = 11;
 * @return {number}
 */
proto.gobgpapi.PeerGroupState.prototype.getTotalPrefixes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerGroupState.prototype.setTotalPrefixes = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.EbgpMultihop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.EbgpMultihop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.EbgpMultihop.displayName = 'proto.gobgpapi.EbgpMultihop';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.EbgpMultihop.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.EbgpMultihop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.EbgpMultihop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.EbgpMultihop.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getFieldWithDefault(msg, 1, false),
    multihopTtl: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.EbgpMultihop}
 */
proto.gobgpapi.EbgpMultihop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.EbgpMultihop;
  return proto.gobgpapi.EbgpMultihop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.EbgpMultihop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.EbgpMultihop}
 */
proto.gobgpapi.EbgpMultihop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMultihopTtl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.EbgpMultihop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.EbgpMultihop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.EbgpMultihop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.EbgpMultihop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMultihopTtl();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.EbgpMultihop.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.EbgpMultihop.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 multihop_ttl = 2;
 * @return {number}
 */
proto.gobgpapi.EbgpMultihop.prototype.getMultihopTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.EbgpMultihop.prototype.setMultihopTtl = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.RouteReflector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.RouteReflector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.RouteReflector.displayName = 'proto.gobgpapi.RouteReflector';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.RouteReflector.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.RouteReflector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.RouteReflector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteReflector.toObject = function(includeInstance, msg) {
  var f, obj = {
    routeReflectorClient: jspb.Message.getFieldWithDefault(msg, 1, false),
    routeReflectorClusterId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.RouteReflector}
 */
proto.gobgpapi.RouteReflector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.RouteReflector;
  return proto.gobgpapi.RouteReflector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.RouteReflector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.RouteReflector}
 */
proto.gobgpapi.RouteReflector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRouteReflectorClient(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRouteReflectorClusterId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.RouteReflector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.RouteReflector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.RouteReflector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteReflector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRouteReflectorClient();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRouteReflectorClusterId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool route_reflector_client = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteReflector.prototype.getRouteReflectorClient = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteReflector.prototype.setRouteReflectorClient = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string route_reflector_cluster_id = 2;
 * @return {string}
 */
proto.gobgpapi.RouteReflector.prototype.getRouteReflectorClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.RouteReflector.prototype.setRouteReflectorClusterId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.PeerState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.PeerState.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.PeerState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.PeerState.displayName = 'proto.gobgpapi.PeerState';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.PeerState.repeatedFields_ = [14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.PeerState.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.PeerState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.PeerState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.PeerState.toObject = function(includeInstance, msg) {
  var f, obj = {
    authPassword: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    localAs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    messages: (f = msg.getMessages()) && proto.gobgpapi.Messages.toObject(includeInstance, f),
    neighborAddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    peerAs: jspb.Message.getFieldWithDefault(msg, 6, 0),
    peerGroup: jspb.Message.getFieldWithDefault(msg, 7, ""),
    peerType: jspb.Message.getFieldWithDefault(msg, 8, 0),
    queues: (f = msg.getQueues()) && proto.gobgpapi.Queues.toObject(includeInstance, f),
    removePrivateAs: jspb.Message.getFieldWithDefault(msg, 10, 0),
    routeFlapDamping: jspb.Message.getFieldWithDefault(msg, 11, false),
    sendCommunity: jspb.Message.getFieldWithDefault(msg, 12, 0),
    sessionState: jspb.Message.getFieldWithDefault(msg, 13, 0),
    supportedCapabilitiesList: jspb.Message.getRepeatedField(msg, 14),
    adminState: jspb.Message.getFieldWithDefault(msg, 15, 0),
    received: jspb.Message.getFieldWithDefault(msg, 16, 0),
    accepted: jspb.Message.getFieldWithDefault(msg, 17, 0),
    advertised: jspb.Message.getFieldWithDefault(msg, 18, 0),
    outQ: jspb.Message.getFieldWithDefault(msg, 19, 0),
    flops: jspb.Message.getFieldWithDefault(msg, 20, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.PeerState}
 */
proto.gobgpapi.PeerState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.PeerState;
  return proto.gobgpapi.PeerState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.PeerState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.PeerState}
 */
proto.gobgpapi.PeerState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLocalAs(value);
      break;
    case 4:
      var value = new proto.gobgpapi.Messages;
      reader.readMessage(value,proto.gobgpapi.Messages.deserializeBinaryFromReader);
      msg.setMessages(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNeighborAddress(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPeerAs(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerGroup(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPeerType(value);
      break;
    case 9:
      var value = new proto.gobgpapi.Queues;
      reader.readMessage(value,proto.gobgpapi.Queues.deserializeBinaryFromReader);
      msg.setQueues(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRemovePrivateAs(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRouteFlapDamping(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSendCommunity(value);
      break;
    case 13:
      var value = /** @type {!proto.gobgpapi.PeerState.SessionState} */ (reader.readEnum());
      msg.setSessionState(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addSupportedCapabilities(value);
      break;
    case 15:
      var value = /** @type {!proto.gobgpapi.PeerState.AdminState} */ (reader.readEnum());
      msg.setAdminState(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReceived(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccepted(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAdvertised(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOutQ(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFlops(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.PeerState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.PeerState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.PeerState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.PeerState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocalAs();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getMessages();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.gobgpapi.Messages.serializeBinaryToWriter
    );
  }
  f = message.getNeighborAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPeerAs();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getPeerGroup();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPeerType();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getQueues();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.gobgpapi.Queues.serializeBinaryToWriter
    );
  }
  f = message.getRemovePrivateAs();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getRouteFlapDamping();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getSendCommunity();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getSessionState();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getSupportedCapabilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getAdminState();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getReceived();
  if (f !== 0) {
    writer.writeUint32(
      16,
      f
    );
  }
  f = message.getAccepted();
  if (f !== 0) {
    writer.writeUint32(
      17,
      f
    );
  }
  f = message.getAdvertised();
  if (f !== 0) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = message.getOutQ();
  if (f !== 0) {
    writer.writeUint32(
      19,
      f
    );
  }
  f = message.getFlops();
  if (f !== 0) {
    writer.writeUint32(
      20,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.gobgpapi.PeerState.SessionState = {
  UNKNOWN: 0,
  IDLE: 1,
  CONNECT: 2,
  ACTIVE: 3,
  OPENSENT: 4,
  OPENCONFIRM: 5,
  ESTABLISHED: 6
};

/**
 * @enum {number}
 */
proto.gobgpapi.PeerState.AdminState = {
  UP: 0,
  DOWN: 1,
  PFX_CT: 2
};

/**
 * optional string auth_password = 1;
 * @return {string}
 */
proto.gobgpapi.PeerState.prototype.getAuthPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerState.prototype.setAuthPassword = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.gobgpapi.PeerState.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerState.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 local_as = 3;
 * @return {number}
 */
proto.gobgpapi.PeerState.prototype.getLocalAs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerState.prototype.setLocalAs = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Messages messages = 4;
 * @return {?proto.gobgpapi.Messages}
 */
proto.gobgpapi.PeerState.prototype.getMessages = function() {
  return /** @type{?proto.gobgpapi.Messages} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Messages, 4));
};


/** @param {?proto.gobgpapi.Messages|undefined} value */
proto.gobgpapi.PeerState.prototype.setMessages = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.gobgpapi.PeerState.prototype.clearMessages = function() {
  this.setMessages(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.PeerState.prototype.hasMessages = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string neighbor_address = 5;
 * @return {string}
 */
proto.gobgpapi.PeerState.prototype.getNeighborAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerState.prototype.setNeighborAddress = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 peer_as = 6;
 * @return {number}
 */
proto.gobgpapi.PeerState.prototype.getPeerAs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerState.prototype.setPeerAs = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string peer_group = 7;
 * @return {string}
 */
proto.gobgpapi.PeerState.prototype.getPeerGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.gobgpapi.PeerState.prototype.setPeerGroup = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint32 peer_type = 8;
 * @return {number}
 */
proto.gobgpapi.PeerState.prototype.getPeerType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerState.prototype.setPeerType = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional Queues queues = 9;
 * @return {?proto.gobgpapi.Queues}
 */
proto.gobgpapi.PeerState.prototype.getQueues = function() {
  return /** @type{?proto.gobgpapi.Queues} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Queues, 9));
};


/** @param {?proto.gobgpapi.Queues|undefined} value */
proto.gobgpapi.PeerState.prototype.setQueues = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.gobgpapi.PeerState.prototype.clearQueues = function() {
  this.setQueues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.PeerState.prototype.hasQueues = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 remove_private_as = 10;
 * @return {number}
 */
proto.gobgpapi.PeerState.prototype.getRemovePrivateAs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerState.prototype.setRemovePrivateAs = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool route_flap_damping = 11;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.PeerState.prototype.getRouteFlapDamping = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 11, false));
};


/** @param {boolean} value */
proto.gobgpapi.PeerState.prototype.setRouteFlapDamping = function(value) {
  jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional uint32 send_community = 12;
 * @return {number}
 */
proto.gobgpapi.PeerState.prototype.getSendCommunity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerState.prototype.setSendCommunity = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional SessionState session_state = 13;
 * @return {!proto.gobgpapi.PeerState.SessionState}
 */
proto.gobgpapi.PeerState.prototype.getSessionState = function() {
  return /** @type {!proto.gobgpapi.PeerState.SessionState} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {!proto.gobgpapi.PeerState.SessionState} value */
proto.gobgpapi.PeerState.prototype.setSessionState = function(value) {
  jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * repeated string supported_capabilities = 14;
 * @return {!Array.<string>}
 */
proto.gobgpapi.PeerState.prototype.getSupportedCapabilitiesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/** @param {!Array.<string>} value */
proto.gobgpapi.PeerState.prototype.setSupportedCapabilitiesList = function(value) {
  jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.gobgpapi.PeerState.prototype.addSupportedCapabilities = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


proto.gobgpapi.PeerState.prototype.clearSupportedCapabilitiesList = function() {
  this.setSupportedCapabilitiesList([]);
};


/**
 * optional AdminState admin_state = 15;
 * @return {!proto.gobgpapi.PeerState.AdminState}
 */
proto.gobgpapi.PeerState.prototype.getAdminState = function() {
  return /** @type {!proto.gobgpapi.PeerState.AdminState} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {!proto.gobgpapi.PeerState.AdminState} value */
proto.gobgpapi.PeerState.prototype.setAdminState = function(value) {
  jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional uint32 received = 16;
 * @return {number}
 */
proto.gobgpapi.PeerState.prototype.getReceived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerState.prototype.setReceived = function(value) {
  jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional uint32 accepted = 17;
 * @return {number}
 */
proto.gobgpapi.PeerState.prototype.getAccepted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerState.prototype.setAccepted = function(value) {
  jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional uint32 advertised = 18;
 * @return {number}
 */
proto.gobgpapi.PeerState.prototype.getAdvertised = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerState.prototype.setAdvertised = function(value) {
  jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional uint32 out_q = 19;
 * @return {number}
 */
proto.gobgpapi.PeerState.prototype.getOutQ = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerState.prototype.setOutQ = function(value) {
  jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional uint32 flops = 20;
 * @return {number}
 */
proto.gobgpapi.PeerState.prototype.getFlops = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/** @param {number} value */
proto.gobgpapi.PeerState.prototype.setFlops = function(value) {
  jspb.Message.setProto3IntField(this, 20, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Messages = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.Messages, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Messages.displayName = 'proto.gobgpapi.Messages';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Messages.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Messages.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Messages} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Messages.toObject = function(includeInstance, msg) {
  var f, obj = {
    received: (f = msg.getReceived()) && proto.gobgpapi.Message.toObject(includeInstance, f),
    sent: (f = msg.getSent()) && proto.gobgpapi.Message.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Messages}
 */
proto.gobgpapi.Messages.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Messages;
  return proto.gobgpapi.Messages.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Messages} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Messages}
 */
proto.gobgpapi.Messages.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Message;
      reader.readMessage(value,proto.gobgpapi.Message.deserializeBinaryFromReader);
      msg.setReceived(value);
      break;
    case 2:
      var value = new proto.gobgpapi.Message;
      reader.readMessage(value,proto.gobgpapi.Message.deserializeBinaryFromReader);
      msg.setSent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Messages.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Messages.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Messages} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Messages.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceived();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Message.serializeBinaryToWriter
    );
  }
  f = message.getSent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.Message.serializeBinaryToWriter
    );
  }
};


/**
 * optional Message received = 1;
 * @return {?proto.gobgpapi.Message}
 */
proto.gobgpapi.Messages.prototype.getReceived = function() {
  return /** @type{?proto.gobgpapi.Message} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Message, 1));
};


/** @param {?proto.gobgpapi.Message|undefined} value */
proto.gobgpapi.Messages.prototype.setReceived = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.Messages.prototype.clearReceived = function() {
  this.setReceived(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Messages.prototype.hasReceived = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message sent = 2;
 * @return {?proto.gobgpapi.Message}
 */
proto.gobgpapi.Messages.prototype.getSent = function() {
  return /** @type{?proto.gobgpapi.Message} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Message, 2));
};


/** @param {?proto.gobgpapi.Message|undefined} value */
proto.gobgpapi.Messages.prototype.setSent = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.Messages.prototype.clearSent = function() {
  this.setSent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Messages.prototype.hasSent = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Message.displayName = 'proto.gobgpapi.Message';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    notification: jspb.Message.getFieldWithDefault(msg, 1, 0),
    update: jspb.Message.getFieldWithDefault(msg, 2, 0),
    open: jspb.Message.getFieldWithDefault(msg, 3, 0),
    keepalive: jspb.Message.getFieldWithDefault(msg, 4, 0),
    refresh: jspb.Message.getFieldWithDefault(msg, 5, 0),
    discarded: jspb.Message.getFieldWithDefault(msg, 6, 0),
    total: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Message}
 */
proto.gobgpapi.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Message;
  return proto.gobgpapi.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Message}
 */
proto.gobgpapi.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNotification(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUpdate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOpen(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setKeepalive(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRefresh(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDiscarded(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotification();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getUpdate();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getOpen();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getKeepalive();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getRefresh();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getDiscarded();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional uint64 notification = 1;
 * @return {number}
 */
proto.gobgpapi.Message.prototype.getNotification = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.Message.prototype.setNotification = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 update = 2;
 * @return {number}
 */
proto.gobgpapi.Message.prototype.getUpdate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.Message.prototype.setUpdate = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 open = 3;
 * @return {number}
 */
proto.gobgpapi.Message.prototype.getOpen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.Message.prototype.setOpen = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 keepalive = 4;
 * @return {number}
 */
proto.gobgpapi.Message.prototype.getKeepalive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.gobgpapi.Message.prototype.setKeepalive = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 refresh = 5;
 * @return {number}
 */
proto.gobgpapi.Message.prototype.getRefresh = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.gobgpapi.Message.prototype.setRefresh = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 discarded = 6;
 * @return {number}
 */
proto.gobgpapi.Message.prototype.getDiscarded = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.gobgpapi.Message.prototype.setDiscarded = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 total = 7;
 * @return {number}
 */
proto.gobgpapi.Message.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.gobgpapi.Message.prototype.setTotal = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Queues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.Queues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Queues.displayName = 'proto.gobgpapi.Queues';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Queues.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Queues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Queues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Queues.toObject = function(includeInstance, msg) {
  var f, obj = {
    input: jspb.Message.getFieldWithDefault(msg, 1, 0),
    output: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Queues}
 */
proto.gobgpapi.Queues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Queues;
  return proto.gobgpapi.Queues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Queues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Queues}
 */
proto.gobgpapi.Queues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInput(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOutput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Queues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Queues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Queues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Queues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInput();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOutput();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 input = 1;
 * @return {number}
 */
proto.gobgpapi.Queues.prototype.getInput = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.Queues.prototype.setInput = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 output = 2;
 * @return {number}
 */
proto.gobgpapi.Queues.prototype.getOutput = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.Queues.prototype.setOutput = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Timers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.Timers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Timers.displayName = 'proto.gobgpapi.Timers';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Timers.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Timers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Timers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Timers.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.gobgpapi.TimersConfig.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.gobgpapi.TimersState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Timers}
 */
proto.gobgpapi.Timers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Timers;
  return proto.gobgpapi.Timers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Timers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Timers}
 */
proto.gobgpapi.Timers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.TimersConfig;
      reader.readMessage(value,proto.gobgpapi.TimersConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.gobgpapi.TimersState;
      reader.readMessage(value,proto.gobgpapi.TimersState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Timers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Timers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Timers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Timers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.TimersConfig.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.TimersState.serializeBinaryToWriter
    );
  }
};


/**
 * optional TimersConfig config = 1;
 * @return {?proto.gobgpapi.TimersConfig}
 */
proto.gobgpapi.Timers.prototype.getConfig = function() {
  return /** @type{?proto.gobgpapi.TimersConfig} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.TimersConfig, 1));
};


/** @param {?proto.gobgpapi.TimersConfig|undefined} value */
proto.gobgpapi.Timers.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.Timers.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Timers.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TimersState state = 2;
 * @return {?proto.gobgpapi.TimersState}
 */
proto.gobgpapi.Timers.prototype.getState = function() {
  return /** @type{?proto.gobgpapi.TimersState} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.TimersState, 2));
};


/** @param {?proto.gobgpapi.TimersState|undefined} value */
proto.gobgpapi.Timers.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.Timers.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Timers.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.TimersConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.TimersConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.TimersConfig.displayName = 'proto.gobgpapi.TimersConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.TimersConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.TimersConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.TimersConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.TimersConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectRetry: jspb.Message.getFieldWithDefault(msg, 1, 0),
    holdTime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    keepaliveInterval: jspb.Message.getFieldWithDefault(msg, 3, 0),
    minimumAdvertisementInterval: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.TimersConfig}
 */
proto.gobgpapi.TimersConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.TimersConfig;
  return proto.gobgpapi.TimersConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.TimersConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.TimersConfig}
 */
proto.gobgpapi.TimersConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setConnectRetry(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHoldTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setKeepaliveInterval(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinimumAdvertisementInterval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.TimersConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.TimersConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.TimersConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.TimersConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectRetry();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getHoldTime();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getKeepaliveInterval();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getMinimumAdvertisementInterval();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 connect_retry = 1;
 * @return {number}
 */
proto.gobgpapi.TimersConfig.prototype.getConnectRetry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.TimersConfig.prototype.setConnectRetry = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 hold_time = 2;
 * @return {number}
 */
proto.gobgpapi.TimersConfig.prototype.getHoldTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.TimersConfig.prototype.setHoldTime = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 keepalive_interval = 3;
 * @return {number}
 */
proto.gobgpapi.TimersConfig.prototype.getKeepaliveInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.TimersConfig.prototype.setKeepaliveInterval = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 minimum_advertisement_interval = 4;
 * @return {number}
 */
proto.gobgpapi.TimersConfig.prototype.getMinimumAdvertisementInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.gobgpapi.TimersConfig.prototype.setMinimumAdvertisementInterval = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.TimersState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.TimersState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.TimersState.displayName = 'proto.gobgpapi.TimersState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.TimersState.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.TimersState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.TimersState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.TimersState.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectRetry: jspb.Message.getFieldWithDefault(msg, 1, 0),
    holdTime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    keepaliveInterval: jspb.Message.getFieldWithDefault(msg, 3, 0),
    minimumAdvertisementInterval: jspb.Message.getFieldWithDefault(msg, 4, 0),
    negotiatedHoldTime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    uptime: jspb.Message.getFieldWithDefault(msg, 6, 0),
    downtime: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.TimersState}
 */
proto.gobgpapi.TimersState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.TimersState;
  return proto.gobgpapi.TimersState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.TimersState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.TimersState}
 */
proto.gobgpapi.TimersState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setConnectRetry(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHoldTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setKeepaliveInterval(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinimumAdvertisementInterval(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNegotiatedHoldTime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUptime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDowntime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.TimersState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.TimersState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.TimersState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.TimersState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectRetry();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getHoldTime();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getKeepaliveInterval();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getMinimumAdvertisementInterval();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getNegotiatedHoldTime();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getUptime();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getDowntime();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional uint64 connect_retry = 1;
 * @return {number}
 */
proto.gobgpapi.TimersState.prototype.getConnectRetry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.TimersState.prototype.setConnectRetry = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 hold_time = 2;
 * @return {number}
 */
proto.gobgpapi.TimersState.prototype.getHoldTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.TimersState.prototype.setHoldTime = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 keepalive_interval = 3;
 * @return {number}
 */
proto.gobgpapi.TimersState.prototype.getKeepaliveInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.TimersState.prototype.setKeepaliveInterval = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 minimum_advertisement_interval = 4;
 * @return {number}
 */
proto.gobgpapi.TimersState.prototype.getMinimumAdvertisementInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.gobgpapi.TimersState.prototype.setMinimumAdvertisementInterval = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 negotiated_hold_time = 5;
 * @return {number}
 */
proto.gobgpapi.TimersState.prototype.getNegotiatedHoldTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.gobgpapi.TimersState.prototype.setNegotiatedHoldTime = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 uptime = 6;
 * @return {number}
 */
proto.gobgpapi.TimersState.prototype.getUptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.gobgpapi.TimersState.prototype.setUptime = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 downtime = 7;
 * @return {number}
 */
proto.gobgpapi.TimersState.prototype.getDowntime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.gobgpapi.TimersState.prototype.setDowntime = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Transport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.Transport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Transport.displayName = 'proto.gobgpapi.Transport';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Transport.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Transport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Transport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Transport.toObject = function(includeInstance, msg) {
  var f, obj = {
    localAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    localPort: jspb.Message.getFieldWithDefault(msg, 2, 0),
    mtuDiscovery: jspb.Message.getFieldWithDefault(msg, 3, false),
    passiveMode: jspb.Message.getFieldWithDefault(msg, 4, false),
    remoteAddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    remotePort: jspb.Message.getFieldWithDefault(msg, 6, 0),
    tcpMss: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Transport}
 */
proto.gobgpapi.Transport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Transport;
  return proto.gobgpapi.Transport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Transport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Transport}
 */
proto.gobgpapi.Transport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLocalPort(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMtuDiscovery(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPassiveMode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemoteAddress(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRemotePort(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTcpMss(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Transport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Transport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Transport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Transport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocalAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocalPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMtuDiscovery();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPassiveMode();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getRemoteAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRemotePort();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getTcpMss();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional string local_address = 1;
 * @return {string}
 */
proto.gobgpapi.Transport.prototype.getLocalAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.Transport.prototype.setLocalAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 local_port = 2;
 * @return {number}
 */
proto.gobgpapi.Transport.prototype.getLocalPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.Transport.prototype.setLocalPort = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool mtu_discovery = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.Transport.prototype.getMtuDiscovery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.gobgpapi.Transport.prototype.setMtuDiscovery = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool passive_mode = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.Transport.prototype.getPassiveMode = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.gobgpapi.Transport.prototype.setPassiveMode = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string remote_address = 5;
 * @return {string}
 */
proto.gobgpapi.Transport.prototype.getRemoteAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.gobgpapi.Transport.prototype.setRemoteAddress = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 remote_port = 6;
 * @return {number}
 */
proto.gobgpapi.Transport.prototype.getRemotePort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.gobgpapi.Transport.prototype.setRemotePort = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 tcp_mss = 7;
 * @return {number}
 */
proto.gobgpapi.Transport.prototype.getTcpMss = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.gobgpapi.Transport.prototype.setTcpMss = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.RouteServer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.RouteServer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.RouteServer.displayName = 'proto.gobgpapi.RouteServer';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.RouteServer.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.RouteServer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.RouteServer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteServer.toObject = function(includeInstance, msg) {
  var f, obj = {
    routeServerClient: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.RouteServer}
 */
proto.gobgpapi.RouteServer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.RouteServer;
  return proto.gobgpapi.RouteServer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.RouteServer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.RouteServer}
 */
proto.gobgpapi.RouteServer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRouteServerClient(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.RouteServer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.RouteServer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.RouteServer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteServer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRouteServerClient();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool route_server_client = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteServer.prototype.getRouteServerClient = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteServer.prototype.setRouteServerClient = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.GracefulRestart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.GracefulRestart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.GracefulRestart.displayName = 'proto.gobgpapi.GracefulRestart';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.GracefulRestart.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.GracefulRestart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.GracefulRestart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.GracefulRestart.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getFieldWithDefault(msg, 1, false),
    restartTime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    helperOnly: jspb.Message.getFieldWithDefault(msg, 3, false),
    deferralTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    notificationEnabled: jspb.Message.getFieldWithDefault(msg, 5, false),
    longlivedEnabled: jspb.Message.getFieldWithDefault(msg, 6, false),
    staleRoutesTime: jspb.Message.getFieldWithDefault(msg, 7, 0),
    peerRestartTime: jspb.Message.getFieldWithDefault(msg, 8, 0),
    peerRestarting: jspb.Message.getFieldWithDefault(msg, 9, false),
    localRestarting: jspb.Message.getFieldWithDefault(msg, 10, false),
    mode: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.GracefulRestart}
 */
proto.gobgpapi.GracefulRestart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.GracefulRestart;
  return proto.gobgpapi.GracefulRestart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.GracefulRestart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.GracefulRestart}
 */
proto.gobgpapi.GracefulRestart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRestartTime(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHelperOnly(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDeferralTime(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNotificationEnabled(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLonglivedEnabled(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStaleRoutesTime(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPeerRestartTime(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPeerRestarting(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLocalRestarting(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.GracefulRestart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.GracefulRestart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.GracefulRestart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.GracefulRestart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRestartTime();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getHelperOnly();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDeferralTime();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getNotificationEnabled();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getLonglivedEnabled();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getStaleRoutesTime();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getPeerRestartTime();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getPeerRestarting();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getLocalRestarting();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getMode();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.GracefulRestart.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.GracefulRestart.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 restart_time = 2;
 * @return {number}
 */
proto.gobgpapi.GracefulRestart.prototype.getRestartTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.GracefulRestart.prototype.setRestartTime = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool helper_only = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.GracefulRestart.prototype.getHelperOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.gobgpapi.GracefulRestart.prototype.setHelperOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint32 deferral_time = 4;
 * @return {number}
 */
proto.gobgpapi.GracefulRestart.prototype.getDeferralTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.gobgpapi.GracefulRestart.prototype.setDeferralTime = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool notification_enabled = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.GracefulRestart.prototype.getNotificationEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.gobgpapi.GracefulRestart.prototype.setNotificationEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool longlived_enabled = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.GracefulRestart.prototype.getLonglivedEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.gobgpapi.GracefulRestart.prototype.setLonglivedEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional uint32 stale_routes_time = 7;
 * @return {number}
 */
proto.gobgpapi.GracefulRestart.prototype.getStaleRoutesTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.gobgpapi.GracefulRestart.prototype.setStaleRoutesTime = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 peer_restart_time = 8;
 * @return {number}
 */
proto.gobgpapi.GracefulRestart.prototype.getPeerRestartTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.gobgpapi.GracefulRestart.prototype.setPeerRestartTime = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool peer_restarting = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.GracefulRestart.prototype.getPeerRestarting = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.gobgpapi.GracefulRestart.prototype.setPeerRestarting = function(value) {
  jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool local_restarting = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.GracefulRestart.prototype.getLocalRestarting = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.gobgpapi.GracefulRestart.prototype.setLocalRestarting = function(value) {
  jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string mode = 11;
 * @return {string}
 */
proto.gobgpapi.GracefulRestart.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.gobgpapi.GracefulRestart.prototype.setMode = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.MpGracefulRestartConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.MpGracefulRestartConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.MpGracefulRestartConfig.displayName = 'proto.gobgpapi.MpGracefulRestartConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.MpGracefulRestartConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.MpGracefulRestartConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.MpGracefulRestartConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MpGracefulRestartConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.MpGracefulRestartConfig}
 */
proto.gobgpapi.MpGracefulRestartConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.MpGracefulRestartConfig;
  return proto.gobgpapi.MpGracefulRestartConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.MpGracefulRestartConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.MpGracefulRestartConfig}
 */
proto.gobgpapi.MpGracefulRestartConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.MpGracefulRestartConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.MpGracefulRestartConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.MpGracefulRestartConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MpGracefulRestartConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.MpGracefulRestartConfig.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.MpGracefulRestartConfig.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.MpGracefulRestartState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.MpGracefulRestartState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.MpGracefulRestartState.displayName = 'proto.gobgpapi.MpGracefulRestartState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.MpGracefulRestartState.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.MpGracefulRestartState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.MpGracefulRestartState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MpGracefulRestartState.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getFieldWithDefault(msg, 1, false),
    received: jspb.Message.getFieldWithDefault(msg, 2, false),
    advertised: jspb.Message.getFieldWithDefault(msg, 3, false),
    endOfRibReceived: jspb.Message.getFieldWithDefault(msg, 4, false),
    endOfRibSent: jspb.Message.getFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.MpGracefulRestartState}
 */
proto.gobgpapi.MpGracefulRestartState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.MpGracefulRestartState;
  return proto.gobgpapi.MpGracefulRestartState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.MpGracefulRestartState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.MpGracefulRestartState}
 */
proto.gobgpapi.MpGracefulRestartState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReceived(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAdvertised(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEndOfRibReceived(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEndOfRibSent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.MpGracefulRestartState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.MpGracefulRestartState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.MpGracefulRestartState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MpGracefulRestartState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getReceived();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAdvertised();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getEndOfRibReceived();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getEndOfRibSent();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.MpGracefulRestartState.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.MpGracefulRestartState.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool received = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.MpGracefulRestartState.prototype.getReceived = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.MpGracefulRestartState.prototype.setReceived = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool advertised = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.MpGracefulRestartState.prototype.getAdvertised = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.gobgpapi.MpGracefulRestartState.prototype.setAdvertised = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool end_of_rib_received = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.MpGracefulRestartState.prototype.getEndOfRibReceived = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.gobgpapi.MpGracefulRestartState.prototype.setEndOfRibReceived = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool end_of_rib_sent = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.MpGracefulRestartState.prototype.getEndOfRibSent = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.gobgpapi.MpGracefulRestartState.prototype.setEndOfRibSent = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.MpGracefulRestart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.MpGracefulRestart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.MpGracefulRestart.displayName = 'proto.gobgpapi.MpGracefulRestart';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.MpGracefulRestart.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.MpGracefulRestart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.MpGracefulRestart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MpGracefulRestart.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.gobgpapi.MpGracefulRestartConfig.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.gobgpapi.MpGracefulRestartState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.MpGracefulRestart}
 */
proto.gobgpapi.MpGracefulRestart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.MpGracefulRestart;
  return proto.gobgpapi.MpGracefulRestart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.MpGracefulRestart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.MpGracefulRestart}
 */
proto.gobgpapi.MpGracefulRestart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.MpGracefulRestartConfig;
      reader.readMessage(value,proto.gobgpapi.MpGracefulRestartConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.gobgpapi.MpGracefulRestartState;
      reader.readMessage(value,proto.gobgpapi.MpGracefulRestartState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.MpGracefulRestart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.MpGracefulRestart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.MpGracefulRestart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MpGracefulRestart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.MpGracefulRestartConfig.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.MpGracefulRestartState.serializeBinaryToWriter
    );
  }
};


/**
 * optional MpGracefulRestartConfig config = 1;
 * @return {?proto.gobgpapi.MpGracefulRestartConfig}
 */
proto.gobgpapi.MpGracefulRestart.prototype.getConfig = function() {
  return /** @type{?proto.gobgpapi.MpGracefulRestartConfig} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.MpGracefulRestartConfig, 1));
};


/** @param {?proto.gobgpapi.MpGracefulRestartConfig|undefined} value */
proto.gobgpapi.MpGracefulRestart.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.MpGracefulRestart.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.MpGracefulRestart.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MpGracefulRestartState state = 2;
 * @return {?proto.gobgpapi.MpGracefulRestartState}
 */
proto.gobgpapi.MpGracefulRestart.prototype.getState = function() {
  return /** @type{?proto.gobgpapi.MpGracefulRestartState} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.MpGracefulRestartState, 2));
};


/** @param {?proto.gobgpapi.MpGracefulRestartState|undefined} value */
proto.gobgpapi.MpGracefulRestart.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.MpGracefulRestart.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.MpGracefulRestart.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AfiSafiConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AfiSafiConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AfiSafiConfig.displayName = 'proto.gobgpapi.AfiSafiConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AfiSafiConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AfiSafiConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AfiSafiConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AfiSafiConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    family: (f = msg.getFamily()) && proto.gobgpapi.Family.toObject(includeInstance, f),
    enabled: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AfiSafiConfig}
 */
proto.gobgpapi.AfiSafiConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AfiSafiConfig;
  return proto.gobgpapi.AfiSafiConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AfiSafiConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AfiSafiConfig}
 */
proto.gobgpapi.AfiSafiConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Family;
      reader.readMessage(value,proto.gobgpapi.Family.deserializeBinaryFromReader);
      msg.setFamily(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AfiSafiConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AfiSafiConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AfiSafiConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AfiSafiConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFamily();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Family.serializeBinaryToWriter
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Family family = 1;
 * @return {?proto.gobgpapi.Family}
 */
proto.gobgpapi.AfiSafiConfig.prototype.getFamily = function() {
  return /** @type{?proto.gobgpapi.Family} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Family, 1));
};


/** @param {?proto.gobgpapi.Family|undefined} value */
proto.gobgpapi.AfiSafiConfig.prototype.setFamily = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.AfiSafiConfig.prototype.clearFamily = function() {
  this.setFamily(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AfiSafiConfig.prototype.hasFamily = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enabled = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.AfiSafiConfig.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.AfiSafiConfig.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AfiSafiState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AfiSafiState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AfiSafiState.displayName = 'proto.gobgpapi.AfiSafiState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AfiSafiState.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AfiSafiState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AfiSafiState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AfiSafiState.toObject = function(includeInstance, msg) {
  var f, obj = {
    family: (f = msg.getFamily()) && proto.gobgpapi.Family.toObject(includeInstance, f),
    enabled: jspb.Message.getFieldWithDefault(msg, 2, false),
    totalPaths: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalPrefixes: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AfiSafiState}
 */
proto.gobgpapi.AfiSafiState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AfiSafiState;
  return proto.gobgpapi.AfiSafiState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AfiSafiState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AfiSafiState}
 */
proto.gobgpapi.AfiSafiState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.Family;
      reader.readMessage(value,proto.gobgpapi.Family.deserializeBinaryFromReader);
      msg.setFamily(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPaths(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPrefixes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AfiSafiState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AfiSafiState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AfiSafiState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AfiSafiState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFamily();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.Family.serializeBinaryToWriter
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTotalPaths();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalPrefixes();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional Family family = 1;
 * @return {?proto.gobgpapi.Family}
 */
proto.gobgpapi.AfiSafiState.prototype.getFamily = function() {
  return /** @type{?proto.gobgpapi.Family} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Family, 1));
};


/** @param {?proto.gobgpapi.Family|undefined} value */
proto.gobgpapi.AfiSafiState.prototype.setFamily = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.AfiSafiState.prototype.clearFamily = function() {
  this.setFamily(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AfiSafiState.prototype.hasFamily = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enabled = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.AfiSafiState.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.AfiSafiState.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 total_paths = 3;
 * @return {number}
 */
proto.gobgpapi.AfiSafiState.prototype.getTotalPaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.AfiSafiState.prototype.setTotalPaths = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 total_prefixes = 4;
 * @return {number}
 */
proto.gobgpapi.AfiSafiState.prototype.getTotalPrefixes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.gobgpapi.AfiSafiState.prototype.setTotalPrefixes = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.RouteSelectionOptionsConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.RouteSelectionOptionsConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.RouteSelectionOptionsConfig.displayName = 'proto.gobgpapi.RouteSelectionOptionsConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.RouteSelectionOptionsConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.RouteSelectionOptionsConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteSelectionOptionsConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    alwaysCompareMed: jspb.Message.getFieldWithDefault(msg, 1, false),
    ignoreAsPathLength: jspb.Message.getFieldWithDefault(msg, 2, false),
    externalCompareRouterId: jspb.Message.getFieldWithDefault(msg, 3, false),
    advertiseInactiveRoutes: jspb.Message.getFieldWithDefault(msg, 4, false),
    enableAigp: jspb.Message.getFieldWithDefault(msg, 5, false),
    ignoreNextHopIgpMetric: jspb.Message.getFieldWithDefault(msg, 6, false),
    disableBestPathSelection: jspb.Message.getFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.RouteSelectionOptionsConfig}
 */
proto.gobgpapi.RouteSelectionOptionsConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.RouteSelectionOptionsConfig;
  return proto.gobgpapi.RouteSelectionOptionsConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.RouteSelectionOptionsConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.RouteSelectionOptionsConfig}
 */
proto.gobgpapi.RouteSelectionOptionsConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlwaysCompareMed(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreAsPathLength(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExternalCompareRouterId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAdvertiseInactiveRoutes(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAigp(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreNextHopIgpMetric(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableBestPathSelection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.RouteSelectionOptionsConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.RouteSelectionOptionsConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteSelectionOptionsConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlwaysCompareMed();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIgnoreAsPathLength();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getExternalCompareRouterId();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAdvertiseInactiveRoutes();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getEnableAigp();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIgnoreNextHopIgpMetric();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDisableBestPathSelection();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional bool always_compare_med = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.getAlwaysCompareMed = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.setAlwaysCompareMed = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool ignore_as_path_length = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.getIgnoreAsPathLength = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.setIgnoreAsPathLength = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool external_compare_router_id = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.getExternalCompareRouterId = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.setExternalCompareRouterId = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool advertise_inactive_routes = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.getAdvertiseInactiveRoutes = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.setAdvertiseInactiveRoutes = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool enable_aigp = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.getEnableAigp = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.setEnableAigp = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool ignore_next_hop_igp_metric = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.getIgnoreNextHopIgpMetric = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.setIgnoreNextHopIgpMetric = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool disable_best_path_selection = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.getDisableBestPathSelection = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteSelectionOptionsConfig.prototype.setDisableBestPathSelection = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.RouteSelectionOptionsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.RouteSelectionOptionsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.RouteSelectionOptionsState.displayName = 'proto.gobgpapi.RouteSelectionOptionsState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.RouteSelectionOptionsState.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.RouteSelectionOptionsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.RouteSelectionOptionsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteSelectionOptionsState.toObject = function(includeInstance, msg) {
  var f, obj = {
    alwaysCompareMed: jspb.Message.getFieldWithDefault(msg, 1, false),
    ignoreAsPathLength: jspb.Message.getFieldWithDefault(msg, 2, false),
    externalCompareRouterId: jspb.Message.getFieldWithDefault(msg, 3, false),
    advertiseInactiveRoutes: jspb.Message.getFieldWithDefault(msg, 4, false),
    enableAigp: jspb.Message.getFieldWithDefault(msg, 5, false),
    ignoreNextHopIgpMetric: jspb.Message.getFieldWithDefault(msg, 6, false),
    disableBestPathSelection: jspb.Message.getFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.RouteSelectionOptionsState}
 */
proto.gobgpapi.RouteSelectionOptionsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.RouteSelectionOptionsState;
  return proto.gobgpapi.RouteSelectionOptionsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.RouteSelectionOptionsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.RouteSelectionOptionsState}
 */
proto.gobgpapi.RouteSelectionOptionsState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlwaysCompareMed(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreAsPathLength(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExternalCompareRouterId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAdvertiseInactiveRoutes(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAigp(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreNextHopIgpMetric(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableBestPathSelection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.RouteSelectionOptionsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.RouteSelectionOptionsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.RouteSelectionOptionsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteSelectionOptionsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlwaysCompareMed();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIgnoreAsPathLength();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getExternalCompareRouterId();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAdvertiseInactiveRoutes();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getEnableAigp();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIgnoreNextHopIgpMetric();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDisableBestPathSelection();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional bool always_compare_med = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteSelectionOptionsState.prototype.getAlwaysCompareMed = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteSelectionOptionsState.prototype.setAlwaysCompareMed = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool ignore_as_path_length = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteSelectionOptionsState.prototype.getIgnoreAsPathLength = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteSelectionOptionsState.prototype.setIgnoreAsPathLength = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool external_compare_router_id = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteSelectionOptionsState.prototype.getExternalCompareRouterId = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteSelectionOptionsState.prototype.setExternalCompareRouterId = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool advertise_inactive_routes = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteSelectionOptionsState.prototype.getAdvertiseInactiveRoutes = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteSelectionOptionsState.prototype.setAdvertiseInactiveRoutes = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool enable_aigp = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteSelectionOptionsState.prototype.getEnableAigp = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteSelectionOptionsState.prototype.setEnableAigp = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool ignore_next_hop_igp_metric = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteSelectionOptionsState.prototype.getIgnoreNextHopIgpMetric = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteSelectionOptionsState.prototype.setIgnoreNextHopIgpMetric = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool disable_best_path_selection = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RouteSelectionOptionsState.prototype.getDisableBestPathSelection = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.gobgpapi.RouteSelectionOptionsState.prototype.setDisableBestPathSelection = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.RouteSelectionOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.RouteSelectionOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.RouteSelectionOptions.displayName = 'proto.gobgpapi.RouteSelectionOptions';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.RouteSelectionOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.RouteSelectionOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.RouteSelectionOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteSelectionOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.gobgpapi.RouteSelectionOptionsConfig.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.gobgpapi.RouteSelectionOptionsState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.RouteSelectionOptions}
 */
proto.gobgpapi.RouteSelectionOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.RouteSelectionOptions;
  return proto.gobgpapi.RouteSelectionOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.RouteSelectionOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.RouteSelectionOptions}
 */
proto.gobgpapi.RouteSelectionOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.RouteSelectionOptionsConfig;
      reader.readMessage(value,proto.gobgpapi.RouteSelectionOptionsConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.gobgpapi.RouteSelectionOptionsState;
      reader.readMessage(value,proto.gobgpapi.RouteSelectionOptionsState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.RouteSelectionOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.RouteSelectionOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.RouteSelectionOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteSelectionOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.RouteSelectionOptionsConfig.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.RouteSelectionOptionsState.serializeBinaryToWriter
    );
  }
};


/**
 * optional RouteSelectionOptionsConfig config = 1;
 * @return {?proto.gobgpapi.RouteSelectionOptionsConfig}
 */
proto.gobgpapi.RouteSelectionOptions.prototype.getConfig = function() {
  return /** @type{?proto.gobgpapi.RouteSelectionOptionsConfig} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RouteSelectionOptionsConfig, 1));
};


/** @param {?proto.gobgpapi.RouteSelectionOptionsConfig|undefined} value */
proto.gobgpapi.RouteSelectionOptions.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.RouteSelectionOptions.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.RouteSelectionOptions.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RouteSelectionOptionsState state = 2;
 * @return {?proto.gobgpapi.RouteSelectionOptionsState}
 */
proto.gobgpapi.RouteSelectionOptions.prototype.getState = function() {
  return /** @type{?proto.gobgpapi.RouteSelectionOptionsState} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RouteSelectionOptionsState, 2));
};


/** @param {?proto.gobgpapi.RouteSelectionOptionsState|undefined} value */
proto.gobgpapi.RouteSelectionOptions.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.RouteSelectionOptions.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.RouteSelectionOptions.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.UseMultiplePathsConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.UseMultiplePathsConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.UseMultiplePathsConfig.displayName = 'proto.gobgpapi.UseMultiplePathsConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.UseMultiplePathsConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.UseMultiplePathsConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.UseMultiplePathsConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.UseMultiplePathsConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.UseMultiplePathsConfig}
 */
proto.gobgpapi.UseMultiplePathsConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.UseMultiplePathsConfig;
  return proto.gobgpapi.UseMultiplePathsConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.UseMultiplePathsConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.UseMultiplePathsConfig}
 */
proto.gobgpapi.UseMultiplePathsConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.UseMultiplePathsConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.UseMultiplePathsConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.UseMultiplePathsConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.UseMultiplePathsConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.UseMultiplePathsConfig.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.UseMultiplePathsConfig.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.UseMultiplePathsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.UseMultiplePathsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.UseMultiplePathsState.displayName = 'proto.gobgpapi.UseMultiplePathsState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.UseMultiplePathsState.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.UseMultiplePathsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.UseMultiplePathsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.UseMultiplePathsState.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.UseMultiplePathsState}
 */
proto.gobgpapi.UseMultiplePathsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.UseMultiplePathsState;
  return proto.gobgpapi.UseMultiplePathsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.UseMultiplePathsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.UseMultiplePathsState}
 */
proto.gobgpapi.UseMultiplePathsState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.UseMultiplePathsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.UseMultiplePathsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.UseMultiplePathsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.UseMultiplePathsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.UseMultiplePathsState.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.UseMultiplePathsState.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.EbgpConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.EbgpConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.EbgpConfig.displayName = 'proto.gobgpapi.EbgpConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.EbgpConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.EbgpConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.EbgpConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.EbgpConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowMultipleAs: jspb.Message.getFieldWithDefault(msg, 1, false),
    maximumPaths: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.EbgpConfig}
 */
proto.gobgpapi.EbgpConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.EbgpConfig;
  return proto.gobgpapi.EbgpConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.EbgpConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.EbgpConfig}
 */
proto.gobgpapi.EbgpConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowMultipleAs(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaximumPaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.EbgpConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.EbgpConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.EbgpConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.EbgpConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowMultipleAs();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMaximumPaths();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional bool allow_multiple_as = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.EbgpConfig.prototype.getAllowMultipleAs = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.EbgpConfig.prototype.setAllowMultipleAs = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 maximum_paths = 2;
 * @return {number}
 */
proto.gobgpapi.EbgpConfig.prototype.getMaximumPaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.EbgpConfig.prototype.setMaximumPaths = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.EbgpState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.EbgpState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.EbgpState.displayName = 'proto.gobgpapi.EbgpState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.EbgpState.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.EbgpState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.EbgpState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.EbgpState.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowMultipleAs: jspb.Message.getFieldWithDefault(msg, 1, false),
    maximumPaths: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.EbgpState}
 */
proto.gobgpapi.EbgpState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.EbgpState;
  return proto.gobgpapi.EbgpState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.EbgpState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.EbgpState}
 */
proto.gobgpapi.EbgpState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowMultipleAs(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaximumPaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.EbgpState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.EbgpState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.EbgpState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.EbgpState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowMultipleAs();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMaximumPaths();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional bool allow_multiple_as = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.EbgpState.prototype.getAllowMultipleAs = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.EbgpState.prototype.setAllowMultipleAs = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 maximum_paths = 2;
 * @return {number}
 */
proto.gobgpapi.EbgpState.prototype.getMaximumPaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.EbgpState.prototype.setMaximumPaths = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Ebgp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.Ebgp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Ebgp.displayName = 'proto.gobgpapi.Ebgp';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Ebgp.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Ebgp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Ebgp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Ebgp.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.gobgpapi.EbgpConfig.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.gobgpapi.EbgpState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Ebgp}
 */
proto.gobgpapi.Ebgp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Ebgp;
  return proto.gobgpapi.Ebgp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Ebgp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Ebgp}
 */
proto.gobgpapi.Ebgp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.EbgpConfig;
      reader.readMessage(value,proto.gobgpapi.EbgpConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.gobgpapi.EbgpState;
      reader.readMessage(value,proto.gobgpapi.EbgpState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Ebgp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Ebgp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Ebgp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Ebgp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.EbgpConfig.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.EbgpState.serializeBinaryToWriter
    );
  }
};


/**
 * optional EbgpConfig config = 1;
 * @return {?proto.gobgpapi.EbgpConfig}
 */
proto.gobgpapi.Ebgp.prototype.getConfig = function() {
  return /** @type{?proto.gobgpapi.EbgpConfig} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.EbgpConfig, 1));
};


/** @param {?proto.gobgpapi.EbgpConfig|undefined} value */
proto.gobgpapi.Ebgp.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.Ebgp.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Ebgp.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EbgpState state = 2;
 * @return {?proto.gobgpapi.EbgpState}
 */
proto.gobgpapi.Ebgp.prototype.getState = function() {
  return /** @type{?proto.gobgpapi.EbgpState} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.EbgpState, 2));
};


/** @param {?proto.gobgpapi.EbgpState|undefined} value */
proto.gobgpapi.Ebgp.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.Ebgp.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Ebgp.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.IbgpConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.IbgpConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.IbgpConfig.displayName = 'proto.gobgpapi.IbgpConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.IbgpConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.IbgpConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.IbgpConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.IbgpConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    maximumPaths: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.IbgpConfig}
 */
proto.gobgpapi.IbgpConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.IbgpConfig;
  return proto.gobgpapi.IbgpConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.IbgpConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.IbgpConfig}
 */
proto.gobgpapi.IbgpConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaximumPaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.IbgpConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.IbgpConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.IbgpConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.IbgpConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaximumPaths();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 maximum_paths = 1;
 * @return {number}
 */
proto.gobgpapi.IbgpConfig.prototype.getMaximumPaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.IbgpConfig.prototype.setMaximumPaths = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.IbgpState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.IbgpState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.IbgpState.displayName = 'proto.gobgpapi.IbgpState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.IbgpState.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.IbgpState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.IbgpState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.IbgpState.toObject = function(includeInstance, msg) {
  var f, obj = {
    maximumPaths: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.IbgpState}
 */
proto.gobgpapi.IbgpState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.IbgpState;
  return proto.gobgpapi.IbgpState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.IbgpState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.IbgpState}
 */
proto.gobgpapi.IbgpState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaximumPaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.IbgpState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.IbgpState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.IbgpState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.IbgpState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaximumPaths();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 maximum_paths = 1;
 * @return {number}
 */
proto.gobgpapi.IbgpState.prototype.getMaximumPaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.IbgpState.prototype.setMaximumPaths = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Ibgp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.Ibgp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Ibgp.displayName = 'proto.gobgpapi.Ibgp';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Ibgp.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Ibgp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Ibgp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Ibgp.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.gobgpapi.IbgpConfig.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.gobgpapi.IbgpState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Ibgp}
 */
proto.gobgpapi.Ibgp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Ibgp;
  return proto.gobgpapi.Ibgp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Ibgp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Ibgp}
 */
proto.gobgpapi.Ibgp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.IbgpConfig;
      reader.readMessage(value,proto.gobgpapi.IbgpConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.gobgpapi.IbgpState;
      reader.readMessage(value,proto.gobgpapi.IbgpState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Ibgp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Ibgp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Ibgp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Ibgp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.IbgpConfig.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.IbgpState.serializeBinaryToWriter
    );
  }
};


/**
 * optional IbgpConfig config = 1;
 * @return {?proto.gobgpapi.IbgpConfig}
 */
proto.gobgpapi.Ibgp.prototype.getConfig = function() {
  return /** @type{?proto.gobgpapi.IbgpConfig} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.IbgpConfig, 1));
};


/** @param {?proto.gobgpapi.IbgpConfig|undefined} value */
proto.gobgpapi.Ibgp.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.Ibgp.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Ibgp.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional IbgpState state = 2;
 * @return {?proto.gobgpapi.IbgpState}
 */
proto.gobgpapi.Ibgp.prototype.getState = function() {
  return /** @type{?proto.gobgpapi.IbgpState} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.IbgpState, 2));
};


/** @param {?proto.gobgpapi.IbgpState|undefined} value */
proto.gobgpapi.Ibgp.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.Ibgp.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Ibgp.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.UseMultiplePaths = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.UseMultiplePaths, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.UseMultiplePaths.displayName = 'proto.gobgpapi.UseMultiplePaths';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.UseMultiplePaths.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.UseMultiplePaths.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.UseMultiplePaths} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.UseMultiplePaths.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.gobgpapi.UseMultiplePathsConfig.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.gobgpapi.UseMultiplePathsState.toObject(includeInstance, f),
    ebgp: (f = msg.getEbgp()) && proto.gobgpapi.Ebgp.toObject(includeInstance, f),
    ibgp: (f = msg.getIbgp()) && proto.gobgpapi.Ibgp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.UseMultiplePaths}
 */
proto.gobgpapi.UseMultiplePaths.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.UseMultiplePaths;
  return proto.gobgpapi.UseMultiplePaths.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.UseMultiplePaths} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.UseMultiplePaths}
 */
proto.gobgpapi.UseMultiplePaths.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.UseMultiplePathsConfig;
      reader.readMessage(value,proto.gobgpapi.UseMultiplePathsConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.gobgpapi.UseMultiplePathsState;
      reader.readMessage(value,proto.gobgpapi.UseMultiplePathsState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 3:
      var value = new proto.gobgpapi.Ebgp;
      reader.readMessage(value,proto.gobgpapi.Ebgp.deserializeBinaryFromReader);
      msg.setEbgp(value);
      break;
    case 4:
      var value = new proto.gobgpapi.Ibgp;
      reader.readMessage(value,proto.gobgpapi.Ibgp.deserializeBinaryFromReader);
      msg.setIbgp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.UseMultiplePaths.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.UseMultiplePaths.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.UseMultiplePaths} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.UseMultiplePaths.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.UseMultiplePathsConfig.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.UseMultiplePathsState.serializeBinaryToWriter
    );
  }
  f = message.getEbgp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gobgpapi.Ebgp.serializeBinaryToWriter
    );
  }
  f = message.getIbgp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.gobgpapi.Ibgp.serializeBinaryToWriter
    );
  }
};


/**
 * optional UseMultiplePathsConfig config = 1;
 * @return {?proto.gobgpapi.UseMultiplePathsConfig}
 */
proto.gobgpapi.UseMultiplePaths.prototype.getConfig = function() {
  return /** @type{?proto.gobgpapi.UseMultiplePathsConfig} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.UseMultiplePathsConfig, 1));
};


/** @param {?proto.gobgpapi.UseMultiplePathsConfig|undefined} value */
proto.gobgpapi.UseMultiplePaths.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.UseMultiplePaths.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.UseMultiplePaths.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UseMultiplePathsState state = 2;
 * @return {?proto.gobgpapi.UseMultiplePathsState}
 */
proto.gobgpapi.UseMultiplePaths.prototype.getState = function() {
  return /** @type{?proto.gobgpapi.UseMultiplePathsState} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.UseMultiplePathsState, 2));
};


/** @param {?proto.gobgpapi.UseMultiplePathsState|undefined} value */
proto.gobgpapi.UseMultiplePaths.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.UseMultiplePaths.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.UseMultiplePaths.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Ebgp ebgp = 3;
 * @return {?proto.gobgpapi.Ebgp}
 */
proto.gobgpapi.UseMultiplePaths.prototype.getEbgp = function() {
  return /** @type{?proto.gobgpapi.Ebgp} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Ebgp, 3));
};


/** @param {?proto.gobgpapi.Ebgp|undefined} value */
proto.gobgpapi.UseMultiplePaths.prototype.setEbgp = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gobgpapi.UseMultiplePaths.prototype.clearEbgp = function() {
  this.setEbgp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.UseMultiplePaths.prototype.hasEbgp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Ibgp ibgp = 4;
 * @return {?proto.gobgpapi.Ibgp}
 */
proto.gobgpapi.UseMultiplePaths.prototype.getIbgp = function() {
  return /** @type{?proto.gobgpapi.Ibgp} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Ibgp, 4));
};


/** @param {?proto.gobgpapi.Ibgp|undefined} value */
proto.gobgpapi.UseMultiplePaths.prototype.setIbgp = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.gobgpapi.UseMultiplePaths.prototype.clearIbgp = function() {
  this.setIbgp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.UseMultiplePaths.prototype.hasIbgp = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.RouteTargetMembershipConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.RouteTargetMembershipConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.RouteTargetMembershipConfig.displayName = 'proto.gobgpapi.RouteTargetMembershipConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.RouteTargetMembershipConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.RouteTargetMembershipConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.RouteTargetMembershipConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteTargetMembershipConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    deferralTime: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.RouteTargetMembershipConfig}
 */
proto.gobgpapi.RouteTargetMembershipConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.RouteTargetMembershipConfig;
  return proto.gobgpapi.RouteTargetMembershipConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.RouteTargetMembershipConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.RouteTargetMembershipConfig}
 */
proto.gobgpapi.RouteTargetMembershipConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDeferralTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.RouteTargetMembershipConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.RouteTargetMembershipConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.RouteTargetMembershipConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteTargetMembershipConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeferralTime();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 deferral_time = 1;
 * @return {number}
 */
proto.gobgpapi.RouteTargetMembershipConfig.prototype.getDeferralTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.RouteTargetMembershipConfig.prototype.setDeferralTime = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.RouteTargetMembershipState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.RouteTargetMembershipState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.RouteTargetMembershipState.displayName = 'proto.gobgpapi.RouteTargetMembershipState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.RouteTargetMembershipState.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.RouteTargetMembershipState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.RouteTargetMembershipState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteTargetMembershipState.toObject = function(includeInstance, msg) {
  var f, obj = {
    deferralTime: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.RouteTargetMembershipState}
 */
proto.gobgpapi.RouteTargetMembershipState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.RouteTargetMembershipState;
  return proto.gobgpapi.RouteTargetMembershipState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.RouteTargetMembershipState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.RouteTargetMembershipState}
 */
proto.gobgpapi.RouteTargetMembershipState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDeferralTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.RouteTargetMembershipState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.RouteTargetMembershipState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.RouteTargetMembershipState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteTargetMembershipState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeferralTime();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 deferral_time = 1;
 * @return {number}
 */
proto.gobgpapi.RouteTargetMembershipState.prototype.getDeferralTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.RouteTargetMembershipState.prototype.setDeferralTime = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.RouteTargetMembership = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.RouteTargetMembership, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.RouteTargetMembership.displayName = 'proto.gobgpapi.RouteTargetMembership';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.RouteTargetMembership.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.RouteTargetMembership.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.RouteTargetMembership} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteTargetMembership.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.gobgpapi.RouteTargetMembershipConfig.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.gobgpapi.RouteTargetMembershipState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.RouteTargetMembership}
 */
proto.gobgpapi.RouteTargetMembership.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.RouteTargetMembership;
  return proto.gobgpapi.RouteTargetMembership.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.RouteTargetMembership} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.RouteTargetMembership}
 */
proto.gobgpapi.RouteTargetMembership.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.RouteTargetMembershipConfig;
      reader.readMessage(value,proto.gobgpapi.RouteTargetMembershipConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.gobgpapi.RouteTargetMembershipState;
      reader.readMessage(value,proto.gobgpapi.RouteTargetMembershipState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.RouteTargetMembership.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.RouteTargetMembership.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.RouteTargetMembership} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RouteTargetMembership.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.RouteTargetMembershipConfig.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.RouteTargetMembershipState.serializeBinaryToWriter
    );
  }
};


/**
 * optional RouteTargetMembershipConfig config = 1;
 * @return {?proto.gobgpapi.RouteTargetMembershipConfig}
 */
proto.gobgpapi.RouteTargetMembership.prototype.getConfig = function() {
  return /** @type{?proto.gobgpapi.RouteTargetMembershipConfig} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RouteTargetMembershipConfig, 1));
};


/** @param {?proto.gobgpapi.RouteTargetMembershipConfig|undefined} value */
proto.gobgpapi.RouteTargetMembership.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.RouteTargetMembership.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.RouteTargetMembership.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RouteTargetMembershipState state = 2;
 * @return {?proto.gobgpapi.RouteTargetMembershipState}
 */
proto.gobgpapi.RouteTargetMembership.prototype.getState = function() {
  return /** @type{?proto.gobgpapi.RouteTargetMembershipState} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RouteTargetMembershipState, 2));
};


/** @param {?proto.gobgpapi.RouteTargetMembershipState|undefined} value */
proto.gobgpapi.RouteTargetMembership.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.RouteTargetMembership.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.RouteTargetMembership.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.LongLivedGracefulRestartConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.LongLivedGracefulRestartConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.LongLivedGracefulRestartConfig.displayName = 'proto.gobgpapi.LongLivedGracefulRestartConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.LongLivedGracefulRestartConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.LongLivedGracefulRestartConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.LongLivedGracefulRestartConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.LongLivedGracefulRestartConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getFieldWithDefault(msg, 1, false),
    restartTime: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.LongLivedGracefulRestartConfig}
 */
proto.gobgpapi.LongLivedGracefulRestartConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.LongLivedGracefulRestartConfig;
  return proto.gobgpapi.LongLivedGracefulRestartConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.LongLivedGracefulRestartConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.LongLivedGracefulRestartConfig}
 */
proto.gobgpapi.LongLivedGracefulRestartConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRestartTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.LongLivedGracefulRestartConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.LongLivedGracefulRestartConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.LongLivedGracefulRestartConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.LongLivedGracefulRestartConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRestartTime();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.LongLivedGracefulRestartConfig.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.LongLivedGracefulRestartConfig.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 restart_time = 2;
 * @return {number}
 */
proto.gobgpapi.LongLivedGracefulRestartConfig.prototype.getRestartTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.LongLivedGracefulRestartConfig.prototype.setRestartTime = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.LongLivedGracefulRestartState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.LongLivedGracefulRestartState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.LongLivedGracefulRestartState.displayName = 'proto.gobgpapi.LongLivedGracefulRestartState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.LongLivedGracefulRestartState.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.LongLivedGracefulRestartState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.LongLivedGracefulRestartState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.LongLivedGracefulRestartState.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getFieldWithDefault(msg, 1, false),
    received: jspb.Message.getFieldWithDefault(msg, 2, false),
    advertised: jspb.Message.getFieldWithDefault(msg, 3, false),
    peerRestartTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    peerRestartTimerExpired: jspb.Message.getFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.LongLivedGracefulRestartState}
 */
proto.gobgpapi.LongLivedGracefulRestartState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.LongLivedGracefulRestartState;
  return proto.gobgpapi.LongLivedGracefulRestartState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.LongLivedGracefulRestartState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.LongLivedGracefulRestartState}
 */
proto.gobgpapi.LongLivedGracefulRestartState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReceived(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAdvertised(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPeerRestartTime(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPeerRestartTimerExpired(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.LongLivedGracefulRestartState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.LongLivedGracefulRestartState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.LongLivedGracefulRestartState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.LongLivedGracefulRestartState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getReceived();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAdvertised();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPeerRestartTime();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPeerRestartTimerExpired();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.LongLivedGracefulRestartState.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.LongLivedGracefulRestartState.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool received = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.LongLivedGracefulRestartState.prototype.getReceived = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.LongLivedGracefulRestartState.prototype.setReceived = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool advertised = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.LongLivedGracefulRestartState.prototype.getAdvertised = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.gobgpapi.LongLivedGracefulRestartState.prototype.setAdvertised = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint32 peer_restart_time = 4;
 * @return {number}
 */
proto.gobgpapi.LongLivedGracefulRestartState.prototype.getPeerRestartTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.gobgpapi.LongLivedGracefulRestartState.prototype.setPeerRestartTime = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool peer_restart_timer_expired = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.LongLivedGracefulRestartState.prototype.getPeerRestartTimerExpired = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.gobgpapi.LongLivedGracefulRestartState.prototype.setPeerRestartTimerExpired = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.LongLivedGracefulRestart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.LongLivedGracefulRestart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.LongLivedGracefulRestart.displayName = 'proto.gobgpapi.LongLivedGracefulRestart';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.LongLivedGracefulRestart.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.LongLivedGracefulRestart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.LongLivedGracefulRestart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.LongLivedGracefulRestart.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.gobgpapi.LongLivedGracefulRestartConfig.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.gobgpapi.LongLivedGracefulRestartState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.LongLivedGracefulRestart}
 */
proto.gobgpapi.LongLivedGracefulRestart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.LongLivedGracefulRestart;
  return proto.gobgpapi.LongLivedGracefulRestart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.LongLivedGracefulRestart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.LongLivedGracefulRestart}
 */
proto.gobgpapi.LongLivedGracefulRestart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.LongLivedGracefulRestartConfig;
      reader.readMessage(value,proto.gobgpapi.LongLivedGracefulRestartConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.gobgpapi.LongLivedGracefulRestartState;
      reader.readMessage(value,proto.gobgpapi.LongLivedGracefulRestartState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.LongLivedGracefulRestart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.LongLivedGracefulRestart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.LongLivedGracefulRestart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.LongLivedGracefulRestart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.LongLivedGracefulRestartConfig.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.LongLivedGracefulRestartState.serializeBinaryToWriter
    );
  }
};


/**
 * optional LongLivedGracefulRestartConfig config = 1;
 * @return {?proto.gobgpapi.LongLivedGracefulRestartConfig}
 */
proto.gobgpapi.LongLivedGracefulRestart.prototype.getConfig = function() {
  return /** @type{?proto.gobgpapi.LongLivedGracefulRestartConfig} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.LongLivedGracefulRestartConfig, 1));
};


/** @param {?proto.gobgpapi.LongLivedGracefulRestartConfig|undefined} value */
proto.gobgpapi.LongLivedGracefulRestart.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.LongLivedGracefulRestart.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.LongLivedGracefulRestart.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LongLivedGracefulRestartState state = 2;
 * @return {?proto.gobgpapi.LongLivedGracefulRestartState}
 */
proto.gobgpapi.LongLivedGracefulRestart.prototype.getState = function() {
  return /** @type{?proto.gobgpapi.LongLivedGracefulRestartState} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.LongLivedGracefulRestartState, 2));
};


/** @param {?proto.gobgpapi.LongLivedGracefulRestartState|undefined} value */
proto.gobgpapi.LongLivedGracefulRestart.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.LongLivedGracefulRestart.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.LongLivedGracefulRestart.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AfiSafi = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AfiSafi, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AfiSafi.displayName = 'proto.gobgpapi.AfiSafi';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AfiSafi.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AfiSafi.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AfiSafi} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AfiSafi.toObject = function(includeInstance, msg) {
  var f, obj = {
    mpGracefulRestart: (f = msg.getMpGracefulRestart()) && proto.gobgpapi.MpGracefulRestart.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.gobgpapi.AfiSafiConfig.toObject(includeInstance, f),
    applyPolicy: (f = msg.getApplyPolicy()) && proto.gobgpapi.ApplyPolicy.toObject(includeInstance, f),
    routeSelectionOptions: (f = msg.getRouteSelectionOptions()) && proto.gobgpapi.RouteSelectionOptions.toObject(includeInstance, f),
    useMultiplePaths: (f = msg.getUseMultiplePaths()) && proto.gobgpapi.UseMultiplePaths.toObject(includeInstance, f),
    prefixLimits: (f = msg.getPrefixLimits()) && proto.gobgpapi.PrefixLimit.toObject(includeInstance, f),
    routeTargetMembership: (f = msg.getRouteTargetMembership()) && proto.gobgpapi.RouteTargetMembership.toObject(includeInstance, f),
    longLivedGracefulRestart: (f = msg.getLongLivedGracefulRestart()) && proto.gobgpapi.LongLivedGracefulRestart.toObject(includeInstance, f),
    addPaths: (f = msg.getAddPaths()) && proto.gobgpapi.AddPaths.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AfiSafi}
 */
proto.gobgpapi.AfiSafi.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AfiSafi;
  return proto.gobgpapi.AfiSafi.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AfiSafi} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AfiSafi}
 */
proto.gobgpapi.AfiSafi.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.MpGracefulRestart;
      reader.readMessage(value,proto.gobgpapi.MpGracefulRestart.deserializeBinaryFromReader);
      msg.setMpGracefulRestart(value);
      break;
    case 2:
      var value = new proto.gobgpapi.AfiSafiConfig;
      reader.readMessage(value,proto.gobgpapi.AfiSafiConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = new proto.gobgpapi.ApplyPolicy;
      reader.readMessage(value,proto.gobgpapi.ApplyPolicy.deserializeBinaryFromReader);
      msg.setApplyPolicy(value);
      break;
    case 4:
      var value = new proto.gobgpapi.RouteSelectionOptions;
      reader.readMessage(value,proto.gobgpapi.RouteSelectionOptions.deserializeBinaryFromReader);
      msg.setRouteSelectionOptions(value);
      break;
    case 5:
      var value = new proto.gobgpapi.UseMultiplePaths;
      reader.readMessage(value,proto.gobgpapi.UseMultiplePaths.deserializeBinaryFromReader);
      msg.setUseMultiplePaths(value);
      break;
    case 6:
      var value = new proto.gobgpapi.PrefixLimit;
      reader.readMessage(value,proto.gobgpapi.PrefixLimit.deserializeBinaryFromReader);
      msg.setPrefixLimits(value);
      break;
    case 7:
      var value = new proto.gobgpapi.RouteTargetMembership;
      reader.readMessage(value,proto.gobgpapi.RouteTargetMembership.deserializeBinaryFromReader);
      msg.setRouteTargetMembership(value);
      break;
    case 8:
      var value = new proto.gobgpapi.LongLivedGracefulRestart;
      reader.readMessage(value,proto.gobgpapi.LongLivedGracefulRestart.deserializeBinaryFromReader);
      msg.setLongLivedGracefulRestart(value);
      break;
    case 9:
      var value = new proto.gobgpapi.AddPaths;
      reader.readMessage(value,proto.gobgpapi.AddPaths.deserializeBinaryFromReader);
      msg.setAddPaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AfiSafi.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AfiSafi.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AfiSafi} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AfiSafi.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMpGracefulRestart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.MpGracefulRestart.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.AfiSafiConfig.serializeBinaryToWriter
    );
  }
  f = message.getApplyPolicy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gobgpapi.ApplyPolicy.serializeBinaryToWriter
    );
  }
  f = message.getRouteSelectionOptions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.gobgpapi.RouteSelectionOptions.serializeBinaryToWriter
    );
  }
  f = message.getUseMultiplePaths();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.gobgpapi.UseMultiplePaths.serializeBinaryToWriter
    );
  }
  f = message.getPrefixLimits();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.gobgpapi.PrefixLimit.serializeBinaryToWriter
    );
  }
  f = message.getRouteTargetMembership();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.gobgpapi.RouteTargetMembership.serializeBinaryToWriter
    );
  }
  f = message.getLongLivedGracefulRestart();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.gobgpapi.LongLivedGracefulRestart.serializeBinaryToWriter
    );
  }
  f = message.getAddPaths();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.gobgpapi.AddPaths.serializeBinaryToWriter
    );
  }
};


/**
 * optional MpGracefulRestart mp_graceful_restart = 1;
 * @return {?proto.gobgpapi.MpGracefulRestart}
 */
proto.gobgpapi.AfiSafi.prototype.getMpGracefulRestart = function() {
  return /** @type{?proto.gobgpapi.MpGracefulRestart} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.MpGracefulRestart, 1));
};


/** @param {?proto.gobgpapi.MpGracefulRestart|undefined} value */
proto.gobgpapi.AfiSafi.prototype.setMpGracefulRestart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.AfiSafi.prototype.clearMpGracefulRestart = function() {
  this.setMpGracefulRestart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AfiSafi.prototype.hasMpGracefulRestart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AfiSafiConfig config = 2;
 * @return {?proto.gobgpapi.AfiSafiConfig}
 */
proto.gobgpapi.AfiSafi.prototype.getConfig = function() {
  return /** @type{?proto.gobgpapi.AfiSafiConfig} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.AfiSafiConfig, 2));
};


/** @param {?proto.gobgpapi.AfiSafiConfig|undefined} value */
proto.gobgpapi.AfiSafi.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.AfiSafi.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AfiSafi.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ApplyPolicy apply_policy = 3;
 * @return {?proto.gobgpapi.ApplyPolicy}
 */
proto.gobgpapi.AfiSafi.prototype.getApplyPolicy = function() {
  return /** @type{?proto.gobgpapi.ApplyPolicy} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.ApplyPolicy, 3));
};


/** @param {?proto.gobgpapi.ApplyPolicy|undefined} value */
proto.gobgpapi.AfiSafi.prototype.setApplyPolicy = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gobgpapi.AfiSafi.prototype.clearApplyPolicy = function() {
  this.setApplyPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AfiSafi.prototype.hasApplyPolicy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RouteSelectionOptions route_selection_options = 4;
 * @return {?proto.gobgpapi.RouteSelectionOptions}
 */
proto.gobgpapi.AfiSafi.prototype.getRouteSelectionOptions = function() {
  return /** @type{?proto.gobgpapi.RouteSelectionOptions} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RouteSelectionOptions, 4));
};


/** @param {?proto.gobgpapi.RouteSelectionOptions|undefined} value */
proto.gobgpapi.AfiSafi.prototype.setRouteSelectionOptions = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.gobgpapi.AfiSafi.prototype.clearRouteSelectionOptions = function() {
  this.setRouteSelectionOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AfiSafi.prototype.hasRouteSelectionOptions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional UseMultiplePaths use_multiple_paths = 5;
 * @return {?proto.gobgpapi.UseMultiplePaths}
 */
proto.gobgpapi.AfiSafi.prototype.getUseMultiplePaths = function() {
  return /** @type{?proto.gobgpapi.UseMultiplePaths} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.UseMultiplePaths, 5));
};


/** @param {?proto.gobgpapi.UseMultiplePaths|undefined} value */
proto.gobgpapi.AfiSafi.prototype.setUseMultiplePaths = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.gobgpapi.AfiSafi.prototype.clearUseMultiplePaths = function() {
  this.setUseMultiplePaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AfiSafi.prototype.hasUseMultiplePaths = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PrefixLimit prefix_limits = 6;
 * @return {?proto.gobgpapi.PrefixLimit}
 */
proto.gobgpapi.AfiSafi.prototype.getPrefixLimits = function() {
  return /** @type{?proto.gobgpapi.PrefixLimit} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.PrefixLimit, 6));
};


/** @param {?proto.gobgpapi.PrefixLimit|undefined} value */
proto.gobgpapi.AfiSafi.prototype.setPrefixLimits = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.gobgpapi.AfiSafi.prototype.clearPrefixLimits = function() {
  this.setPrefixLimits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AfiSafi.prototype.hasPrefixLimits = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RouteTargetMembership route_target_membership = 7;
 * @return {?proto.gobgpapi.RouteTargetMembership}
 */
proto.gobgpapi.AfiSafi.prototype.getRouteTargetMembership = function() {
  return /** @type{?proto.gobgpapi.RouteTargetMembership} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RouteTargetMembership, 7));
};


/** @param {?proto.gobgpapi.RouteTargetMembership|undefined} value */
proto.gobgpapi.AfiSafi.prototype.setRouteTargetMembership = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.gobgpapi.AfiSafi.prototype.clearRouteTargetMembership = function() {
  this.setRouteTargetMembership(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AfiSafi.prototype.hasRouteTargetMembership = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional LongLivedGracefulRestart long_lived_graceful_restart = 8;
 * @return {?proto.gobgpapi.LongLivedGracefulRestart}
 */
proto.gobgpapi.AfiSafi.prototype.getLongLivedGracefulRestart = function() {
  return /** @type{?proto.gobgpapi.LongLivedGracefulRestart} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.LongLivedGracefulRestart, 8));
};


/** @param {?proto.gobgpapi.LongLivedGracefulRestart|undefined} value */
proto.gobgpapi.AfiSafi.prototype.setLongLivedGracefulRestart = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.gobgpapi.AfiSafi.prototype.clearLongLivedGracefulRestart = function() {
  this.setLongLivedGracefulRestart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AfiSafi.prototype.hasLongLivedGracefulRestart = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional AddPaths add_paths = 9;
 * @return {?proto.gobgpapi.AddPaths}
 */
proto.gobgpapi.AfiSafi.prototype.getAddPaths = function() {
  return /** @type{?proto.gobgpapi.AddPaths} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.AddPaths, 9));
};


/** @param {?proto.gobgpapi.AddPaths|undefined} value */
proto.gobgpapi.AfiSafi.prototype.setAddPaths = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.gobgpapi.AfiSafi.prototype.clearAddPaths = function() {
  this.setAddPaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AfiSafi.prototype.hasAddPaths = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddPathsConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddPathsConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddPathsConfig.displayName = 'proto.gobgpapi.AddPathsConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddPathsConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddPathsConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddPathsConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPathsConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    receive: jspb.Message.getFieldWithDefault(msg, 1, false),
    sendMax: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddPathsConfig}
 */
proto.gobgpapi.AddPathsConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddPathsConfig;
  return proto.gobgpapi.AddPathsConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddPathsConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddPathsConfig}
 */
proto.gobgpapi.AddPathsConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReceive(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSendMax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddPathsConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddPathsConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddPathsConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPathsConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSendMax();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional bool receive = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.AddPathsConfig.prototype.getReceive = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.AddPathsConfig.prototype.setReceive = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 send_max = 2;
 * @return {number}
 */
proto.gobgpapi.AddPathsConfig.prototype.getSendMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.AddPathsConfig.prototype.setSendMax = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddPathsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddPathsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddPathsState.displayName = 'proto.gobgpapi.AddPathsState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddPathsState.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddPathsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddPathsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPathsState.toObject = function(includeInstance, msg) {
  var f, obj = {
    receive: jspb.Message.getFieldWithDefault(msg, 1, false),
    sendMax: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddPathsState}
 */
proto.gobgpapi.AddPathsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddPathsState;
  return proto.gobgpapi.AddPathsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddPathsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddPathsState}
 */
proto.gobgpapi.AddPathsState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReceive(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSendMax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddPathsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddPathsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddPathsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPathsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSendMax();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional bool receive = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.AddPathsState.prototype.getReceive = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.AddPathsState.prototype.setReceive = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 send_max = 2;
 * @return {number}
 */
proto.gobgpapi.AddPathsState.prototype.getSendMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.AddPathsState.prototype.setSendMax = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AddPaths = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AddPaths, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AddPaths.displayName = 'proto.gobgpapi.AddPaths';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AddPaths.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AddPaths.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AddPaths} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPaths.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.gobgpapi.AddPathsConfig.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.gobgpapi.AddPathsState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AddPaths}
 */
proto.gobgpapi.AddPaths.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AddPaths;
  return proto.gobgpapi.AddPaths.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AddPaths} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AddPaths}
 */
proto.gobgpapi.AddPaths.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.AddPathsConfig;
      reader.readMessage(value,proto.gobgpapi.AddPathsConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.gobgpapi.AddPathsState;
      reader.readMessage(value,proto.gobgpapi.AddPathsState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AddPaths.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AddPaths.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AddPaths} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AddPaths.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.AddPathsConfig.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.AddPathsState.serializeBinaryToWriter
    );
  }
};


/**
 * optional AddPathsConfig config = 1;
 * @return {?proto.gobgpapi.AddPathsConfig}
 */
proto.gobgpapi.AddPaths.prototype.getConfig = function() {
  return /** @type{?proto.gobgpapi.AddPathsConfig} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.AddPathsConfig, 1));
};


/** @param {?proto.gobgpapi.AddPathsConfig|undefined} value */
proto.gobgpapi.AddPaths.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.AddPaths.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AddPaths.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AddPathsState state = 2;
 * @return {?proto.gobgpapi.AddPathsState}
 */
proto.gobgpapi.AddPaths.prototype.getState = function() {
  return /** @type{?proto.gobgpapi.AddPathsState} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.AddPathsState, 2));
};


/** @param {?proto.gobgpapi.AddPathsState|undefined} value */
proto.gobgpapi.AddPaths.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.AddPaths.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.AddPaths.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Prefix = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.Prefix, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Prefix.displayName = 'proto.gobgpapi.Prefix';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Prefix.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Prefix.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Prefix} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Prefix.toObject = function(includeInstance, msg) {
  var f, obj = {
    ipPrefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maskLengthMin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maskLengthMax: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Prefix}
 */
proto.gobgpapi.Prefix.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Prefix;
  return proto.gobgpapi.Prefix.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Prefix} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Prefix}
 */
proto.gobgpapi.Prefix.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpPrefix(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaskLengthMin(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaskLengthMax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Prefix.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Prefix.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Prefix} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Prefix.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIpPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaskLengthMin();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMaskLengthMax();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string ip_prefix = 1;
 * @return {string}
 */
proto.gobgpapi.Prefix.prototype.getIpPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.Prefix.prototype.setIpPrefix = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 mask_length_min = 2;
 * @return {number}
 */
proto.gobgpapi.Prefix.prototype.getMaskLengthMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.Prefix.prototype.setMaskLengthMin = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 mask_length_max = 3;
 * @return {number}
 */
proto.gobgpapi.Prefix.prototype.getMaskLengthMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.Prefix.prototype.setMaskLengthMax = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DefinedSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.DefinedSet.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.DefinedSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DefinedSet.displayName = 'proto.gobgpapi.DefinedSet';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.DefinedSet.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DefinedSet.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DefinedSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DefinedSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DefinedSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    listList: jspb.Message.getRepeatedField(msg, 3),
    prefixesList: jspb.Message.toObjectList(msg.getPrefixesList(),
    proto.gobgpapi.Prefix.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DefinedSet}
 */
proto.gobgpapi.DefinedSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DefinedSet;
  return proto.gobgpapi.DefinedSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DefinedSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DefinedSet}
 */
proto.gobgpapi.DefinedSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.DefinedType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addList(value);
      break;
    case 4:
      var value = new proto.gobgpapi.Prefix;
      reader.readMessage(value,proto.gobgpapi.Prefix.deserializeBinaryFromReader);
      msg.addPrefixes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DefinedSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DefinedSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DefinedSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DefinedSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getPrefixesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.gobgpapi.Prefix.serializeBinaryToWriter
    );
  }
};


/**
 * optional DefinedType type = 1;
 * @return {!proto.gobgpapi.DefinedType}
 */
proto.gobgpapi.DefinedSet.prototype.getType = function() {
  return /** @type {!proto.gobgpapi.DefinedType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.DefinedType} value */
proto.gobgpapi.DefinedSet.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.gobgpapi.DefinedSet.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.DefinedSet.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string list = 3;
 * @return {!Array.<string>}
 */
proto.gobgpapi.DefinedSet.prototype.getListList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array.<string>} value */
proto.gobgpapi.DefinedSet.prototype.setListList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.gobgpapi.DefinedSet.prototype.addList = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.gobgpapi.DefinedSet.prototype.clearListList = function() {
  this.setListList([]);
};


/**
 * repeated Prefix prefixes = 4;
 * @return {!Array.<!proto.gobgpapi.Prefix>}
 */
proto.gobgpapi.DefinedSet.prototype.getPrefixesList = function() {
  return /** @type{!Array.<!proto.gobgpapi.Prefix>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.Prefix, 4));
};


/** @param {!Array.<!proto.gobgpapi.Prefix>} value */
proto.gobgpapi.DefinedSet.prototype.setPrefixesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.gobgpapi.Prefix=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.Prefix}
 */
proto.gobgpapi.DefinedSet.prototype.addPrefixes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.gobgpapi.Prefix, opt_index);
};


proto.gobgpapi.DefinedSet.prototype.clearPrefixesList = function() {
  this.setPrefixesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.MatchSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.MatchSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.MatchSet.displayName = 'proto.gobgpapi.MatchSet';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.MatchSet.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.MatchSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.MatchSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MatchSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.MatchSet}
 */
proto.gobgpapi.MatchSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.MatchSet;
  return proto.gobgpapi.MatchSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.MatchSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.MatchSet}
 */
proto.gobgpapi.MatchSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.MatchType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.MatchSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.MatchSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.MatchSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MatchSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional MatchType type = 1;
 * @return {!proto.gobgpapi.MatchType}
 */
proto.gobgpapi.MatchSet.prototype.getType = function() {
  return /** @type {!proto.gobgpapi.MatchType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.MatchType} value */
proto.gobgpapi.MatchSet.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.gobgpapi.MatchSet.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.MatchSet.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AsPathLength = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AsPathLength, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AsPathLength.displayName = 'proto.gobgpapi.AsPathLength';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AsPathLength.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AsPathLength.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AsPathLength} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AsPathLength.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    length: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AsPathLength}
 */
proto.gobgpapi.AsPathLength.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AsPathLength;
  return proto.gobgpapi.AsPathLength.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AsPathLength} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AsPathLength}
 */
proto.gobgpapi.AsPathLength.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.AsPathLengthType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AsPathLength.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AsPathLength.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AsPathLength} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AsPathLength.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLength();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional AsPathLengthType type = 1;
 * @return {!proto.gobgpapi.AsPathLengthType}
 */
proto.gobgpapi.AsPathLength.prototype.getType = function() {
  return /** @type {!proto.gobgpapi.AsPathLengthType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.AsPathLengthType} value */
proto.gobgpapi.AsPathLength.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 length = 2;
 * @return {number}
 */
proto.gobgpapi.AsPathLength.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.AsPathLength.prototype.setLength = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Conditions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.Conditions.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.Conditions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Conditions.displayName = 'proto.gobgpapi.Conditions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.Conditions.repeatedFields_ = [10,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Conditions.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Conditions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Conditions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Conditions.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefixSet: (f = msg.getPrefixSet()) && proto.gobgpapi.MatchSet.toObject(includeInstance, f),
    neighborSet: (f = msg.getNeighborSet()) && proto.gobgpapi.MatchSet.toObject(includeInstance, f),
    asPathLength: (f = msg.getAsPathLength()) && proto.gobgpapi.AsPathLength.toObject(includeInstance, f),
    asPathSet: (f = msg.getAsPathSet()) && proto.gobgpapi.MatchSet.toObject(includeInstance, f),
    communitySet: (f = msg.getCommunitySet()) && proto.gobgpapi.MatchSet.toObject(includeInstance, f),
    extCommunitySet: (f = msg.getExtCommunitySet()) && proto.gobgpapi.MatchSet.toObject(includeInstance, f),
    rpkiResult: jspb.Message.getFieldWithDefault(msg, 7, 0),
    routeType: jspb.Message.getFieldWithDefault(msg, 8, 0),
    largeCommunitySet: (f = msg.getLargeCommunitySet()) && proto.gobgpapi.MatchSet.toObject(includeInstance, f),
    nextHopInListList: jspb.Message.getRepeatedField(msg, 10),
    afiSafiInList: jspb.Message.toObjectList(msg.getAfiSafiInList(),
    proto.gobgpapi.Family.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Conditions}
 */
proto.gobgpapi.Conditions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Conditions;
  return proto.gobgpapi.Conditions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Conditions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Conditions}
 */
proto.gobgpapi.Conditions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.MatchSet;
      reader.readMessage(value,proto.gobgpapi.MatchSet.deserializeBinaryFromReader);
      msg.setPrefixSet(value);
      break;
    case 2:
      var value = new proto.gobgpapi.MatchSet;
      reader.readMessage(value,proto.gobgpapi.MatchSet.deserializeBinaryFromReader);
      msg.setNeighborSet(value);
      break;
    case 3:
      var value = new proto.gobgpapi.AsPathLength;
      reader.readMessage(value,proto.gobgpapi.AsPathLength.deserializeBinaryFromReader);
      msg.setAsPathLength(value);
      break;
    case 4:
      var value = new proto.gobgpapi.MatchSet;
      reader.readMessage(value,proto.gobgpapi.MatchSet.deserializeBinaryFromReader);
      msg.setAsPathSet(value);
      break;
    case 5:
      var value = new proto.gobgpapi.MatchSet;
      reader.readMessage(value,proto.gobgpapi.MatchSet.deserializeBinaryFromReader);
      msg.setCommunitySet(value);
      break;
    case 6:
      var value = new proto.gobgpapi.MatchSet;
      reader.readMessage(value,proto.gobgpapi.MatchSet.deserializeBinaryFromReader);
      msg.setExtCommunitySet(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRpkiResult(value);
      break;
    case 8:
      var value = /** @type {!proto.gobgpapi.Conditions.RouteType} */ (reader.readEnum());
      msg.setRouteType(value);
      break;
    case 9:
      var value = new proto.gobgpapi.MatchSet;
      reader.readMessage(value,proto.gobgpapi.MatchSet.deserializeBinaryFromReader);
      msg.setLargeCommunitySet(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addNextHopInList(value);
      break;
    case 11:
      var value = new proto.gobgpapi.Family;
      reader.readMessage(value,proto.gobgpapi.Family.deserializeBinaryFromReader);
      msg.addAfiSafiIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Conditions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Conditions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Conditions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Conditions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrefixSet();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.MatchSet.serializeBinaryToWriter
    );
  }
  f = message.getNeighborSet();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.MatchSet.serializeBinaryToWriter
    );
  }
  f = message.getAsPathLength();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gobgpapi.AsPathLength.serializeBinaryToWriter
    );
  }
  f = message.getAsPathSet();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.gobgpapi.MatchSet.serializeBinaryToWriter
    );
  }
  f = message.getCommunitySet();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.gobgpapi.MatchSet.serializeBinaryToWriter
    );
  }
  f = message.getExtCommunitySet();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.gobgpapi.MatchSet.serializeBinaryToWriter
    );
  }
  f = message.getRpkiResult();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getRouteType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getLargeCommunitySet();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.gobgpapi.MatchSet.serializeBinaryToWriter
    );
  }
  f = message.getNextHopInListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getAfiSafiInList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.gobgpapi.Family.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.gobgpapi.Conditions.RouteType = {
  ROUTE_TYPE_NONE: 0,
  ROUTE_TYPE_INTERNAL: 1,
  ROUTE_TYPE_EXTERNAL: 2,
  ROUTE_TYPE_LOCAL: 3
};

/**
 * optional MatchSet prefix_set = 1;
 * @return {?proto.gobgpapi.MatchSet}
 */
proto.gobgpapi.Conditions.prototype.getPrefixSet = function() {
  return /** @type{?proto.gobgpapi.MatchSet} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.MatchSet, 1));
};


/** @param {?proto.gobgpapi.MatchSet|undefined} value */
proto.gobgpapi.Conditions.prototype.setPrefixSet = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.Conditions.prototype.clearPrefixSet = function() {
  this.setPrefixSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Conditions.prototype.hasPrefixSet = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MatchSet neighbor_set = 2;
 * @return {?proto.gobgpapi.MatchSet}
 */
proto.gobgpapi.Conditions.prototype.getNeighborSet = function() {
  return /** @type{?proto.gobgpapi.MatchSet} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.MatchSet, 2));
};


/** @param {?proto.gobgpapi.MatchSet|undefined} value */
proto.gobgpapi.Conditions.prototype.setNeighborSet = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.Conditions.prototype.clearNeighborSet = function() {
  this.setNeighborSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Conditions.prototype.hasNeighborSet = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AsPathLength as_path_length = 3;
 * @return {?proto.gobgpapi.AsPathLength}
 */
proto.gobgpapi.Conditions.prototype.getAsPathLength = function() {
  return /** @type{?proto.gobgpapi.AsPathLength} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.AsPathLength, 3));
};


/** @param {?proto.gobgpapi.AsPathLength|undefined} value */
proto.gobgpapi.Conditions.prototype.setAsPathLength = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gobgpapi.Conditions.prototype.clearAsPathLength = function() {
  this.setAsPathLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Conditions.prototype.hasAsPathLength = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MatchSet as_path_set = 4;
 * @return {?proto.gobgpapi.MatchSet}
 */
proto.gobgpapi.Conditions.prototype.getAsPathSet = function() {
  return /** @type{?proto.gobgpapi.MatchSet} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.MatchSet, 4));
};


/** @param {?proto.gobgpapi.MatchSet|undefined} value */
proto.gobgpapi.Conditions.prototype.setAsPathSet = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.gobgpapi.Conditions.prototype.clearAsPathSet = function() {
  this.setAsPathSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Conditions.prototype.hasAsPathSet = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MatchSet community_set = 5;
 * @return {?proto.gobgpapi.MatchSet}
 */
proto.gobgpapi.Conditions.prototype.getCommunitySet = function() {
  return /** @type{?proto.gobgpapi.MatchSet} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.MatchSet, 5));
};


/** @param {?proto.gobgpapi.MatchSet|undefined} value */
proto.gobgpapi.Conditions.prototype.setCommunitySet = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.gobgpapi.Conditions.prototype.clearCommunitySet = function() {
  this.setCommunitySet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Conditions.prototype.hasCommunitySet = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MatchSet ext_community_set = 6;
 * @return {?proto.gobgpapi.MatchSet}
 */
proto.gobgpapi.Conditions.prototype.getExtCommunitySet = function() {
  return /** @type{?proto.gobgpapi.MatchSet} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.MatchSet, 6));
};


/** @param {?proto.gobgpapi.MatchSet|undefined} value */
proto.gobgpapi.Conditions.prototype.setExtCommunitySet = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.gobgpapi.Conditions.prototype.clearExtCommunitySet = function() {
  this.setExtCommunitySet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Conditions.prototype.hasExtCommunitySet = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 rpki_result = 7;
 * @return {number}
 */
proto.gobgpapi.Conditions.prototype.getRpkiResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.gobgpapi.Conditions.prototype.setRpkiResult = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional RouteType route_type = 8;
 * @return {!proto.gobgpapi.Conditions.RouteType}
 */
proto.gobgpapi.Conditions.prototype.getRouteType = function() {
  return /** @type {!proto.gobgpapi.Conditions.RouteType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.gobgpapi.Conditions.RouteType} value */
proto.gobgpapi.Conditions.prototype.setRouteType = function(value) {
  jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional MatchSet large_community_set = 9;
 * @return {?proto.gobgpapi.MatchSet}
 */
proto.gobgpapi.Conditions.prototype.getLargeCommunitySet = function() {
  return /** @type{?proto.gobgpapi.MatchSet} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.MatchSet, 9));
};


/** @param {?proto.gobgpapi.MatchSet|undefined} value */
proto.gobgpapi.Conditions.prototype.setLargeCommunitySet = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.gobgpapi.Conditions.prototype.clearLargeCommunitySet = function() {
  this.setLargeCommunitySet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Conditions.prototype.hasLargeCommunitySet = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated string next_hop_in_list = 10;
 * @return {!Array.<string>}
 */
proto.gobgpapi.Conditions.prototype.getNextHopInListList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/** @param {!Array.<string>} value */
proto.gobgpapi.Conditions.prototype.setNextHopInListList = function(value) {
  jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.gobgpapi.Conditions.prototype.addNextHopInList = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


proto.gobgpapi.Conditions.prototype.clearNextHopInListList = function() {
  this.setNextHopInListList([]);
};


/**
 * repeated Family afi_safi_in = 11;
 * @return {!Array.<!proto.gobgpapi.Family>}
 */
proto.gobgpapi.Conditions.prototype.getAfiSafiInList = function() {
  return /** @type{!Array.<!proto.gobgpapi.Family>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.Family, 11));
};


/** @param {!Array.<!proto.gobgpapi.Family>} value */
proto.gobgpapi.Conditions.prototype.setAfiSafiInList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.gobgpapi.Family=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.Family}
 */
proto.gobgpapi.Conditions.prototype.addAfiSafiIn = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.gobgpapi.Family, opt_index);
};


proto.gobgpapi.Conditions.prototype.clearAfiSafiInList = function() {
  this.setAfiSafiInList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.CommunityAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.CommunityAction.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.CommunityAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.CommunityAction.displayName = 'proto.gobgpapi.CommunityAction';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.CommunityAction.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.CommunityAction.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.CommunityAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.CommunityAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.CommunityAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    communitiesList: jspb.Message.getRepeatedField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.CommunityAction}
 */
proto.gobgpapi.CommunityAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.CommunityAction;
  return proto.gobgpapi.CommunityAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.CommunityAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.CommunityAction}
 */
proto.gobgpapi.CommunityAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.CommunityActionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCommunities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.CommunityAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.CommunityAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.CommunityAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.CommunityAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCommunitiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional CommunityActionType type = 1;
 * @return {!proto.gobgpapi.CommunityActionType}
 */
proto.gobgpapi.CommunityAction.prototype.getType = function() {
  return /** @type {!proto.gobgpapi.CommunityActionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.CommunityActionType} value */
proto.gobgpapi.CommunityAction.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated string communities = 2;
 * @return {!Array.<string>}
 */
proto.gobgpapi.CommunityAction.prototype.getCommunitiesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array.<string>} value */
proto.gobgpapi.CommunityAction.prototype.setCommunitiesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.gobgpapi.CommunityAction.prototype.addCommunities = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.gobgpapi.CommunityAction.prototype.clearCommunitiesList = function() {
  this.setCommunitiesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.MedAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.MedAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.MedAction.displayName = 'proto.gobgpapi.MedAction';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.MedAction.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.MedAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.MedAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MedAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.MedAction}
 */
proto.gobgpapi.MedAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.MedAction;
  return proto.gobgpapi.MedAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.MedAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.MedAction}
 */
proto.gobgpapi.MedAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.MedActionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.MedAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.MedAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.MedAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.MedAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional MedActionType type = 1;
 * @return {!proto.gobgpapi.MedActionType}
 */
proto.gobgpapi.MedAction.prototype.getType = function() {
  return /** @type {!proto.gobgpapi.MedActionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.MedActionType} value */
proto.gobgpapi.MedAction.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 value = 2;
 * @return {number}
 */
proto.gobgpapi.MedAction.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.MedAction.prototype.setValue = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.AsPrependAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.AsPrependAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.AsPrependAction.displayName = 'proto.gobgpapi.AsPrependAction';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.AsPrependAction.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.AsPrependAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.AsPrependAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AsPrependAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    asn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    repeat: jspb.Message.getFieldWithDefault(msg, 2, 0),
    useLeftMost: jspb.Message.getFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.AsPrependAction}
 */
proto.gobgpapi.AsPrependAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.AsPrependAction;
  return proto.gobgpapi.AsPrependAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.AsPrependAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.AsPrependAction}
 */
proto.gobgpapi.AsPrependAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAsn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRepeat(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseLeftMost(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.AsPrependAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.AsPrependAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.AsPrependAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.AsPrependAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsn();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getRepeat();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getUseLeftMost();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint32 asn = 1;
 * @return {number}
 */
proto.gobgpapi.AsPrependAction.prototype.getAsn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.AsPrependAction.prototype.setAsn = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 repeat = 2;
 * @return {number}
 */
proto.gobgpapi.AsPrependAction.prototype.getRepeat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.AsPrependAction.prototype.setRepeat = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool use_left_most = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.AsPrependAction.prototype.getUseLeftMost = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.gobgpapi.AsPrependAction.prototype.setUseLeftMost = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.NexthopAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.NexthopAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.NexthopAction.displayName = 'proto.gobgpapi.NexthopAction';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.NexthopAction.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.NexthopAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.NexthopAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.NexthopAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    self: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.NexthopAction}
 */
proto.gobgpapi.NexthopAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.NexthopAction;
  return proto.gobgpapi.NexthopAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.NexthopAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.NexthopAction}
 */
proto.gobgpapi.NexthopAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSelf(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.NexthopAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.NexthopAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.NexthopAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.NexthopAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelf();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.NexthopAction.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.NexthopAction.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool self = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.NexthopAction.prototype.getSelf = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.gobgpapi.NexthopAction.prototype.setSelf = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.LocalPrefAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.LocalPrefAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.LocalPrefAction.displayName = 'proto.gobgpapi.LocalPrefAction';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.LocalPrefAction.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.LocalPrefAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.LocalPrefAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.LocalPrefAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.LocalPrefAction}
 */
proto.gobgpapi.LocalPrefAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.LocalPrefAction;
  return proto.gobgpapi.LocalPrefAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.LocalPrefAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.LocalPrefAction}
 */
proto.gobgpapi.LocalPrefAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.LocalPrefAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.LocalPrefAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.LocalPrefAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.LocalPrefAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 value = 1;
 * @return {number}
 */
proto.gobgpapi.LocalPrefAction.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.LocalPrefAction.prototype.setValue = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Actions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.Actions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Actions.displayName = 'proto.gobgpapi.Actions';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Actions.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Actions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Actions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Actions.toObject = function(includeInstance, msg) {
  var f, obj = {
    routeAction: jspb.Message.getFieldWithDefault(msg, 1, 0),
    community: (f = msg.getCommunity()) && proto.gobgpapi.CommunityAction.toObject(includeInstance, f),
    med: (f = msg.getMed()) && proto.gobgpapi.MedAction.toObject(includeInstance, f),
    asPrepend: (f = msg.getAsPrepend()) && proto.gobgpapi.AsPrependAction.toObject(includeInstance, f),
    extCommunity: (f = msg.getExtCommunity()) && proto.gobgpapi.CommunityAction.toObject(includeInstance, f),
    nexthop: (f = msg.getNexthop()) && proto.gobgpapi.NexthopAction.toObject(includeInstance, f),
    localPref: (f = msg.getLocalPref()) && proto.gobgpapi.LocalPrefAction.toObject(includeInstance, f),
    largeCommunity: (f = msg.getLargeCommunity()) && proto.gobgpapi.CommunityAction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Actions}
 */
proto.gobgpapi.Actions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Actions;
  return proto.gobgpapi.Actions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Actions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Actions}
 */
proto.gobgpapi.Actions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gobgpapi.RouteAction} */ (reader.readEnum());
      msg.setRouteAction(value);
      break;
    case 2:
      var value = new proto.gobgpapi.CommunityAction;
      reader.readMessage(value,proto.gobgpapi.CommunityAction.deserializeBinaryFromReader);
      msg.setCommunity(value);
      break;
    case 3:
      var value = new proto.gobgpapi.MedAction;
      reader.readMessage(value,proto.gobgpapi.MedAction.deserializeBinaryFromReader);
      msg.setMed(value);
      break;
    case 4:
      var value = new proto.gobgpapi.AsPrependAction;
      reader.readMessage(value,proto.gobgpapi.AsPrependAction.deserializeBinaryFromReader);
      msg.setAsPrepend(value);
      break;
    case 5:
      var value = new proto.gobgpapi.CommunityAction;
      reader.readMessage(value,proto.gobgpapi.CommunityAction.deserializeBinaryFromReader);
      msg.setExtCommunity(value);
      break;
    case 6:
      var value = new proto.gobgpapi.NexthopAction;
      reader.readMessage(value,proto.gobgpapi.NexthopAction.deserializeBinaryFromReader);
      msg.setNexthop(value);
      break;
    case 7:
      var value = new proto.gobgpapi.LocalPrefAction;
      reader.readMessage(value,proto.gobgpapi.LocalPrefAction.deserializeBinaryFromReader);
      msg.setLocalPref(value);
      break;
    case 8:
      var value = new proto.gobgpapi.CommunityAction;
      reader.readMessage(value,proto.gobgpapi.CommunityAction.deserializeBinaryFromReader);
      msg.setLargeCommunity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Actions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Actions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Actions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Actions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRouteAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCommunity();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.CommunityAction.serializeBinaryToWriter
    );
  }
  f = message.getMed();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gobgpapi.MedAction.serializeBinaryToWriter
    );
  }
  f = message.getAsPrepend();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.gobgpapi.AsPrependAction.serializeBinaryToWriter
    );
  }
  f = message.getExtCommunity();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.gobgpapi.CommunityAction.serializeBinaryToWriter
    );
  }
  f = message.getNexthop();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.gobgpapi.NexthopAction.serializeBinaryToWriter
    );
  }
  f = message.getLocalPref();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.gobgpapi.LocalPrefAction.serializeBinaryToWriter
    );
  }
  f = message.getLargeCommunity();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.gobgpapi.CommunityAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional RouteAction route_action = 1;
 * @return {!proto.gobgpapi.RouteAction}
 */
proto.gobgpapi.Actions.prototype.getRouteAction = function() {
  return /** @type {!proto.gobgpapi.RouteAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.gobgpapi.RouteAction} value */
proto.gobgpapi.Actions.prototype.setRouteAction = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional CommunityAction community = 2;
 * @return {?proto.gobgpapi.CommunityAction}
 */
proto.gobgpapi.Actions.prototype.getCommunity = function() {
  return /** @type{?proto.gobgpapi.CommunityAction} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.CommunityAction, 2));
};


/** @param {?proto.gobgpapi.CommunityAction|undefined} value */
proto.gobgpapi.Actions.prototype.setCommunity = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.Actions.prototype.clearCommunity = function() {
  this.setCommunity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Actions.prototype.hasCommunity = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MedAction med = 3;
 * @return {?proto.gobgpapi.MedAction}
 */
proto.gobgpapi.Actions.prototype.getMed = function() {
  return /** @type{?proto.gobgpapi.MedAction} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.MedAction, 3));
};


/** @param {?proto.gobgpapi.MedAction|undefined} value */
proto.gobgpapi.Actions.prototype.setMed = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gobgpapi.Actions.prototype.clearMed = function() {
  this.setMed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Actions.prototype.hasMed = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AsPrependAction as_prepend = 4;
 * @return {?proto.gobgpapi.AsPrependAction}
 */
proto.gobgpapi.Actions.prototype.getAsPrepend = function() {
  return /** @type{?proto.gobgpapi.AsPrependAction} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.AsPrependAction, 4));
};


/** @param {?proto.gobgpapi.AsPrependAction|undefined} value */
proto.gobgpapi.Actions.prototype.setAsPrepend = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.gobgpapi.Actions.prototype.clearAsPrepend = function() {
  this.setAsPrepend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Actions.prototype.hasAsPrepend = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CommunityAction ext_community = 5;
 * @return {?proto.gobgpapi.CommunityAction}
 */
proto.gobgpapi.Actions.prototype.getExtCommunity = function() {
  return /** @type{?proto.gobgpapi.CommunityAction} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.CommunityAction, 5));
};


/** @param {?proto.gobgpapi.CommunityAction|undefined} value */
proto.gobgpapi.Actions.prototype.setExtCommunity = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.gobgpapi.Actions.prototype.clearExtCommunity = function() {
  this.setExtCommunity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Actions.prototype.hasExtCommunity = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional NexthopAction nexthop = 6;
 * @return {?proto.gobgpapi.NexthopAction}
 */
proto.gobgpapi.Actions.prototype.getNexthop = function() {
  return /** @type{?proto.gobgpapi.NexthopAction} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.NexthopAction, 6));
};


/** @param {?proto.gobgpapi.NexthopAction|undefined} value */
proto.gobgpapi.Actions.prototype.setNexthop = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.gobgpapi.Actions.prototype.clearNexthop = function() {
  this.setNexthop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Actions.prototype.hasNexthop = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional LocalPrefAction local_pref = 7;
 * @return {?proto.gobgpapi.LocalPrefAction}
 */
proto.gobgpapi.Actions.prototype.getLocalPref = function() {
  return /** @type{?proto.gobgpapi.LocalPrefAction} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.LocalPrefAction, 7));
};


/** @param {?proto.gobgpapi.LocalPrefAction|undefined} value */
proto.gobgpapi.Actions.prototype.setLocalPref = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.gobgpapi.Actions.prototype.clearLocalPref = function() {
  this.setLocalPref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Actions.prototype.hasLocalPref = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CommunityAction large_community = 8;
 * @return {?proto.gobgpapi.CommunityAction}
 */
proto.gobgpapi.Actions.prototype.getLargeCommunity = function() {
  return /** @type{?proto.gobgpapi.CommunityAction} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.CommunityAction, 8));
};


/** @param {?proto.gobgpapi.CommunityAction|undefined} value */
proto.gobgpapi.Actions.prototype.setLargeCommunity = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.gobgpapi.Actions.prototype.clearLargeCommunity = function() {
  this.setLargeCommunity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Actions.prototype.hasLargeCommunity = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Statement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.Statement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Statement.displayName = 'proto.gobgpapi.Statement';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Statement.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Statement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Statement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Statement.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    conditions: (f = msg.getConditions()) && proto.gobgpapi.Conditions.toObject(includeInstance, f),
    actions: (f = msg.getActions()) && proto.gobgpapi.Actions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Statement}
 */
proto.gobgpapi.Statement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Statement;
  return proto.gobgpapi.Statement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Statement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Statement}
 */
proto.gobgpapi.Statement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.gobgpapi.Conditions;
      reader.readMessage(value,proto.gobgpapi.Conditions.deserializeBinaryFromReader);
      msg.setConditions(value);
      break;
    case 3:
      var value = new proto.gobgpapi.Actions;
      reader.readMessage(value,proto.gobgpapi.Actions.deserializeBinaryFromReader);
      msg.setActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Statement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Statement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Statement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Statement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConditions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.Conditions.serializeBinaryToWriter
    );
  }
  f = message.getActions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gobgpapi.Actions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.gobgpapi.Statement.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.Statement.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Conditions conditions = 2;
 * @return {?proto.gobgpapi.Conditions}
 */
proto.gobgpapi.Statement.prototype.getConditions = function() {
  return /** @type{?proto.gobgpapi.Conditions} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Conditions, 2));
};


/** @param {?proto.gobgpapi.Conditions|undefined} value */
proto.gobgpapi.Statement.prototype.setConditions = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.Statement.prototype.clearConditions = function() {
  this.setConditions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Statement.prototype.hasConditions = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Actions actions = 3;
 * @return {?proto.gobgpapi.Actions}
 */
proto.gobgpapi.Statement.prototype.getActions = function() {
  return /** @type{?proto.gobgpapi.Actions} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Actions, 3));
};


/** @param {?proto.gobgpapi.Actions|undefined} value */
proto.gobgpapi.Statement.prototype.setActions = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gobgpapi.Statement.prototype.clearActions = function() {
  this.setActions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Statement.prototype.hasActions = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Policy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.Policy.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.Policy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Policy.displayName = 'proto.gobgpapi.Policy';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.Policy.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Policy.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Policy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Policy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Policy.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    statementsList: jspb.Message.toObjectList(msg.getStatementsList(),
    proto.gobgpapi.Statement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Policy}
 */
proto.gobgpapi.Policy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Policy;
  return proto.gobgpapi.Policy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Policy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Policy}
 */
proto.gobgpapi.Policy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.gobgpapi.Statement;
      reader.readMessage(value,proto.gobgpapi.Statement.deserializeBinaryFromReader);
      msg.addStatements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Policy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Policy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Policy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Policy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.gobgpapi.Statement.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.gobgpapi.Policy.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.Policy.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Statement statements = 2;
 * @return {!Array.<!proto.gobgpapi.Statement>}
 */
proto.gobgpapi.Policy.prototype.getStatementsList = function() {
  return /** @type{!Array.<!proto.gobgpapi.Statement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.Statement, 2));
};


/** @param {!Array.<!proto.gobgpapi.Statement>} value */
proto.gobgpapi.Policy.prototype.setStatementsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.gobgpapi.Statement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.Statement}
 */
proto.gobgpapi.Policy.prototype.addStatements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gobgpapi.Statement, opt_index);
};


proto.gobgpapi.Policy.prototype.clearStatementsList = function() {
  this.setStatementsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.PolicyAssignment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.PolicyAssignment.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.PolicyAssignment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.PolicyAssignment.displayName = 'proto.gobgpapi.PolicyAssignment';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.PolicyAssignment.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.PolicyAssignment.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.PolicyAssignment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.PolicyAssignment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.PolicyAssignment.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 2, 0),
    policiesList: jspb.Message.toObjectList(msg.getPoliciesList(),
    proto.gobgpapi.Policy.toObject, includeInstance),
    defaultAction: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.PolicyAssignment}
 */
proto.gobgpapi.PolicyAssignment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.PolicyAssignment;
  return proto.gobgpapi.PolicyAssignment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.PolicyAssignment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.PolicyAssignment}
 */
proto.gobgpapi.PolicyAssignment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.gobgpapi.PolicyDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 4:
      var value = new proto.gobgpapi.Policy;
      reader.readMessage(value,proto.gobgpapi.Policy.deserializeBinaryFromReader);
      msg.addPolicies(value);
      break;
    case 5:
      var value = /** @type {!proto.gobgpapi.RouteAction} */ (reader.readEnum());
      msg.setDefaultAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.PolicyAssignment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.PolicyAssignment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.PolicyAssignment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.PolicyAssignment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPoliciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.gobgpapi.Policy.serializeBinaryToWriter
    );
  }
  f = message.getDefaultAction();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.gobgpapi.PolicyAssignment.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.PolicyAssignment.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PolicyDirection direction = 2;
 * @return {!proto.gobgpapi.PolicyDirection}
 */
proto.gobgpapi.PolicyAssignment.prototype.getDirection = function() {
  return /** @type {!proto.gobgpapi.PolicyDirection} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.gobgpapi.PolicyDirection} value */
proto.gobgpapi.PolicyAssignment.prototype.setDirection = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Policy policies = 4;
 * @return {!Array.<!proto.gobgpapi.Policy>}
 */
proto.gobgpapi.PolicyAssignment.prototype.getPoliciesList = function() {
  return /** @type{!Array.<!proto.gobgpapi.Policy>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.Policy, 4));
};


/** @param {!Array.<!proto.gobgpapi.Policy>} value */
proto.gobgpapi.PolicyAssignment.prototype.setPoliciesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.gobgpapi.Policy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.Policy}
 */
proto.gobgpapi.PolicyAssignment.prototype.addPolicies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.gobgpapi.Policy, opt_index);
};


proto.gobgpapi.PolicyAssignment.prototype.clearPoliciesList = function() {
  this.setPoliciesList([]);
};


/**
 * optional RouteAction default_action = 5;
 * @return {!proto.gobgpapi.RouteAction}
 */
proto.gobgpapi.PolicyAssignment.prototype.getDefaultAction = function() {
  return /** @type {!proto.gobgpapi.RouteAction} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.gobgpapi.RouteAction} value */
proto.gobgpapi.PolicyAssignment.prototype.setDefaultAction = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.RoutingPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.RoutingPolicy.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.RoutingPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.RoutingPolicy.displayName = 'proto.gobgpapi.RoutingPolicy';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.RoutingPolicy.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.RoutingPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.RoutingPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.RoutingPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RoutingPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    definedSetsList: jspb.Message.toObjectList(msg.getDefinedSetsList(),
    proto.gobgpapi.DefinedSet.toObject, includeInstance),
    policiesList: jspb.Message.toObjectList(msg.getPoliciesList(),
    proto.gobgpapi.Policy.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.RoutingPolicy}
 */
proto.gobgpapi.RoutingPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.RoutingPolicy;
  return proto.gobgpapi.RoutingPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.RoutingPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.RoutingPolicy}
 */
proto.gobgpapi.RoutingPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.DefinedSet;
      reader.readMessage(value,proto.gobgpapi.DefinedSet.deserializeBinaryFromReader);
      msg.addDefinedSets(value);
      break;
    case 2:
      var value = new proto.gobgpapi.Policy;
      reader.readMessage(value,proto.gobgpapi.Policy.deserializeBinaryFromReader);
      msg.addPolicies(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.RoutingPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.RoutingPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.RoutingPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RoutingPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefinedSetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.gobgpapi.DefinedSet.serializeBinaryToWriter
    );
  }
  f = message.getPoliciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.gobgpapi.Policy.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DefinedSet defined_sets = 1;
 * @return {!Array.<!proto.gobgpapi.DefinedSet>}
 */
proto.gobgpapi.RoutingPolicy.prototype.getDefinedSetsList = function() {
  return /** @type{!Array.<!proto.gobgpapi.DefinedSet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.DefinedSet, 1));
};


/** @param {!Array.<!proto.gobgpapi.DefinedSet>} value */
proto.gobgpapi.RoutingPolicy.prototype.setDefinedSetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.gobgpapi.DefinedSet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.DefinedSet}
 */
proto.gobgpapi.RoutingPolicy.prototype.addDefinedSets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gobgpapi.DefinedSet, opt_index);
};


proto.gobgpapi.RoutingPolicy.prototype.clearDefinedSetsList = function() {
  this.setDefinedSetsList([]);
};


/**
 * repeated Policy policies = 2;
 * @return {!Array.<!proto.gobgpapi.Policy>}
 */
proto.gobgpapi.RoutingPolicy.prototype.getPoliciesList = function() {
  return /** @type{!Array.<!proto.gobgpapi.Policy>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gobgpapi.Policy, 2));
};


/** @param {!Array.<!proto.gobgpapi.Policy>} value */
proto.gobgpapi.RoutingPolicy.prototype.setPoliciesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.gobgpapi.Policy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gobgpapi.Policy}
 */
proto.gobgpapi.RoutingPolicy.prototype.addPolicies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gobgpapi.Policy, opt_index);
};


proto.gobgpapi.RoutingPolicy.prototype.clearPoliciesList = function() {
  this.setPoliciesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Roa = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.Roa, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Roa.displayName = 'proto.gobgpapi.Roa';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Roa.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Roa.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Roa} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Roa.toObject = function(includeInstance, msg) {
  var f, obj = {
    as: jspb.Message.getFieldWithDefault(msg, 1, 0),
    prefixlen: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxlen: jspb.Message.getFieldWithDefault(msg, 3, 0),
    prefix: jspb.Message.getFieldWithDefault(msg, 4, ""),
    conf: (f = msg.getConf()) && proto.gobgpapi.RPKIConf.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Roa}
 */
proto.gobgpapi.Roa.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Roa;
  return proto.gobgpapi.Roa.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Roa} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Roa}
 */
proto.gobgpapi.Roa.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAs(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPrefixlen(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxlen(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 5:
      var value = new proto.gobgpapi.RPKIConf;
      reader.readMessage(value,proto.gobgpapi.RPKIConf.deserializeBinaryFromReader);
      msg.setConf(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Roa.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Roa.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Roa} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Roa.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAs();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPrefixlen();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMaxlen();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getConf();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.gobgpapi.RPKIConf.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 as = 1;
 * @return {number}
 */
proto.gobgpapi.Roa.prototype.getAs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.Roa.prototype.setAs = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 prefixlen = 2;
 * @return {number}
 */
proto.gobgpapi.Roa.prototype.getPrefixlen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.Roa.prototype.setPrefixlen = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 maxlen = 3;
 * @return {number}
 */
proto.gobgpapi.Roa.prototype.getMaxlen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.Roa.prototype.setMaxlen = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string prefix = 4;
 * @return {string}
 */
proto.gobgpapi.Roa.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.gobgpapi.Roa.prototype.setPrefix = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional RPKIConf conf = 5;
 * @return {?proto.gobgpapi.RPKIConf}
 */
proto.gobgpapi.Roa.prototype.getConf = function() {
  return /** @type{?proto.gobgpapi.RPKIConf} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RPKIConf, 5));
};


/** @param {?proto.gobgpapi.RPKIConf|undefined} value */
proto.gobgpapi.Roa.prototype.setConf = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.gobgpapi.Roa.prototype.clearConf = function() {
  this.setConf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Roa.prototype.hasConf = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Vrf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.Vrf.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.Vrf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Vrf.displayName = 'proto.gobgpapi.Vrf';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.Vrf.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Vrf.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Vrf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Vrf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Vrf.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rd: (f = msg.getRd()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    importRtList: jspb.Message.toObjectList(msg.getImportRtList(),
    google_protobuf_any_pb.Any.toObject, includeInstance),
    exportRtList: jspb.Message.toObjectList(msg.getExportRtList(),
    google_protobuf_any_pb.Any.toObject, includeInstance),
    id: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Vrf}
 */
proto.gobgpapi.Vrf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Vrf;
  return proto.gobgpapi.Vrf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Vrf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Vrf}
 */
proto.gobgpapi.Vrf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setRd(value);
      break;
    case 3:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addImportRt(value);
      break;
    case 4:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addExportRt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Vrf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Vrf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Vrf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Vrf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getImportRtList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getExportRtList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.gobgpapi.Vrf.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.Vrf.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Any rd = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.gobgpapi.Vrf.prototype.getRd = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/** @param {?proto.google.protobuf.Any|undefined} value */
proto.gobgpapi.Vrf.prototype.setRd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.Vrf.prototype.clearRd = function() {
  this.setRd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Vrf.prototype.hasRd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated google.protobuf.Any import_rt = 3;
 * @return {!Array.<!proto.google.protobuf.Any>}
 */
proto.gobgpapi.Vrf.prototype.getImportRtList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 3));
};


/** @param {!Array.<!proto.google.protobuf.Any>} value */
proto.gobgpapi.Vrf.prototype.setImportRtList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.gobgpapi.Vrf.prototype.addImportRt = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.protobuf.Any, opt_index);
};


proto.gobgpapi.Vrf.prototype.clearImportRtList = function() {
  this.setImportRtList([]);
};


/**
 * repeated google.protobuf.Any export_rt = 4;
 * @return {!Array.<!proto.google.protobuf.Any>}
 */
proto.gobgpapi.Vrf.prototype.getExportRtList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 4));
};


/** @param {!Array.<!proto.google.protobuf.Any>} value */
proto.gobgpapi.Vrf.prototype.setExportRtList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.gobgpapi.Vrf.prototype.addExportRt = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.protobuf.Any, opt_index);
};


proto.gobgpapi.Vrf.prototype.clearExportRtList = function() {
  this.setExportRtList([]);
};


/**
 * optional uint32 id = 5;
 * @return {number}
 */
proto.gobgpapi.Vrf.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.gobgpapi.Vrf.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.DefaultRouteDistance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.DefaultRouteDistance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.DefaultRouteDistance.displayName = 'proto.gobgpapi.DefaultRouteDistance';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.DefaultRouteDistance.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.DefaultRouteDistance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.DefaultRouteDistance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DefaultRouteDistance.toObject = function(includeInstance, msg) {
  var f, obj = {
    externalRouteDistance: jspb.Message.getFieldWithDefault(msg, 1, 0),
    internalRouteDistance: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.DefaultRouteDistance}
 */
proto.gobgpapi.DefaultRouteDistance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.DefaultRouteDistance;
  return proto.gobgpapi.DefaultRouteDistance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.DefaultRouteDistance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.DefaultRouteDistance}
 */
proto.gobgpapi.DefaultRouteDistance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExternalRouteDistance(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInternalRouteDistance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.DefaultRouteDistance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.DefaultRouteDistance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.DefaultRouteDistance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.DefaultRouteDistance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExternalRouteDistance();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getInternalRouteDistance();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 external_route_distance = 1;
 * @return {number}
 */
proto.gobgpapi.DefaultRouteDistance.prototype.getExternalRouteDistance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.DefaultRouteDistance.prototype.setExternalRouteDistance = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 internal_route_distance = 2;
 * @return {number}
 */
proto.gobgpapi.DefaultRouteDistance.prototype.getInternalRouteDistance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.DefaultRouteDistance.prototype.setInternalRouteDistance = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Global = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.Global.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.Global, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Global.displayName = 'proto.gobgpapi.Global';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.Global.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Global.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Global.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Global} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Global.toObject = function(includeInstance, msg) {
  var f, obj = {
    as: jspb.Message.getFieldWithDefault(msg, 1, 0),
    routerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    listenPort: jspb.Message.getFieldWithDefault(msg, 3, 0),
    listenAddressesList: jspb.Message.getRepeatedField(msg, 4),
    familiesList: jspb.Message.getRepeatedField(msg, 5),
    useMultiplePaths: jspb.Message.getFieldWithDefault(msg, 6, false),
    routeSelectionOptions: (f = msg.getRouteSelectionOptions()) && proto.gobgpapi.RouteSelectionOptionsConfig.toObject(includeInstance, f),
    defaultRouteDistance: (f = msg.getDefaultRouteDistance()) && proto.gobgpapi.DefaultRouteDistance.toObject(includeInstance, f),
    confederation: (f = msg.getConfederation()) && proto.gobgpapi.Confederation.toObject(includeInstance, f),
    gracefulRestart: (f = msg.getGracefulRestart()) && proto.gobgpapi.GracefulRestart.toObject(includeInstance, f),
    applyPolicy: (f = msg.getApplyPolicy()) && proto.gobgpapi.ApplyPolicy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Global}
 */
proto.gobgpapi.Global.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Global;
  return proto.gobgpapi.Global.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Global} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Global}
 */
proto.gobgpapi.Global.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAs(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRouterId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setListenPort(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addListenAddresses(value);
      break;
    case 5:
      var value = /** @type {!Array.<number>} */ (reader.readPackedUint32());
      msg.setFamiliesList(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseMultiplePaths(value);
      break;
    case 7:
      var value = new proto.gobgpapi.RouteSelectionOptionsConfig;
      reader.readMessage(value,proto.gobgpapi.RouteSelectionOptionsConfig.deserializeBinaryFromReader);
      msg.setRouteSelectionOptions(value);
      break;
    case 8:
      var value = new proto.gobgpapi.DefaultRouteDistance;
      reader.readMessage(value,proto.gobgpapi.DefaultRouteDistance.deserializeBinaryFromReader);
      msg.setDefaultRouteDistance(value);
      break;
    case 9:
      var value = new proto.gobgpapi.Confederation;
      reader.readMessage(value,proto.gobgpapi.Confederation.deserializeBinaryFromReader);
      msg.setConfederation(value);
      break;
    case 10:
      var value = new proto.gobgpapi.GracefulRestart;
      reader.readMessage(value,proto.gobgpapi.GracefulRestart.deserializeBinaryFromReader);
      msg.setGracefulRestart(value);
      break;
    case 11:
      var value = new proto.gobgpapi.ApplyPolicy;
      reader.readMessage(value,proto.gobgpapi.ApplyPolicy.deserializeBinaryFromReader);
      msg.setApplyPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Global.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Global.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Global} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Global.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAs();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getRouterId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getListenPort();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getListenAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getFamiliesList();
  if (f.length > 0) {
    writer.writePackedUint32(
      5,
      f
    );
  }
  f = message.getUseMultiplePaths();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getRouteSelectionOptions();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.gobgpapi.RouteSelectionOptionsConfig.serializeBinaryToWriter
    );
  }
  f = message.getDefaultRouteDistance();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.gobgpapi.DefaultRouteDistance.serializeBinaryToWriter
    );
  }
  f = message.getConfederation();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.gobgpapi.Confederation.serializeBinaryToWriter
    );
  }
  f = message.getGracefulRestart();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.gobgpapi.GracefulRestart.serializeBinaryToWriter
    );
  }
  f = message.getApplyPolicy();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.gobgpapi.ApplyPolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 as = 1;
 * @return {number}
 */
proto.gobgpapi.Global.prototype.getAs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.Global.prototype.setAs = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string router_id = 2;
 * @return {string}
 */
proto.gobgpapi.Global.prototype.getRouterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gobgpapi.Global.prototype.setRouterId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 listen_port = 3;
 * @return {number}
 */
proto.gobgpapi.Global.prototype.getListenPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.gobgpapi.Global.prototype.setListenPort = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated string listen_addresses = 4;
 * @return {!Array.<string>}
 */
proto.gobgpapi.Global.prototype.getListenAddressesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array.<string>} value */
proto.gobgpapi.Global.prototype.setListenAddressesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.gobgpapi.Global.prototype.addListenAddresses = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.gobgpapi.Global.prototype.clearListenAddressesList = function() {
  this.setListenAddressesList([]);
};


/**
 * repeated uint32 families = 5;
 * @return {!Array.<number>}
 */
proto.gobgpapi.Global.prototype.getFamiliesList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array.<number>} value */
proto.gobgpapi.Global.prototype.setFamiliesList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.gobgpapi.Global.prototype.addFamilies = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.gobgpapi.Global.prototype.clearFamiliesList = function() {
  this.setFamiliesList([]);
};


/**
 * optional bool use_multiple_paths = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.Global.prototype.getUseMultiplePaths = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.gobgpapi.Global.prototype.setUseMultiplePaths = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional RouteSelectionOptionsConfig route_selection_options = 7;
 * @return {?proto.gobgpapi.RouteSelectionOptionsConfig}
 */
proto.gobgpapi.Global.prototype.getRouteSelectionOptions = function() {
  return /** @type{?proto.gobgpapi.RouteSelectionOptionsConfig} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RouteSelectionOptionsConfig, 7));
};


/** @param {?proto.gobgpapi.RouteSelectionOptionsConfig|undefined} value */
proto.gobgpapi.Global.prototype.setRouteSelectionOptions = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.gobgpapi.Global.prototype.clearRouteSelectionOptions = function() {
  this.setRouteSelectionOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Global.prototype.hasRouteSelectionOptions = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DefaultRouteDistance default_route_distance = 8;
 * @return {?proto.gobgpapi.DefaultRouteDistance}
 */
proto.gobgpapi.Global.prototype.getDefaultRouteDistance = function() {
  return /** @type{?proto.gobgpapi.DefaultRouteDistance} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.DefaultRouteDistance, 8));
};


/** @param {?proto.gobgpapi.DefaultRouteDistance|undefined} value */
proto.gobgpapi.Global.prototype.setDefaultRouteDistance = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.gobgpapi.Global.prototype.clearDefaultRouteDistance = function() {
  this.setDefaultRouteDistance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Global.prototype.hasDefaultRouteDistance = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Confederation confederation = 9;
 * @return {?proto.gobgpapi.Confederation}
 */
proto.gobgpapi.Global.prototype.getConfederation = function() {
  return /** @type{?proto.gobgpapi.Confederation} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.Confederation, 9));
};


/** @param {?proto.gobgpapi.Confederation|undefined} value */
proto.gobgpapi.Global.prototype.setConfederation = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.gobgpapi.Global.prototype.clearConfederation = function() {
  this.setConfederation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Global.prototype.hasConfederation = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional GracefulRestart graceful_restart = 10;
 * @return {?proto.gobgpapi.GracefulRestart}
 */
proto.gobgpapi.Global.prototype.getGracefulRestart = function() {
  return /** @type{?proto.gobgpapi.GracefulRestart} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.GracefulRestart, 10));
};


/** @param {?proto.gobgpapi.GracefulRestart|undefined} value */
proto.gobgpapi.Global.prototype.setGracefulRestart = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.gobgpapi.Global.prototype.clearGracefulRestart = function() {
  this.setGracefulRestart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Global.prototype.hasGracefulRestart = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ApplyPolicy apply_policy = 11;
 * @return {?proto.gobgpapi.ApplyPolicy}
 */
proto.gobgpapi.Global.prototype.getApplyPolicy = function() {
  return /** @type{?proto.gobgpapi.ApplyPolicy} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.ApplyPolicy, 11));
};


/** @param {?proto.gobgpapi.ApplyPolicy|undefined} value */
proto.gobgpapi.Global.prototype.setApplyPolicy = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.gobgpapi.Global.prototype.clearApplyPolicy = function() {
  this.setApplyPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Global.prototype.hasApplyPolicy = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Confederation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gobgpapi.Confederation.repeatedFields_, null);
};
goog.inherits(proto.gobgpapi.Confederation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Confederation.displayName = 'proto.gobgpapi.Confederation';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gobgpapi.Confederation.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Confederation.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Confederation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Confederation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Confederation.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getFieldWithDefault(msg, 1, false),
    identifier: jspb.Message.getFieldWithDefault(msg, 2, 0),
    memberAsListList: jspb.Message.getRepeatedField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Confederation}
 */
proto.gobgpapi.Confederation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Confederation;
  return proto.gobgpapi.Confederation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Confederation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Confederation}
 */
proto.gobgpapi.Confederation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIdentifier(value);
      break;
    case 3:
      var value = /** @type {!Array.<number>} */ (reader.readPackedUint32());
      msg.setMemberAsListList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Confederation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Confederation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Confederation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Confederation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIdentifier();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMemberAsListList();
  if (f.length > 0) {
    writer.writePackedUint32(
      3,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.Confederation.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.gobgpapi.Confederation.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 identifier = 2;
 * @return {number}
 */
proto.gobgpapi.Confederation.prototype.getIdentifier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.Confederation.prototype.setIdentifier = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated uint32 member_as_list = 3;
 * @return {!Array.<number>}
 */
proto.gobgpapi.Confederation.prototype.getMemberAsListList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array.<number>} value */
proto.gobgpapi.Confederation.prototype.setMemberAsListList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.gobgpapi.Confederation.prototype.addMemberAsList = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.gobgpapi.Confederation.prototype.clearMemberAsListList = function() {
  this.setMemberAsListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.RPKIConf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.RPKIConf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.RPKIConf.displayName = 'proto.gobgpapi.RPKIConf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.RPKIConf.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.RPKIConf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.RPKIConf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RPKIConf.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    remotePort: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.RPKIConf}
 */
proto.gobgpapi.RPKIConf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.RPKIConf;
  return proto.gobgpapi.RPKIConf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.RPKIConf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.RPKIConf}
 */
proto.gobgpapi.RPKIConf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRemotePort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.RPKIConf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.RPKIConf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.RPKIConf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RPKIConf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRemotePort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.gobgpapi.RPKIConf.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gobgpapi.RPKIConf.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 remote_port = 2;
 * @return {number}
 */
proto.gobgpapi.RPKIConf.prototype.getRemotePort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIConf.prototype.setRemotePort = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.RPKIState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.RPKIState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.RPKIState.displayName = 'proto.gobgpapi.RPKIState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.RPKIState.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.RPKIState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.RPKIState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RPKIState.toObject = function(includeInstance, msg) {
  var f, obj = {
    uptime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    downtime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    up: jspb.Message.getFieldWithDefault(msg, 3, false),
    recordIpv4: jspb.Message.getFieldWithDefault(msg, 4, 0),
    recordIpv6: jspb.Message.getFieldWithDefault(msg, 5, 0),
    prefixIpv4: jspb.Message.getFieldWithDefault(msg, 6, 0),
    prefixIpv6: jspb.Message.getFieldWithDefault(msg, 7, 0),
    serial: jspb.Message.getFieldWithDefault(msg, 8, 0),
    receivedIpv4: jspb.Message.getFieldWithDefault(msg, 9, 0),
    receivedIpv6: jspb.Message.getFieldWithDefault(msg, 10, 0),
    serialNotify: jspb.Message.getFieldWithDefault(msg, 11, 0),
    cacheReset: jspb.Message.getFieldWithDefault(msg, 12, 0),
    cacheResponse: jspb.Message.getFieldWithDefault(msg, 13, 0),
    endOfData: jspb.Message.getFieldWithDefault(msg, 14, 0),
    error: jspb.Message.getFieldWithDefault(msg, 15, 0),
    serialQuery: jspb.Message.getFieldWithDefault(msg, 16, 0),
    resetQuery: jspb.Message.getFieldWithDefault(msg, 17, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.RPKIState}
 */
proto.gobgpapi.RPKIState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.RPKIState;
  return proto.gobgpapi.RPKIState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.RPKIState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.RPKIState}
 */
proto.gobgpapi.RPKIState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUptime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDowntime(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRecordIpv4(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRecordIpv6(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPrefixIpv4(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPrefixIpv6(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSerial(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReceivedIpv4(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReceivedIpv6(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSerialNotify(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCacheReset(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCacheResponse(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndOfData(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setError(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSerialQuery(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResetQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.RPKIState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.RPKIState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.RPKIState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.RPKIState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUptime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDowntime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUp();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRecordIpv4();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getRecordIpv6();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getPrefixIpv4();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getPrefixIpv6();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getSerial();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getReceivedIpv4();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getReceivedIpv6();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getSerialNotify();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getCacheReset();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getCacheResponse();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getEndOfData();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getError();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getSerialQuery();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getResetQuery();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
};


/**
 * optional int64 uptime = 1;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getUptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setUptime = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 downtime = 2;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getDowntime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setDowntime = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool up = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gobgpapi.RPKIState.prototype.getUp = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.gobgpapi.RPKIState.prototype.setUp = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint32 record_ipv4 = 4;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getRecordIpv4 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setRecordIpv4 = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 record_ipv6 = 5;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getRecordIpv6 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setRecordIpv6 = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 prefix_ipv4 = 6;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getPrefixIpv4 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setPrefixIpv4 = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 prefix_ipv6 = 7;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getPrefixIpv6 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setPrefixIpv6 = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 serial = 8;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getSerial = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setSerial = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 received_ipv4 = 9;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getReceivedIpv4 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setReceivedIpv4 = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 received_ipv6 = 10;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getReceivedIpv6 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setReceivedIpv6 = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 serial_notify = 11;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getSerialNotify = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setSerialNotify = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 cache_reset = 12;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getCacheReset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setCacheReset = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 cache_response = 13;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getCacheResponse = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setCacheResponse = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int64 end_of_data = 14;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getEndOfData = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setEndOfData = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int64 error = 15;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getError = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setError = function(value) {
  jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int64 serial_query = 16;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getSerialQuery = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setSerialQuery = function(value) {
  jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int64 reset_query = 17;
 * @return {number}
 */
proto.gobgpapi.RPKIState.prototype.getResetQuery = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {number} value */
proto.gobgpapi.RPKIState.prototype.setResetQuery = function(value) {
  jspb.Message.setProto3IntField(this, 17, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gobgpapi.Rpki = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gobgpapi.Rpki, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gobgpapi.Rpki.displayName = 'proto.gobgpapi.Rpki';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gobgpapi.Rpki.prototype.toObject = function(opt_includeInstance) {
  return proto.gobgpapi.Rpki.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gobgpapi.Rpki} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Rpki.toObject = function(includeInstance, msg) {
  var f, obj = {
    conf: (f = msg.getConf()) && proto.gobgpapi.RPKIConf.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.gobgpapi.RPKIState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gobgpapi.Rpki}
 */
proto.gobgpapi.Rpki.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gobgpapi.Rpki;
  return proto.gobgpapi.Rpki.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gobgpapi.Rpki} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gobgpapi.Rpki}
 */
proto.gobgpapi.Rpki.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gobgpapi.RPKIConf;
      reader.readMessage(value,proto.gobgpapi.RPKIConf.deserializeBinaryFromReader);
      msg.setConf(value);
      break;
    case 2:
      var value = new proto.gobgpapi.RPKIState;
      reader.readMessage(value,proto.gobgpapi.RPKIState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gobgpapi.Rpki.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gobgpapi.Rpki.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gobgpapi.Rpki} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gobgpapi.Rpki.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConf();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gobgpapi.RPKIConf.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gobgpapi.RPKIState.serializeBinaryToWriter
    );
  }
};


/**
 * optional RPKIConf conf = 1;
 * @return {?proto.gobgpapi.RPKIConf}
 */
proto.gobgpapi.Rpki.prototype.getConf = function() {
  return /** @type{?proto.gobgpapi.RPKIConf} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RPKIConf, 1));
};


/** @param {?proto.gobgpapi.RPKIConf|undefined} value */
proto.gobgpapi.Rpki.prototype.setConf = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gobgpapi.Rpki.prototype.clearConf = function() {
  this.setConf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Rpki.prototype.hasConf = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RPKIState state = 2;
 * @return {?proto.gobgpapi.RPKIState}
 */
proto.gobgpapi.Rpki.prototype.getState = function() {
  return /** @type{?proto.gobgpapi.RPKIState} */ (
    jspb.Message.getWrapperField(this, proto.gobgpapi.RPKIState, 2));
};


/** @param {?proto.gobgpapi.RPKIState|undefined} value */
proto.gobgpapi.Rpki.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gobgpapi.Rpki.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gobgpapi.Rpki.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * @enum {number}
 */
proto.gobgpapi.Resource = {
  GLOBAL: 0,
  LOCAL: 1,
  ADJ_IN: 2,
  ADJ_OUT: 3,
  VRF: 4
};

/**
 * @enum {number}
 */
proto.gobgpapi.TableLookupOption = {
  LOOKUP_EXACT: 0,
  LOOKUP_LONGER: 1,
  LOOKUP_SHORTER: 2
};

/**
 * @enum {number}
 */
proto.gobgpapi.DefinedType = {
  PREFIX: 0,
  NEIGHBOR: 1,
  TAG: 2,
  AS_PATH: 3,
  COMMUNITY: 4,
  EXT_COMMUNITY: 5,
  LARGE_COMMUNITY: 6,
  NEXT_HOP: 7
};

/**
 * @enum {number}
 */
proto.gobgpapi.MatchType = {
  ANY: 0,
  ALL: 1,
  INVERT: 2
};

/**
 * @enum {number}
 */
proto.gobgpapi.AsPathLengthType = {
  EQ: 0,
  GE: 1,
  LE: 2
};

/**
 * @enum {number}
 */
proto.gobgpapi.RouteAction = {
  NONE: 0,
  ACCEPT: 1,
  REJECT: 2
};

/**
 * @enum {number}
 */
proto.gobgpapi.CommunityActionType = {
  COMMUNITY_ADD: 0,
  COMMUNITY_REMOVE: 1,
  COMMUNITY_REPLACE: 2
};

/**
 * @enum {number}
 */
proto.gobgpapi.MedActionType = {
  MED_MOD: 0,
  MED_REPLACE: 1
};

/**
 * @enum {number}
 */
proto.gobgpapi.PolicyDirection = {
  UNKNOWN: 0,
  IMPORT: 1,
  EXPORT: 2
};

goog.object.extend(exports, proto.gobgpapi);
