<?

if ( isset($_GET['sekcia']) ) {
	echo "	<script type='text/javascript'>
				$(function(){
					function goToByScroll(id){
					     $('html,body').animate({scrollTop: $('#'+id).offset().top - 45},1000);
					}
					goToByScroll('".$_GET['sekcia']."');
				})
			</script>";
}

?>

