<script>

	import {Router, Route, Link} from 'svelte-routing';
	import HeaderMobile from './components/HeaderMobile.svelte';
	import Page from './components/Page.svelte';
	import Header from './components/Header.svelte';
	import SideNav from './components/SideNav.svelte';
</script>

<svelte:head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700">
</svelte:head>

<div>
<Router>
	<HeaderMobile></HeaderMobile>

	<Page>
		<Header></Header>
		<SideNav></SideNav>
	</Page>

</Router>
</div>
