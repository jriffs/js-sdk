// source: dapr/proto/placement/v1/placement.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.dapr.proto.placement.v1.Host', null, global);
goog.exportSymbol('proto.dapr.proto.placement.v1.PlacementOrder', null, global);
goog.exportSymbol('proto.dapr.proto.placement.v1.PlacementTable', null, global);
goog.exportSymbol('proto.dapr.proto.placement.v1.PlacementTables', null, global);
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
proto.dapr.proto.placement.v1.PlacementOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dapr.proto.placement.v1.PlacementOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dapr.proto.placement.v1.PlacementOrder.displayName = 'proto.dapr.proto.placement.v1.PlacementOrder';
}
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
proto.dapr.proto.placement.v1.PlacementTables = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dapr.proto.placement.v1.PlacementTables, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dapr.proto.placement.v1.PlacementTables.displayName = 'proto.dapr.proto.placement.v1.PlacementTables';
}
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
proto.dapr.proto.placement.v1.PlacementTable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dapr.proto.placement.v1.PlacementTable.repeatedFields_, null);
};
goog.inherits(proto.dapr.proto.placement.v1.PlacementTable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dapr.proto.placement.v1.PlacementTable.displayName = 'proto.dapr.proto.placement.v1.PlacementTable';
}
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
proto.dapr.proto.placement.v1.Host = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dapr.proto.placement.v1.Host.repeatedFields_, null);
};
goog.inherits(proto.dapr.proto.placement.v1.Host, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dapr.proto.placement.v1.Host.displayName = 'proto.dapr.proto.placement.v1.Host';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dapr.proto.placement.v1.PlacementOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.dapr.proto.placement.v1.PlacementOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dapr.proto.placement.v1.PlacementOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dapr.proto.placement.v1.PlacementOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    tables: (f = msg.getTables()) && proto.dapr.proto.placement.v1.PlacementTables.toObject(includeInstance, f),
    operation: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.dapr.proto.placement.v1.PlacementOrder}
 */
proto.dapr.proto.placement.v1.PlacementOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dapr.proto.placement.v1.PlacementOrder;
  return proto.dapr.proto.placement.v1.PlacementOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dapr.proto.placement.v1.PlacementOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dapr.proto.placement.v1.PlacementOrder}
 */
proto.dapr.proto.placement.v1.PlacementOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dapr.proto.placement.v1.PlacementTables;
      reader.readMessage(value,proto.dapr.proto.placement.v1.PlacementTables.deserializeBinaryFromReader);
      msg.setTables(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperation(value);
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
proto.dapr.proto.placement.v1.PlacementOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dapr.proto.placement.v1.PlacementOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dapr.proto.placement.v1.PlacementOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dapr.proto.placement.v1.PlacementOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTables();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dapr.proto.placement.v1.PlacementTables.serializeBinaryToWriter
    );
  }
  f = message.getOperation();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional PlacementTables tables = 1;
 * @return {?proto.dapr.proto.placement.v1.PlacementTables}
 */
proto.dapr.proto.placement.v1.PlacementOrder.prototype.getTables = function() {
  return /** @type{?proto.dapr.proto.placement.v1.PlacementTables} */ (
    jspb.Message.getWrapperField(this, proto.dapr.proto.placement.v1.PlacementTables, 1));
};


/**
 * @param {?proto.dapr.proto.placement.v1.PlacementTables|undefined} value
 * @return {!proto.dapr.proto.placement.v1.PlacementOrder} returns this
*/
proto.dapr.proto.placement.v1.PlacementOrder.prototype.setTables = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dapr.proto.placement.v1.PlacementOrder} returns this
 */
