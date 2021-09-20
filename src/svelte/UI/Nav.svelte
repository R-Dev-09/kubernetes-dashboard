<script lang=ts>
  import { slide } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { location } from 'svelte-spa-router';
  import NavItem from './NavItem.svelte';
  import SubNavItem from './SubNavItem.svelte';

  export let routes: string[];

  let activeRoute: string | null;
  let topMargin = tweened(0, {
		duration: 200,
		easing: cubicOut
	});
  
  const mainRoutes = routes.filter(r => !r.slice(1).includes('/'));

  const subRoutes = (mainRoute: string) => routes.filter(r => {
    const [ _, main, sub ] = r.split('/');
    return main === mainRoute.slice(1) && !!sub;
  }).map(sr => sr.split('/')[2]);

  $: isActive = (route: string) => {
    const [ _, main, sub ] = $location.split('/');
    return route === `/${main}${!!sub ? `/${sub}` : ''}` || route === `/${main}`;
  };
</script>

<ul class='flex flex-col items-center justify-evenly mx-0 my-6 p-2 w-full'>
  {#each mainRoutes as route, i}
    <li class='relative my-2 mx-0 w-full rounded-2lg transition-shadow transition-colors' class:active={isActive(route)} on:mouseenter={() => activeRoute = route} on:mouseleave={() => activeRoute = null}>
      <NavItem {route} hasChildren={i !== mainRoutes.length - 1} activeSub={subRoutes(route).find(sr => $location.includes(sr))}/>
      {#if i !== mainRoutes.length - 1 && isActive(route) && activeRoute === route}
        <ul class='w-full bg-white rounded-b-2lg px-7 pb-4 shadow-xl absolute top-3/4 left-0 overflow-hidden' transition:slide>
          {#if subRoutes(route).some(sr => $location.includes(sr))}
            <div class='absolute w-px-2 h-8 left-7 bg-k8s-blue z-10' style='top: {$topMargin}rem' transition:slide/>
          {/if}
          {#each subRoutes(route) as subRoute, i}
          <div class='absolute w-px-2 h-8 left-7 bg-warm-gray-300 rounded-2lg'/>
            <SubNavItem {route} {subRoute} on:click={() => topMargin.set(i * 2)}/>
          {/each}
        </ul>
      {/if}
    </li>
  {/each}
</ul>

<style lang=scss>
  li {
    &.active {
      @apply z-20 bg-white shadow-xl;

      :global(.icon) {
        @apply fill-current text-k8s-blue;
      }
    }

    &:hover :global(.icon.carrot),
    &:active :global(.icon.carrot) {
      @apply fill-current text-warm-gray-400;
    }
  }
</style>