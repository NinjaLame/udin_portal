<script>
    import Page from '../../components/Page.svelte';
    import Header from '../../components/Header.svelte';
    import SideNav from '../../components/SideNav.svelte';
    import Content from '../../components/Content.svelte';
    import Card from '../../components/Card.svelte';
    import './dashboard.js';
</script>
<Page>
    <Header></Header>
    <Content>
        <div class="col-xl-8 order-lg-2 order-xl-1">
            <div class="kt-portlet kt-portlet--height-fluid kt-portlet--mobile ">
                <div class="kt-portlet__head kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm">
                    <div class="kt-portlet__head-label">
                        <h3 class="kt-portlet__head-title">
                            Exclusive Datatable Plugin
                        </h3>
                    </div>
                    <div class="kt-portlet__head-toolbar">
                        <div class="dropdown dropdown-inline">
                            <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="flaticon-more-1"></i>
                            </button>
                            
                        </div>
                    </div>
                </div>
                <div class="kt-portlet__body kt-portlet__body--fit">
                    <!--begin: Datatable -->
                    <div class="kt-datatable" id="kt_datatable_latest_orders2"></div>
                    <!--end: Datatable -->
                </div>
            </div>
        </div>
    </Content>
    <SideNav></SideNav>
</Page>
