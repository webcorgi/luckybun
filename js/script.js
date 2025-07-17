$(function () {
    // Fake Select 기능
    $('.fakeselect__flag > button').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $parent = $(this).parent();
        const $list = $parent.find('.fakeselect__flag__list');
        
        // 다른 열린 select 닫기
        $('.fakeselect__flag__list').not($list).hide();
        
        // 현재 select toggle
        $list.toggle();
    });
    
    // 옵션 선택
    $('.fakeselect__flag__list li button').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $this = $(this);
        const $parent = $this.closest('.fakeselect__flag');
        const $mainButton = $parent.find('> button');
        const $list = $parent.find('.fakeselect__flag__list');
        
        // 선택된 값으로 메인 버튼 업데이트
        const selectedImg = $this.find('img').attr('src');
        const selectedText = $this.find('span').text();
        
        $mainButton.find('img').attr('src', selectedImg);
        $mainButton.find('span').text(selectedText);
        
        // 리스트 닫기
        $list.hide();
    });
    
    // 외부 클릭시 select 닫기
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.fakeselect__flag').length) {
            $('.fakeselect__flag__list').hide();
        }
    });
    
    // 초기 상태에서 리스트 숨기기
    $('.fakeselect__flag__list').hide();
    
    // 햄버거 메뉴 기능
    $('.menu-toggle').on('click', function() {
        const $nav = $('nav');
        const $overlay = $('.nav-overlay');
        const $menuBtn = $(this);
        
        // 메뉴 토글
        $nav.toggleClass('nav-open');
        $overlay.toggleClass('active');
        $menuBtn.toggleClass('active');
    });
    
    // 오버레이 클릭시 메뉴 닫기
    $('.nav-overlay').on('click', function() {
        $('nav').removeClass('nav-open');
        $('.nav-overlay').removeClass('active');
        $('.menu-toggle').removeClass('active');
    });
    
    // 네비게이션 링크 클릭시 메뉴 닫기 (모바일에서)
    $('nav a').on('click', function() {
        if ($(window).width() <= 991) {
            $('nav').removeClass('nav-open');
            $('.nav-overlay').removeClass('active');
            $('.menu-toggle').removeClass('active');
        }
    });
    
    // 충전 타입 라디오 버튼 이벤트
    $('.chargingtype input[type="radio"]').on('change', function() {
        // 모든 충전 타입 label에서 active 클래스 제거
        $('.chargingtype label').removeClass('active');
        
        // 선택된 라디오 버튼의 부모 label에 active 클래스 추가
        if ($(this).is(':checked')) {
            $(this).parent('label').addClass('active');
        }
    });

    // 팝업 기능
    // 로그인 버튼 클릭 시 로그인 팝업 열기
    $('.btn-login').on('click', function(e) {
        e.preventDefault();
        $('.popup.login').show();
    });
    
    // 회원가입 버튼 클릭 시 회원가입 팝업 열기
    $('.btn-signup').on('click', function(e) {
        e.preventDefault();
        $('.popup.signup').show();
    });
    
    // Deposit 버튼 클릭 시 deposit 팝업 열기
    $('.btn-deposit-popup').on('click', function(e) {
        e.preventDefault();
        $('.popup.deposit').show();
    });
    
    // 팝업 닫기 버튼 클릭 시 팝업 닫기
    $('.popup__close').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.popup').hide();
    });
    
    // 팝업 배경 클릭 시 팝업 닫기
    $('.popup__bg').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.popup').hide();
    });
    
    // 로그인 팝업에서 SIGN UP 링크 클릭 시 회원가입 팝업으로 전환
    $('.popup.login .link-signup').on('click', function(e) {
        e.preventDefault();
        $('.popup.login').hide();
        $('.popup.signup').show();
    });
    
    // 회원가입 팝업에서 LOG IN 링크 클릭 시 로그인 팝업으로 전환
    $('.popup.signup .link-signup').on('click', function(e) {
        e.preventDefault();
        $('.popup.signup').hide();
        $('.popup.login').show();
    });
    
    // Deposit 팝업 탭 기능
    $('.deposit__tab button').on('click', function(e) {
        e.preventDefault();
        
        const $clickedBtn = $(this);
        const tabType = $clickedBtn.data('tab');
        
        // 모든 탭 버튼에서 active 클래스 제거
        $('.deposit__tab button').removeClass('active');
        
        // 클릭한 버튼에 active 클래스 추가
        $clickedBtn.addClass('active');
        
        // 모든 탭 내용 숨기기
        $('.tab-content').hide();
        
        // 해당 탭 내용 보이기
        if (tabType === 'deposit') {
            $('.deposit-content').show();
        } else if (tabType === 'withdraw') {
            $('.withdraw-content').show();
        }
    });
    
    // ESC 키로 팝업 닫기
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            $('.popup').hide();
        }
    });
});