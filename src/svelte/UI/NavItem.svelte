<script lang=ts>
  import { fly, fade } from 'svelte/transition';
  import { link } from 'svelte-spa-router';
  import { camelCase } from 'lodash/string';
  import Icon from './Icon.svelte';
  import { kubeCase } from '../lib';
  import { K8S_ABBR } from '../lib/constants';

  export let route: string;
  export let activeSub: string;
  export let hasChildren = false;

  $: abbrSub = K8S_ABBR[activeSub] || '...';
</script>

<a class='no-drag z-10 h-full w-full p-5 flex items-center justify-between rounded-2lg text-black font-bold transition-colors hover:bg-white' href={route} use:link>
  <div class='flex items-center'>
    <Icon id={camelCase(route)}/>
    <span class=ml-6>{kubeCase(route)}</span>
  </div>
  {#if hasChildren && !!activeSub}
    <div transition:fade={{duration: 200}}>
      <span class='text-sm text-warm-gray-400 font-normal inline-block' transition:fade={{duration: 200}}>{'<'}</span>
      {#key abbrSub}
        <span class='text-sm text-warm-gray-400 font-normal inline-block' in:fly={{y: -20, duration: 200}}>{abbrSub}</span>
      {/key}
      <span class='text-sm text-warm-gray-400 font-normal inline-block' transition:fade={{duration: 200}}>{'>'}</span>
    </div>
  {/if}
</a>

<style>
  a :global(.icon.carrot) {
    @apply fill-current text-transparent;
  }
</style>