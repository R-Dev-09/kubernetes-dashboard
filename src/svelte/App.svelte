<script lang=ts>
	import { onMount } from 'svelte';
	import Router, { location, replace } from 'svelte-spa-router';
	import { Menu, Nav, Header, Frame } from './UI';
	import { routes, windowStore } from './lib';

	onMount(() => {
		globalThis.api.send({channel: 'window', req: 'maxed'});
		globalThis.api.receive('window', windowStore.set);
	});

	replace('/cluster');
</script>

<Menu>
	<Nav routes={Object.keys(routes)}/>
</Menu>
<Frame>
	<Header label={$location} slot=header/>
	<div class='h-full shadow-2xl bg-main-gray' slot=main>
		<div class='bg-white rounded-tl-xl h-full w-full z-10'>
			<Router {routes}/>
		</div>
	</div>
</Frame>

<style global lang=postcss>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer utilities {
		.drag {
			-webkit-app-region: drag;
		}

		.no-drag {
			-webkit-app-region: no-drag;
		}
	}
</style>