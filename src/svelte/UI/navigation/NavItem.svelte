<script lang=ts>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { location, link } from 'svelte-spa-router';
  import { camelCase } from 'lodash/string';
  import { Icon } from '@UI';
  import SubNavItemList from './SubNavItemList.svelte';
  import SubNavId from './SubNavId.svelte';
  import { kubeCase, menuExpanded } from '@lib';

  export let route: string;
  export let subRoutes: string[];
  export let lastItem: boolean;

  let activeRoute: string | null;
  let topMargin = tweened(0, {duration: 200, easing: cubicOut});

  $: activeSub = subRoutes.find(sr => $location.includes(sr));
  $: isActive = (route: string) => {
    const [ _, main, sub ] = $location.split('/');
    return route === `/${main}` || route === `/${main}/${sub || ''}`;
  };
</script>

<li
  class='relative my-2 mx-0 w-full rounded-[1.25rem] transition-shadow transition-colors'
  class:active-nav-item={isActive(route)}
  on:mouseenter={() => activeRoute = route}
  on:mouseleave={() => activeRoute = null}
>
  <a
    class='no-drag z-10 h-full w-full p-5 flex items-center justify-between rounded-[1.25rem] text-black font-bold transition-colors hover:bg-white'
    href={route}
    use:link
  >
    <div class='flex items-center flex-initial'>
      <Icon id={camelCase(route)} classes={isActive(route) ? 'active-nav-icon' : ''}/>
      {#if $menuExpanded}
        <span class=ml-6>{kubeCase(route)}</span>
      {/if}
    </div>
    {#if !!subRoutes.length && !!activeSub}
      <SubNavId {activeSub}/>
    {/if}
  </a>
  {#if !lastItem && isActive(route) && activeRoute === route}
    <SubNavItemList {route} {subRoutes} {topMargin}/>
  {/if}
</li>