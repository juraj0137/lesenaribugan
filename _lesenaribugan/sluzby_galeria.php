<div class="line_bottom black"></div>

<div id='sluzby'>
	<div class='container'>

		<div class="ponuka">
			<h2>Nabízíme…</h2>

			<ul class="list">
				<li>Montáž a demontáž lešení</li>
				<li>Natěračské a malířské práce</li>
				<li>Zámečnické práce</li>
				<li>Zednické práce</li>
				<li>Demoliční práce</li>
				<li>Tryskání ocelových konstrukcí a betonu</li>
			</ul>

			<div class="centrator">
				<a href="sluzby.html" class="button btn-more">Více ...</a>
			</div>

		</div>

		<?php $images = array(
			"biocel_paskov_01.jpg" => "Biocel Paskov a.s.",
			"tatra_koprivnice_01.jpg" => "Tatra Kopřivnice",
			"borsodchem_01.jpg" => "BorsodChem MCHZ, s.r.o.",
			"bonatrans_01.jpg" => "Bonatrans Bohumín",
			"cez_01.jpg" => "ČEZ, a.s.",
			"arcelor_mittal_01.jpg" => "ArcelorMittal Ostrava a.s.",
			"trinecke_zelezarny_01.jpg" => "Třinecké železárny",
			"us_steel_kosice_03.jpg" => "US Steel Košice",
			"okd_dul_darkov_02.jpg" => "OKD Důl Darkov",
		); ?>

		<div class="galeria">

			<img class="curr_img img-frame" title="<?=reset($images)?>" src="img/referencie/<?=key($images)?>">
			
			<div class="sidebar">
				<ul>
					<?php foreach ($images as $path => $title) { ?>
						<li>
							<img class="side" src="img/referencie/<?=$path?>" title="<?=$title?>">
						</li>
					<?php } ?>
				</ul>
			</div>
		</div>

		<div class="clearfix"></div>
	</div>
</div>