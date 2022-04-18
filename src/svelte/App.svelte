<script lang=ts>
	import { onMount } from 'svelte';
	import Router, { location, replace } from 'svelte-spa-router';
	import { Menu, Header, Frame, Icon } from '@UI';
	import { Nav } from '@UI/navigation';
	import { routes, windowMaximized, menuExpanded } from '@lib';

	onMount(() => {
		globalThis.api.send({channel: 'window', req: 'maxed'});
		globalThis.api.receive('window', windowMaximized.set);
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
		<div class='absolute bottom-0 -left-28 rounded-l-[1.25rem] bg-white p-4 flex items-center space-x-4 cursor-pointer' on:click={() => menuExpanded.set(!$menuExpanded)}>
			<Icon id={$menuExpanded ? 'collapse' : 'expand'} width=20 height=20/>
			{#if $menuExpanded}
				<span class=text-sm>collapse</span>
			{/if}
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