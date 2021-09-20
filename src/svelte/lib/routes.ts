import { Cluster, Configuration, CustomResourceDefinition, Network, Security, Storage, Workload } from '../pages';
import { Namespaces, Nodes } from '../pages/cluster';
import { CronJobs, DaemonSets, Deployments, Jobs, Pods, ReplicaSets, ReplicationControllers, StatefulSets } from '../pages/workload';
import { ConfigMaps, Secrets } from '../pages/configuration';
import { Endpoints, Ingress, NetworkPolicies, ServiceAccounts, Services } from '../pages/network';
import { ClusterRoleBindings, ClusterRoles, RoleBindings, Roles } from '../pages/security';
import { PersistentVolumeClaims, PersistentVolumes, StorageClasses } from '../pages/storage';
import type { RouteDefinition } from 'svelte-spa-router';

export default {
  '/cluster': Cluster,
  '/cluster/namespaces': Namespaces,
  '/cluster/nodes': Nodes,
  '/workload': Workload,
  '/workload/cron-jobs': CronJobs,
  '/workload/daemon-sets': DaemonSets,
  '/workload/deployments': Deployments,
  '/workload/jobs': Jobs,
  '/workload/pods': Pods,
  '/workload/replica-sets': ReplicaSets,
  '/workload/replication-controllers': ReplicationControllers,
  '/workload/stateful-sets': StatefulSets,
  '/configuration': Configuration,
  '/configuration/config-maps': ConfigMaps,
  '/configuration/secrets': Secrets,
  '/network': Network,
  '/network/endpoints': Endpoints,
  '/network/ingress': Ingress,
  '/network/network-policies': NetworkPolicies,
  '/network/service-accounts': ServiceAccounts,
  '/network/services': Services,
  '/security': Security,
  '/security/cluster-role-bindings': ClusterRoleBindings,
  '/security/cluster-roles': ClusterRoles,
  '/security/role-bindings': RoleBindings,
  '/security/roles': Roles,
  '/storage': Storage,
  '/storage/persistent-volume-claims': PersistentVolumeClaims,
  '/storage/persistent-volumes': PersistentVolumes,
  '/storage/storage-classes': StorageClasses,
  '/custom-resource-definition': CustomResourceDefinition
} as RouteDefinition;