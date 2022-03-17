const http = require("https");
const title = "Wu-Tang Clan Ain't Nuthing Ta F' Wit";
const artist = "Wu-Tang Clan";
const options = {
	"method": "GET",
	"hostname": "powerlyrics.p.rapidapi.com",
	"port": null,
	"path": `/getlyricsfromtitleandartist?title=${encodeURIComponent(artist)}&artist=${encodeURIComponent(title)}`,
	"headers": {
		//get key from RapidAPI
		"x-rapidapi-key": "GET KEY FROM RAPIDAPI",
		"x-rapidapi-host": "powerlyrics.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
