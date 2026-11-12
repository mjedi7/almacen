/*
Template Name: Admin Pro Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/

const customInitFunctions = () => {
    $(function() {
        "use strict";
        $(function() {
            $(".preloader").fadeOut();
        });
        jQuery(document).on('click', '.mega-dropdown', function(e) {
            e.stopPropagation()
        });
        // El estado del Sidebar lo administra Angular (SidebarService).
        // Se conserva únicamente el cálculo de altura del área de contenido.
        var setPageHeight = function() {
            var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
            if (height < 1) height = 1;
            $(".page-wrapper").css("min-height", height + "px");
        };
        $(window).ready(setPageHeight);
        $(window).on("resize", setPageHeight);

        // Botón de escritorio: alterna la clase que usa el tema para el modo compacto.
        $(document).on('click', '.sidebartoggler', function(e) {
            e.preventDefault();
            $('body').toggleClass('mini-sidebar');
        });

        // Botón móvil: muestra u oculta el panel lateral.
        $(document).on('click', '.nav-toggler', function(e) {
            e.preventDefault();
            $('body').toggleClass('show-sidebar');
        });

        $(".search-box a, .search-box .app-search .srh-btn").on('click', function() {
            $(".app-search").toggle(200);
        });
        // ============================================================== 
        // Right sidebar options
        // ============================================================== 
        $(".right-side-toggle").click(function() {
            $(".right-sidebar").slideDown(50);
            $(".right-sidebar").toggleClass("shw-rside");
        });
        // ============================================================== 
        // This is for the floating labels
        // ============================================================== 
        $('.floating-labels .form-control').on('focus blur', function(e) {
            $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
        }).trigger('blur');

        // ============================================================== 
        //tooltip
        // ============================================================== 
        $(function() {
                $j('[data-toggle="tooltip"]').tooltip();
            })
            // ============================================================== 
            //Popover
            // ============================================================== 
        $(function() {
                $j('[data-toggle="popover"]').popover();
            })
        // ============================================================== 
        // Perfact scrollbar
        // ============================================================== 
        $j('.scroll-sidebar, .right-side-panel, .message-center, .right-sidebar').perfectScrollbar();

        // ============================================================== 
        // Resize all elements
        // ============================================================== 
        // ============================================================== 
        // To do list
        // ============================================================== 
        $(".list-task li label").click(function() {
            $(this).toggleClass("task-done");
        });



        // ============================================================== 
        // Collapsable cards
        // ==============================================================
        $('a[data-action="collapse"]').on('click', function(e) {
            e.preventDefault();
            $(this).closest('.card').find('[data-action="collapse"] i').toggleClass('ti-minus ti-plus');
            $(this).closest('.card').children('.card-body').collapse('toggle');

        });
        // Toggle fullscreen
        $('a[data-action="expand"]').on('click', function(e) {
            e.preventDefault();
            $(this).closest('.card').find('[data-action="expand"] i').toggleClass('mdi-arrow-expand mdi-arrow-compress');
            $(this).closest('.card').toggleClass('card-fullscreen');
        });

        // Close Card
        $('a[data-action="close"]').on('click', function() {
            $(this).closest('.card').removeClass().slideUp('fast');
        });

    });
}

customInitFunctions();