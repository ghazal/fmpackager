    var FMPackagerClone = null;
    jQuery(document).ready(function($) {
        /////// Clone de la liste
        FMPackagerClone = $('#extensionName').clone().removeAttr('id').removeAttr('name');
        /////// Modification des propositions lors des choix dans les listes
        $('#extensionGroupContainer, #extensionNameContainer').hide();
        $('#extensionType, #extensionGroup').change(function() {
            var type = $('#extensionType').val();
            var group = $('#extensionGroup').val();
            // Affiche les listes déroulantes qu'il faut
            if (type == '') {
                $('#extensionNameContainer').slideUp();
                $('#extensionGroupContainer').slideUp();
                $('#extensionGroup').val('');
            } else if(type == 'plg') {
                $('#extensionGroupContainer').slideDown();
                if (group == '') {
                    $('#extensionNameContainer').slideUp();
                } else {
                    $('#extensionNameContainer').slideDown();
                }
            } else {
                $('#extensionGroupContainer').slideUp();
                $('#extensionNameContainer').slideDown();
            }
            // Affiche les options qu'il faut
            $('#extensionName option').remove();
            $('#extensionName').append(FMPackagerClone.find('option').clone());
            $.each($('#extensionName').find('option'), function(idx, opt) {
                if ($(opt).data('type') != undefined && $(opt).data('type') != type) {
                    $(opt).remove();
                } else if (type == 'plg' && group != '' && $(opt).data('group') != undefined && $(opt).data('group') != group) {
                    $(opt).remove();
                }
            });
        }).trigger('change');
    });
