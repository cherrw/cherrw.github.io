export default {
	title: "喷泉播控",
	description: "手机点播，喷泉表演",

	lastUpdated: true,
	lastUpdatedText: "最近更新时间：",
	themeConfig: {
		logo: "/picture/vite.svg",
		siteTitle: "示联科技",
        outlineTitle: "本页内容：",
		// editLink: {
		// 	pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
		// },
		cleanUrls: "without-subfolders",

		head: [["meta", { name: "theme-color", content: "#3c8772" }]],

		markdown: {
			headers: {
				level: [0, 0],
			},
		},
		
		nav: nav(),
		sidebar: {
			"/guide/": sidebarGuide(),
			"/service/": sidebarService(),
			"/query/": sidebarQuery(),
		},

		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" },
			// { icon: "twitter", link: "..." },
			// You can also add custom icons by passing SVG as string:
			// {
			// 	icon: {
			// 		svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
			// 	},
			// 	link: "...",
			// },
		],
		footer: {
			message:
				'深圳示联科技有限公司<a href="https://github.com/vuejs/vitepress/blob/main/LICENSE"> </a>',
			copyright: 'Copyright © 2017-2023 <a href="https://github.com/yyx990803"></a>',
		},
	},
};

function nav() {
	return [
		{ text: "指南", link: "/guide/手机怎么控", activeMatch: "/guide/" },
		{
			text: "服务",
			items: [
				{ text: "系统升级", link: "/service/系统升级", activeMatch: "/service/" },
				{ text: "系统测试", link: "/service/系统测试", activeMatch: "/service/" },
				{ text: "系统托管", link: "/service/系统托管", activeMatch: "/service/" },
				{ text: "设计监理", link: "/service/设计监理", activeMatch: "/service/" },
			],
		},
		{
			// Title for the section.
			text: "联系",
			items: [
				{
					items: [
						{ text: "手机小程序定制", link: "/query/手机小程序定制" },
						{ text: "编写喷泉节目脚本", link: "/query/编写喷泉节目脚本" },
						{ text: "教程", link: "/query/教程" },
					],
				},
				{
					items: [
						{ text: "已建成喷泉咨询", link: "/query/已建成喷泉咨询" },
						{ text: "在建喷泉咨询", link: "/query/在建喷泉咨询" },
					],
				},
			],
		},
	];
}

function sidebarGuide() {
	return [
		{
			text: "问最多的问题:",
            // collapsible: false,
			items: [
				{ text: "手机怎么控？", link: "/guide/手机怎么控" },
				{ text: "喷泉怎么演？", link: "/guide/喷泉怎么演" },
				{ text: "什么喷泉才能被手机控制？", link: "/guide/什么喷泉才能被手机控制" },
				{ text: "还有什么玩法？", link: "/guide/还有什么玩法" },
			],
		},
        {
			text: "小程序操作步骤:",
			collapsible: false,
			items: [
				{ text: "搜索打开", link: "/guide/搜索打开" },
				{ text: "选喷泉", link: "/guide/选喷泉" },
				{ text: "选节目", link: "/guide/选节目" },
				{ text: "选场次", link: "/guide/选场次" },
                { text: "预订节目", link: "/guide/预订节目" },
                { text: "进阶玩法", link: "/guide/进阶玩法" },
                { text: "常见问题", link: "/guide/常见问题" },
			],
		},
	];
}

function sidebarService() {
	return [
		{
			text: "服务",
			collapsible: false,
			items: [
				{ text: "系统升级", link: "/service/系统升级" },
				{ text: "系统测试", link: "/service/系统测试" },
				{ text: "系统托管", link: "/service/系统托管" },
				{ text: "设计监理", link: "/service/设计监理" },
			],
		},
	];
}

function sidebarQuery() {
	return [
		{
			text: "联系",
			collapsible: false,
			items: [
				{ text: "手机小程序疑难杂症", link: "/query/手机小程序定制" },
				{ text: "编写喷泉节目脚本", link: "/query/编写喷泉节目脚本" },
				{ text: "教程", link: "/query/教程" },
				{ text: "已建成喷泉咨询", link: "/query/已建成喷泉咨询" },
				{ text: "在建喷泉咨询", link: "/query/在建喷泉咨询" },
			],
		},
	];
}
