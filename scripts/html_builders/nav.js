import website_info from "../website_info.js";

const nav = (function() {
	let nav_elm = document.createElement("nav");
	
	for (let page of website_info.pages) {
		let a_elm = document.createElement("a");
		
		if (page !== "Home") {
			a_elm.href = `${page.toLowerCase()}.html`.replace(" ", "_")
		}
		else {
			a_elm.href = `index.html`
		}
		
		a_elm.textContent = page
		
		nav_elm.append(a_elm);
	}
	
	return nav_elm
})();

export default nav;