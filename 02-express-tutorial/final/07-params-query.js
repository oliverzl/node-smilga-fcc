//in the url: (  :  ) this is for params
// (  ?  ) this is for query

const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
	res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
	const newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});

	res.json(newProducts);
});
//---------------------- START OF PARAMS ---------------------
//after the colon, : , it is a param. need to convert string IDs to numbers.
// in this block:
//first, create const, productID and set to params
//then compare with singleProduct
app.get("/api/products/:productID", (req, res) => {
	// console.log(req)
	// console.log(req.params)
	const { productID } = req.params;
	const singleProduct = products.find((product) => product.id === Number(productID));

	//if product doesnt exist: if cannot find the product with this ID
	if (!singleProduct) {
		return res.status(404).send("Product Does Not Exist");
	}

	return res.json(singleProduct);
});

//this is an extended params. the params here for :productID do not follow the logic in the above code block.
//the word reviews in this url MUST BE correct. only productID and reviewID can change.
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
	console.log(req.params);
	res.send("goodbye world");
});

// ------------------ END OF PARAMS ----------------------------

//------------------ START OF QUERY ----------------------------
app.get("/api/v1/query", (req, res) => {
	console.log(req.query);
	const { search, limit } = req.query;
	let sortedProducts = [...products];

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}

	//IF search term returns nothing, OR limit is set to < 1
	//(basically if both queries fail or there are no queries, and the url matches /api/v1/query )

	//this is not an error, the query just returned nothing as per the query
	if (sortedProducts.length < 1) {
		// res.status(200).send('no products matched your search');
		return res.status(200).json({ success: true, data: [] });
	}
	res.status(200).json(sortedProducts);

	//IMPORTANT: MUST ONLY HAVE 1 RESPONSE.
	//in the bottom code block,
	//if the sortedProducts.length < 1, and we do not explicitly return the status, it will continue with the second res.json(sortedProducts)

	// if (sortedProducts.length < 1) {
	// 	// res.status(200).send('no products matched your search');
	// 	 res.status(200).json({ success: true, data: [] });
	// }
	// res.status(200).json(sortedProducts);
});

//------------------ END  OF QUERY ----------------------------

app.listen(5000, () => {
	console.log("Server is listening on port 5000....");
});
