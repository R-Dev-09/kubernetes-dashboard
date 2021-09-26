<script lang=ts>
	import { onMount } from 'svelte';
	import Router, { location, replace } from 'svelte-spa-router';
	import { Menu, Header, Frame, Icon } from '@UI';
	import { Nav } from '@UI/navigation';
	import { routes, windowStore } from '@lib';

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
	<div class='relative h-full shadow-2xl bg-main-gray' slot=main>
		<div class='bg-white rounded-tl-xl h-full w-full z-10'>
			<Router {routes}/>
		</div>
		<div class='absolute bottom-0 -left-16 rounded-[1.25rem] shadow-2xl bg-white p-4 flex align-center'>
			<Icon id=collapse width=18 height=18 classes='rotate-180'/>
			<span class=text-sm>collapse</span>
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

	@layer components {
		.active-nav-item {
			@apply z-20 bg-white shadow-xl;
		}

		.active-nav-item .active-nav-icon {
			@apply fill-current text-k8s-blue;
		}
	}
</style>