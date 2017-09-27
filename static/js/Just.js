/**$(window).load(function() {
    $(document).ready(function(){
    ('#loading').remove();
});
});*/

$(document).ready(function() {
    $('#loading').hide();
});

function htmlbodyHeightUpdate(){
    var height3 = $( window ).height();
    var height1 = $('.nav').height()+50;
    height2 = $('.main').height();
    if(height2 > height3){
        $('html').height(Math.max(height1,height3,height2)+10);
        $('body').height(Math.max(height1,height3,height2)+10);
    }
    else
    {
        $('html').height(Math.max(height1,height3,height2));
        $('body').height(Math.max(height1,height3,height2));
    }

}
$(document).ready(function () {
    htmlbodyHeightUpdate();
    $( window ).resize(function() {
        htmlbodyHeightUpdate()
    });
    $( window ).scroll(function() {
        height2 = $('.main').height();
        htmlbodyHeightUpdate()
    });
});

// toggle class scroll
$(window).scroll(function() {
    if($(this).scrollTop() > 50)
    {
        $('.navbar-trans').addClass('afterscroll');
    } else
    {
        $('.navbar-trans').removeClass('afterscroll');
    }

});

//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
jQuery.fn.dataTableExt.oApi.fnFilterClear  = function ( oSettings )
{
    var i, iLen;

    /* Remove global filter */
    oSettings.oPreviousSearch.sSearch = "";

    /* Remove the text of the global filter in the input boxes */
    if ( typeof oSettings.aanFeatures.f != 'undefined' )
    {
        var n = oSettings.aanFeatures.f;
        for ( i=0, iLen=n.length ; i<iLen ; i++ )
        {
            $('input', n[i]).val( '' );
        }
    }

    /* Remove the search text for the column filters - NOTE - if you have input boxes for these
     * filters, these will need to be reset
     */
    for ( i=0, iLen=oSettings.aoPreSearchCols.length ; i<iLen ; i++ )
    {
        oSettings.aoPreSearchCols[i].sSearch = "";
    }

    /* Redraw */
    oSettings.oApi._fnReDraw( oSettings );
};

$(document).ready(function () {
         var table = $('#deplist').DataTable({
             dom: 'Bfrtip',
             buttons: [
               {
                   extend: 'print',
                   text: "Seçili Olanları Yazdır",
                   exportOptions: {
                       modifier: {
                           selected: true,
                           search: 'none'
                    }
                },
                    customize: function ( win ) {
                    $(win.document.body)
                        .css( 'font-size', '10pt' )
                        .prepend(
                            '<img src="http://i.imgur.com/4wdZOTR.png" style="position: absolute; top: 0; left: 0;padding-left:140px; padding-top:350px"/>'
                        );

                    $(win.document.body).find( 'table' )
                        .addClass( 'compact' )
                        .css( 'font-size', 'inherit' );
                }
            }
        ],

             lengthChange: false,
             select:{
                 style : "multi"
             },
            ajax: {
                url: '../static/data.txt',
                dataSrc: ''
                },
            language: {
            "sDecimal":        ",",
            "sEmptyTable":     "Tabloda herhangi bir veri mevcut değil",
            "sInfo":           "_TOTAL_ kayıttan _START_ - _END_ arasındaki kayıtlar gösteriliyor",
            "sInfoEmpty":      "Kayıt yok",
            "sInfoFiltered":   "(_MAX_ kayıt içerisinden bulunan)",
            "sInfoPostFix":    "",
            "sInfoThousands":  ".",
            "sLengthMenu":     "Sayfada _MENU_ kayıt göster",
            "sLoadingRecords": "Yükleniyor...",
            "sProcessing":     "İşleniyor...",
            "sSearch":         "Ara:",
            "sZeroRecords":    "Eşleşen kayıt bulunamadı",
            "oPaginate": {
                "sFirst":    "İlk",
                "sLast":     "Son",
                "sNext":     "Sonraki",
                "sPrevious": "Önceki"
            },
            "oAria": {
                "sSortAscending":  ": artan sütun sıralamasını aktifleştir",
                "sSortDescending": ": azalan sütun sıralamasını aktifleştir"
            }
        },

             "columns": [
                 {
                     "className": 'details-control',
                     "orderable": false,
                     "data": null,
                     "defaultContent": '',
                     "render": function () {
                         return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
                     },
                     width:"15px"
                 },
                    { "data": "did"},
                    { "data": "uni_names.uni_name"},
                    { "data": "uni_names.uni_city"},
                    { "data": "uni_names.uni_type"},
                    { "data": "fak_names.fak_name"},
                    { "data": "dep_name"},
                    { "data": "dep_code"},
                    { "data": "dep_note"},
                    { "data": "dep_duration"},
                    { "data": "dep_limit"},
                    { "data": "dep_rules"},
                    { "data": "dep_point_type"},
                    { "data": "dep_placement16"},
                    { "data": "dep_point16"}
             ],
             "order": [[1, 'asc']],

         });
         /* $(document).ready(function() {
    var clTable = $('#deplist').DataTable();
        $('#deplist_filter input').prop('id', 'custom_search_box');
        $('.dt-buttons a').prop('id','prnt_button');
        $("#prnt_button").click(function () {
    clTable.search('');
    clTable.draw();

         });

});  Button ID Verme */
         // Add event listener for opening and closing details
         $('#deplist tbody').on('click', 'td.details-control', function () {
             var tr = $(this).closest('tr');
             var tdi = tr.find("i.fa");
             var row = table.row(tr);

             if (row.child.isShown()) {
                 // This row is already open - close it
                 row.child.hide();
                 tr.removeClass('shown');
                 tdi.first().removeClass('fa-minus-square');
                 tdi.first().addClass('fa-plus-square');
             }
             else {
                 // Open this row
                 row.child(format(row.data())).show();
                 tr.addClass('shown');
                 tdi.first().removeClass('fa-plus-square');
                 tdi.first().addClass('fa-minus-square');
             }
         });

         table.on("user-select", function (e, dt, type, cell, originalEvent) {
             if ($(cell.node()).hasClass("details-control")) {
                 e.preventDefault();
             }
         });
     });

