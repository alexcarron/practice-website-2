const website_info = (function() {
	let name = "Money Makers",
		description = "The website gives you advice on how to make money as quickly and simply as possible. By the time you're done exploring this website, you'll be a millionare.",
		pages = ["Home", "Schemes", "Contact Us"],
		email = "moneymakers@gmail.com",
		phone_number = "(219) 199-2999",
		footer = [
			{
				"heading": "COPYRIGHT",	
				"description": `&copy;${name} 2022`,	
			},
			{
				"heading": "PHONE NUMBER",	
				"description": `<a href="tele:${phone_number}">${phone_number}</a>`,	
			},
			{
				"heading": "EMAIL",	
				"description": `<a href="mailto:${email}">${email}</a>`,	
			},
		],
		logo = "./images/money_makers_logo.png"
		
	
	return {name, description, pages, email, phone_number, footer, logo}
})();

export default website_info;