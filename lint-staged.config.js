module.exports = {
	"*.{js,jsx}": ["eslint", "eslint"],
	"**/*.test.js": ["eslint", "react-scripts test --watchAll=false"],
	"*.json": ["prettier --write"],
};
