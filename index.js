console.clear();

const postText = [
	'马斯卡彭蛋糕食谱',
	'马苏里拉芝士促销',
	'意大利芝士面包食谱',
	'野餐篮抽奖竞赛活动',
	'215周年纪念日 215th Birthday'
];


const socialNetworks = [
	{ slug: 'bilibili', 	name_cn: '哔哩哔哩',	  name_en: 'BiliBili' },
	{ slug: 'douyin', 		name_cn: '小红书',		   name_en: 'Xiaohongshu' },
	{ slug: 'wx-oa', 		name_cn: '微信公众号',	  name_en: 'WeChat OA' },
	{ slug: 'wx-ch', 		name_cn: '微信视频号',	  name_en: 'WeChat Channel' },
	{ slug: 'weibo', 		name_cn: '微博',			name_en: 'Weibo' },
	{ slug: 'kuaishou', 	name_cn: '快手',			name_en: 'Kuaishou' },
	{ slug: 'douyin', 		name_cn: '抖音',			name_en: 'Douyin' }
];

const postStatuses = [
	'draft',
	'need-approval',
	'scheduled',
	'published', // DAY BACKGROUND COLOR
	'unapproved',
	'failed'
];



// REFERENCES TO ELEMENTS
// -------------------------------------------------------------------------------------------------

const calendar = document.getElementById( 'calendar' );
const calHighlight = document.getElementById( 'calHighlight' );



// LOOP NETWORKS & STATUSES
// -------------------------------------------------------------------------------------------------

socialNetworks.forEach( network => {
	
	postStatuses.forEach( status => {
		
		console.log( network.slug + ' - ' + status );
		
	});
	
});



// MICRO POST COMPONENT
// -------------------------------------------------------------------------------------------------

const microPost = ( network, status, paidSocial, campaign ) => {
	
	
	
	
	
};





// DISPLAY DAY / MONTH FRAME
// -------------------------------------------------------------------------------------------------

//const calendar = document.getElementById( 'calendar' );

const weekHighlight = document.getElementById( 'weekHighlight' );

//const calHighlight = document.getElementById( 'calHighlight' );

const toggleHover = function( e ) {
	
	if ( ( e.type === 'mouseover' || e.type === 'mouseout' ) && e.target.classList.contains( 'cal-day' ) ) {
		
		e.target.classList.toggle( 'cal-day-hover', e.type === 'mouseover' );
		
	} else if ( e.type === 'mouseenter' && e.target.classList.contains( 'cal-row-label' ) ) {

		
		let weekPos = e.target.getBoundingClientRect();
		
		weekHighlight.style.height = weekPos.height + 'px';
		weekHighlight.style.transform = 'translateY( ' + ( weekPos.top - 34 ) + 'px )';
		weekHighlight.classList.add( 'week-highlight-visible' );
		

	} else if ( e.type === 'mouseleave' && e.target.classList.contains( 'cal-row-label' ) ) {

		weekHighlight.classList.remove( 'week-highlight-visible' );
		
	}
	
	
	
};

// calendar.addEventListener( 'mouseover', toggleHover, true );

// calendar.addEventListener( 'mouseout', toggleHover, true );



// calendar.addEventListener( 'mouseenter', toggleHover, true );

// calendar.addEventListener( 'mouseleave', toggleHover, true );// javascript