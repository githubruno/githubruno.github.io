
$(document).ready(function(){
           $('li img').on('click',function(){
                var img = $(this).clone();
				$('#myModal').modal();
                $('#myModal').on('shown.bs.modal', function(){
                    //$('#myModal .modal-body').add(imgcl);//addClass("img-responsive");
					$('#myModal .modal-body').show(img).removeClass("img-thumbnail").addClass("img-responsive");
					});
                $('#myModal').on('hidden.bs.modal', function(){
                    $('#myModal .modal-body').empty();
                    //img.remove();
                });
           });  
        })


/*
$(document).ready(function(){
           $('li img').on('click',function(){
                var src = $(this).attr('src');
                var img = '<img src="' + src + '" class="img-responsive"/>';
                $('#myModal').modal();
                $('#myModal').on('shown.bs.modal', function(){
                    $('#myModal .modal-body').add($(img));
                });
                $('#myModal').on('hidden.bs.modal', function(){
                    $('#myModal .modal-body').html('');
                });
           });  
        })
*/

//  		   <li class="col-lg-2 col-md-2 col-sm-3 col-xs-4 image"><img src="img/1.jpg" class="img-thumbnail"/></li>
