<script lang=ts>
  import { fly, fade } from 'svelte/transition';
  import { K8S_ABBR } from '@lib';

  export let activeSub: string;

  $: abbrSub = K8S_ABBR[activeSub] || '...';
</script>

<div transition:fade={{duration: 200}}>
  <span class='text-sm text-warm-gray-400 font-normal inline-block' transition:fade={{duration: 200}}>{'<'}</span>
  {#key abbrSub}
    <span class='text-sm text-warm-gray-400 font-normal inline-block' in:fly={{y: -20, duration: 200}}>{abbrSub}</span>
  {/key}
  <span class='text-sm text-warm-gray-400 font-normal inline-block' transition:fade={{duration: 200}}>{'>'}</span>
</div>