<script lang=ts>
  import { ICONS } from '@lib';

  export let id = 'unknown';
  export let width = '24';
  export let height = '24';
  export let fill = 'black';
  export let classes = '';
</script>

<svg
  xmlns='http://www.w3.org/2000/svg'
  enable-background='new 0 0 24 24'
  viewBox='0 0 24 24'
  {width}
  {height}
  {fill}
  style='min-width: {width}; min-height: {height};'
  class='{classes} icon {id} transition-colors duration-200 fill-current text-{fill}'
>
  {@html ICONS[id] || ICONS['unknown']}
</svg>