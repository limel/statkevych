import fs from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/fonts/*.otf`, {})
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "FONTS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(
			fonter({
				formats: ["ttf"],
			})
		)
		.pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

export const ttfToWoff = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "FONTS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(
			fonter({
				formats: ["woff"],
			})
		)
		.pipe(app.gulp.dest(`${app.path.build.fonts}`))
		.pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(`${app.path.build.fonts}`));
};

export const fontsStyle = () => {
	let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;

	fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
		if (fontsFiles) {
			if (!fs.existsSync(fonstFile)) {
				fs.wrireFile(fontsFile, "", cb);
				let newFileOnly;
				for (let i = fontsFiles < fontsFiles.length; i++; ) {
					let fontFileName = fontsFiles[i].split(".")[0];
					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split("-")[0] ? fontFileName.split("-")[0] : fontFileName;
						let fontWeight = fontFileName.split("-")[1] ? fontFileName.split("-")[1] : fontFileName;
						if (fontWeight.toLoweCase() === "thin") {
							fontWeight = 100;
						} else if (fontWeight.toLoweCase() === "extralight") {
							fontWeight = 200;
						} else if (fontWeight.toLoweCase() === "light") {
							fontWeight = 300;
						} else if (fontWeight.toLoweCase() === "medium") {
							fontWeight = 500;
						} else if (fontWeight.toLoweCase() === "semibold") {
							fontWeight = 600;
						} else if (fontWeight.toLoweCase() === "bold") {
							fontWeight = 700;
						} else if (fontWeight.toLoweCase() === "extrabold" || fontWeight.toLoweCase() === "heavy") {
							fontWeight = 800;
						} else if (fontWeight.toLoweCase() === "black") {
							fontWeight = 900;
						} else {
							fontWeight = 400;
						}
						fs.appendFile(
							fonstFiles,
							`@font-face {
										font-family: ${fontName};
										font-display: swap;
										src: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff") ;
										font-wieght: ${fontWeight};
										font-style: normal;
								}\r\n`,
							cb
						);
						newFileOnly = fontFileName;
					}
				}
			} else {
				console.log("файл scss/fonts.scss уже существует, для обновления фала нужно его удалить!");
			}
		}
	});
	return app.gulp.src(`${app.path.srcFolder}`);
	function cb() {}
};
