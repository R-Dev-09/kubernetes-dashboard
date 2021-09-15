<script lang=ts>
  import { link, location } from 'svelte-spa-router';
  import { camelCase } from 'lodash/string';
  import Icon from './Icon.svelte';

  export let routes: string[];
</script>

<ul>
  {#each routes as route}
    <li class:active={$location === route}>
      <a href={route} use:link>
        <Icon id={camelCase(route)} active={$location === route}/>
      </a>
    </li>
  {/each}
</ul>

<style lang=scss>
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 1.5rem 0;
    width: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.5rem 0;
      width: 100%;
      border-right: 0 solid white;
      padding: 0.5rem 0;
      transition: border-right-width 0.2s linear;

      a {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-app-region: no-drag;
      }

      &.active {
        border-right-width: 0.25rem;

        a {
          margin-left: 0.25rem;
        }
      }
    }
  }
</style>