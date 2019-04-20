<div class="line_top black"></div>

	<div id="referencie">
		<div class="container">

			<div class="zoznam">
				<h2>Kde jsme stavěli…</h2>
				<ul class="list">
					<li>US Steel Košice</li>
					<li>Třinecké železárny</li>
					<li>ArcelorMittal Ostrava a.s.</li>
					<li>Biocel Paskov a.s.</li>
					<li>Bohumín Bonatrans</li>
					<li>BorsodChem MCHZ, s.r.o.</li>
					<li>Vodní nádrž Homole</li>
				</ul>

				<div class="centrator">
					<a href="referencie.html" class="button btn-more">Více ...</a>
				</div>
			</div>

			<?php 
				$images = array(
					"okd_dul_darkov_02.jpg" => "OKD Důl Darkov",
					"homole.jpg" => "Vodní nádrž Homole",
					"us_steel_kosice_03.jpg" => "US Steel Košice",
					"trinecke_zelezarny_01.jpg" => "Třinecké železárny",
					"biocel_paskov_01.jpg" => "Biocel Paskov a.s.",
					"arcelor_mittal_01.jpg" => "ArcelorMittal Ostrava a.s.",
					"cez_01.jpg" => "ČEZ, a.s.",
					"bonatrans_01.jpg" => "Bonatrans Bohumín",
					"borsodchem_01.jpg" => "BorsodChem MCHZ, s.r.o.",
					"tatra_koprivnice_01.jpg" => "Tatra Kopřivnice",
				);
			?>

			<div class="slideshow">
				<ul>
					<?php foreach ($images as $path => $title) { ?>
						<li>
							<img class="img-frame" src="img/referencie/<?=$path?>" title="<?=$title?>">
							<h3><?=$title?></h3>
						</li>
					<?php } ?>
				</ul>
				<div class="clearfix"></div>
			</div>

			<div class="clearfix"></div>
		</div>
	</div>
