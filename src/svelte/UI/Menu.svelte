<script lang=ts>
  import { menuExpanded } from '@lib';
</script>

<div class='bg-main-gray h-full min-w-[7rem] max-w-[20rem] p-6 flex flex-col items-center overflow-hidden {$menuExpanded ? 'w-[25rem]' : 'w-[8.4rem]'}'>
  <img class='h-12 drag {$menuExpanded ? 'h-12' : 'h-10'}' alt='Kubernetes Logo' src={$menuExpanded ? 'assets/icon_k8s.svg' : 'assets/kubernetes.png'}/>
  <slot/>
</div>