proto.dapr.proto.placement.v1.PlacementOrder.prototype.clearTables = function() {
  return this.setTables(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dapr.proto.placement.v1.PlacementOrder.prototype.hasTables = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string operation = 2;
 * @return {string}
 */
proto.dapr.proto.placement.v1.PlacementOrder.prototype.getOperation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dapr.proto.placement.v1.PlacementOrder} returns this
 */
proto.dapr.proto.placement.v1.PlacementOrder.prototype.setOperation = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dapr.proto.placement.v1.PlacementTables.prototype.toObject = function(opt_includeInstance) {
  return proto.dapr.proto.placement.v1.PlacementTables.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dapr.proto.placement.v1.PlacementTables} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dapr.proto.placement.v1.PlacementTables.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesMap: (f = msg.getEntriesMap()) ? f.toObject(includeInstance, proto.dapr.proto.placement.v1.PlacementTable.toObject) : [],
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.dapr.proto.placement.v1.PlacementTables}
 */
proto.dapr.proto.placement.v1.PlacementTables.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dapr.proto.placement.v1.PlacementTables;
  return proto.dapr.proto.placement.v1.PlacementTables.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dapr.proto.placement.v1.PlacementTables} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dapr.proto.placement.v1.PlacementTables}
 */
proto.dapr.proto.placement.v1.PlacementTables.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getEntriesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.dapr.proto.placement.v1.PlacementTable.deserializeBinaryFromReader, "", new proto.dapr.proto.placement.v1.PlacementTable());
         });
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
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
proto.dapr.proto.placement.v1.PlacementTables.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dapr.proto.placement.v1.PlacementTables.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dapr.proto.placement.v1.PlacementTables} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dapr.proto.placement.v1.PlacementTables.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.dapr.proto.placement.v1.PlacementTable.serializeBinaryToWriter);
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * map<string, PlacementTable> entries = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.dapr.proto.placement.v1.PlacementTable>}
 */
proto.dapr.proto.placement.v1.PlacementTables.prototype.getEntriesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.dapr.proto.placement.v1.PlacementTable>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.dapr.proto.placement.v1.PlacementTable));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.dapr.proto.placement.v1.PlacementTables} returns this
 */
proto.dapr.proto.placement.v1.PlacementTables.prototype.clearEntriesMap = function() {
  this.getEntriesMap().clear();
  return this;};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.dapr.proto.placement.v1.PlacementTables.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dapr.proto.placement.v1.PlacementTables} returns this
 */
proto.dapr.proto.placement.v1.PlacementTables.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dapr.proto.placement.v1.PlacementTable.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dapr.proto.placement.v1.PlacementTable.prototype.toObject = function(opt_includeInstance) {
  return proto.dapr.proto.placement.v1.PlacementTable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dapr.proto.placement.v1.PlacementTable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dapr.proto.placement.v1.PlacementTable.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostsMap: (f = msg.getHostsMap()) ? f.toObject(includeInstance, undefined) : [],
    sortedSetList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    loadMapMap: (f = msg.getLoadMapMap()) ? f.toObject(includeInstance, proto.dapr.proto.placement.v1.Host.toObject) : [],
    totalLoad: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.dapr.proto.placement.v1.PlacementTable}
 */
proto.dapr.proto.placement.v1.PlacementTable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dapr.proto.placement.v1.PlacementTable;
  return proto.dapr.proto.placement.v1.PlacementTable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dapr.proto.placement.v1.PlacementTable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dapr.proto.placement.v1.PlacementTable}
 */
proto.dapr.proto.placement.v1.PlacementTable.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getHostsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readString, null, 0, "");
         });
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSortedSet(values[i]);
      }
      break;
    case 3:
      var value = msg.getLoadMapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.dapr.proto.placement.v1.Host.deserializeBinaryFromReader, "", new proto.dapr.proto.placement.v1.Host());
         });
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalLoad(value);
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
proto.dapr.proto.placement.v1.PlacementTable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dapr.proto.placement.v1.PlacementTable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dapr.proto.placement.v1.PlacementTable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dapr.proto.placement.v1.PlacementTable.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSortedSetList();
  if (f.length > 0) {
    writer.writePackedUint64(
      2,
      f
    );
  }
  f = message.getLoadMapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.dapr.proto.placement.v1.Host.serializeBinaryToWriter);
  }
  f = message.getTotalLoad();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * map<uint64, string> hosts = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,string>}
 */
proto.dapr.proto.placement.v1.PlacementTable.prototype.getHostsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.dapr.proto.placement.v1.PlacementTable} returns this
 */
