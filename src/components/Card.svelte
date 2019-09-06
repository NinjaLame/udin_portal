<script>
    export let title = 'title';
    export let subtitle = 'subtitle';
    export let description = 'desc';
    import { Link } from "svelte-routing";
    export let ref = "./";
    
</script>
<div class="kt-portlet kt-portlet--fit kt-portlet--head-noborder kt-portlet--height-fluid-half">
    <div class="kt-portlet__head kt-portlet__space-x">
        <div class="kt-portlet__head-label">
            <h3 class="kt-portlet__head-title">
                {title}
            </h3>
        </div>
        
    </div>
    <Link to="/{ref}">
        <div class="kt-portlet__body kt-portlet__body--fluid" >
            <div class="kt-widget20">
                <div class="kt-widget20__content kt-portlet__space-x">
                    <span class="kt-widget20__number kt-font-brand">{subtitle}</span>
                    <span class="kt-widget20__desc" >{description}</span>
                </div>
                <div class="kt-widget20__chart" style="height:70px;">
                </div>
            </div>
        </div>
    </Link>
</div>