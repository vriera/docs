import React from "react"

// theme.config.js
export default {
	projectLink: "https://github.com/talo-pay/docs", // GitHub link in the navbar
	docsRepositoryBase: "https://github.com/talo-pay/docs", // base URL for the docs repository
	titleSuffix: "Talo Docs",
	nextLinks: true,
	prevLinks: true,
	search: true,
	customSearch: null, // customizable, you can use algolia for example
	darkMode: true,
	footer: true,
	footerText: `MIT ${new Date().getFullYear()} © talo`,
	footerEditLink: `Edit this page on GitHub`,
	logo: (
		<React.Fragment>
			<div>
				{/* {document.documentElement.classList.contains("dark") ? (
					<img
						style={{ width: 173, height: 93, paddingTop: 7, paddingBottom: 7 }}
						src="/talo_logo_dark.png"
					/>
				) : ( */}
				<svg
					style={{ paddingTop: 7, paddingBottom: 7 }}
					width="173"
					height="93"
					viewBox="0 0 173 93"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M64.5038 77.2166C72.5904 77.2166 79.1458 70.6805 79.1458 62.6178C79.1458 54.5552 72.5904 48.0191 64.5038 48.0191C56.4173 48.0191 49.8618 54.5552 49.8618 62.6178C49.8618 70.6805 56.4173 77.2166 64.5038 77.2166Z"
						fill="#79EEA2"
					/>
					<path
						d="M114.488 52.242C122.575 52.242 129.13 45.7059 129.13 37.6432C129.13 29.5806 122.575 23.0445 114.488 23.0445C106.402 23.0445 99.8462 29.5806 99.8462 37.6432C99.8462 45.7059 106.402 52.242 114.488 52.242Z"
						fill="#79EEA2"
					/>
					<path
						d="M46.3229 64.0527C44.47 64.2921 42.5878 64.1602 40.7867 63.6646C39.2844 63.2376 37.9142 62.4403 36.8023 61.3464C35.7004 60.2317 34.8668 58.882 34.3645 57.3993C33.7897 55.7025 33.5091 53.9204 33.5348 52.1296V34.4109L40.843 28.452V34.3548H46.3229V40.8091H40.843V52.1858C40.843 54.1704 41.2954 55.5678 42.2002 56.378C43.1015 57.1899 44.4792 57.5422 46.2973 57.4299L46.3229 64.0527Z"
						fill="#252626"
					/>
					<path
						d="M85.1276 23.0445H92.4307V52.1858C92.4307 54.2079 92.8882 55.6155 93.8032 56.4087C94.7148 57.2001 96.0873 57.5423 97.9003 57.4299V64.068C96.0474 64.3073 94.1652 64.1754 92.3641 63.68C90.8681 63.2542 89.4999 62.4687 88.3797 61.3924C87.2766 60.2895 86.4441 58.9474 85.947 57.4708C85.3722 55.774 85.0916 53.9919 85.1173 52.2011L85.1276 23.0445Z"
						fill="#252626"
					/>
					<path
						d="M114.463 34.3548C116.385 34.3415 118.289 34.7257 120.055 35.4833C121.767 36.2257 123.317 37.2941 124.618 38.6288C125.946 40.0004 127 41.6121 127.722 43.3776C128.488 45.2617 128.872 47.2782 128.854 49.311C128.874 51.3341 128.49 53.341 127.722 55.2138C127.002 56.9635 125.948 58.5572 124.618 59.9065C123.313 61.23 121.764 62.2895 120.055 63.0264C118.285 63.7713 116.384 64.155 114.463 64.155C112.542 64.155 110.64 63.7713 108.87 63.0264C107.167 62.2929 105.625 61.2328 104.333 59.9065C103.019 58.5504 101.977 56.958 101.26 55.2138C100.49 53.3417 100.105 51.3343 100.128 49.311C100.084 45.3408 101.592 41.5095 104.333 38.6288C105.622 37.2915 107.164 36.2224 108.87 35.4833C110.636 34.7257 112.54 34.3415 114.463 34.3548ZM114.488 57.481C115.428 57.4868 116.358 57.2881 117.213 56.8989C118.069 56.5079 118.834 55.9446 119.461 55.2445C120.132 54.4989 120.653 53.6323 120.998 52.6913C121.38 51.6304 121.569 50.5098 121.556 49.3825C121.565 48.2355 121.377 47.0954 120.998 46.0124C120.659 45.0411 120.138 44.1433 119.461 43.3673C118.838 42.6491 118.072 42.0668 117.213 41.6568C116.363 41.2499 115.431 41.042 114.488 41.0491C113.538 41.0447 112.598 41.2523 111.738 41.6568C110.873 42.0575 110.106 42.6412 109.49 43.3673C108.832 44.1505 108.324 45.0469 107.989 46.0124C107.608 47.0947 107.419 48.2353 107.431 49.3825C107.415 50.51 107.604 51.6311 107.989 52.6913C108.329 53.6264 108.838 54.4916 109.49 55.2445C110.11 55.9524 110.877 56.517 111.738 56.8989C112.603 57.2859 113.54 57.4844 114.488 57.481Z"
						fill="#252626"
					/>
					<path
						d="M79.1459 64.1548H72.2116V60.4834C71.153 61.6646 69.8374 62.5886 68.3654 63.1846C66.8269 63.8059 65.1805 64.1182 63.5206 64.1038C61.6862 64.113 59.8725 63.7172 58.2097 62.9446C56.5663 62.1836 55.089 61.1079 53.8617 59.7788C51.2505 56.9277 49.8179 53.1972 49.8517 49.3365C49.8392 47.3492 50.2041 45.3775 50.9271 43.5256C51.9899 40.7983 53.8545 38.4549 56.2763 36.8026C58.6981 35.1502 61.5642 34.2661 64.4988 34.2661C67.4334 34.2661 70.2994 35.1502 72.7213 36.8026C75.1431 38.4549 77.0076 40.7983 78.0704 43.5256C78.7935 45.3775 79.1584 47.3492 79.1459 49.3365V64.1548ZM71.8428 49.3467C71.8514 48.2574 71.6533 47.1763 71.259 46.1604C70.8938 45.2075 70.3556 44.3299 69.6714 43.5716C69.0149 42.8489 68.2234 42.261 67.3412 41.8405C66.4642 41.4186 65.5033 41.1987 64.5295 41.1971C63.5526 41.1936 62.5864 41.4009 61.6974 41.8048C60.8108 42.2068 60.016 42.7855 59.3621 43.5052C58.6811 44.2651 58.1449 45.1424 57.7795 46.094C57.3824 47.1287 57.1843 48.2287 57.1957 49.3365C57.1856 50.4193 57.3838 51.494 57.7795 52.5024C58.1426 53.4444 58.6793 54.3104 59.3621 55.0555C60.021 55.7645 60.8148 56.3356 61.6974 56.7354C62.5868 57.1377 63.5529 57.3433 64.5295 57.338C65.5111 57.3434 66.4812 57.127 67.3668 56.7048C68.2468 56.292 69.0382 55.7127 69.697 54.9993C70.383 54.2558 70.9217 53.3895 71.2846 52.4462C71.6688 51.4549 71.8583 50.3992 71.8428 49.3365V49.3467Z"
						fill="#252626"
					/>
					<path
						d="M136.551 64.1548H133.991C134.134 63.0059 134.267 61.9387 134.431 60.5804C133.407 61.3821 132.526 62.0408 131.578 62.7659L130.262 60.5447L133.653 59.1558L130.272 57.7465L131.568 55.5099L134.436 57.726C134.277 56.4597 134.134 55.3516 133.985 54.1517H136.546C136.403 55.3108 136.259 56.4239 136.101 57.6954L138.963 55.4895L140.269 57.7158L136.9 59.12L140.259 60.5141L138.969 62.7608L136.111 60.5294C136.27 61.857 136.403 62.9395 136.551 64.1548Z"
						fill="#252626"
					/>
				</svg>
				{/* )} */}
			</div>
			<span>Talo Docs</span>
		</React.Fragment>
	),
	head: (
		<>
			<title>Talo Docs</title>
			<link
				rel="shortcut icon"
				href="/talo_isologo.svg"
				type="icon/png"
				sizes="32x32"
			></link>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta
				name="description"
				content="Documentation for talo cryptocurrencies integrations"
			/>
			<meta name="og:title" content="Talo Docs" />
		</>
	),
}
