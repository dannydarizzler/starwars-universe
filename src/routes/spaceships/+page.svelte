<script lang="ts">
	export let data;
	import "$lib/styles/flipcard.css";
</script>

<h1 class="text-center my-4">Raumschiff erstellen</h1>

<form method="POST" action="?/create" class="container mb-5">
	<div class="row g-3">
		<div class="col-md-6">
			<label class="form-label">Name:
				<input name="name" required class="form-control" />
			</label>
		</div>
		<div class="col-md-6">
			<label class="form-label">Art:
				<input name="art" class="form-control" />
			</label>
		</div>
		<div class="col-md-6">
			<label class="form-label">Bild-URL:
				<input name="bild" class="form-control" />
			</label>
		</div>
	</div>

	<button
	  type="submit"
	  name="intent"
	  value="create"
	  class="btn btn-warning w-100 mt-3"
	>
	  Raumschiff speichern
	</button>
</form>

<hr />

<h2 class="text-center my-4">Gespeicherte Raumschiffe</h2>

{#if data.spaceships.length > 0}
	<div class="container">
		<div class="row gy-4 justify-content-center">
			{#each data.spaceships as ship}
				<div class="col-12 col-sm-6 col-md-4 col-lg-3">
					<div class="card-container">
						<div class="flip-card">
							<div class="flip-card-inner">
								<div class="flip-card-front">
									<img src={ship.bild} alt={ship.name} class="img-fluid rounded" />
								</div>
								<div class="flip-card-back p-3">
									<h5>{ship.name}</h5>
									<p><strong>Art:</strong> {ship.art}</p>

									<form method="POST" action="?/delete">
										<input type="hidden" name="id" value={ship._id} />
										<button class="btn btn-danger btn-sm w-100 mt-2" type="submit" name="intent" value="delete">Löschen</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{:else}
	<p class="text-center">Keine Raumschiffe vorhanden.</p>
{/if}
