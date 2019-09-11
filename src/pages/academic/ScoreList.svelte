<script>
    export let tahun_ajaran = '';
    export let items = '';
</script> 
<div class="col-xl-8 order-lg-2 order-xl-1">
    <div class="kt-portlet kt-portlet--height-fluid kt-portlet--mobile ">
        <div class="kt-portlet__head kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm">
            <div class="kt-portlet__head-label">
                <h3 class="kt-portlet__head-title">
                    Tahun ajaran { tahun_ajaran }
                </h3>
            </div>
        </div>
            <div class="kt-portlet__body kt-portlet__body--fit table-responsive ">
                <!--begin: Datatable -->
                <div class="kt-datatable kt-datatable--default kt-datatable--loaded" id="kt_krs">
                    
                    <table class="table table-hover">
                    <thead>
                        <tr class="kt-datatable__row text-center" >
                            <th class="kt-datatable__cell "><span>KDMK</span></th>
                            <th class="kt-datatable__cell "><span>Nama Mata Kuliah</span></th>
                            <th class="kt-datatable__cell "><span>SKS</span></th>
                            <th class="kt-datatable__cell "><span>Nilai</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each items as item}
                            <tr class="kt-datatable__row text-center" >
                                {#each item as col}
                                    <td class="kt-datatable__cell"><span><span class="kt-font-bold">2/12/2018</span></span></td>
                                {/each}
                            </tr>
                        {/each}
                    </tbody>
                    </table>
            </div>
        <!--end: Datatable -->
        </div>
    </div>
</div>