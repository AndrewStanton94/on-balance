<template>
	<section class="account">
		<header>
			<h3 v-text="accountName">Account name</h3>
			<label
				>Account name <input type="text" v-model="accountName"
			/></label>
		</header>
		<label>
			Account types:
			<select v-model="accountType">
				<option selected value="basic">basic</option>
				<option value="regularSaver">Regular Saver</option>
				<option value="capped">Capped</option>
			</select>
		</label>

		<fieldset v-if="accountType !== 'basic'">
			<legend>Balance constraints</legend>
			<label
				>Min balance:
				<input type="number" name="min" v-model.number="balance.min" />
			</label>

			<label
				>Max balance:
				<input type="number" name="max" v-model.number="balance.max" />
			</label>

			<label
				>Monthly payment limit:
				<input
					type="number"
					name="paymentLimit"
					v-model.number="balance.paymentLimit"
				/>
			</label>
		</fieldset>

		<fieldset>
			<legend>Interest payments</legend>
			<label
				>Interest rate:
				<input
					type="number"
					name="interestRate"
					v-model.number="interest.rate"
				/>
			</label>
			<label>
				Calculated daily, paid
				<select v-model="interest.paymentFrequency">
					<option value="monthly">Monthly</option>
					<option value="annually">Annually</option>
				</select>
			</label>
		</fieldset>
	</section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BankAccount extends Vue {
	public data() {
		return {
			accountName: '',
			accountType: '',
			balance: {
				min: 0,
				max: 0,
				paymentLimit: 0,
			},
			interest: {
				rate: 0,
				paymentFrequency: '',
			},
		};
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.account {
	margin: 1rem;
	border: 1px solid #f00;
}
fieldset {
	margin: 1rem;
}
label {
	display: block;
}
</style>