function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="0" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>İnternet Sitesi:</td>'+
            '<td>'+d.uni_names.uni_name+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Özel Koşullar:</td>'+
            '<td>'+d.dep_rules+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extra info:</td>'+
            '<td>And any further details here (images etc)...</td>'+
        '</tr>'+
    '</table>';
}


$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = parseFloat( $('#minpoint').val(), 10 );
        var max = parseFloat( $('#maxpoint').val(), 10 );
        var point = parseFloat( data[14] ) || 0; // use data for the point column

        if (!(( isNaN(min) && isNaN(max) ) ||
            ( isNaN(min) && point <= max ) ||
            ( min <= point && isNaN(max) ) ||
            ( min <= point && point <= max ))) {
        } else {
            return true;
        }
        return false;
    }
);

$(document).ready(function () {
    var table = $('#deplist').DataTable();
    // Event listener to the two range filtering inputs to redraw on input
    $('#minpoint, #maxpoint').keyup( function() {
        table.draw();
    } );
} );

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = parseInt( $('#minplacement').val(), 10 );
        var max = parseInt( $('#maxplacement').val(), 10 );
        var plac = parseFloat( data[13] ) || 0; // use data for the placement column

        if (!(( isNaN(min) && isNaN(max) ) ||
            ( isNaN(min) && plac <= max ) ||
            ( min <= plac && isNaN(max) ) ||
            ( min <= plac && plac <= max ))) {
        } else {
            return true;
        }
        return false;
    }
);

$(document).ready(function() {
    var table = $('#deplist').DataTable();

    // Event listener to the two range filtering inputs to redraw on input
    $('#minplacement, #maxplacement').keyup( function() {
        table.draw();
    } );
    $('#select_button').click( function () {
        alert( table.rows('.selected').data().length +' Satır Seçildi' );
    } );
} );
$(document).ready(function(){
    $('input[type=radio][name=spl]').click(function(){
        var related_class=$(this).val();
        $('.'+related_class).prop('disabled',false);
        aTable.fnFilter('', 14, true, false);

        $('input[type=radio][name=spl]').not(':checked').each(function(){
            var other_class=$(this).val();
            $('.'+other_class).prop('disabled',true).val('');
            aTable.fnFilter('', 13, true, false);
        });
    });
});
/** Alternative for multiple checkbox filter but not multiple =)
 * $(document).ready(function() {
  var aTable = $('#deplist').dataTable();
    $("#Devlet").click(function() {
    if ($("#Devlet").is(":checked")) {
    aTable.fnFilter('Devlet', 3, true, false);
    } else {
    aTable.fnFilter('', 3, true, false);
}
});
    $("#Vakıf").click(function() {
    if ($("#Vakıf").is(":checked")) {
    aTable.fnFilter('Vakıf', 3, true, false);
    } else {
    aTable.fnFilter('', 3, true, false);
}
}); */
$(function() {
  aTable = $('#deplist').dataTable();
});

function filter() {
  //build a regex filter string with an or(|) condition
  var uni_type = $('input:checkbox[name="uni_type"]:checked').map(function() {
    return '^' + this.value + '\$';
  }).get().join('|');
  //filter in column 0, with an regex, no smart filtering, no inputbox,not case sensitive
  aTable.fnFilter(uni_type, 4, true, false);

  /** var new_deps = $('input:checkbox[id="new_deps"]:checked').click(function () {
      if ($("#new_deps").is(":checked")){
          aTable.fnFilter('[^-]$' , 13, true, false)
      }
        else {
          aTable.fnFilter('', 13, true, false)
      }
    }); */
  var point_type = $('input:checkbox[name="point_type"]:checked').map(function() {
    return '^' + this.value + '\$';
  }).get().join('|');
  //filter in column 0, with an regex, no smart filtering, no inputbox,not case sensitive
  aTable.fnFilter(point_type, 12, true, false);
}

$(document).ready(function() {
    $("#new_deps").click(function () {
        if ($("#new_deps").is(":checked")) {
            aTable.fnFilter('[^-]$', 14, true, false);
        } else {
            aTable.fnFilter('', 14, true, false);
        }
    });
});

