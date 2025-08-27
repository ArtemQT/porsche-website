// custom.d.ts

/// Для модулей CSS/SCSS
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

// Для видео файлов
declare module '*.mp4' {
	const content: string;
	export default content;
}

// Для файлов формата jfif
declare module '*.jfif' {
	const content: string;
	export default content;
}

// Для других файлов, например, шрифтов
declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';