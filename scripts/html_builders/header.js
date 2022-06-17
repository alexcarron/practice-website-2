import website_info from "../website_info.js";

const header = (function() {
	let header_elm = document.createElement("header"),
		img_elm = document.createElement("img"),
		h1_elm = document.createElement("h1");
	
	img_elm.src = website_info.logo;
	img_elm.alt = `${website_info.name} Logo`;
	
	h1_elm.textContent = website_info.name;
	
	header_elm.append(img_elm);
	header_elm.append(h1_elm);
	
	return header_elm
})();

export default header;