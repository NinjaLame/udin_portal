<script>
    export let tahun_ajaran = '';
    export let items = '';
</script> 

<style>
    .jadwal2 {
        color: rgb(42, 161, 58);
    }
    .jadwal1 {
        color: rgb(170, 44, 44);
    }
    .jadwal3 {
        color: rgb(27, 64, 165);
    }
    .jdwl{
        margin-top: 3px;
        margin-bottom: 0px;
        padding-top: 4px;
        padding-bottom: 0px;
    }
</style>

<div class="col-xl-8 order-lg-2 order-xl-1">
    <div class="kt-portlet kt-portlet--height-fluid kt-portlet--mobile ">
        <div class="kt-portlet__head kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm">
            <div class="kt-portlet__head-label">
                <h3 class="kt-portlet__head-title">
                    Tahun ajaran { tahun_ajaran }
                </h3>
            </div>
        </div>
            <div class="kt-portlet__body kt-portlet__body--fit table-responsive">
                <!--begin: Datatable -->
                <div class="kt-datatable kt-datatable--default kt-datatable--loaded" id="kt_krs">
                    
                    <table  class="table  table-hover table-borderless">
                        <thead>
                            <tr class="kt-datatable__row text-center" >
                                <th class="kt-datatable__cell "><span >Dosen</span></th>
                                <th class="kt-datatable__cell "><span>KDMK</span></th>
                                <th class="kt-datatable__cell "><span>Nama Mata Kuliah</span></th>
                                <th class="kt-datatable__cell "><span>KLPK</span></th>
                                <th class="kt-datatable__cell "><span>SKS</span></th>
                                <th>
                                    <span>
                                        <tr>
                                            <td>Jadwal 1</td>
                                        </tr>
                                        <tr>
                                            <th class=" jadwal1">Hari</th>
                                            <th class=" jadwal1">Jam</th>
                                            <th class=" jadwal1">Ruang</th>
                                        </tr>
                                        
                                    </span>
                                </th>
                                <th>
                                    <span>
                                        <tr>
                                            <td>Jadwal 2</td>
                                        </tr>
                                        <tr>
                                            <th class=" jadwal2">Hari</th>
                                            <th class=" jadwal2">Jam</th>
                                            <th class=" jadwal2">Ruang</th>
                                        </tr>
                                        
                                    </span>
                                </th>
                                <th>
                                    <span>
                                        <tr>
                                            <td class="text-center">Jadwal 3</td>
                                        </tr>
                                        <tr>
                                            <th class=" jadwal3">Hari</th>
                                            <th class=" jadwal3">Jam</th>
                                            <th class=" jadwal3">Ruang</th>
                                        </tr>
                                    </span>
                                </th>
                                
                                <!-- <th class="kt-datatable__cell jadwal2">Jam</th>
                                <th class="kt-datatable__cell jadwal2">Ruang</th>
                                <th class="kt-datatable__cell jadwal3">Hari</th>
                                <th class="kt-datatable__cell jadwal3">Jam</th>
                                <th class="kt-datatable__cell jadwal3">Ruang</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            {#each items as item}
                                <tr class="kt-datatable__row text-center" >
                                    <td class="kt-datatable__cell">
                                        <span class="">2/12/2018</span>
                                    </td>
                                    <td class="kt-datatable__cell">
                                        <span class="">2/12/2018</span>
                                    </td>
                                    <td class="kt-datatable__cell">
                                        <span class="">2/12/2018</span>
                                    </td>
                                    <td class="kt-datatable__cell">
                                        <span class="">2/12/2018</span>
                                    </td>
                                    <td class="kt-datatable__cell">
                                        <span class="">2/12/2018</span>
                                    </td>
                                    <td class="kt-datatable__cell jdwl">
                                        <span class="">
                                            <td class="jdwl">jumat</td>
                                            <td class="jdwl">jumat</td>
                                            <td class="jdwl">jumat</td>
                                        </span>
                                    </td>
                                    <td class="kt-datatable__cell jdwl">
                                        <span class="">
                                            <td class="jdwl">jumat</td>
                                            <td class="jdwl">jumat</td>
                                            <td class="jdwl">jumat</td>
                                        </span>
                                    </td>
                                    <td class="kt-datatable__cell jdwl">
                                        <span class="">
                                            <td class="jdwl">jumat</td>
                                            <td class="jdwl">jumat</td>
                                            <td class="jdwl">jumat</td>
                                        </span>
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
            </div>
        <!--end: Datatable -->
        </div>
    </div>
</div>