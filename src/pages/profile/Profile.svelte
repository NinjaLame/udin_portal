<script>
    import Page from '../../components/Page.svelte';
    import Header from '../../components/Header.svelte';
    import SideNav from '../../components/SideNav.svelte';
    import Content from '../../components/Content.svelte';
    import Card from '../../components/Card.svelte';
</script>
<Page>
    <Content>
        <div class="kt-container  kt-grid__item kt-grid__item--fluid">
		
<!--Begin::App-->
<div class="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">
    <!--Begin:: App Aside Mobile Toggle-->
    <button class="kt-app__aside-close" id="kt_user_profile_aside_close">
        <i class="la la-close"></i>
    </button>
    <!--End:: App Aside Mobile Toggle-->

    <!--Begin:: App Aside-->
    <div class="kt-grid__item kt-app__toggle kt-app__aside" id="kt_user_profile_aside" style="opacity: 1;">
        <!--begin:: Widgets/Applications/User/Profile1-->
<div class="kt-portlet ">
    <div class="kt-portlet__head  kt-portlet__head--noborder">
        <div class="kt-portlet__head-label">
            <h3 class="kt-portlet__head-title">
            </h3>
        </div>
        
    </div>
    <div class="kt-portlet__body kt-portlet__body--fit-y">
        <!--begin::Widget -->
        <div class="kt-widget kt-widget--user-profile-1">
            <div class="kt-widget__head">
                <div class="kt-widget__media">
                    <img src="./assets/media/users/100_1.jpg" alt="image">
                </div>
                <div class="kt-widget__content">
                    <div class="kt-widget__section">
                        <a href="./a" class="kt-widget__username">
                            Jason Muller    
                        </a>
                    </div>
                </div>
            </div>
            <div class="kt-widget__body">
                <div class="kt-widget__content">
                    <div class="kt-widget__info">
                        <span class="kt-widget__label">Email:</span>
                        <span class="kt-widget__data">matt@fifestudios.com</span>
                    </div>
                    <div class="kt-widget__info">
                        <span class="kt-widget__label">Phone:</span>
                        <span class="kt-widget__data">081322553614</span>
                    </div>
                    
                </div>
                <div class="kt-widget__items">
                    <!-- <a href="demo9/custom/apps/user/profile-1/overview.html" class="kt-widget__item ">
                        <span class="kt-widget__section">
                            <span class="kt-widget__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <polygon id="Bound" points="0 0 24 0 24 24 0 24"></polygon>
                                        <path d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" id="Shape" fill="./a000000" fill-rule="nonzero"></path>
                                        <path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" id="Path" fill="./a000000" opacity="0.3"></path>
                                    </g>
                                </svg>                            </span>
                            <span class="kt-widget__desc">
                                Profile Overview                                                    
                            </span>
                        </span>                        
                    </a> -->
                    
                </div>
            </div>
        </div>
        <!--end::Widget -->
    </div>
</div>
<!--end:: Widgets/Applications/User/Profile1-->

     </div>
    <!--End:: App Aside-->
    
    <!--Begin:: App Content-->
    <div class="kt-grid__item kt-grid__item--fluid kt-app__content">
        <div class="row">
            <div class="col-xl-12">
                <div class="kt-portlet">
                    <div class="kt-portlet__head">
                        <div class="kt-portlet__head-label">
                            <h3 class="kt-portlet__head-title">Biodata Umum</h3>
                        </div>
                        <div class="kt-portlet__head-toolbar">
                            <div class="kt-portlet__head-wrapper">
                                <div class="dropdown dropdown-inline">
                                    <button type="button" class="btn btn-label-brand btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="flaticon2-gear"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <ul class="kt-nav">
                                            <li class="kt-nav__section kt-nav__section--first">
                                                <span class="kt-nav__section-text">Export Tools</span>
                                            </li>
                                            <li class="kt-nav__item">
                                                <a href="./a" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon la la-print"></i>
                                                    <span class="kt-nav__link-text">Print</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item">
                                                <a href="./a" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon la la-copy"></i>
                                                    <span class="kt-nav__link-text">Copy</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item">
                                                <a href="./a" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon la la-file-excel-o"></i>
                                                    <span class="kt-nav__link-text">Excel</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item">
                                                <a href="./a" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon la la-file-text-o"></i>
                                                    <span class="kt-nav__link-text">CSV</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item">
                                                <a href="./a" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon la la-file-pdf-o"></i>
                                                    <span class="kt-nav__link-text">PDF</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form class="kt-form kt-form--label-right">
                        <div class="kt-portlet__body">
                            <div class="kt-section kt-section--first">
                                <div class="kt-section__body">
                                    <div class="row">
                                        <label class="col-xl-3"></label>
                                        <div class="col-lg-9 col-xl-6">
                                            <h3 class="kt-section__title kt-section__title-sm">Biodata Umum:</h3>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Nomor Induk Mahasiswa (NIM):</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="A11.2015.09136" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Jalur Pendaftaran:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Status:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Tempat, Tanggal Lahir:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Provinsi & Kota:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Alamat Asal:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Kode Pos Asal:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Telepon Asal:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Alamat Semarang:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Kode Pos Semarang:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Telpon Semarang:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">No HP Mahasiswa:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Email Mahasiswa:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Email Lain:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Warga Negara:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Agama:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Golongan Darah:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Status Martial:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Kelas Pagi/Malam:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Dosen Wali:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Alamat Orang Tua:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Tempat, Tanggal Lahir Ortu:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Provinsi Kota:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Telepon Orang Tua:</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" value="Reguler" disabled>
                                        </div>
                                    </div>




                                </div>
                            </div>

                        </div>
                        
                    </form>
                </div>
            </div>  
        </div>           
    </div>
    <!--End:: App Content-->
</div>
<!--End::App-->


	</div>
    </Content>
</Page>