proto.dapr.proto.placement.v1.PlacementTable.prototype.clearHostsMap = function() {
  this.getHostsMap().clear();
  return this;};


/**
 * repeated uint64 sorted_set = 2;
 * @return {!Array<number>}
 */
proto.dapr.proto.placement.v1.PlacementTable.prototype.getSortedSetList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.dapr.proto.placement.v1.PlacementTable} returns this
 */
proto.dapr.proto.placement.v1.PlacementTable.prototype.setSortedSetList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.dapr.proto.placement.v1.PlacementTable} returns this
 */
proto.dapr.proto.placement.v1.PlacementTable.prototype.addSortedSet = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dapr.proto.placement.v1.PlacementTable} returns this
 */
proto.dapr.proto.placement.v1.PlacementTable.prototype.clearSortedSetList = function() {
  return this.setSortedSetList([]);
};


/**
 * map<string, Host> load_map = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.dapr.proto.placement.v1.Host>}
 */
proto.dapr.proto.placement.v1.PlacementTable.prototype.getLoadMapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.dapr.proto.placement.v1.Host>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.dapr.proto.placement.v1.Host));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.dapr.proto.placement.v1.PlacementTable} returns this
 */
proto.dapr.proto.placement.v1.PlacementTable.prototype.clearLoadMapMap = function() {
  this.getLoadMapMap().clear();
  return this;};


/**
 * optional int64 total_load = 4;
 * @return {number}
 */
proto.dapr.proto.placement.v1.PlacementTable.prototype.getTotalLoad = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dapr.proto.placement.v1.PlacementTable} returns this
 */
proto.dapr.proto.placement.v1.PlacementTable.prototype.setTotalLoad = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dapr.proto.placement.v1.Host.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dapr.proto.placement.v1.Host.prototype.toObject = function(opt_includeInstance) {
  return proto.dapr.proto.placement.v1.Host.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dapr.proto.placement.v1.Host} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dapr.proto.placement.v1.Host.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    load: jspb.Message.getFieldWithDefault(msg, 3, 0),
    entitiesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    id: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.dapr.proto.placement.v1.Host}
 */
proto.dapr.proto.placement.v1.Host.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dapr.proto.placement.v1.Host;
  return proto.dapr.proto.placement.v1.Host.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dapr.proto.placement.v1.Host} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dapr.proto.placement.v1.Host}
 */
proto.dapr.proto.placement.v1.Host.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLoad(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addEntities(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
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
proto.dapr.proto.placement.v1.Host.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dapr.proto.placement.v1.Host.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dapr.proto.placement.v1.Host} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dapr.proto.placement.v1.Host.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLoad();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dapr.proto.placement.v1.Host.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dapr.proto.placement.v1.Host} returns this
 */
proto.dapr.proto.placement.v1.Host.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 port = 2;
 * @return {number}
 */
proto.dapr.proto.placement.v1.Host.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dapr.proto.placement.v1.Host} returns this
 */
proto.dapr.proto.placement.v1.Host.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 load = 3;
 * @return {number}
 */
proto.dapr.proto.placement.v1.Host.prototype.getLoad = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dapr.proto.placement.v1.Host} returns this
 */
proto.dapr.proto.placement.v1.Host.prototype.setLoad = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated string entities = 4;
 * @return {!Array<string>}
 */
proto.dapr.proto.placement.v1.Host.prototype.getEntitiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dapr.proto.placement.v1.Host} returns this
 */
proto.dapr.proto.placement.v1.Host.prototype.setEntitiesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dapr.proto.placement.v1.Host} returns this
 */
proto.dapr.proto.placement.v1.Host.prototype.addEntities = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dapr.proto.placement.v1.Host} returns this
 */
proto.dapr.proto.placement.v1.Host.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
};


/**
 * optional string id = 5;
 * @return {string}
 */
proto.dapr.proto.placement.v1.Host.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dapr.proto.placement.v1.Host} returns this
 */
proto.dapr.proto.placement.v1.Host.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.dapr.proto.placement.v1);
