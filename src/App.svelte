<script>
    import Page from './components/Page.svelte';
    import Header from './components/Header.svelte';
    import SideNav from './components/SideNav.svelte';
    import HeaderMobile from './components/HeaderMobile.svelte';
    import Content from './components/Content.svelte';
    import {Router, Route, Link} from 'svelte-routing';
    import Dashboard from './pages/dashboard/Dashboard.svelte';
    import StudyPlan from './pages/studyplan/StudyPlan.svelte';
    import ProjectAcademic from './pages/project_academic/ProjectAcademic.svelte';
    import Profile from './pages/profile/Profile.svelte';
    import Notes from './pages/notes/Notes.svelte';
    import Finance from './pages/finance/Finance.svelte';
    import Academic from './pages/academic/Academic.svelte';
    
</script>

<HeaderMobile></HeaderMobile>
<Header></Header>
<SideNav></SideNav>

<Router>
    <div>
        <Route path="/"><Dashboard></Dashboard></Route>
        <Route path="studyplan"><StudyPlan></StudyPlan></Route>
        <Route path="academic/*"><Academic></Academic></Route>
        <Route path="finance"><Finance></Finance></Route>
        <Route path="notes"><Notes></Notes></Route>
        <Route path="profile"><Profile></Profile></Route>
        <Route path="project"><ProjectAcademic></ProjectAcademic></Route>
        <Route path="study_plan"><StudyPlan></StudyPlan></Route>
    </div>
</Router>


<div id="kt_scrolltop" class="kt-scrolltop">
<i class="fa fa-arrow-up"></i>
</div>

