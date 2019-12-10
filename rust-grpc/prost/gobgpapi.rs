#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StartBgpRequest {
    #[prost(message, optional, tag = "1")]
    pub global: ::std::option::Option<Global>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StopBgpRequest {}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBgpRequest {}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBgpResponse {
    #[prost(message, optional, tag = "1")]
    pub global: ::std::option::Option<Global>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddPeerRequest {
    #[prost(message, optional, tag = "1")]
    pub peer: ::std::option::Option<Peer>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeletePeerRequest {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(string, tag = "2")]
    pub interface: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPeerRequest {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(bool, tag = "2")]
    pub enable_advertised: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPeerResponse {
    #[prost(message, optional, tag = "1")]
    pub peer: ::std::option::Option<Peer>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdatePeerRequest {
    #[prost(message, optional, tag = "1")]
    pub peer: ::std::option::Option<Peer>,
    /// Calls SoftResetIn after updating the peer configuration if needed.
    #[prost(bool, tag = "2")]
    pub do_soft_reset_in: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdatePeerResponse {
    /// Indicates whether calling SoftResetIn is required due to this update. If
    /// "true" is set, the client should call SoftResetIn manually. If
    /// "do_soft_reset_in = true" is set in the request, always returned with
    /// "false".
    #[prost(bool, tag = "1")]
    pub needs_soft_reset_in: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ResetPeerRequest {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(string, tag = "2")]
    pub communication: std::string::String,
    #[prost(bool, tag = "3")]
    pub soft: bool,
    #[prost(enumeration = "reset_peer_request::SoftResetDirection", tag = "4")]
    pub direction: i32,
}
pub mod reset_peer_request {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum SoftResetDirection {
        In = 0,
        Out = 1,
        Both = 2,
    }
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ShutdownPeerRequest {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(string, tag = "2")]
    pub communication: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EnablePeerRequest {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DisablePeerRequest {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(string, tag = "2")]
    pub communication: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MonitorPeerRequest {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(bool, tag = "2")]
    pub current: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MonitorPeerResponse {
    #[prost(message, optional, tag = "1")]
    pub peer: ::std::option::Option<Peer>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddPeerGroupRequest {
    #[prost(message, optional, tag = "1")]
    pub peer_group: ::std::option::Option<PeerGroup>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeletePeerGroupRequest {
    #[prost(string, tag = "1")]
    pub name: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdatePeerGroupRequest {
    #[prost(message, optional, tag = "1")]
    pub peer_group: ::std::option::Option<PeerGroup>,
    #[prost(bool, tag = "2")]
    pub do_soft_reset_in: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdatePeerGroupResponse {
    #[prost(bool, tag = "1")]
    pub needs_soft_reset_in: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddDynamicNeighborRequest {
    #[prost(message, optional, tag = "1")]
    pub dynamic_neighbor: ::std::option::Option<DynamicNeighbor>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddPathRequest {
    #[prost(enumeration = "TableType", tag = "1")]
    pub table_type: i32,
    #[prost(string, tag = "2")]
    pub vrf_id: std::string::String,
    #[prost(message, optional, tag = "3")]
    pub path: ::std::option::Option<Path>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddPathResponse {
    #[prost(bytes, tag = "1")]
    pub uuid: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeletePathRequest {
    #[prost(enumeration = "TableType", tag = "1")]
    pub table_type: i32,
    #[prost(string, tag = "2")]
    pub vrf_id: std::string::String,
    #[prost(message, optional, tag = "3")]
    pub family: ::std::option::Option<Family>,
    #[prost(message, optional, tag = "4")]
    pub path: ::std::option::Option<Path>,
    #[prost(bytes, tag = "5")]
    pub uuid: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPathRequest {
    #[prost(enumeration = "TableType", tag = "1")]
    pub table_type: i32,
    #[prost(string, tag = "2")]
    pub name: std::string::String,
    #[prost(message, optional, tag = "3")]
    pub family: ::std::option::Option<Family>,
    #[prost(message, repeated, tag = "4")]
    pub prefixes: ::std::vec::Vec<TableLookupPrefix>,
    #[prost(enumeration = "list_path_request::SortType", tag = "5")]
    pub sort_type: i32,
    #[prost(bool, tag = "6")]
    pub enable_filtered: bool,
}
pub mod list_path_request {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum SortType {
        None = 0,
        Prefix = 1,
    }
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPathResponse {
    #[prost(message, optional, tag = "1")]
    pub destination: ::std::option::Option<Destination>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddPathStreamRequest {
    #[prost(enumeration = "TableType", tag = "1")]
    pub table_type: i32,
    #[prost(string, tag = "2")]
    pub vrf_id: std::string::String,
    #[prost(message, repeated, tag = "3")]
    pub paths: ::std::vec::Vec<Path>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetTableRequest {
    #[prost(enumeration = "TableType", tag = "1")]
    pub table_type: i32,
    #[prost(message, optional, tag = "2")]
    pub family: ::std::option::Option<Family>,
    #[prost(string, tag = "3")]
    pub name: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetTableResponse {
    #[prost(uint64, tag = "1")]
    pub num_destination: u64,
    #[prost(uint64, tag = "2")]
    pub num_path: u64,
    /// only meaningful when type == ADJ_IN
    #[prost(uint64, tag = "3")]
    pub num_accepted: u64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MonitorTableRequest {
    #[prost(enumeration = "TableType", tag = "1")]
    pub table_type: i32,
    #[prost(string, tag = "2")]
    pub name: std::string::String,
    #[prost(message, optional, tag = "3")]
    pub family: ::std::option::Option<Family>,
    #[prost(bool, tag = "4")]
    pub current: bool,
    #[prost(bool, tag = "5")]
    pub post_policy: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MonitorTableResponse {
    #[prost(message, optional, tag = "1")]
    pub path: ::std::option::Option<Path>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddVrfRequest {
    #[prost(message, optional, tag = "1")]
    pub vrf: ::std::option::Option<Vrf>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteVrfRequest {
    #[prost(string, tag = "1")]
    pub name: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListVrfRequest {
    #[prost(string, tag = "1")]
    pub name: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListVrfResponse {
    #[prost(message, optional, tag = "1")]
    pub vrf: ::std::option::Option<Vrf>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddPolicyRequest {
    #[prost(message, optional, tag = "1")]
    pub policy: ::std::option::Option<Policy>,
    /// if this flag is set, gobgpd won't define new statements
    /// but refer existing statements using statement's names in this arguments.
    #[prost(bool, tag = "2")]
    pub refer_existing_statements: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeletePolicyRequest {
    #[prost(message, optional, tag = "1")]
    pub policy: ::std::option::Option<Policy>,
    /// if this flag is set, gobgpd won't delete any statements
    /// even if some statements get not used by any policy by this operation.
    #[prost(bool, tag = "2")]
    pub preserve_statements: bool,
    #[prost(bool, tag = "3")]
    pub all: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPolicyRequest {
    #[prost(string, tag = "1")]
    pub name: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPolicyResponse {
    #[prost(message, optional, tag = "1")]
    pub policy: ::std::option::Option<Policy>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SetPoliciesRequest {
    #[prost(message, repeated, tag = "1")]
    pub defined_sets: ::std::vec::Vec<DefinedSet>,
    #[prost(message, repeated, tag = "2")]
    pub policies: ::std::vec::Vec<Policy>,
    #[prost(message, repeated, tag = "3")]
    pub assignments: ::std::vec::Vec<PolicyAssignment>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddDefinedSetRequest {
    #[prost(message, optional, tag = "1")]
    pub defined_set: ::std::option::Option<DefinedSet>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteDefinedSetRequest {
    #[prost(message, optional, tag = "1")]
    pub defined_set: ::std::option::Option<DefinedSet>,
    #[prost(bool, tag = "2")]
    pub all: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListDefinedSetRequest {
    #[prost(enumeration = "DefinedType", tag = "1")]
    pub defined_type: i32,
    #[prost(string, tag = "2")]
    pub name: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListDefinedSetResponse {
    #[prost(message, optional, tag = "1")]
    pub defined_set: ::std::option::Option<DefinedSet>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddStatementRequest {
    #[prost(message, optional, tag = "1")]
    pub statement: ::std::option::Option<Statement>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteStatementRequest {
    #[prost(message, optional, tag = "1")]
    pub statement: ::std::option::Option<Statement>,
    #[prost(bool, tag = "2")]
    pub all: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListStatementRequest {
    #[prost(string, tag = "1")]
    pub name: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListStatementResponse {
    #[prost(message, optional, tag = "1")]
    pub statement: ::std::option::Option<Statement>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddPolicyAssignmentRequest {
    #[prost(message, optional, tag = "1")]
    pub assignment: ::std::option::Option<PolicyAssignment>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeletePolicyAssignmentRequest {
    #[prost(message, optional, tag = "1")]
    pub assignment: ::std::option::Option<PolicyAssignment>,
    #[prost(bool, tag = "2")]
    pub all: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPolicyAssignmentRequest {
    #[prost(string, tag = "1")]
    pub name: std::string::String,
    #[prost(enumeration = "PolicyDirection", tag = "2")]
    pub direction: i32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPolicyAssignmentResponse {
    #[prost(message, optional, tag = "1")]
    pub assignment: ::std::option::Option<PolicyAssignment>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SetPolicyAssignmentRequest {
    #[prost(message, optional, tag = "1")]
    pub assignment: ::std::option::Option<PolicyAssignment>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddRpkiRequest {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(uint32, tag = "2")]
    pub port: u32,
    #[prost(int64, tag = "3")]
    pub lifetime: i64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteRpkiRequest {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(uint32, tag = "2")]
    pub port: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListRpkiRequest {
    #[prost(message, optional, tag = "1")]
    pub family: ::std::option::Option<Family>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListRpkiResponse {
    #[prost(message, optional, tag = "1")]
    pub server: ::std::option::Option<Rpki>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EnableRpkiRequest {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(uint32, tag = "2")]
    pub port: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DisableRpkiRequest {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(uint32, tag = "2")]
    pub port: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ResetRpkiRequest {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(uint32, tag = "2")]
    pub port: u32,
    #[prost(bool, tag = "3")]
    pub soft: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListRpkiTableRequest {
    #[prost(message, optional, tag = "1")]
    pub family: ::std::option::Option<Family>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListRpkiTableResponse {
    #[prost(message, optional, tag = "1")]
    pub roa: ::std::option::Option<Roa>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EnableZebraRequest {
    #[prost(string, tag = "1")]
    pub url: std::string::String,
    #[prost(string, repeated, tag = "2")]
    pub route_types: ::std::vec::Vec<std::string::String>,
    #[prost(uint32, tag = "3")]
    pub version: u32,
    #[prost(bool, tag = "4")]
    pub nexthop_trigger_enable: bool,
    #[prost(uint32, tag = "5")]
    pub nexthop_trigger_delay: u32,
    #[prost(uint32, tag = "6")]
    pub mpls_label_range_size: u32,
    #[prost(string, tag = "7")]
    pub software_name: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EnableMrtRequest {
    #[prost(int32, tag = "1")]
    pub dump_type: i32,
    #[prost(string, tag = "2")]
    pub filename: std::string::String,
    #[prost(uint64, tag = "3")]
    pub dump_interval: u64,
    #[prost(uint64, tag = "4")]
    pub rotation_interval: u64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DisableMrtRequest {}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddBmpRequest {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(uint32, tag = "2")]
    pub port: u32,
    #[prost(enumeration = "add_bmp_request::MonitoringPolicy", tag = "3")]
    pub policy: i32,
    #[prost(int32, tag = "4")]
    pub statistics_timeout: i32,
    #[prost(string, tag = "5")]
    pub sys_name: std::string::String,
    #[prost(string, tag = "6")]
    pub sys_descr: std::string::String,
}
pub mod add_bmp_request {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum MonitoringPolicy {
        Pre = 0,
        Post = 1,
        Both = 2,
        Local = 3,
        All = 4,
    }
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteBmpRequest {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(uint32, tag = "2")]
    pub port: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Family {
    #[prost(enumeration = "family::Afi", tag = "1")]
    pub afi: i32,
    #[prost(enumeration = "family::Safi", tag = "2")]
    pub safi: i32,
}
pub mod family {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum Afi {
        Unknown = 0,
        Ip = 1,
        Ip6 = 2,
        L2vpn = 25,
        Ls = 16388,
        Opaque = 16397,
    }
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum Safi {
        Unknown = 0,
        Unicast = 1,
        Multicast = 2,
        MplsLabel = 4,
        Encapsulation = 7,
        Vpls = 65,
        Evpn = 70,
        Ls = 71,
        MplsVpn = 128,
        MplsVpnMulticast = 129,
        RouteTargetConstraints = 132,
        FlowSpecUnicast = 133,
        FlowSpecVpn = 134,
        KeyValue = 241,
    }
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Validation {
    #[prost(enumeration = "validation::State", tag = "1")]
    pub state: i32,
    #[prost(enumeration = "validation::Reason", tag = "2")]
    pub reason: i32,
    #[prost(message, repeated, tag = "3")]
    pub matched: ::std::vec::Vec<Roa>,
    #[prost(message, repeated, tag = "4")]
    pub unmatched_as: ::std::vec::Vec<Roa>,
    #[prost(message, repeated, tag = "5")]
    pub unmatched_length: ::std::vec::Vec<Roa>,
}
pub mod validation {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum State {
        None = 0,
        NotFound = 1,
        Valid = 2,
        Invalid = 3,
    }
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum Reason {
        ReasotNone = 0,
        As = 1,
        Length = 2,
    }
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Path {
    /// One of the following defined in "api/attribute.proto":
    /// - IPAddressPrefix
    /// - LabeledIPAddressPrefix
    /// - EncapsulationNLRI
    /// - EVPNEthernetAutoDiscoveryRoute
    /// - EVPNMACIPAdvertisementRoute
    /// - EVPNInclusiveMulticastEthernetTagRoute
    /// - EVPNEthernetSegmentRoute
    /// - EVPNIPPrefixRoute
    /// - EVPNIPMSIRoute
    /// - LabeledVPNIPAddressPrefix
    /// - RouteTargetMembershipNLRI
    /// - FlowSpecNLRI
    /// - VPNFlowSpecNLRI
    /// - OpaqueNLRI
    /// - LsAddrPrefix
    #[prost(message, optional, tag = "1")]
    pub nlri: ::std::option::Option<::prost_types::Any>,
    /// Each attribute must be one of *Attribute defined in
    /// "api/attribute.proto".
    #[prost(message, repeated, tag = "2")]
    pub pattrs: ::std::vec::Vec<::prost_types::Any>,
    #[prost(message, optional, tag = "3")]
    pub age: ::std::option::Option<::prost_types::Timestamp>,
    #[prost(bool, tag = "4")]
    pub best: bool,
    #[prost(bool, tag = "5")]
    pub is_withdraw: bool,
    #[prost(message, optional, tag = "7")]
    pub validation: ::std::option::Option<Validation>,
    #[prost(bool, tag = "8")]
    pub no_implicit_withdraw: bool,
    #[prost(message, optional, tag = "9")]
    pub family: ::std::option::Option<Family>,
    #[prost(uint32, tag = "10")]
    pub source_asn: u32,
    #[prost(string, tag = "11")]
    pub source_id: std::string::String,
    #[prost(bool, tag = "12")]
    pub filtered: bool,
    #[prost(bool, tag = "13")]
    pub stale: bool,
    #[prost(bool, tag = "14")]
    pub is_from_external: bool,
    #[prost(string, tag = "15")]
    pub neighbor_ip: std::string::String,
    /// only paths installed by AddPath API have this
    #[prost(bytes, tag = "16")]
    pub uuid: std::vec::Vec<u8>,
    #[prost(bool, tag = "17")]
    pub is_nexthop_invalid: bool,
    #[prost(uint32, tag = "18")]
    pub identifier: u32,
    #[prost(uint32, tag = "19")]
    pub local_identifier: u32,
    #[prost(bytes, tag = "20")]
    pub nlri_binary: std::vec::Vec<u8>,
    #[prost(bytes, repeated, tag = "21")]
    pub pattrs_binary: ::std::vec::Vec<std::vec::Vec<u8>>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Destination {
    #[prost(string, tag = "1")]
    pub prefix: std::string::String,
    #[prost(message, repeated, tag = "2")]
    pub paths: ::std::vec::Vec<Path>,
}
/// API representation of table.LookupPrefix
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TableLookupPrefix {
    #[prost(string, tag = "1")]
    pub prefix: std::string::String,
    #[prost(enumeration = "TableLookupOption", tag = "2")]
    pub lookup_option: i32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Peer {
    #[prost(message, optional, tag = "1")]
    pub apply_policy: ::std::option::Option<ApplyPolicy>,
    #[prost(message, optional, tag = "2")]
    pub conf: ::std::option::Option<PeerConf>,
    #[prost(message, optional, tag = "3")]
    pub ebgp_multihop: ::std::option::Option<EbgpMultihop>,
    #[prost(message, optional, tag = "4")]
    pub route_reflector: ::std::option::Option<RouteReflector>,
    #[prost(message, optional, tag = "5")]
    pub state: ::std::option::Option<PeerState>,
    #[prost(message, optional, tag = "6")]
    pub timers: ::std::option::Option<Timers>,
    #[prost(message, optional, tag = "7")]
    pub transport: ::std::option::Option<Transport>,
    #[prost(message, optional, tag = "8")]
    pub route_server: ::std::option::Option<RouteServer>,
    #[prost(message, optional, tag = "9")]
    pub graceful_restart: ::std::option::Option<GracefulRestart>,
    #[prost(message, repeated, tag = "10")]
    pub afi_safis: ::std::vec::Vec<AfiSafi>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PeerGroup {
    #[prost(message, optional, tag = "1")]
    pub apply_policy: ::std::option::Option<ApplyPolicy>,
    #[prost(message, optional, tag = "2")]
    pub conf: ::std::option::Option<PeerGroupConf>,
    #[prost(message, optional, tag = "3")]
    pub ebgp_multihop: ::std::option::Option<EbgpMultihop>,
    #[prost(message, optional, tag = "4")]
    pub route_reflector: ::std::option::Option<RouteReflector>,
    #[prost(message, optional, tag = "5")]
    pub info: ::std::option::Option<PeerGroupState>,
    #[prost(message, optional, tag = "6")]
    pub timers: ::std::option::Option<Timers>,
    #[prost(message, optional, tag = "7")]
    pub transport: ::std::option::Option<Transport>,
    #[prost(message, optional, tag = "8")]
    pub route_server: ::std::option::Option<RouteServer>,
    #[prost(message, optional, tag = "9")]
    pub graceful_restart: ::std::option::Option<GracefulRestart>,
    #[prost(message, repeated, tag = "10")]
    pub afi_safis: ::std::vec::Vec<AfiSafi>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DynamicNeighbor {
    #[prost(string, tag = "1")]
    pub prefix: std::string::String,
    #[prost(string, tag = "2")]
    pub peer_group: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ApplyPolicy {
    #[prost(message, optional, tag = "1")]
    pub in_policy: ::std::option::Option<PolicyAssignment>,
    #[prost(message, optional, tag = "2")]
    pub export_policy: ::std::option::Option<PolicyAssignment>,
    #[prost(message, optional, tag = "3")]
    pub import_policy: ::std::option::Option<PolicyAssignment>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PrefixLimit {
    #[prost(message, optional, tag = "1")]
    pub family: ::std::option::Option<Family>,
    #[prost(uint32, tag = "2")]
    pub max_prefixes: u32,
    #[prost(uint32, tag = "3")]
    pub shutdown_threshold_pct: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PeerConf {
    #[prost(string, tag = "1")]
    pub auth_password: std::string::String,
    #[prost(string, tag = "2")]
    pub description: std::string::String,
    #[prost(uint32, tag = "3")]
    pub local_as: u32,
    #[prost(string, tag = "4")]
    pub neighbor_address: std::string::String,
    #[prost(uint32, tag = "5")]
    pub peer_as: u32,
    #[prost(string, tag = "6")]
    pub peer_group: std::string::String,
    #[prost(uint32, tag = "7")]
    pub peer_type: u32,
    #[prost(enumeration = "peer_conf::RemovePrivateAs", tag = "8")]
    pub remove_private_as: i32,
    #[prost(bool, tag = "9")]
    pub route_flap_damping: bool,
    #[prost(uint32, tag = "10")]
    pub send_community: u32,
    #[prost(string, tag = "11")]
    pub neighbor_interface: std::string::String,
    #[prost(string, tag = "12")]
    pub vrf: std::string::String,
    #[prost(uint32, tag = "13")]
    pub allow_own_as: u32,
    #[prost(bool, tag = "14")]
    pub replace_peer_as: bool,
    #[prost(bool, tag = "15")]
    pub admin_down: bool,
}
pub mod peer_conf {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum RemovePrivateAs {
        None = 0,
        All = 1,
        Replace = 2,
    }
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PeerGroupConf {
    #[prost(string, tag = "1")]
    pub auth_password: std::string::String,
    #[prost(string, tag = "2")]
    pub description: std::string::String,
    #[prost(uint32, tag = "3")]
    pub local_as: u32,
    #[prost(uint32, tag = "4")]
    pub peer_as: u32,
    #[prost(string, tag = "5")]
    pub peer_group_name: std::string::String,
    #[prost(uint32, tag = "6")]
    pub peer_type: u32,
    #[prost(enumeration = "peer_group_conf::RemovePrivateAs", tag = "7")]
    pub remove_private_as: i32,
    #[prost(bool, tag = "8")]
    pub route_flap_damping: bool,
    #[prost(uint32, tag = "9")]
    pub send_community: u32,
}
pub mod peer_group_conf {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum RemovePrivateAs {
        None = 0,
        All = 1,
        Replace = 2,
    }
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PeerGroupState {
    #[prost(string, tag = "1")]
    pub auth_password: std::string::String,
    #[prost(string, tag = "2")]
    pub description: std::string::String,
    #[prost(uint32, tag = "3")]
    pub local_as: u32,
    #[prost(uint32, tag = "4")]
    pub peer_as: u32,
    #[prost(string, tag = "5")]
    pub peer_group_name: std::string::String,
    #[prost(uint32, tag = "6")]
    pub peer_type: u32,
    #[prost(enumeration = "peer_group_state::RemovePrivateAs", tag = "7")]
    pub remove_private_as: i32,
    #[prost(bool, tag = "8")]
    pub route_flap_damping: bool,
    #[prost(uint32, tag = "9")]
    pub send_community: u32,
    #[prost(uint32, tag = "10")]
    pub total_paths: u32,
    #[prost(uint32, tag = "11")]
    pub total_prefixes: u32,
}
pub mod peer_group_state {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum RemovePrivateAs {
        None = 0,
        All = 1,
        Replace = 2,
    }
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EbgpMultihop {
    #[prost(bool, tag = "1")]
    pub enabled: bool,
    #[prost(uint32, tag = "2")]
    pub multihop_ttl: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouteReflector {
    #[prost(bool, tag = "1")]
    pub route_reflector_client: bool,
    #[prost(string, tag = "2")]
    pub route_reflector_cluster_id: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PeerState {
    #[prost(string, tag = "1")]
    pub auth_password: std::string::String,
    #[prost(string, tag = "2")]
    pub description: std::string::String,
    #[prost(uint32, tag = "3")]
    pub local_as: u32,
    #[prost(message, optional, tag = "4")]
    pub messages: ::std::option::Option<Messages>,
    #[prost(string, tag = "5")]
    pub neighbor_address: std::string::String,
    #[prost(uint32, tag = "6")]
    pub peer_as: u32,
    #[prost(string, tag = "7")]
    pub peer_group: std::string::String,
    #[prost(uint32, tag = "8")]
    pub peer_type: u32,
    #[prost(message, optional, tag = "9")]
    pub queues: ::std::option::Option<Queues>,
    #[prost(uint32, tag = "10")]
    pub remove_private_as: u32,
    #[prost(bool, tag = "11")]
    pub route_flap_damping: bool,
    #[prost(uint32, tag = "12")]
    pub send_community: u32,
    #[prost(enumeration = "peer_state::SessionState", tag = "13")]
    pub session_state: i32,
    #[prost(enumeration = "peer_state::AdminState", tag = "15")]
    pub admin_state: i32,
    #[prost(uint32, tag = "16")]
    pub out_q: u32,
    #[prost(uint32, tag = "17")]
    pub flops: u32,
    /// Each attribute must be one of *Capability defined in
    /// "api/capability.proto".
    #[prost(message, repeated, tag = "18")]
    pub remote_cap: ::std::vec::Vec<::prost_types::Any>,
    #[prost(message, repeated, tag = "19")]
    pub local_cap: ::std::vec::Vec<::prost_types::Any>,
    #[prost(string, tag = "20")]
    pub router_id: std::string::String,
}
pub mod peer_state {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum SessionState {
        Unknown = 0,
        Idle = 1,
        Connect = 2,
        Active = 3,
        Opensent = 4,
        Openconfirm = 5,
        Established = 6,
    }
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum AdminState {
        Up = 0,
        Down = 1,
        /// prefix counter over limit
        PfxCt = 2,
    }
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Messages {
    #[prost(message, optional, tag = "1")]
    pub received: ::std::option::Option<Message>,
    #[prost(message, optional, tag = "2")]
    pub sent: ::std::option::Option<Message>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Message {
    #[prost(uint64, tag = "1")]
    pub notification: u64,
    #[prost(uint64, tag = "2")]
    pub update: u64,
    #[prost(uint64, tag = "3")]
    pub open: u64,
    #[prost(uint64, tag = "4")]
    pub keepalive: u64,
    #[prost(uint64, tag = "5")]
    pub refresh: u64,
    #[prost(uint64, tag = "6")]
    pub discarded: u64,
    #[prost(uint64, tag = "7")]
    pub total: u64,
    #[prost(uint64, tag = "8")]
    pub withdraw_update: u64,
    #[prost(uint64, tag = "9")]
    pub withdraw_prefix: u64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Queues {
    #[prost(uint32, tag = "1")]
    pub input: u32,
    #[prost(uint32, tag = "2")]
    pub output: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Timers {
    #[prost(message, optional, tag = "1")]
    pub config: ::std::option::Option<TimersConfig>,
    #[prost(message, optional, tag = "2")]
    pub state: ::std::option::Option<TimersState>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TimersConfig {
    #[prost(uint64, tag = "1")]
    pub connect_retry: u64,
    #[prost(uint64, tag = "2")]
    pub hold_time: u64,
    #[prost(uint64, tag = "3")]
    pub keepalive_interval: u64,
    #[prost(uint64, tag = "4")]
    pub minimum_advertisement_interval: u64,
    #[prost(uint64, tag = "5")]
    pub idle_hold_time_after_reset: u64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TimersState {
    #[prost(uint64, tag = "1")]
    pub connect_retry: u64,
    #[prost(uint64, tag = "2")]
    pub hold_time: u64,
    #[prost(uint64, tag = "3")]
    pub keepalive_interval: u64,
    #[prost(uint64, tag = "4")]
    pub minimum_advertisement_interval: u64,
    #[prost(uint64, tag = "5")]
    pub negotiated_hold_time: u64,
    #[prost(message, optional, tag = "6")]
    pub uptime: ::std::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag = "7")]
    pub downtime: ::std::option::Option<::prost_types::Timestamp>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Transport {
    #[prost(string, tag = "1")]
    pub local_address: std::string::String,
    #[prost(uint32, tag = "2")]
    pub local_port: u32,
    #[prost(bool, tag = "3")]
    pub mtu_discovery: bool,
    #[prost(bool, tag = "4")]
    pub passive_mode: bool,
    #[prost(string, tag = "5")]
    pub remote_address: std::string::String,
    #[prost(uint32, tag = "6")]
    pub remote_port: u32,
    #[prost(uint32, tag = "7")]
    pub tcp_mss: u32,
    #[prost(string, tag = "8")]
    pub bind_interface: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouteServer {
    #[prost(bool, tag = "1")]
    pub route_server_client: bool,
    #[prost(bool, tag = "2")]
    pub secondary_route: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GracefulRestart {
    #[prost(bool, tag = "1")]
    pub enabled: bool,
    #[prost(uint32, tag = "2")]
    pub restart_time: u32,
    #[prost(bool, tag = "3")]
    pub helper_only: bool,
    #[prost(uint32, tag = "4")]
    pub deferral_time: u32,
    #[prost(bool, tag = "5")]
    pub notification_enabled: bool,
    #[prost(bool, tag = "6")]
    pub longlived_enabled: bool,
    #[prost(uint32, tag = "7")]
    pub stale_routes_time: u32,
    #[prost(uint32, tag = "8")]
    pub peer_restart_time: u32,
    #[prost(bool, tag = "9")]
    pub peer_restarting: bool,
    #[prost(bool, tag = "10")]
    pub local_restarting: bool,
    #[prost(string, tag = "11")]
    pub mode: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MpGracefulRestartConfig {
    #[prost(bool, tag = "1")]
    pub enabled: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MpGracefulRestartState {
    #[prost(bool, tag = "1")]
    pub enabled: bool,
    #[prost(bool, tag = "2")]
    pub received: bool,
    #[prost(bool, tag = "3")]
    pub advertised: bool,
    #[prost(bool, tag = "4")]
    pub end_of_rib_received: bool,
    #[prost(bool, tag = "5")]
    pub end_of_rib_sent: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MpGracefulRestart {
    #[prost(message, optional, tag = "1")]
    pub config: ::std::option::Option<MpGracefulRestartConfig>,
    #[prost(message, optional, tag = "2")]
    pub state: ::std::option::Option<MpGracefulRestartState>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AfiSafiConfig {
    #[prost(message, optional, tag = "1")]
    pub family: ::std::option::Option<Family>,
    #[prost(bool, tag = "2")]
    pub enabled: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AfiSafiState {
    #[prost(message, optional, tag = "1")]
    pub family: ::std::option::Option<Family>,
    #[prost(bool, tag = "2")]
    pub enabled: bool,
    #[prost(uint64, tag = "3")]
    pub received: u64,
    #[prost(uint64, tag = "4")]
    pub accepted: u64,
    #[prost(uint64, tag = "5")]
    pub advertised: u64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouteSelectionOptionsConfig {
    #[prost(bool, tag = "1")]
    pub always_compare_med: bool,
    #[prost(bool, tag = "2")]
    pub ignore_as_path_length: bool,
    #[prost(bool, tag = "3")]
    pub external_compare_router_id: bool,
    #[prost(bool, tag = "4")]
    pub advertise_inactive_routes: bool,
    #[prost(bool, tag = "5")]
    pub enable_aigp: bool,
    #[prost(bool, tag = "6")]
    pub ignore_next_hop_igp_metric: bool,
    #[prost(bool, tag = "7")]
    pub disable_best_path_selection: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouteSelectionOptionsState {
    #[prost(bool, tag = "1")]
    pub always_compare_med: bool,
    #[prost(bool, tag = "2")]
    pub ignore_as_path_length: bool,
    #[prost(bool, tag = "3")]
    pub external_compare_router_id: bool,
    #[prost(bool, tag = "4")]
    pub advertise_inactive_routes: bool,
    #[prost(bool, tag = "5")]
    pub enable_aigp: bool,
    #[prost(bool, tag = "6")]
    pub ignore_next_hop_igp_metric: bool,
    #[prost(bool, tag = "7")]
    pub disable_best_path_selection: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouteSelectionOptions {
    #[prost(message, optional, tag = "1")]
    pub config: ::std::option::Option<RouteSelectionOptionsConfig>,
    #[prost(message, optional, tag = "2")]
    pub state: ::std::option::Option<RouteSelectionOptionsState>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UseMultiplePathsConfig {
    #[prost(bool, tag = "1")]
    pub enabled: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UseMultiplePathsState {
    #[prost(bool, tag = "1")]
    pub enabled: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EbgpConfig {
    #[prost(bool, tag = "1")]
    pub allow_multiple_as: bool,
    #[prost(uint32, tag = "2")]
    pub maximum_paths: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EbgpState {
    #[prost(bool, tag = "1")]
    pub allow_multiple_as: bool,
    #[prost(uint32, tag = "2")]
    pub maximum_paths: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Ebgp {
    #[prost(message, optional, tag = "1")]
    pub config: ::std::option::Option<EbgpConfig>,
    #[prost(message, optional, tag = "2")]
    pub state: ::std::option::Option<EbgpState>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct IbgpConfig {
    #[prost(uint32, tag = "1")]
    pub maximum_paths: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct IbgpState {
    #[prost(uint32, tag = "1")]
    pub maximum_paths: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Ibgp {
    #[prost(message, optional, tag = "1")]
    pub config: ::std::option::Option<IbgpConfig>,
    #[prost(message, optional, tag = "2")]
    pub state: ::std::option::Option<IbgpState>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UseMultiplePaths {
    #[prost(message, optional, tag = "1")]
    pub config: ::std::option::Option<UseMultiplePathsConfig>,
    #[prost(message, optional, tag = "2")]
    pub state: ::std::option::Option<UseMultiplePathsState>,
    #[prost(message, optional, tag = "3")]
    pub ebgp: ::std::option::Option<Ebgp>,
    #[prost(message, optional, tag = "4")]
    pub ibgp: ::std::option::Option<Ibgp>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouteTargetMembershipConfig {
    #[prost(uint32, tag = "1")]
    pub deferral_time: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouteTargetMembershipState {
    #[prost(uint32, tag = "1")]
    pub deferral_time: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouteTargetMembership {
    #[prost(message, optional, tag = "1")]
    pub config: ::std::option::Option<RouteTargetMembershipConfig>,
    #[prost(message, optional, tag = "2")]
    pub state: ::std::option::Option<RouteTargetMembershipState>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LongLivedGracefulRestartConfig {
    #[prost(bool, tag = "1")]
    pub enabled: bool,
    #[prost(uint32, tag = "2")]
    pub restart_time: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LongLivedGracefulRestartState {
    #[prost(bool, tag = "1")]
    pub enabled: bool,
    #[prost(bool, tag = "2")]
    pub received: bool,
    #[prost(bool, tag = "3")]
    pub advertised: bool,
    #[prost(uint32, tag = "4")]
    pub peer_restart_time: u32,
    #[prost(bool, tag = "5")]
    pub peer_restart_timer_expired: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LongLivedGracefulRestart {
    #[prost(message, optional, tag = "1")]
    pub config: ::std::option::Option<LongLivedGracefulRestartConfig>,
    #[prost(message, optional, tag = "2")]
    pub state: ::std::option::Option<LongLivedGracefulRestartState>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AfiSafi {
    #[prost(message, optional, tag = "1")]
    pub mp_graceful_restart: ::std::option::Option<MpGracefulRestart>,
    #[prost(message, optional, tag = "2")]
    pub config: ::std::option::Option<AfiSafiConfig>,
    #[prost(message, optional, tag = "3")]
    pub state: ::std::option::Option<AfiSafiState>,
    #[prost(message, optional, tag = "4")]
    pub apply_policy: ::std::option::Option<ApplyPolicy>,
    /// TODO:
    /// Support the following structures:
    /// - Ipv4Unicast
    /// - Ipv6Unicast
    /// - Ipv4LabelledUnicast
    /// - Ipv6LabelledUnicast
    /// - L3vpnIpv4Unicast
    /// - L3vpnIpv6Unicast
    /// - L3vpnIpv4Multicast
    /// - L3vpnIpv6Multicast
    /// - L2vpnVpls
    /// - L2vpnEvpn
    #[prost(message, optional, tag = "5")]
    pub route_selection_options: ::std::option::Option<RouteSelectionOptions>,
    #[prost(message, optional, tag = "6")]
    pub use_multiple_paths: ::std::option::Option<UseMultiplePaths>,
    #[prost(message, optional, tag = "7")]
    pub prefix_limits: ::std::option::Option<PrefixLimit>,
    #[prost(message, optional, tag = "8")]
    pub route_target_membership: ::std::option::Option<RouteTargetMembership>,
    #[prost(message, optional, tag = "9")]
    pub long_lived_graceful_restart: ::std::option::Option<LongLivedGracefulRestart>,
    #[prost(message, optional, tag = "10")]
    pub add_paths: ::std::option::Option<AddPaths>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddPathsConfig {
    #[prost(bool, tag = "1")]
    pub receive: bool,
    #[prost(uint32, tag = "2")]
    pub send_max: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddPathsState {
    #[prost(bool, tag = "1")]
    pub receive: bool,
    #[prost(uint32, tag = "2")]
    pub send_max: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddPaths {
    #[prost(message, optional, tag = "1")]
    pub config: ::std::option::Option<AddPathsConfig>,
    #[prost(message, optional, tag = "2")]
    pub state: ::std::option::Option<AddPathsState>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Prefix {
    #[prost(string, tag = "1")]
    pub ip_prefix: std::string::String,
    #[prost(uint32, tag = "2")]
    pub mask_length_min: u32,
    #[prost(uint32, tag = "3")]
    pub mask_length_max: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DefinedSet {
    #[prost(enumeration = "DefinedType", tag = "1")]
    pub defined_type: i32,
    #[prost(string, tag = "2")]
    pub name: std::string::String,
    #[prost(string, repeated, tag = "3")]
    pub list: ::std::vec::Vec<std::string::String>,
    #[prost(message, repeated, tag = "4")]
    pub prefixes: ::std::vec::Vec<Prefix>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MatchSet {
    #[prost(enumeration = "MatchType", tag = "1")]
    pub match_type: i32,
    #[prost(string, tag = "2")]
    pub name: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AsPathLength {
    #[prost(enumeration = "AsPathLengthType", tag = "1")]
    pub length_type: i32,
    #[prost(uint32, tag = "2")]
    pub length: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Conditions {
    #[prost(message, optional, tag = "1")]
    pub prefix_set: ::std::option::Option<MatchSet>,
    #[prost(message, optional, tag = "2")]
    pub neighbor_set: ::std::option::Option<MatchSet>,
    #[prost(message, optional, tag = "3")]
    pub as_path_length: ::std::option::Option<AsPathLength>,
    #[prost(message, optional, tag = "4")]
    pub as_path_set: ::std::option::Option<MatchSet>,
    #[prost(message, optional, tag = "5")]
    pub community_set: ::std::option::Option<MatchSet>,
    #[prost(message, optional, tag = "6")]
    pub ext_community_set: ::std::option::Option<MatchSet>,
    #[prost(int32, tag = "7")]
    pub rpki_result: i32,
    #[prost(enumeration = "conditions::RouteType", tag = "8")]
    pub route_type: i32,
    #[prost(message, optional, tag = "9")]
    pub large_community_set: ::std::option::Option<MatchSet>,
    #[prost(string, repeated, tag = "10")]
    pub next_hop_in_list: ::std::vec::Vec<std::string::String>,
    #[prost(message, repeated, tag = "11")]
    pub afi_safi_in: ::std::vec::Vec<Family>,
}
pub mod conditions {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum RouteType {
        None = 0,
        Internal = 1,
        External = 2,
        Local = 3,
    }
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CommunityAction {
    #[prost(enumeration = "CommunityActionType", tag = "1")]
    pub action_type: i32,
    #[prost(string, repeated, tag = "2")]
    pub communities: ::std::vec::Vec<std::string::String>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MedAction {
    #[prost(enumeration = "MedActionType", tag = "1")]
    pub action_type: i32,
    #[prost(int64, tag = "2")]
    pub value: i64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AsPrependAction {
    #[prost(uint32, tag = "1")]
    pub asn: u32,
    #[prost(uint32, tag = "2")]
    pub repeat: u32,
    #[prost(bool, tag = "3")]
    pub use_left_most: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NexthopAction {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(bool, tag = "2")]
    pub field_self: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LocalPrefAction {
    #[prost(uint32, tag = "1")]
    pub value: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Actions {
    #[prost(enumeration = "RouteAction", tag = "1")]
    pub route_action: i32,
    #[prost(message, optional, tag = "2")]
    pub community: ::std::option::Option<CommunityAction>,
    #[prost(message, optional, tag = "3")]
    pub med: ::std::option::Option<MedAction>,
    #[prost(message, optional, tag = "4")]
    pub as_prepend: ::std::option::Option<AsPrependAction>,
    #[prost(message, optional, tag = "5")]
    pub ext_community: ::std::option::Option<CommunityAction>,
    #[prost(message, optional, tag = "6")]
    pub nexthop: ::std::option::Option<NexthopAction>,
    #[prost(message, optional, tag = "7")]
    pub local_pref: ::std::option::Option<LocalPrefAction>,
    #[prost(message, optional, tag = "8")]
    pub large_community: ::std::option::Option<CommunityAction>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Statement {
    #[prost(string, tag = "1")]
    pub name: std::string::String,
    #[prost(message, optional, tag = "2")]
    pub conditions: ::std::option::Option<Conditions>,
    #[prost(message, optional, tag = "3")]
    pub actions: ::std::option::Option<Actions>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Policy {
    #[prost(string, tag = "1")]
    pub name: std::string::String,
    #[prost(message, repeated, tag = "2")]
    pub statements: ::std::vec::Vec<Statement>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PolicyAssignment {
    #[prost(string, tag = "1")]
    pub name: std::string::String,
    #[prost(enumeration = "PolicyDirection", tag = "2")]
    pub direction: i32,
    #[prost(message, repeated, tag = "4")]
    pub policies: ::std::vec::Vec<Policy>,
    #[prost(enumeration = "RouteAction", tag = "5")]
    pub default_action: i32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RoutingPolicy {
    #[prost(message, repeated, tag = "1")]
    pub defined_sets: ::std::vec::Vec<DefinedSet>,
    #[prost(message, repeated, tag = "2")]
    pub policies: ::std::vec::Vec<Policy>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Roa {
    #[prost(uint32, tag = "1")]
    pub r#as: u32,
    #[prost(uint32, tag = "2")]
    pub prefixlen: u32,
    #[prost(uint32, tag = "3")]
    pub maxlen: u32,
    #[prost(string, tag = "4")]
    pub prefix: std::string::String,
    #[prost(message, optional, tag = "5")]
    pub conf: ::std::option::Option<RpkiConf>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Vrf {
    #[prost(string, tag = "1")]
    pub name: std::string::String,
    /// Route Distinguisher must be one of
    /// RouteDistinguisherTwoOctetAS,
    /// RouteDistinguisherIPAddressAS,
    /// or RouteDistinguisherFourOctetAS.
    #[prost(message, optional, tag = "2")]
    pub rd: ::std::option::Option<::prost_types::Any>,
    /// List of the Import Route Targets. Each must be one of
    /// TwoOctetAsSpecificExtended,
    /// IPv4AddressSpecificExtended,
    /// or FourOctetAsSpecificExtended.
    #[prost(message, repeated, tag = "3")]
    pub import_rt: ::std::vec::Vec<::prost_types::Any>,
    /// List of the Export Route Targets. Each must be one of
    /// TwoOctetAsSpecificExtended,
    /// IPv4AddressSpecificExtended,
    /// or FourOctetAsSpecificExtended.
    #[prost(message, repeated, tag = "4")]
    pub export_rt: ::std::vec::Vec<::prost_types::Any>,
    #[prost(uint32, tag = "5")]
    pub id: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DefaultRouteDistance {
    #[prost(uint32, tag = "1")]
    pub external_route_distance: u32,
    #[prost(uint32, tag = "2")]
    pub internal_route_distance: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Global {
    #[prost(uint32, tag = "1")]
    pub r#as: u32,
    #[prost(string, tag = "2")]
    pub router_id: std::string::String,
    #[prost(int32, tag = "3")]
    pub listen_port: i32,
    #[prost(string, repeated, tag = "4")]
    pub listen_addresses: ::std::vec::Vec<std::string::String>,
    #[prost(uint32, repeated, tag = "5")]
    pub families: ::std::vec::Vec<u32>,
    #[prost(bool, tag = "6")]
    pub use_multiple_paths: bool,
    #[prost(message, optional, tag = "7")]
    pub route_selection_options: ::std::option::Option<RouteSelectionOptionsConfig>,
    #[prost(message, optional, tag = "8")]
    pub default_route_distance: ::std::option::Option<DefaultRouteDistance>,
    #[prost(message, optional, tag = "9")]
    pub confederation: ::std::option::Option<Confederation>,
    #[prost(message, optional, tag = "10")]
    pub graceful_restart: ::std::option::Option<GracefulRestart>,
    #[prost(message, optional, tag = "11")]
    pub apply_policy: ::std::option::Option<ApplyPolicy>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Confederation {
    #[prost(bool, tag = "1")]
    pub enabled: bool,
    #[prost(uint32, tag = "2")]
    pub identifier: u32,
    #[prost(uint32, repeated, tag = "3")]
    pub member_as_list: ::std::vec::Vec<u32>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RpkiConf {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(uint32, tag = "2")]
    pub remote_port: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RpkiState {
    #[prost(message, optional, tag = "1")]
    pub uptime: ::std::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag = "2")]
    pub downtime: ::std::option::Option<::prost_types::Timestamp>,
    #[prost(bool, tag = "3")]
    pub up: bool,
    #[prost(uint32, tag = "4")]
    pub record_ipv4: u32,
    #[prost(uint32, tag = "5")]
    pub record_ipv6: u32,
    #[prost(uint32, tag = "6")]
    pub prefix_ipv4: u32,
    #[prost(uint32, tag = "7")]
    pub prefix_ipv6: u32,
    #[prost(uint32, tag = "8")]
    pub serial: u32,
    #[prost(int64, tag = "9")]
    pub received_ipv4: i64,
    #[prost(int64, tag = "10")]
    pub received_ipv6: i64,
    #[prost(int64, tag = "11")]
    pub serial_notify: i64,
    #[prost(int64, tag = "12")]
    pub cache_reset: i64,
    #[prost(int64, tag = "13")]
    pub cache_response: i64,
    #[prost(int64, tag = "14")]
    pub end_of_data: i64,
    #[prost(int64, tag = "15")]
    pub error: i64,
    #[prost(int64, tag = "16")]
    pub serial_query: i64,
    #[prost(int64, tag = "17")]
    pub reset_query: i64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Rpki {
    #[prost(message, optional, tag = "1")]
    pub conf: ::std::option::Option<RpkiConf>,
    #[prost(message, optional, tag = "2")]
    pub state: ::std::option::Option<RpkiState>,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum TableType {
    Global = 0,
    Local = 1,
    AdjIn = 2,
    AdjOut = 3,
    Vrf = 4,
}
/// API representation of table.LookupOption
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum TableLookupOption {
    LookupExact = 0,
    LookupLonger = 1,
    LookupShorter = 2,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum DefinedType {
    Prefix = 0,
    Neighbor = 1,
    Tag = 2,
    AsPath = 3,
    Community = 4,
    ExtCommunity = 5,
    LargeCommunity = 6,
    NextHop = 7,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum MatchType {
    Any = 0,
    All = 1,
    Invert = 2,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum AsPathLengthType {
    Eq = 0,
    Ge = 1,
    Le = 2,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum RouteAction {
    None = 0,
    Accept = 1,
    Reject = 2,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum CommunityActionType {
    CommunityAdd = 0,
    CommunityRemove = 1,
    CommunityReplace = 2,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum MedActionType {
    MedMod = 0,
    MedReplace = 1,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum PolicyDirection {
    Unknown = 0,
    Import = 1,
    Export = 2,
}
#[doc = r" Generated client implementations."]
pub mod client {
    #![allow(unused_variables, dead_code, missing_docs)]
    use tonic::codegen::*;
    pub struct GobgpApiClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl GobgpApiClient<tonic::transport::Channel> {
        #[doc = r" Attempt to create a new client by connecting to a given endpoint."]
        pub async fn connect<D>(dst: D) -> Result<Self, tonic::transport::Error>
        where
            D: std::convert::TryInto<tonic::transport::Endpoint>,
            D::Error: Into<StdError>,
        {
            let conn = tonic::transport::Endpoint::new(dst)?.connect().await?;
            Ok(Self::new(conn))
        }
    }
    impl<T> GobgpApiClient<T>
    where
        T: tonic::client::GrpcService<tonic::body::BoxBody>,
        T::ResponseBody: Body + HttpBody + Send + 'static,
        T::Error: Into<StdError>,
        <T::ResponseBody as HttpBody>::Error: Into<StdError> + Send,
        <T::ResponseBody as HttpBody>::Data: Into<bytes::Bytes> + Send,
    {
        pub fn new(inner: T) -> Self {
            let inner = tonic::client::Grpc::new(inner);
            Self { inner }
        }
        #[doc = r" Check if the service is ready."]
        pub async fn ready(&mut self) -> Result<(), tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })
        }
        pub async fn start_bgp(
            &mut self,
            request: impl tonic::IntoRequest<super::StartBgpRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/StartBgp");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn stop_bgp(
            &mut self,
            request: impl tonic::IntoRequest<super::StopBgpRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/StopBgp");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn get_bgp(
            &mut self,
            request: impl tonic::IntoRequest<super::GetBgpRequest>,
        ) -> Result<tonic::Response<super::GetBgpResponse>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/GetBgp");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn add_peer(
            &mut self,
            request: impl tonic::IntoRequest<super::AddPeerRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/AddPeer");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn delete_peer(
            &mut self,
            request: impl tonic::IntoRequest<super::DeletePeerRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/DeletePeer");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn list_peer(
            &mut self,
            request: impl tonic::IntoRequest<super::ListPeerRequest>,
        ) -> Result<tonic::Response<tonic::codec::Streaming<super::ListPeerResponse>>, tonic::Status>
        {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/ListPeer");
            self.inner
                .server_streaming(request.into_request(), path, codec)
                .await
        }
        pub async fn update_peer(
            &mut self,
            request: impl tonic::IntoRequest<super::UpdatePeerRequest>,
        ) -> Result<tonic::Response<super::UpdatePeerResponse>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/UpdatePeer");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn reset_peer(
            &mut self,
            request: impl tonic::IntoRequest<super::ResetPeerRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/ResetPeer");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn shutdown_peer(
            &mut self,
            request: impl tonic::IntoRequest<super::ShutdownPeerRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/ShutdownPeer");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn enable_peer(
            &mut self,
            request: impl tonic::IntoRequest<super::EnablePeerRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/EnablePeer");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn disable_peer(
            &mut self,
            request: impl tonic::IntoRequest<super::DisablePeerRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/DisablePeer");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn monitor_peer(
            &mut self,
            request: impl tonic::IntoRequest<super::MonitorPeerRequest>,
        ) -> Result<
            tonic::Response<tonic::codec::Streaming<super::MonitorPeerResponse>>,
            tonic::Status,
        > {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/MonitorPeer");
            self.inner
                .server_streaming(request.into_request(), path, codec)
                .await
        }
        pub async fn add_peer_group(
            &mut self,
            request: impl tonic::IntoRequest<super::AddPeerGroupRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/AddPeerGroup");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn delete_peer_group(
            &mut self,
            request: impl tonic::IntoRequest<super::DeletePeerGroupRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/DeletePeerGroup");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn update_peer_group(
            &mut self,
            request: impl tonic::IntoRequest<super::UpdatePeerGroupRequest>,
        ) -> Result<tonic::Response<super::UpdatePeerGroupResponse>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/UpdatePeerGroup");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn add_dynamic_neighbor(
            &mut self,
            request: impl tonic::IntoRequest<super::AddDynamicNeighborRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/AddDynamicNeighbor");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn add_path(
            &mut self,
            request: impl tonic::IntoRequest<super::AddPathRequest>,
        ) -> Result<tonic::Response<super::AddPathResponse>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/AddPath");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn delete_path(
            &mut self,
            request: impl tonic::IntoRequest<super::DeletePathRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/DeletePath");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn list_path(
            &mut self,
            request: impl tonic::IntoRequest<super::ListPathRequest>,
        ) -> Result<tonic::Response<tonic::codec::Streaming<super::ListPathResponse>>, tonic::Status>
        {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/ListPath");
            self.inner
                .server_streaming(request.into_request(), path, codec)
                .await
        }
        pub async fn add_path_stream(
            &mut self,
            request: impl tonic::IntoStreamingRequest<Message = super::AddPathStreamRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/AddPathStream");
            self.inner
                .client_streaming(request.into_streaming_request(), path, codec)
                .await
        }
        pub async fn get_table(
            &mut self,
            request: impl tonic::IntoRequest<super::GetTableRequest>,
        ) -> Result<tonic::Response<super::GetTableResponse>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/GetTable");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn monitor_table(
            &mut self,
            request: impl tonic::IntoRequest<super::MonitorTableRequest>,
        ) -> Result<
            tonic::Response<tonic::codec::Streaming<super::MonitorTableResponse>>,
            tonic::Status,
        > {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/MonitorTable");
            self.inner
                .server_streaming(request.into_request(), path, codec)
                .await
        }
        pub async fn add_vrf(
            &mut self,
            request: impl tonic::IntoRequest<super::AddVrfRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/AddVrf");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn delete_vrf(
            &mut self,
            request: impl tonic::IntoRequest<super::DeleteVrfRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/DeleteVrf");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn list_vrf(
            &mut self,
            request: impl tonic::IntoRequest<super::ListVrfRequest>,
        ) -> Result<tonic::Response<tonic::codec::Streaming<super::ListVrfResponse>>, tonic::Status>
        {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/ListVrf");
            self.inner
                .server_streaming(request.into_request(), path, codec)
                .await
        }
        pub async fn add_policy(
            &mut self,
            request: impl tonic::IntoRequest<super::AddPolicyRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/AddPolicy");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn delete_policy(
            &mut self,
            request: impl tonic::IntoRequest<super::DeletePolicyRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/DeletePolicy");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn list_policy(
            &mut self,
            request: impl tonic::IntoRequest<super::ListPolicyRequest>,
        ) -> Result<
            tonic::Response<tonic::codec::Streaming<super::ListPolicyResponse>>,
            tonic::Status,
        > {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/ListPolicy");
            self.inner
                .server_streaming(request.into_request(), path, codec)
                .await
        }
        pub async fn set_policies(
            &mut self,
            request: impl tonic::IntoRequest<super::SetPoliciesRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/SetPolicies");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn add_defined_set(
            &mut self,
            request: impl tonic::IntoRequest<super::AddDefinedSetRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/AddDefinedSet");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn delete_defined_set(
            &mut self,
            request: impl tonic::IntoRequest<super::DeleteDefinedSetRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/DeleteDefinedSet");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn list_defined_set(
            &mut self,
            request: impl tonic::IntoRequest<super::ListDefinedSetRequest>,
        ) -> Result<
            tonic::Response<tonic::codec::Streaming<super::ListDefinedSetResponse>>,
            tonic::Status,
        > {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/ListDefinedSet");
            self.inner
                .server_streaming(request.into_request(), path, codec)
                .await
        }
        pub async fn add_statement(
            &mut self,
            request: impl tonic::IntoRequest<super::AddStatementRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/AddStatement");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn delete_statement(
            &mut self,
            request: impl tonic::IntoRequest<super::DeleteStatementRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/DeleteStatement");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn list_statement(
            &mut self,
            request: impl tonic::IntoRequest<super::ListStatementRequest>,
        ) -> Result<
            tonic::Response<tonic::codec::Streaming<super::ListStatementResponse>>,
            tonic::Status,
        > {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/ListStatement");
            self.inner
                .server_streaming(request.into_request(), path, codec)
                .await
        }
        pub async fn add_policy_assignment(
            &mut self,
            request: impl tonic::IntoRequest<super::AddPolicyAssignmentRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/AddPolicyAssignment");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn delete_policy_assignment(
            &mut self,
            request: impl tonic::IntoRequest<super::DeletePolicyAssignmentRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/DeletePolicyAssignment");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn list_policy_assignment(
            &mut self,
            request: impl tonic::IntoRequest<super::ListPolicyAssignmentRequest>,
        ) -> Result<
            tonic::Response<tonic::codec::Streaming<super::ListPolicyAssignmentResponse>>,
            tonic::Status,
        > {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/ListPolicyAssignment");
            self.inner
                .server_streaming(request.into_request(), path, codec)
                .await
        }
        pub async fn set_policy_assignment(
            &mut self,
            request: impl tonic::IntoRequest<super::SetPolicyAssignmentRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/SetPolicyAssignment");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn add_rpki(
            &mut self,
            request: impl tonic::IntoRequest<super::AddRpkiRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/AddRpki");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn delete_rpki(
            &mut self,
            request: impl tonic::IntoRequest<super::DeleteRpkiRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/DeleteRpki");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn list_rpki(
            &mut self,
            request: impl tonic::IntoRequest<super::ListRpkiRequest>,
        ) -> Result<tonic::Response<tonic::codec::Streaming<super::ListRpkiResponse>>, tonic::Status>
        {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/ListRpki");
            self.inner
                .server_streaming(request.into_request(), path, codec)
                .await
        }
        pub async fn enable_rpki(
            &mut self,
            request: impl tonic::IntoRequest<super::EnableRpkiRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/EnableRpki");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn disable_rpki(
            &mut self,
            request: impl tonic::IntoRequest<super::DisableRpkiRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/DisableRpki");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn reset_rpki(
            &mut self,
            request: impl tonic::IntoRequest<super::ResetRpkiRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/ResetRpki");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn list_rpki_table(
            &mut self,
            request: impl tonic::IntoRequest<super::ListRpkiTableRequest>,
        ) -> Result<
            tonic::Response<tonic::codec::Streaming<super::ListRpkiTableResponse>>,
            tonic::Status,
        > {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/ListRpkiTable");
            self.inner
                .server_streaming(request.into_request(), path, codec)
                .await
        }
        pub async fn enable_zebra(
            &mut self,
            request: impl tonic::IntoRequest<super::EnableZebraRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/EnableZebra");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn enable_mrt(
            &mut self,
            request: impl tonic::IntoRequest<super::EnableMrtRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/EnableMrt");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn disable_mrt(
            &mut self,
            request: impl tonic::IntoRequest<super::DisableMrtRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/DisableMrt");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn add_bmp(
            &mut self,
            request: impl tonic::IntoRequest<super::AddBmpRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/AddBmp");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn delete_bmp(
            &mut self,
            request: impl tonic::IntoRequest<super::DeleteBmpRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            self.ready().await?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/gobgpapi.GobgpApi/DeleteBmp");
            self.inner.unary(request.into_request(), path, codec).await
        }
    }
    impl<T: Clone> Clone for GobgpApiClient<T> {
        fn clone(&self) -> Self {
            Self {
                inner: self.inner.clone(),
            }
        }
    }
}
#[doc = r" Generated server implementations."]
pub mod server {
    #![allow(unused_variables, dead_code, missing_docs)]
    use tonic::codegen::*;
    #[doc = "Generated trait containing gRPC methods that should be implemented for use with GobgpApiServer."]
    #[async_trait]
    pub trait GobgpApi: Send + Sync + 'static {
        async fn start_bgp(
            &self,
            request: tonic::Request<super::StartBgpRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn stop_bgp(
            &self,
            request: tonic::Request<super::StopBgpRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn get_bgp(
            &self,
            request: tonic::Request<super::GetBgpRequest>,
        ) -> Result<tonic::Response<super::GetBgpResponse>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn add_peer(
            &self,
            request: tonic::Request<super::AddPeerRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn delete_peer(
            &self,
            request: tonic::Request<super::DeletePeerRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        #[doc = "Server streaming response type for the ListPeer method."]
        type ListPeerStream: Stream<Item = Result<super::ListPeerResponse, tonic::Status>>
            + Send
            + Sync
            + 'static;
        async fn list_peer(
            &self,
            request: tonic::Request<super::ListPeerRequest>,
        ) -> Result<tonic::Response<Self::ListPeerStream>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn update_peer(
            &self,
            request: tonic::Request<super::UpdatePeerRequest>,
        ) -> Result<tonic::Response<super::UpdatePeerResponse>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn reset_peer(
            &self,
            request: tonic::Request<super::ResetPeerRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn shutdown_peer(
            &self,
            request: tonic::Request<super::ShutdownPeerRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn enable_peer(
            &self,
            request: tonic::Request<super::EnablePeerRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn disable_peer(
            &self,
            request: tonic::Request<super::DisablePeerRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        #[doc = "Server streaming response type for the MonitorPeer method."]
        type MonitorPeerStream: Stream<Item = Result<super::MonitorPeerResponse, tonic::Status>>
            + Send
            + Sync
            + 'static;
        async fn monitor_peer(
            &self,
            request: tonic::Request<super::MonitorPeerRequest>,
        ) -> Result<tonic::Response<Self::MonitorPeerStream>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn add_peer_group(
            &self,
            request: tonic::Request<super::AddPeerGroupRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn delete_peer_group(
            &self,
            request: tonic::Request<super::DeletePeerGroupRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn update_peer_group(
            &self,
            request: tonic::Request<super::UpdatePeerGroupRequest>,
        ) -> Result<tonic::Response<super::UpdatePeerGroupResponse>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn add_dynamic_neighbor(
            &self,
            request: tonic::Request<super::AddDynamicNeighborRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn add_path(
            &self,
            request: tonic::Request<super::AddPathRequest>,
        ) -> Result<tonic::Response<super::AddPathResponse>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn delete_path(
            &self,
            request: tonic::Request<super::DeletePathRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        #[doc = "Server streaming response type for the ListPath method."]
        type ListPathStream: Stream<Item = Result<super::ListPathResponse, tonic::Status>>
            + Send
            + Sync
            + 'static;
        async fn list_path(
            &self,
            request: tonic::Request<super::ListPathRequest>,
        ) -> Result<tonic::Response<Self::ListPathStream>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn add_path_stream(
            &self,
            request: tonic::Request<tonic::Streaming<super::AddPathStreamRequest>>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn get_table(
            &self,
            request: tonic::Request<super::GetTableRequest>,
        ) -> Result<tonic::Response<super::GetTableResponse>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        #[doc = "Server streaming response type for the MonitorTable method."]
        type MonitorTableStream: Stream<Item = Result<super::MonitorTableResponse, tonic::Status>>
            + Send
            + Sync
            + 'static;
        async fn monitor_table(
            &self,
            request: tonic::Request<super::MonitorTableRequest>,
        ) -> Result<tonic::Response<Self::MonitorTableStream>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn add_vrf(
            &self,
            request: tonic::Request<super::AddVrfRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn delete_vrf(
            &self,
            request: tonic::Request<super::DeleteVrfRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        #[doc = "Server streaming response type for the ListVrf method."]
        type ListVrfStream: Stream<Item = Result<super::ListVrfResponse, tonic::Status>>
            + Send
            + Sync
            + 'static;
        async fn list_vrf(
            &self,
            request: tonic::Request<super::ListVrfRequest>,
        ) -> Result<tonic::Response<Self::ListVrfStream>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn add_policy(
            &self,
            request: tonic::Request<super::AddPolicyRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn delete_policy(
            &self,
            request: tonic::Request<super::DeletePolicyRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        #[doc = "Server streaming response type for the ListPolicy method."]
        type ListPolicyStream: Stream<Item = Result<super::ListPolicyResponse, tonic::Status>>
            + Send
            + Sync
            + 'static;
        async fn list_policy(
            &self,
            request: tonic::Request<super::ListPolicyRequest>,
        ) -> Result<tonic::Response<Self::ListPolicyStream>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn set_policies(
            &self,
            request: tonic::Request<super::SetPoliciesRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn add_defined_set(
            &self,
            request: tonic::Request<super::AddDefinedSetRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn delete_defined_set(
            &self,
            request: tonic::Request<super::DeleteDefinedSetRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        #[doc = "Server streaming response type for the ListDefinedSet method."]
        type ListDefinedSetStream: Stream<Item = Result<super::ListDefinedSetResponse, tonic::Status>>
            + Send
            + Sync
            + 'static;
        async fn list_defined_set(
            &self,
            request: tonic::Request<super::ListDefinedSetRequest>,
        ) -> Result<tonic::Response<Self::ListDefinedSetStream>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn add_statement(
            &self,
            request: tonic::Request<super::AddStatementRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn delete_statement(
            &self,
            request: tonic::Request<super::DeleteStatementRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        #[doc = "Server streaming response type for the ListStatement method."]
        type ListStatementStream: Stream<Item = Result<super::ListStatementResponse, tonic::Status>>
            + Send
            + Sync
            + 'static;
        async fn list_statement(
            &self,
            request: tonic::Request<super::ListStatementRequest>,
        ) -> Result<tonic::Response<Self::ListStatementStream>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn add_policy_assignment(
            &self,
            request: tonic::Request<super::AddPolicyAssignmentRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn delete_policy_assignment(
            &self,
            request: tonic::Request<super::DeletePolicyAssignmentRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        #[doc = "Server streaming response type for the ListPolicyAssignment method."]
        type ListPolicyAssignmentStream: Stream<Item = Result<super::ListPolicyAssignmentResponse, tonic::Status>>
            + Send
            + Sync
            + 'static;
        async fn list_policy_assignment(
            &self,
            request: tonic::Request<super::ListPolicyAssignmentRequest>,
        ) -> Result<tonic::Response<Self::ListPolicyAssignmentStream>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn set_policy_assignment(
            &self,
            request: tonic::Request<super::SetPolicyAssignmentRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn add_rpki(
            &self,
            request: tonic::Request<super::AddRpkiRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn delete_rpki(
            &self,
            request: tonic::Request<super::DeleteRpkiRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        #[doc = "Server streaming response type for the ListRpki method."]
        type ListRpkiStream: Stream<Item = Result<super::ListRpkiResponse, tonic::Status>>
            + Send
            + Sync
            + 'static;
        async fn list_rpki(
            &self,
            request: tonic::Request<super::ListRpkiRequest>,
        ) -> Result<tonic::Response<Self::ListRpkiStream>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn enable_rpki(
            &self,
            request: tonic::Request<super::EnableRpkiRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn disable_rpki(
            &self,
            request: tonic::Request<super::DisableRpkiRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn reset_rpki(
            &self,
            request: tonic::Request<super::ResetRpkiRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        #[doc = "Server streaming response type for the ListRpkiTable method."]
        type ListRpkiTableStream: Stream<Item = Result<super::ListRpkiTableResponse, tonic::Status>>
            + Send
            + Sync
            + 'static;
        async fn list_rpki_table(
            &self,
            request: tonic::Request<super::ListRpkiTableRequest>,
        ) -> Result<tonic::Response<Self::ListRpkiTableStream>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn enable_zebra(
            &self,
            request: tonic::Request<super::EnableZebraRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn enable_mrt(
            &self,
            request: tonic::Request<super::EnableMrtRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn disable_mrt(
            &self,
            request: tonic::Request<super::DisableMrtRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn add_bmp(
            &self,
            request: tonic::Request<super::AddBmpRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
        async fn delete_bmp(
            &self,
            request: tonic::Request<super::DeleteBmpRequest>,
        ) -> Result<tonic::Response<()>, tonic::Status> {
            Err(tonic::Status::unimplemented("Not yet implemented"))
        }
    }
    #[derive(Debug)]
    #[doc(hidden)]
    pub struct GobgpApiServer<T: GobgpApi> {
        inner: Arc<T>,
    }
    impl<T: GobgpApi> GobgpApiServer<T> {
        pub fn new(inner: T) -> Self {
            let inner = Arc::new(inner);
            Self { inner }
        }
    }
    impl<T: GobgpApi> Service<http::Request<HyperBody>> for GobgpApiServer<T> {
        type Response = http::Response<tonic::body::BoxBody>;
        type Error = Never;
        type Future = BoxFuture<Self::Response, Self::Error>;
        fn poll_ready(&mut self, _cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
            Poll::Ready(Ok(()))
        }
        fn call(&mut self, req: http::Request<HyperBody>) -> Self::Future {
            let inner = self.inner.clone();
            match req.uri().path() {
                "/gobgpapi.GobgpApi/StartBgp" => {
                    struct StartBgpSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::StartBgpRequest> for StartBgpSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::StartBgpRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.start_bgp(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = StartBgpSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/StopBgp" => {
                    struct StopBgpSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::StopBgpRequest> for StopBgpSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::StopBgpRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.stop_bgp(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = StopBgpSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/GetBgp" => {
                    struct GetBgpSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::GetBgpRequest> for GetBgpSvc<T> {
                        type Response = super::GetBgpResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetBgpRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.get_bgp(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = GetBgpSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/AddPeer" => {
                    struct AddPeerSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::AddPeerRequest> for AddPeerSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AddPeerRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.add_peer(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = AddPeerSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/DeletePeer" => {
                    struct DeletePeerSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::DeletePeerRequest> for DeletePeerSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeletePeerRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.delete_peer(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = DeletePeerSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/ListPeer" => {
                    struct ListPeerSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::ServerStreamingService<super::ListPeerRequest> for ListPeerSvc<T> {
                        type Response = super::ListPeerResponse;
                        type ResponseStream = T::ListPeerStream;
                        type Future =
                            BoxFuture<tonic::Response<Self::ResponseStream>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListPeerRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.list_peer(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = ListPeerSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/UpdatePeer" => {
                    struct UpdatePeerSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::UpdatePeerRequest> for UpdatePeerSvc<T> {
                        type Response = super::UpdatePeerResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::UpdatePeerRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.update_peer(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = UpdatePeerSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/ResetPeer" => {
                    struct ResetPeerSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::ResetPeerRequest> for ResetPeerSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ResetPeerRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.reset_peer(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = ResetPeerSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/ShutdownPeer" => {
                    struct ShutdownPeerSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::ShutdownPeerRequest> for ShutdownPeerSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ShutdownPeerRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.shutdown_peer(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = ShutdownPeerSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/EnablePeer" => {
                    struct EnablePeerSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::EnablePeerRequest> for EnablePeerSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::EnablePeerRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.enable_peer(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = EnablePeerSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/DisablePeer" => {
                    struct DisablePeerSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::DisablePeerRequest> for DisablePeerSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DisablePeerRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.disable_peer(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = DisablePeerSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/MonitorPeer" => {
                    struct MonitorPeerSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi>
                        tonic::server::ServerStreamingService<super::MonitorPeerRequest>
                        for MonitorPeerSvc<T>
                    {
                        type Response = super::MonitorPeerResponse;
                        type ResponseStream = T::MonitorPeerStream;
                        type Future =
                            BoxFuture<tonic::Response<Self::ResponseStream>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MonitorPeerRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.monitor_peer(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = MonitorPeerSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/AddPeerGroup" => {
                    struct AddPeerGroupSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::AddPeerGroupRequest> for AddPeerGroupSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AddPeerGroupRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.add_peer_group(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = AddPeerGroupSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/DeletePeerGroup" => {
                    struct DeletePeerGroupSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::DeletePeerGroupRequest>
                        for DeletePeerGroupSvc<T>
                    {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeletePeerGroupRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.delete_peer_group(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = DeletePeerGroupSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/UpdatePeerGroup" => {
                    struct UpdatePeerGroupSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::UpdatePeerGroupRequest>
                        for UpdatePeerGroupSvc<T>
                    {
                        type Response = super::UpdatePeerGroupResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::UpdatePeerGroupRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.update_peer_group(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = UpdatePeerGroupSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/AddDynamicNeighbor" => {
                    struct AddDynamicNeighborSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::AddDynamicNeighborRequest>
                        for AddDynamicNeighborSvc<T>
                    {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AddDynamicNeighborRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.add_dynamic_neighbor(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = AddDynamicNeighborSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/AddPath" => {
                    struct AddPathSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::AddPathRequest> for AddPathSvc<T> {
                        type Response = super::AddPathResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AddPathRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.add_path(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = AddPathSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/DeletePath" => {
                    struct DeletePathSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::DeletePathRequest> for DeletePathSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeletePathRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.delete_path(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = DeletePathSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/ListPath" => {
                    struct ListPathSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::ServerStreamingService<super::ListPathRequest> for ListPathSvc<T> {
                        type Response = super::ListPathResponse;
                        type ResponseStream = T::ListPathStream;
                        type Future =
                            BoxFuture<tonic::Response<Self::ResponseStream>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListPathRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.list_path(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = ListPathSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/AddPathStream" => {
                    struct AddPathStreamSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi>
                        tonic::server::ClientStreamingService<super::AddPathStreamRequest>
                        for AddPathStreamSvc<T>
                    {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<tonic::Streaming<super::AddPathStreamRequest>>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.add_path_stream(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = AddPathStreamSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.client_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/GetTable" => {
                    struct GetTableSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::GetTableRequest> for GetTableSvc<T> {
                        type Response = super::GetTableResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetTableRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.get_table(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = GetTableSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/MonitorTable" => {
                    struct MonitorTableSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi>
                        tonic::server::ServerStreamingService<super::MonitorTableRequest>
                        for MonitorTableSvc<T>
                    {
                        type Response = super::MonitorTableResponse;
                        type ResponseStream = T::MonitorTableStream;
                        type Future =
                            BoxFuture<tonic::Response<Self::ResponseStream>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MonitorTableRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.monitor_table(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = MonitorTableSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/AddVrf" => {
                    struct AddVrfSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::AddVrfRequest> for AddVrfSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AddVrfRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.add_vrf(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = AddVrfSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/DeleteVrf" => {
                    struct DeleteVrfSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::DeleteVrfRequest> for DeleteVrfSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeleteVrfRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.delete_vrf(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = DeleteVrfSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/ListVrf" => {
                    struct ListVrfSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::ServerStreamingService<super::ListVrfRequest> for ListVrfSvc<T> {
                        type Response = super::ListVrfResponse;
                        type ResponseStream = T::ListVrfStream;
                        type Future =
                            BoxFuture<tonic::Response<Self::ResponseStream>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListVrfRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.list_vrf(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = ListVrfSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/AddPolicy" => {
                    struct AddPolicySvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::AddPolicyRequest> for AddPolicySvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AddPolicyRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.add_policy(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = AddPolicySvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/DeletePolicy" => {
                    struct DeletePolicySvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::DeletePolicyRequest> for DeletePolicySvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeletePolicyRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.delete_policy(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = DeletePolicySvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/ListPolicy" => {
                    struct ListPolicySvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi>
                        tonic::server::ServerStreamingService<super::ListPolicyRequest>
                        for ListPolicySvc<T>
                    {
                        type Response = super::ListPolicyResponse;
                        type ResponseStream = T::ListPolicyStream;
                        type Future =
                            BoxFuture<tonic::Response<Self::ResponseStream>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListPolicyRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.list_policy(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = ListPolicySvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/SetPolicies" => {
                    struct SetPoliciesSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::SetPoliciesRequest> for SetPoliciesSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::SetPoliciesRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.set_policies(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = SetPoliciesSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/AddDefinedSet" => {
                    struct AddDefinedSetSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::AddDefinedSetRequest> for AddDefinedSetSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AddDefinedSetRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.add_defined_set(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = AddDefinedSetSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/DeleteDefinedSet" => {
                    struct DeleteDefinedSetSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::DeleteDefinedSetRequest>
                        for DeleteDefinedSetSvc<T>
                    {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeleteDefinedSetRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.delete_defined_set(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = DeleteDefinedSetSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/ListDefinedSet" => {
                    struct ListDefinedSetSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi>
                        tonic::server::ServerStreamingService<super::ListDefinedSetRequest>
                        for ListDefinedSetSvc<T>
                    {
                        type Response = super::ListDefinedSetResponse;
                        type ResponseStream = T::ListDefinedSetStream;
                        type Future =
                            BoxFuture<tonic::Response<Self::ResponseStream>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListDefinedSetRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.list_defined_set(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = ListDefinedSetSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/AddStatement" => {
                    struct AddStatementSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::AddStatementRequest> for AddStatementSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AddStatementRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.add_statement(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = AddStatementSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/DeleteStatement" => {
                    struct DeleteStatementSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::DeleteStatementRequest>
                        for DeleteStatementSvc<T>
                    {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeleteStatementRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.delete_statement(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = DeleteStatementSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/ListStatement" => {
                    struct ListStatementSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi>
                        tonic::server::ServerStreamingService<super::ListStatementRequest>
                        for ListStatementSvc<T>
                    {
                        type Response = super::ListStatementResponse;
                        type ResponseStream = T::ListStatementStream;
                        type Future =
                            BoxFuture<tonic::Response<Self::ResponseStream>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListStatementRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.list_statement(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = ListStatementSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/AddPolicyAssignment" => {
                    struct AddPolicyAssignmentSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::AddPolicyAssignmentRequest>
                        for AddPolicyAssignmentSvc<T>
                    {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AddPolicyAssignmentRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.add_policy_assignment(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = AddPolicyAssignmentSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/DeletePolicyAssignment" => {
                    struct DeletePolicyAssignmentSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi>
                        tonic::server::UnaryService<super::DeletePolicyAssignmentRequest>
                        for DeletePolicyAssignmentSvc<T>
                    {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeletePolicyAssignmentRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.delete_policy_assignment(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = DeletePolicyAssignmentSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/ListPolicyAssignment" => {
                    struct ListPolicyAssignmentSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi>
                        tonic::server::ServerStreamingService<super::ListPolicyAssignmentRequest>
                        for ListPolicyAssignmentSvc<T>
                    {
                        type Response = super::ListPolicyAssignmentResponse;
                        type ResponseStream = T::ListPolicyAssignmentStream;
                        type Future =
                            BoxFuture<tonic::Response<Self::ResponseStream>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListPolicyAssignmentRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.list_policy_assignment(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = ListPolicyAssignmentSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/SetPolicyAssignment" => {
                    struct SetPolicyAssignmentSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::SetPolicyAssignmentRequest>
                        for SetPolicyAssignmentSvc<T>
                    {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::SetPolicyAssignmentRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.set_policy_assignment(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = SetPolicyAssignmentSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/AddRpki" => {
                    struct AddRpkiSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::AddRpkiRequest> for AddRpkiSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AddRpkiRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.add_rpki(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = AddRpkiSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/DeleteRpki" => {
                    struct DeleteRpkiSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::DeleteRpkiRequest> for DeleteRpkiSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeleteRpkiRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.delete_rpki(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = DeleteRpkiSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/ListRpki" => {
                    struct ListRpkiSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::ServerStreamingService<super::ListRpkiRequest> for ListRpkiSvc<T> {
                        type Response = super::ListRpkiResponse;
                        type ResponseStream = T::ListRpkiStream;
                        type Future =
                            BoxFuture<tonic::Response<Self::ResponseStream>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListRpkiRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.list_rpki(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = ListRpkiSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/EnableRpki" => {
                    struct EnableRpkiSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::EnableRpkiRequest> for EnableRpkiSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::EnableRpkiRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.enable_rpki(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = EnableRpkiSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/DisableRpki" => {
                    struct DisableRpkiSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::DisableRpkiRequest> for DisableRpkiSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DisableRpkiRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.disable_rpki(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = DisableRpkiSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/ResetRpki" => {
                    struct ResetRpkiSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::ResetRpkiRequest> for ResetRpkiSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ResetRpkiRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.reset_rpki(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = ResetRpkiSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/ListRpkiTable" => {
                    struct ListRpkiTableSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi>
                        tonic::server::ServerStreamingService<super::ListRpkiTableRequest>
                        for ListRpkiTableSvc<T>
                    {
                        type Response = super::ListRpkiTableResponse;
                        type ResponseStream = T::ListRpkiTableStream;
                        type Future =
                            BoxFuture<tonic::Response<Self::ResponseStream>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListRpkiTableRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.list_rpki_table(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = ListRpkiTableSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/EnableZebra" => {
                    struct EnableZebraSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::EnableZebraRequest> for EnableZebraSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::EnableZebraRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.enable_zebra(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = EnableZebraSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/EnableMrt" => {
                    struct EnableMrtSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::EnableMrtRequest> for EnableMrtSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::EnableMrtRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.enable_mrt(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = EnableMrtSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/DisableMrt" => {
                    struct DisableMrtSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::DisableMrtRequest> for DisableMrtSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DisableMrtRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.disable_mrt(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = DisableMrtSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/AddBmp" => {
                    struct AddBmpSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::AddBmpRequest> for AddBmpSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AddBmpRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.add_bmp(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = AddBmpSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/gobgpapi.GobgpApi/DeleteBmp" => {
                    struct DeleteBmpSvc<T: GobgpApi>(pub Arc<T>);
                    impl<T: GobgpApi> tonic::server::UnaryService<super::DeleteBmpRequest> for DeleteBmpSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeleteBmpRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { inner.delete_bmp(request).await };
                            Box::pin(fut)
                        }
                    }
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = DeleteBmpSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec);
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                _ => Box::pin(async move {
                    Ok(http::Response::builder()
                        .status(200)
                        .header("grpc-status", "12")
                        .body(tonic::body::BoxBody::empty())
                        .unwrap())
                }),
            }
        }
    }
    impl<T: GobgpApi> Clone for GobgpApiServer<T> {
        fn clone(&self) -> Self {
            let inner = self.inner.clone();
            Self { inner }
        }
    }
    impl<T: GobgpApi> tonic::transport::ServiceName for GobgpApiServer<T> {
        const NAME: &'static str = "gobgpapi.GobgpApi";
    }
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct OriginAttribute {
    #[prost(uint32, tag = "1")]
    pub origin: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AsSegment {
    #[prost(uint32, tag = "1")]
    pub r#type: u32,
    #[prost(uint32, repeated, tag = "2")]
    pub numbers: ::std::vec::Vec<u32>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AsPathAttribute {
    #[prost(message, repeated, tag = "1")]
    pub segments: ::std::vec::Vec<AsSegment>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NextHopAttribute {
    #[prost(string, tag = "1")]
    pub next_hop: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MultiExitDiscAttribute {
    #[prost(uint32, tag = "1")]
    pub med: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LocalPrefAttribute {
    #[prost(uint32, tag = "1")]
    pub local_pref: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AtomicAggregateAttribute {}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AggregatorAttribute {
    #[prost(uint32, tag = "2")]
    pub r#as: u32,
    #[prost(string, tag = "3")]
    pub address: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CommunitiesAttribute {
    #[prost(uint32, repeated, tag = "1")]
    pub communities: ::std::vec::Vec<u32>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct OriginatorIdAttribute {
    #[prost(string, tag = "1")]
    pub id: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ClusterListAttribute {
    #[prost(string, repeated, tag = "1")]
    pub ids: ::std::vec::Vec<std::string::String>,
}
/// IPAddressPrefix represents the NLRI for:
/// - AFI=1, SAFI=1
/// - AFI=2, SAFI=1
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct IpAddressPrefix {
    #[prost(uint32, tag = "1")]
    pub prefix_len: u32,
    #[prost(string, tag = "2")]
    pub prefix: std::string::String,
}
/// LabeledIPAddressPrefix represents the NLRI for:
/// - AFI=1, SAFI=4
/// - AFI=2, SAFI=4
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LabeledIpAddressPrefix {
    #[prost(uint32, repeated, tag = "1")]
    pub labels: ::std::vec::Vec<u32>,
    #[prost(uint32, tag = "2")]
    pub prefix_len: u32,
    #[prost(string, tag = "3")]
    pub prefix: std::string::String,
}
/// EncapsulationNLRI represents the NLRI for:
/// - AFI=1, SAFI=7
/// - AFI=2, SAFI=7
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EncapsulationNlri {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouteDistinguisherTwoOctetAs {
    #[prost(uint32, tag = "1")]
    pub admin: u32,
    #[prost(uint32, tag = "2")]
    pub assigned: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouteDistinguisherIpAddress {
    #[prost(string, tag = "1")]
    pub admin: std::string::String,
    #[prost(uint32, tag = "2")]
    pub assigned: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouteDistinguisherFourOctetAs {
    #[prost(uint32, tag = "1")]
    pub admin: u32,
    #[prost(uint32, tag = "2")]
    pub assigned: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EthernetSegmentIdentifier {
    #[prost(uint32, tag = "1")]
    pub r#type: u32,
    #[prost(bytes, tag = "2")]
    pub value: std::vec::Vec<u8>,
}
/// EVPNEthernetAutoDiscoveryRoute represents the NLRI for:
/// - AFI=25, SAFI=70, RouteType=1
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EvpnEthernetAutoDiscoveryRoute {
    /// One of:
    /// - RouteDistinguisherTwoOctetAS
    /// - RouteDistinguisherIPAddressAS
    /// - RouteDistinguisherFourOctetAS
    #[prost(message, optional, tag = "1")]
    pub rd: ::std::option::Option<::prost_types::Any>,
    #[prost(message, optional, tag = "2")]
    pub esi: ::std::option::Option<EthernetSegmentIdentifier>,
    #[prost(uint32, tag = "3")]
    pub ethernet_tag: u32,
    #[prost(uint32, tag = "4")]
    pub label: u32,
}
/// EVPNMACIPAdvertisementRoute represents the NLRI for:
/// - AFI=25, SAFI=70, RouteType=2
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EvpnmacipAdvertisementRoute {
    /// One of:
    /// - RouteDistinguisherTwoOctetAS
    /// - RouteDistinguisherIPAddressAS
    /// - RouteDistinguisherFourOctetAS
    #[prost(message, optional, tag = "1")]
    pub rd: ::std::option::Option<::prost_types::Any>,
    #[prost(message, optional, tag = "2")]
    pub esi: ::std::option::Option<EthernetSegmentIdentifier>,
    #[prost(uint32, tag = "3")]
    pub ethernet_tag: u32,
    #[prost(string, tag = "4")]
    pub mac_address: std::string::String,
    #[prost(string, tag = "5")]
    pub ip_address: std::string::String,
    #[prost(uint32, repeated, tag = "6")]
    pub labels: ::std::vec::Vec<u32>,
}
/// EVPNInclusiveMulticastEthernetTagRoute represents the NLRI for:
/// - AFI=25, SAFI=70, RouteType=3
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EvpnInclusiveMulticastEthernetTagRoute {
    /// One of:
    /// - RouteDistinguisherTwoOctetAS
    /// - RouteDistinguisherIPAddressAS
    /// - RouteDistinguisherFourOctetAS
    #[prost(message, optional, tag = "1")]
    pub rd: ::std::option::Option<::prost_types::Any>,
    #[prost(uint32, tag = "2")]
    pub ethernet_tag: u32,
    #[prost(string, tag = "3")]
    pub ip_address: std::string::String,
}
/// EVPNEthernetSegmentRoute represents the NLRI for:
/// - AFI=25, SAFI=70, RouteType=4
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EvpnEthernetSegmentRoute {
    /// One of:
    /// - RouteDistinguisherTwoOctetAS
    /// - RouteDistinguisherIPAddressAS
    /// - RouteDistinguisherFourOctetAS
    #[prost(message, optional, tag = "1")]
    pub rd: ::std::option::Option<::prost_types::Any>,
    #[prost(message, optional, tag = "2")]
    pub esi: ::std::option::Option<EthernetSegmentIdentifier>,
    #[prost(string, tag = "3")]
    pub ip_address: std::string::String,
}
/// EVPNIPPrefixRoute represents the NLRI for:
/// - AFI=25, SAFI=70, RouteType=5
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EvpnipPrefixRoute {
    /// One of:
    /// - RouteDistinguisherTwoOctetAS
    /// - RouteDistinguisherIPAddressAS
    /// - RouteDistinguisherFourOctetAS
    #[prost(message, optional, tag = "1")]
    pub rd: ::std::option::Option<::prost_types::Any>,
    #[prost(message, optional, tag = "2")]
    pub esi: ::std::option::Option<EthernetSegmentIdentifier>,
    #[prost(uint32, tag = "3")]
    pub ethernet_tag: u32,
    #[prost(string, tag = "4")]
    pub ip_prefix: std::string::String,
    #[prost(uint32, tag = "5")]
    pub ip_prefix_len: u32,
    #[prost(string, tag = "6")]
    pub gw_address: std::string::String,
    #[prost(uint32, tag = "7")]
    pub label: u32,
}
/// EVPNIPMSIRoute represents the NLRI for:
/// - AFI=25, SAFI=70, RouteType=9
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EvpnipmsiRoute {
    /// One of:
    /// - RouteDistinguisherTwoOctetAS
    /// - RouteDistinguisherIPAddressAS
    /// - RouteDistinguisherFourOctetAS
    #[prost(message, optional, tag = "1")]
    pub rd: ::std::option::Option<::prost_types::Any>,
    #[prost(uint32, tag = "2")]
    pub ethernet_tag: u32,
    #[prost(message, optional, tag = "3")]
    pub rt: ::std::option::Option<::prost_types::Any>,
}
/// LabeledVPNIPAddressPrefix represents the NLRI for:
/// - AFI=1, SAFI=128
/// - AFI=2, SAFI=128
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LabeledVpnipAddressPrefix {
    #[prost(uint32, repeated, tag = "1")]
    pub labels: ::std::vec::Vec<u32>,
    /// One of:
    /// - TwoOctetAsSpecificExtended
    /// - IPv4AddressSpecificExtended
    /// - FourOctetAsSpecificExtended
    #[prost(message, optional, tag = "2")]
    pub rd: ::std::option::Option<::prost_types::Any>,
    #[prost(uint32, tag = "3")]
    pub prefix_len: u32,
    #[prost(string, tag = "4")]
    pub prefix: std::string::String,
}
/// RouteTargetMembershipNLRI represents the NLRI for:
/// - AFI=1, SAFI=132
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouteTargetMembershipNlri {
    #[prost(uint32, tag = "1")]
    pub r#as: u32,
    /// One of:
    /// - TwoOctetAsSpecificExtended
    /// - IPv4AddressSpecificExtended
    /// - FourOctetAsSpecificExtended
    #[prost(message, optional, tag = "2")]
    pub rt: ::std::option::Option<::prost_types::Any>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FlowSpecIpPrefix {
    #[prost(uint32, tag = "1")]
    pub r#type: u32,
    #[prost(uint32, tag = "2")]
    pub prefix_len: u32,
    #[prost(string, tag = "3")]
    pub prefix: std::string::String,
    /// IPv6 only
    #[prost(uint32, tag = "4")]
    pub offset: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FlowSpecMac {
    #[prost(uint32, tag = "1")]
    pub r#type: u32,
    #[prost(string, tag = "2")]
    pub address: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FlowSpecComponentItem {
    /// Operator for Numeric type, Operand for Bitmask type
    #[prost(uint32, tag = "1")]
    pub op: u32,
    #[prost(uint64, tag = "2")]
    pub value: u64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FlowSpecComponent {
    #[prost(uint32, tag = "1")]
    pub r#type: u32,
    #[prost(message, repeated, tag = "2")]
    pub items: ::std::vec::Vec<FlowSpecComponentItem>,
}
/// FlowSpecNLRI represents the NLRI for:
/// - AFI=1, SAFI=133
/// - AFI=2, SAFI=133
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FlowSpecNlri {
    /// One of:
    /// - FlowSpecIPPrefix
    /// - FlowSpecMAC
    /// - FlowSpecComponent
    #[prost(message, repeated, tag = "1")]
    pub rules: ::std::vec::Vec<::prost_types::Any>,
}
/// VPNFlowSpecNLRI represents the NLRI for:
/// - AFI=1, SAFI=134
/// - AFI=2, SAFI=134
/// - AFI=25, SAFI=134
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct VpnFlowSpecNlri {
    /// One of:
    /// - RouteDistinguisherTwoOctetAS
    /// - RouteDistinguisherIPAddressAS
    /// - RouteDistinguisherFourOctetAS
    #[prost(message, optional, tag = "1")]
    pub rd: ::std::option::Option<::prost_types::Any>,
    /// One of:
    /// - FlowSpecIPPrefix
    /// - FlowSpecMAC
    /// - FlowSpecComponent
    #[prost(message, repeated, tag = "2")]
    pub rules: ::std::vec::Vec<::prost_types::Any>,
}
/// OpaqueNLRI represents the NLRI for:
/// - AFI=16397, SAFI=241
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct OpaqueNlri {
    #[prost(bytes, tag = "1")]
    pub key: std::vec::Vec<u8>,
    #[prost(bytes, tag = "2")]
    pub value: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsNodeDescriptor {
    #[prost(uint32, tag = "1")]
    pub asn: u32,
    #[prost(uint32, tag = "2")]
    pub bgp_ls_id: u32,
    #[prost(uint32, tag = "3")]
    pub ospf_area_id: u32,
    #[prost(bool, tag = "4")]
    pub pseudonode: bool,
    #[prost(string, tag = "5")]
    pub igp_router_id: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsLinkDescriptor {
    #[prost(uint32, tag = "1")]
    pub link_local_id: u32,
    #[prost(uint32, tag = "2")]
    pub link_remote_id: u32,
    #[prost(string, tag = "3")]
    pub interface_addr_ipv4: std::string::String,
    #[prost(string, tag = "4")]
    pub neighbor_addr_ipv4: std::string::String,
    #[prost(string, tag = "5")]
    pub interface_addr_ipv6: std::string::String,
    #[prost(string, tag = "6")]
    pub neighbor_addr_ipv6: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsPrefixDescriptor {
    #[prost(string, repeated, tag = "1")]
    pub ip_reachability: ::std::vec::Vec<std::string::String>,
    #[prost(string, tag = "2")]
    pub ospf_route_type: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsNodeNlri {
    #[prost(message, optional, tag = "1")]
    pub local_node: ::std::option::Option<LsNodeDescriptor>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsLinkNlri {
    #[prost(message, optional, tag = "1")]
    pub local_node: ::std::option::Option<LsNodeDescriptor>,
    #[prost(message, optional, tag = "2")]
    pub remote_node: ::std::option::Option<LsNodeDescriptor>,
    #[prost(message, optional, tag = "3")]
    pub link_descriptor: ::std::option::Option<LsLinkDescriptor>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsPrefixV4nlri {
    #[prost(message, optional, tag = "1")]
    pub local_node: ::std::option::Option<LsNodeDescriptor>,
    #[prost(message, optional, tag = "2")]
    pub prefix_descriptor: ::std::option::Option<LsPrefixDescriptor>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsPrefixV6nlri {
    #[prost(message, optional, tag = "1")]
    pub local_node: ::std::option::Option<LsNodeDescriptor>,
    #[prost(message, optional, tag = "2")]
    pub prefix_descriptor: ::std::option::Option<LsPrefixDescriptor>,
}
/// LsAddrPrefix represents the NLRI for:
/// - AFI=16388, SAFI=71
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsAddrPrefix {
    #[prost(enumeration = "LsNlriType", tag = "1")]
    pub r#type: i32,
    /// One of:
    /// - LsNodeNLRI
    /// - LsLinkNLRI
    /// - LsPrefixV4NLRI
    /// - LsPrefixV6NLRI
    #[prost(message, optional, tag = "2")]
    pub nlri: ::std::option::Option<::prost_types::Any>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MpReachNlriAttribute {
    #[prost(message, optional, tag = "1")]
    pub family: ::std::option::Option<Family>,
    #[prost(string, repeated, tag = "2")]
    pub next_hops: ::std::vec::Vec<std::string::String>,
    /// Each NLRI must be one of:
    /// - IPAddressPrefix
    /// - LabeledIPAddressPrefix
    /// - EncapsulationNLRI
    /// - EVPNEthernetAutoDiscoveryRoute
    /// - EVPNMACIPAdvertisementRoute
    /// - EVPNInclusiveMulticastEthernetTagRoute
    /// - EVPNEthernetSegmentRoute
    /// - EVPNIPPrefixRoute
    /// - EVPNIPMSIRoute
    /// - LabeledVPNIPAddressPrefix
    /// - RouteTargetMembershipNLRI
    /// - FlowSpecNLRI
    /// - VPNFlowSpecNLRI
    /// - OpaqueNLRI
    /// - LsAddrPrefix
    #[prost(message, repeated, tag = "3")]
    pub nlris: ::std::vec::Vec<::prost_types::Any>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MpUnreachNlriAttribute {
    #[prost(message, optional, tag = "1")]
    pub family: ::std::option::Option<Family>,
    /// The same as NLRI field of MpReachNLRIAttribute
    #[prost(message, repeated, tag = "3")]
    pub nlris: ::std::vec::Vec<::prost_types::Any>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TwoOctetAsSpecificExtended {
    #[prost(bool, tag = "1")]
    pub is_transitive: bool,
    #[prost(uint32, tag = "2")]
    pub sub_type: u32,
    #[prost(uint32, tag = "3")]
    pub r#as: u32,
    #[prost(uint32, tag = "4")]
    pub local_admin: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct IPv4AddressSpecificExtended {
    #[prost(bool, tag = "1")]
    pub is_transitive: bool,
    #[prost(uint32, tag = "2")]
    pub sub_type: u32,
    #[prost(string, tag = "3")]
    pub address: std::string::String,
    #[prost(uint32, tag = "4")]
    pub local_admin: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FourOctetAsSpecificExtended {
    #[prost(bool, tag = "1")]
    pub is_transitive: bool,
    #[prost(uint32, tag = "2")]
    pub sub_type: u32,
    #[prost(uint32, tag = "3")]
    pub r#as: u32,
    #[prost(uint32, tag = "4")]
    pub local_admin: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidationExtended {
    #[prost(uint32, tag = "1")]
    pub state: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ColorExtended {
    #[prost(uint32, tag = "1")]
    pub color: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EncapExtended {
    #[prost(uint32, tag = "1")]
    pub tunnel_type: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DefaultGatewayExtended {}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct OpaqueExtended {
    #[prost(bool, tag = "1")]
    pub is_transitive: bool,
    #[prost(bytes, tag = "3")]
    pub value: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EsiLabelExtended {
    #[prost(bool, tag = "1")]
    pub is_single_active: bool,
    #[prost(uint32, tag = "2")]
    pub label: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EsImportRouteTarget {
    #[prost(string, tag = "1")]
    pub es_import: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MacMobilityExtended {
    #[prost(bool, tag = "1")]
    pub is_sticky: bool,
    #[prost(uint32, tag = "2")]
    pub sequence_num: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouterMacExtended {
    #[prost(string, tag = "1")]
    pub mac: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TrafficRateExtended {
    #[prost(uint32, tag = "1")]
    pub r#as: u32,
    #[prost(float, tag = "2")]
    pub rate: f32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TrafficActionExtended {
    #[prost(bool, tag = "1")]
    pub terminal: bool,
    #[prost(bool, tag = "2")]
    pub sample: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RedirectTwoOctetAsSpecificExtended {
    #[prost(uint32, tag = "1")]
    pub r#as: u32,
    #[prost(uint32, tag = "2")]
    pub local_admin: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RedirectIPv4AddressSpecificExtended {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(uint32, tag = "2")]
    pub local_admin: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RedirectFourOctetAsSpecificExtended {
    #[prost(uint32, tag = "1")]
    pub r#as: u32,
    #[prost(uint32, tag = "2")]
    pub local_admin: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TrafficRemarkExtended {
    #[prost(uint32, tag = "1")]
    pub dscp: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UnknownExtended {
    #[prost(uint32, tag = "1")]
    pub r#type: u32,
    #[prost(bytes, tag = "2")]
    pub value: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ExtendedCommunitiesAttribute {
    /// Each Community must be one of:
    /// - TwoOctetAsSpecificExtended
    /// - IPv4AddressSpecificExtended
    /// - FourOctetAsSpecificExtended
    /// - OpaqueExtended
    /// - ESILabelExtended
    /// - MacMobilityExtended
    /// - RouterMacExtended
    /// - TrafficRateExtended
    /// - TrafficActionExtended
    /// - RedirectTwoOctetAsSpecificExtended
    /// - RedirectIPv4AddressSpecificExtended
    /// - RedirectFourOctetAsSpecificExtended
    /// - TrafficRemarkExtended
    /// - UnknownExtended
    #[prost(message, repeated, tag = "1")]
    pub communities: ::std::vec::Vec<::prost_types::Any>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct As4PathAttribute {
    #[prost(message, repeated, tag = "1")]
    pub segments: ::std::vec::Vec<AsSegment>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct As4AggregatorAttribute {
    #[prost(uint32, tag = "2")]
    pub r#as: u32,
    #[prost(string, tag = "3")]
    pub address: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PmsiTunnelAttribute {
    #[prost(uint32, tag = "1")]
    pub flags: u32,
    #[prost(uint32, tag = "2")]
    pub r#type: u32,
    #[prost(uint32, tag = "3")]
    pub label: u32,
    #[prost(bytes, tag = "4")]
    pub id: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TunnelEncapSubTlvEncapsulation {
    #[prost(uint32, tag = "1")]
    pub key: u32,
    #[prost(bytes, tag = "2")]
    pub cookie: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TunnelEncapSubTlvProtocol {
    #[prost(uint32, tag = "1")]
    pub protocol: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TunnelEncapSubTlvColor {
    #[prost(uint32, tag = "1")]
    pub color: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TunnelEncapSubTlvUnknown {
    #[prost(uint32, tag = "1")]
    pub r#type: u32,
    #[prost(bytes, tag = "2")]
    pub value: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TunnelEncapTlv {
    #[prost(uint32, tag = "1")]
    pub r#type: u32,
    /// Each TLV must be one of:
    /// - TunnelEncapSubTLVEncapsulation
    /// - TunnelEncapSubTLVProtocol
    /// - TunnelEncapSubTLVColor
    /// - TunnelEncapSubTLVUnknown
    #[prost(message, repeated, tag = "2")]
    pub tlvs: ::std::vec::Vec<::prost_types::Any>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TunnelEncapAttribute {
    #[prost(message, repeated, tag = "1")]
    pub tlvs: ::std::vec::Vec<TunnelEncapTlv>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct IPv6AddressSpecificExtended {
    #[prost(bool, tag = "1")]
    pub is_transitive: bool,
    #[prost(uint32, tag = "2")]
    pub sub_type: u32,
    #[prost(string, tag = "3")]
    pub address: std::string::String,
    #[prost(uint32, tag = "4")]
    pub local_admin: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RedirectIPv6AddressSpecificExtended {
    #[prost(string, tag = "1")]
    pub address: std::string::String,
    #[prost(uint32, tag = "2")]
    pub local_admin: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Ip6ExtendedCommunitiesAttribute {
    /// Each Community must be one of:
    /// - IPv6AddressSpecificExtended
    /// - RedirectIPv6AddressSpecificExtended
    #[prost(message, repeated, tag = "1")]
    pub communities: ::std::vec::Vec<::prost_types::Any>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AigpTlvigpMetric {
    #[prost(uint64, tag = "1")]
    pub metric: u64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AigpTlvUnknown {
    #[prost(uint32, tag = "1")]
    pub r#type: u32,
    #[prost(bytes, tag = "2")]
    pub value: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AigpAttribute {
    /// Each TLV must be one of:
    /// - AigpTLVIGPMetric
    /// - AigpTLVUnknown
    #[prost(message, repeated, tag = "1")]
    pub tlvs: ::std::vec::Vec<::prost_types::Any>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LargeCommunity {
    #[prost(uint32, tag = "1")]
    pub global_admin: u32,
    #[prost(uint32, tag = "2")]
    pub local_data1: u32,
    #[prost(uint32, tag = "3")]
    pub local_data2: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LargeCommunitiesAttribute {
    #[prost(message, repeated, tag = "1")]
    pub communities: ::std::vec::Vec<LargeCommunity>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsNodeFlags {
    #[prost(bool, tag = "1")]
    pub overload: bool,
    #[prost(bool, tag = "2")]
    pub attached: bool,
    #[prost(bool, tag = "3")]
    pub external: bool,
    #[prost(bool, tag = "4")]
    pub abr: bool,
    #[prost(bool, tag = "5")]
    pub router: bool,
    #[prost(bool, tag = "6")]
    pub v6: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsIgpFlags {
    #[prost(bool, tag = "1")]
    pub down: bool,
    #[prost(bool, tag = "2")]
    pub no_unicast: bool,
    #[prost(bool, tag = "3")]
    pub local_address: bool,
    #[prost(bool, tag = "4")]
    pub propagate_nssa: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsSrRange {
    #[prost(uint32, tag = "1")]
    pub begin: u32,
    #[prost(uint32, tag = "2")]
    pub end: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsSrCapabilities {
    #[prost(bool, tag = "1")]
    pub ipv4_supported: bool,
    #[prost(bool, tag = "2")]
    pub ipv6_supported: bool,
    #[prost(message, repeated, tag = "3")]
    pub ranges: ::std::vec::Vec<LsSrRange>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsSrLocalBlock {
    #[prost(message, repeated, tag = "1")]
    pub ranges: ::std::vec::Vec<LsSrRange>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsAttributeNode {
    #[prost(string, tag = "1")]
    pub name: std::string::String,
    #[prost(message, optional, tag = "2")]
    pub flags: ::std::option::Option<LsNodeFlags>,
    #[prost(string, tag = "3")]
    pub local_router_id: std::string::String,
    #[prost(string, tag = "4")]
    pub local_router_id_v6: std::string::String,
    #[prost(bytes, tag = "5")]
    pub isis_area: std::vec::Vec<u8>,
    #[prost(bytes, tag = "6")]
    pub opaque: std::vec::Vec<u8>,
    #[prost(message, optional, tag = "7")]
    pub sr_capabilities: ::std::option::Option<LsSrCapabilities>,
    #[prost(bytes, tag = "8")]
    pub sr_algorithms: std::vec::Vec<u8>,
    #[prost(message, optional, tag = "9")]
    pub sr_local_block: ::std::option::Option<LsSrLocalBlock>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsAttributeLink {
    #[prost(string, tag = "1")]
    pub name: std::string::String,
    #[prost(string, tag = "2")]
    pub local_router_id: std::string::String,
    #[prost(string, tag = "3")]
    pub local_router_id_v6: std::string::String,
    #[prost(string, tag = "4")]
    pub remote_router_id: std::string::String,
    #[prost(string, tag = "5")]
    pub remote_router_id_v6: std::string::String,
    #[prost(uint32, tag = "6")]
    pub admin_group: u32,
    #[prost(uint32, tag = "7")]
    pub default_te_metric: u32,
    #[prost(uint32, tag = "8")]
    pub igp_metric: u32,
    #[prost(bytes, tag = "9")]
    pub opaque: std::vec::Vec<u8>,
    #[prost(float, tag = "10")]
    pub bandwidth: f32,
    #[prost(float, tag = "11")]
    pub reservable_bandwidth: f32,
    #[prost(float, repeated, tag = "12")]
    pub unreserved_bandwidth: ::std::vec::Vec<f32>,
    #[prost(uint32, tag = "13")]
    pub sr_adjacency_sid: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsAttributePrefix {
    #[prost(message, optional, tag = "1")]
    pub igp_flags: ::std::option::Option<LsIgpFlags>,
    #[prost(bytes, tag = "2")]
    pub opaque: std::vec::Vec<u8>,
    #[prost(uint32, tag = "3")]
    pub sr_prefix_sid: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LsAttribute {
    #[prost(message, optional, tag = "1")]
    pub node: ::std::option::Option<LsAttributeNode>,
    #[prost(message, optional, tag = "2")]
    pub link: ::std::option::Option<LsAttributeLink>,
    #[prost(message, optional, tag = "3")]
    pub prefix: ::std::option::Option<LsAttributePrefix>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UnknownAttribute {
    #[prost(uint32, tag = "1")]
    pub flags: u32,
    #[prost(uint32, tag = "2")]
    pub r#type: u32,
    #[prost(bytes, tag = "3")]
    pub value: std::vec::Vec<u8>,
}
/// Based om RFC 7752, Table 1.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum LsNlriType {
    LsNlriUnknown = 0,
    LsNlriNode = 1,
    LsNlriLink = 2,
    LsNlriPrefixV4 = 3,
    LsNlriPrefixV6 = 4,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MultiProtocolCapability {
    #[prost(message, optional, tag = "1")]
    pub family: ::std::option::Option<Family>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouteRefreshCapability {}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CarryingLabelInfoCapability {}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ExtendedNexthopCapabilityTuple {
    #[prost(message, optional, tag = "1")]
    pub nlri_family: ::std::option::Option<Family>,
    /// Nexthop AFI must be either
    /// gobgp.IPv4 or
    /// gobgp.IPv6.
    #[prost(message, optional, tag = "2")]
    pub nexthop_family: ::std::option::Option<Family>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ExtendedNexthopCapability {
    #[prost(message, repeated, tag = "1")]
    pub tuples: ::std::vec::Vec<ExtendedNexthopCapabilityTuple>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GracefulRestartCapabilityTuple {
    #[prost(message, optional, tag = "1")]
    pub family: ::std::option::Option<Family>,
    #[prost(uint32, tag = "2")]
    pub flags: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GracefulRestartCapability {
    #[prost(uint32, tag = "1")]
    pub flags: u32,
    #[prost(uint32, tag = "2")]
    pub time: u32,
    #[prost(message, repeated, tag = "3")]
    pub tuples: ::std::vec::Vec<GracefulRestartCapabilityTuple>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FourOctetAsNumberCapability {
    #[prost(uint32, tag = "1")]
    pub r#as: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddPathCapabilityTuple {
    #[prost(message, optional, tag = "1")]
    pub family: ::std::option::Option<Family>,
    #[prost(enumeration = "AddPathMode", tag = "2")]
    pub mode: i32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddPathCapability {
    #[prost(message, repeated, tag = "1")]
    pub tuples: ::std::vec::Vec<AddPathCapabilityTuple>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EnhancedRouteRefreshCapability {}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LongLivedGracefulRestartCapabilityTuple {
    #[prost(message, optional, tag = "1")]
    pub family: ::std::option::Option<Family>,
    #[prost(uint32, tag = "2")]
    pub flags: u32,
    #[prost(uint32, tag = "3")]
    pub time: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LongLivedGracefulRestartCapability {
    #[prost(message, repeated, tag = "1")]
    pub tuples: ::std::vec::Vec<LongLivedGracefulRestartCapabilityTuple>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RouteRefreshCiscoCapability {}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UnknownCapability {
    #[prost(uint32, tag = "1")]
    pub code: u32,
    #[prost(bytes, tag = "2")]
    pub value: std::vec::Vec<u8>,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum AddPathMode {
    ModeNone = 0,
    ModeReceive = 1,
    ModeSend = 2,
    ModeBoth = 3,
}
