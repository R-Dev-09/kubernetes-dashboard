<script lang=ts>
  import { slide } from 'svelte/transition';
  import { location } from 'svelte-spa-router';
  import SubNavItem from './SubNavItem.svelte';
  import type { Tweened } from 'svelte/motion';

  export let route: string;
  export let subRoutes: string[];
  export let topMargin: Tweened<number>;
</script>

<ul class='w-full bg-white rounded-b-[1.25rem] px-7 pb-4 shadow-xl absolute top-3/4 left-0 overflow-hidden' transition:slide={{duration: 150}}>
  {#if subRoutes.some(sr => $location.includes(sr))}
    <div class='absolute w-px-2 h-8 left-7 bg-k8s-blue z-10' style='top: {$topMargin}rem' transition:slide={{duration: 150}}/>
  {/if}
  {#each subRoutes as subRoute, i}
    <div class='absolute w-px-2 h-8 left-7 bg-warm-gray-300 rounded-[1.25rem] overflow-hidden'/>
    <SubNavItem {route} {subRoute} on:click={() => topMargin.set(i * 2)}/>
  {/each}
</ul>