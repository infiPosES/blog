window.onload = function() {
//포트폴리오 내용 변경
	let worksContImg = document.getElementById('worksContImg');
	let descTitle = document.getElementById('descTitle');
	let descSkills = document.getElementById('descSkills');
	let descColor = document.getElementById('descColor');
	let btnLinkPage = document.getElementById('btnLinkPage'); //페이지 링크
	let btnDocDown = document.getElementById('btnDocDown'); //문서 다운로드 버튼
	function worksChangeDesc(title, inSkill, imgUrl, color, pageLink, docDown) {
		this.title = title;
		this.inSkill = inSkill;
		this.imgUrl = imgUrl;
		this.color = color;
		this.pageLink = pageLink;
		this.docDown = docDown;
		this.changingDesc = function() {
			worksContImg.style.backgroundImage = 'url(./img/'+this.imgUrl+')';
			descTitle.innerHTML = this.title;
			descSkills.innerHTML = "<p>SKILL</p>"+this.inSkill;
			descColor.innerHTML = "<p>COLOR</p>"+this.color;
			btnLinkPage.setAttribute('href', this.pageLink);
			//btnDocDown.setAttribute('href', "./document/doc_"+this.docDown+".pdf");
			btnDocDown.setAttribute('href', "./downloadDoc.php?docName="+this.docDown);
		}
	}
	//works title
	const worksTitle = ['전화번호부', '이벤트 페이지', '행렬계산기', 'SHOWBOX:조별과제', '상세페이지: 지갑', '상세페이지: 핸드크림', '상세페이지: 손목시계'];
	//works skill
	const worksSkills = [
		'<img class="skillIcon" src="./img/sk_html.png" alt="html"><img class="skillIcon" src="./img/sk_css.png" alt="css"><img class="skillIcon" src="./img/sk_scss.png" alt="scss"><img class="skillIcon" src="./img/sk_js.png" alt="js"><img class="skillIcon" src="./img/sk_jQuery.png" alt="jQuery"><img class="skillIcon" src="./img/sk_mysql.png" alt="mysql"><img class="skillIcon" src="./img/sk_php.png" alt="php"><img class="skillIcon" src="./img/sk_ai.png" alt="illustrator">', //전화번호부
		'<img class="skillIcon" src="./img/sk_html.png" alt="html"><img class="skillIcon" src="./img/sk_css.png" alt="css"><img class="skillIcon" src="./img/sk_scss.png" alt="scss"><img class="skillIcon" src="./img/sk_js.png" alt="js"><img class="skillIcon" src="./img/sk_jQuery.png" alt="jQuery">', //이벤트 페이지
		'<img class="skillIcon" src="./img/sk_html.png" alt="html"><img class="skillIcon" src="./img/sk_css.png" alt="css"><img class="skillIcon" src="./img/sk_scss.png" alt="scss"><img class="skillIcon" src="./img/sk_js.png" alt="js">', //행렬계산기
		'<img class="skillIcon" src="./img/sk_html.png" alt="html"><img class="skillIcon" src="./img/sk_css.png" alt="css"><img class="skillIcon" src="./img/sk_scss.png" alt="scss"><img class="skillIcon" src="./img/sk_js.png" alt="js">', //조별과제 쇼박스
		'<img class="skillIcon" src="./img/sk_ai.png" alt="illustrator"><img class="skillIcon" src="./img/sk_ps.png" alt="photoshop">', //상세 지갑
		'<img class="skillIcon" src="./img/sk_ai.png" alt="illustrator"><img class="skillIcon" src="./img/sk_ps.png" alt="photoshop">', //상세 핸드크림
		'<img class="skillIcon" src="./img/sk_ai.png" alt="illustrator"><img class="skillIcon" src="./img/sk_ps.png" alt="photoshop">' //상세 손목시계
	];
	//works img
	const worksImgUrl = ['m_contactBook.png', 'm_eventpage.png', 'm_matrix.png', 'm_showbox.png','wallet_detail.png', 'handcream_detail.png','watch_detail.png'];
	//works color
	const worksColor = [
		'<div class="wColor wColor1"></div><div class="wColor wColor2"></div>', //전화번호부
		'<div class="wColor wColor3"></div><div class="wColor wColor4"></div><div class="wColor wColor5"></div><div class="wColor wColor6"></div><div class="wColor wColor7"></div>', //이벤트 페이지
		'<div class="wColor wColor8"></div><div class="wColor wColor9"></div>', //행렬계산기
		'<div class="wColor wColor10"></div>', //조별과제 쇼박스
		'<div class="wColor wColor11"></div><div class="wColor wColor12"></div>', //상세 지갑
		'<div class="wColor wColor13"></div><div class="wColor wColor14"></div><div class="wColor wColor15"></div><div class="wColor wColor16"></div>', //상세 핸드크림
		'<div class="wColor wColor17"></div><div class="wColor wColor18"></div>' //상세 손목시계
	];
	//works link
	const worksLocation = [
		'http://pager.kr/~c10st06/Portfolio/addressbook/main.php', //전화번호부
		'http://pager.kr/~c10st06/Portfolio/eventpage/seodipe.html', //이벤트 페이지
		'http://pager.kr/~c10st06/Portfolio/matrix/calculator.html', //행렬계산기
		'http://pager.kr/~c10st06/team1/main.html', //조별과제 쇼박스
		'http://pager.kr/~c10st06/Portfolio/blog2/document/wallet_detail.jpg', //상세 지갑
		'http://pager.kr/~c10st06/Portfolio/blog2/document/handcream_detail.jpg', //상세 핸드크림
		'http://pager.kr/~c10st06/Portfolio/blog2/document/watch_detail.jpg'//상세 손목시계
	];
	//works filedownload filename
	const worksDocDown = ['doc_contactBook.pdf', 'doc_eventpage.pdf', 'doc_matrix.pdf', 'do_showBox.pdf','wallet_detail.jpg','handcream_detail.jpg','watch_detail.jpg'];
	const worksObj = [];
            let i=0;
	//포트폴리오별 객체 생성
        while(i<worksImgUrl.length){
        	worksObj[i] = new worksChangeDesc(worksTitle[i], worksSkills[i], worksImgUrl[i], worksColor[i], worksLocation[i], worksDocDown[i]);
        	i++;
        }
	//포트폴리오 내용 삽입 함수실행
	$('#spotContactBox').click(function() {
		worksObj[0].changingDesc();
		btnLinkPage.style.visibility="visible";
		btnDocDown.innerHTML="문서 다운로드";
	});
	$('#spotEventPage').click(function() {
		worksObj[1].changingDesc();
		btnLinkPage.style.visibility="visible";
		btnDocDown.innerHTML="문서 다운로드";
	});
	$('#spotMatrix').click(function() {
		worksObj[2].changingDesc();
		btnLinkPage.style.visibility="visible";
		btnDocDown.innerHTML="문서 다운로드";
	});
	$('#spotShowBox').click(function() {
		worksObj[3].changingDesc();
		btnLinkPage.style.visibility="visible";
		btnDocDown.innerHTML="문서 다운로드";
	});
	$('#spotWallet').click(function() {
		worksObj[4].changingDesc();
		btnLinkPage.style.visibility="hidden";
		btnDocDown.innerHTML="파일 다운로드";
	});
	$('#spotHandC').click(function() {
		worksObj[5].changingDesc();
		btnLinkPage.style.visibility="hidden";
		btnDocDown.innerHTML="파일 다운로드";
	});
	$('#spotWatch').click(function() {
		worksObj[6].changingDesc();
		btnLinkPage.style.visibility="hidden";
		btnDocDown.innerHTML="파일 다운로드";
	});
	//profileName Text삽입
	let j = 0;
	let nameText = "김은숙 EUNSOOK KIM";
	let phoneText = "010-4249-3770";
	let emailText = "ahr01437@naver.com";
	let introText = "안녕하세요! 오늘을 사는 김은숙입니다 :)";
	let textSpeed = 200;
	let aboutIntro = document.getElementById('aboutIntro');
	let profilePhone = document.getElementById('profilePhone');
	let profileEmail = document.getElementById('profileEmail');
	let profileName = document.getElementById('profileName');
	function textWriter() {
		if (j < introText.length) {
			aboutIntro.innerHTML += introText.charAt(j);
			j++
			setTimeout(textWriter, textSpeed);
		}
	}
	//mapSpot: works icon 클릭 시 창올림 top:0
	$('.mapSpot').click(function() {
		$('.worksBox').animate({top:'0%'}, 500);
	});
	//spotMe: about icon 클릭 시 창올림 top:0
	$('.spotMe').click(function() {
		$('.aboutBox').animate({top:'0%'}, 500);
		if ($('.aboutBox').css('top', '0%')) {
			textWriter();
		}
	});
	//closeBtn클릭 시 창닫힘 top: 100%
	$('.closeBtn').click(function() {
		$('.worksBox').animate({top:'100%'}, 500);
		$('.aboutBox').animate({top:'100%'}, 500);
	});
	//skill click시 게이지값
	$('.skills').click(function() {
		$('.skillGage').html('<div class="inGage"></div>');
	});
	$('.skPs').click(function() { 
		$('.inGage').animate({'width':'85%'}, 300); 
	//	$('.inGage').html('85%');
	});
	$('.skAi').click(function() { 
		$('.inGage').animate({'width':'87%'}, 300); 
	//	$('.inGage').html('87%');
	});
	$('.skHtml').click(function() { 
		$('.inGage').animate({'width':'95%'}, 300); 
	//	$('.inGage').html('95%');
	});
	$('.skCss').click(function() { 
		$('.inGage').animate({'width':'92%'}, 300); 
	//	$('.inGage').html('92%');
	});
	$('.skScss').click(function() { 
		$('.inGage').animate({'width':'90%'}, 300); 
	//	$('.inGage').html('90%');
	});
	$('.skJs').click(function() { 
		$('.inGage').animate({'width':'88%'}, 300); 
	//	$('.inGage').html('88%');
	});
	$('.skJq').click(function() { 
		$('.inGage').animate({'width':'85%'}, 300); 
	//	$('.inGage').html('85%');
	});
	$('.skJson').click(function() { 
		$('.inGage').animate({'width':'83%'}, 300); 
	//	$('.inGage').html('83%');
	});
	$('.skPhp').click(function() { 
		$('.inGage').animate({'width':'80%'}, 300); 
	//	$('.inGage').html('80%');
	});
	$('.skmySql').click(function() { 
		$('.inGage').animate({'width':'84%'}, 300); 
	//	$('.inGage').html('84%');
	});
	$('.skAjax').click(function() { 
		$('.inGage').animate({'width':'82%'}, 300); 
	//	$('.inGage').html('82%');
	});
	$('.skNodejs').click(function() { 
		$('.inGage').animate({'width':'83%'}, 300); 
	//	$('.inGage').html('83%');
	});
	$('.skVuejs').click(function() { 
		$('.inGage').animate({'width':'80%'}, 300); 
	//	$('.inGage').html('80%');
	});
	$('.skPug').click(function() { 
		$('.inGage').animate({'width':'85%'}, 300); 
	//	$('.inGage').html('85%');
	});
}
