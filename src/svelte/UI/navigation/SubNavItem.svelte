<script lang=ts>
  import { link, location } from 'svelte-spa-router';
  import { kubeCase } from '@lib';

  export let route: string;
  export let subRoute: string;

  $: routeActive = $location.split('/')[2] === subRoute;
</script>

<a class='relative flex items-center' href='{route}/{subRoute}' use:link on:click>
  <span class='text-sm ml-4 leading-8 hover:text-k8s-blue active:text-k8s-blue transition-colors' class:text-k8s-blue={routeActive}>
    {kubeCase(subRoute)}
  </span>
</a>