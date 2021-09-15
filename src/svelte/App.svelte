<script lang=ts>
	import Router, { location } from 'svelte-spa-router';
	import { startCase } from 'lodash/string';
	import { Cluster, Configuration, CustomResourceDefinition, Network, Security, Storage, Workload } from './pages';
	import { Menu, Nav, Header, Icon } from './UI';
	import { windowStore } from './lib';

	const routes = {
		'/cluster': Cluster,
		'/workload': Workload,
		'/configuration': Configuration,
		'/network': Network,
		'/security': Security,
		'/storage': Storage,
		'/custom-resource-definition': CustomResourceDefinition
	};

	const iconSize = {height: 18, width: 18};

	globalThis.api.send({channel: 'window', req: 'maxed'});
	globalThis.api.receive('window', (maxed: boolean) => windowStore.set(maxed));
</script>

<div class=app>
	<Menu>
		<Nav routes={Object.keys(routes)}/>
	</Menu>
	<div class=app-panel>
		<Header label={startCase($location)} />
		<div class=app-panel-page>
			<Router {routes}/>
		</div>
	</div>
	<div class=app-window-actions>
		<button on:click={globalThis.windowAPI.minimize}>
			<Icon id=min {...iconSize}/>
		</button>
		<button on:click={globalThis.windowAPI.toggle}>
			<Icon id={$windowStore ? 'window' : 'max'} {...iconSize}/>
		</button>
		<button on:click={globalThis.windowAPI.close}>
			<Icon id=close {...iconSize}/>
		</button>
	</div>
</div>

<style lang=scss>
	.app {
		display: flex;
		height: 100%;
		width: 100%;
		border: 1px;
		border-left: 0;
		border-radius: 2rem;
		background: white;

		&-panel {
			width: 100%;
			height: 100%;

			&-page {
				padding: 1rem;
			}
		}
		&-window-actions {
			position: absolute;
			top: 0;
			right: 0;
			display: flex;
			-webkit-app-region: no-drag;

			button {
				display: flex;
				align-items: center;
				justify-content: center;
				background: white;
				border: 0;
				padding: 0.25rem 0.5rem;
				box-shadow: none;
				outline: none;
				cursor: pointer;
				transition: all 0.2s linear;

				&:hover {
					background: lightgray;
				}

				&:last-of-type:hover {
					background: red;
				}

				&:first-of-type {
					border-radius: 0 0 0 5px;
				}
			}
		}
	}
</style>