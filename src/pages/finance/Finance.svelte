<script>
    import Page from '../../components/Page.svelte';
    import Header from '../../components/Header.svelte';
    import SideNav from '../../components/SideNav.svelte';
    import Content from '../../components/Content.svelte';
    import Card from '../../components/Card.svelte';
    import Invoice from './Invoice.svelte';
    import Info from './Info.svelte';
    import History from './History.svelte';
    import {Router, Route, Link} from "svelte-routing";

    let isinfo = true;
    let ishistory = false;

    $: btninfo = isinfo ? 'btn-primary' : 'btn-secondary';
    $: btnhistory = ishistory ? 'btn-primary' : 'btn-secondary';

    const handleClick = (btn) => {
        isinfo = false;
        ishistory = false;

        switch (btn) {
            case 'info':
                isinfo = true;
                break;
            case 'history':
                ishistory = true;
                break;
        };
    }
</script>
<Page>
    <Header></Header>
    <Content>
    <Router url="/academic/">
            <nav>
                <div class="kt-subheader  kt-grid__item" id="kt_subheader">
                    <div class="kt-container  kt-container--fluid ">
                        <div class="kt-subheader__main">
                            <Link to="/"><div class="btn kt-subheader__{btninfo}" on:click={()=>handleClick('info')}>Info Keuangan</div></Link>

                            <Link to="history"><div class="btn kt-subheader__{btnhistory} " on:click={()=>handleClick('history')}>Riwayat Keuangan</div></Link>

                        </div>
                    </div>
                </div>
                
            </nav>
            <div class="row">
                <Route path="/"><Invoice></Invoice><Info></Info></Route>
                <Route path="/history"><History></History></Route>
            </div>
        </Router>
    </Content>
    <SideNav></SideNav>
</Page>
