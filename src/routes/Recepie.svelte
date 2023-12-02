<script>
	import { spring } from 'svelte/motion';


</script>

<div class="recipie">
	<div class="imageWrapper"></div>
	<img src="https://images.recept.se/images/recipes/kycklingsteak-med-bearnaisesas-och-rostad-potatis_7050.jpg?fit=crop&crop=focalpoint&auto=format&fp-x=0.5&fp-y=0.53386722887728&fp-z=1&w=800&h=570&auto=format"/>
	<div class="price">10kr</div>
	<div class="title">
		Kyckling bea & potatis
	</div>
	<div class="instructions">
		- Kyckling <br>
		- Bea <br>
		- Potatis <br>
	</div>
</div>

<style>
	.recipie {
		display: flex;
		flex-direction: column;
		margin: 1rem 0;
		max-width: 320px;
		border-radius: 8px;
		background-color: #fff;
		box-shadow: 0 0 6px 0px rgba(0, 0, 0, 0.5);
		position: relative;
	}

	.title {
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: flex-end;
		background-color: rgb(67, 195, 223);
		width: 100%;
		height: 20px;
		padding: 12px 0 12px 0;
		border-top: 2px solid rgb(46 140 160);
		border-bottom: 2px solid rgb(119, 223, 244);
	}

	.instructions {
		padding: 12px;
	}


	.price {
		position: absolute;
		right: 0%;
		bottom: 0%;
		transform: translate(-50%, -50%);
	}
	
</style>
