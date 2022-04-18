<script lang=ts>
  import NavItem from './NavItem.svelte';

  export let routes: string[];
  
  const mainRoutes = routes.filter(r => !r.slice(1).includes('/'));

  const subRoutes = (mainRoute: string) => routes.filter(r => {
    const [ _, main, sub ] = r.split('/');
    return main === mainRoute.slice(1) && !!sub;
  }).map(sr => sr.split('/')[2]);
</script>

<ul class='flex flex-col items-center justify-evenly mx-0 my-6 p-2 w-full'>
  {#each mainRoutes as route, i}
    <NavItem {route} subRoutes={subRoutes(route)} lastItem={i === mainRoutes.length - 1}/>
  {/each}
</ul>