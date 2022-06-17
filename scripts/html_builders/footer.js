import website_info from "../website_info.js";

const footer = (function() {
	let footer_elm = document.createElement("footer");
	
	for (let footer_section of website_info.footer) {
		let section_elm = document.createElement("section"),
			h2_elm = document.createElement("h2"),
			p_elm = document.createElement("p");
			
		h2_elm.textContent = footer_section.heading;
		p_elm.innerHTML = footer_section.description;
		
		section_elm.append(h2_elm);
		section_elm.append(p_elm);
		
		footer_elm.append(section_elm);
	}
	
	return footer_elm
})();

export default footer;