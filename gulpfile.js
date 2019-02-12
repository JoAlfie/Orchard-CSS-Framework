//assuming gulp is already installed globally
//npm init
//npm i gulp gulp-less gulp-autoprefixer gulp-cssnano gulp-rename --save-dev

const { src, dest } = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

// compile the styles.less file into styles.min.css

function compileLess(cb) {
	return src('**/styles.less')
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
		.pipe(cssnano())
		.pipe(rename('styles.min.css'))
		.pipe(dest('./assets/css/dist'));
		cb();
}

// command: gulp less
exports.less = compileLess;
