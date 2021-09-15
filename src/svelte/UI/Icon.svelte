<script lang=ts>
  import { ICONS } from '../lib';

  export let id = 'unknown';
  export let width = 24;
  export let height = 24;
  export let active = false;

  $: iconId = !!ICONS[id] ? id : 'unknown';
  $: fill = active ? '#fff' : '#444';
</script>

<svg
  xmlns='http://www.w3.org/2000/svg'
  enable-background='new 0 0 24 24'
  viewBox='0 0 24 24'
  {width}
  {height}
  {fill}
  class=test
>
  {@html ICONS[iconId]}
</svg>

<style lang=scss>
  svg {
    transition: all 0.2s linear;
  }
</style>