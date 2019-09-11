<div class="row">
    
    <div class="col-xl-4">
        <!--begin:: Widgets/Announcements 1-->
<div class="kt-portlet  kt-portlet--height-fluid">
	<div class="kt-portlet__head kt-portlet__head--noborder">
		<div class="kt-portlet__head-label">
			<h3 class="kt-portlet__head-title">
				Announcements <span class="btn btn-success" on:click="{goDashboard}" role="button">Back to Dashboard</span>
			</h3>
		</div>
		
	</div>
	<div class="kt-portlet__body bg hei" style="">
		<!--begin::Widget 7-->
		<div class="kt-widget7">
			<div class="kt-widget7__desc " >
			</div>
			
			<div class="kt-widget7__button">
				
			</div>
		</div>
		<!--end::Widget 7--> 
	</div>
</div>
<!--end:: Widgets/Announcements 1-->    </div>
    
</div>


<style>
    .bg{

        background: url('./assets/media/under_construction.png'); 
        background-repeat: no-repeat; 
        background-position: center; 
    }

    .hei {
        height: 500px;
    }
</style>

<script>
    import { navigate } from 'svelte-routing';

const goDashboard = () => {
        navigate('/', {replace:false});
    }
</script>