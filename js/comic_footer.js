document.write(`
    <footer align="center">
        <p>© 2019 - 2022 Dr. P</p>
        <p><strong>Powered by</strong></p>
        <a href="https://rarebit.neocities.org"><img src="img/rarebitlogo_small.png" height = "30" /></a><br><br>
		<div id="donate-button-container">
			<div id="donate-button"></div>
			<script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></script>
			<script>
			PayPal.Donation.Button({
			env:'production',
			hosted_button_id:'9EH3F73343E2E',
			image: {
			src:'https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif',
			alt:'Donate with PayPal button',
			title:'PayPal - The safer, easier way to pay online!',
			}
			}).render('#donate-button');
			</script>
		</div>
    </footer>
`);