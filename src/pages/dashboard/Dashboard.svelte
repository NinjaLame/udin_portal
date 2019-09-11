<script>
    import Page from '../../components/Page.svelte';
    import Header from '../../components/Header.svelte';
    import SideNav from '../../components/SideNav.svelte';
    import Content from '../../components/Content.svelte';
    import Card from '../../components/Card.svelte';
    let menus = [
        [{
            title: "Profile",
            subtitle: "Profil Mahasiswa",
            description: "",
            ref: 'profile'
        },
        {
            title: "Academic",
            subtitle: "Info Akademik",
            description: "",
            ref: 'academic'
        }],
        [{
            title: "Notes",
            subtitle: "Catatan Mahasiswa",
            description: "",
            ref: 'notes'
        },
        {
            title: "Finance",
            subtitle:"Informasi Keuangan",
            description: "",
            ref: 'finance'
        }],
        [{
            title: "Project Academic",
            subtitle: "Riwayat Proyek",
            description: "",
            ref: 'project_academic'
        },
        {
            title: "Study Plan",
            subtitle: "Input KRS",
            description: "",
            ref: 'study_plan'
        }]
        
    ];
    let menu_count = 0;
</script>
<Page>
    <Header></Header>
    <Content>
        <div class="row">
            {#each menus as item, index}
            
                <div class="col-lg-4 col-xl-4 order-lg-1 order-xl-1">
                    <Card {...item[0]}/>
                    <div class="kt-space-20"></div>
                    <Card {...item[1]}/>
                </div>
                
            {/each}
        </div>
        
        
    </Content>
    <SideNav></SideNav>
</Page>
