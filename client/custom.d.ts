// custom.d.ts

// Для CSS/SCSS модулей (если вы используете модули, то есть import styles from './Component.module.scss')
declare module '*.module.css' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.module.scss' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

// Для обычного импорта CSS/SCSS (например, import './styles.scss')
declare module '*.css';
declare module '*.scss';

// Для изображений и других ассетов
declare module '*.svg' {
	const content: string;
	export default content;
}

declare module '*.png' {
	const content: string;
	export default content;
}

declare module '*.jpg' {
	const content: string;
	export default content;
}

declare module '*.jpeg' {
	const content: string;
	export default content;
}

declare module '*.gif' {
	const content: string;
	export default content;
}

declare module '*.webp' {
	const content: string;
	export default content;
}

// Для других файлов, например, шрифтов
declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';