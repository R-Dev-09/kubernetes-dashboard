<script lang=ts>
  import { Search } from '@UI';

  export let label: string;
</script>

<div class='sticky drag flex justify-between p-4 w-full bg-main-gray'>
  <span class=leading-8>{label}</span>
  <Search/>
  <div class=h-px-1/>
</div>