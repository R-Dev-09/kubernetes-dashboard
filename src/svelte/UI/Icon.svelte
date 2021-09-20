<script lang=ts>
  import { ICONS } from '../lib';

  export let id = 'unknown';
  export let width = '24';
  export let height = '24';
  export let fill = 'black';
  export let type = 'svg';

  const imgUrl = 'C:\\Users\\rdvan\\Pictures\\k8s';

  $: iconId = !!ICONS[id] ? id : 'unknown';
</script>

{#if type === 'svg'}
  <svg
    xmlns='http://www.w3.org/2000/svg'
    enable-background='new 0 0 24 24'
    viewBox='0 0 24 24'
    {width}
    {height}
    {fill}
    style='min-width: {width}; min-height: {height};'
    class='icon {id} transition-colors'
  >
    {@html ICONS[iconId]}
  </svg>
  {:else if type === 'img'}
    <img style='width: {width}px; height: {height}px;' src='{imgUrl}\{id}.png' alt={id}>
{/if}