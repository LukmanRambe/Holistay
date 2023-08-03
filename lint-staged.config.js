export default {
	"*.js": ["eslint --fix", "eslint", "react-scripts test"],
	"*.jsx": ["eslint --fix", "eslint", "react-scripts test"],
	"*.json": ["prettier --write"],
};
