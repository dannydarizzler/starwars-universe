<script lang="ts">
	export let data;
	import "$lib/styles/flipcard.css";
</script>

<h1 class="text-center my-4">Planet erstellen</h1>

<form method="POST" action="?/create" class="container mb-5">
	<div class="row g-3">
		<div class="col-md-6">
			<label class="form-label">Name:
				<input name="name" required class="form-control" />
			</label>
		</div>
		<div class="col-md-6">
			<label class="form-label">Spezies:
				<input name="species" class="form-control" />
			</label>
		</div>
		<div class="col-md-6">
			<label class="form-label">Art:
				<input name="climate" class="form-control" />
			</label>
		</div>
		<div class="col-md-6">
			<label class="form-label">Bild-URL:
				<input name="image" class="form-control" />
			</label>
		</div>
	</div>

	<button
		type="submit"
		name="intent"
		value="create"
		class="btn btn-warning w-100"
	>
		Planet speichern
	</button>
</form>

<hr />

<h2 class="text-center my-4">Gespeicherte Planeten</h2>

{#if data.planets.length > 0}
	<div class="container">
		<div class="row gy-4 justify-content-center">
			{#each data.planets as planet}
				<div class="col-12 col-sm-6 col-md-4 col-lg-3">
					<div class="card-container">
						<div class="flip-card">
							<div class="flip-card-inner">
								<div class="flip-card-front">
									<img src={planet.image} alt={planet.name} class="img-fluid rounded" />
								</div>
								<div class="flip-card-back p-3">
									<h5>{planet.name}</h5>
									<p><strong>Spezies:</strong> {planet.species}</p>
									<p><strong>Art:</strong> {planet.climate}</p>

									<form method="POST" action="?/delete">
										<input type="hidden" name="id" value={planet._id} />
										<button
											class="btn btn-danger btn-sm w-100 mt-2"
											type="submit"
											name="intent"
											value="delete"
										>
											Löschen
										</button>
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
	<p class="text-center">Keine Planeten vorhanden.</p>
{/if}
