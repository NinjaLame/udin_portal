<script>
    import Page from '../../components/Page.svelte';
    import Header from '../../components/Header.svelte';
    import SideNav from '../../components/SideNav.svelte';
    import Content from '../../components/Content.svelte';
    import Card from '../../components/Card.svelte';
    import StudyPlan from "./StudyPlan.svelte"
    import {Router, Route, Link} from "svelte-routing";

    let iskrs = true;
    let iskhs = false;
    let isnilai = false;

    $: btnkrs = iskrs ? 'btn-primary' : 'btn-secondary';
    $: btnkhs = iskhs ? 'btn-primary' : 'btn-secondary';
    $: btnnilai = isnilai ? 'btn-primary' : 'btn-secondary';

    const handleClick = (btn) => {
        iskhs = false;
        isnilai = false;
        iskrs = false;

        switch (btn) {
            case 'krs':
                iskrs = true;
                break;
            case 'khs':
                iskhs = true;
                break;
            case 'nilai':
                isnilai = true;
                break;
        
            default:
                break;
        }
    }
</script>
<Page>
    <Content>
        <Router url="/academic/">
            <nav>
                <div class="kt-subheader  kt-grid__item" id="kt_subheader">
                    <div class="kt-container  kt-container--fluid ">
                        <div class="kt-subheader__main">
                            <div class="btn kt-subheader__{btnkrs}" on:click={()=>handleClick('krs')}><Link to="/">KRS</Link></div>

                            <div class="btn kt-subheader__{btnkhs} " on:click={()=>handleClick('khs')}><Link to="khs">KHS</Link></div>

                            <div class="btn kt-subheader__{btnnilai}" on:click={()=>handleClick('nilai')}><Link to="nilai">Daftar Nilai</Link></div>
                        </div>
                    </div>
                </div>
                
            </nav>
            <div>
                <Route path="/"><StudyPlan/></Route>
                <Route path="/khs">khs</Route>
                <Route path="/nilai">daftar</Route>
            </div>
        </Router>
    </Content>
</Page>
