<script lang=ts>
  import Icon from './Icon.svelte';
  import { windowStore } from '../lib';

  const iconSize = {height: '18', width: '18'};
</script>

<div class='w-full h-full flex flex-col'>
  <slot name=header/>
	<slot name=main/>
</div>
<div class='no-drag absolute top-0 right-0 flex'>
	<button on:click={globalThis.windowAPI.minimize}>
		<Icon id=min {...iconSize}/>
	</button>
	<button on:click={globalThis.windowAPI.toggle}>
		<Icon id={$windowStore ? 'window' : 'max'} {...iconSize}/>
	</button>
	<button on:click={globalThis.windowAPI.close}>
		<Icon id=close {...iconSize}/>
	</button>
</div>

<style lang=scss>
	button {
		@apply flex items-center justify-center border-none py-1 px-2 shadow-none outline-none transition cursor-default rounded hover:bg-warm-gray-200 active:bg-warm-gray-300;

		:global(.icon) {
			@apply fill-current text-black;
		}

		&:last-of-type {
			@apply rounded-tr-none hover:bg-red-500 active:bg-red-600;

			:is(&:hover, &:active) :global(.icon) {
				@apply fill-current text-white;
			}
		}
	}
</style>