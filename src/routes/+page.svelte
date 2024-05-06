<script lang="ts">
    import type { PageData } from '../../landing-page/$types';
	import Hero from '$lib/components/landing-page/hero.svelte';
	import Filler from '$lib/components/landing-page/filler.svelte';
	import Service from '$lib/components/landing-page/service.svelte';
  import Price from '$lib/components/landing-page/price.svelte';
	import Template from '$lib/components/landing-page/template.svelte';
    
    export let data: PageData;
</script>

<Hero />
<Filler />
<Service />
<Price />
<Template />